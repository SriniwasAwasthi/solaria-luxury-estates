import React from 'react';
import { Anchor, Navigation, Wine, HeartPulse } from 'lucide-react';

export const LifestyleSection = () => {
  const amenities = [
    {
      icon: <Anchor size={24} />,
      title: 'Deep-Water Marina & Anchorage',
      description: 'Exclusive deep-water berths accommodating superyachts up to 75 meters with full captain concierge support.',
    },
    {
      icon: <HeartPulse size={24} />,
      title: 'Cliffside Hydrotherapy Spa',
      description: 'Subterranean saltwater infinity pools, Himalayan salt rooms, and private wellness therapists on call.',
    },
    {
      icon: <Navigation size={24} />,
      title: 'Private Helipad Access',
      description: 'Dedicated clifftop landing pad providing 12-minute transfers to Monaco, Cannes, and Nice International.',
    },
    {
      icon: <Wine size={24} />,
      title: 'Sommelier Vault & Private Chef',
      description: 'Curated 10,000-bottle subterranean wine cellar with on-demand Michelin-starred private culinary service.',
    },
  ];

  return (
    <section
      id="lifestyle"
      style={{
        padding: '8rem 0',
        backgroundColor: '#090c13',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: 'center',
            marginBottom: '5rem',
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
              display: 'inline-block',
            }}
          >
            Unrivaled Experience
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              lineHeight: 1.15,
              fontWeight: 300,
              color: '#ffffff',
            }}
          >
            The Solaria Privileges
          </h2>
        </div>

        {/* Amenities Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {amenities.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '2.5rem 2rem',
                borderRadius: '20px',
                backgroundColor: 'rgba(16, 22, 34, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(24, 33, 52, 0.7)';
                e.currentTarget.style.borderColor = 'rgba(226, 168, 118, 0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(16, 22, 34, 0.5)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(226, 168, 118, 0.1)',
                  color: 'var(--color-gold-300)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: 300 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
