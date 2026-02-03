// src/pages/LansynTsatsal.jsx
import { motion } from "framer-motion";
import { ArrowLeft, Droplets, Sun, Sprout, MapPin, Phone, Mail, Globe } from "lucide-react"; // Added Globe
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next"; // Hook

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
            <span className="text-slate-800">Lansyn Tsatsal LLC</span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-medium text-slate-600 items-center">
            <Link to="/" className="hover:text-sky-600 transition-colors">{t('lansyn.nav.group')}</Link>
            <a href="#farm" className="hover:text-sky-600 transition-colors">{t('lansyn.nav.farm')}</a>
            
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

const LansynTsatsal = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      <LansynNavbar t={t} i18n={i18n} />

      {/* 1. Bright Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="GreenPasture.jpeg" 
            alt="Green Pastures" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl text-white"
            >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/30">
                    <Sun size={16} className="text-yellow-300" /> {t('lansyn.hero.est')}
                </div>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                    {t('lansyn.hero.title')} <br/> <span className="text-sky-300">{t('lansyn.hero.subtitle')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-100 mb-10 font-light leading-relaxed">
                    {t('lansyn.hero.desc')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                        to="/lansyn-tsatsal/contact" 
                        className="bg-white text-sky-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-sky-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                    >
                        {t('lansyn.hero.partner')}
                    </Link>
                    <Link 
                        to="/" 
                        className="bg-sky-600/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-sky-600/50 transition-all border border-white/30 flex items-center justify-center gap-2"
                    >
                         <ArrowLeft size={20} /> {t('lansyn.hero.back')}
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 2. Features Grid */}
      <section id="farm" className="py-24 bg-sky-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('lansyn.features.title')}</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">{t('lansyn.features.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Sprout size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{t('lansyn.features.eco.title')}</h3>
                    <p className="text-slate-500">{t('lansyn.features.eco.desc')}</p>
                </div>
                <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group">
                    <div className="w-20 h-20 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Droplets size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{t('lansyn.features.dairy.title')}</h3>
                    <p className="text-slate-500">{t('lansyn.features.dairy.desc')}</p>
                </div>
                <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group">
                    <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <MapPin size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{t('lansyn.features.loc.title')}</h3>
                    <p className="text-slate-500">{t('lansyn.features.loc.desc')}</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Simple Contact Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-3xl p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('lansyn.contact.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white text-sky-600 rounded-full">
                            <Phone size={24} />
                        </div>
                        <div>
                            <div className="text-sky-200 text-sm font-bold uppercase">{t('lansyn.contact.call')}</div>
                            <div className="text-2xl font-bold">+976 9911-XXXX</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="p-3 bg-white text-sky-600 rounded-full">
                            <Mail size={24} />
                        </div>
                        <div>
                            <div className="text-sky-200 text-sm font-bold uppercase">{t('lansyn.contact.email')}</div>
                            <div className="text-2xl font-bold">info@lansyn.mn</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LansynTsatsal;