import React, { useState } from 'react';
import { Bed, Bath, Maximize2, ArrowUpRight, MapPin, Eye, Sparkles } from 'lucide-react';
import { EstateModal } from './EstateModal';
import { estatesData } from '../data/estates';

export const EstatesSection = ({ onScheduleTour, onSelectEstateForSimulation, onOpenWalkthroughModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeEstate, setActiveEstate] = useState(null);

  const categories = ['All', 'Cliffside Villas', 'Sky Penthouses'];

  const filteredEstates = selectedCategory === 'All'
    ? estatesData
    : estatesData.filter((e) => e.category === selectedCategory);

  const getCategoryCount = (cat) => {
    if (cat === 'All') return estatesData.length;
    return estatesData.filter((e) => e.category === cat).length;
  };

  const handleWalkthroughClick = (e, estate) => {
    e.stopPropagation();
    if (onOpenWalkthroughModal) {
      onOpenWalkthroughModal(estate);
    } else if (onSelectEstateForSimulation) {
      onSelectEstateForSimulation(estate);
      const viewsElement = document.getElementById('views');
      if (viewsElement) {
        viewsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="estates"
      style={{
        padding: '8rem 0',
        backgroundColor: '#070a10',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '4.5rem',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: 'var(--color-gold-400)',
              textTransform: 'uppercase',
              marginBottom: '0.8rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Sparkles size={14} /> The Collection
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
              lineHeight: 1.15,
              fontWeight: 300,
              color: '#ffffff',
              marginBottom: '1.2rem',
            }}
          >
            Exclusive Coastal Sanctuaries
          </h2>
          <p style={{ maxWidth: '640px', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
            Each residence is a bespoke masterpiece engineered to harmonize with the Mediterranean cliffside landscape. Explore our 9 signature estates.
          </p>

          {/* Filter Categories */}
          <div
            style={{
              display: 'inline-flex',
              gap: '0.6rem',
              marginTop: '2.5rem',
              backgroundColor: 'rgba(18, 25, 40, 0.7)',
              padding: '0.4rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.65rem 1.6rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  color: selectedCategory === cat ? '#090c13' : 'rgba(255, 255, 255, 0.75)',
                  backgroundColor: selectedCategory === cat ? '#ffffff' : 'transparent',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                {cat} ({getCategoryCount(cat)})
              </button>
            ))}
          </div>
        </div>

        {/* Estates Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {filteredEstates.map((estate) => (
            <div
              key={estate.id}
              onClick={() => setActiveEstate(estate)}
              style={{
                backgroundColor: 'rgba(15, 21, 35, 0.6)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(226, 168, 118, 0.45)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image Container with Zoom on Hover */}
              <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden' }}>
                <img
                  src={estate.image}
                  alt={estate.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* TOP-LEFT: Interactive Live Simulation Button */}
                <button
                  type="button"
                  onClick={(e) => handleWalkthroughClick(e, estate)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 10,
                    backgroundColor: 'rgba(9, 12, 19, 0.88)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid var(--color-gold-400)',
                    color: 'var(--color-gold-300)',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-gold-400)';
                    e.currentTarget.style.color = '#090c13';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(9, 12, 19, 0.88)';
                    e.currentTarget.style.color = 'var(--color-gold-300)';
                  }}
                >
                  <Sparkles size={12} /> ⚡ Live Simulation
                </button>

                {/* TOP-RIGHT: Price Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(9, 12, 19, 0.8)',
                    backdropFilter: 'blur(12px)',
                    color: 'var(--color-gold-300)',
                    padding: '0.45rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                  }}
                >
                  {estate.price}
                </div>

                {/* Live Simulation Quick Button */}
                <button
                  onClick={(e) => handleSimulateClick(e, estate)}
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(9, 12, 19, 0.85)',
                    backdropFilter: 'blur(10px)',
                    color: '#ffffff',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    border: '1px solid rgba(229, 176, 131, 0.35)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-gold-400)';
                    e.currentTarget.style.color = '#090c13';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(9, 12, 19, 0.85)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  <Eye size={13} /> Live Simulation
                </button>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold-400)' }}>
                      {estate.category}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                      <MapPin size={12} style={{ color: 'var(--color-gold-300)' }} /> {estate.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.6rem', color: '#ffffff', margin: '0.3rem 0 0.8rem 0', fontWeight: 300, lineHeight: 1.25 }}>
                    {estate.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '1.6rem' }}>
                    {estate.description}
                  </p>
                </div>

                {/* Specs Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.2rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Bed size={14} style={{ color: 'var(--color-gold-300)' }} /> {estate.specs.beds} Beds
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Bath size={14} style={{ color: 'var(--color-gold-300)' }} /> {estate.specs.baths} Baths
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Maximize2 size={14} style={{ color: 'var(--color-gold-300)' }} /> {estate.specs.sqft} sq ft
                    </span>
                  </div>

                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      transition: 'background-color 0.2s ease',
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Modal */}
      {activeEstate && (
        <EstateModal
          estate={activeEstate}
          onClose={() => setActiveEstate(null)}
          onScheduleTour={onScheduleTour}
          onSelectEstateForSimulation={onSelectEstateForSimulation}
          onOpenWalkthroughModal={onOpenWalkthroughModal}
        />
      )}
    </section>
  );
};
