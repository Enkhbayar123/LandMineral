import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Language Toggle
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Main Logo Image */}
          <img 
            src="/lmg-logo.png" 
            alt="Land Mineral Group Logo" 
            className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight leading-none uppercase">Land Mineral</span>
            <span className="text-xs tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors">Group</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link to="/" className="hover:text-blue-400 transition-colors relative group">
            {t('nav.home')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>
          
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              {t('nav.branches')} <ChevronDown size={14} />
            </button>
            {/* Dropdown */}
            <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-2xl p-4 w-64 flex flex-col gap-2">
                <Link to="/branches/mining" className="block p-2 hover:bg-slate-800 rounded text-slate-300 hover:text-white">Mining & Industry</Link>
                <Link to="/tsetsen-dalt" className="block p-2 hover:bg-slate-800 rounded text-slate-300 hover:text-white">Tsetsen Dalt (Meat)</Link>
                <Link to="/lansyn-tsatsal" className="block p-2 hover:bg-slate-800 rounded text-slate-300 hover:text-white">Lansyn Tsatsal (Dairy)</Link>
                <Link to="/danista-od" className="block p-2 hover:bg-slate-800 rounded text-slate-300 hover:text-white">Danista-Od (Trade)</Link>
                <Link to="/vajra-wisdom" className="block p-2 hover:bg-slate-800 rounded text-slate-300 hover:text-white">Vajra Wisdom (Tourism)</Link>
              </div>
            </div>
          </div>

          <Link to="/about" className="hover:text-blue-400 transition-colors relative group">
            {t('nav.about')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>

          {/* Language Button */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 border border-slate-600 rounded-full hover:bg-white hover:text-slate-900 transition-all text-xs uppercase"
          >
            <Globe size={14} /> {i18n.language === 'en' ? 'MN' : 'EN'}
          </button>

          <Link
            to="/contact"
            className="px-6 py-2 bg-blue-600 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
          >
            {t('nav.contact')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 text-center">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-400">{t('nav.home')}</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg hover:text-blue-400">{t('nav.about')}</Link>
              <Link to="/branches/mining" onClick={() => setIsOpen(false)} className="text-lg text-slate-400 hover:text-white">Mining</Link>
              <Link to="/tsetsen-dalt" onClick={() => setIsOpen(false)} className="text-lg text-slate-400 hover:text-white">Agriculture</Link>
              
              <button onClick={toggleLanguage} className="mx-auto flex items-center gap-2 text-slate-400 hover:text-white">
                 <Globe size={18} /> {i18n.language === 'en' ? 'Switch to Mongolian' : 'Switch to English'}
              </button>

              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-blue-600 py-3 rounded text-white font-bold uppercase">{t('nav.contact')}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;