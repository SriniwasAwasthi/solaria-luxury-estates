import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { EstatesSection } from './components/EstatesSection';
import { LifestyleSection } from './components/LifestyleSection';
import { ViewsSection } from './components/ViewsSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { TourModal } from './components/TourModal';
import { VillaWalkthroughModal } from './components/VillaWalkthroughModal';
import { startBackgroundAssetPreload } from './utils/preloadAssets';

export function App() {
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [selectedEstateForTour, setSelectedEstateForTour] = useState(null);
  const [simulationEstate, setSimulationEstate] = useState(null);
  const [walkthroughModalOpen, setWalkthroughModalOpen] = useState(false);
  const [selectedEstateForWalkthrough, setSelectedEstateForWalkthrough] = useState(null);

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
      <Header onOpenTourModal={() => handleOpenTour()} />
      
      <main>
        <HeroSection _onOpenTourModal={() => handleOpenTour()} />
        <StorySection />
        <EstatesSection
          onScheduleTour={(estate) => handleOpenTour(estate)}
          onSelectEstateForSimulation={handleSelectForSimulation}
          onOpenWalkthroughModal={handleOpenWalkthrough}
        />
        <LifestyleSection />
        <ViewsSection 
          initialSelectedEstate={simulationEstate}
          onOpenWalkthroughModal={handleOpenWalkthrough}
        />
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
    </div>
  );
}

export default App;
