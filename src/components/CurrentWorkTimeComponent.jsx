import { useState } from "react";
import { Pause, Play, Square, Timer } from "lucide-react";

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);

  const minutes = Math.floor((seconds % 3600) / 60);

  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, "0");

  const formattedMinutes = String(minutes).padStart(2, "0");

  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export const WorkTimeTracker = () => {
  const seconds = 0;

  const [workStatus, setWorkStatus] = useState("clock in");
  const [currentWorkTime, setCurrentWorkTime] = useState(formatTime(seconds));

  const onClockIn = async () => {
    setWorkStatus("work work");
  };

  const onBreak = async () => {
    setWorkStatus("break");
  };

  const onResume = async () => {
    setWorkStatus("work work");
  };

  const onClockOut = async () => {
    setWorkStatus("done for the day");
  };

  return (
    <div className="basis-[45vw] px-[2vw] py-[3vh]">
      <div className="w-full h-full bg-mist-900 rounded-xl px-[2vw] py-[3vh]">
        <div className="flex flex-col align-center w-full h-full">
          <div className="basis-2/3">
            <div className="flex justify-center text-white text-4xl w-full">
              <Timer size={33} className="mr-2" /> Work Time...
            </div>
            <div className="flex justify-center my-2 text-mist-400 w-full uppercase">
              {workStatus === "clock in"
                ? "ready to work?"
                : null || workStatus}
            </div>
            <div className="flex justify-center text-white text-8xl w-full">
              {currentWorkTime}
            </div>
            {workStatus === "clock in" && (
              <div className="flex flex-col align-center">
                <button
                  type="button"
                  onClick={onClockIn}
                  className="flex justify-center align-center mx-[10vw] my-5 bg-prod-pink rounded-xl py-[2vh] cursor-pointer text-xl"
                >
                  Work Time!
                </button>
              </div>
            )}

            {workStatus === "work work" && (
              <div className="flex flex-row align-center">
                <button
                  type="button"
                  onClick={onBreak}
                  className="basis-1/2 flex justify-center align-center mx-4 my-5 bg-prod-pink rounded-xl py-[2vh] cursor-pointer text-xl"
                >
                  <div className="p-1 mr-2 border-1 border-white rounded-full">
                    <Pause size={18} />
                  </div>
                  let me rest.
                </button>

                <button
                  type="button"
                  onClick={onClockOut}
                  className="basis-1/2 flex justify-center align-center mx-4 my-5 bg-prod-pink rounded-xl py-[2vh] cursor-pointer text-xl"
                >
                  <div className="p-1 mr-2 border-1 border-white rounded-full">
                    <Square size={18} />
                  </div>
                  Im tired.
                </button>
              </div>
            )}

            {workStatus === "break" && (
              <div className="flex flex-row align-center">
                <button
                  type="button"
                  onClick={onResume}
                  className="basis-1/2 flex justify-center align-center mx-4 my-5 bg-prod-pink rounded-xl py-[2vh] cursor-pointer text-xl"
                >
                  <div className="p-1 mr-2 border-1 border-white rounded-full">
                    <Play size={18} />
                  </div>
                  let me rest.
                </button>

                <button
                  type="button"
                  onClick={onClockOut}
                  className="basis-1/2 flex justify-center align-center mx-4 my-5 bg-prod-pink rounded-xl py-[2vh] cursor-pointer text-xl"
                >
                  <div className="p-1 mr-2 border-1 border-white rounded-full">
                    <Square size={18} />
                  </div>
                  Im tired.
                </button>
              </div>
            )}

            {workStatus === "done for the day" && (
              <div className="flex flex-col align-center">
                <div className="flex justify-center align-center mx-[10vw] my-5 bg-mist-600 rounded-xl py-[2vh] text-xl">
                  Job well done! go rest.
                </div>
              </div>
            )}
          </div>
          <div className="basis-1/3 border-t border-mist-600"></div>
        </div>
      </div>
    </div>
  );
};
