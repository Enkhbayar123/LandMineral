// src/pages/LansynTsatsal.jsx
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Droplets, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

// --- INTERNAL NAVBAR COMPONENT ---
const LansynNavbar = ({ t, i18n }) => {
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white sticky top-0 z-50 border-b border-sky-100 shadow-sm">
        <Link to="/lansyn-tsatsal" className="text-2xl font-bold tracking-tight flex items-center gap-3 text-sky-600">
            {/* Placeholder Logo */}
            <img 
                src="/lansyn-logo.png" 
                alt="Lansyn Tsatsal Logo" 
                className="w-12 h-12 object-contain" 
            />
            <span className="text-slate-800">Lansyn Tsatsal LLC</span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-medium text-slate-600 items-center text-sm uppercase tracking-wide">
            <Link to="/" className="hover:text-sky-600 transition-colors">{t('lansyn.nav.group')}</Link>
            <Link to="/lansyn-tsatsal" className="hover:text-sky-600 transition-colors">{t('lansyn.nav.farm')}</Link>
            
            {/* NEW GALLERY LINK */}
            <Link to="/lansyn-tsatsal/gallery" className="hover:text-sky-600 transition-colors">
                {t('lansyn.nav.gallery')}
            </Link>
            
            <button onClick={toggleLanguage} className="flex items-center gap-1 hover:text-sky-600">
                <Globe size={16} /> {i18n.language === 'en' ? 'MN' : 'EN'}
            </button>

            <Link to="/lansyn-tsatsal/contact" className="px-6 py-2 bg-sky-100 text-sky-700 rounded-full hover:bg-sky-200 transition-colors font-bold">
                {t('lansyn.nav.contact')}
            </Link>
        </div>
    </nav>
  );
};

const LansynTsatsal = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-sky-200">
      <LansynNavbar t={t} i18n={i18n} />

      {/* 1. Hero Section - Sky Blue & Fresh */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-sky-900 z-0">
            {/* Placeholder for Farm Image */}
            <div className="absolute inset-0 bg-[url('/lansyn-hero.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block py-1 px-3 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold uppercase tracking-widest mb-6"
            >
                {t('lansyn.hero.est')}
            </motion.span>
            
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
                {t('lansyn.hero.title')} <br />
                <span className="text-sky-300">{t('lansyn.hero.subtitle')}</span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-sky-100 max-w-2xl mx-auto mb-10 font-light"
            >
                {t('lansyn.hero.desc')}
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center gap-4"
            >
                <Link to="/lansyn-tsatsal/contact" className="bg-sky-500 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-400 transition-colors flex items-center gap-2">
                    {t('lansyn.hero.partner')} <ArrowRight size={18} />
                </Link>
                <Link to="/" className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
                    {t('lansyn.hero.back')}
                </Link>
            </motion.div>
        </div>
      </section>

      {/* 2. Features Grid */}
      <section id="farm" className="py-24 px-6">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('lansyn.features.title')}</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">{t('lansyn.features.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-sky-200 transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <Leaf size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">{t('lansyn.features.eco.title')}</h3>
                    <p className="text-slate-500 leading-relaxed">
                        {t('lansyn.features.eco.desc')}
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-sky-200 transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-6">
                        <Droplets size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">{t('lansyn.features.dairy.title')}</h3>
                    <p className="text-slate-500 leading-relaxed">
                        {t('lansyn.features.dairy.desc')}
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-sky-200 transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                        <MapPin size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">{t('lansyn.features.loc.title')}</h3>
                    <p className="text-slate-500 leading-relaxed">
                        {t('lansyn.features.loc.desc')}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="bg-sky-50 py-24 px-6">
        <div className="container mx-auto bg-white rounded-3xl p-12 md:p-20 text-center shadow-xl shadow-sky-100/50 border border-sky-100">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('lansyn.contact.title')}</h2>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                {t('lansyn.contact.pageSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/lansyn-tsatsal/contact" className="bg-sky-600 text-white px-8 py-4 rounded-full font-bold hover:bg-sky-700 transition-colors shadow-lg shadow-sky-200">
                    {t('lansyn.contact.email')}
                </Link>
                <Link to="/lansyn-tsatsal/gallery" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors">
                   {t('lansyn.nav.gallery')}
                </Link>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LansynTsatsal;