// src/App.jsx
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurServices from './components/ourservices';
import PreviousWork from './components/PreviousWork'; // ✅ Import PreviousWork
import Testimonials from './components/Testimonials'; // ✅ Import Testimonials
import JoinUsCTA from './components/JoinUsCTA'; // ✅ Import JoinUsCTA
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import Seminars from './components/Seminars';
import Olympiads from './components/Olympiads';
import Webinars from './components/Webinars';
import JoinUs from './components/JoinUs'; // ✅ Import JoinUs
import ScrollToTop from './components/ScrollToTop'; // ✅ Import ScrollToTop
import OurTeamPage from './components/OurTeamPage'; // ✅ Import Contact component
import Training from './components/Training';
import PraxisEdu from './components/PraxisEdu';

// Homepage layout
function Home() {
  return (
    <>
      <SEOHead />
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white-50 pointer-events-none h-32" />
          <About />
          <OurServices />
          <PreviousWork /> {/* ✅ Add PreviousWork component */}
          <Testimonials /> {/* ✅ Add Testimonials component */}
          <JoinUsCTA /> {/* ✅ Add JoinUsCTA component */}
        </div>
      </main>
      <Footer />
      <ScrollToTop /> {/* ✅ Add ScrollToTop component */}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seminars" element={<Seminars />} />
      <Route path="/olympiads" element={<Olympiads />} />
      <Route path="/webinars" element={<Webinars />} />
      <Route path="/join-us" element={<JoinUs />} /> {/* ✅ Added JoinUs route */}
      <Route path="/our-team" element={<OurTeamPage />} />
      <Route path="/training" element={<Training />} />
      <Route path="/praxis-edu" element={<PraxisEdu />} />
    </Routes>
  );
}

export default App;
