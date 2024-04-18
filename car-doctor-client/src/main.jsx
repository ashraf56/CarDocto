import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './page/Authentication/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='md:container mx-auto'>
    <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
</div>


)
