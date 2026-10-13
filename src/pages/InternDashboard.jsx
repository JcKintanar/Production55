import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../db/authContext";
import { doSignOut } from "../db/services/auth";

export default function InternDashboard() {
  const navigate = useNavigate();
  const userLoggedIn = useAuth();

  const signOut = async (e) => {
    try {
      await doSignOut();
      navigate("/intern-login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!userLoggedIn && <Navigate to={"/intern-login"} replace={true} />}
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <button
          type="button"
          onClick={signOut}
          className="bg-black text-white text-lg cursor-pointer p-5"
        >
          sign out
        </button>
      </div>
    </div>
  );
}
