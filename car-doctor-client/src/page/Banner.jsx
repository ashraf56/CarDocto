import React from 'react';

const Banner = () => {

let img={
    i:'https://img.freepik.com/free-photo/blue-jeep-parking-public-zone_114579-4042.jpg?w=740&t=st=1683950815~exp=1683951415~hmac=989c08cad4798e4810e99fe3457c76c3d10a8e6957b18ab2378858b0baf28ac1',
    
}

    return (
        <div className='' >
    <div className="hero min-h-screen " style={{ backgroundImage: `url("https://img.freepik.com/free-photo/blue-jeep-parking-public-zone_114579-4042.jpg?w=740&t=st=1683950815~exp=1683951415~hmac=989c08cad4798e4810e99fe3457c76c3d10a8e6957b18ab2378858b0baf28ac1")` }}>
  <div className=" hero-overlay bg-gradient-to-r  from-stone-950  to-to-[rgba(33, 158, 188,0.9)]"></div>
  <div className="hero-content text-start text-neutral-content grid grid-cols-2  ">
    <div className="max-w-lg ">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    <div></div>
  </div>
</div>
{/* 
<div class="relative ">
  <img src={img.i} alt="Image" class="w-full  max-h-96  object-cover"/>
  <div class="absolute inset-0 bg-gradient-to-r  from-stone-950  to-to-[rgba(33, 158, 188,0.9)] opacity-75"></div>
  <div class="absolute inset-0 flex flex-col w-full px-12 md:px-28 md:w-3/5 md:h-full justify-center ">

  <h1 className="  lg:py-30 sm:text-xl md:text-5xl font-bold ">Hello there</h1>
    <p className="  text-slate-200 text-xs sm:overflow-hidden  md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque perspiciatis quibusdam, labore quas harum. Reprehenderit magni eaque sint aut laboriosam, est accusantium maiores sunt id dolorem quia quaerat pariatur harum ratione nemo, illo quasi corporis.</p>
  </div>
</div> */}



        </div>
    );
};

export default Banner;