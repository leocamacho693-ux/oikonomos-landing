export interface ConsultingArea {
  id: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  iconName: string;
  accentColor: string;
  deliverables: string[];
  kpi: string;
  leaderName?: string;
  leaderTitle?: string;
  leaderPhoto?: string;
  leaderCredentials?: string[];
}

export const CONSULTING_AREAS: ConsultingArea[] = [
  {
    id: 'economica',
    name: 'Consultoría Económica',
    shortName: 'Económica',
    category: 'Estrategia, Finanzas y Valuación',
    tagline: 'Modelación macro y microeconómica para inversión',
    description: 'Análisis macro y microeconómico, valoración rigurosa de empresas (DCF), estudios econométricos de mercado y diseño de estrategias de expansión de capital.',
    iconName: 'BarChart3',
    accentColor: 'amber',
    leaderName: 'Carlos Campos',
    leaderTitle: 'Consultor Líder en Economía y Finanzas',
    leaderPhoto: '/carlos-campos.png?v=2',
    leaderCredentials: [
      '🎓 US Economist & Internationalist | Northeastern University',
      '🎓 VE President | SIRCA UNET',
      '🚗 CEO AutoSalud S.A.',
      '⚙️ CFO Aceta C.A.',
      '📍 Táchira, VE',
    ],
    deliverables: [
      'Valoración de empresas y activos intangibles',
      'Análisis de sensibilidad y escenarios de riesgo',
      'Estudios de viabilidad para financiamiento',
      'Modelos econométricos sectoriales'
    ],
    kpi: '+40M$ en operaciones estructuradas'
  },
  {
    id: 'administrativa',
    name: 'Consultoría Administrativa',
    shortName: 'Administrativa',
    category: 'Gestión y Operaciones',
    tagline: 'Eficiencia operativa y reingeniería estructural',
    description: 'Optimización de procesos internos, estructura organizacional, mejora continua, gobernanza corporativa y maximización de la productividad operativa.',
    iconName: 'Building2',
    accentColor: 'blue',
    deliverables: [
      'Manuales de procesos y BPMN',
      'Matriz de roles y gobierno corporativo',
      'Planes de reducción de costos operativos',
      'Sistemas de gestión de calidad (ISO)'
    ],
    kpi: '-28% tiempos de ciclo'
  },
  {
    id: 'agropecuaria',
    name: 'Consultoría Agropecuaria',
    shortName: 'Agropecuaria',
    category: 'Agrobusiness y Campo',
    tagline: 'Rentabilidad y tecnificación agroindustrial',
    description: 'Gestión financiera, productividad, costos de producción, trazabilidad de cosechas y modernización tecnológica para el sector agroindustrial y rural.',
    iconName: 'Tractor',
    accentColor: 'emerald',
    deliverables: [
      'Estructuración de costos por hectárea/lote',
      'Planes de tecnificación e irrigación',
      'Modelos de cobertura y comercialización',
      'Optimización de cadena de frío y logística'
    ],
    kpi: '+32% rendimiento por hectárea'
  },
  {
    id: 'ambiental',
    name: 'Consultoría Ambiental',
    shortName: 'Ambiental',
    category: 'Sostenibilidad y ESG',
    tagline: 'Cumplimiento normativo y sostenibilidad corporativa',
    description: 'Cumplimiento normativo, evaluación de impacto ambiental, certificaciones de carbono, transición energética y gestión responsable de recursos hídricos y residuos.',
    iconName: 'Leaf',
    accentColor: 'emerald',
    deliverables: [
      'Estudios de Impacto Ambiental (EIA)',
      'Estrategia de Huella de Carbono e Hídrica',
      'Planes de Manejo Integral de Residuos',
      'Auditorías para certificaciones ESG'
    ],
    kpi: '100% blindaje normativo'
  },
  {
    id: 'contable',
    name: 'Consultoría Contable',
    shortName: 'Contable',
    category: 'Finanzas y Fiscal',
    tagline: 'Transparencia fiscal y salud financiera',
    description: 'Auditoría integral, estructuración financiera, cumplimiento tributario riguroso, adopción NIIF/IFRS y control contable para toma de decisiones directivas.',
    iconName: 'Calculator',
    accentColor: 'amber',
    deliverables: [
      'Planificación y optimización fiscal legal',
      'Auditoría y conciliación financiera',
      'Estados financieros consolidados bajo NIIF',
      'Control interno y prevención de contingencias'
    ],
    kpi: '+18% flujo de caja operativo'
  },
  {
    id: 'marketing-digital',
    name: 'Consultoría de Marketing Digital',
    shortName: 'Marketing Digital',
    category: 'Growth y Comercial',
    tagline: 'Adquisición sistemática y posicionamiento de marca',
    description: 'Posicionamiento de marca institucional, embudos de adquisición B2B/B2C, pauta de alta precisión (paid media) y estrategias de contenido orientadas a conversión.',
    iconName: 'TrendingUp',
    accentColor: 'blue',
    deliverables: [
      'Embudos de prospección B2B automatizados',
      'Arquitectura de marca y reputación digital',
      'Optimización de conversión y atribución (ROAS)',
      'Estrategias de Inbound y Account-Based Marketing'
    ],
    kpi: '3.4x retorno de inversión (ROAS)'
  },
  {
    id: 'legal',
    name: 'Consultoría Legal',
    shortName: 'Legal',
    category: 'Derecho Corporativo',
    tagline: 'Blindaje jurídico y seguridad contractual',
    description: 'Blindaje jurídico corporativo, redacción y estructuración de contratos comerciales de alta complejidad, propiedad intelectual, compliance y asesoría mercantil.',
    iconName: 'Scale',
    accentColor: 'blue',
    deliverables: [
      'Redacción y auditoría de contratos mercantiles',
      'Estructuración corporativa y acuerdos de socios',
      'Registro y defensa de marcas y patentes',
      'Cumplimiento preventivo y litigio estratégico'
    ],
    kpi: '0 contingencias jurídicas'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico o Afiliación',
    subtitle: 'Fase Inicial de Evaluación',
    description: 'Evaluamos las necesidades críticas y oportunidades de tu empresa o te integramos a nuestra red selecta de afiliados y aliados estratégicos con un plan a la medida.',
    bullets: ['Auditoría preliminar sin fricción', 'Firma de confidencialidad NDA', 'Perfilamiento del negocio y alcance']
  },
  {
    step: '02',
    title: 'Activación en el CRM',
    subtitle: 'Acceso y Trazabilidad Digital',
    description: 'Obtienes credenciales exclusivas al Ecosistema CRM OIKONOMOS para monitorear en tiempo real avances, bitácoras, entregables, métricas y gestión de referidos.',
    bullets: ['Credenciales corporativas cifradas', 'Asignación de consultores líderes', 'Canal directo y panel de indicadores']
  },
  {
    step: '03',
    title: 'Ejecución y Resultados',
    subtitle: 'Acompañamiento Multidisciplinario',
    description: 'Nuestros especialistas ejecutan las intervenciones estratégicas en las áreas requeridas con entregables periódicos, transfer de conocimiento y soporte continuo.',
    bullets: ['Hitos calendarizados con entregables', 'Reportes ejecutivos de impacto', 'Optimización y escalamiento continuo']
  }
];

