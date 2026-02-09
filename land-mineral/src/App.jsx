// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// =========================================
// 1. MAIN LAND MINERAL GROUP COMPONENTS
// =========================================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import BranchDetail from "./pages/BranchDetail";
import Contact from "./pages/Contact";

// =========================================
// 2. TSETSEN DALT (Meat Production)
// =========================================
import TsetsenDalt from "./pages/TsetsenDalt"; 
import TsetsenDaltContact from "./pages/TsetsenDaltContact";

// =========================================
// 3. LANSYN TSATSAL (Dairy Farming)
// =========================================
import LansynTsatsal from "./pages/LansynTsatsal";
import LansynTsatsalContact from "./pages/LansynTsatsalContact";
import LansynTsatsalGallery from "./pages/LansynTsatsalGallery"; // <--- Farm Gallery

// =========================================
// 4. DANISTA-OD (Trade & Service)
// =========================================
import DanistaOd from "./pages/DanistaOd";
import DanistaOdContact from "./pages/DanistaOdContact";

// =========================================
// 5. VAJRA WISDOM (Tourism & Foundation)
// =========================================
import VajraWisdom from "./pages/VajraWisdom";
import VajraWisdomContact from "./pages/VajraWisdomContact";
import VajraWisdomRetreat from "./pages/VajraWisdomRetreat"; // <--- Wellness Retreat

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-slate-950">
        
        <main className="flex-grow">
          <Routes>
            
            {/* -----------------------------------------------------
                1. MAIN CORPORATE SITE 
               ----------------------------------------------------- */}
            <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/branches/:branchId" element={<><Navbar /><BranchDetail /><Footer /></>} />


            {/* -----------------------------------------------------
                2. TSETSEN DALT (Black/White Theme)
               ----------------------------------------------------- */}
            <Route path="/tsetsen-dalt" element={<TsetsenDalt />} />
            <Route path="/tsetsen-dalt/contact" element={<TsetsenDaltContact />} />


            {/* -----------------------------------------------------
                3. LANSYN TSATSAL (Sky Blue Theme)
               ----------------------------------------------------- */}
            <Route path="/lansyn-tsatsal" element={<LansynTsatsal />} />
            <Route path="/lansyn-tsatsal/gallery" element={<LansynTsatsalGallery />} /> {/* Gallery Page */}
            <Route path="/lansyn-tsatsal/contact" element={<LansynTsatsalContact />} />


            {/* -----------------------------------------------------
                4. DANISTA-OD (Orange/Grey Theme)
               ----------------------------------------------------- */}
            <Route path="/danista-od" element={<DanistaOd />} />
            <Route path="/danista-od/contact" element={<DanistaOdContact />} />


            {/* -----------------------------------------------------
                5. VAJRA WISDOM (Midnight/Gold Theme)
               ----------------------------------------------------- */}
            <Route path="/vajra-wisdom" element={<VajraWisdom />} />
            <Route path="/vajra-wisdom/retreat" element={<VajraWisdomRetreat />} /> {/* Retreat Page */}
            <Route path="/vajra-wisdom/contact" element={<VajraWisdomContact />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;