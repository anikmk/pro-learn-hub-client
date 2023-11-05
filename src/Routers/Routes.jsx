import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import SignIn from "../Page/SignIn/SignIn";
import SignUp from "../Page/SignUp/SignUp";
import AddJobsForm from "../Components/AddJob/AddJobsForm";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
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

            },
            {
                path:'addjob',
                element:<AddJobsForm></AddJobsForm>
            }   
        ]
    }
])
export default router