'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from './AppContext';

interface HeroProps {
  onExploreServices: () => void;
  onExploreCrm: () => void;
  onOpenLoginModal: () => void;
}

interface CarouselSlide {
  image: string;
  tag: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  subtitle: string;
}

const CAROUSEL_SLIDES_ES: CarouselSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    tag: 'Crecimiento Estratégico',
    badge: 'Consultoría Integral',
    titlePrefix: 'Impulsamos el ',
    titleHighlight: 'crecimiento estratégico',
    titleSuffix: ' de tu empresa con respaldo multidisciplinario',
    subtitle: 'En OIKONOMOS combinamos asesoría experta en 7 áreas clave del negocio con un ecosistema CRM exclusivo para optimizar la gestión, trazabilidad y rentabilidad de nuestros afiliados',
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop',
    tag: 'Puente de Capital',
    badge: 'Conexión de Capital Global',
    titlePrefix: 'Transformamos la ',
    titleHighlight: 'complejidad del entorno',
    titleSuffix: ' en ventajas competitivas sostenibles',
    subtitle: 'Conectamos a inversionistas internacionales con oportunidades de alto valor en Venezuela y fortalecemos a las empresas locales para competir con éxito en los mercados globales',
  },
  {
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop',
    tag: 'Agroindustria y Ambiente',
    badge: 'Agroindustria y Sostenibilidad Ambiental',
    titlePrefix: 'Optimizamos la ',
    titleHighlight: 'productividad y rentabilidad',
    titleSuffix: ' del sector agropecuario y productivo',
    subtitle: 'Estructuración financiera rural, optimización de costos de producción en campo, evaluaciones de impacto ambiental y planes de cumplimiento normativo sustentable',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
    tag: 'Blindaje Jurídico',
    badge: 'Blindaje Jurídico Corporativo y Protección Fiscal',
    titlePrefix: 'Garantizamos la ',
    titleHighlight: 'seguridad jurídica',
    titleSuffix: ' y contractual en cada una de tus operaciones',
    subtitle: 'Estructuración de contratos mercantiles complejos, registro de propiedad intelectual, cumplimiento normativo y asesoría legal preventiva de máximo estándar corporativo',
  },
];

const CAROUSEL_SLIDES_EN: CarouselSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    tag: 'Strategic Growth',
    badge: 'Comprehensive Consulting',
    titlePrefix: 'Driving ',
    titleHighlight: 'strategic growth',
    titleSuffix: ' for your enterprise with multidisciplinary support',
    subtitle: 'At OIKONOMOS we combine expert advisory across 7 core business disciplines with a proprietary CRM ecosystem to optimize governance, traceability and partner profitability',
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop',
    tag: 'Capital Bridge',
    badge: 'Connecting Global Capital',
    titlePrefix: 'Transforming ',
    titleHighlight: 'market complexity',
    titleSuffix: ' into sustainable competitive advantages',
    subtitle: 'Connecting international investors with prime opportunities in Venezuela while empowering domestic firms to compete successfully on global stages',
  },
  {
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop',
    tag: 'Agribusiness & Ecology',
    badge: 'Agribusiness & Environmental Sustainability',
    titlePrefix: 'Optimizing ',
    titleHighlight: 'productivity & yield',
    titleSuffix: ' across the agroindustrial sector',
    subtitle: 'Rural financial structuring, field production cost reduction, environmental impact assessments and sustainable regulatory compliance',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
    tag: 'Legal Shielding',
    badge: 'Corporate Legal Shielding & Tax Protection',
    titlePrefix: 'Ensuring ',
    titleHighlight: 'legal certainty',
    titleSuffix: ' and contractual protection in every transaction',
    subtitle: 'High-complexity commercial contracts, intellectual property protection, regulatory compliance and proactive risk mitigation',
  },
];

