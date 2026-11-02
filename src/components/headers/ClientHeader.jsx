import { NavLink, Link } from "react-router-dom";

export default function ClientHeader() {
  return (
    <header className="sticky top-0 z-50 bg-black h-8vh">
      <div className="grid grid-cols-8">
        <div className="flex justify-center my-auto">
          <NavLink
            to="/crew"

            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-prod-pink" : "text-gray-300 hover:text-white"}`
            }
          >
            CREW
          </NavLink>
        </div>

        <div className="flex justify-center my-auto">
          <NavLink
            to="/gallery"

            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-prod-pink" : "text-gray-300 hover:text-white"}`
            }
          >
            GALLERY
          </NavLink>
        </div>
        <div className="flex col-span-4 justify-center">
          <Link to="/" className="group grid overflow-hidden aspect-video">
            <img
              src="../../src/assets/logos/prod55-white.png"
              className="col-start-1 row-start-1 object-contain w-[7dvw] h-[7dvh] transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="../../src/assets/logos/prod55-pink.png"
              className="col-start-1 row-start-1 object-contain w-[7dvw] h-[7dvh] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>
        </div>
        <div className="flex justify-center my-auto">
          <NavLink
            to="/gears"

            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-prod-pink" : "text-gray-300 hover:text-white"}`
            }
          >
            GEARS
          </NavLink>
        </div>
        <div className="flex justify-center my-auto">
          <NavLink
            to="/contact"

            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-prod-pink" : "text-gray-300 hover:text-white"}`
            }
          >
            CONTACT
          </NavLink>
        </div>
      </div>
      {/* <div className="h-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-6 gap-4"> */}
      {/**/}
      {/*   <nav className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.3em] font-medium"> */}
      {/*     {navItems.map((item) => ( */}
      {/*       <NavLink */}
      {/*         key={item.to} */}
      {/*         to={item.to} */}
      {/*         className={({ isActive }) => */}
      {/*           `transition-colors ${isActive ? "text-prod-pink" : "text-gray-300 hover:text-white"}` */}
      {/*         } */}
      {/*       > */}
      {/*         {item.label} */}
      {/*       </NavLink> */}
      {/*     ))} */}
      {/*   </nav> */}
      {/* </div> */}
    </header>
  );
}
