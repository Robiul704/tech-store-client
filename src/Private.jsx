import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <p></p>
    }
    if(user){
        return children
    }
    return (
        <Navigate to={'/signin'} state={location.pathname}>
            
        </Navigate>
    );
};

export default Private;