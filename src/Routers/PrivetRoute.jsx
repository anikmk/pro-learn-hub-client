import { useContext } from "react";
import { AuthContext } from "../Page/Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to='/' replace></Navigate>
};

export default PrivetRoute;