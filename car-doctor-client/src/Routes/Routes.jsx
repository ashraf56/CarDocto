import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Main";
import App from "../App";
import Login from "../page/Authentication/Login";
import SIgnup from "../page/Authentication/SIgnup";
import Service from "../page/Authentication/Service";
import Chekout from "../page/Chekout";
import Boking from "../page/Authentication/Boking";
import Proute from "./Proute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<App></App>
        }
        ,
        {
          path:'/login',
          element:<Login></Login>
        }
        ,
        {
          path:'/signup',
          element:<SIgnup></SIgnup>
        },
        {
          path:'/serv',
          element:<Service></Service>
        },
        {
          path:'/check/:id',
          element:<Chekout></Chekout>,
          loader: ({params})=> fetch(`https://car-doc-server-five.vercel.app/service/${params.id}`)
        },
,
        {
          path:'/booking',
          element:<Proute>  <Boking></Boking> </Proute>
        }
      ]
    },
  ]);

  export default router;