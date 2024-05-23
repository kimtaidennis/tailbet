import { useAuth } from "auth/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
    
    const { token } = useAuth();
    const location = useLocation();
  
    // Check if the user is authenticated
    if (!token) {
        // If not authenticated, redirect to the login page
        return <Navigate to="/login" replace state={{ redirectTo: location }}/>;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
};
  