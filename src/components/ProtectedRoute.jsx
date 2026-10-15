import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../db/authContext";

export default function ProtectedRoute() {
  const { userLoggedIn, loading } = useAuth();

  return userLoggedIn ? <Outlet /> : <Navigate to="/intern-login" replace />;
}
