import React from 'react';

const BookingCard = ({book,deletedata,updatecode,index}) => {
let {_id,name,email,title,price,status}=book;

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th> option</th>
        <th> status</th>
      </tr>
    </thead>
    <tbody>
   
      <tr>
        
        <th>{index+1}</th>
        <th>{_id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{price}</td>
        <td><button className="btn btn-circle" onClick={()=> deletedata(book._id)}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
    <td>{
        status==='approve'? <span>Approved</span>:
        <button className="btn " onClick={()=> updatecode(book._id)} >
approve
</button>}
</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default BookingCard;