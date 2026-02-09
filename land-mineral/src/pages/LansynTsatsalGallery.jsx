// src/pages/LansynTsatsalGallery.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Globe, X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

// --- NAVBAR (Updated with Gallery Link) ---
const LansynNavbar = ({ t, i18n }) => {
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white sticky top-0 z-50 border-b border-sky-100 shadow-sm">
        
        <Link to="/lansyn-tsatsal" className="text-2xl font-bold tracking-tight flex items-center gap-3 text-sky-600">
            <span className="text-slate-800">Lansyn Tsatsal</span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-medium text-slate-600 items-center text-sm uppercase tracking-wide">
            <Link to="/" className="hover:text-sky-600 transition-colors">{t('lansyn.nav.group')}</Link>
            <Link to="/lansyn-tsatsal" className="hover:text-sky-600 transition-colors">{t('lansyn.nav.farm')}</Link>
            
            {/* ACTIVE LINK */}
            <Link to="/lansyn-tsatsal/gallery" className="text-sky-600 font-bold">
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

// --- IMAGE DATA ---
const images = [
  { src: "/lansyn-gallery/farm-1.jpeg", alt: "Horse in stable" },
  { src: "/lansyn-gallery/farm-2.jpeg", alt: "Cows feeding" },
  { src: "/lansyn-gallery/farm-3.jpeg", alt: "Horses resting" },
  { src: "/lansyn-gallery/farm-4.jpeg", alt: "Stable interior" },
  { src: "/lansyn-gallery/farm-5.jpeg", alt: "Horse with coat" },
  { src: "/lansyn-gallery/farm-6.jpeg", alt: "Two horses" },
  { src: "/lansyn-gallery/farm-7.jpeg", alt: "Foal in blue coat" },
  { src: "/lansyn-gallery/farm-8.jpeg", alt: "Shelter construction" },
  { src: "/lansyn-gallery/farm-9.jpeg", alt: "Farm exterior" },
  { src: "/lansyn-gallery/farm-10.jpeg", alt: "White horse" },
];

const LansynTsatsalGallery = () => {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <LansynNavbar t={t} i18n={i18n} />

      {/* Header */}
      <section className="bg-sky-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl -ml-10 -mt-10 pointer-events-none"></div>
        <div className="container mx-auto text-center relative z-10">
             <Link to="/lansyn-tsatsal" className="inline-flex items-center gap-2 text-sky-200 hover:text-white mb-6 font-bold uppercase text-xs tracking-[0.2em] transition-colors">
                <ArrowLeft size={14} /> {t('lansyn.galleryPage.back')}
            </Link>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
            >
                {t('lansyn.galleryPage.title')}
            </motion.h1>
            <p className="text-lg text-sky-200 max-w-2xl mx-auto">
                {t('lansyn.galleryPage.subtitle')}
            </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group break-inside-avoid cursor-pointer overflow-hidden rounded-2xl shadow-md"
                    onClick={() => setSelectedImage(img.src)}
                >
                    <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ZoomIn className="text-white drop-shadow-md" size={32} />
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
                className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
            >
                <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
                    <X size={40} />
                </button>
                <motion.img 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    src={selectedImage} 
                    className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                />
            </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default LansynTsatsalGallery;