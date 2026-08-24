import React from 'react';
import { ShieldCheck, Anchor, Sparkles } from 'lucide-react';

export const StorySection = () => {
  const stats = [
    { label: 'Private Cliffside Estates', value: '14', detail: 'Curated architectural marvels' },
    { label: 'Unobstructed Sea View', value: '360°', detail: 'Elevated 120m above sea level' },
    { label: 'Private Marina Berths', value: '28', detail: 'Superyacht capacity up to 75m' },
    { label: 'Private Sanctuaries', value: '100%', detail: 'Gated enclave with 24/7 security' },
  ];

  return (
    <section
      id="story"
      style={{
        padding: '8rem 0',
        backgroundColor: '#090c13',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(226, 168, 118, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Narrative Column */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-gold-400)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={14} />
              The Architectural Vision
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)',
                lineHeight: 1.15,
                fontWeight: 300,
                color: '#ffffff',
                marginBottom: '1.8rem',
              }}
            >
              Carved Into Mediterranean Cliffs, Designed for Eternity.
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.72)',
                marginBottom: '1.5rem',
              }}
            >
              Solaria Estates represents the pinnacle of private coastal luxury. Situated high above turquoise waters on pristine limestone cliffs, each residence harmonizes organic stone, sweeping arched glass, and terraced infinity cascades.
            </p>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.55)',
                marginBottom: '2.5rem',
              }}
            >
              Masterfully sculpted by world-renowned architects, every angle is crafted to capture the shifting golden lights of dusk while preserving absolute privacy and seclusion.
            </p>

            {/* Feature Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--color-gold-400)', padding: '0.4rem', borderRadius: '8px', background: 'rgba(226, 168, 118, 0.1)' }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Private Security</h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Biometric enclave gate & 24/7 detail</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--color-gold-400)', padding: '0.4rem', borderRadius: '8px', background: 'rgba(226, 168, 118, 0.1)' }}>
                  <Anchor size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Seaside Berth</h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Deep-water moorings & private elevator</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Visual Card */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              padding: '2.5rem',
              borderRadius: '24px',
              backgroundColor: 'rgba(18, 25, 40, 0.45)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            }}
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                }}
              >
                <div
                  style={{
                    fontSize: '2.6rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-gold-300)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: '#ffffff',
                    fontWeight: 600,
                    marginBottom: '0.25rem',
                  }}
                >
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.45)' }}>
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
