'use client';

import React from 'react';
import { WORKFLOW_STEPS } from './Data';
import { useApp } from './AppContext';

interface HowItWorksProps {
  onStartWorkflow: () => void;
}

const STEP_THEMES = [
  {
    // Paso 1: Azul Marino Corporativo Oscuro
    topGradient: 'bg-[#1E3A8A]',
    cardBg: 'bg-white dark:bg-slate-900',
    border: 'border-slate-200 dark:border-slate-800 hover:border-[#1E3A8A]',
    badge: 'bg-[#1E3A8A] text-white shadow-md shadow-blue-950/25',
    subtitle: 'text-[#1E3A8A] dark:text-blue-300',
    titleHover: 'group-hover:text-blue-900 dark:group-hover:text-blue-300',
    bulletPill: 'bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-200',
    bulletDot: 'bg-[#1E3A8A]',
    footerText: 'text-[#1E3A8A] dark:text-blue-300 group-hover:text-blue-900 dark:group-hover:text-blue-200',
    footerPhase: 'Fase 1 de 3',
    nextAction: 'Siguiente fase →',
    glow: 'hover:shadow-xl',
  },
  {
    // Paso 2: Azul Marino Corporativo Oscuro
    topGradient: 'bg-[#1E3A8A]',
    cardBg: 'bg-white dark:bg-slate-900',
    border: 'border-slate-200 dark:border-slate-800 hover:border-[#1E3A8A]',
    badge: 'bg-[#1E3A8A] text-white shadow-md shadow-blue-950/25',
    subtitle: 'text-[#1E3A8A] dark:text-blue-300',
    titleHover: 'group-hover:text-blue-900 dark:group-hover:text-blue-300',
    bulletPill: 'bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-200',
    bulletDot: 'bg-[#1E3A8A]',
    footerText: 'text-[#1E3A8A] dark:text-blue-300 group-hover:text-blue-900 dark:group-hover:text-blue-300',
    footerPhase: 'Fase 2 de 3',
    nextAction: 'Siguiente fase →',
    glow: 'hover:shadow-xl',
  },
  {
    // Paso 3: Azul Marino Corporativo Oscuro
    topGradient: 'bg-[#1E3A8A]',
    cardBg: 'bg-white dark:bg-slate-900',
    border: 'border-slate-200 dark:border-slate-800 hover:border-[#1E3A8A]',
    badge: 'bg-[#1E3A8A] text-white shadow-md shadow-blue-950/25',
    subtitle: 'text-[#1E3A8A] dark:text-blue-300',
    titleHover: 'group-hover:text-blue-900 dark:group-hover:text-blue-300',
    bulletPill: 'bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-200',
    bulletDot: 'bg-[#1E3A8A]',
    footerText: 'text-[#1E3A8A] dark:text-blue-300 group-hover:text-blue-900 dark:group-hover:text-blue-200',
    footerPhase: 'Fase 3 de 3',
    nextAction: 'Objetivo Cumplido ✓',
    glow: 'hover:shadow-xl',
  },
];

export default function HowItWorks({ onStartWorkflow }: HowItWorksProps) {
  const { t, lang } = useApp();

  return (
    <section id="modelo-afiliados" className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#070E22] relative overflow-hidden transition-colors duration-200">
      
      {/* Dynamic ambient color meshes */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/40 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-200/35 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl pointer-events-none -z-0" />

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
              ? 'Un proceso ágil, transparente y estructurado para integrar a tu organización a nuestras soluciones o sumarte a nuestra red de aliados con trazabilidad digital absoluta'
              : 'An agile, transparent, and structured process to integrate your organization with our solutions or join our partner network with absolute digital traceability'}
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
                {/* Top solid line */}
                <div className={`h-2.5 w-full ${theme.topGradient}`} />

                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Step indicator bar - Centrado */}
                    <div className="flex items-center justify-center mb-5">
                      <span className={`text-xs font-bold tracking-wider uppercase ${theme.badge} px-4 py-1.5 rounded-xl text-center shadow-xs`}>
                        {lang === 'es' ? `PASO ${idx + 1}` : `STEP ${idx + 1}`}
                      </span>
                    </div>

                    {/* Step Titles - Centrado */}
                    <div className="text-center mb-6">
                      <div className={`text-xs font-extrabold uppercase tracking-widest ${theme.subtitle} mb-1.5`}>
                        {step.subtitle}
                      </div>
                      <h3 className={`text-2xl font-extrabold text-[#0B132B] dark:text-white mb-3 ${theme.titleHover} transition-colors tracking-tight`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

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
                    <span>{lang === 'es' ? theme.footerPhase : `Phase ${idx + 1} of 3`}</span>
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
            className="px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/30 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
          >
            {lang === 'es' ? 'Iniciar Proceso de Diagnóstico o Afiliación' : 'Start Diagnostic or Affiliation Process'}
          </button>
        </div>

      </div>
    </section>
  );
}
