'use client';

import React, { useState, useEffect } from 'react';
import Navbar, { NavTabId, NAV_LINKS } from '@/components/Navbar';
import Hero from '@/components/Hero';
import CorporateIdentity from '@/components/CorporateIdentity';
import ConsultingServices from '@/components/ConsultingServices';
import CrmSection from '@/components/CrmSection';
import HowItWorks from '@/components/HowItWorks';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CrmLoginModal from '@/components/CrmLoginModal';

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavTabId>('inicio');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedAreaForContact, setSelectedAreaForContact] = useState<string | undefined>(undefined);
  const [contactProfile, setContactProfile] = useState<'consulting' | 'affiliate'>('consulting');

  // Sincronizar URL hash con la pestaña activa
  useEffect(() => {
    const syncHashWithTab = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#identidad' || hash === '#identidad-corporativa') {
        setActiveTab('identidad');
      } else if (hash === '#areas-consultoria' || hash === '#consultoria') {
        setActiveTab('consultoria');
      } else if (hash === '#ecosistema-crm' || hash === '#crm') {
        setActiveTab('crm');
      } else if (hash === '#afiliados' || hash === '#modelo-afiliados') {
        setActiveTab('afiliados');
      } else if (hash === '#contacto') {
        setActiveTab('contacto');
      } else if (hash === '#inicio') {
        setActiveTab('inicio');
      }
    };

    syncHashWithTab();
    window.addEventListener('hashchange', syncHashWithTab);
    return () => window.removeEventListener('hashchange', syncHashWithTab);
  }, []);

  const handleSelectTab = (tabId: NavTabId) => {
    setActiveTab(tabId);
    const match = NAV_LINKS.find((l) => l.id === tabId);
    if (match) {
      window.history.pushState(null, '', match.hash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleNavigateToContact = (areaId?: string, profile: 'consulting' | 'affiliate' = 'consulting') => {
    setSelectedAreaForContact(areaId);
    setContactProfile(profile);
    handleSelectTab('contacto');
  };

  const handleExploreServices = () => {
    handleSelectTab('consultoria');
  };

  const handleExploreCrm = () => {
    handleSelectTab('crm');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070E22] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Fixed Glassmorphism Navbar con pestañas interactivas */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenLoginModal={handleOpenLoginModal}
        onNavigateToContact={handleNavigateToContact}
      />

      {/* Main Content por Pestañas */}
      <main className="flex-grow">
        {/* 1. Inicio / Hero */}
        {activeTab === 'inicio' && (
          <Hero
            onExploreServices={handleExploreServices}
            onExploreCrm={handleExploreCrm}
            onOpenLoginModal={handleOpenLoginModal}
          />
        )}

        {/* 2. Identidad Corporativa */}
        {activeTab === 'identidad' && (
          <div className="pt-16 sm:pt-20">
            <CorporateIdentity
              onExploreServices={handleExploreServices}
              onNavigateToContact={() => handleNavigateToContact(undefined, 'consulting')}
            />
          </div>
        )}

        {/* 3. 7 Áreas de Consultoría */}
        {activeTab === 'consultoria' && (
          <div className="pt-16 sm:pt-20">
            <ConsultingServices
              onSelectService={(areaId) => handleNavigateToContact(areaId, 'consulting')}
            />
          </div>
        )}

        {/* 4. Ecosistema CRM con Cinta Bursátil Adherida sin espacio a la barra */}
        {activeTab === 'crm' && (
          <div className="pt-[54px] sm:pt-[58px] md:pt-[64px]">
            <CrmSection
              onOpenLoginModal={handleOpenLoginModal}
              onRequestAffiliation={() => handleNavigateToContact(undefined, 'affiliate')}
            />
          </div>
        )}

        {/* 5. Modelo de Afiliados */}
        {activeTab === 'afiliados' && (
          <div className="pt-16 sm:pt-20">
            <HowItWorks
              onStartWorkflow={() => handleNavigateToContact(undefined, 'affiliate')}
            />
          </div>
        )}

        {/* 6. Contacto y Diagnóstico */}
        {activeTab === 'contacto' && (
          <div className="pt-16 sm:pt-20">
            <ContactSection
              selectedAreaFromParent={selectedAreaForContact}
              defaultProfile={contactProfile}
            />
          </div>
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenLoginModal={handleOpenLoginModal}
        onSelectService={(areaId) => handleNavigateToContact(areaId, 'consulting')}
        onSelectTab={handleSelectTab}
      />

      {/* Interactive CRM Modal */}
      <CrmLoginModal
        isOpen={loginModalOpen}
        onClose={handleCloseLoginModal}
      />
    </div>
  );
}
