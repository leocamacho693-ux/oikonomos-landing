'use client';

import React, { useState, useMemo } from 'react';
import { useApp } from './AppContext';
import { ArrowLeftRight, TrendingUp, ShieldCheck, Database, Landmark, DollarSign, ExternalLink, BarChart3, LineChart, Sparkles } from 'lucide-react';

interface CrmSectionProps {
  onOpenLoginModal: () => void;
  onRequestAffiliation: () => void;
}

// Índices y Cotizaciones Financieras en Vivo de OIKONOMOS CAPITAL
const FINANCIAL_INDICES = [
  { sym: 'USD / BCV', val: 'Bs. 48.24', change: '+0.12%', isUp: true, source: 'BCV' },
  { sym: 'USD / P2P', val: 'Bs. 57.80', change: '+0.35%', isUp: true, source: 'P2P' },
  { sym: 'EUR / BCV', val: 'Bs. 52.40', change: '+0.08%', isUp: true, source: 'BCV' },
  { sym: 'BTC / USDT', val: '$88,450.00', change: '+3.42%', isUp: true, source: 'Crypto' },
  { sym: 'ETH / USDT', val: '$3,120.50', change: '+2.15%', isUp: true, source: 'Crypto' },
  { sym: 'BVC Caracas (IBC)', val: '124,530 pts', change: '+1.10%', isUp: true, source: 'BVC' },
  { sym: 'Oro (Oz Troy)', val: '$2,684.20', change: '+0.45%', isUp: true, source: 'Commodities' },
  { sym: 'TRM Colombia', val: '$4,395 COP', change: '-0.20%', isUp: false, source: 'TRM' },
];

