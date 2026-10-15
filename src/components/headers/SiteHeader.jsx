import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Films", to: "/films" },
  { label: "Library", to: "/library" },
  { label: "Crew", to: "/crew" },
  { label: "Gears", to: "/gears" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12 py-6 gap-4">
        <div>
          <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">
            Production 55
          </p>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Production 55
          </h1>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.3em] font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-pink-400" : "text-gray-300 hover:text-white"}`
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
