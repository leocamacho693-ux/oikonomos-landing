'use client';

import React from 'react';
import { useApp } from './AppContext';

interface FooterProps {
  onOpenLoginModal: () => void;
  onSelectService?: (serviceId: string) => void;
  onSelectTab?: (tabId: any) => void;
}

export default function Footer({ onOpenLoginModal }: FooterProps) {
  const { t } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060B18] text-white border-t border-slate-800/80 py-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Row: Logo y descripción a la izquierda, Dirección y Contacto a la derecha */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800/60">
          
          {/* Brand */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img 
              src="/logo-white.png" 
              alt="OIKONOMOS" 
              className="h-9 w-auto object-contain" 
            />
            <div className="text-xs text-slate-400 max-w-md sm:border-l sm:border-slate-800 sm:pl-4">
              {t('footer.desc')}
            </div>
          </div>

          {/* Sede y Contacto */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
            <div>
              <span className="text-slate-400">{t('footer.headquarters')}</span>{' '}
              <strong className="text-white font-medium">{t('footer.address')}</strong>
            </div>

            <div className="hidden sm:block text-slate-700">•</div>

            <div>
              <span className="text-slate-400">Email:</span>{' '}
              <span className="font-mono text-blue-300">contacto@oikonomos.global</span>
            </div>

            <button
              onClick={onOpenLoginModal}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-blue-200 bg-blue-900/40 hover:bg-blue-800/60 border border-blue-500/30 transition-all cursor-pointer shadow-sm"
            >
              {t('footer.crm_btn')}
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <div>
            © {currentYear} OIKONOMOS GLOBAL. {t('footer.rights')}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#aviso-legal" 
              onClick={(e) => { e.preventDefault(); alert('Aviso Legal: Toda la información provista por OIKONOMOS está sujeta a secreto profesional y confidencialidad.'); }} 
              className="hover:text-slate-300 transition-colors"
            >
              {t('footer.legal')}
            </a>
            <a 
              href="#privacidad" 
              onClick={(e) => { e.preventDefault(); alert('Política de Privacidad: Tratamiento de datos confidenciales de acuerdo con estándares y normativas corporativas.'); }} 
              className="hover:text-slate-300 transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <a 
              href="#terminos-crm" 
              onClick={(e) => { e.preventDefault(); alert('Términos del CRM: Plataforma exclusiva para clientes y afiliados autorizados.'); }} 
              className="hover:text-slate-300 transition-colors"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
