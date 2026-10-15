import { Outlet } from "react-router-dom";
import { SignOutButton } from "../buttons/SignoutButton";

const SiteHeader = () => {
  return (
    <header className="relative h-[7vh] sticky top-0 z-50 bg-black border-b border-gray-800 content-center">
      <div className="flex flex-row">
        <div className="flex basis-[50dvw] justify-start">
          <img
            src="../../src/assets/logos/prod55-pink.png"
            className="w-[7dvw] h-[7dvh] object-contain"
          />
        </div>
        <div className="flex basis-[50dvw] justify-end mx-5">
          <SignOutButton />
        </div>
      </div>
    </header>
  );
};

export default function InternHeaderLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
    </>
  );
}
