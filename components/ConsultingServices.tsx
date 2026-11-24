'use client';

import React, { useState } from 'react';
import { CONSULTING_AREAS, ConsultingArea } from './Data';

interface ConsultingServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function ConsultingServices({ onSelectService }: ConsultingServicesProps) {
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
    <section id="areas-consultoria" className="pt-10 pb-16 sm:pt-12 sm:pb-20 md:pt-14 md:pb-24 bg-[#F8FAFC] relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold tracking-wide uppercase">
            Nuestras Áreas de Consultoría
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B132B] tracking-tight">
            Soluciones Especializadas 360°
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Un equipo multidisciplinario listo para resolver los desafíos operativos, financieros y legales de tu organización con metodologías probadas y acompañamiento continuo.
          </p>

          {/* Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
            <button
              onClick={() => setActiveFilter('todos')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                activeFilter === 'todos'
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Todas las Áreas (7)
            </button>
            <button
              onClick={() => setActiveFilter('legal-fiscal')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                activeFilter === 'legal-fiscal'
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Legal & Contable
            </button>
            <button
              onClick={() => setActiveFilter('estrategia')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                activeFilter === 'estrategia'
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Administrativa & Económica
            </button>
            <button
              onClick={() => setActiveFilter('agro-ambiente')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                activeFilter === 'agro-ambiente'
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Agropecuaria & Ambiental
            </button>
            <button
              onClick={() => setActiveFilter('growth')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                activeFilter === 'growth'
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
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
                className={`group relative rounded-2xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-slate-50 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7 ${
                  isFeaturedLast ? 'lg:col-span-3 lg:max-w-2xl lg:mx-auto w-full' : ''
                }`}
              >
                {/* Accent top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1E3A8A] via-[#0284C7] to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Category and Index Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-200/60">
                      0{index + 1}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100/90 px-2.5 py-1 rounded-md">
                      {area.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#0B132B] group-hover:text-[#1E3A8A] transition-colors leading-snug">
                    {area.name}
                  </h3>
                  <div className="text-xs font-semibold text-blue-700 mt-1 mb-3">
                    {area.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {area.description}
                  </p>

                  {/* Key Deliverables Checklist */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Entregables Clave
                    </div>
                    {area.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mt-1.5 flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with KPI and CTA Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/80">
                    {area.kpi}
                  </div>

                  <button
                    onClick={() => onSelectService(area.id)}
                    className="text-xs sm:text-sm font-bold text-[#1E3A8A] group-hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    Solicitar asesoría →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Multi-Area Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-900 to-[#0B132B] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              ¿Tu empresa requiere un diagnóstico integral en múltiples áreas?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Nuestros planes combinan células de trabajo conjuntas (ej. Agropecuaria + Contable + Legal) con una sola tarifa optimizada y un director de cuenta dedicado.
            </p>
          </div>
          <button
            onClick={() => onSelectService('todos')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            Solicitar Diagnóstico Multidisciplinario
          </button>
        </div>

      </div>
    </section>
  );
}
