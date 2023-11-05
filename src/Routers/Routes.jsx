import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import SignIn from "../Page/SignIn/SignIn";
import SignUp from "../Page/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<SignIn></SignIn>
            },
            {
                path:'register',
                element:<SignUp></SignUp>

            }   
        ]
    }
])
export default router