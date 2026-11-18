import React, { useState } from 'react';
import { 
  Plane, Compass, Anchor, Navigation, Shield, Wind, 
  Clock, MapPin, Radio, ChevronRight, CheckCircle2, ArrowUpRight
} from 'lucide-react';

export const AviationMaritimeSection = ({ onOpenTourModal }) => {
  const [activeTab, setActiveTab] = useState('aviation'); // 'aviation' | 'maritime'
  const [selectedRoute, setSelectedRoute] = useState(0);

  const flightRoutes = [
    {
      id: 'nce',
      from: "Nice Côte d'Azur (NCE)",
      type: 'Executive Jet Terminal 3',
      transitTime: '12 min',
      distance: '18.4 NM',
      altitude: '1,500 ft ASL',
      corridor: 'Coastal Air Corridor Alpha-7',
      craft: 'Airbus ACH145 / AW109 Trekker',
      specs: 'Twin-engine, full VIP soundproofing, 6 passengers with luggage pod',
      status: 'Clearance On Demand',
      description: 'Direct VFR transfer from the private VIP apron at Nice Côte d’Azur to the private cliffside helipad at Solaria.',
    },
    {
      id: 'mcm',
      from: 'Monaco Heliport (MCM)',
      type: 'Fontvieille VIP Pad',
      transitTime: '8 min',
      distance: '11.2 NM',
      altitude: '1,200 ft ASL',
      corridor: 'Cap-d’Ail Maritime Line',
      craft: 'Bell 429 GlobalRanger',
      specs: 'Executive leather club seating, Bose A20 noise-cancelling suites',
      status: 'Active 24/7',
      description: 'Rapid hop connecting Monaco casino and yacht club directly to the estate sanctuary without highway congestion.',
    },
    {
      id: 'ceq',
      from: 'Cannes Mandelieu (CEQ)',
      type: 'Dedicated Business Aviation Runway',
      transitTime: '18 min',
      distance: '27.6 NM',
      altitude: '2,000 ft ASL',
      corridor: 'Golfe-Juan Vector',
      craft: 'Sikorsky S-76D VIP',
      specs: 'Dual pilot IFR certified, ultra-quiet cabin, customized Hermes interior',
      status: 'Slot Priority Reserved',
      description: 'Connecting European continental private jet arrivals with immediate rotary helicopter connection.',
    },
    {
      id: 'zrh',
      from: 'Zurich Kloten (ZRH)',
      type: 'Cat-III Long Range Jet Gate',
      transitTime: '52 min',
      distance: '240 NM',
      altitude: 'FL 340',
      corridor: 'Trans-Alpine Direct Bravo',
      craft: 'Bombardier Global 7500 / Gulfstream G700',
      specs: 'Four living zones, master bedroom, standing shower, Ku-band satellite Wi-Fi',
      status: 'Pre-Approved Flight Plan',
      description: 'Private heavy jet itinerary directly into Cannes or Nice with immediate helicopter tarmac-side pickup.',
    },
  ];

  const maritimeSpecs = [
    {
      label: 'Deep-Water Superyacht Anchorage',
      value: 'Up to 135m LOA',
      detail: 'Protected natural marine amphitheater with 18m natural sea-floor depth, zero swell resonance.',
    },
    {
      label: 'Private Hydraulic Tender Pontoon',
      value: 'Draft 4.8m Depth',
      detail: 'Accommodates Riva Dolceriva, Wajer 55, and limousine tenders with recessed LED landing lighting.',
    },
    {
      label: 'GPS Berth Coordinates',
      value: "43° 42' 18'' N, 7° 19' 44'' E",
      detail: 'Registered navigational landmark with 24/7 private VHF Channel 14 estate harbour master.',
    },
    {
      label: 'Security & Bunkering Services',
      value: 'Discreet In-Berth Shore Power',
      detail: 'Submerged 400V/63A marine shore power, filtered desalinated water supply, and underwater sonar perimeter.',
    },
  ];

  return (
    <section 
      id="aviation-maritime"
      style={{
        padding: '8rem 0',
        backgroundColor: '#090c13',
        position: 'relative',
        borderTop: '1px solid rgba(229, 176, 131, 0.15)',
        overflow: 'hidden',
      }}
    >
      {/* Background radial glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(229, 176, 131, 0.08) 0%, rgba(9, 12, 19, 0) 70%)',
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
            <Compass size={14} /> Private Transit & Maritime Sanctuary
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
            Aviation & Superyacht Maritime Berth Matrix
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
            Seamless international arrivals engineered for heads of state and global titans. Solaria provides registered cliffside helipads, direct air traffic clearance, and deep-water mega-yacht moorings.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div 
            style={{
              display: 'inline-flex',
              backgroundColor: 'rgba(18, 25, 40, 0.85)',
              padding: '0.35rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <button
              onClick={() => setActiveTab('aviation')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.65rem 1.6rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                transition: 'all 0.25s ease',
                backgroundColor: activeTab === 'aviation' ? '#e5b083' : 'transparent',
                color: activeTab === 'aviation' ? '#090c13' : 'rgba(255, 255, 255, 0.7)',
                boxShadow: activeTab === 'aviation' ? '0 4px 15px rgba(229, 176, 131, 0.35)' : 'none',
              }}
            >
              <Plane size={16} /> Rotary Aviation Corridor
            </button>
            <button
              onClick={() => setActiveTab('maritime')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.65rem 1.6rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                transition: 'all 0.25s ease',
                backgroundColor: activeTab === 'maritime' ? '#e5b083' : 'transparent',
                color: activeTab === 'maritime' ? '#090c13' : 'rgba(255, 255, 255, 0.7)',
                boxShadow: activeTab === 'maritime' ? '0 4px 15px rgba(229, 176, 131, 0.35)' : 'none',
              }}
            >
              <Anchor size={16} /> Deep-Water Berth & Yacht Marina
            </button>
          </div>
        </div>

        {/* Tab 1: Aviation Corridor */}
        {activeTab === 'aviation' && (
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch',
            }}
          >
            {/* Left Column: Interactive Flight Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div 
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginBottom: '0.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>Select International Hub Transit</span>
                <span style={{ color: '#4ade80', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Radio size={12} className="animate-pulse" /> Radar Active
                </span>
              </div>

              {flightRoutes.map((route, idx) => {
                const isSelected = selectedRoute === idx;
                return (
                  <div
                    key={route.id}
                    onClick={() => setSelectedRoute(idx)}
                    style={{
                      padding: '1.25rem 1.4rem',
                      borderRadius: '16px',
                      backgroundColor: isSelected ? 'rgba(229, 176, 131, 0.08)' : 'rgba(18, 25, 40, 0.55)',
                      border: isSelected 
                        ? '1px solid rgba(229, 176, 131, 0.5)' 
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600, margin: 0 }}>
                          {route.from}
                        </h4>
                        <span style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                          {route.type}
                        </span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-gold-300)', fontFamily: 'var(--font-heading)' }}>
                          {route.transitTime}
                        </div>
                        <span style={{ fontSize: '0.68rem', color: '#4ade80' }}>{route.status}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.2rem', marginTop: '0.75rem', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                      <span><Navigation size={12} style={{ display: 'inline', marginRight: '4px' }} /> {route.distance}</span>
                      <span><Wind size={12} style={{ display: 'inline', marginRight: '4px' }} /> {route.altitude}</span>
                      <span style={{ marginLeft: 'auto', color: 'var(--color-gold-400)' }}>
                        {route.corridor}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Route Cockpit Radar & Telemetry HUD */}
            <div
              style={{
                borderRadius: '24px',
                padding: '2rem',
                backgroundColor: 'rgba(12, 17, 28, 0.95)',
                border: '1px solid rgba(229, 176, 131, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
                position: 'relative',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4ade80', boxShadow: '0 0 10px #4ade80' }} />
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold-300)', fontWeight: 600 }}>
                      ICAO Direct Flight Authorization: LFMN / MCM / SOL-1
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                    Transponder 7000 VFR
                  </span>
                </div>

                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 400, fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                  {flightRoutes[selectedRoute].from} ➔ Solaria Sky Helipad
                </h3>
                
                <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {flightRoutes[selectedRoute].description}
                </p>

                {/* Telemetry Grid */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div style={{ padding: '0.9rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)', display: 'block', marginBottom: '0.2rem' }}>Designated Aircraft</span>
                    <span style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>{flightRoutes[selectedRoute].craft}</span>
                  </div>
                  <div style={{ padding: '0.9rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)', display: 'block', marginBottom: '0.2rem' }}>Air Time</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-gold-300)', fontWeight: 700 }}>{flightRoutes[selectedRoute].transitTime} Door-to-Door</span>
                  </div>
                  <div style={{ padding: '0.9rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)', display: 'block', marginBottom: '0.2rem' }}>Helipad Load Capacity</span>
                    <span style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>Up to 6.8 Metric Tons</span>
                  </div>
                  <div style={{ padding: '0.9rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)', display: 'block', marginBottom: '0.2rem' }}>Night Flight Certification</span>
                    <span style={{ fontSize: '0.88rem', color: '#4ade80', fontWeight: 600 }}>Omnidirectional NVG Helipad</span>
                  </div>
                </div>

                <div style={{ padding: '0.9rem', backgroundColor: 'rgba(229, 176, 131, 0.05)', borderRadius: '12px', border: '1px dashed rgba(229, 176, 131, 0.25)', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-gold-300)', fontWeight: 600, marginBottom: '0.2rem' }}>
                    Cabin Amenities:
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                    {flightRoutes[selectedRoute].specs}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {onOpenTourModal && (
                <button
                  onClick={() => onOpenTourModal()}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    width: '100%',
                    padding: '0.9rem',
                    borderRadius: '9999px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(229, 176, 131, 0.5)',
                    color: '#e5b083',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e5b083';
                    e.currentTarget.style.color = '#090c13';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#e5b083';
                  }}
                >
                  Request Flight Transfer Slot & VIP Clearance <ArrowUpRight size={15} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Maritime & Superyacht Marina */}
        {activeTab === 'maritime' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {maritimeSpecs.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(18, 25, 40, 0.65)',
                  border: '1px solid rgba(229, 176, 131, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(229, 176, 131, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-gold-300)',
                      marginBottom: '1.2rem',
                    }}
                  >
                    <Anchor size={20} />
                  </div>
                  <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.5)', display: 'block', marginBottom: '0.4rem' }}>
                    {item.label}
                  </span>
                  <div style={{ fontSize: '1.35rem', fontWeight: 600, color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '0.8rem' }}>
                    {item.value}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#4ade80' }}>
                  <CheckCircle2 size={14} /> Solaria Port Captaincy Verified
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default AviationMaritimeSection;