export const CRM_STATS = [
  { label: 'Expedientes Resueltos', value: '480+', change: '+24% este año', positive: true },
  { label: 'Cartera en Gestión', value: '$12.4M', change: '+38% vs trimestre anterior', positive: true },
  { label: 'Tiempo Promedio de Respuesta', value: '< 2 hrs', change: 'SLA garantizado', positive: true },
  { label: 'Eficacia en Dictámenes', value: '99.2%', change: 'Satisfacción auditada', positive: true }
];

export const SAMPLE_CASES = [
  {
    id: 'CS-4081',
    client: 'BioEnergías del Valle',
    area: 'Consultoría Económica',
    status: 'Auditoría de Campo',
    statusColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    progress: 45,
    lead: 'Carlos Campos',
    lastUpdate: 'Ayer'
  },
  {
    id: 'CS-4092',
    client: 'Agropecuaria San Ignacio S.A.',
    area: 'Agropecuaria y Contable',
    status: 'En Implementación',
    statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    progress: 75,
    lead: 'Dr. Roberto Mendoza',
    lastUpdate: 'Hace 45 min'
  },
  {
    id: 'CS-4088',
    client: 'Grupo Logístico del Norte',
    area: 'Legal y Administrativa',
    status: 'Dictamen Final',
    statusColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    progress: 92,
    lead: 'Lic. Mariana Salazar',
    lastUpdate: 'Hoy 10:15 AM'
  },
  {
    id: 'CS-4074',
    client: 'Fintech Nexus Latam',
    area: 'Marketing Digital y Legal',
    status: 'En Monitoreo',
    statusColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    progress: 60,
    lead: 'Msc. Elena Cordero',
    lastUpdate: '23 Nov'
  }
];

export const SAMPLE_AFFILIATES = [
  {
    code: 'AF-8942',
    name: 'Estudio Jurídico y Asociados',
    tier: 'Aliado Diamante',
    activeClients: 14,
    commission: '$18,450 USD',
    status: 'Activo'
  },
  {
    code: 'AF-8920',
    name: 'Capital & Growth Partners',
    tier: 'Aliado Platino',
    activeClients: 9,
    commission: '$11,200 USD',
    status: 'Activo'
  },
  {
    code: 'AF-8905',
    name: 'Consultores Financieros Andinos',
    tier: 'Aliado Oro',
    activeClients: 5,
    commission: '$6,800 USD',
    status: 'Activo'
  }
];
