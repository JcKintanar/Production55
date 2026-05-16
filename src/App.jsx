import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import Home from './pages/Home';
import Films from './pages/Films';
import Library from './pages/Library';
import Crew from './pages/Crew';
import CrewMember from './pages/CrewMember';
import Gears from './pages/Gears';
import GearDetail from './pages/GearDetail';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
