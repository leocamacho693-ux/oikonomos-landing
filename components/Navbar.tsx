'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useApp } from './AppContext';

const CRM_LOGIN_URL = process.env.NEXT_PUBLIC_CRM_URL || 'http://localhost:3001/login';

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
  { id: 'afiliados', name: 'Afiliados', hash: '#afiliados' },
  { id: 'contacto', name: 'Contacto', hash: '#contacto' },
  { id: 'crm', name: 'Capital', hash: '#capital' },
];

interface NavbarProps {
  activeTab: NavTabId;
  onSelectTab: (tabId: NavTabId) => void;
  onOpenLoginModal?: () => void;
  onNavigateToContact: (areaId?: string, profile?: 'consulting' | 'affiliate') => void;
}

export default function Navbar({
  activeTab,
  onSelectTab,
  onNavigateToContact,
}: NavbarProps) {
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();
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

  const navLinks: NavLinkItem[] = [
    { id: 'inicio', name: t('nav.inicio'), hash: '#inicio' },
    { id: 'identidad', name: t('nav.identidad'), hash: '#identidad' },
    { id: 'consultoria', name: t('nav.consultoria'), hash: '#areas-consultoria' },
    { id: 'afiliados', name: t('nav.afiliados'), hash: '#afiliados' },
    { id: 'contacto', name: t('nav.contacto'), hash: '#contacto' },
    { id: 'crm', name: t('nav.crm'), hash: '#capital' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          isScrolled
            ? 'bg-[#070E22]/95 shadow-lg py-1.5 border-b border-slate-800'
            : 'bg-[#070E22]/95 py-2 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Grupo Izquierdo: Logo con fondo blanco y pestañas de navegación */}
            <div className="flex items-center gap-3 sm:gap-3.5 lg:gap-4">
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
              <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activeTab === link.id;
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleTabClick(link.id)}
                      className={`text-sm font-semibold transition-all duration-200 relative py-1.5 px-2.5 xl:px-3 rounded-lg cursor-pointer ${
                        isActive
                          ? 'text-white bg-blue-600/30 border border-blue-400/50 shadow-sm shadow-blue-500/20'
                          : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-400 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Controles de Idioma, Tema y Botones de Acción */}
            <div className="hidden sm:flex items-center gap-2 lg:gap-2.5">
              {/* Selector de Idioma (Estilo UNET [文A ES / EN]) */}
              <button
                type="button"
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all cursor-pointer shadow-xs"
                title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span className="tracking-wider">{lang.toUpperCase()}</span>
              </button>

              {/* Conmutador Modo Claro / Modo Oscuro */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all cursor-pointer shadow-xs"
                title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
                aria-label="Alternar modo claro y oscuro"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-300 transition-transform" />
                )}
              </button>

              {/* Secondary (Outline): Acceso CRM Afiliados */}
              <a
                href={CRM_LOGIN_URL}
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-blue-200 border border-blue-400/30 hover:border-blue-400 hover:bg-blue-900/30 transition-all duration-200 cursor-pointer shadow-sm"
              >
                {t('nav.crm_access')}
              </a>

              {/* Primary (Solid): Agendar Diagnóstico */}
              <button
                onClick={() => onNavigateToContact(undefined, 'consulting')}
                className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-950 transition-all duration-200 cursor-pointer active:scale-[0.98] border border-blue-400/30"
              >
                {t('nav.diagnostic')}
              </button>
            </div>

            {/* Mobile Actions: Language, Theme & Hamburger Button */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                type="button"
                onClick={toggleLang}
                className="px-2 py-1 rounded-lg text-xs font-bold text-slate-200 bg-white/10 border border-white/20"
                title="Cambiar Idioma"
              >
                {lang.toUpperCase()}
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="p-1.5 rounded-lg text-slate-200 bg-white/10 border border-white/20"
                title="Alternar Tema"
                aria-label="Alternar modo claro y oscuro"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-blue-300" />
                )}
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
            className="fixed inset-0 bg-slate-950/80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-[56px] left-0 right-0 bg-[#0B132B] border-b border-slate-800 shadow-2xl p-6 space-y-4 animate-in slide-in-from-top-4 duration-300 text-white">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
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
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="pt-3 space-y-2.5 border-t border-slate-800">
              <a
                href={CRM_LOGIN_URL}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-blue-200 border border-blue-400/30 bg-blue-900/30"
              >
                {t('nav.crm_access')}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToContact(undefined, 'consulting');
                }}
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600"
              >
                {t('nav.diagnostic')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
