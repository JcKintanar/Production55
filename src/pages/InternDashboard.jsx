import { Navigate } from "react-router-dom";
import { useAuth } from "../db/authContext";
import { WorkTimeTracker } from "../components/CurrentWorkTimeComponent";

export default function InternDashboard() {
  const userLoggedIn = useAuth();

  return (
    <div>
      {!userLoggedIn && <Navigate to={"/intern-login"} replace={true} />}
      <div className="w-full h-dvh bg-black">
        <div className="flex flex-row h-[45vh] w-full">
          {/* Clock-In widget thingy */}
          <WorkTimeTracker />
          {/* Total hours widget thingy */}
          <div className="basis-[55vw] bg-red-800 px-[3vw] py-[5vh]">
            <div className="w-full h-full bg-mist-900 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
