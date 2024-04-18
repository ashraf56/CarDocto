import React, { createContext, useEffect, useState  } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './Firebase/firebase.config';

const auth = getAuth(app);

export let AuthContext=createContext()
const gprovider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
let [user,setuser]=useState(null);
let [loader, setLoader]=useState(true);

let createuser=(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);

}

let signin=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
}

let google=()=>{
    setLoader(true)
    return signInWithPopup(auth, gprovider)
}

let logout=()=>{
    return signOut(auth);
}

useEffect(()=>{

let  unsubcribe=onAuthStateChanged(auth , currentUser =>{
setuser(currentUser);
setLoader(false)
if (currentUser && currentUser.email) {
    let logData={
        email:currentUser.email
      }
    fetch('https://car-doc-server-five.vercel.app/jwt',{
  method:"POST", headers:{
    'content-type':"application/json"
  }, body:JSON.stringify(logData)
 })
 .then(res=>res.json())
 .then(data=>{
  console.log(data);
localStorage.setItem('car-token',data.token)

 })
}
else{
    localStorage.removeItem('car-token')

}

})
return ()=>{
    unsubcribe()
}

},[])

let authInfo={
user, loader, createuser,signin,logout,google
}

    return (
       <AuthContext.Provider value={authInfo}>
{children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;