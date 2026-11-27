'use client';

import React, { useState } from 'react';
import { CONSULTING_AREAS, ConsultingArea } from './Data';
import { useApp } from './AppContext';

interface ConsultingServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function ConsultingServices({ onSelectService }: ConsultingServicesProps) {
  const { lang, t } = useApp();
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filteredAreas = activeFilter === 'todos' 
    ? CONSULTING_AREAS 
    : CONSULTING_AREAS.filter(area => {
        if (activeFilter === 'legal-fiscal') return area.id === 'legal' || area.id === 'contable';
        if (activeFilter === 'estrategia') return area.id === 'administrativa' || area.id === 'economica';
        if (activeFilter === 'agro-ambiente') return area.id === 'agropecuaria' || area.id === 'ambiental';
        if (activeFilter === 'growth') return area.id === 'marketing-digital';
        return true;
      });

  return (
    <section id="areas-consultoria" className="pt-10 pb-16 sm:pt-12 sm:pb-20 md:pt-14 md:pb-24 bg-[#F8FAFC] dark:bg-[#070E22] transition-colors duration-200 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase">
            {t('services.badge')}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B132B] dark:text-white tracking-tight">
            {t('services.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('services.subtitle')}
          </p>

          {/* Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
            <button
              onClick={() => setActiveFilter('todos')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                activeFilter === 'todos'
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {lang === 'en' ? 'All Disciplines (7)' : 'Todas las Áreas (7)'}
            </button>
            <button
              onClick={() => setActiveFilter('legal-fiscal')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                activeFilter === 'legal-fiscal'
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Legal & Contable
            </button>
            <button
              onClick={() => setActiveFilter('estrategia')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                activeFilter === 'estrategia'
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Administrativa & Económica
            </button>
            <button
              onClick={() => setActiveFilter('agro-ambiente')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                activeFilter === 'agro-ambiente'
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Agropecuaria & Ambiental
            </button>
            <button
              onClick={() => setActiveFilter('growth')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                activeFilter === 'growth'
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Marketing Digital
            </button>
          </div>
        </div>

        {/* 7 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAreas.map((area: ConsultingArea, index: number) => {
            const isFeaturedLast = index === 6 && filteredAreas.length === 7;
            return (
              <div
                key={area.id}
                className={`group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 dark:hover:border-blue-500 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7 ${
                  isFeaturedLast ? 'lg:col-span-3 lg:max-w-2xl lg:mx-auto w-full' : ''
                }`}
              >
                {/* Accent top line - Un solo color sólido */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E3A8A] opacity-90 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Category Row - Sin números */}
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200/80 dark:border-slate-700">
                      {area.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#0B132B] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {area.name}
                  </h3>
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 mt-1 mb-3">
                    {area.tagline}
                  </div>

                  {/* Leader Profile Badge - Un solo color, sin degradados ni emojis */}
                  {area.leaderName && (
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 mb-4 shadow-2xs">
                      <div className="flex items-center gap-3">
                        {area.leaderPhoto ? (
                          <img
                            src={area.leaderPhoto}
                            alt={area.leaderName}
                            className="w-12 h-12 rounded-full object-cover border-2 border-slate-300 dark:border-slate-600 flex-shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[#1E3A8A] dark:text-blue-300 flex items-center justify-center font-bold text-sm border-2 border-blue-200 dark:border-blue-700 flex-shrink-0">
                            {area.leaderName.split(' ').map(n => n[0]).slice(0, 2).join('')}
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            {area.leaderTitle || 'Consultor Líder'}
                          </div>
                          <div className="text-sm font-bold text-[#0B132B] dark:text-white truncate">
                            {area.leaderName}
                          </div>
                        </div>
                      </div>

                      {/* Credenciales y trayectoria - Sin emojis */}
                      {area.leaderCredentials && area.leaderCredentials.length > 0 && (
                        <div className="pt-2.5 mt-2.5 border-t border-slate-200 dark:border-slate-700 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                          {area.leaderCredentials.map((cred, idx) => (
                            <div key={idx} className="flex items-start gap-2 leading-snug">
                              <span className="text-[#1E3A8A] dark:text-blue-400 font-bold">•</span>
                              <span>{cred}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-normal">
                    {area.description}
                  </p>

                  {/* Key Deliverables Checklist */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {lang === 'en' ? 'Key Deliverables' : 'Entregables Clave'}
                    </div>
                    {area.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with KPI and CTA Button */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                  <div className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-200/80 dark:border-emerald-800/60">
                    {area.kpi}
                  </div>

                  <button
                    onClick={() => onSelectService(area.id)}
                    className="text-xs sm:text-sm font-bold text-[#1E3A8A] dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    {t('services.request_cta')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Multi-Area Banner - Un solo color sólido */}
        <div className="mt-12 rounded-2xl bg-[#0B132B] border border-slate-800 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {t('services.multi_banner_title')}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {t('services.multi_banner_desc')}
            </p>
          </div>
          <button
            onClick={() => onSelectService('todos')}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg transition-all cursor-pointer"
          >
            {t('services.multi_banner_btn')}
          </button>
        </div>

      </div>
    </section>
  );
}
