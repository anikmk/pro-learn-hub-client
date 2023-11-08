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
import UpdateJobs from "../Components/UpdateJobs/UpdateJobs";
import BidRequest from "../Components/BidRequest/BidRequest";

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
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`) 
            },
            {
                path:'postedjob',
                element:<PrivetRoute><MyPostedJob></MyPostedJob></PrivetRoute>
            },
            {
                path:'mybids',
                element:<PrivetRoute><MyBids></MyBids></PrivetRoute>
            },
            {
                path:"/updateJobs/:id",
                element:<UpdateJobs></UpdateJobs>,
                loader:({params})=>fetch(`http://localhost:5000/updatejobs/${params.id}`)
            },
            {
                path:'bidrequest',
                element:<PrivetRoute><BidRequest></BidRequest></PrivetRoute>,        
            }   
        ]
    }
])
export default router