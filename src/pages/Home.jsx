import HighlightHoverText from "../components/HighlightHoverText";
import HighlightHoverImage from "../components/HighlightHoverImage";
import ClientsCarousel from "../components/carousel/NotableClientsCarousel";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main>
      {/* first page */}
      <div className="h-dvh overflow-x-hidden bg-black text-white">
        <div className="flex flex-col">
          <div className="w-full h-screen flex flex-col px-[7vw] pt-[8vh] overflow-x-hidden">
            <div className="mt-[25vh] text-center">
              <HighlightHoverText
                text="production 55"
                className="block text-[18.5vh] uppercase [text-box:trim-both_cap_alphabetic] select-none mr-[2vw]"
              />
            </div>
            <div className="font-prodFont text-4xl text-center w-[70%] mx-auto mt-[6vh] mb-[4vh] select-none">
              A full-service film & media production company crafting bespoke
              cinematic experiences: from{" "}
              <b>
                <HighlightHoverText text="Vision" className="inline-block" />
              </b>{" "}
              to{" "}
              <b>
                <HighlightHoverText text="Screen" className="inline-block" />
              </b>{" "}
            </div>
            <NavLink
              to="/gallery"
              className="bg-white text-black transition-colors hover:bg-prod-pink hover:text-white rounded-lg text-3xl py-[1.5vh] px-[2vh] mx-auto w-fit cursor-pointer ease-in-out duration-500"
            >
              <b>See works</b>
            </NavLink>
            <div className="w-[70%] mt-[12vh] mx-auto flex items-center gap-6 opacity-50">
              <div className="w-full border-t border-white" />
              <div className="whitespace-nowrap text-lg uppercase font-prodFont">
                notable clients
              </div>
              <div className="w-full border-t border-white" />
            </div>
            <div className="w-[70%] flex items-center mx-auto mt-[3vh]">
              <ClientsCarousel />
            </div>
          </div>
        </div>
      </div>

      {/* second page */}
      <div className="h-dvh overflow-x-hidden bg-black text-white p">
        <div className="w-full h-screen flex flex-col overflow-x-hidden">
          <HighlightHoverImage className="w-[40%] h-[50%] object-scale-down" />
        </div>
      </div>
    </main>
  );
}
