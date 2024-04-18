import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Login = () => {
  let{signin,google}=useContext(AuthContext)
  let handleSubmit2=(e)=>{
    e.preventDefault();
    let f=e.target;
    let email= f.email.value;
    let password=f.password.value;

    signin(email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }


let googlelogin=()=>{
google()
.then((result) => {
  const user = result.user;
console.log(user);

}).catch((error) => {
  const errorMessage = error.message;
console.log(errorMessage);
});
}


    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <div className="card-body">

         <form  onSubmit={handleSubmit2}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email'  placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6"> 
          <button className="btn btn-primary">login</button>
        </div>   
      
          
      </form>

       <div className='divider-vertical text-center'>
            <button className="btn btn-circle" onClick={googlelogin}>G</button>
          </div>
      </div>
   
     
    </div>
  </div>
</div> 
        </div>
    );
};

export default Login;