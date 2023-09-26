import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";

function ProtectedRoute(){
    const {isLoading, IsAuthenticated} = useAuth();
    if(isLoading) {console.log("si estoy"); return <h1>Cargando...</h1>}
    if(!isLoading && !IsAuthenticated) return <Navigate to="/login" replace/>;
    return <Outlet />
    
}

export default ProtectedRoute;