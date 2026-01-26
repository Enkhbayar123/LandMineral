// src/pages/BranchDetail.jsx
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, MapPin, User, CheckCircle2 } from "lucide-react";
import { BRANCH_COMPANIES } from "../mockData";
import { useTranslation } from "react-i18next";

const BranchDetail = () => {
  const { branchId } = useParams();
  const { t } = useTranslation();
  
  const branch = BRANCH_COMPANIES.find((b) => b.id === branchId);

  if (!branch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
        Company not found. <Link to="/" className="ml-2 text-emerald-500 underline">Go Home</Link>
      </div>
    );
  }

  // Get translated features list
  const featuresObject = t(`companies.${branch.id}.features`, { returnObjects: true });
  const featuresList = Object.values(featuresObject);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 pt-20">
      
      {/* 1. Header Hero */}
      <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-emerald-500 mb-6 transition-colors">
            <ArrowLeft size={18} className="mr-2" /> {t('nav.home')}
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-3 bg-emerald-500/10 rounded-xl text-emerald-500 mb-6">
              <branch.icon size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t(`companies.${branch.id}.name`)}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              {t(`companies.${branch.id}.description`)}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none" />
      </section>

      {/* 2. Detailed Info Grid */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Main Info */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* TRANSLATED LABEL: "Company Overview" */}
            <div>
              <h3 className="text-2xl font-bold mb-4 border-l-4 border-emerald-500 pl-4">
                {t('branchDetail.overview')}
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {t(`companies.${branch.id}.introduction`)}
              </p>
            </div>

            {/* TRANSLATED LABEL: "Key Highlights" */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('branchDetail.highlights')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuresList.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-900 p-4 rounded-lg border border-slate-800">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* TRANSLATED LABEL: "Founder Information" */}
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
              <div className="bg-slate-800 p-3 rounded-full text-slate-400">
                <User size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{t('branchDetail.founder')}</h4>
                <p className="text-slate-400 text-sm">
                  {t(`companies.${branch.id}.founder`)}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              {/* TRANSLATED LABEL: "At a Glance" */}
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">
                {t('branchDetail.glance')}
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Calendar className="text-emerald-500" size={20} />
                  <div>
                    <div className="text-xs text-slate-500 uppercase">{t('branchDetail.established')}</div>
                    <div className="text-white font-medium">{branch.details?.founded}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-emerald-500" size={20} />
                  <div>
                    <div className="text-xs text-slate-500 uppercase">{t('branchDetail.headquarters')}</div>
                    <div className="text-white font-medium">{t('branchDetail.hqLocation')}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  {t('branchDetail.website')} <ExternalLink size={16} />
                </a>
                <p className="text-center text-xs text-slate-500 mt-3">{t('branchDetail.opensTab')}</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BranchDetail;