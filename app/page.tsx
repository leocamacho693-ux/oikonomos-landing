'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CorporateIdentity from '@/components/CorporateIdentity';
import ConsultingServices from '@/components/ConsultingServices';
import CrmSection from '@/components/CrmSection';
import HowItWorks from '@/components/HowItWorks';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CrmLoginModal from '@/components/CrmLoginModal';

export default function Home() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedAreaForContact, setSelectedAreaForContact] = useState<string | undefined>(undefined);
  const [contactProfile, setContactProfile] = useState<'consulting' | 'affiliate'>('consulting');

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleNavigateToContact = (areaId?: string, profile: 'consulting' | 'affiliate' = 'consulting') => {
    setSelectedAreaForContact(areaId);
    setContactProfile(profile);
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesElem = document.getElementById('areas-consultoria');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCrm = () => {
    const crmElem = document.getElementById('ecosistema-crm');
    if (crmElem) {
      crmElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Fixed Glassmorphism Navbar */}
      <Navbar
        onOpenLoginModal={handleOpenLoginModal}
        onNavigateToContact={handleNavigateToContact}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onExploreServices={handleExploreServices}
          onExploreCrm={handleExploreCrm}
          onOpenLoginModal={handleOpenLoginModal}
        />

        {/* 2. Identidad Corporativa & Propósito Institucional */}
        <CorporateIdentity
          onExploreServices={handleExploreServices}
          onNavigateToContact={() => handleNavigateToContact(undefined, 'consulting')}
        />

        {/* 3. 7 Consulting Areas Grid */}
        <ConsultingServices
          onSelectService={(areaId) => handleNavigateToContact(areaId, 'consulting')}
        />

        {/* 3. Deep Dark CRM Ecosystem Section with Interactive Mockup */}
        <CrmSection
          onOpenLoginModal={handleOpenLoginModal}
          onRequestAffiliation={() => handleNavigateToContact(undefined, 'affiliate')}
        />

        {/* 4. 3-Step Methodology Section */}
        <HowItWorks
          onStartWorkflow={() => handleNavigateToContact(undefined, 'consulting')}
        />

        {/* 5. Contact & Conversion Section */}
        <ContactSection
          selectedAreaFromParent={selectedAreaForContact}
          defaultProfile={contactProfile}
        />
      </main>

      {/* 6. Corporate Footer */}
      <Footer
        onOpenLoginModal={handleOpenLoginModal}
        onSelectService={(areaId) => handleNavigateToContact(areaId, 'consulting')}
      />

      {/* Interactive CRM Modal */}
      <CrmLoginModal
        isOpen={loginModalOpen}
        onClose={handleCloseLoginModal}
      />
    </div>
  );
}
