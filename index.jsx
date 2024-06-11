import { Outlet, Navigate } from "react-router-dom";

function AuthRequired() {
  const authenticated = false; 

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AuthRequired;
