// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <Navbar />

      {/* 1. Hero Header */}
      <section className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            {t('contactPage.hero.title')}
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('contactPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* 2. Contact Cards & Form */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Information */}
            <div className="space-y-10">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-emerald-500 pl-4">
                        {t('contactPage.info.title')}
                    </h3>
                    
                    <div className="space-y-8">
                        {/* Phone */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-1">
                                    {t('contactPage.info.phoneLabel')}
                                </p>
                                <a href="tel:+97669696967" className="text-2xl font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                                    +976 69696967
                                </a>
                                <p className="text-slate-500 text-sm mt-1">{t('contactPage.info.hours')}</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-1">
                                    {t('contactPage.info.emailLabel')}
                                </p>
                                <a href="mailto:googormaaochirsuren@gmail.com" className="text-lg md:text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors break-all">
                                    googormaaochirsuren@gmail.com
                                </a>
                                <p className="text-slate-500 text-sm mt-1">{t('contactPage.info.inquiryLabel')}</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-1">
                                    {t('contactPage.info.officeLabel')}
                                </p>
                                <p className="text-xl font-bold text-slate-900">{t('contactPage.info.city')}</p>
                                <p className="text-slate-500">{t('contactPage.info.district')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operating Hours Box */}
                <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="flex items-center gap-2 text-white font-bold text-lg mb-4">
                            <Clock size={20} className="text-emerald-500" /> {t('contactPage.info.workingHoursTitle')}
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex justify-between border-b border-slate-700 pb-2">
                                <span>{t('contactPage.info.weekdays')}</span>
                                <span className="text-white font-medium">09:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>{t('contactPage.info.weekends')}</span>
                                <span className="text-emerald-500 font-medium">{t('contactPage.info.closed')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold mb-6">{t('contactPage.form.title')}</h3>
                
                {/* --- FORM STARTS HERE --- */}
                <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    className="space-y-6"
                >
                    {/* HIDDEN INPUT FOR NETLIFY TO RECOGNIZE THE FORM */}
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">{t('contactPage.form.firstName')}</label>
                            <input type="text" name="first-name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder={t('contactPage.form.placeholder.first')} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">{t('contactPage.form.lastName')}</label>
                            <input type="text" name="last-name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder={t('contactPage.form.placeholder.last')} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">{t('contactPage.form.email')}</label>
                        <input type="email" name="email" required className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder={t('contactPage.form.placeholder.email')} />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">{t('contactPage.form.subject')}</label>
                        <div className="relative">
                            <select name="subject" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-slate-600 appearance-none">
                                <option>{t('contactPage.form.options.general')}</option>
                                <option>{t('contactPage.form.options.partner')}</option>
                                <option>{t('contactPage.form.options.investor')}</option>
                                <option>{t('contactPage.form.options.other')}</option>
                            </select>
                            {/* Arrow icon for select */}
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">{t('contactPage.form.message')}</label>
                        <textarea name="message" required rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder={t('contactPage.form.placeholder.msg')}></textarea>
                    </div>

                    <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-lg font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-200">
                        {t('contactPage.form.sendButton')} <Send size={18} />
                    </button>
                </form>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;