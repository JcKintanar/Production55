import { Navigate } from "react-router-dom";
import { useAuth } from "../db/authContext";

export default function InternDashboard() {
  const userLoggedIn = useAuth();

  return (
    <div>
      {!userLoggedIn && <Navigate to={"/intern-login"} replace={true} />}
      <div className="w-full h-full bg-white"></div>
    </div>
  );
}
