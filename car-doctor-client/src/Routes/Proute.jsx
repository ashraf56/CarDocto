import React, { useContext } from 'react';
import { AuthContext } from '../page/Authentication/AuthProvider';
import { Navigate } from 'react-router-dom';

const Proute = ({children}) => {

let {user,loader}=useContext(AuthContext)
if (loader) {
    return <progress className="progress w-56"></progress>
}
if (user) {
    return children
}
    return <Navigate to='/login'  replace></Navigate>  
 }

export default Proute;