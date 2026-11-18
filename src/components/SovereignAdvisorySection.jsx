import React, { useState } from 'react';
import { 
  Scale, Shield, Landmark, Globe, Check, 
  HelpCircle, FileText, ArrowRight, Lock, Award
} from 'lucide-react';

export const SovereignAdvisorySection = ({ onOpenTourModal }) => {
  const [activeRegime, setActiveRegime] = useState('italy');

  const regimes = {
    italy: {
      id: 'italy',
      jurisdiction: 'Italy (Art. 24-bis TUIR)',
      title: 'Flat-Tax Neo-Resident Regime',
      primaryStat: '€100k - €200k Fixed Annual Levy',
      summary: 'The premier global tax relocation mechanism in Europe, granting comprehensive tax immunity on worldwide earnings, foreign capital gains, and investment income.',
      highlights: [
        { label: 'Foreign-Sourced Income', val: 'Fully Exempt (Fixed €100k/€200k p.a.)' },
        { label: 'Foreign Inheritance & Gift Tax', val: '0% Exemption on non-Italian assets' },
        { label: 'Foreign Asset Monitoring (RW)', val: 'Full Waiver from reporting requirements' },
        { label: 'Family Member Extension', val: '€25,000 fixed per adult dependent' },
        { label: 'Guaranteed Duration', val: '15 Years binding statutory guarantee' },
        { label: 'Real Estate Acquisition', val: 'Zero restriction on sovereign land title' },
      ],
      legalCitation: 'Italian Legislative Decree no. 232/2016, Law no. 197/2022',
      advisoryNote: 'Optimal for entrepreneurs, international fund principals, and family offices holding multi-jurisdictional liquid portfolios and overseas operating entities.',
    },
    monaco: {
      id: 'monaco',
      jurisdiction: 'Principality of Monaco',
      title: 'Zero Personal Income Tax Sovereignty',
      primaryStat: '0.0% Personal Income & Capital Gains',
      summary: 'The gold standard of Mediterranean sovereign wealth preservation, characterized by political neutrality, sovereign security, and complete absence of personal income taxation.',
      highlights: [
        { label: 'Personal Income Tax', val: '0% (Excluding French citizens)' },
        { label: 'Capital Gains on Portfolios', val: '0% Worldwide' },
        { label: 'Direct Line Inheritance Tax', val: '0% for parents, spouse & children' },
        { label: 'Annual Wealth Tax (ISF)', val: 'None / Abolished' },
        { label: 'Banking Infrastructure', val: 'Tier-1 Private Fiduciary Banks' },
        { label: 'Residency Threshold', val: 'Local property title + bank deposit' },
      ],
      legalCitation: 'Ordonnance Souveraine no. 3.153 / Monegasque Civil Code',
      advisoryNote: 'Unmatched coastal prestige and proximity to Solaria estates, enabling dual-residence integration between Monaco social lifestyle and Capri/Amalfi sanctuaries.',
    },
    switzerland: {
      id: 'switzerland',
      jurisdiction: 'Swiss Confederation (Cantonal)',
      title: 'Lump-Sum Forfait Fiscal (LIFD Art. 14)',
      primaryStat: 'Expenditure-Based Assessment',
      summary: 'Tailored Swiss fiscal agreement negotiated directly with cantonal tax authorities, taxing actual global living expenditures rather than worldwide assets or revenue.',
      highlights: [
        { label: 'Tax Basis Computation', val: '7x Annual Rental Value / Expenses' },
        { label: 'Foreign Business Earnings', val: 'Shielded from standard progressive rates' },
        { label: 'Trust Recognition', val: 'Hague Trust Convention Full Accord' },
        { label: 'Currency Stability', val: 'Triple-A Swiss Franc Sovereign Vaults' },
        { label: 'Bilateral Treaties', val: '100+ Double Taxation Treaties (DTT)' },
        { label: 'Civil Stability', val: 'Centuries of uncompromised neutrality' },
      ],
      legalCitation: 'Federal Act on Direct Federal Taxation (DTA / LIFD Art. 14)',
      advisoryNote: 'Favored by multi-generational industrial dynasties seeking structured trust estates, gold storage, and alpine proximity.',
    },
  };

  const current = regimes[activeRegime];

  return (
    <section
      id="sovereign-advisory"
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
            <Landmark size={14} /> Global Tax & Fiduciary Structuring
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
            Sovereign Wealth & Cross-Border Advisory Suite
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
            Acquiring a signature estate at Solaria involves more than real property—it unlocks sophisticated European residency frameworks, capital protection, and institutional wealth governance.
          </p>
        </div>

        {/* Regime Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {Object.values(regimes).map((reg) => {
            const isActive = activeRegime === reg.id;
            return (
              <button
                key={reg.id}
                onClick={() => setActiveRegime(reg.id)}
                style={{
                  padding: '0.75rem 1.6rem',
                  borderRadius: '12px',
                  backgroundColor: isActive ? 'rgba(229, 176, 131, 0.15)' : 'rgba(18, 25, 40, 0.65)',
                  border: isActive ? '1px solid #e5b083' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <Scale size={16} color={isActive ? '#e5b083' : 'currentColor'} />
                {reg.jurisdiction}
              </button>
            );
          })}
        </div>

        {/* Detailed Comparison Card */}
        <div
          style={{
            backgroundColor: 'rgba(12, 17, 28, 0.85)',
            borderRadius: '24px',
            border: '1px solid rgba(229, 176, 131, 0.25)',
            padding: '2.5rem',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
            marginBottom: '3rem',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.8rem', marginBottom: '2rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold-300)', fontWeight: 600 }}>
                {current.jurisdiction}
              </span>
              <h3 style={{ fontSize: '1.9rem', color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 400, marginTop: '0.3rem', marginBottom: '0.5rem' }}>
                {current.title}
              </h3>
              <p style={{ maxWidth: '650px', fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, margin: 0 }}>
                {current.summary}
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(229, 176, 131, 0.08)', padding: '1.2rem 1.6rem', borderRadius: '16px', border: '1px solid rgba(229, 176, 131, 0.3)', textAlign: 'right' }}>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.5)', display: 'block', marginBottom: '0.3rem' }}>
                Principal Fiscal Advantage
              </span>
              <div style={{ fontSize: '1.45rem', fontWeight: 700, color: '#e5b083', fontFamily: 'var(--font-heading)' }}>
                {current.primaryStat}
              </div>
              <span style={{ fontSize: '0.68rem', color: '#4ade80' }}>Statutory Protection Certified</span>
            </div>
          </div>

          {/* Highlights Matrix */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.2rem',
              marginBottom: '2rem',
            }}
          >
            {current.highlights.map((h, i) => (
              <div 
                key={i}
                style={{
                  padding: '1.2rem',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Check size={14} color="#e5b083" />
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255, 255, 255, 0.55)' }}>
                    {h.label}
                  </span>
                </div>
                <div style={{ fontSize: '1.02rem', fontWeight: 600, color: '#ffffff', paddingLeft: '1.4rem' }}>
                  {h.val}
                </div>
              </div>
            ))}
          </div>

          {/* Advisory Legal Citation Box */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.2rem 1.6rem',
              borderRadius: '14px',
              backgroundColor: 'rgba(18, 25, 40, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.8rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              <FileText size={16} color="var(--color-gold-300)" />
              <span>Statutory Reference: <strong style={{ color: '#ffffff' }}>{current.legalCitation}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#4ade80' }}>
              <Lock size={14} />
              <span>Swiss Fiduciary Escrow & Title Deed Confidentiality</span>
            </div>
          </div>
        </div>

        {/* Global Advisory Hubs Footer */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.2rem',
            textAlign: 'center',
          }}
        >
          {[
            { city: 'Monaco', role: 'Sovereign Residency & Maritime Title', address: 'Boulevard des Moulins, Monte-Carlo' },
            { city: 'Zurich', role: 'Swiss Fiduciary & Escrow Custody', address: 'Bahnhofstrasse 12, 8001 Zurich' },
            { city: 'London Mayfair', role: 'Cross-Border Wealth Structuring', address: 'Grosvenor Square, London W1K' },
            { city: 'Milan', role: 'Italian Flat-Tax Special Counsel', address: 'Via Montenapoleone 8, 20121 Milano' },
          ].map((hub, idx) => (
            <div
              key={idx}
              style={{
                padding: '1.4rem',
                borderRadius: '16px',
                backgroundColor: 'rgba(18, 25, 40, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '0.2rem' }}>
                {hub.city}
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--color-gold-300)', fontWeight: 500, marginBottom: '0.4rem' }}>
                {hub.role}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.45)' }}>
                {hub.address}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SovereignAdvisorySection;
