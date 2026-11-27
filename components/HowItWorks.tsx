'use client';

import React from 'react';
import { WORKFLOW_STEPS } from './Data';
import { useApp } from './AppContext';

interface HowItWorksProps {
  onStartWorkflow: () => void;
}

const STEP_THEMES = [
  {
    // Paso 01
    topGradient: 'bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500',
    cardBg: 'bg-gradient-to-b from-blue-50/70 via-white to-indigo-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800',
    border: 'border-blue-200/90 dark:border-slate-800 hover:border-blue-500',
    badge: 'bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-lg shadow-blue-600/25',
    numGradient: 'from-blue-700 via-indigo-600 to-blue-400',
    subtitle: 'text-blue-800 dark:text-blue-400',
    titleHover: 'group-hover:text-blue-900 dark:group-hover:text-blue-300',
    bulletPill: 'bg-white/90 dark:bg-slate-800 border border-blue-100/90 dark:border-slate-700 text-slate-800 dark:text-slate-200',
    bulletDot: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    footerText: 'text-blue-700 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-blue-300',
    footerPhase: 'Fase 01 de 03',
    nextAction: 'Siguiente fase →',
    glow: 'hover:shadow-[0_20px_45px_-10px_rgba(30,58,138,0.22)]',
    cornerGlow: 'from-blue-500/10 to-indigo-500/5',
  },
  {
    // Paso 02
    topGradient: 'bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500',
    cardBg: 'bg-gradient-to-b from-teal-50/60 via-white to-sky-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800',
    border: 'border-teal-200/90 dark:border-slate-800 hover:border-teal-500',
    badge: 'bg-gradient-to-r from-teal-600 via-sky-600 to-blue-600 text-white shadow-lg shadow-teal-600/25',
    numGradient: 'from-teal-600 via-sky-600 to-emerald-400',
    subtitle: 'text-teal-800 dark:text-teal-400',
    titleHover: 'group-hover:text-teal-900 dark:group-hover:text-teal-300',
    bulletPill: 'bg-white/90 dark:bg-slate-800 border border-teal-100/90 dark:border-slate-700 text-slate-800 dark:text-slate-200',
    bulletDot: 'bg-gradient-to-r from-sky-500 to-teal-600',
    footerText: 'text-teal-700 dark:text-teal-400 group-hover:text-teal-900 dark:group-hover:text-teal-300',
    footerPhase: 'Fase 02 de 03',
    nextAction: 'Siguiente fase →',
    glow: 'hover:shadow-[0_20px_45px_-10px_rgba(13,148,136,0.22)]',
    cornerGlow: 'from-teal-500/10 to-sky-500/5',
  },
  {
    // Paso 03
    topGradient: 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600',
    cardBg: 'bg-gradient-to-b from-amber-50/70 via-white to-orange-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800',
    border: 'border-amber-200/90 dark:border-slate-800 hover:border-amber-500',
    badge: 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white shadow-lg shadow-amber-500/25',
    numGradient: 'from-amber-500 via-orange-500 to-amber-600',
    subtitle: 'text-amber-800 dark:text-amber-400',
    titleHover: 'group-hover:text-amber-900 dark:group-hover:text-amber-300',
    bulletPill: 'bg-white/90 dark:bg-slate-800 border border-amber-100/90 dark:border-slate-700 text-slate-800 dark:text-slate-200',
    bulletDot: 'bg-gradient-to-r from-amber-500 to-orange-500',
    footerText: 'text-amber-700 dark:text-amber-400 group-hover:text-amber-900 dark:group-hover:text-amber-300',
    footerPhase: 'Fase 03 de 03',
    nextAction: 'Objetivo Cumplido ✓',
    glow: 'hover:shadow-[0_20px_45px_-10px_rgba(217,119,6,0.22)]',
    cornerGlow: 'from-amber-500/10 to-orange-500/5',
  },
];

export default function HowItWorks({ onStartWorkflow }: HowItWorksProps) {
  const { t, lang } = useApp();

  return (
    <section id="modelo-afiliados" className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#070E22] relative overflow-hidden transition-colors duration-200">
      
      {/* Dynamic ambient color meshes */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/40 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-teal-200/35 dark:bg-teal-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-amber-200/35 dark:bg-amber-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-slate-800 dark:text-blue-300 text-xs font-bold tracking-wider uppercase shadow-sm">
            {t('workflow.badge')}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B132B] dark:text-white">
            {lang === 'es' ? '¿Cómo funciona el modelo de ' : 'How does the model work for '}
            <span className="text-blue-700 dark:text-blue-400">
              {lang === 'es' ? 'Afiliados y Clientes?' : 'Affiliates and Clients?'}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'es' 
              ? 'Un proceso ágil, transparente y estructurado para integrar a tu organización a nuestras soluciones o sumarte a nuestra red de aliados con trazabilidad digital absoluta.'
              : 'An agile, transparent, and structured process to integrate your organization with our solutions or join our partner network with absolute digital traceability.'}
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {WORKFLOW_STEPS.map((step, idx) => {
            const theme = STEP_THEMES[idx] || STEP_THEMES[0];
            return (
              <div
                key={step.step}
                className={`relative rounded-3xl ${theme.cardBg} border ${theme.border} ${theme.glow} flex flex-col justify-between transition-all duration-300 group overflow-hidden`}
              >
                {/* Top line */}
                <div className={`h-2 w-full ${theme.topGradient}`} />

                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Step indicator bar */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-xs font-extrabold tracking-wider uppercase ${theme.badge} px-3.5 py-1.5 rounded-xl`}>
                        {lang === 'es' ? `PASO ${step.step}` : `STEP ${step.step}`}
                      </span>
                      <span className={`text-5xl font-black font-mono bg-gradient-to-br ${theme.numGradient} bg-clip-text text-transparent select-none`}>
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Step Titles */}
                    <div className={`text-xs font-extrabold uppercase tracking-widest ${theme.subtitle} mb-1.5`}>
                      {step.subtitle}
                    </div>
                    <h3 className={`text-2xl font-extrabold text-[#0B132B] dark:text-white mb-3.5 ${theme.titleHover} transition-colors tracking-tight`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                      {step.description}
                    </p>

                    {/* Bullets with soft pills */}
                    <div className="space-y-2.5 pt-5 border-t border-slate-200/80 dark:border-slate-800 mb-6">
                      {step.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className={`flex items-center gap-3 px-3.5 py-2 rounded-xl ${theme.bulletPill} text-xs font-medium shadow-xs`}
                        >
                          <span className={`w-2 h-2 rounded-full ${theme.bulletDot} flex-shrink-0 shadow-xs`} />
                          <span className="leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status footer row */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    <span>{lang === 'es' ? theme.footerPhase : `Phase 0${idx+1} of 03`}</span>
                    <span className={`${theme.footerText} font-bold transition-all`}>
                      {lang === 'es' ? theme.nextAction : (idx === 2 ? 'Objective Achieved ✓' : 'Next phase →')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* CTA Bar */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartWorkflow}
            className="px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-[#1E3A8A] hover:bg-blue-900 shadow-xl shadow-blue-900/30 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
          >
            {lang === 'es' ? 'Iniciar Proceso de Diagnóstico o Afiliación' : 'Start Diagnostic or Affiliation Process'}
          </button>
        </div>

      </div>
    </section>
  );
}
