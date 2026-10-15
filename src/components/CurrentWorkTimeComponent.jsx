import { useState } from "react";
import { Pause, Play, Square, Timer } from "lucide-react";
import formatTime from "./helper/TimeFormatHelper";

export const WorkTimeTracker = () => {
  const seconds = 0;

  const [workStatus, setWorkStatus] = useState("clock in");
  const [currentWorkTime, setCurrentWorkTime] = useState(formatTime(seconds));

  const isDimmed = workStatus === "break";
  const isFinished = workStatus === "done for the day";

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
            <div className="flex justify-center my-2 text-mist-400 text-xl w-full uppercase">
              {workStatus === "clock in"
                ? "ready to work?"
                : null || workStatus}
            </div>
            <div
              className={`flex justify-center text-8xl w-full ${
                workStatus === "break"
                  ? "text-mist-400"
                  : workStatus === "done for the day"
                    ? "text-prod-pink"
                    : "text-white"
              }`}
            >
              {currentWorkTime}
            </div>
            {workStatus === "clock in" && (
              <div className="flex flex-col align-center">
                <button
                  type="button"
                  onClick={onClockIn}
                  className="flex justify-center align-center mx-[10vw] my-5 bg-prod-pink rounded-xl py-[1.5vh] cursor-pointer text-xl"
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
                  className="basis-1/2 flex justify-center align-center mx-4 my-5 bg-prod-pink rounded-xl py-[1.5vh] cursor-pointer text-xl"
                >
                  <div className="p-1 mr-2 border-1 border-white rounded-full">
                    {/* <Pause size={18} /> */}
                  </div>
                  take a break?
                </button>

                <button
                  type="button"
                  onClick={onClockOut}
                  className="basis-1/2 flex justify-center align-center mx-4 my-5 bg-prod-pink rounded-xl py-[1.5vh] cursor-pointer text-xl"
                >
                  <div className="p-1 mr-2 border-1 border-white rounded-full">
                    {/* <Square size={18} /> */}
                  </div>
                  Im done!
                </button>
              </div>
            )}
            {workStatus === "break" && (
              <div className="flex flex-row align-center">
                <button
                  type="button"
                  onClick={onResume}
                  className="basis-1/2 flex justify-center align-center mx-4 my-5 bg-prod-pink rounded-xl py-[1.5vh] cursor-pointer text-xl"
                >
                  <div className="p-1 mr-2 border-1 border-white rounded-full">
                    {/* <Play size={18} /> */}
                  </div>
                  resume work?
                </button>

                <button
                  type="button"
                  onClick={onClockOut}
                  className="basis-1/2 flex justify-center align-center mx-4 my-5 bg-prod-pink rounded-xl py-[1.5vh] cursor-pointer text-xl"
                >
                  <div className="p-1 mr-2 border-1 border-white rounded-full">
                    {/* <Square size={18} /> */}
                  </div>
                  Im done!
                </button>
              </div>
            )}
            {workStatus === "done for the day" && (
              <div className="flex flex-col align-center">
                <div className="flex justify-center align-center mx-[10vw] my-5 bg-mist-600 rounded-xl py-[1.5vh] text-xl">
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
