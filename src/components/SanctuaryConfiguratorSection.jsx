import React, { useState } from 'react';
import { 
  Sliders, Shield, Sparkles, Plus, Check, 
  FileDown, Download, Award, ChevronRight, Eye
} from 'lucide-react';

export const SanctuaryConfiguratorSection = ({ onOpenTourModal }) => {
  const [selectedEstateIndex, setSelectedEstateIndex] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState({
    wineVault: true,
    carTurntable: true,
    panicRoom: false,
    spaWellness: true,
    helipadLift: false,
  });
  const [dossierDownloaded, setDossierDownloaded] = useState(false);

  const estates = [
    {
      id: 'solaria-sanctuary',
      title: 'Solaria Mediterranean Estate',
      location: 'Capri Coastal Promontory',
      basePrice: 31800000,
      baseSqft: 14200,
      beds: 7,
      baths: 9,
    },
    {
      id: 'villa-horizon',
      title: 'Villa Horizon Cliffside',
      location: 'Positano Cliffs, Amalfi Coast',
      basePrice: 24500000,
      baseSqft: 11400,
      beds: 6,
      baths: 8,
    },
    {
      id: 'palazzo-di-mare',
      title: 'Palazzo Di Mare',
      location: 'Faraglioni Heights, Capri',
      basePrice: 42500000,
      baseSqft: 16800,
      beds: 8,
      baths: 10,
    },
  ];

  const modules = [
    {
      key: 'wineVault',
      title: 'Subterranean Sommelier Wine Vault',
      cost: 1250000,
      sqft: 650,
      tag: 'Epicurean Reserve',
      desc: '2,500-bottle glass vault, dual climate 12°C/16°C zones, automated Argon preservation, and Sommelier marble tasting salon.',
    },
    {
      key: 'carTurntable',
      title: 'Glass Supercar Turntable & Gallery Elevator',
      cost: 2400000,
      sqft: 950,
      tag: 'Automotive Sculpture',
      desc: 'Hydraulic illuminated glass turntable lowering supercars from the motor court directly into the lower gallery lounge.',
    },
    {
      key: 'panicRoom',
      title: 'Biometric Class-5 Fortified Sanctuary',
      cost: 1850000,
      sqft: 500,
      tag: 'Defense Grade',
      desc: 'Independent NBC air-scrubbing filtration, dedicated satellite communication, ballistic Kevlar wall lining, and biometric iris entry.',
    },
    {
      key: 'spaWellness',
      title: 'Alpine Cryotherapy & Thermal Hammam Spa',
      cost: 1400000,
      sqft: 800,
      tag: 'Regenerative Longevity',
      desc: 'Multi-person -110°C whole-body cryotherapy chamber, eucalyptus-infused Roman steam room, and illuminated Himalayan salt inhalation wall.',
    },
    {
      key: 'helipadLift',
      title: 'Carbon-Fiber Helipad & Private Sea Lift',
      cost: 2950000,
      sqft: 1200,
      tag: 'Maritime Mobility',
      desc: 'Reinforced 6.8T rotary helipad deck paired with high-speed glass cliff elevator descending directly to the private deep-water yacht dock.',
    },
  ];

  const activeEstate = estates[selectedEstateIndex];

  const toggleAddon = (key) => {
    setSelectedAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateAddonsCost = () => {
    return modules.reduce((total, m) => {
      return selectedAddons[m.key] ? total + m.cost : total;
    }, 0);
  };

  const calculateAddonsSqft = () => {
    return modules.reduce((total, m) => {
      return selectedAddons[m.key] ? total + m.sqft : total;
    }, 0);
  };

  const totalCost = activeEstate.basePrice + calculateAddonsCost();
  const totalSqft = activeEstate.baseSqft + calculateAddonsSqft();
  const activeCount = Object.values(selectedAddons).filter(Boolean).length;

  const handleDownloadDossier = () => {
    setDossierDownloaded(true);
    setTimeout(() => setDossierDownloaded(false), 4500);
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section
      id="configurator"
      style={{
        padding: '8rem 0',
        backgroundColor: '#070a10',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(229, 176, 131, 0.08)',
              border: '1px solid rgba(229, 176, 131, 0.25)',
              color: 'var(--color-gold-300)',
              fontSize: '0.74rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            <Sliders size={14} /> Bespoke Tailoring Atelier
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4vw, 3.8rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 300,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '1.2rem',
            }}
          >
            Bespoke Sanctuary Specification Configurator
          </h2>

          <p
            style={{
              maxWidth: '750px',
              margin: '0 auto',
              fontSize: '1.02rem',
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: 1.7,
            }}
          >
            Every Solaria residence can be commissioned with specialized subterranean vaults, automotive exhibition galleries, and private maritime elevator shafts.
          </p>
        </div>

        {/* 1. Base Estate Model Selection */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.5)', display: 'block', marginBottom: '0.8rem', textAlign: 'center' }}>
            Select Base Architectural Residence
          </span>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {estates.map((est, idx) => {
              const isSelected = selectedEstateIndex === idx;
              return (
                <div
                  key={est.id}
                  onClick={() => setSelectedEstateIndex(idx)}
                  style={{
                    padding: '1.4rem',
                    borderRadius: '16px',
                    backgroundColor: isSelected ? 'rgba(229, 176, 131, 0.12)' : 'rgba(18, 25, 40, 0.5)',
                    border: isSelected ? '1px solid #e5b083' : '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 600, margin: 0 }}>
                      {est.title}
                    </h4>
                    {isSelected && (
                      <span style={{ color: '#e5b083', fontSize: '0.75rem', fontWeight: 700 }}>Selected</span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', marginBottom: '0.8rem' }}>
                    {est.location}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--color-gold-300)', fontWeight: 600 }}>{formatCurrency(est.basePrice)}</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{est.baseSqft.toLocaleString()} sq ft</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive Modules Grid & Summary Dashboard */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Custom Luxury Modules */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.5)' }}>
              Curated Architectural Enhancements
            </span>

            {modules.map((m) => {
              const isChecked = selectedAddons[m.key];
              return (
                <div
                  key={m.key}
                  onClick={() => toggleAddon(m.key)}
                  style={{
                    padding: '1.4rem',
                    borderRadius: '16px',
                    backgroundColor: isChecked ? 'rgba(229, 176, 131, 0.08)' : 'rgba(18, 25, 40, 0.65)',
                    border: isChecked ? '1px solid rgba(229, 176, 131, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <div 
                    style={{
                      marginTop: '2px',
                      width: '22px',
                      height: '22px',
                      borderRadius: '6px',
                      backgroundColor: isChecked ? '#e5b083' : 'rgba(255, 255, 255, 0.08)',
                      border: isChecked ? '1px solid #e5b083' : '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#090c13',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isChecked && <Check size={16} strokeWidth={3} />}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                      <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
                        {m.title}
                      </h4>
                      <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-gold-300)', fontFamily: 'var(--font-heading)' }}>
                        +{formatCurrency(m.cost)}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5, margin: '0 0 0.5rem 0' }}>
                      {m.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '0.8rem', fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.45)' }}>
                      <span>Space: +{m.sqft} sq ft</span>
                      <span>•</span>
                      <span style={{ color: 'var(--color-gold-400)' }}>{m.tag}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Real-Time Valuation Summary Dossier */}
          <div
            style={{
              padding: '2.4rem',
              borderRadius: '24px',
              backgroundColor: 'rgba(12, 17, 28, 0.95)',
              border: '1px solid rgba(229, 176, 131, 0.3)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
              position: 'sticky',
              top: '120px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold-300)', fontWeight: 600 }}>
                  Commission Specification
                </span>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontFamily: 'var(--font-heading)', margin: '0.2rem 0 0 0' }}>
                  {activeEstate.title}
                </h3>
              </div>
              <span style={{ fontSize: '0.74rem', color: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.1)', padding: '0.3rem 0.7rem', borderRadius: '9999px' }}>
                {activeCount} Modules Active
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                <span>Base Residence Valuation</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{formatCurrency(activeEstate.basePrice)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                <span>Tailored Architectural Modules</span>
                <span style={{ color: 'var(--color-gold-300)', fontWeight: 600 }}>+{formatCurrency(calculateAddonsCost())}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                <span>Total Finished Living Area</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{totalSqft.toLocaleString()} sq ft</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                <span>Estimated Architectural Delivery</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>Q2 2026 Turnkey Ready</span>
              </div>
            </div>

            <div style={{ padding: '1.4rem', borderRadius: '16px', backgroundColor: 'rgba(229, 176, 131, 0.08)', border: '1px solid rgba(229, 176, 131, 0.3)', marginBottom: '1.8rem' }}>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.5)', display: 'block', marginBottom: '0.2rem' }}>
                Total Commission Estimate
              </span>
              <div style={{ fontSize: '2.1rem', fontWeight: 700, color: '#e5b083', fontFamily: 'var(--font-heading)' }}>
                {formatCurrency(totalCost)}
              </div>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.55)' }}>
                Includes master architect oversight, Swiss escrow warranty & structural guarantees.
              </span>
            </div>

            <button
              onClick={handleDownloadDossier}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #f5d4b7 0%, #e5b083 50%, #d49561 100%)',
                color: '#090c13',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                boxShadow: '0 10px 30px rgba(229, 176, 131, 0.35)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <FileDown size={17} /> Generate Confidential Spec Docket
            </button>

            {dossierDownloaded && (
              <div style={{ marginTop: '1rem', padding: '0.8rem', borderRadius: '12px', backgroundColor: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.3)', color: '#4ade80', fontSize: '0.78rem', textAlign: 'center' }}>
                ✓ Confidential Architectural Docket SOL-SPEC-{Math.floor(100000 + Math.random() * 900000)} generated. Private Client Office has received your tailored configuration.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SanctuaryConfiguratorSection;
