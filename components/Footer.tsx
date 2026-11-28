'use client';

import React from 'react';
import { useApp } from './AppContext';

const CRM_LOGIN_URL = process.env.NEXT_PUBLIC_CRM_URL || 'http://localhost:3001/login';

interface FooterProps {
  onOpenLoginModal?: () => void;
  onSelectService?: (serviceId: string) => void;
  onSelectTab?: (tabId: any) => void;
}

export default function Footer({}: FooterProps) {
  const { t } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030712] text-white border-t border-slate-700/80 pt-8 pb-6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Row: Logo y descripción a la izquierda, Dirección y Contacto a la derecha */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img 
              src="/logo-white.png" 
              alt="OIKONOMOS" 
              className="h-9 w-auto object-contain" 
            />
            <div className="text-xs text-slate-300 max-w-md sm:border-l sm:border-slate-800 sm:pl-4 leading-relaxed">
              {t('footer.desc')}
            </div>
          </div>

          {/* Sede y Contacto */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
              <span className="text-slate-400">{t('footer.headquarters')}</span>
              <strong className="text-white font-semibold">{t('footer.address')}</strong>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
              <span className="text-slate-400">Email:</span>
              <span className="font-mono text-blue-300 font-medium">contacto@oikonomos.global</span>
            </div>

            <a
              href={CRM_LOGIN_URL}
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-400/30 transition-all cursor-pointer shadow-md shadow-blue-900/30"
            >
              {t('footer.crm_btn')}
            </a>
          </div>

        </div>

        {/* Segunda Parte: Barra inferior claramente diferenciada con fondo contrastado y enlaces en cápsulas */}
        <div className="mt-5 rounded-2xl bg-[#010309] border border-slate-800/90 p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 shadow-inner">
          <div className="font-medium text-slate-300">
            © {currentYear} OIKONOMOS GLOBAL. {t('footer.rights')}
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <a 
              href="#aviso-legal" 
              onClick={(e) => { e.preventDefault(); alert('Aviso Legal: Toda la información provista por OIKONOMOS está sujeta a secreto profesional y confidencialidad.'); }} 
              className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {t('footer.legal')}
            </a>
            <a 
              href="#privacidad" 
              onClick={(e) => { e.preventDefault(); alert('Política de Privacidad: Tratamiento de datos confidenciales de acuerdo con estándares y normativas corporativas.'); }} 
              className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {t('footer.privacy')}
            </a>
            <a 
              href="#terminos-crm" 
              onClick={(e) => { e.preventDefault(); alert('Términos del CRM: Plataforma exclusiva para clientes y afiliados autorizados.'); }} 
              className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
