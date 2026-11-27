'use client';

import React from 'react';
import { useApp } from './AppContext';

interface CorporateIdentityProps {
  onExploreServices?: () => void;
  onNavigateToContact?: () => void;
}

export default function CorporateIdentity({ onExploreServices, onNavigateToContact }: CorporateIdentityProps) {
  const { lang, t } = useApp();

  const corporateValues_ES = [
    { num: '01', name: 'Integridad', desc: 'Transparencia, ética irrestricta y confidencialidad en cada dictamen.' },
    { num: '02', name: 'Excelencia', desc: 'Rigor técnico multidisciplinario de estándar corporativo internacional.' },
    { num: '03', name: 'Innovación', desc: 'Metodologías ágiles potenciadas por nuestro Ecosistema CRM propietario.' },
    { num: '04', name: 'Visión Estratégica', desc: 'Capacidad de anticipación y modelado de escenarios ante la complejidad.' },
    { num: '05', name: 'Compromiso País', desc: 'Dedicación al desarrollo económico productivo y sostenible de Venezuela.' },
    { num: '06', name: 'Colaboración', desc: 'Sinergia activa con nuestra red de afiliados, inversionistas y clientes.' },
    { num: '07', name: 'Impacto Real', desc: 'Generación de valor tangible, optimización de costos y rentabilidad medible.' }
  ];

  const corporateValues_EN = [
    { num: '01', name: 'Integrity', desc: 'Transparency, unyielding ethics and confidentiality in every advisory engagement.' },
    { num: '02', name: 'Excellence', desc: 'Multidisciplinary technical rigor adhering to international corporate benchmarks.' },
    { num: '03', name: 'Innovation', desc: 'Agile methodologies powered by our proprietary CRM Ecosystem.' },
    { num: '04', name: 'Strategic Vision', desc: 'Proactive foresight and complex macroeconomic scenario modeling.' },
    { num: '05', name: 'Country Commitment', desc: 'Dedication to productive and sustainable economic development in Venezuela.' },
    { num: '06', name: 'Collaboration', desc: 'Active synergy across our network of affiliates, institutional investors and partners.' },
    { num: '07', name: 'Tangible Impact', desc: 'Real enterprise value creation, cost optimization and measurable ROI.' }
  ];

  const corporateValues = lang === 'en' ? corporateValues_EN : corporateValues_ES;

  return (
    <section id="identidad-corporativa" className="pt-14 pb-8 sm:pt-16 sm:pb-10 md:pt-18 md:pb-10 bg-white dark:bg-[#070E22] transition-colors duration-200 relative overflow-hidden">
      {/* Background Subtle Corporate Geometry */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/70 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-50/50 dark:bg-amber-900/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            {t('identity.badge')}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B132B] dark:text-white tracking-tight leading-tight">
            {t('identity.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('identity.subtitle')}
          </p>
        </div>

        {/* Sinopsis Highlight Box */}
        <div className="mb-14 rounded-3xl bg-[#0B132B] border border-slate-700/80 text-white p-7 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Logo Oficial Centrado */}
          <div className="flex justify-center mb-8 relative z-10">
            <img 
              src="/logo-white.png" 
              alt="OIKONOMOS" 
              className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.35)]" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {t('identity.synopsis_title')}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {t('identity.synopsis_desc')}
              </p>
            </div>

            {/* Posicionamiento Callout Right */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center lg:text-left space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200">
                {t('identity.positioning_label')}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white italic leading-snug">
                {t('identity.positioning_quote')}
              </div>
            </div>
          </div>
        </div>

        {/* Misión y Visión (2 Cards Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card: Misión */}
          <div className="relative rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="h-1.5 w-full bg-blue-600 absolute top-0 left-0" />
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              {lang === 'en' ? 'Our Core Purpose' : 'Nuestra Razón de Ser'}
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B132B] dark:text-white mb-4">
              {t('identity.mission_title')}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {t('identity.mission_desc')}
            </p>
          </div>

          {/* Card: Visión */}
          <div className="relative rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="h-1.5 w-full bg-[#1E3A8A] absolute top-0 left-0" />
            <div className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-400 mb-2">
              {lang === 'en' ? 'Our Future Vision' : 'Nuestra Aspiración Futura'}
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B132B] dark:text-white mb-4">
              {t('identity.vision_title')}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {t('identity.vision_desc')}
            </p>
          </div>

        </div>

        {/* Valores Corporativos (7 Cards / Grid) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {lang === 'en' ? 'Ethical & Operational Pillars' : 'Pilares Éticos y Operativos'}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] dark:text-white">
              {t('identity.values_title')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {lang === 'en' ? 'Unwavering principles guiding our relations with clients and partners.' : 'Principios inquebrantables que guían nuestras relaciones con clientes, afiliados e inversionistas.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {corporateValues.slice(0, 4).map((val, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <div className="text-sm font-extrabold font-mono text-blue-600 dark:text-blue-400 mb-2">
                  {val.num}
                </div>
                <h4 className="text-base font-bold text-[#0B132B] dark:text-white mb-1.5">
                  {val.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {corporateValues.slice(4, 7).map((val, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <div className="text-sm font-extrabold font-mono text-blue-600 dark:text-blue-400 mb-2">
                  {val.num}
                </div>
                <h4 className="text-base font-bold text-[#0B132B] dark:text-white mb-1.5">
                  {val.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
