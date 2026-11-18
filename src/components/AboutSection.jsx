import React, { useState } from 'react';
import { 
  History, Compass, ShieldCheck, Award, Users, 
  Sparkles, CheckCircle2, Globe2, Building2, Landmark, 
  ArrowUpRight, Feather
} from 'lucide-react';

export const AboutSection = ({ onOpenTourModal }) => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'territory',
      title: 'Territorial Seclusion & Sovereign Geography',
      tag: 'Sanctuary Geography',
      stat: '450 Hectares Protected',
      desc: 'Set along the dramatic sheer cliffs of the Mediterranean, the Solaria enclave encompasses 450 hectares of naturally fortified coastline. Bounded by pristine marine reserves and inaccessible from public land trails, access is restricted exclusively to private rotary aviation, deep-water tender landing, or the biometric gatehouse.',
      points: [
        'Natural 180m sea cliff perimeter serving as organic defensive ramparts',
        'Direct territorial waters integration with sovereign maritime anchoring rights',
        'Zero sightline intrusion from commercial shipping lanes or coastal roads',
      ],
    },
    {
      id: 'architecture',
      title: 'Biomimetic Cliff Engineering & Pritzker Lineage',
      tag: 'Architectural Genius',
      stat: '300+ Year Structural Lifespan',
      desc: 'Solaria residences are not merely constructed upon the cliffs—they are carved into the limestone bedrock itself. Engineered by disciples of Renzo Piano and Carlo Scarpa, each estate employs seismic post-tensioned steel anchors embedded 30 meters into solid rock, combined with frameless curved Swiss glazing that disappears into hidden pockets.',
      points: [
        'Hand-quarried Roman travertine and bookmatched Calacatta marble facades',
        'Passive geothermal temperature stabilization with sea-mist thermal cooling',
        'Cantilevered infinity pools floating 210 meters over the azure Mediterranean',
      ],
    },
    {
      id: 'autonomy',
      title: 'Microgrid Self-Sufficiency & Off-Grid Resilience',
      tag: 'Sovereign Infrastructure',
      stat: '100% Autonomous Energy & Water',
      desc: 'Built to function independently of municipal utilities during any European power interruption. Every estate is wired to a subterranean tri-redundant microgrid combining micro-hydro sea loops, disguised solar photovoltaic roof slates, and an industrial-grade subterranean seawater desalination plant producing 50,000 liters of pure drinking water daily.',
      points: [
        'Tri-redundant lithium-phosphate battery banks with 30-day off-grid standby',
        'Independent satellite optical broadband and Class-5 EMP shielding options',
        'Private organic olive groves, citrus orchards, and biodynamic herb terraces',
      ],
    },
    {
      id: 'longevity',
      title: 'Dynastic Wealth Governance & Fiduciary Custody',
      tag: 'Generational Legacy',
      stat: 'Multi-Century Title Deed',
      desc: 'Conceived in collaboration with leading Swiss private banks and Milanese fiscal barristers, Solaria offers a seamless gateway to Europe’s most advantageous neo-resident regimes (Italian Flat-Tax Art. 24-bis, Monegasque 0% personal tax, and Swiss Cantonal Forfait). All legal titles are held under strict Swiss fiduciary escrow.',
      points: [
        'Pre-vetted structures for Liechtenstein family foundations and Swiss trusts',
        'Direct bilateral tax treaty protection with 100+ sovereign nations',
        'Generational transfer mechanisms free of foreign inheritance levies',
      ],
    },
  ];

  const leadership = [
    {
      name: 'Matteo V. Bellini',
      role: 'Chief Architectural Principal',
      credential: 'M.Arch ETH Zurich • Former Lead Architect, Renzo Piano Building Workshop',
      bio: 'Over 28 years pioneering cantilevered marine engineering and organic stone architecture across the Amalfi Coast and French Riviera.',
    },
    {
      name: 'Helena von Stauffen',
      role: 'Director of Sovereign Wealth & Family Office Advisory',
      credential: 'Lic. Iur. Geneva • Former Managing Director, Pictet & Cie Wealth Management',
      bio: 'Advises Forbes 100 dynasties and sovereign principals on cross-border asset structuring, fiduciary holding entities, and fiscal relocation.',
    },
    {
      name: 'Commandant Pierre L’Estrange',
      role: 'Director of Maritime Security & Air Corridors',
      credential: 'Former Commander, French Commando Marine & Naval Air Wing',
      bio: 'Oversees 24/7 airspace monitoring, maritime counter-surveillance, rotary flight operations, and biometric close-protection protocols.',
    },
    {
      name: 'Contessa Giulia Falcone',
      role: 'Curator of Heritage Craftsmanship & Material Provenance',
      credential: 'PhD Art History Florence • Senior Advisory Fellow, Sotheby’s International Council',
      bio: 'Curates quarry selection in Carrara and Tivoli, authenticating historical provenance and overseeing master joiners in Florence.',
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '8rem 0',
        backgroundColor: '#070a10',
        position: 'relative',
        borderTop: '1px solid rgba(229, 176, 131, 0.15)',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(229, 176, 131, 0.06) 0%, rgba(7, 10, 16, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            <History size={14} /> The Solaria Heritage & Vision
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
            About Solaria: The Genesis of Sovereign Luxury
          </h2>

          <p
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.8,
            }}
          >
            Conceived across private salons in Geneva, Monaco, and Milan, Solaria Estates was established to answer a singular aspiration of the world’s most discerning families: <strong style={{ color: '#ffffff' }}>the creation of completely private, autonomous cliffside sanctuaries</strong> that unite monumental Mediterranean geology with eternal European craftsmanship.
          </p>
        </div>

        {/* 4 Pillars of Solaria Sovereignty */}
        <div style={{ marginBottom: '4.5rem' }}>
          {/* Pillar Selector Buttons */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {pillars.map((p, idx) => {
              const isSelected = activePillar === idx;
              return (
                <div
                  key={p.id}
                  onClick={() => setActivePillar(idx)}
                  style={{
                    padding: '1.2rem 1.4rem',
                    borderRadius: '16px',
                    backgroundColor: isSelected ? 'rgba(229, 176, 131, 0.12)' : 'rgba(18, 25, 40, 0.6)',
                    border: isSelected ? '1px solid #e5b083' : '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.45)', display: 'block', marginBottom: '0.3rem' }}>
                    Pillar 0{idx + 1}
                  </span>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 0.4rem 0' }}>
                    {p.tag}
                  </h4>
                  <span style={{ fontSize: '0.76rem', color: isSelected ? 'var(--color-gold-300)' : 'rgba(255, 255, 255, 0.55)' }}>
                    {p.stat}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Pillar Showcase Box */}
          <div
            style={{
              backgroundColor: 'rgba(12, 17, 28, 0.95)',
              borderRadius: '24px',
              border: '1px solid rgba(229, 176, 131, 0.25)',
              padding: '2.8rem',
              boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6)',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold-300)', fontWeight: 600 }}>
                  Foundational Benchmark 0{activePillar + 1}
                </span>
                <h3 style={{ fontSize: '1.8rem', color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 400, marginTop: '0.3rem' }}>
                  {pillars[activePillar].title}
                </h3>
              </div>
              <div style={{ backgroundColor: 'rgba(229, 176, 131, 0.1)', padding: '0.8rem 1.4rem', borderRadius: '12px', border: '1px solid rgba(229, 176, 131, 0.3)' }}>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.5)', display: 'block' }}>Verified Standard</span>
                <span style={{ fontSize: '1.15rem', color: '#e5b083', fontWeight: 700 }}>{pillars[activePillar].stat}</span>
              </div>
            </div>

            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.8, marginBottom: '2rem' }}>
              {pillars[activePillar].desc}
            </p>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
              }}
            >
              {pillars[activePillar].points.map((pt, i) => (
                <div 
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.8rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <CheckCircle2 size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Master Governance & Advisory Curators */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--color-gold-300)', fontWeight: 600 }}>
              Master Governance & Curation
            </span>
            <h3 style={{ fontSize: '2rem', color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 300, marginTop: '0.4rem' }}>
              The Solaria Advisory Board
            </h3>
            <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              Stewarded by master architects, private bankers, and sovereign security veterans dedicated to preserving absolute excellence.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(18, 25, 40, 0.55)',
                  border: '1px solid rgba(229, 176, 131, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(229, 176, 131, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e5b083', marginBottom: '1.2rem' }}>
                    <Users size={18} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 600, fontFamily: 'var(--font-heading)', margin: '0 0 0.3rem 0' }}>
                    {leader.name}
                  </h4>
                  <div style={{ fontSize: '0.76rem', color: 'var(--color-gold-300)', fontWeight: 600, marginBottom: '0.6rem' }}>
                    {leader.role}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.45)', marginBottom: '1rem', fontStyle: 'italic' }}>
                    {leader.credential}
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, margin: 0 }}>
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Hubs & Private Charter Callout */}
        <div 
          style={{
            marginTop: '4rem',
            padding: '2.5rem',
            borderRadius: '24px',
            backgroundColor: 'rgba(12, 17, 28, 0.95)',
            border: '1px solid rgba(229, 176, 131, 0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-300)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '0.4rem' }}>
              <Landmark size={14} /> Sovereign Escrow & Title Guarantee
            </div>
            <h4 style={{ fontSize: '1.4rem', color: '#ffffff', fontFamily: 'var(--font-heading)', margin: '0 0 0.4rem 0' }}>
              Discreet Protocol for Family Offices & Sovereign Buyers
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.65)', maxWidth: '650px', margin: 0 }}>
              All prospective resident acquisitions are conducted under strict non-disclosure covenants through our Swiss escrow partners in Zurich and Geneva.
            </p>
          </div>

          {onOpenTourModal && (
            <button
              onClick={() => onOpenTourModal()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.9rem 2rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #f5d4b7 0%, #e5b083 50%, #d49561 100%)',
                color: '#090c13',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(229, 176, 131, 0.35)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Request Executive Dossier <ArrowUpRight size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
