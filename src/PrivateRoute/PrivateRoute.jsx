import {useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({Children}) => {
    const {user} = useContext(AuthContext);
    if(user && user?.email){
        return Children;
    }
    return <Navigate to={"/auth/login"}></Navigate>;
    
};

export default PrivateRoute;