import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Home from "./pages/Home";
import Films from "./pages/Films";
import Library from "./pages/Library";
import Crew from "./pages/Crew";
import CrewMember from "./pages/CrewMember";
import Gears from "./pages/Gears";
import GearDetail from "./pages/GearDetail";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import InternLogin from "./pages/InternLogin";
import InternRegister from "./pages/InternRegister";
import InternDashboard from "./pages/InternDashboard";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./db/authContext";
import ProtectedRoute from "./components/ProtectedRoute";

function MainHeaderLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<MainHeaderLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/library" element={<Library />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/crew/:id" element={<CrewMember />} />
            <Route path="/gears" element={<Gears />} />
            <Route path="/gears/:id" element={<GearDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/intern-login" element={<InternLogin />} />
          <Route path="/intern-register" element={<InternRegister />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/intern-dashboard" element={<InternDashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
