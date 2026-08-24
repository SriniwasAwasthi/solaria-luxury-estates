import React, { useState } from 'react';
import { X, Bed, Bath, Maximize2, CheckCircle2, ArrowRight, Eye, MapPin } from 'lucide-react';

export const EstateModal = ({ estate, onClose, onScheduleTour, onSelectEstateForSimulation, onOpenWalkthroughModal }) => {
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'floorplan'

  if (!estate) return null;

  const handleLaunchSimulation = () => {
    onClose();
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
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(9, 12, 19, 0.85)',
        backdropFilter: 'blur(20px)',
        animation: 'fadeIn 0.3s ease forwards',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1020px',
          maxHeight: '90vh',
          backgroundColor: '#0d131f',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '24px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: '#ffffff',
            padding: '0.6rem',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'background-color 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)')}
        >
          <X size={20} />
        </button>

        {/* Modal Body */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', flex: 1, overflowY: 'auto' }}>
          {/* Visual Showcase */}
          <div style={{ position: 'relative', minHeight: '380px', backgroundColor: '#05070c' }}>
            {activeTab === 'gallery' ? (
              <img
                src={estate.image}
                alt={estate.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  padding: '3rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'radial-gradient(circle, #162035 0%, #080c14 100%)',
                  textAlign: 'center',
                }}
              >
                <div style={{ border: '2px dashed var(--color-gold-400)', padding: '2rem', borderRadius: '16px', maxWidth: '320px' }}>
                  <Maximize2 size={40} style={{ color: 'var(--color-gold-400)', marginBottom: '1rem' }} />
                  <h4 style={{ color: '#ffffff', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>Interactive 3D Blueprint</h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                    {estate.elevation} • {estate.orientation} with infinity terrace, master suites & private dock pathway.
                  </p>
                </div>
              </div>
            )}

            {/* Toggle Tabs Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                display: 'flex',
                gap: '0.5rem',
                backgroundColor: 'rgba(9, 12, 19, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '0.35rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <button
                onClick={() => setActiveTab('gallery')}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  color: activeTab === 'gallery' ? '#000000' : '#ffffff',
                  backgroundColor: activeTab === 'gallery' ? '#ffffff' : 'transparent',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                Exterior View
              </button>
              <button
                onClick={() => setActiveTab('floorplan')}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  color: activeTab === 'floorplan' ? '#000000' : '#ffffff',
                  backgroundColor: activeTab === 'floorplan' ? '#ffffff' : 'transparent',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                Architectural Plan
              </button>
            </div>
          </div>

          {/* Details Column */}
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-gold-400)', textTransform: 'uppercase' }}>
                  {estate.category}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                  <MapPin size={13} style={{ color: 'var(--color-gold-300)' }} /> {estate.location}
                </span>
              </div>

              <h3 style={{ fontSize: '2rem', margin: '0.4rem 0 1rem 0', fontWeight: 300, color: '#ffffff', lineHeight: 1.2 }}>
                {estate.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {estate.description}
              </p>

              {/* Key Specs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  marginBottom: '1.5rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-300)', fontSize: '0.8rem', marginBottom: '0.2rem' }}>
                    <Bed size={14} /> Bedrooms
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff' }}>{estate.specs.beds} En-Suites</div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-300)', fontSize: '0.8rem', marginBottom: '0.2rem' }}>
                    <Bath size={14} /> Baths
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff' }}>{estate.specs.baths} Marble</div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-300)', fontSize: '0.8rem', marginBottom: '0.2rem' }}>
                    <Maximize2 size={14} /> Living Area
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff' }}>{estate.specs.sqft} sq ft</div>
                </div>
              </div>

              {/* Unique Features */}
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ffffff', marginBottom: '0.8rem', fontFamily: 'var(--font-sans)' }}>
                Bespoke Amenities Included:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {estate.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)' }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--color-gold-400)' }} />
                    {feat}
                  </div>
                ))}
              </div>

              {/* Simulation Quick Launch */}
              <button
                onClick={handleLaunchSimulation}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(18, 25, 40, 0.8)',
                  border: '1px solid rgba(229, 176, 131, 0.4)',
                  color: 'var(--color-gold-300)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  marginBottom: '1rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(229, 176, 131, 0.15)';
                  e.currentTarget.style.borderColor = 'var(--color-gold-300)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(18, 25, 40, 0.8)';
                  e.currentTarget.style.borderColor = 'rgba(229, 176, 131, 0.4)';
                }}
              >
                <Eye size={16} /> Launch 24H Interactive Simulation For This Villa
              </button>
            </div>

            {/* Modal Bottom Action */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Offered At</div>
                <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold-300)' }}>{estate.price}</div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onScheduleTour(estate);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: '#ffffff',
                  color: '#090c13',
                  padding: '0.8rem 1.6rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                Inquire & Book Tour <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
