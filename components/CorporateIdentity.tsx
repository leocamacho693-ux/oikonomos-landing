'use client';

import React from 'react';

interface CorporateIdentityProps {
  onExploreServices?: () => void;
  onNavigateToContact?: () => void;
}

export default function CorporateIdentity({ onExploreServices, onNavigateToContact }: CorporateIdentityProps) {
  const corporateValues = [
    {
      num: '01',
      name: 'Integridad',
      desc: 'Transparencia, ética irrestricta y confidencialidad en cada dictamen.'
    },
    {
      num: '02',
      name: 'Excelencia',
      desc: 'Rigor técnico multidisciplinario de estándar corporativo internacional.'
    },
    {
      num: '03',
      name: 'Innovación',
      desc: 'Metodologías ágiles potenciadas por nuestro Ecosistema CRM propietario.'
    },
    {
      num: '04',
      name: 'Visión Estratégica',
      desc: 'Capacidad de anticipación y modelado de escenarios ante la complejidad.'
    },
    {
      num: '05',
      name: 'Compromiso País',
      desc: 'Dedicación al desarrollo económico productivo y sostenible de Venezuela.'
    },
    {
      num: '06',
      name: 'Colaboración',
      desc: 'Sinergia activa con nuestra red de afiliados, inversionistas y clientes.'
    },
    {
      num: '07',
      name: 'Impacto Real',
      desc: 'Generación de valor tangible, optimización de costos y rentabilidad medible.'
    }
  ];

  return (
    <section id="identidad-corporativa" className="pt-14 pb-8 sm:pt-16 sm:pb-10 md:pt-18 md:pb-10 bg-white relative overflow-hidden">
      {/* Background Subtle Corporate Geometry */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-50/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold uppercase tracking-wider">
            Identidad y Propósito Institucional
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Puente Estratégico entre el Capital Global y el Talento Empresarial
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Conoce los fundamentos corporativos, la visión de largo plazo y los principios éticos que rigen cada una de nuestras intervenciones consultoras.
          </p>
        </div>

        {/* Sinopsis Highlight Box */}
        <div className="mb-14 rounded-3xl bg-gradient-to-br from-[#0B132B] via-[#0F1E45] to-[#142654] text-white p-7 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-slate-700/80">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3.5">
                <img 
                  src="/logo-white.png" 
                  alt="OIKONOMOS" 
                  className="h-12 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                />
                <div className="inline-flex items-center text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Sinopsis Institucional
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Transformamos la complejidad del entorno en ventajas competitivas sostenibles.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                <strong>Oikonomos</strong> es una firma de consultoría estratégica, financiera y económica que conecta a inversionistas internacionales con oportunidades en Venezuela y fortalece a las empresas venezolanas para competir globalmente. Actuamos como un puente de alto rigor técnico entre el capital internacional y el talento empresarial venezolano.
              </p>
            </div>

            {/* Posicionamiento Callout Right */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center lg:text-left space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Nuestro Posicionamiento
              </div>
              <div className="text-lg sm:text-xl font-bold text-white italic leading-snug">
                «Oikonomos: conectamos Venezuela con el mundo y al mundo con Venezuela».
              </div>
            </div>
          </div>
        </div>

        {/* Misión y Visión (2 Cards Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card: Misión */}
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/40 border border-blue-200/90 p-8 sm:p-10 hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-400 transition-all duration-300 group overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-400 absolute top-0 left-0" />
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
              Nuestra Razón de Ser
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B132B] mb-4 group-hover:text-blue-900 transition-colors">
              Misión
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Impulsar el crecimiento sostenible de Venezuela mediante asesoría estratégica de clase mundial, conectando capital internacional con oportunidades de alto valor y potenciando a las organizaciones venezolanas para competir con éxito en la economía global.
            </p>
          </div>

          {/* Card: Visión */}
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 border border-amber-200/90 p-8 sm:p-10 hover:shadow-2xl hover:shadow-amber-500/15 hover:border-amber-400 transition-all duration-300 group overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 absolute top-0 left-0" />
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              Nuestra Aspiración Futura
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B132B] mb-4 group-hover:text-amber-900 transition-colors">
              Visión
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Ser la principal puerta de entrada para la inversión en Venezuela y el aliado estratégico indiscutible de las empresas venezolanas que buscan crecer, innovar y competir al más alto nivel en los mercados internacionales.
            </p>
          </div>

        </div>

        {/* Valores Corporativos (7 Cards / Grid) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Pilares Éticos y Operativos
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
              Nuestros 7 Valores Fundamentales
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Principios inquebrantables que guían nuestras relaciones con clientes, afiliados e inversionistas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {corporateValues.slice(0, 4).map((val, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl bg-gradient-to-b from-white to-slate-50/80 border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm font-extrabold font-mono bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {val.num}
                </div>
                <h4 className="text-base font-bold text-[#0B132B] mb-1.5 group-hover:text-blue-900 transition-colors">
                  {val.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {corporateValues.slice(4, 7).map((val, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl bg-gradient-to-b from-white to-slate-50/80 border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm font-extrabold font-mono bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {val.num}
                </div>
                <h4 className="text-base font-bold text-[#0B132B] mb-1.5 group-hover:text-blue-900 transition-colors">
                  {val.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
