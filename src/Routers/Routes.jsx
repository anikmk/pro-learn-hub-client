import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import SignIn from "../Page/SignIn/SignIn";
import SignUp from "../Page/SignUp/SignUp";
import AddJobsForm from "../Components/AddJob/AddJobsForm";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import CardDetails from "../Page/Home/CategorysTab/webCard/Card/CardDetails/CardDetails";
import MyPostedJob from "../Components/MyPostedJob/MyPostedJob";
import PrivetRoute from "./PrivetRoute";
import MyBids from "../Components/MyBids/MyBids";

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
                element:<PrivetRoute><AddJobsForm></AddJobsForm></PrivetRoute>,
            },
            {
                path:'/carddetails/:id',
                element:<PrivetRoute><CardDetails></CardDetails></PrivetRoute>,
                loader:({params})=>fetch(`https://pro-learn-hub-server-site.vercel.app/course/${params.id}`) 
            },
            {
                path:'postedjob',
                element:<PrivetRoute><MyPostedJob></MyPostedJob></PrivetRoute>
            },
            {
                path:'mybids',
                element:<PrivetRoute><MyBids></MyBids></PrivetRoute>
            }   
        ]
    }
])
export default router