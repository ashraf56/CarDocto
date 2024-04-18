import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './Authentication/AuthProvider';

const Chekout = () => {
    let{user}=useContext(AuthContext)
    let alldata=useLoaderData();
    let{_id, price ,title }=alldata;
let placeorder=(e)=>{
    e.preventDefault();
    let f= e.target;
    let name= f.name.value;
    let email= f.email.value;
    let price =f.price.value;
    let date=f.date.value;
    let order={
       name,
        email, price: price,
        service_id: _id,
        date:date
    }
console.log(order);

fetch('https://car-doc-server-five.vercel.app/book',{
    method:"POST", headers:{ 'content-type': "application/json"},body:JSON.stringify(order)
})
.then(res=> res.json())
.then(data => {
    console.log(data);
    f.reset();
})
    
}

    return (
        <div>
            <h1>check{alldata.title}</h1>


            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={placeorder}>
        <div className="form-control">
          <input type="text" placeholder="name" name='name' defaultValue={user?.displayName}   className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="price" name='price'  defaultValue={'$'+ price} className="input input-bordered" />
        </div>
        <div className="form-control">
    
          <input type="email" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="date"  name='date' className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">order</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Chekout;