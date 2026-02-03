// src/pages/LansynTsatsalContact.jsx
import { motion } from "framer-motion";
import { ArrowLeft, Droplets, MapPin, Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const LansynNavbar = ({ t, i18n }) => {
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <Link to="/lansyn-tsatsal" className="text-2xl font-bold tracking-tight flex items-center gap-3 text-sky-600">
            {/* LOGO IMAGE HERE */}
            <img 
              src="/lansyn-logo.png" 
              alt="Lansyn Tsatsal Logo" 
              className="w-12 h-12 object-contain" 
            />
            <span className="text-slate-800">Lansyn Tsatsal</span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-medium text-slate-600 items-center">
            <Link to="/" className="hover:text-sky-600 transition-colors">{t('lansyn.nav.group')}</Link>
            <Link to="/lansyn-tsatsal#farm" className="hover:text-sky-600 transition-colors">{t('lansyn.nav.farm')}</Link>
            
            <button onClick={toggleLanguage} className="flex items-center gap-1 hover:text-sky-600">
                <Globe size={16} /> {i18n.language === 'en' ? 'MN' : 'EN'}
            </button>

            <Link to="/lansyn-tsatsal/contact" className="px-5 py-2 bg-sky-100 text-sky-700 rounded-full hover:bg-sky-200 transition-colors font-semibold">
                {t('lansyn.nav.contact')}
            </Link>
        </div>
    </nav>
  );
};

const LansynTsatsalContact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      <LansynNavbar t={t} i18n={i18n} />

      {/* 1. Bright Header */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-20 px-6">
        <div className="container mx-auto text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Link to="/lansyn-tsatsal" className="inline-flex items-center gap-2 text-sky-100 hover:text-white mb-6 font-semibold uppercase text-sm tracking-widest">
                    <ArrowLeft size={16} /> {t('lansyn.contact.back')}
                </Link>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    {t('lansyn.contact.pageTitle')}
                </h1>
                <p className="text-xl text-sky-100 max-w-2xl mx-auto">
                    {t('lansyn.contact.pageSubtitle')}
                </p>
            </motion.div>
        </div>
      </section>

      {/* 2. Contact Cards */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Phone Card */}
            <div className="bg-sky-50 p-10 rounded-3xl text-center hover:bg-sky-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-white text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Phone size={32} />
                </div>
                <h3 className="text-lg font-bold uppercase text-slate-400 mb-2">{t('lansyn.contact.call')}</h3>
                <p className="text-2xl font-bold text-sky-900">+976 9911-XXXX</p>
            </div>

            {/* Email Card */}
            <div className="bg-sky-50 p-10 rounded-3xl text-center hover:bg-sky-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-white text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Mail size={32} />
                </div>
                <h3 className="text-lg font-bold uppercase text-slate-400 mb-2">{t('lansyn.contact.email')}</h3>
                <p className="text-xl font-bold text-sky-900">info@lansyn.mn</p>
            </div>

            {/* Location Card */}
            <div className="bg-sky-50 p-10 rounded-3xl text-center hover:bg-sky-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-white text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <MapPin size={32} />
                </div>
                <h3 className="text-lg font-bold uppercase text-slate-400 mb-2">{t('lansyn.contact.location')}</h3>
                <p className="text-xl font-bold text-sky-900">Baganuur District</p>
            </div>
            
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LansynTsatsalContact;