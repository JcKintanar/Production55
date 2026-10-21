import { NavLink, Link, Outlet } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Crew", to: "/crew" },
  { label: "Gears", to: "/gears" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800 h-8vh overflow-y-hidden">
      <div className="h-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-6 gap-4">
        <div>
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

        <nav className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.3em] font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-prod-pink" : "text-gray-300 hover:text-white"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default function MainHeaderLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
    </>
  );
}
