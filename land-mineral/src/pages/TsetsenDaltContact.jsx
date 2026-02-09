// src/pages/TsetsenDaltContact.jsx
import { useState } from "react"; // <--- Added useState
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, MapPin, Globe, Copy, Check } from "lucide-react"; // <--- Added Copy, Check
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const TsetsenNavbar = ({ t, i18n }) => {
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white sticky top-0 z-50 border-b border-neutral-200">
        <Link to="/tsetsen-dalt" className="text-2xl font-black tracking-tighter uppercase flex items-center gap-3">
             {/* If you have a specific logo for Tsetsen, put it here. Otherwise, text is fine */}
            <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center rounded-sm font-bold text-xl">T</div>
            <span className="text-neutral-900">Tsetsen Dalt</span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest items-center text-neutral-600">
            <Link to="/" className="hover:text-black transition-colors">{t('tsetsen.nav.group')}</Link>
            <Link to="/tsetsen-dalt#products" className="hover:text-black transition-colors">{t('tsetsen.nav.products')}</Link>
            
            <button onClick={toggleLanguage} className="flex items-center gap-1 hover:text-black">
                <Globe size={14} /> {i18n.language === 'en' ? 'MN' : 'EN'}
            </button>

            <Link to="/tsetsen-dalt/contact" className="px-6 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
                {t('tsetsen.nav.contact')}
            </Link>
        </div>
    </nav>
  );
};

const TsetsenDaltContact = () => {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false); // <--- State for copy feedback

  const handleCopy = () => {
    const email = "googormaaochirsuren@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="bg-white min-h-screen font-sans text-neutral-900">
      <TsetsenNavbar t={t} i18n={i18n} />

      {/* Header Section */}
      <section className="bg-neutral-900 text-white py-24 px-6">
        <div className="container mx-auto text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Link to="/tsetsen-dalt" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 font-bold uppercase text-xs tracking-[0.2em] transition-colors">
                    <ArrowLeft size={14} /> {t('tsetsen.contact.back')}
                </Link>
                <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">
                    {t('contactPage.hero.title')}
                </h1>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
                    {t('contactPage.hero.subtitle')}
                </p>
            </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Phone Card */}
            <div className="p-10 border border-neutral-200 hover:border-black transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-16 h-16 bg-neutral-100 text-neutral-900 flex items-center justify-center rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <Phone size={28} />
                </div>
                <div>
                    <h4 className="font-bold uppercase text-neutral-400 text-xs tracking-widest mb-2">{t('contactPage.info.phoneLabel')}</h4>
                    <a href="tel:+97669696967" className="text-2xl font-black block hover:underline decoration-neutral-400 underline-offset-4">
                        +976 69696967
                    </a>
                    <p className="text-neutral-500 mt-1 text-sm">{t('contactPage.info.hours')}</p>
                </div>
            </div>

            {/* Email Card - UPDATED WITH COPY BUTTON */}
            <div className="p-10 border border-neutral-200 hover:border-black transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-16 h-16 bg-neutral-100 text-neutral-900 flex items-center justify-center rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <Mail size={28} />
                </div>
                <div className="flex-grow min-w-0"> {/* min-w-0 helps with text truncation if needed */}
                    <h4 className="font-bold uppercase text-neutral-400 text-xs tracking-widest mb-2">{t('contactPage.info.emailLabel')}</h4>
                    
                    <div className="flex items-center gap-3 justify-center md:justify-start flex-wrap">
                        <a href="mailto:googormaaochirsuren@gmail.com" className="text-lg font-bold break-all hover:underline decoration-neutral-400 underline-offset-4">
                            googormaaochirsuren@gmail.com
                        </a>
                        
                        {/* THE COPY BUTTON */}
                        <button 
                            onClick={handleCopy}
                            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors relative"
                            title="Copy Email"
                        >
                            {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                            {copied && (
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                                    Copied!
                                </span>
                            )}
                        </button>
                    </div>

                    <p className="text-neutral-500 mt-1 text-sm">{t('contactPage.info.inquiryLabel')}</p>
                </div>
            </div>

            {/* Location Card */}
            <div className="p-10 border border-neutral-200 hover:border-black transition-colors group text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6 md:col-span-2">
                <div className="w-16 h-16 bg-neutral-100 text-neutral-900 flex items-center justify-center rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <MapPin size={28} />
                </div>
                <div>
                    <h4 className="font-bold uppercase text-neutral-400 text-xs tracking-widest mb-2">{t('contactPage.info.officeLabel')}</h4>
                    <p className="text-2xl font-black">{t('contactPage.info.city')}</p>
                    <p className="text-neutral-500 mt-1 text-lg">{t('contactPage.info.district')}</p>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TsetsenDaltContact;