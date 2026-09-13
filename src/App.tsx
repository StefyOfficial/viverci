import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroTeaser } from './components/HeroTeaser';
import { QuickEmailCTA } from './components/QuickEmailCTA';
import { WhyViverciExists } from './components/WhyViverciExists';
import { VisitingVsLiving } from './components/VisitingVsLiving';
import { HowViverciWorks } from './components/HowViverciWorks';
import { TenDimensions } from './components/TenDimensions';
import { CityProfiles } from './components/CityProfiles';
import { CityPreviewDemo } from './components/CityPreviewDemo';
import { FinalManifestoCTA } from './components/FinalManifestoCTA';
import { WaitingListSection } from './components/WaitingListSection';
import { DiscoveryModal } from './components/DiscoveryModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);

  const handleScrollToExplore = () => {
    const el = document.getElementById('scheda-esempio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#14382C] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#C08235]/20 selection:text-[#14382C]">
      {/* 1. Header Navigation */}
      <Navbar onOpenDiscovery={() => setIsDiscoveryOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroTeaser
          onOpenDiscovery={() => setIsDiscoveryOpen(true)}
          onScrollToExplore={handleScrollToExplore}
        />

        {/* Nuova CTA Email Semplice */}
        <QuickEmailCTA />

        {/* 3. Perché Viverci Esiste (I dati ISTAT & Transizione) */}
        <WhyViverciExists />

        {/* 4. Visitare non è viverci */}
        <VisitingVsLiving />

        {/* 5. Come funziona Viverci */}
        <HowViverciWorks />

        {/* 6. Le 10 dimensioni di Viverci */}
        <TenDimensions />

        {/* 7. Non una classifica: Un Profilo (Città Vetrina & Città Estrattiva) */}
        <CityProfiles />

        {/* 8. Esempio visivo di una città (Scheda Milano DEMO) */}
        <CityPreviewDemo />

        {/* 9. CTA Principale & Manifesto */}
        <FinalManifestoCTA
          onOpenDiscovery={() => setIsDiscoveryOpen(true)}
          onScrollToExplore={handleScrollToExplore}
        />

        {/* 10. Waiting list & Instagram @viverciofficial */}
        <WaitingListSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Modal di Orientamento "Trova la tua città" */}
      <DiscoveryModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
      />
    </div>
  );
}
