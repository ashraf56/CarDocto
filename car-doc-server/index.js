const express = require('express')
const app = express()
const port = process.env.PORT|| 5000;
let cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
let jwt = require('jsonwebtoken');


app.use(cors())
app.use(express.json())


const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5nj1o0g.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
  }
});

let verifyJWT=(req,res,next)=>{
let authorization=req.headers.authorization;
if (!authorization) {
  return res.status(401).send({error:true,
  message:'autz not found'
  })

}
let token=authorization.split(' ')[1];
 
jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (error,decoded) =>{
if (error) {
  return res.status(401).send({error:true,
    message:'autz not valid'
    })
}
req.decoded=decoded;
next();

})
}


async function run() {
  try {
    
//await client.connect();

let carCollection=client.db('userDoctor').collection('services')
let orderCollection=client.db('userDoctor').collection('booking')

//jwt 

app.post('/jwt', (req,res)=>{
let user=req.body;
console.log(user);
let token=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, 
  {
    expiresIn:'1123h'
  }
  )
res.send({token})
})



app.get('/service' , async (req,res)=>{
  let sort=req.query.sort;
  let search=req.query.search;
//let query={}
// let query={
//  price:{$lt:100}
// }
let query={
  title:{$regex:search,$options:'i'}
}
let options={
  sort:{'price': sort === 'asc'? 1 : -1 }
}
let cursor= carCollection.find(query,options);
let result= await cursor.toArray()
res.send(result)

})

app.get('/service/:id' ,async(req,res)=>{
    let ids= req.params.id;
    let query={_id: new ObjectId(ids)}
    const options = {
        projection: { _id: 1,
             title: 1,
              price: 1 , 
               service_id:1  },
      };
    let result= await carCollection.findOne(query , options)

    res.send(result)
})

app.post('/book' , async (req,res)=>{
    let ff=req.body;
    let result= await orderCollection.insertOne(ff)
    res.send(result)
})
app.get('/book' ,verifyJWT, async (req,res)=>{
  let decoded=req.decoded
  if (decoded.email !== req.query.email) {
    res.status(403).send({error:true,
      message:'autz not valid'
      })
  }
  let query={}
  if (req.query?.email) {
    query={ email: req.query.email }
  }
    let result = await orderCollection.find(query).toArray();
    res.send(result)
})


app.delete('/book/:id' , async (req,res)=>{
;
let allid=req.params.id;
let q={_id: new ObjectId(allid)}
let result= await orderCollection.deleteOne(q)
res.send(result)
})


app.patch('/book/:id',async (req,res)=>{
let id=req.params.id;
let Ubooks=req.body;
console.log(Ubooks);
const filter = { _id: new ObjectId(id) };
const updateDoc = {
  $set: {
   
status:Ubooks.status

  },
};

const result = await orderCollection.updateOne(filter, updateDoc);

res.send(result);
})

  
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.log);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})