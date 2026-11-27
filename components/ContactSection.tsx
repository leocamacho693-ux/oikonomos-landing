'use client';

import React, { useState, useEffect } from 'react';
import { CONSULTING_AREAS } from './Data';
import { useApp } from './AppContext';

interface ContactSectionProps {
  selectedAreaFromParent?: string;
  defaultProfile?: 'consulting' | 'affiliate';
}

export default function ContactSection({ selectedAreaFromParent, defaultProfile = 'consulting' }: ContactSectionProps) {
  const { t, lang } = useApp();
  const [profile, setProfile] = useState<'consulting' | 'affiliate'>(defaultProfile);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // When parent triggers an area selection (e.g. from service card)
  useEffect(() => {
    if (selectedAreaFromParent) {
      if (selectedAreaFromParent === 'todos') {
        setSelectedAreas(CONSULTING_AREAS.map(a => a.id));
      } else {
        setSelectedAreas([selectedAreaFromParent]);
      }
    }
  }, [selectedAreaFromParent]);

  useEffect(() => {
    if (defaultProfile) {
      setProfile(defaultProfile);
    }
  }, [defaultProfile]);

  const toggleArea = (areaId: string) => {
    if (selectedAreas.includes(areaId)) {
      setSelectedAreas(selectedAreas.filter(id => id !== areaId));
    } else {
      setSelectedAreas([...selectedAreas, areaId]);
    }
  };

  const handleSelectAllAreas = () => {
    if (selectedAreas.length === CONSULTING_AREAS.length) {
      setSelectedAreas([]);
    } else {
      setSelectedAreas(CONSULTING_AREAS.map(a => a.id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !company || !phone) {
      setFormError(lang === 'es' ? 'Por favor completa todos los campos requeridos (*).' : 'Please complete all required fields (*).');
      return;
    }
    if (selectedAreas.length === 0) {
      setFormError(lang === 'es' ? 'Por favor selecciona al menos un área de consultoría de tu interés.' : 'Please select at least one consulting area of interest.');
      return;
    }

    setFormError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFullName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSelectedAreas([]);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#070E22] text-slate-800 dark:text-slate-100 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-blue-900 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase">
            {t('contact.badge')}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B132B] dark:text-white tracking-tight">
            {t('contact.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xl p-6 sm:p-10 relative overflow-hidden transition-colors">
            
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-bold text-2xl border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
                  ✓
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0B132B] dark:text-white">
                    {lang === 'es' ? '¡Solicitud Recibida con Éxito!' : 'Request Successfully Received!'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    {lang === 'es' 
                      ? <>Hemos registrado tu requerimiento para <strong className="text-slate-900 dark:text-white">{company}</strong>. Un socio consultor senior de OIKONOMOS GLOBAL revisará los antecedentes y te contactará en un plazo máximo de <strong>2 horas hábiles</strong>.</>
                      : <>We have registered your request for <strong className="text-slate-900 dark:text-white">{company}</strong>. A senior partner of OIKONOMOS GLOBAL will review the information and contact you within <strong>2 business hours</strong>.</>}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  <span>{lang === 'es' ? 'Código de seguimiento generado: ' : 'Generated tracking code: '}</span>
                  <span className="font-mono font-bold text-blue-700 dark:text-blue-400">OIK-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Enviar otra solicitud' : 'Send another request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {formError && (
                  <div className="p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs rounded-xl">
                    {formError}
                  </div>
                )}

                {/* Perfil del Servicio: Exclusivo Consultoría */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold bg-[#1E3A8A] text-white shadow-sm">
                    {t('contact.profile_label')}
                  </div>
                </div>

                {/* 7 Consulting Areas Selector */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      {t('contact.areas_label')}
                    </label>
                    <button
                      type="button"
                      onClick={handleSelectAllAreas}
                      className="text-xs text-blue-700 dark:text-blue-400 hover:underline font-semibold cursor-pointer"
                    >
                      {selectedAreas.length === CONSULTING_AREAS.length ? t('contact.deselect_all') : t('contact.select_all')}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CONSULTING_AREAS.map((area) => {
                      const isSelected = selectedAreas.includes(area.id);
                      return (
                        <div
                          key={area.id}
                          onClick={() => toggleArea(area.id)}
                          className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all select-none ${
                            isSelected
                              ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-600 dark:border-blue-500 text-blue-950 dark:text-blue-100 font-bold shadow-sm'
                              : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          <span>{area.name}</span>
                          <span className={`text-[11px] font-mono ${isSelected ? 'text-blue-700 dark:text-blue-400 font-bold' : 'text-slate-400'}`}>
                            {isSelected ? (lang === 'es' ? 'SELECCIONADO' : 'SELECTED') : '+'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Fields Grid */}
                <div className="space-y-4 pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {t('contact.data_label')}
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">{t('contact.name_placeholder')}</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Lic. Alejandro Morales"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">{t('contact.company_placeholder')}</label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Corporación Agrícola del Sur"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Corporate Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">{t('contact.email_placeholder')}</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="amorales@empresa.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">{t('contact.phone_placeholder')}</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1 pt-1">
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      {lang === 'es' ? 'Detalle del Proyecto o Necesidad (Opcional)' : 'Project Detail or Needs (Optional)'}
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t('contact.message_placeholder')}
                      className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl font-bold text-white bg-[#1E3A8A] hover:bg-blue-900 shadow-xl shadow-blue-900/25 transition-all cursor-pointer disabled:opacity-75"
                >
                  {loading ? (lang === 'es' ? 'Procesando solicitud...' : 'Processing request...') : t('contact.submit_btn')}
                </button>

                {/* Privacy note */}
                <div className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
                  {t('contact.privacy_note')}
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Corporate Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-[#0B132B] text-white rounded-3xl p-7 border border-slate-800 shadow-xl space-y-5">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold">
                {lang === 'es' ? 'Sede Central & Cobertura' : 'Headquarters & Reach'}
              </div>

              <h3 className="text-xl font-bold text-white">
                OIKONOMOS GLOBAL Headquarters
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">{lang === 'es' ? 'Ubicación' : 'Location'}</div>
                  <div className="font-semibold text-white">{t('contact.hq_title')}</div>
                  <div>{t('contact.hq_address')}</div>
                  <div className="text-xs text-slate-400">{lang === 'es' ? 'Atención presencial y virtual' : 'In-person and virtual attention'}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">{lang === 'es' ? 'Horario' : 'Hours'}</div>
                  <div className="font-semibold text-white">{lang === 'es' ? 'Atención Ejecutiva' : 'Executive Hours'}</div>
                  <div>{lang === 'es' ? 'Lunes a Viernes: 8:00 AM - 7:00 PM (GMT-4)' : 'Monday to Friday: 8:00 AM - 7:00 PM (GMT-4)'}</div>
                  <div className="text-xs text-emerald-400">{lang === 'es' ? 'Soporte CRM para afiliados: 24/7' : 'CRM Support for affiliates: 24/7'}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{lang === 'es' ? 'Canales Directos' : 'Direct Channels'}</div>
                  <div className="font-mono text-xs">contacto@oikonomos.global</div>
                  <div className="font-mono text-xs text-amber-400">afiliados@oikonomos.global</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  {lang === 'es' 
                    ? <>¿Ya tienes asignado un consultor líder? Ingresa directamente con tu código de expediente al <a href="#ecosistema-crm" className="text-blue-400 underline font-semibold">Portal CRM</a>.</>
                    : <>Already have an assigned lead consultant? Log in directly with your case code at the <a href="#ecosistema-crm" className="text-blue-400 underline font-semibold">CRM Portal</a>.</>}
                </div>
              </div>
            </div>

            {/* Why choose us callout */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-md space-y-4 transition-colors">
              <h4 className="text-base font-bold text-[#0B132B] dark:text-white">
                {lang === 'es' ? 'Compromiso de Calidad OIKONOMOS' : 'OIKONOMOS Quality Commitment'}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <li>
                  <strong className="text-slate-800 dark:text-slate-100">{lang === 'es' ? 'Dictámenes Vinculantes: ' : 'Binding Opinions: '}</strong>
                  {lang === 'es' ? 'Respaldados por especialistas colegiados en cada una de las 7 disciplinas.' : 'Backed by registered specialists across all 7 disciplines.'}
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-100">{lang === 'es' ? 'Trazabilidad Digital: ' : 'Digital Traceability: '}</strong>
                  {lang === 'es' ? 'Cada interacción y documento queda registrado con firma electrónica en el CRM.' : 'Every interaction and document is logged with electronic signature in the CRM.'}
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-100">{lang === 'es' ? 'Comisiones Transparentes: ' : 'Transparent Commissions: '}</strong>
                  {lang === 'es' ? 'Reportes automatizados de liquidación para nuestra red de afiliados.' : 'Automated settlement reporting for our affiliate network.'}
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
