// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BRANCH_COMPANIES } from "../mockData";
import { useTranslation } from "react-i18next"; // <--- Import this

const Navbar = () => {
  const { t, i18n } = useTranslation(); // <--- Hook
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className="text-emerald-500">LAND</span>
            <span className="text-white">MINERAL GROUP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `hover:text-emerald-400 transition-colors ${isActive ? 'text-emerald-500' : ''}`
            }>
              {t('nav.home')}
            </NavLink>

            {/* Dropdown Container */}
            <div 
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
                {t('nav.branches')} <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-20 left-0 w-64 bg-slate-800 border border-slate-700 rounded-b-md shadow-xl overflow-hidden"
                  >
                    <div className="py-2">
                      {BRANCH_COMPANIES.map((branch) => (
                        <Link
                          key={branch.id}
                          to={branch.path}
                          className="block px-4 py-3 text-sm text-slate-300 hover:bg-slate-700 hover:text-emerald-400 transition-colors"
                        >
                          {/* Use ID to find translation, fallback to English name */}
                          {t(`companies.${branch.id}.name`)}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/about" className={({ isActive }) => 
              `hover:text-emerald-400 transition-colors ${isActive ? 'text-emerald-500' : ''}`
            }>
              {t('nav.about')}
            </NavLink>

            <Link 
              to="/contact" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md transition-colors font-medium"
            >
              {t('nav.contact')}
            </Link>

            {/* Language Switcher Button */}
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors border border-slate-700 rounded px-2 py-1"
            >
                <Globe size={14} />
                <span className="uppercase text-xs font-bold">{i18n.language === 'en' ? 'MN' : 'EN'}</span>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/">{t('nav.home')}</Link>
            <Link to="/about">{t('nav.about')}</Link>
            <Link to="/contact">{t('nav.contact')}</Link>
            <button onClick={toggleLanguage} className="text-left text-emerald-500 font-bold">
                Switch Language ({i18n.language === 'en' ? 'MN' : 'EN'})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;