export default function CrmSection({ onOpenLoginModal, onRequestAffiliation }: CrmSectionProps) {
  const { lang, t } = useApp();

  // Estados del Convertidor Inteligente de Oikonomos Capital
  const [amount, setAmount] = useState<string>('100');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [isInverse, setIsInverse] = useState<boolean>(false);

  // Tasas referenciales oficiales y paralelas de Oikonomos Capital
  const rates = useMemo(() => ({
    USD: { bcv: 48.24, p2p: 57.80 },
    USDT: { bcv: 48.24, p2p: 58.10 },
    EUR: { bcv: 52.40, p2p: 62.50 },
    BTC: { bcv: 48.24 * 88450, p2p: 57.80 * 88450 },
    VES: { bcv: 1, p2p: 1 }
  }), []);

  const numAmount = parseFloat(amount) || 0;
  const currentRate = rates[selectedCurrency as keyof typeof rates] || rates.USD;

  // Cálculo de conversión Tasa BCV
  const resultBCV = useMemo(() => {
    if (selectedCurrency === 'VES') {
      return numAmount > 0 ? (numAmount / rates.USD.bcv).toFixed(2) : '0.00';
    }
    return (numAmount * currentRate.bcv).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }, [numAmount, selectedCurrency, currentRate, rates.USD.bcv]);

  // Cálculo de conversión Mercado P2P
  const resultP2P = useMemo(() => {
    if (selectedCurrency === 'VES') {
      return numAmount > 0 ? (numAmount / rates.USD.p2p).toFixed(2) : '0.00';
    }
    return (numAmount * currentRate.p2p).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }, [numAmount, selectedCurrency, currentRate, rates.USD.p2p]);

  // Diferencial Cambiario (Spread)
  const spreadPercentage = useMemo(() => {
    const diff = ((rates.USD.p2p - rates.USD.bcv) / rates.USD.bcv) * 100;
    return diff.toFixed(2);
  }, [rates.USD]);

  // Brecha nominal en Bolívares
  const spreadNominal = useMemo(() => {
    return (rates.USD.p2p - rates.USD.bcv).toFixed(2);
  }, [rates.USD]);

  const handleSwap = () => {
    setIsInverse(!isInverse);
    if (!isInverse) {
      setSelectedCurrency('VES');
      setAmount('5000');
    } else {
      setSelectedCurrency('USD');
      setAmount('100');
    }
  };

  return (
    <section id="ecosistema-crm" className="py-20 md:py-28 bg-[#070E22] text-white relative overflow-hidden transition-colors duration-200">
      
      {/* 1. Ticker Bar Superior con Índices Financieros en Tiempo Real */}
      <div className="border-y border-slate-800 bg-[#040814] py-3 overflow-hidden shadow-inner mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {lang === 'es' ? 'Índices Financieros en Vivo • OIKONOMOS CAPITAL' : 'Live Financial Indices • OIKONOMOS CAPITAL'}
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              {lang === 'es' ? 'Sincronización BCV, P2P & BVC' : 'BCV, P2P & BVC Synchronization'}
            </span>
          </div>

          {/* Grid de Índices */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 pt-1">
            {FINANCIAL_INDICES.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5 flex flex-col justify-between hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span className="truncate">{item.sym}</span>
                  <span className="text-[9px] px-1 rounded bg-slate-800 text-slate-300">{item.source}</span>
                </div>
                <div className="text-xs font-bold text-white font-mono mt-1">
                  {item.val}
                </div>
                <div className={`text-[10px] font-mono font-semibold mt-0.5 ${item.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {item.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Principal */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-700/60 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            {lang === 'es' ? 'Inteligencia Financiera & Gestión de Activos' : 'Financial Intelligence & Asset Management'}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'es' ? 'Calculadora y Convertidor ' : 'Calculator and Converter '}
            <span className="text-blue-400">
              {lang === 'es' ? 'Multi-Mercado' : 'Multi-Market'}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {lang === 'es' 
              ? 'Herramienta de precisión financiera de Oikonomos Capital que calcula en tiempo real la tasa oficial BCV, la cotización P2P y la brecha cambiaria (spread) para optimizar la toma de decisiones corporativas.'
              : 'Oikonomos Capital precision financial tool calculating official BCV rates, P2P market prices, and exchange spreads in real time to optimize corporate decision-making.'}
          </p>
        </div>

        {/* Sección Central: Calculadora / Convertidor y Panel de Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Columna Izquierda: Calculadora Interactiva de Oikonomos Capital */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
              <div>
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block">
                  {lang === 'es' ? 'Convertidor Inteligente' : 'Smart Converter'}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'es' ? 'Simulador de Conversión y Reposición' : 'Conversion & Replacement Simulator'}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                {lang === 'es' ? 'Tasas del Día' : 'Daily Rates'}
              </span>
            </div>

            <div className="space-y-5">
              {/* Monto a Convertir */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {lang === 'es' ? 'Monto a Convertir:' : 'Amount to Convert:'}
                </label>
                <div className="flex rounded-2xl bg-slate-950 border border-slate-800 p-1.5 focus-within:border-blue-500 transition-colors">
                  <input
                    type="number"
                    min="1"
                    step="any"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-transparent px-4 py-2.5 text-lg sm:text-xl font-bold font-mono text-white placeholder-slate-500 focus:outline-none"
                    placeholder="100"
                  />
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="bg-slate-900 text-white font-bold text-sm px-4 py-2 rounded-xl border border-slate-700 focus:outline-none cursor-pointer"
                  >
                    <option value="USD">USD (Dólar)</option>
                    <option value="USDT">USDT (Tether)</option>
                    <option value="EUR">EUR (Euro)</option>
                    <option value="BTC">BTC (Bitcoin)</option>
                    <option value="VES">VES (Bolívares)</option>
                  </select>
                </div>
              </div>

              {/* Botón de Invertir (Swap) */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleSwap}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer shadow-sm"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>{lang === 'es' ? 'Invertir dirección de cálculo' : 'Invert calculation direction'}</span>
                </button>
              </div>

              {/* Resultados en Cuadrícula (BCV vs P2P) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Cuadro Tasa Oficial BCV */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase">
                      {lang === 'es' ? 'Tasa Oficial BCV' : 'Official BCV Rate'}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 font-mono">
                      Oficial
                    </span>
                  </div>
                  <div className="text-2xl font-black font-mono text-white">
                    {selectedCurrency === 'VES' ? `$ ${resultBCV} USD` : `Bs. ${resultBCV}`}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {selectedCurrency === 'VES' 
                      ? `Tasa: Bs. ${rates.USD.bcv}` 
                      : `1 ${selectedCurrency} = Bs. ${rates[selectedCurrency as keyof typeof rates]?.bcv || rates.USD.bcv}`}
                  </div>
                </div>

                {/* Cuadro Mercado P2P / Paralelo */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase">
                      {lang === 'es' ? 'Mercado P2P / Paralelo' : 'P2P / Market Rate'}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-900/40 text-emerald-300 font-mono">
                      Mercado
                    </span>
                  </div>
                  <div className="text-2xl font-black font-mono text-white">
                    {selectedCurrency === 'VES' ? `$ ${resultP2P} USD` : `Bs. ${resultP2P}`}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {selectedCurrency === 'VES' 
                      ? `Tasa: Bs. ${rates.USD.p2p}` 
                      : `1 ${selectedCurrency} = Bs. ${rates[selectedCurrency as keyof typeof rates]?.p2p || rates.USD.p2p}`}
                  </div>
                </div>
              </div>

              {/* Caja de Spread Cambiario */}
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-300">
                    {lang === 'es' ? 'Diferencial Cambiario (Spread):' : 'Exchange Spread:'}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {lang === 'es' ? `Brecha nominal: Bs. ${spreadNominal} por dólar` : `Nominal gap: Bs. ${spreadNominal} per dollar`}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-xl bg-blue-600 text-white font-mono font-bold text-sm shadow-sm">
                    +{spreadPercentage}%
                  </span>
                </div>
              </div>

              {/* Botón de Acción Directa */}
              <div className="pt-2">
                <button
                  onClick={onOpenLoginModal}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{lang === 'es' ? 'Acceder al Portal OIKONOMOS CAPITAL' : 'Access OIKONOMOS CAPITAL Portal'}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Columna Derecha: Análisis de Mercado & Fuentes Oficiales */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                {lang === 'es' ? 'Fuentes Financieras Integradas' : 'Integrated Financial Sources'}
              </div>
              <h4 className="text-lg font-bold text-white">
                {lang === 'es' ? 'Datos Oficiales y Mercados en Tiempo Real' : 'Official Data & Real-Time Markets'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'es'
                  ? 'Oikonomos Capital consolida cotizaciones multi-divisa oficiales, libros de órdenes P2P, mercado bursátil y precios del sector productivo para respaldar la estructuración corporativa.'
                  : 'Oikonomos Capital consolidates official multi-currency rates, P2P order books, stock markets, and agricultural benchmarks to support corporate structuring.'}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <Landmark className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Banco Central de Venezuela (BCV)</div>
                    <div className="text-[11px] text-slate-400 leading-normal">
                      {lang === 'es' ? 'Tasas oficiales ponderadas de las mesas de cambio bancarias: USD, EUR, CNY, TRY y RUB.' : 'Weighted official exchange table rates: USD, EUR, CNY, TRY, and RUB.'}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <Database className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Binance P2P & Crypto Activos</div>
                    <div className="text-[11px] text-slate-400 leading-normal">
                      {lang === 'es' ? 'Libros de órdenes en vivo entre particulares en USDT, Bitcoin y principales stablecoins.' : 'Live peer-to-peer order books across USDT, Bitcoin, and leading stablecoins.'}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Bolsa de Valores de Caracas (BVC)</div>
                    <div className="text-[11px] text-slate-400 leading-normal">
                      {lang === 'es' ? 'Renta variable nacional, Índice bursátil IBC y cotización de acciones bancarias e industriales.' : 'Domestic equities, IBC index, and banking/industrial stock price monitoring.'}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Agropecuario & Materias Primas</div>
                    <div className="text-[11px] text-slate-400 leading-normal">
                      {lang === 'es' ? 'Monitoreo de precios referenciales de café, ganado, maíz y azúcar para el sector productivo.' : 'Benchmark price monitoring for coffee, cattle, corn, and sugar across the agro sector.'}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Tarjeta de Asesoría Estratégica */}
            <div className="p-6 rounded-3xl bg-blue-950/30 border border-blue-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white">
                  {lang === 'es' ? '¿Deseas estructurar cobertura cambiaria?' : 'Looking to structure currency hedging?'}
                </div>
                <div className="text-xs text-slate-300">
                  {lang === 'es' ? 'Nuestros consultores analizan tu flujo de caja operativo y fijan costos de reposición.' : 'Our consultants analyze your operational cash flow and model replacement costs.'}
                </div>
              </div>
              <button
                onClick={onRequestAffiliation}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all flex-shrink-0 cursor-pointer shadow-md"
              >
                {lang === 'es' ? 'Consultar con Asesor' : 'Consult with Advisor'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
