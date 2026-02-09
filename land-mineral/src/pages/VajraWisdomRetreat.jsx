// src/pages/VajraWisdomRetreat.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Globe, X, ZoomIn, Heart, Sun, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

// --- NAVBAR (Updated with Retreat Link) ---
const VajraNavbar = ({ t, i18n }) => {
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-indigo-950 text-white sticky top-0 z-50 shadow-lg border-b border-white/10">
        <Link to="/vajra-wisdom" className="text-2xl font-serif font-bold tracking-wide flex items-center gap-3">
             <img src="/vajra-logo.png" alt="Vajra Logo" className="w-12 h-12 object-contain" />
            <span className="text-amber-400">Vajra Wisdom</span>
        </Link>
        <div className="hidden md:flex gap-8 font-medium text-indigo-100 items-center text-sm uppercase tracking-widest">
            <Link to="/" className="hover:text-amber-400 transition-colors">{t('vajra.nav.group')}</Link>
            <Link to="/vajra-wisdom" className="hover:text-amber-400 transition-colors">{t('vajra.nav.tourism')}</Link>
            
            {/* ACTIVE LINK */}
            <Link to="/vajra-wisdom/retreat" className="text-amber-400 border-b border-amber-400">
                {t('vajra.nav.retreat')}
            </Link>
            
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

// --- IMAGE DATA ---
const images = [
  { src: "/vajra-gallery/retreat-1.jpg", alt: "Resort Aerial View" },
  { src: "/vajra-gallery/retreat-2.jpg", alt: "Winter Meditation" },
  { src: "/vajra-gallery/retreat-3.jpg", alt: "Luxury Interiors" },
  { src: "/vajra-gallery/retreat-4.jpg", alt: "Golden Hall" },
];

const VajraWisdomRetreat = () => {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-indigo-950 min-h-screen font-sans text-white selection:bg-amber-500 selection:text-indigo-900">
      <VajraNavbar t={t} i18n={i18n} />

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>
        
        <div className="container mx-auto text-center relative z-10">
             <Link to="/vajra-wisdom" className="inline-flex items-center gap-2 text-indigo-300 hover:text-amber-400 mb-8 font-bold uppercase text-xs tracking-[0.2em] transition-colors">
                <ArrowLeft size={14} /> {t('vajra.retreatPage.back')}
            </Link>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight"
            >
                {t('vajra.retreatPage.title')}
            </motion.h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto font-light leading-relaxed">
                {t('vajra.retreatPage.subtitle')}
            </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-sm text-center max-w-4xl mx-auto backdrop-blur-sm">
            <div className="flex justify-center gap-4 mb-6 text-amber-400">
                <Heart size={28} />
                <Sparkles size={28} />
                <Sun size={28} />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-white">{t('vajra.retreatPage.missionTitle')}</h2>
            <p className="text-indigo-200 text-lg">
                {t('vajra.retreatPage.missionDesc')}
            </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((img, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group cursor-pointer overflow-hidden rounded-sm border border-white/10 shadow-2xl"
                    onClick={() => setSelectedImage(img.src)}
                >
                    <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-indigo-950/0 group-hover:bg-indigo-950/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ZoomIn className="text-white drop-shadow-lg" size={40} />
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
                onClick={() => setSelectedImage(null)}
            >
                <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                    <X size={40} />
                </button>
                <motion.img 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    src={selectedImage} 
                    className="max-w-full max-h-[90vh] rounded-sm shadow-2xl object-contain border border-white/10"
                    onClick={(e) => e.stopPropagation()} 
                />
            </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default VajraWisdomRetreat;