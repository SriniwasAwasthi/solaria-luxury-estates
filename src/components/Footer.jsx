import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Shield, ChevronUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#05070c',
        padding: '5rem 0 3rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <BrandLogo />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.6, maxWidth: '280px' }}>
              An enclave of unprecedented coastal luxury where Mediterranean architecture meets the infinite sea.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#ffffff', marginBottom: '1.2rem', fontFamily: 'var(--font-sans)' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Story', 'Estates', 'Lifestyle', 'Views', 'Inquire'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Privacy */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#ffffff', marginBottom: '1.2rem', fontFamily: 'var(--font-sans)' }}>
              Governance & Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              <li>Private Client Confidentiality</li>
              <li>Terms of Sanctuary Residency</li>
              <li>Architectural Master Plan</li>
              <li>Environmental Protection Charter</li>
            </ul>
          </div>

          {/* Newsletter / Private Dispatch */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#ffffff', marginBottom: '1.2rem', fontFamily: 'var(--font-sans)' }}>
              Private Dispatch
            </h4>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '1rem' }}>
              Subscribe to receive confidential notices regarding off-market estate releases.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="vip@domain.com"
                style={{
                  flex: 1,
                  padding: '0.6rem 0.9rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  outline: 'none',
                }}
              />
              <button
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: '9999px',
                  backgroundColor: '#ffffff',
                  color: '#090c13',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.4)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            © {new Date().getFullYear()} Solaria Estates International. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Shield size={12} /> Encrypted Private Client Portal Active
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#ffffff',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Back to Top <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
