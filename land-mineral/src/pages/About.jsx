// src/pages/About.jsx
import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Globe2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next"; // Added Trans for HTML support

const About = () => {
  const { t } = useTranslation();

  // Get dynamic lists from translation file
  const focusAreas = t('about.journey.focusList', { returnObjects: true });
  const focusList = Object.values(focusAreas);

  const stats = [
    { label: t('about.stats.founded'), value: "2011" },
    { label: t('about.stats.subsidiaries'), value: "4" },
    { label: t('about.stats.sectors'), value: "11+" },
    { label: t('about.stats.zones'), value: t('about.stats.central') },
  ];

  // Map keys to icons so we can loop through translations
  const valueItems = [
    { key: "sustainability", icon: Globe2 },
    { key: "innovation", icon: TrendingUp },
    { key: "integrity", icon: Award },
    { key: "community", icon: Users },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    }, 
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 pt-20">
      
      {/* 1. Header Section */}
      <section className="relative py-24 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-10">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
                alt="Global Operations" 
                className="w-full h-full object-cover grayscale invert"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950 z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-sm font-bold tracking-[0.2em] text-emerald-500 uppercase mb-6">
              {t('about.header.profile')}
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {t('about.header.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-500">
                {t('about.header.titleHighlight')}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
              {t('about.header.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="flex flex-col items-start justify-center text-left group cursor-default pl-4 border-l-2 border-emerald-500/0 hover:border-emerald-500 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-emerald-500 font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h3 className="text-3xl font-bold mb-6 border-l-4 border-emerald-500 pl-4">{t('about.journey.title')}</h3>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                <p>
                  {/* Trans component allows HTML tags like <strong> in translations */}
                  <Trans i18nKey="about.journey.p1" components={{ strong: <strong className="text-white" /> }} />
                </p>
                <p>
                  {t('about.journey.p2')}
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-800">
                <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wide">{t('about.journey.focusTitle')}</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
                  {focusList.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> 
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 relative shadow-2xl">
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
                  alt="Corporate Headquarters" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-20">
                  <p className="text-white text-lg font-light italic text-center">
                    "{t('about.journey.quote')}"
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-500/20 rounded-2xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('about.values.title')}</h2>
            <p className="text-slate-400">{t('about.values.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueItems.map((item, idx) => (
              <div key={idx} className="bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t(`about.values.items.${item.key}.title`)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t(`about.values.items.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-emerald-900/20 to-slate-900 border border-emerald-500/20 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">{t('about.cta.title')}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                {t('about.cta.desc')}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                {t('about.cta.button')} <ArrowRight size={18} />
              </Link>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;