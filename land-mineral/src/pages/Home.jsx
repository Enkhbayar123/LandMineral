// src/pages/Home.jsx
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { BRANCH_COMPANIES } from "../mockData";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  // Get the list of 11 activities from i18n (returns an object, so we convert to array)
  const activities = t('story.activityList', { returnObjects: true });
  const activityArray = Object.values(activities);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1518390938363-d7d8e2354737?q=80&w=2669&auto=format&fit=crop" 
              alt="Industrial Background" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            {t('hero.title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              {t('hero.titleHighlight')}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              to="/about"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Network (Branch Companies) */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-emerald-500 font-medium mb-2 tracking-wide uppercase text-sm">{t('network.subtitle')}</h2>
              <h3 className="text-3xl md:text-4xl font-bold">{t('network.title')}</h3>
            </div>
            <Link to="/about" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              {t('network.link')} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRANCH_COMPANIES.map((branch) => (
              <motion.div
                key={branch.id}
                whileHover={{ y: -5 }}
                className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-emerald-500/50 transition-colors group cursor-pointer"
              >
                <div className="bg-slate-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-emerald-500 group-hover:bg-emerald-500/10 transition-colors">
                  <branch.icon size={24} />
                </div>
                
                {/* TRANSLATED NAME */}
                <h4 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                    {t(`companies.${branch.id}.name`)}
                </h4>
                
                {/* TRANSLATED DESCRIPTION */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {t(`companies.${branch.id}.description`)}
                </p>
                
                <Link to={branch.path} className="text-sm font-medium text-emerald-500 flex items-center gap-1">
                  {t('network.learnMore')} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who We Are Teaser */}
      <section className="py-24 border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-semibold mb-6">
                {t('story.established')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('story.title')}</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                {t('story.description')}
              </p>
              
              {/* Dynamic List of 11 Activities */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('story.areas')}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-2">
                  {activityArray.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-400 text-sm font-medium hover:text-emerald-400 transition-colors">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                to="/about"
                className="inline-flex items-center gap-2 border-b-2 border-emerald-500 pb-1 text-white hover:text-emerald-400 transition-colors"
              >
                {t('story.link')} <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="relative">
               {/* Abstract decorative element */}
               <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full"></div>
                  <div className="text-center z-10 p-8">
                    <span className="text-6xl font-bold text-white block">15+</span>
                    <span className="text-slate-400 uppercase tracking-widest text-sm">{t('story.experience')}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;