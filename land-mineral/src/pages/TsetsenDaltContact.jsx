// src/pages/TsetsenDaltContact.jsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowLeft, Globe } from "lucide-react"; // Added Globe
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next"; // Import hook

const CustomNavbar = ({ t, i18n }) => {
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white border-b-4 border-black text-black">
      <Link to="/tsetsen-dalt" className="font-black text-2xl tracking-tighter uppercase flex items-center gap-3">
        <img src="/TsetsenDaltLogo.png" alt="Tsetsen Dalt Logo" className="w-12 h-12 object-contain" />
        <span>Tsetsen Dalt Trade LLC</span>
      </Link>
      <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wide items-center">
        <Link to="/tsetsen-dalt" className="hover:underline">{t('tsetsen.nav.group')}</Link>
        <Link to="/tsetsen-dalt#products" className="hover:underline">{t('tsetsen.nav.products')}</Link>
        
        {/* Language Toggle */}
        <button onClick={toggleLanguage} className="flex items-center gap-1 hover:text-zinc-600">
           <Globe size={16} /> {i18n.language === 'en' ? 'MN' : 'EN'}
        </button>

        <Link to="/tsetsen-dalt/contact" className="px-6 py-2 bg-black text-white rounded-full hover:bg-zinc-800 transition-colors">
            {t('tsetsen.nav.contact')}
        </Link>
      </div>
    </nav>
  );
};

const TsetsenDaltContact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white">
      <CustomNavbar t={t} i18n={i18n} />
      
      {/* Header */}
      <section className="bg-black text-white py-20 px-6">
        <div className="container mx-auto text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Link to="/tsetsen-dalt" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-6 font-bold uppercase text-sm tracking-widest">
                    <ArrowLeft size={16} /> {t('tsetsen.contact.back')}
                </Link>
                <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">
                    {t('tsetsen.contact.title')}
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                    {t('tsetsen.contact.subtitle')}
                </p>
            </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
            
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                
                {/* Phone */}
                <div className="flex flex-col items-center md:items-start p-8 border-4 border-black hover:bg-black hover:text-white transition-colors group">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                        <Phone size={32} />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-sm text-zinc-500 mb-2 group-hover:text-zinc-400">{t('tsetsen.contact.sales')}</h4>
                    <p className="text-2xl font-black">+976 9911-XXXX</p>
                    <p className="text-lg font-medium opacity-80">+976 7711-XXXX</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center md:items-start p-8 border-4 border-black hover:bg-black hover:text-white transition-colors group">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                        <Mail size={32} />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-sm text-zinc-500 mb-2 group-hover:text-zinc-400">{t('tsetsen.contact.email')}</h4>
                    <p className="text-xl font-black break-all">sales@tsetsendalt.mn</p>
                    <p className="text-lg font-medium opacity-80 break-all">export@tsetsendalt.mn</p>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center md:items-start p-8 border-4 border-black hover:bg-black hover:text-white transition-colors group">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                        <MapPin size={32} />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-sm text-zinc-500 mb-2 group-hover:text-zinc-400">{t('tsetsen.contact.location')}</h4>
                    <p className="text-xl font-black">{t('tsetsen.contact.zone')}</p>
                    <p className="text-lg font-medium opacity-80">{t('tsetsen.contact.district')}</p>
                </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-16 bg-zinc-50 border-t-4 border-black p-12 text-center">
                <h3 className="text-2xl font-black uppercase mb-6">{t('tsetsen.contact.hours.title')}</h3>
                <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
                    <div>
                        <span className="block text-zinc-500 text-sm font-bold uppercase">{t('tsetsen.contact.hours.mon')}</span>
                        <span className="font-black text-xl">08:00 - 18:00</span>
                    </div>
                    <div>
                        <span className="block text-zinc-500 text-sm font-bold uppercase">{t('tsetsen.contact.hours.sat')}</span>
                        <span className="font-black text-xl">09:00 - 14:00</span>
                    </div>
                    <div>
                        <span className="block text-zinc-500 text-sm font-bold uppercase">{t('tsetsen.contact.hours.sun')}</span>
                        <span className="font-black text-xl text-red-600">{t('tsetsen.contact.hours.closed')}</span>
                    </div>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TsetsenDaltContact;