import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;