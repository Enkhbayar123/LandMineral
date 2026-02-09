// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- MAIN SITE COMPONENTS ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import BranchDetail from "./pages/BranchDetail";
import Contact from "./pages/Contact"; // <--- Import the new Contact page

// --- TSETSEN DALT (Meat) COMPONENTS ---
import TsetsenDalt from "./pages/TsetsenDalt"; 
import TsetsenDaltContact from "./pages/TsetsenDaltContact";

// --- LANSYN TSATSAL (Dairy) COMPONENTS ---
import LansynTsatsal from "./pages/LansynTsatsal";
import LansynTsatsalContact from "./pages/LansynTsatsalContact";

// --- DANISTA-OD (Trade) COMPONENTS ---
import DanistaOd from "./pages/DanistaOd";
import DanistaOdContact from "./pages/DanistaOdContact";

// --- VAJRA WISDOM (Tourism) COMPONENTS ---
import VajraWisdom from "./pages/VajraWisdom";
import VajraWisdomContact from "./pages/VajraWisdomContact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-slate-950">
        
        <main className="flex-grow">
          <Routes>
            
            {/* =========================================
                1. MAIN LAND MINERAL GROUP WEBSITE 
               ========================================= */}
            <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
            <Route path="/contact" element={<Contact />} /> {/* <--- Connected here */}
            <Route path="/branches/:branchId" element={<><Navbar /><BranchDetail /><Footer /></>} />


            {/* =========================================
                2. TSETSEN DALT (MEAT PRODUCTION)
               ========================================= */}
            <Route path="/tsetsen-dalt" element={<TsetsenDalt />} />
            <Route path="/tsetsen-dalt/contact" element={<TsetsenDaltContact />} />


            {/* =========================================
                3. LANSYN TSATSAL (DAIRY FARMING)
               ========================================= */}
            <Route path="/lansyn-tsatsal" element={<LansynTsatsal />} />
            <Route path="/lansyn-tsatsal/contact" element={<LansynTsatsalContact />} />


            {/* =========================================
                4. DANISTA-OD (TRADE & SERVICE)
               ========================================= */}
            <Route path="/danista-od" element={<DanistaOd />} />
            <Route path="/danista-od/contact" element={<DanistaOdContact />} />


            {/* =========================================
                5. VAJRA WISDOM (TOURISM FOUNDATION)
               ========================================= */}
            <Route path="/vajra-wisdom" element={<VajraWisdom />} />
            <Route path="/vajra-wisdom/contact" element={<VajraWisdomContact />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;