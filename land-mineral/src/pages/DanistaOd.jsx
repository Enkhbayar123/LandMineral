// src/pages/DanistaOd.jsx
import { motion } from "framer-motion";
import { ArrowLeft, Building2, ShoppingBag, MapPin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const DanistaNavbar = ({ t, i18n }) => {
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white border-b-4 border-orange-500 text-slate-900 sticky top-0 z-50">
        <Link to="/danista-od" className="text-2xl font-black tracking-tighter uppercase flex items-center gap-3">
            {/* LOGO IMAGE HERE */}
            <img 
              src="/danista-logo.png" 
              alt="Danista-Od Logo" 
              className="w-12 h-12 object-contain" 
            />
            <span>Danista-Od</span>
        </Link>
        <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wide items-center">
            <Link to="/" className="hover:text-orange-600 transition-colors">{t('danista.nav.group')}</Link>
            <a href="#services" className="hover:text-orange-600 transition-colors">{t('danista.nav.services')}</a>
            
            <button onClick={toggleLanguage} className="flex items-center gap-1 hover:text-orange-600">
                <Globe size={16} /> {i18n.language === 'en' ? 'MN' : 'EN'}
            </button>

            <Link to="/danista-od/contact" className="px-6 py-2 bg-slate-900 text-white hover:bg-orange-600 transition-colors">
                {t('danista.nav.contact')}
            </Link>
        </div>
    </nav>
  );
};

const DanistaOd = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
      <DanistaNavbar t={t} i18n={i18n} />

      {/* 1. Industrial/Commercial Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background - Commercial Building / Mall Vibe */}
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
            alt="Commercial Building" 
            className="w-full h-full object-cover grayscale"
           />
        </div>
        
        {/* Orange Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-orange-900/20" />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block bg-orange-500 text-white px-4 py-1 font-bold text-xs uppercase tracking-widest mb-6">
                    {t('danista.hero.est')}
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase leading-none">
                    {t('danista.hero.title')} <br/> <span className="text-orange-500">{t('danista.hero.subtitle')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
                    {t('danista.hero.desc')}
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link to="/danista-od/contact" className="bg-orange-500 text-white px-10 py-4 font-bold text-lg hover:bg-orange-600 transition-all uppercase tracking-widest">
                        {t('danista.hero.lease')}
                    </Link>
                    <Link to="/" className="border-2 border-white text-white px-10 py-4 font-bold text-lg hover:bg-white hover:text-slate-900 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                         <ArrowLeft size={20} /> {t('danista.hero.back')}
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 2. Services Grid - Grey & Orange Cards */}
      <section id="services" className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-slate-200">
            
            {/* Box 1 */}
            <div className="p-12 bg-white border-b-4 md:border-b-0 md:border-r-4 border-slate-200 hover:bg-slate-900 hover:text-white transition-colors duration-300 group">
                <div className="w-16 h-16 bg-slate-100 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <ShoppingBag size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">{t('danista.features.trade.title')}</h3>
                <p className="text-slate-500 group-hover:text-slate-300">{t('danista.features.trade.desc')}</p>
            </div>

            {/* Box 2 */}
            <div className="p-12 bg-white border-b-4 md:border-b-0 md:border-r-4 border-slate-200 hover:bg-slate-900 hover:text-white transition-colors duration-300 group">
                <div className="w-16 h-16 bg-slate-100 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Building2 size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">{t('danista.features.service.title')}</h3>
                <p className="text-slate-500 group-hover:text-slate-300">{t('danista.features.service.desc')}</p>
            </div>

            {/* Box 3 */}
            <div className="p-12 bg-white hover:bg-slate-900 hover:text-white transition-colors duration-300 group">
                <div className="w-16 h-16 bg-slate-100 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <MapPin size={32} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">{t('danista.features.location.title')}</h3>
                <p className="text-slate-500 group-hover:text-slate-300">{t('danista.features.location.desc')}</p>
            </div>

        </div>
      </section>

      {/* 3. CTA Strip */}
      <section className="bg-orange-500 py-16 text-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black uppercase mb-8">Looking for Retail Space?</h2>
            <Link to="/danista-od/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 font-bold uppercase hover:bg-slate-800 transition-colors">
                <Phone size={20} /> Contact Management
            </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DanistaOd;