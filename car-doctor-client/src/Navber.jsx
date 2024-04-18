import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './page/Authentication/AuthProvider';

const Navber = () => {
  let{user,logout}=useContext(AuthContext)

  let signout=()=>{
    logout()
    .then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
     
        <li><Link to='/signup'>Sign up</Link></li>
     

        <li>
          {user ?<>
            <Link to='/booking'>Book up</Link>
          <Link >{user.email}</Link>

        <Link><button className='btn' onClick={signout}>logout</button></Link>
          </> :
          <Link to='/login'>Login</Link>
        }
        </li>
      
    
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navber;