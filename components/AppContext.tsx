'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';
export type Theme = 'dark' | 'light';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    'nav.inicio': 'Inicio',
    'nav.identidad': 'Identidad',
    'nav.consultoria': 'Áreas de Consultoría',
    'nav.crm': 'Ecosistema CRM',
    'nav.afiliados': 'Afiliados',
    'nav.contacto': 'Contacto',
    'nav.crm_access': 'Acceso CRM Afiliados',
    'nav.diagnostic': 'Agendar Diagnóstico',

    // Hero
    'hero.badge_1': 'Consultoría Integral y Tecnología de Gestión',
    'hero.badge_2': 'Conexión de Capital Global y Talento Empresarial',
    'hero.badge_3': 'Agroindustria y Sostenibilidad Ambiental',
    'hero.badge_4': 'Blindaje Jurídico y Protección Fiscal',
    'hero.explore_services': 'Explorar Servicios',
    'hero.know_crm': 'Conocer el CRM para Afiliados',
    'hero.trust_1': '7 Áreas Multidisciplinarias',
    'hero.trust_2': 'CRM en Tiempo Real',
    'hero.trust_3': 'Confidencialidad',
    'hero.stat_areas': 'Áreas de Consultoría Integral',
    'hero.stat_companies': 'Empresas y Afiliados Activos',
    'hero.stat_effectiveness': 'Índice de Efectividad Auditada',
    'hero.stat_capital': 'Proyectos Ejecutados',

    // Identity
    'identity.badge': 'Identidad y Propósito Institucional',
    'identity.title': 'Puente Estratégico entre el Capital Global y el Talento Empresarial',
    'identity.subtitle': 'Conoce los fundamentos corporativos, la visión de largo plazo y los principios éticos que rigen cada una de nuestras intervenciones consultoras.',
    'identity.synopsis_title': 'Transformamos la complejidad del entorno en ventajas competitivas sostenibles.',
    'identity.synopsis_desc': 'Oikonomos es una firma de consultoría estratégica, financiera y económica que conecta a inversionistas internacionales con oportunidades en Venezuela y fortalece a las empresas venezolanas para competir globalmente. Actuamos como un puente de alto rigor técnico entre el capital internacional y el talento empresarial venezolano.',
    'identity.positioning_label': 'Nuestro Posicionamiento',
    'identity.positioning_quote': '«Oikonomos: conectamos Venezuela con el mundo y al mundo con Venezuela».',
    'identity.mission_title': 'Misión',
    'identity.mission_desc': 'Brindar asesoría y estructuración de alto nivel a organizaciones y proyectos estratégicos, transformando incertidumbre en certidumbre operativa y financiera a través de consultoría multidisciplinaria.',
    'identity.vision_title': 'Visión',
    'identity.vision_desc': 'Ser la firma referente de consultoría y gestión estratégica en América Latina, reconocida por articular capital internacional con oportunidades productivas locales mediante rigor técnico y ética intachable.',
    'identity.values_title': 'Valores Institucionales',

    // Consulting Services
    'services.badge': 'Servicios Profesionales Especializados',
    'services.title': '7 Disciplinas Clave para el Éxito Corporativo',
    'services.subtitle': 'Un enfoque integral 360° que combina rigor metodológico, análisis de datos y experiencia sectorial.',
    'services.filter_all': 'Todas las Áreas (360°)',
    'services.request_cta': 'Solicitar asesoría →',
    'services.multi_banner_title': '¿Tu empresa requiere un diagnóstico integral en múltiples áreas?',
    'services.multi_banner_desc': 'Nuestros planes combinan células de trabajo conjuntas con una sola tarifa optimizada y un director de cuenta dedicado.',
    'services.multi_banner_btn': 'Solicitar Diagnóstico Multidisciplinario',

    // CRM Section
    'crm.badge': 'Tecnología Propietaria de Vanguardia',
    'crm.title': 'Ecosistema CRM Exclusivo para Afiliados',
    'crm.subtitle': 'Control total, trazabilidad en tiempo real y gestión automatizada de expedientes, clientes y comisiones.',
    'crm.btn_login': 'Acceder al Portal CRM',
    'crm.btn_affiliate': 'Postular a la Red de Afiliados',

    // Methodology / How It Works
    'workflow.badge': 'Metodología en 3 Pasos',
    'workflow.title': 'Flujo de Trabajo Estructurado y Transparente',
    'workflow.subtitle': 'Desde el diagnóstico inicial hasta la ejecución continua respaldada por métricas y tecnología.',
    'workflow.step1_title': 'Diagnóstico o Afiliación',
    'workflow.step2_title': 'Activación en el CRM',
    'workflow.step3_title': 'Ejecución y Comisiones',

    // Contact
    'contact.badge': 'Contacto Institucional y Diagnóstico',
    'contact.title': 'Inicia tu Diagnóstico Estratégico',
    'contact.subtitle': 'Completa el formulario para ser atendido por uno de nuestros consultores líderes.',
    'contact.profile_label': 'Busco Consultoría para mi Empresa',
    'contact.areas_label': '1. Áreas de Consultoría Requeridas *',
    'contact.select_all': 'Seleccionar todas (360°)',
    'contact.deselect_all': 'Deseleccionar todas',
    'contact.data_label': '2. Datos del Contacto y Organización *',
    'contact.name_placeholder': 'Nombre Completo *',
    'contact.company_placeholder': 'Empresa u Organización *',
    'contact.email_placeholder': 'Correo Corporativo *',
    'contact.phone_placeholder': 'Teléfono / WhatsApp *',
    'contact.message_placeholder': 'Indícanos objetivos clave, desafíos actuales o requerimientos específicos de tu operación...',
    'contact.submit_btn': 'Solicitar Diagnóstico Estratégico',
    'contact.privacy_note': 'Información protegida bajo estricto acuerdo de confidencialidad y secreto profesional.',
    'contact.hq_title': 'Sede Principal',
    'contact.hq_address': 'CC El Tamá, San Cristóbal, Táchira',

    // Footer
    'footer.desc': 'Consultoría multidisciplinaria integral y tecnología de gestión para empresas y afiliados.',
    'footer.headquarters': 'Sede:',
    'footer.address': 'CC El Tamá, San Cristóbal',
    'footer.crm_btn': 'Portal CRM',
    'footer.legal': 'Aviso Legal',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos CRM',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Navbar
    'nav.inicio': 'Home',
    'nav.identidad': 'Identity',
    'nav.consultoria': 'Consulting Areas',
    'nav.crm': 'CRM Ecosystem',
    'nav.afiliados': 'Affiliates',
    'nav.contacto': 'Contact',
    'nav.crm_access': 'Affiliate CRM Login',
    'nav.diagnostic': 'Book Diagnostic',

    // Hero
    'hero.badge_1': 'Comprehensive Consulting and Management Technology',
    'hero.badge_2': 'Bridging Global Capital and Business Talent',
    'hero.badge_3': 'Agribusiness and Environmental Sustainability',
    'hero.badge_4': 'Legal Shielding and Tax Protection',
    'hero.explore_services': 'Explore Services',
    'hero.know_crm': 'Discover Affiliate CRM',
    'hero.trust_1': '7 Multidisciplinary Areas',
    'hero.trust_2': 'Real-Time CRM',
    'hero.trust_3': 'Confidentiality',
    'hero.stat_areas': 'Core Consulting Disciplines',
    'hero.stat_companies': 'Active Businesses & Affiliates',
    'hero.stat_effectiveness': 'Audited Effectiveness Rate',
    'hero.stat_capital': 'Executed Projects',

    // Identity
    'identity.badge': 'Institutional Identity & Purpose',
    'identity.title': 'Strategic Bridge between Global Capital and Enterprise Talent',
    'identity.subtitle': 'Learn about the corporate foundations, long-term vision, and ethical principles guiding every consulting engagement.',
    'identity.synopsis_title': 'Transforming market complexity into sustainable competitive advantages.',
    'identity.synopsis_desc': 'Oikonomos is a strategic, financial, and economic consulting firm connecting international investors with opportunities in Venezuela while strengthening local companies to compete globally.',
    'identity.positioning_label': 'Our Market Positioning',
    'identity.positioning_quote': '“Oikonomos: connecting Venezuela with the world and the world with Venezuela.”',
    'identity.mission_title': 'Mission',
    'identity.mission_desc': 'To provide premier strategic advisory and financial structuring for corporate projects, converting uncertainty into operational clarity through multidisciplinary expertise.',
    'identity.vision_title': 'Vision',
    'identity.vision_desc': 'To be the benchmark strategic consulting firm in Latin America, celebrated for connecting global capital with high-impact productive opportunities through uncompromising ethics.',
    'identity.values_title': 'Institutional Values',

    // Consulting Services
    'services.badge': 'Specialized Professional Services',
    'services.title': '7 Key Disciplines for Corporate Success',
    'services.subtitle': 'A 360° integrated approach combining technical rigor, econometric modeling, and deep sector expertise.',
    'services.filter_all': 'All Disciplines (360°)',
    'services.request_cta': 'Request Advisory →',
    'services.multi_banner_title': 'Does your organization require an integrated multi-area diagnosis?',
    'services.multi_banner_desc': 'Our enterprise programs combine dedicated workcells under a single optimized retainer and an assigned account director.',
    'services.multi_banner_btn': 'Request Multidisciplinary Diagnostic',

    // CRM Section
    'crm.badge': 'Proprietary Frontier Technology',
    'crm.title': 'Exclusive CRM Ecosystem for Affiliates',
    'crm.subtitle': 'Full operational visibility, automated deal tracking, and real-time commission payouts.',
    'crm.btn_login': 'Access CRM Portal',
    'crm.btn_affiliate': 'Apply to Affiliate Network',

    // Methodology / How It Works
    'workflow.badge': '3-Step Methodology',
    'workflow.title': 'Structured and Transparent Workflow',
    'workflow.subtitle': 'From preliminary diagnostic to ongoing execution backed by telemetry and technology.',
    'workflow.step1_title': 'Diagnostic or Affiliation',
    'workflow.step2_title': 'CRM Activation',
    'workflow.step3_title': 'Execution and Commissioning',

    // Contact
    'contact.badge': 'Institutional Contact & Diagnostic',
    'contact.title': 'Initiate Your Strategic Diagnostic',
    'contact.subtitle': 'Complete the form to be assigned to one of our lead managing consultants.',
    'contact.profile_label': 'Consulting Engagement for My Company',
    'contact.areas_label': '1. Required Consulting Disciplines *',
    'contact.select_all': 'Select all (360°)',
    'contact.deselect_all': 'Deselect all',
    'contact.data_label': '2. Contact & Organization Details *',
    'contact.name_placeholder': 'Full Name *',
    'contact.company_placeholder': 'Company or Organization *',
    'contact.email_placeholder': 'Corporate Email *',
    'contact.phone_placeholder': 'Phone / WhatsApp *',
    'contact.message_placeholder': 'Describe your primary objectives, operational hurdles, or strategic scope...',
    'contact.submit_btn': 'Request Strategic Diagnostic',
    'contact.privacy_note': 'Information protected under rigorous professional secrecy and NDA standards.',
    'contact.hq_title': 'Headquarters',
    'contact.hq_address': 'CC El Tama, San Cristobal, Tachira',

    // Footer
    'footer.desc': 'Comprehensive multidisciplinary consulting and enterprise management technology.',
    'footer.headquarters': 'Headquarters:',
    'footer.address': 'CC El Tama, San Cristobal',
    'footer.crm_btn': 'CRM Portal',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'CRM Terms',
    'footer.rights': 'All rights reserved.',
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('es');
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load persisted theme or default to dark
    const storedTheme = (localStorage.getItem('oiko_theme') as Theme) || 'dark';
    const storedLang = (localStorage.getItem('oiko_lang') as Language) || 'es';
    setThemeState(storedTheme);
    setLangState(storedLang);

    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.lang = storedLang;
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('oiko_lang', newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    const nextLang = lang === 'es' ? 'en' : 'es';
    setLang(nextLang);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setThemeState(nextTheme);
    localStorage.setItem('oiko_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const t = (key: string): string => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;
    return dict[key] || TRANSLATIONS.es[key] || key;
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        toggleTheme,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
