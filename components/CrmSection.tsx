'use client';

import React, { useState } from 'react';
import { SAMPLE_CASES, SAMPLE_AFFILIATES, CRM_STATS } from './Data';

interface CrmSectionProps {
  onOpenLoginModal: () => void;
  onRequestAffiliation: () => void;
}

export default function CrmSection({ onOpenLoginModal, onRequestAffiliation }: CrmSectionProps) {
  const [activeTab, setActiveTab] = useState<'resumen' | 'casos' | 'afiliados'>('resumen');
  const [copiedLink, setCopiedLink] = useState(false);
  const [caseFilter, setCaseFilter] = useState('');

  const referralLink = 'https://crm.oikonomos.global/portal/ref/AG-8942';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const filteredCases = caseFilter
    ? SAMPLE_CASES.filter(c => c.client.toLowerCase().includes(caseFilter.toLowerCase()) || c.area.toLowerCase().includes(caseFilter.toLowerCase()))
    : SAMPLE_CASES;

  return (
    <section id="ecosistema-crm" className="py-20 md:py-28 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background radial gradients & glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header: Title and Value Prop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            {/* Tag Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              Diferenciador Tecnológico de la Firma
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Potencia tu gestión con nuestro{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
                CRM exclusivo para Afiliados
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Ser afiliado de <strong className="text-white font-semibold">OIKONOMOS GLOBAL</strong> te brinda acceso directo a nuestra plataforma CRM propietaria: centraliza clientes, haz seguimiento en tiempo real a tus expedientes de consultoría, gestiona referidos y visualiza indicadores clave en un solo lugar.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm text-slate-200">
                Panel centralizado de seguimiento de casos y consultorías activas.
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm text-slate-200">
                Gestión inteligente de cartera de clientes, prospectos y oportunidades.
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm text-slate-200">
                Portal de afiliados con métricas de rendimiento, comisiones y reportes automatizados.
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm text-slate-200">
                Seguridad de datos de nivel empresarial y acceso multi-dispositivo 24/7.
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenLoginModal}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all cursor-pointer"
              >
                Iniciar Sesión en el CRM
              </button>

              <button
                onClick={onRequestAffiliation}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer"
              >
                Solicitar Afiliación
              </button>
            </div>
          </div>

          {/* Right Column: CRM Fast Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {CRM_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0F1A3A]/90 border border-slate-700/70 backdrop-blur-md shadow-lg"
              >
                <div className="text-xs text-slate-400 font-medium mb-1">{stat.label}</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
                <div className="mt-2 text-[11px] font-semibold text-emerald-400">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE CRM UI MOCKUP */}
        <div className="mt-6 rounded-3xl bg-slate-950/95 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">

          {/* Mockup Top Window Bar */}
          <div className="bg-[#0e172e] px-4 sm:px-6 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="h-4 w-[1px] bg-slate-700 mx-1" />
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <span className="px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 border border-blue-500/30">
                  OIKONOMOS CRM v4.2
                </span>
                <span className="text-slate-400 hidden sm:inline">• Portal de Afiliados Certificados</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-xs text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">
                <span className="text-slate-400">Usuario: </span>
                <span className="font-bold text-white">afiliado@oikonomos.global</span>
              </div>
              <button
                onClick={onOpenLoginModal}
                className="text-xs text-amber-400 hover:text-amber-300 underline font-medium"
              >
                Cambiar sesión
              </button>
            </div>
          </div>

          {/* Mockup Subheader with Interactive Tabs */}
          <div className="bg-[#111c38] px-4 sm:px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('resumen')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === 'resumen'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
              >
                Resumen Ejecutivo
              </button>

              <button
                onClick={() => setActiveTab('casos')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === 'casos'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
              >
                Mis Casos (4 Activos)
              </button>

              <button
                onClick={() => setActiveTab('afiliados')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'afiliados'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/50'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                Red de Afiliados y Comisiones
              </button>
            </div>

            {/* Quick Demo Status Indicator */}
            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-400">Modo de Demostración:</span>
              <span className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Sincronizado
              </span>
            </div>
          </div>

          {/* Mockup Tab Content Area */}
          <div className="p-4 sm:p-6 lg:p-8 bg-[#090f21]">

            {/* TAB 1: RESUMEN EJECUTIVO */}
            {activeTab === 'resumen' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* 4 Mini Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-[#121c38] p-4 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400">
                      Expedientes en Curso
                    </div>
                    <div className="text-2xl font-bold text-white mt-1">12 Casos</div>
                    <div className="text-[11px] text-emerald-400 mt-1">
                      3 entregables esta semana
                    </div>
                  </div>

                  <div className="bg-[#121c38] p-4 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400">
                      Valor de Cartera Supervisada
                    </div>
                    <div className="text-2xl font-bold text-white mt-1">$1.84M USD</div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Distribuido en 7 consultorías
                    </div>
                  </div>

                  <div className="bg-[#121c38] p-4 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400">
                      Comisiones Acumuladas
                    </div>
                    <div className="text-2xl font-bold text-emerald-400 mt-1">$24,920 USD</div>
                    <div className="text-[11px] text-emerald-300 mt-1">
                      Liquidación próxima: 30 de mes
                    </div>
                  </div>

                  <div className="bg-[#121c38] p-4 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400">
                      SLA de Dictamen
                    </div>
                    <div className="text-2xl font-bold text-white mt-1">1.8 hrs prom.</div>
                    <div className="text-[11px] text-blue-400 mt-1">
                      100% dentro del estándar
                    </div>
                  </div>
                </div>

                {/* Dashboard Chart Mockup & Live Feed */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Chart Representation */}
                  <div className="lg:col-span-8 bg-[#121c38] p-5 rounded-2xl border border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-white">Rendimiento Operativo y Avance por Área</h4>
                        <p className="text-xs text-slate-400">Distribución de horas técnicas y consultorías resueltas</p>
                      </div>
                      <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">Últimos 6 Meses</span>
                    </div>

                    {/* Bar visualization */}
                    <div className="space-y-3.5 pt-2">
                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Consultoría Legal & Blindaje Contractual</span>
                          <span className="font-semibold text-blue-400">94% resuelto</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full w-[94%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Consultoría Agropecuaria & Costos de Cosecha</span>
                          <span className="font-semibold text-emerald-400">88% resuelto</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[88%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Consultoría Contable & Auditoría Fiscal</span>
                          <span className="font-semibold text-amber-400">91% resuelto</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-amber-500 to-orange-400 h-full w-[91%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Consultoría Ambiental & Certificaciones ESG</span>
                          <span className="font-semibold text-teal-400">82% resuelto</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full w-[82%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity stream right */}
                  <div className="lg:col-span-4 bg-[#121c38] p-5 rounded-2xl border border-slate-800 space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center justify-between">
                      <span>Notificaciones del CRM</span>
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    </h4>

                    <div className="space-y-3 pt-1 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                        <div className="font-semibold text-white">Dictamen Legal Aprobado</div>
                        <div className="text-slate-400 mt-0.5">Expediente #LG-3021 subió el informe final de compliance.</div>
                        <div className="text-[10px] text-blue-400 mt-1">Hace 25 min</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                        <div className="font-semibold text-white">Nuevo Cliente Vinculado</div>
                        <div className="text-slate-400 mt-0.5">Tu enlace de afiliado registró a Agrícola Los Álamos.</div>
                        <div className="text-[10px] text-emerald-400 mt-1">Hace 2 horas</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                        <div className="font-semibold text-white">Comisión Liquidada</div>
                        <div className="text-slate-400 mt-0.5">Transferencia de $3,450 USD confirmada en cuenta.</div>
                        <div className="text-[10px] text-amber-400 mt-1">Ayer 18:30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: MIS CASOS */}
            {activeTab === 'casos' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                {/* Search & Filter Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-2">
                  <div className="relative w-full sm:w-80">
                    <input
                      type="text"
                      value={caseFilter}
                      onChange={(e) => setCaseFilter(e.target.value)}
                      placeholder="Filtrar por cliente o área..."
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="text-xs text-slate-400">
                    Mostrando {filteredCases.length} expedientes activos
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#121c38]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900/80 text-slate-400 font-semibold uppercase tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="py-3 px-4">ID Expediente</th>
                        <th className="py-3 px-4">Cliente / Razón Social</th>
                        <th className="py-3 px-4">Áreas Involucradas</th>
                        <th className="py-3 px-4">Progreso</th>
                        <th className="py-3 px-4">Consultor Líder</th>
                        <th className="py-3 px-4">Estatus</th>
                        <th className="py-3 px-4 text-right">Acción</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {filteredCases.map((cs) => (
                        <tr key={cs.id} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-3.5 px-4 font-mono font-bold text-blue-400">{cs.id}</td>
                          <td className="py-3.5 px-4 font-semibold text-white">{cs.client}</td>
                          <td className="py-3.5 px-4 text-slate-300">{cs.area}</td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-20 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                <div className="bg-blue-500 h-full" style={{ width: `${cs.progress}%` }} />
                              </div>
                              <span className="font-mono text-[11px] text-slate-400">{cs.progress}%</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-slate-300">{cs.lead}</td>
                          <td className="py-3.5 px-4">
                            <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${cs.statusColor}`}>
                              {cs.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => alert(`Abriendo expediente cifrado ${cs.id} en el visualizador corporativo OIKONOMOS.`)}
                              className="px-2.5 py-1 bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white rounded-md text-[11px] font-medium transition-colors cursor-pointer"
                            >
                              Ver Bitácora
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: AFILIADOS Y COMISIONES */}
            {activeTab === 'afiliados' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Affiliate Share Link Banner */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950 via-[#101b3d] to-indigo-950 border border-blue-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center md:text-left">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Tu Enlace de Afiliado Exclusivo
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Comparte este enlace para asignar prospectos automáticamente a tu código de comisiones.
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="bg-slate-900 border border-slate-700 px-3 py-2 rounded-xl text-xs font-mono text-slate-300 truncate max-w-xs select-all">
                      {referralLink}
                    </div>
                    <button
                      onClick={handleCopyLink}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {copiedLink ? '¡Copiado!' : 'Copiar'}
                    </button>
                  </div>
                </div>

                {/* Sub-Affiliate Network Table */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white">Desglose de Aliados y Comisiones Directas</h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#121c38]">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-900/80 text-slate-400 font-semibold uppercase tracking-wider border-b border-slate-800">
                        <tr>
                          <th className="py-3 px-4">Código Aliado</th>
                          <th className="py-3 px-4">Nombre / Organización</th>
                          <th className="py-3 px-4">Nivel de Alianza</th>
                          <th className="py-3 px-4">Clientes Activos</th>
                          <th className="py-3 px-4">Comisiones Generadas</th>
                          <th className="py-3 px-4">Estatus</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        {SAMPLE_AFFILIATES.map((af) => (
                          <tr key={af.code} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-3.5 px-4 font-mono font-bold text-amber-400">{af.code}</td>
                            <td className="py-3.5 px-4 font-semibold text-white">{af.name}</td>
                            <td className="py-3.5 px-4">
                              <span className="px-2 py-0.5 rounded text-[11px] bg-blue-900/40 text-blue-300 border border-blue-700/50">
                                {af.tier}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 font-mono">{af.activeClients} empresas</td>
                            <td className="py-3.5 px-4 font-bold text-emerald-400">{af.commission}</td>
                            <td className="py-3.5 px-4">
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                {af.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Mockup Footer */}
          <div className="bg-[#0e172e] px-4 sm:px-6 py-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Base de Datos Cifrada OIKONOMOS Core • Servidores Dedicados Tier IV</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenLoginModal}
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Abrir en Pantalla Completa →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
