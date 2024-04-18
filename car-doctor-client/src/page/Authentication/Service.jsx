import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {

let [user ,setuser]=useState([])
let[asc,setasc]=useState(true)
let search=useRef(null);
let[Search,setSearch]=useState('')

useEffect(()=>{
fetch(`http://localhost:3000/service?search=${Search}&sort=${asc ? 'asc': 'desc'}`)
.then(res=> res.json())
.then(data => {
    setuser(data)
})


},[asc,Search])


let handleClick=(e)=> {
    ;
    console.log(search.current.value);
setSearch(search.current.value)
  }
    return (
        <div>
           <h1>Ser {user.length}</h1> 
           <div className="form-control">
  <div className="input-group">
    <input ref={search} type="text" placeholder="Search…" className="input input-bordered" />
    <button 
    onClick={handleClick}
    className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
           <button className='btn'
           onClick={()=> setasc(!asc)}
           >
            {asc ? 'Price high to low' : 'Price low to high'}
           </button>

<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
{
    user.map(services=> <ServiceCard
    key={services._id}
    services={services}
    ></ServiceCard>)
}
</div>

        </div>
    );
};

export default Service;