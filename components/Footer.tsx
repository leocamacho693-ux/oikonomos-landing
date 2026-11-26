'use client';

import React from 'react';
import { CONSULTING_AREAS } from './Data';
import { NavTabId, NAV_LINKS } from './Navbar';

interface FooterProps {
  onOpenLoginModal: () => void;
  onSelectService: (serviceId: string) => void;
  onSelectTab?: (tabId: NavTabId) => void;
}

export default function Footer({ onOpenLoginModal, onSelectService, onSelectTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060B18] text-white border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo Oficial OIKONOMOS */}
            <div>
              <img 
                src="/logo-white.png" 
                alt="OIKONOMOS" 
                className="h-11 w-auto object-contain mb-3" 
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              Firma consultora multidisciplinaria de vanguardia orientada a la optimización integral de organizaciones en América Latina y mercados globales, potenciada por nuestro Ecosistema CRM para afiliados.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenLoginModal}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-900/60 hover:bg-blue-800 border border-blue-700/60 transition-all cursor-pointer"
              >
                Portal CRM Afiliados
              </button>
            </div>
          </div>

          {/* Quick Links: Navegación de Pestañas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Pestañas
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onSelectTab && onSelectTab(link.id)}
                    className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links: 7 Consulting Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Áreas de Consultoría
            </h4>
            <ul className="space-y-2 text-xs">
              {CONSULTING_AREAS.map((area) => (
                <li key={area.id}>
                  <button
                    onClick={() => {
                      if (onSelectTab) onSelectTab('consultoria');
                      onSelectService(area.id);
                    }}
                    className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer truncate max-w-full block"
                  >
                    {area.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Contacto Corporativo
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div>
                <span className="text-slate-300 font-semibold">Sede: </span>
                Torre Empresarial Oikonomos, Distrito Financiero Central
              </div>
              <div>
                <span className="text-slate-300 font-semibold">Email: </span>
                <span className="font-mono">contacto@oikonomos.global</span>
              </div>
              <div>
                <span className="text-slate-300 font-semibold">Línea Directa: </span>
                +1 (800) 459-OIKO
              </div>
              <div>
                <span className="text-slate-300 font-semibold">Cobertura: </span>
                Red Global de Afiliados y Aliados Estratégicos
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
                Certificación en Seguridad y Confidencialidad ISO 27001
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {currentYear} OIKONOMOS GLOBAL S.A. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <a href="#aviso-legal" onClick={(e) => { e.preventDefault(); alert('Aviso Legal: Toda la información provista por OIKONOMOS GLOBAL está sujeta a secreto profesional y acuerdos de confidencialidad NDA.'); }} className="hover:text-slate-300 transition-colors">
              Aviso Legal
            </a>
            <a href="#privacidad" onClick={(e) => { e.preventDefault(); alert('Política de Privacidad: Tratamiento de datos de acuerdo con estándares GDPR y normativas corporativas internacionales.'); }} className="hover:text-slate-300 transition-colors">
              Política de Privacidad
            </a>
            <a href="#terminos-crm" onClick={(e) => { e.preventDefault(); alert('Términos de Uso CRM: Plataforma exclusiva para clientes y afiliados autorizados.'); }} className="hover:text-slate-300 transition-colors">
              Términos del CRM
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
