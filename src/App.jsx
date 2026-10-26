import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Crew from "./pages/Crew";
import CrewMember from "./pages/CrewMember";
import Gears from "./pages/Gears";
import GearDetail from "./pages/GearDetail";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import InternLogin from "./pages/InternLogin";
import InternRegister from "./pages/InternRegister";
import InternDashboard from "./pages/InternDashboard";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./db/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import MainHeaderLayout from "./components/headers/SiteHeader";
import InternHeaderLayout from "./components/headers/InternSiteHeader";

function App() {
  return (
    <div className="font-prodFont">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<MainHeaderLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/gallery/:slug?" element={<Gallery />} />
              <Route path="/crew" element={<Crew />} />
              <Route path="/crew/:id" element={<CrewMember />} />
              <Route path="/gears" element={<Gears />} />
              <Route path="/gears/:id" element={<GearDetail />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/intern-login" element={<InternLogin />} />
            <Route path="/intern-register" element={<InternRegister />} />

            <Route element={<InternHeaderLayout />}>
              <Route element={<ProtectedRoute />}>
                <Route path="/intern-dashboard" element={<InternDashboard />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
