import Visuals from "../assets/visuals/visuals-white.png";
import VisualsPink from "../assets/visuals/visuals-pink.png";

const Home = () => {
  return (
    <main className="h-dvh overflow-x-hidden bg-black text-white">
      <div className="flex flex-col">
        {/* first page */}
        <div className="w-full h-screen">
          <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-2">
            <div className="min-h-0 min-w-0">a</div>
            <div className="min-h-0 min-w-0">a</div>

            <div className="flex min-h-0 min-w-0 flex-col justify-end pl-[2vw] pb-[1vh] uppercase">
              <div className="text-[5vw] leading-snug">production 55</div>
              <div className="text-2xl">
                description time, lorem ipsum dolor and lorem ipsum dolor,
                lorem. description time, lorem ipsum dolor and lorem ipsum
                dolor, lorem. lorem ipsum, dolor, ipsum, dolor. lorem ipsum,
                dolor, ipsum, dolor.
              </div>
            </div>

            <div className="relative min-h-0 min-w-0 overflow-hidden">
              <img
                src={VisualsPink}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* second page */}
        <div className="w-full h-screen">
          <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-2">
            <div className="min-h-0 min-w-0">a</div>
            <div className="min-h-0 min-w-0">a</div>

            <div className="flex min-h-0 min-w-0 flex-col justify-end pl-[2vw] pb-[1vh] uppercase">
              <div className="text-[5vw] leading-snug">production 55</div>
              <div className="text-2xl">
                description time, lorem ipsum dolor and lorem ipsum dolor,
                lorem. description time, lorem ipsum dolor and lorem ipsum
                dolor, lorem. lorem ipsum, dolor, ipsum, dolor. lorem ipsum,
                dolor, ipsum, dolor.
              </div>
            </div>

            <div className="relative min-h-0 min-w-0 overflow-hidden">
              <img
                src={VisualsPink}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
