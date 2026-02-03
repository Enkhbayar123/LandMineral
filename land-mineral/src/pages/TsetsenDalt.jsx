// src/pages/TsetsenDalt.jsx
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Factory, Truck, Snowflake, Phone, Globe } from "lucide-react"; // Added Globe
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next"; // Import translation hook

// We pass 't' and 'i18n' to the Navbar so it can switch languages
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
        <Link to="/" className="hover:underline">{t('tsetsen.nav.group')}</Link>
        <a href="#products" className="hover:underline">{t('tsetsen.nav.products')}</a>
        <a href="#factory" className="hover:underline">{t('tsetsen.nav.factory')}</a>
        
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

const TsetsenDalt = () => {
  const { t, i18n } = useTranslation();
  
  // Get list from translations
  const standardList = t('tsetsen.content.list', { returnObjects: true });
  const standardArray = Object.values(standardList);

  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white">
      <CustomNavbar t={t} i18n={i18n} />

      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/Mongolian_cattle.webp" alt="Mongolian Cattle" className="w-full h-full object-cover grayscale opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/10" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block border-2 border-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                    {t('tsetsen.hero.est')}
                </div>
                <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter">
                    {t('tsetsen.hero.title')} <br/> {t('tsetsen.hero.subtitle')}
                </h1>
                <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                    {t('tsetsen.hero.desc')}
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link to="/tsetsen-dalt/contact" className="bg-black text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-zinc-800 transition-all border-2 border-black">
                        {t('tsetsen.hero.order')}
                    </Link>
                    <Link to="/" className="bg-white text-black px-10 py-4 rounded-none font-bold text-lg hover:bg-zinc-100 transition-all border-2 border-black flex items-center justify-center gap-2">
                         <ArrowLeft size={20} /> {t('tsetsen.hero.back')}
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 2. Grid Section */}
      <section id="factory" className="py-0 border-y-4 border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
            <div className="p-12 text-center hover:bg-black hover:text-white transition-colors duration-500 group">
                <Factory size={48} className="mx-auto mb-6 text-black group-hover:text-white transition-colors" />
                <h3 className="text-5xl font-black mb-2">3.5<span className="text-2xl">ha</span></h3>
                <p className="font-bold uppercase tracking-widest text-sm">{t('tsetsen.stats.factory')}</p>
            </div>
            <div className="p-12 text-center bg-black text-white">
                <Snowflake size={48} className="mx-auto mb-6" />
                <h3 className="text-5xl font-black mb-2">200<span className="text-2xl">t</span></h3>
                <p className="font-bold uppercase tracking-widest text-sm text-zinc-400">{t('tsetsen.stats.freeze')}</p>
            </div>
            <div className="p-12 text-center hover:bg-black hover:text-white transition-colors duration-500 group">
                <Truck size={48} className="mx-auto mb-6 text-black group-hover:text-white transition-colors" />
                <h3 className="text-5xl font-black mb-2">INTL</h3>
                <p className="font-bold uppercase tracking-widest text-sm">{t('tsetsen.stats.export')}</p>
            </div>
        </div>
      </section>

      {/* 3. Info Section */}
      <section id="products" className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[500px] lg:h-auto bg-zinc-100 relative overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-black">
               <img src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2670&auto=format&fit=crop" alt="Meat Processing" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>

          <div className="p-12 lg:p-24 flex flex-col justify-center bg-white">
               <h2 className="text-4xl font-black mb-8 uppercase">{t('tsetsen.content.title')}</h2>
               <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                   {t('tsetsen.content.desc')}
               </p>
               
               <ul className="space-y-6">
                   {standardArray.map((item, idx) => (
                       <li key={idx} className="flex items-center gap-4 text-xl font-bold">
                           <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shrink-0">
                               <CheckCircle2 size={14} />
                           </div>
                           {item}
                       </li>
                   ))}
               </ul>

               <div className="mt-12 pt-12 border-t-2 border-zinc-100">
                   <div className="flex items-center gap-4">
                       <div className="p-4 bg-zinc-100 rounded-full">
                           <Phone size={24} />
                       </div>
                       <div>
                           <div className="text-sm font-bold uppercase text-zinc-400">{t('tsetsen.content.sales')}</div>
                           <div className="text-xl font-black">+976 9911-XXXX</div>
                       </div>
                   </div>
               </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default TsetsenDalt;