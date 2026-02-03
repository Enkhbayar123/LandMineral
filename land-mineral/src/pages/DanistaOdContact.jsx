// src/pages/DanistaOdContact.jsx
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
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

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <DanistaNavbar t={t} i18n={i18n} />

      {/* Header */}
      <section className="bg-slate-900 text-white py-20 px-6 border-b-8 border-orange-500">
        <div className="container mx-auto text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Link to="/danista-od" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 font-bold uppercase text-sm tracking-widest">
                    <ArrowLeft size={16} /> {t('danista.contact.back')}
                </Link>
                <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tight">
                    {t('danista.contact.title')}
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    {t('danista.contact.subtitle')}
                </p>
            </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-8">
                <div className="flex items-start gap-6 p-6 border-2 border-slate-100 hover:border-orange-500 transition-colors group">
                    <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold uppercase text-slate-400 text-sm">{t('danista.contact.phone')}</h4>
                        <p className="text-2xl font-black">+976 9911-XXXX</p>
                    </div>
                </div>

                <div className="flex items-start gap-6 p-6 border-2 border-slate-100 hover:border-orange-500 transition-colors group">
                    <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold uppercase text-slate-400 text-sm">{t('danista.contact.email')}</h4>
                        <p className="text-2xl font-black">info@danista.mn</p>
                    </div>
                </div>

                 <div className="flex items-start gap-6 p-6 border-2 border-slate-100 hover:border-orange-500 transition-colors group">
                    <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold uppercase text-slate-400 text-sm">{t('danista.contact.location')}</h4>
                        <p className="text-xl font-bold">Erdenet City</p>
                        <p className="text-slate-500">Orkhon Province, Mongolia</p>
                    </div>
                </div>
            </div>

            {/* Right Column: Business Hours */}
            <div className="bg-slate-50 p-10 border-t-4 border-orange-500">
                <div className="flex items-center gap-3 mb-8">
                    <Clock size={32} className="text-orange-500" />
                    <h3 className="text-2xl font-black uppercase">{t('danista.contact.hours')}</h3>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="text-sm font-bold uppercase text-slate-400">{t('danista.contact.weekdays')}</p>
                        <p className="text-xl font-bold">09:00 - 20:00</p>
                    </div>
                    <div>
                        <p className="text-sm font-bold uppercase text-slate-400">{t('danista.contact.weekend')}</p>
                        <p className="text-xl font-bold">10:00 - 18:00</p>
                    </div>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DanistaOdContact;