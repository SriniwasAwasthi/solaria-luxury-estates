import React, { useState } from 'react';
import { 
  Sparkles, Layers, ShieldCheck, Eye, Compass, 
  CheckCircle2, Hammer, MapPin, Feather
} from 'lucide-react';

export const HauteCraftsmanshipSection = () => {
  const [activeMaterial, setActiveMaterial] = useState(0);

  const materials = [
    {
      id: 'marble',
      name: 'Calacatta Borghini Imperial',
      category: 'Rare Natural Stone',
      quarry: 'Cava Borghini No. 31, Apuan Alps, Carrara, Italy',
      age: '190 Million Years Old',
      colorTone: 'Luminous milky-white calcite with honey-amber and graphite veins',
      density: '2,710 kg/m³ (Zero Porosity Resin-Sealed)',
      artisan: 'Studio Marmi Fratelli Rossi (Carrara, Est. 1884)',
      application: 'Grand double-height foyer staircases, bookmatched master bathroom monolith tubs, and chef waterfall islands.',
      story: 'Extracted from the fabled mountain seams where Michelangelo personally selected his statuary marble. Only 3% of quarried blocks qualify for the Borghini Imperial grade with warm golden veins.',
      techSpecs: [
        { label: 'Honed Finish', value: 'Diamond Velvet 400-Grit' },
        { label: 'Bookmatch Alignment', value: 'Symmetrical Continuous Vein' },
        { label: 'Acid & Salt Mist Resistance', value: 'Nano-Ceramic Sealant Impregnation' },
        { label: 'Acoustic Sound Reflection', value: 'Clean Classical Reverberation' },
      ],
      palette: ['#f8f6f0', '#dcd3c3', '#a8947a', '#443b35'],
      accentGradient: 'linear-gradient(135deg, #f8f6f0 0%, #dcd3c3 50%, #99836a 100%)',
    },
    {
      id: 'wood',
      name: 'Aged Tuscan Olive & Smoked Oak',
      category: 'Noble Millwork & Joinery',
      quarry: 'Val d’Orcia, Tuscany & Fontainebleau Ancient Reserves, France',
      age: '280-350 Year Old Heritage Timber',
      colorTone: 'Deep cognac, espresso, and warm amber with organic flame swirling',
      density: '880 kg/m³ (Hardwood Dense Core)',
      artisan: 'Bottega d’Arte Lignea (Florence, Master Joiners)',
      application: 'Concealed acoustic motorized pivot doors, climate-controlled sommelier humidors, and private dressing room suites.',
      story: 'Sourced exclusively from fallen centuries-old olive trees and sustainably managed French royal oak parcels. Air-cured for four seasons and burnished with cold-pressed Italian walnut oil.',
      techSpecs: [
        { label: 'Seasoning Method', value: '18-Month Slow Kiln & Natural Air' },
        { label: 'Surface Treatment', value: 'Hand-Waxed Organic Carnauba' },
        { label: 'Joinery Standard', value: 'Traditional Blind Dovetail & Hidden Tenons' },
        { label: 'Acoustic Damping', value: 'Class-A Sound Absorption STC 48' },
      ],
      palette: ['#3d2817', '#5a3d28', '#8b5a2b', '#c2925b'],
      accentGradient: 'linear-gradient(135deg, #8b5a2b 0%, #5a3d28 50%, #29180c 100%)',
    },
    {
      id: 'glass',
      name: 'Swiss Sky-Frame Minimalist Glass',
      category: 'Architectural Glazing',
      quarry: 'Frauenfeld Precision Atelier, Switzerland',
      age: 'Ultra-Modern Aerospace Grade',
      colorTone: '99.2% Optically Clear Ultra-White (Low Iron Oxide)',
      density: '12mm Triple Laminated Toughened Crystal',
      artisan: 'Sky-Frame Swiss Engineering Laboratories',
      application: 'Curved frameless 7-meter sliding wall panels that glide silently into cliff stone pockets, unifying salon and sea horizon.',
      story: 'Pioneered in the Swiss Alps to combine unobstructed crystalline sightlines with impenetrable resistance to gale-force Mediterranean sea winds and heavy salt-spray corrosion.',
      techSpecs: [
        { label: 'U-Value Insulation', value: '0.80 W/m²K (Arctic Alpine Rating)' },
        { label: 'Sound Attenuation', value: '44 dB Quiet Sanctuary Rating' },
        { label: 'Motorization', value: 'Silent Magnetic Induction Drive' },
        { label: 'UV Shielding', value: '98.5% Museum-Grade Art Protection' },
      ],
      palette: ['#cbe5f7', '#8bbcdb', '#487d9f', '#193348'],
      accentGradient: 'linear-gradient(135deg, #cbe5f7 0%, #76a8cb 50%, #1e3a52 100%)',
    },
    {
      id: 'travertine',
      name: 'Roman Classico Fluted Travertine & Bronze',
      category: 'Imperial Masonry & Patinated Metal',
      quarry: 'Barco Quarries, Tivoli, Rome, Italy',
      age: 'Thermal Spring Mineral Precipitate',
      colorTone: 'Porous warm ivory with golden striations and marine-bronze trim',
      density: '2,420 kg/m³ (Geothermal Sedimentary Limestone)',
      artisan: 'Antica Muratoria Romana & Fonderia Artistica',
      application: 'Exterior sun colonnades, infinity pool waterfall backdrops, and hand-cast architectural bronze lighting sconces.',
      story: 'The identical thermal stone that built the Roman Colosseum and St. Peter’s colonnade. Naturally cool under direct summer sun and impervious to marine salt air.',
      techSpecs: [
        { label: 'Stone Cut', value: 'Vein-Cut Fluted Vertical Relief' },
        { label: 'Bronze Composition', value: 'Marine CuSn8 Phosphor Bronze' },
        { label: 'Thermal Retention', value: 'Passive Solar Cooling Surface' },
        { label: 'Patina Aging', value: 'Living Antique Wax Surface' },
      ],
      palette: ['#e8ded1', '#cfbeaa', '#a88f76', '#5e4e3e'],
      accentGradient: 'linear-gradient(135deg, #e8ded1 0%, #b89f82 50%, #4a3c2c 100%)',
    },
  ];

  const current = materials[activeMaterial];

  return (
    <section
      id="craftsmanship"
      style={{
        padding: '8rem 0',
        backgroundColor: '#090c13',
        position: 'relative',
        borderTop: '1px solid rgba(229, 176, 131, 0.15)',
        overflow: 'hidden',
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
            <Hammer size={14} /> Material Provenance & Atelier
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
            Haute Craftsmanship & Material Provenance
          </h2>

          <p
            style={{
              maxWidth: '780px',
              margin: '0 auto',
              fontSize: '1.02rem',
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: 1.7,
            }}
          >
            Every surface across Solaria estates is a testament to European artisan heritage—from centuries-old Carrara marble quarries to Swiss aerospace glazing, sculpted with zero compromise.
          </p>
        </div>

        {/* Material Selection Swatches */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {materials.map((mat, idx) => {
            const isSelected = activeMaterial === idx;
            return (
              <div
                key={mat.id}
                onClick={() => setActiveMaterial(idx)}
                style={{
                  padding: '1.2rem 1.4rem',
                  borderRadius: '16px',
                  backgroundColor: isSelected ? 'rgba(229, 176, 131, 0.12)' : 'rgba(18, 25, 40, 0.6)',
                  border: isSelected ? '1px solid #e5b083' : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Visual color bar indicator */}
                <div 
                  style={{
                    height: '4px',
                    width: '100%',
                    background: mat.accentGradient,
                    borderRadius: '2px',
                    marginBottom: '0.8rem',
                  }}
                />
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.45)', display: 'block', marginBottom: '0.2rem' }}>
                  {mat.category}
                </span>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 0.4rem 0' }}>
                  {mat.name}
                </h4>
                <span style={{ fontSize: '0.74rem', color: isSelected ? 'var(--color-gold-300)' : 'rgba(255, 255, 255, 0.55)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={12} /> {mat.quarry.split(',')[1] || mat.quarry}
                </span>
              </div>
            );
          })}
        </div>

        {/* Selected Material Deep Atelier Card */}
        <div
          style={{
            backgroundColor: 'rgba(12, 17, 28, 0.95)',
            borderRadius: '28px',
            border: '1px solid rgba(229, 176, 131, 0.25)',
            padding: '2.8rem',
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.7)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Texture Spec & Story */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-300)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, marginBottom: '0.6rem' }}>
              <Sparkles size={14} /> Geological Authenticity Record
            </div>
            <h3 style={{ fontSize: '2.2rem', color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 400, marginBottom: '0.6rem' }}>
              {current.name}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-gold-400)', fontWeight: 500, marginBottom: '1.2rem' }}>
              Origin: {current.quarry} • Geological Age: {current.age}
            </p>
            <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {current.story}
            </p>

            <div style={{ padding: '1.1rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)', display: 'block', marginBottom: '0.3rem' }}>Master Atelier</span>
              <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 600 }}>{current.artisan}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)', marginTop: '0.4rem' }}>
                Application: {current.application}
              </div>
            </div>

            {/* Color Swatch Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.45)' }}>Tonal Palette:</span>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {current.palette.map((c, i) => (
                  <div key={i} style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: c, border: '1px solid rgba(255, 255, 255, 0.3)' }} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Engineering Matrix */}
          <div
            style={{
              backgroundColor: 'rgba(18, 25, 40, 0.65)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '2rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
              <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold-300)', fontWeight: 600 }}>
                Material Engineering Specifications
              </span>
              <span style={{ fontSize: '0.72rem', color: '#4ade80' }}>
                ISO 9001 Certified
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {current.techSpecs.map((spec, i) => (
                <div 
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                  }}
                >
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                    {spec.label}
                  </span>
                  <span style={{ fontSize: '0.86rem', color: '#ffffff', fontWeight: 600 }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              <CheckCircle2 size={15} color="#4ade80" />
              <span>Full geological provenance certificate accompanying deed of transfer.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HauteCraftsmanshipSection;
