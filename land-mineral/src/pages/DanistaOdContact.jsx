// src/pages/DanistaOdContact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, MapPin, Globe, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const DanistaNavbar = ({ t, i18n }) => {
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white border-b-4 border-orange-500 text-slate-900 sticky top-0 z-50 shadow-sm">
        <Link to="/danista-od" className="text-2xl font-black tracking-tighter uppercase flex items-center gap-3">
             {/* If you have the logo, uncomment below */}
            {<img src="/danista-logo.png" alt="Danista Logo" className="w-10 h-10 object-contain" />}
            
            <span>Danista-Od</span>
        </Link>
        <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wide items-center">
            <Link to="/" className="hover:text-orange-600 transition-colors">{t('danista.nav.group')}</Link>
            <Link to="/danista-od#services" className="hover:text-orange-600 transition-colors">{t('danista.nav.services')}</Link>
            
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

const DanistaOdContact = () => {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "googormaaochirsuren@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
      <DanistaNavbar t={t} i18n={i18n} />

      {/* Header - Industrial Grey & Orange Theme */}
      <section className="bg-slate-900 text-white py-24 px-6 border-b-8 border-orange-500 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

        <div className="container mx-auto text-center relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Link to="/danista-od" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 font-bold uppercase text-xs tracking-[0.2em] transition-colors">
                    <ArrowLeft size={14} /> {t('contact back')} {/* Or use specific translation if preferred */}
                </Link>
                <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tight">
                    {t('contactPage.hero.title')}
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    {t('contactPage.hero.subtitle')}
                </p>
            </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Phone Card */}
            <div className="bg-white p-10 border-2 border-slate-100 hover:border-orange-500 transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                    <Phone size={28} />
                </div>
                <div>
                    <h4 className="font-bold uppercase text-slate-400 text-xs tracking-widest mb-2">{t('contactPage.info.phoneLabel')}</h4>
                    <a href="tel:+97669696967" className="text-2xl font-black block text-slate-900 hover:text-orange-600 transition-colors">
                        +976 69696967
                    </a>
                    <p className="text-slate-500 mt-1 text-sm font-medium">{t('contactPage.info.hours')}</p>
                </div>
            </div>

            {/* Email Card - WITH COPY BUTTON */}
            <div className="bg-white p-10 border-2 border-slate-100 hover:border-orange-500 transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                    <Mail size={28} />
                </div>
                <div className="flex-grow min-w-0">
                    <h4 className="font-bold uppercase text-slate-400 text-xs tracking-widest mb-2">{t('contactPage.info.emailLabel')}</h4>
                    
                    <div className="flex items-center gap-3 justify-center md:justify-start flex-wrap">
                        <a href="mailto:googormaaochirsuren@gmail.com" className="text-lg font-bold break-all text-slate-900 hover:text-orange-600 transition-colors">
                            googormaaochirsuren@gmail.com
                        </a>
                        
                        {/* COPY BUTTON */}
                        <button 
                            onClick={handleCopy}
                            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-orange-600 transition-colors relative"
                            title="Copy Email"
                        >
                            {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                            {copied && (
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap font-bold">
                                    Copied!
                                </span>
                            )}
                        </button>
                    </div>

                    <p className="text-slate-500 mt-1 text-sm font-medium">{t('contactPage.info.inquiryLabel')}</p>
                </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-10 border-2 border-slate-100 hover:border-orange-500 transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6 md:col-span-2 shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                    <MapPin size={28} />
                </div>
                <div>
                    <h4 className="font-bold uppercase text-slate-400 text-xs tracking-widest mb-2">{t('contactPage.info.officeLabel')}</h4>
                    <p className="text-2xl font-black text-slate-900">{t('contactPage.info.city')}</p>
                    <p className="text-slate-500 mt-1 text-lg font-medium">{t('contactPage.info.district')}</p>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DanistaOdContact;