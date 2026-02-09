// src/pages/LansynTsatsalContact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, MapPin, Globe, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

// --- NAVBAR COMPONENT ---
const LansynNavbar = ({ t, i18n }) => {
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white sticky top-0 z-50 border-b border-sky-100 shadow-sm">
        <Link to="/lansyn-tsatsal" className="text-2xl font-bold tracking-tight flex items-center gap-3 text-sky-600">
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

const LansynTsatsalContact = () => {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "googormaaochirsuren@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <LansynNavbar t={t} i18n={i18n} />

      {/* Header Section - Fresh Sky Blue Theme */}
      <section className="bg-sky-900 text-white py-24 px-6 relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

        <div className="container mx-auto text-center relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Link to="/lansyn-tsatsal" className="inline-flex items-center gap-2 text-sky-200 hover:text-white mb-8 font-bold uppercase text-xs tracking-[0.2em] transition-colors">
                    <ArrowLeft size={14} /> {t('contact.back')}
                </Link>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    {t('contactPage.hero.title')}
                </h1>
                <p className="text-xl text-sky-200 max-w-2xl mx-auto font-light">
                    {t('contactPage.hero.subtitle')}
                </p>
            </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Phone Card */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-sky-100 hover:border-sky-500 transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-16 h-16 bg-sky-50 text-sky-600 flex items-center justify-center rounded-full group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Phone size={28} />
                </div>
                <div>
                    <h4 className="font-bold uppercase text-slate-400 text-xs tracking-widest mb-2">{t('contactPage.info.phoneLabel')}</h4>
                    <a href="tel:+97669696967" className="text-2xl font-bold block text-slate-800 hover:text-sky-600 transition-colors">
                        +976 69696967
                    </a>
                    <p className="text-slate-400 mt-1 text-sm">{t('contactPage.info.hours')}</p>
                </div>
            </div>

            {/* Email Card - WITH COPY BUTTON */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-sky-100 hover:border-sky-500 transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-16 h-16 bg-sky-50 text-sky-600 flex items-center justify-center rounded-full group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Mail size={28} />
                </div>
                <div className="flex-grow min-w-0">
                    <h4 className="font-bold uppercase text-slate-400 text-xs tracking-widest mb-2">{t('contactPage.info.emailLabel')}</h4>
                    
                    <div className="flex items-center gap-3 justify-center md:justify-start flex-wrap">
                        <a href="mailto:googormaaochirsuren@gmail.com" className="text-lg font-bold break-all text-slate-800 hover:text-sky-600 transition-colors">
                            googormaaochirsuren@gmail.com
                        </a>
                        
                        {/* COPY BUTTON */}
                        <button 
                            onClick={handleCopy}
                            className="p-2 rounded-full hover:bg-sky-50 text-slate-400 hover:text-sky-600 transition-colors relative"
                            title="Copy Email"
                        >
                            {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                            {copied && (
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                                    Copied!
                                </span>
                            )}
                        </button>
                    </div>

                    <p className="text-slate-400 mt-1 text-sm">{t('contactPage.info.inquiryLabel')}</p>
                </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-sky-100 hover:border-sky-500 transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6 md:col-span-2">
                <div className="w-16 h-16 bg-sky-50 text-sky-600 flex items-center justify-center rounded-full group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <MapPin size={28} />
                </div>
                <div>
                    <h4 className="font-bold uppercase text-slate-400 text-xs tracking-widest mb-2">{t('contactPage.info.officeLabel')}</h4>
                    <p className="text-2xl font-bold text-slate-800">{t('contactPage.info.city')}</p>
                    <p className="text-slate-500 mt-1 text-lg">{t('contactPage.info.district')}</p>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LansynTsatsalContact;