export default function Hero({ onExploreServices, onExploreCrm, onOpenLoginModal }: HeroProps) {
  const { lang, t } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [textFade, setTextFade] = useState(true);

  const slides = lang === 'en' ? CAROUSEL_SLIDES_EN : CAROUSEL_SLIDES_ES;

  // Auto-advance slides every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setTextFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTextFade(true);
      }, 250);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const changeSlide = (newIndex: number) => {
    if (newIndex === currentSlide) return;
    setTextFade(false);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setTextFade(true);
    }, 200);
  };

  const handlePrevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(prevIndex);
  };

  const handleNextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    changeSlide(nextIndex);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section 
      id="inicio" 
      className="relative pt-14 pb-10 sm:pt-16 sm:pb-12 md:pt-16 md:pb-14 overflow-hidden bg-[#070E22] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ===== CARRUSEL DE IMÁGENES DE FONDO ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Image with subtle slow zoom */}
              <div 
                className={`w-full h-full bg-cover bg-center transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
            </div>
          );
        })}

        {/* Capas de Degradado Corporativo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070E22] via-[#070E22]/50 to-[#070E22]/40" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Retícula Geométrica Arquitectónica Sutil */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
        />
      </div>

      {/* Flechas de Navegación del Carrusel (Izquierda / Derecha) */}
      <button
        onClick={handlePrevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-blue-600/80 border border-white/20 text-white items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg group hover:scale-105"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={handleNextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-blue-600/80 border border-white/20 text-white items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg group hover:scale-105"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* ===== CONTENIDO PRINCIPAL CENTRADO (MÁS CEÑIDO Y SIN VACÍOS) ===== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. Logo Oficial OIKONOMOS Emblema Centrado */}
        <div className="flex flex-col items-center justify-center mb-2 sm:mb-2.5">
          <div className="relative flex flex-col items-center">
            <img 
              src="/logo-white.png" 
              alt="OIKONOMOS" 
              className="relative h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain filter drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)] hover:scale-105 transition-transform duration-300" 
            />
            <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.45em] uppercase text-slate-300/90 -mt-1 sm:-mt-1.5 drop-shadow-md select-none pl-1">
              GLOBAL
            </span>
          </div>
        </div>

        {/* 2. TEXTOS DINÁMICOS QUE CAMBIAN A MEDIDA QUE LA IMAGEN CAMBIA */}
        <div className="min-h-[185px] sm:min-h-[170px] md:min-h-[155px] flex flex-col justify-center items-center">
          <div 
            className={`transition-all duration-300 ease-out transform ${
              textFade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            {/* Badge Dinámico Superior */}
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-950/70 border border-blue-400/40 text-blue-200 text-xs sm:text-sm font-semibold shadow-xl shadow-blue-950/60 backdrop-blur-md mb-2.5 hover:border-blue-400/70 transition-colors">
              <span className="tracking-wide font-medium">{activeSlide.badge}</span>
            </div>

            {/* H1 Principal Dinámico en Blanco Sólido */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.14] max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              {activeSlide.titlePrefix}
              <span className="text-white">
                {activeSlide.titleHighlight}
              </span>{' '}
              {activeSlide.titleSuffix}
            </h1>

            {/* Subtítulo Dinámico */}
            <p className="mt-2.5 text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed max-w-3xl mx-auto font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {activeSlide.subtitle}
            </p>
          </div>
        </div>

        {/* 3. Botones de Acción (CTAs) Centrados Sin Degradados */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto sm:max-w-none">
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-7 py-3 rounded-xl text-xs sm:text-sm md:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-700/40 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-blue-400/40"
          >
            {t('hero.explore_services')}
          </button>

          <button
            onClick={onExploreCrm}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm md:text-base font-semibold text-slate-200 bg-black/40 hover:bg-black/60 border border-white/25 hover:border-white/40 backdrop-blur-md shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            {t('hero.know_crm')}
          </button>
        </div>

        {/* Badges de Confianza Corporativos Ceñidos */}
        <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-y-1.5 gap-x-5 text-xs sm:text-sm text-slate-200 font-medium">
          <span>{t('hero.trust_1')}</span>
          <span className="text-blue-400">•</span>
          <span>{t('hero.trust_2')}</span>
          <span className="text-blue-400">•</span>
          <span>{t('hero.trust_3')}</span>
        </div>

        {/* Tarjeta Ejecutiva de Métricas Globales Centrada */}
        <div className="mt-6 sm:mt-7 rounded-2xl bg-black/45 border border-white/15 backdrop-blur-xl p-4 sm:p-5 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            
            <div className="space-y-1 pt-2 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">7</div>
              <div className="text-xs font-medium text-slate-300">{t('hero.stat_areas')}</div>
            </div>

            <div className="space-y-1 pt-2 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">+140</div>
              <div className="text-xs font-medium text-slate-300">{t('hero.stat_companies')}</div>
            </div>

            <div className="space-y-1 pt-2 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">98.4%</div>
              <div className="text-xs font-medium text-slate-300">{t('hero.stat_effectiveness')}</div>
            </div>

            <div className="space-y-1 pt-2 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">+350</div>
              <div className="text-xs font-medium text-slate-300">{t('hero.stat_capital')}</div>
            </div>

          </div>
        </div>

        {/* Indicadores de Diapositiva del Carrusel Ceñidos */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {slides.map((slide, idx) => {
            const isCurrent = idx === currentSlide;
            return (
              <button
                key={idx}
                onClick={() => changeSlide(idx)}
                className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer border ${
                  isCurrent
                    ? 'bg-blue-600/90 text-white border-blue-400 shadow-md shadow-blue-900/50 scale-105'
                    : 'bg-black/30 text-slate-400 border-white/10 hover:bg-black/50 hover:text-slate-200'
                }`}
              >
                {slide.tag}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
