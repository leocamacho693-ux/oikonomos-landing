'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export type NavTabId = 'inicio' | 'identidad' | 'consultoria' | 'crm' | 'afiliados' | 'contacto';

export interface NavLinkItem {
  id: NavTabId;
  name: string;
  hash: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'inicio', name: 'Inicio', hash: '#inicio' },
  { id: 'identidad', name: 'Identidad', hash: '#identidad' },
  { id: 'consultoria', name: 'Áreas de Consultoría', hash: '#areas-consultoria' },
  { id: 'crm', name: 'Ecosistema CRM', hash: '#ecosistema-crm' },
  { id: 'afiliados', name: 'Afiliados', hash: '#afiliados' },
  { id: 'contacto', name: 'Contacto', hash: '#contacto' },
];

interface NavbarProps {
  activeTab: NavTabId;
  onSelectTab: (tabId: NavTabId) => void;
  onOpenLoginModal: () => void;
  onNavigateToContact: (areaId?: string, profile?: 'consulting' | 'affiliate') => void;
}

export default function Navbar({
  activeTab,
  onSelectTab,
  onOpenLoginModal,
  onNavigateToContact,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId: NavTabId) => {
    setMobileMenuOpen(false);
    onSelectTab(tabId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070E22]/95 backdrop-blur-md shadow-lg py-1.5 border-b border-slate-800'
            : 'bg-[#070E22]/90 backdrop-blur-md py-2 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Grupo Izquierdo: Logo con fondo blanco y pestañas de navegación */}
            <div className="flex items-center gap-3 sm:gap-3.5 lg:gap-5">
              {/* Logo Oficial OIKONOMOS */}
              <button 
                type="button"
                onClick={() => handleTabClick('inicio')}
                className="flex items-center group focus:outline-none py-0.5 mr-1 cursor-pointer"
                title="Volver a Inicio"
              >
                <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white shadow-md shadow-black/30 group-hover:shadow-xl group-hover:scale-105 transition-all duration-200 border border-white/90">
                  <img 
                    src="/logo-dark.png" 
                    alt="OIKONOMOS" 
                    className="h-8 sm:h-8.5 md:h-9 w-auto object-contain" 
                  />
                </div>
              </button>

              {/* Desktop Navigation Tabs */}
              <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = activeTab === link.id;
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleTabClick(link.id)}
                      className={`text-sm font-semibold transition-all duration-200 relative py-1.5 px-3 rounded-lg cursor-pointer ${
                        isActive
                          ? 'text-white bg-blue-600/30 border border-blue-400/50 shadow-sm shadow-blue-500/20'
                          : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-400 to-amber-400 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Action Buttons Right */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Secondary (Outline): Acceso CRM Afiliados */}
              <button
                onClick={onOpenLoginModal}
                className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-blue-200 border border-blue-400/30 hover:border-blue-400 hover:bg-blue-900/30 transition-all duration-200 cursor-pointer shadow-sm"
              >
                Acceso CRM Afiliados
              </button>

              {/* Primary (Solid): Agendar Diagnóstico */}
              <button
                onClick={() => onNavigateToContact(undefined, 'consulting')}
                className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 shadow-md shadow-blue-950 transition-all duration-200 cursor-pointer active:scale-[0.98] border border-blue-400/30"
              >
                Agendar Diagnóstico
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenLoginModal}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-blue-200 border border-blue-400/30 bg-blue-900/30"
                aria-label="Abrir login CRM"
              >
                CRM
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-[56px] left-0 right-0 bg-[#0B132B] border-b border-slate-800 shadow-2xl p-6 space-y-4 animate-in slide-in-from-top-4 duration-300 text-white">
            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleTabClick(link.id)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-semibold transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'text-white bg-blue-600/30 border border-blue-400/40'
                        : 'text-slate-200 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="pt-3 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLoginModal();
                }}
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-blue-200 border border-blue-400/30 bg-blue-900/30"
              >
                Acceso CRM Afiliados
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToContact(undefined, 'consulting');
                }}
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600"
              >
                Agendar Diagnóstico
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
