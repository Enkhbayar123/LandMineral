// src/pages/VajraWisdom.jsx
import { motion } from "framer-motion";
import { ArrowLeft, Compass, Mountain, Users, Map, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const VajraNavbar = ({ t, i18n }) => {
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-indigo-950 text-white sticky top-0 z-50 shadow-lg border-b border-white/10">
        <Link to="/vajra-wisdom" className="text-2xl font-serif font-bold tracking-wide flex items-center gap-3">
            {/* LOGO IMAGE HERE */}
            <img 
              src="/vajra-logo.png" 
              alt="Vajra Wisdom Logo" 
              className="w-12 h-12 object-contain" 
            />
            <span className="text-amber-400">Vajra Wisdom</span>
        </Link>
        <div className="hidden md:flex gap-8 font-medium text-indigo-100 items-center text-sm uppercase tracking-widest">
            <Link to="/" className="hover:text-amber-400 transition-colors">{t('vajra.nav.group')}</Link>
            <a href="#initiatives" className="hover:text-amber-400 transition-colors">{t('vajra.nav.tourism')}</a>
            
            <button onClick={toggleLanguage} className="flex items-center gap-1 hover:text-amber-400">
                <Globe size={16} /> {i18n.language === 'en' ? 'MN' : 'EN'}
            </button>

            <Link to="/vajra-wisdom/contact" className="px-6 py-2 border border-amber-500/50 text-amber-400 rounded-sm hover:bg-amber-500 hover:text-indigo-950 transition-all">
                {t('vajra.nav.contact')}
            </Link>
        </div>
    </nav>
  );
};

const VajraWisdom = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-indigo-950 min-h-screen text-white font-sans selection:bg-amber-500 selection:text-indigo-950">
      <VajraNavbar t={t} i18n={i18n} />

      {/* 1. Cultural Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
           <img 
            src="MongolianLandscape.jpg" 
            alt="Mongolian Landscape" 
            className="w-full h-full object-cover opacity-40"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-transparent to-indigo-950" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 text-amber-400 border border-amber-400/30 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 bg-indigo-900/50 backdrop-blur-sm">
                    <Compass size={14} /> {t('vajra.hero.est')}
                </div>
                <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight text-white">
                    {t('vajra.hero.title')} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">{t('vajra.hero.subtitle')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-indigo-200 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    {t('vajra.hero.desc')}
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <Link to="/vajra-wisdom/contact" className="bg-amber-500 text-indigo-950 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                        {t('vajra.hero.explore')}
                    </Link>
                    <Link to="/" className="border border-indigo-700 text-indigo-300 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-indigo-900 hover:text-white transition-all flex items-center justify-center gap-2">
                         <ArrowLeft size={16} /> {t('vajra.hero.back')}
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 2. Initiatives Grid - Elegant Cards */}
      <section id="initiatives" className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-indigo-900/30 border border-indigo-800 p-10 hover:border-amber-500/50 transition-colors duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Mountain size={100} />
                </div>
                <div className="w-12 h-12 bg-indigo-800 text-amber-400 flex items-center justify-center mb-6 rounded-lg group-hover:bg-amber-500 group-hover:text-indigo-900 transition-colors">
                    <Compass size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{t('vajra.features.culture.title')}</h3>
                <p className="text-indigo-300 leading-relaxed">{t('vajra.features.culture.desc')}</p>
            </div>

            {/* Card 2 */}
            <div className="bg-indigo-900/30 border border-indigo-800 p-10 hover:border-amber-500/50 transition-colors duration-500 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Map size={100} />
                </div>
                <div className="w-12 h-12 bg-indigo-800 text-amber-400 flex items-center justify-center mb-6 rounded-lg group-hover:bg-amber-500 group-hover:text-indigo-900 transition-colors">
                    <Mountain size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{t('vajra.features.region.title')}</h3>
                <p className="text-indigo-300 leading-relaxed">{t('vajra.features.region.desc')}</p>
            </div>

            {/* Card 3 */}
            <div className="bg-indigo-900/30 border border-indigo-800 p-10 hover:border-amber-500/50 transition-colors duration-500 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users size={100} />
                </div>
                <div className="w-12 h-12 bg-indigo-800 text-amber-400 flex items-center justify-center mb-6 rounded-lg group-hover:bg-amber-500 group-hover:text-indigo-900 transition-colors">
                    <Users size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{t('vajra.features.partner.title')}</h3>
                <p className="text-indigo-300 leading-relaxed">{t('vajra.features.partner.desc')}</p>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VajraWisdom;