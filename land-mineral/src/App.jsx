// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import BranchDetail from "./pages/BranchDetail"; // <--- Import the new component

// Placeholder for Contact
const Placeholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400 text-2xl font-light">
    {title} - Coming Soon
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-slate-950">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Placeholder title="Contact" />} />
            
            {/* UPDATED: Use the real BranchDetail component */}
            <Route path="/branches/:branchId" element={<BranchDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;