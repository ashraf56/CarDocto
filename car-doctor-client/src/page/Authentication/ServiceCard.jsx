import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({services}) => {

let {_id ,price,img,description,title}=services

    return (
        <div>
          <div className="card w-96 h-full border-transparent bg-base-100 shadow-2xl">

          <figure className="px-10 pt-10">
  
  <img src={img} className='h-full rounded-xl' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <div className="card-actions justify-end">
        <Link to={`/check/${_id}`}>
          <button className="btn btn-primary">Buy Now</button>
        </Link>
    
    </div>
  </div>
</div>  
        </div>
    );
};

export default ServiceCard;