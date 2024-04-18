import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import BookingCard from './BookingCard';
import { useNavigate } from 'react-router-dom';

const Boking = () => {
let {user}=useContext(AuthContext);
let navigate=useNavigate()
let [booking,setbooking]=useState([])    

    let url=`https://car-doc-server-five.vercel.app/book?email=${user?.email}`

useEffect(()=>{

fetch(url,{
method:"GET",
headers:{
    authorization:`Bearer ${localStorage.getItem('car-token')}`
}

}).then(res=> res.json())
.then(data=> {
    console.log(data);
    if (!data.error) {
         setbooking(data)
    }else{
navigate('/')
    }
   
})

},[])

let deletedata=id=>{

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
fetch(`https://car-doc-server-five.vercel.app/book/${id}`,{
    method:"DELETE"
}).then(res=> res.json())
.then(d=> {
console.log(d);
    if (d.deletedCount>0) {
         Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
    
          let remain= booking.filter(bk => bk._id !== id)
    setbooking(remain)
        }

})     
   }
      })

}


let updatecode=id=>{

    fetch(`https://car-doc-server-five.vercel.app/book/${id}`,{
        method:"PATCH",
        headers:{
            'content-type': "application/json"
        },
        body:JSON.stringify({status:'approve'})
    }).then(res=> res.json())
    .then(d=> {
    console.log(d);
       if (d.modifiedCount>0) {
        
let baki=booking.filter(bk=> bk._id !== id);
let uitem=booking.find(bk=> bk._id===id);
uitem.status='approve'
let newitem=[uitem,...baki]

setbooking(newitem)
       }

    })     
    
}


    return (
        <div>
        <h1>DAata from -= {booking.length}</h1>




{
    booking.map((book ,index)=> 
<BookingCard
key={book._id}
book={book}
index={index}
deletedata={deletedata}
updatecode={updatecode}
></BookingCard>



    )
}

        </div>
    );
};

export default Boking;