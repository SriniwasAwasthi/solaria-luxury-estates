import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StorySection } from './components/StorySection';
import { EstatesSection } from './components/EstatesSection';
import { ViewsSection } from './components/ViewsSection';
import { AviationMaritimeSection } from './components/AviationMaritimeSection';
import { HauteCraftsmanshipSection } from './components/HauteCraftsmanshipSection';
import { SanctuaryConfiguratorSection } from './components/SanctuaryConfiguratorSection';
import { SovereignAdvisorySection } from './components/SovereignAdvisorySection';
import { LifestyleSection } from './components/LifestyleSection';
import { ConciergePrivilegesSection } from './components/ConciergePrivilegesSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { TourModal } from './components/TourModal';
import { VillaWalkthroughModal } from './components/VillaWalkthroughModal';
import { VideoModal } from './components/VideoModal';
import { startBackgroundAssetPreload } from './utils/preloadAssets';

export function App() {
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [selectedEstateForTour, setSelectedEstateForTour] = useState(null);
  const [simulationEstate, setSimulationEstate] = useState(null);
  const [walkthroughModalOpen, setWalkthroughModalOpen] = useState(false);
  const [selectedEstateForWalkthrough, setSelectedEstateForWalkthrough] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    startBackgroundAssetPreload();
  }, []);

  const handleOpenTour = (estate = null) => {
    setSelectedEstateForTour(estate);
    setTourModalOpen(true);
  };

  const handleSelectForSimulation = (estate) => {
    setSimulationEstate(estate);
  };

  const handleOpenWalkthrough = (estate = null) => {
    setSelectedEstateForWalkthrough(estate);
    setWalkthroughModalOpen(true);
  };

  return (
    <div style={{ backgroundColor: '#090c13', minHeight: '100vh', color: '#ffffff' }}>
      <Header 
        onOpenTourModal={() => handleOpenTour()} 
        onOpenVideoModal={() => setVideoModalOpen(true)}
      />
      
      <main>
        <HeroSection _onOpenTourModal={() => handleOpenTour()} />
        <AboutSection onOpenTourModal={() => handleOpenTour()} />
        <StorySection />
        <EstatesSection
          onScheduleTour={(estate) => handleOpenTour(estate)}
          onSelectEstateForSimulation={handleSelectForSimulation}
          onOpenWalkthroughModal={handleOpenWalkthrough}
        />
        <ViewsSection 
          initialSelectedEstate={simulationEstate}
          onOpenWalkthroughModal={handleOpenWalkthrough}
        />
        {/* Section A: Private Aviation & Superyacht Maritime Berth Matrix */}
        <AviationMaritimeSection onOpenTourModal={() => handleOpenTour()} />
        
        {/* Section C: Haute Craftsmanship & Material Provenance Atelier */}
        <HauteCraftsmanshipSection />

        {/* Section D: Bespoke Sanctuary Specification Configurator */}
        <SanctuaryConfiguratorSection onOpenTourModal={() => handleOpenTour()} />

        {/* Section B: Sovereign Wealth, Tax & Cross-Border Advisory Suite */}
        <SovereignAdvisorySection onOpenTourModal={() => handleOpenTour()} />

        <LifestyleSection />

        {/* Section E: Curated Concierge Privileges: Club Solaria */}
        <ConciergePrivilegesSection onOpenTourModal={() => handleOpenTour()} />

        <InquirySection onOpenTourModal={() => handleOpenTour()} />
      </main>

      <Footer />

      <TourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        defaultEstate={selectedEstateForTour}
      />

      <VillaWalkthroughModal
        isOpen={walkthroughModalOpen}
        onClose={() => setWalkthroughModalOpen(false)}
        initialEstate={selectedEstateForWalkthrough}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
}

export default App;
