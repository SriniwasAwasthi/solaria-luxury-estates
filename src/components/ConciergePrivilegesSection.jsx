import React from 'react';
import { 
  Crown, Ship, Utensils, ShieldCheck, Palette, 
  Sparkles, Check, Phone, ArrowUpRight 
} from 'lucide-react';

export const ConciergePrivilegesSection = ({ onOpenTourModal }) => {
  const privileges = [
    {
      id: 'yachts',
      icon: <Ship size={24} />,
      title: 'Solaria Private Superyacht Fleet',
      badge: 'Maritime Access',
      tagline: 'Standby Charter Rights across Monaco, Capri & Saint-Tropez',
      description: 'Exclusive on-demand access to our co-owned fleet of 45m+ Sanlorenzo and Riva 110’ DolceVita yachts. Fully crewed with private captain, sommelier, and jet tender ready at your cliffside dock within 2 hours.',
      perks: ['Zero positioning fees in Mediterranean waters', 'Pre-stocked with your private cellar selections', 'VIP mooring reservations in Port Hercule & Portofino'],
    },
    {
      id: 'culinary',
      icon: <Utensils size={24} />,
      title: '3-Star Michelin Chef Roster on Demand',
      badge: 'Haute Gastronomy',
      tagline: 'Bespoke In-Residence Culinary Residencies',
      description: 'Our private kitchen atelier coordinates personal chefs trained at Osteria Francescana and Mirazur for private banquets, family breakfasts, or intimate cliffside sunset dinners with rare vintage wine pairings.',
      perks: ['Daily farm-to-table organic harvest from estate gardens', 'Rare vintage sourcing from Bordeaux & Piedmont auctions', 'Private sommelier masterclasses in your wine vault'],
    },
    {
      id: 'security',
      icon: <ShieldCheck size={24} />,
      title: 'Diplomatic & Executive Security Detail',
      badge: 'Sovereign Protection',
      tagline: 'Discreet Tier-1 Close Protection & Motorcade Escort',
      description: 'Headed by former Swiss federal protection officers and diplomatic security specialists. 24/7 covert estate perimeter surveillance, encrypted satellite coms, and armored convoy transfers to Nice or Cannes.',
      perks: ['Air-to-ground telemetry & radar integration', 'Secure maritime patrol boats guarding coastline perimeter', 'Biometric panic room monitoring with Swiss response center'],
    },
    {
      id: 'art',
      icon: <Palette size={24} />,
      title: 'Museum-Grade Art & Auction Advisory',
      badge: 'Cultural Acquisitions',
      tagline: 'Private Treaty Access with Sotheby’s & Christie’s',
      description: 'Direct relationships with European curators and major auction houses. Private salon previews, authentications, and tax-efficient bonded customs storage for modern masters, sculptures, and rare classical antiquities.',
      perks: ['Confidential private treaty acquisition brokerage', 'In-villa museum-standard lighting and climate engineering', 'Fine art insurance and provenance verification'],
    },
  ];

  return (
    <section
      id="concierge-privileges"
      style={{
        padding: '8rem 0',
        backgroundColor: '#090c13',
        position: 'relative',
        borderTop: '1px solid rgba(229, 176, 131, 0.15)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative luxury gradient background */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(229, 176, 131, 0.06) 0%, rgba(9, 12, 19, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

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
            <Crown size={14} /> Club Solaria Sovereign Privileges
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
            Curated Concierge Privileges: "Club Solaria"
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
            Ownership at Solaria extends far beyond your estate boundary. Every proprietor enjoys lifetime honorary induction into Club Solaria—a private ecosystem of sovereign mobility, culinary mastery, and discreet security.
          </p>
        </div>

        {/* Privileges Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3.5rem',
          }}
        >
          {privileges.map((p) => (
            <div
              key={p.id}
              style={{
                padding: '2.4rem',
                borderRadius: '24px',
                backgroundColor: 'rgba(18, 25, 40, 0.65)',
                border: '1px solid rgba(229, 176, 131, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(229, 176, 131, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-gold-300)',
                    }}
                  >
                    {p.icon}
                  </div>
                  <span 
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--color-gold-300)',
                      backgroundColor: 'rgba(229, 176, 131, 0.08)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(229, 176, 131, 0.2)',
                    }}
                  >
                    {p.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 500, marginBottom: '0.4rem' }}>
                  {p.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-400)', fontWeight: 500, marginBottom: '1rem' }}>
                  {p.tagline}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {p.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {p.perks.map((perk, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                      <Check size={14} color="#e5b083" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#4ade80' }}>
                <span>✓ Guaranteed VIP Priority</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>24/7 Concierge Hotline</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global VIP Access Banner */}
        <div
          style={{
            padding: '2rem 2.5rem',
            borderRadius: '20px',
            backgroundColor: 'rgba(12, 17, 28, 0.95)',
            border: '1px solid rgba(229, 176, 131, 0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.25rem', color: '#ffffff', fontFamily: 'var(--font-heading)', margin: '0 0 0.3rem 0' }}>
              Monaco Grand Prix & Cannes Film Festival Sovereign Paddock Pass
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)', margin: 0 }}>
              All estate owners receive permanent paddock and superyacht trackside invitations to the Monaco GP and Palais des Festivals gala screenings.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', display: 'block' }}>Direct VIP Desk</span>
              <span style={{ fontSize: '0.92rem', color: 'var(--color-gold-300)', fontWeight: 600 }}>+377 (98) 90-88-00</span>
            </div>
            {onOpenTourModal && (
              <button
                onClick={() => onOpenTourModal()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '9999px',
                  backgroundColor: '#e5b083',
                  color: '#090c13',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                Inquire Club Solaria <ArrowUpRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ConciergePrivilegesSection;
