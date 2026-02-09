// src/pages/VajraWisdomContact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, MapPin, Globe, Copy, Check } from "lucide-react";
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
             {/* LOGO IMAGE */}
            <img 
              src="/vajra-logo.png" 
              alt="Vajra Wisdom Logo" 
              className="w-12 h-12 object-contain" 
            />
            <span className="text-amber-400">Vajra Wisdom</span>
        </Link>
        <div className="hidden md:flex gap-8 font-medium text-indigo-100 items-center text-sm uppercase tracking-widest">
            <Link to="/" className="hover:text-amber-400 transition-colors">{t('vajra.nav.group')}</Link>
            
            <Link to="/vajra-wisdom/retreat" className="hover:text-amber-400 transition-colors">
                {t('vajra.nav.retreat')}
            </Link>
            <Link to="/vajra-wisdom#initiatives" className="hover:text-amber-400 transition-colors">{t('vajra.nav.tourism')}</Link>
            
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

const VajraWisdomContact = () => {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "googormaaochirsuren@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-indigo-950 min-h-screen text-white font-sans selection:bg-amber-500 selection:text-indigo-950">
      <VajraNavbar t={t} i18n={i18n} />

      {/* Header - Midnight Blue & Gold Theme */}
      <section className="py-20 px-6 border-b border-indigo-900 bg-indigo-900/20 relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <div className="container mx-auto text-center relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Link to="/vajra-wisdom" className="inline-flex items-center gap-2 text-indigo-400 hover:text-amber-400 mb-6 font-bold uppercase text-xs tracking-widest transition-colors">
                    <ArrowLeft size={14} /> {t('contact back')} {/* Or use specific translation */}
                </Link>
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight text-white">
                    {t('contactPage.hero.title')}
                </h1>
                <p className="text-xl text-indigo-200 max-w-2xl mx-auto font-light">
                    {t('contactPage.hero.subtitle')}
                </p>
            </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Phone Card */}
            <div className="bg-indigo-900/40 p-10 border border-indigo-800 hover:border-amber-500/50 transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6 rounded-sm">
                <div className="w-16 h-16 bg-indigo-950 border border-indigo-700 text-amber-400 flex items-center justify-center shrink-0 rounded-full group-hover:bg-amber-500 group-hover:text-indigo-950 transition-colors">
                    <Phone size={24} />
                </div>
                <div>
                    <h4 className="font-bold uppercase text-indigo-400 text-xs tracking-widest mb-2">{t('contactPage.info.phoneLabel')}</h4>
                    <a href="tel:+97669696967" className="text-2xl font-serif block text-white hover:text-amber-400 transition-colors">
                        +976 69696967
                    </a>
                    <p className="text-indigo-400 mt-1 text-sm">{t('contactPage.info.hours')}</p>
                </div>
            </div>

            {/* Email Card - WITH COPY BUTTON */}
            <div className="bg-indigo-900/40 p-10 border border-indigo-800 hover:border-amber-500/50 transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6 rounded-sm">
                <div className="w-16 h-16 bg-indigo-950 border border-indigo-700 text-amber-400 flex items-center justify-center shrink-0 rounded-full group-hover:bg-amber-500 group-hover:text-indigo-950 transition-colors">
                    <Mail size={24} />
                </div>
                <div className="flex-grow min-w-0">
                    <h4 className="font-bold uppercase text-indigo-400 text-xs tracking-widest mb-2">{t('contactPage.info.emailLabel')}</h4>
                    
                    <div className="flex items-center gap-3 justify-center md:justify-start flex-wrap">
                        <a href="mailto:googormaaochirsuren@gmail.com" className="text-lg font-serif break-all text-white hover:text-amber-400 transition-colors">
                            googormaaochirsuren@gmail.com
                        </a>
                        
                        {/* COPY BUTTON */}
                        <button 
                            onClick={handleCopy}
                            className="p-2 rounded-full hover:bg-indigo-800 text-indigo-400 hover:text-amber-400 transition-colors relative"
                            title="Copy Email"
                        >
                            {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                            {copied && (
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-950 border border-indigo-700 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                                    Copied!
                                </span>
                            )}
                        </button>
                    </div>

                    <p className="text-indigo-400 mt-1 text-sm">{t('contactPage.info.inquiryLabel')}</p>
                </div>
            </div>

            {/* Location Card */}
            <div className="bg-indigo-900/40 p-10 border border-indigo-800 hover:border-amber-500/50 transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6 md:col-span-2 rounded-sm">
                <div className="w-16 h-16 bg-indigo-950 border border-indigo-700 text-amber-400 flex items-center justify-center shrink-0 rounded-full group-hover:bg-amber-500 group-hover:text-indigo-950 transition-colors">
                    <MapPin size={24} />
                </div>
                <div>
                    <h4 className="font-bold uppercase text-indigo-400 text-xs tracking-widest mb-2">{t('contactPage.info.officeLabel')}</h4>
                    <p className="text-2xl font-serif text-white">{t('contactPage.info.city')}</p>
                    <p className="text-indigo-400 mt-1 text-lg">{t('contactPage.info.district')}</p>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VajraWisdomContact;