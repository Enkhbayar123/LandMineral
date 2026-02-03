// src/pages/VajraWisdomContact.jsx
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
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

  return (
    <div className="bg-indigo-950 min-h-screen text-white font-sans selection:bg-amber-500 selection:text-indigo-950">
      <VajraNavbar t={t} i18n={i18n} />

      {/* Header */}
      <section className="py-20 px-6 border-b border-indigo-900 bg-indigo-900/20">
        <div className="container mx-auto text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Link to="/vajra-wisdom" className="inline-flex items-center gap-2 text-indigo-400 hover:text-amber-400 mb-6 font-bold uppercase text-xs tracking-widest transition-colors">
                    <ArrowLeft size={16} /> {t('vajra.contact.back')}
                </Link>
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight text-white">
                    {t('vajra.contact.title')}
                </h1>
                <p className="text-xl text-indigo-200 max-w-2xl mx-auto font-light">
                    {t('vajra.contact.subtitle')}
                </p>
            </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Left Column: Contact Details */}
            <div className="space-y-6">
                <div className="flex items-center gap-6 p-8 bg-indigo-900/40 border border-indigo-800 rounded-lg hover:border-amber-500/50 transition-colors group">
                    <div className="w-12 h-12 bg-indigo-950 border border-indigo-700 text-amber-400 flex items-center justify-center shrink-0 rounded-full group-hover:bg-amber-500 group-hover:text-indigo-950 transition-colors">
                        <Phone size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold uppercase text-indigo-400 text-xs tracking-widest mb-1">{t('vajra.contact.phone')}</h4>
                        <p className="text-2xl font-serif text-white">+976 9911-XXXX</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 p-8 bg-indigo-900/40 border border-indigo-800 rounded-lg hover:border-amber-500/50 transition-colors group">
                    <div className="w-12 h-12 bg-indigo-950 border border-indigo-700 text-amber-400 flex items-center justify-center shrink-0 rounded-full group-hover:bg-amber-500 group-hover:text-indigo-950 transition-colors">
                        <Mail size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold uppercase text-indigo-400 text-xs tracking-widest mb-1">{t('vajra.contact.email')}</h4>
                        <p className="text-2xl font-serif text-white">contact@vajra.mn</p>
                    </div>
                </div>

                 <div className="flex items-center gap-6 p-8 bg-indigo-900/40 border border-indigo-800 rounded-lg hover:border-amber-500/50 transition-colors group">
                    <div className="w-12 h-12 bg-indigo-950 border border-indigo-700 text-amber-400 flex items-center justify-center shrink-0 rounded-full group-hover:bg-amber-500 group-hover:text-indigo-950 transition-colors">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold uppercase text-indigo-400 text-xs tracking-widest mb-1">{t('vajra.contact.location')}</h4>
                        <p className="text-xl font-serif text-white">Ulaanbaatar, Mongolia</p>
                    </div>
                </div>
            </div>

            {/* Right Column: Decorative & Hours */}
            <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 p-10 border border-indigo-800 rounded-lg flex flex-col justify-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
                
                <Clock size={40} className="text-amber-400 mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold text-white mb-8">{t('vajra.contact.hours')}</h3>
                
                <div className="space-y-4">
                    <div className="flex justify-between border-b border-indigo-800 pb-2">
                        <span className="text-indigo-300 text-sm uppercase tracking-wider">{t('vajra.contact.weekdays')}</span>
                        <span className="text-white font-bold">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between border-b border-indigo-800 pb-2">
                        <span className="text-indigo-300 text-sm uppercase tracking-wider">Saturday - Sunday</span>
                        <span className="text-amber-500 font-bold">Closed</span>
                    </div>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VajraWisdomContact;