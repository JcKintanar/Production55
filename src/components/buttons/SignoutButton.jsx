import { useNavigate } from "react-router-dom";
import { doSignOut } from "../../db/services/auth";
import { LogOut } from "lucide-react";

export const SignOutButton = () => {
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      await doSignOut();
      navigate("/intern-login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button type="button" className="h-full p-2" onClick={signOut}>
      <LogOut />
    </button>
  );
};
