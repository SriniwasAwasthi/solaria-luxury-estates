import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowRight, Menu, X, Film } from 'lucide-react';

export const Header = ({ onOpenTourModal, onOpenVideoModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Story', href: '#story' },
    { label: 'Estates', href: '#estates' },
    { label: '24H Views', href: '#views' },
    { label: 'Aviation & Marina', href: '#aviation-maritime' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'Configurator', href: '#configurator' },
    { label: 'Sovereign Wealth', href: '#sovereign-advisory' },
    { label: 'Club Solaria', href: '#concierge-privileges' },
    { label: 'Inquire', href: '#inquire' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.4s var(--ease-smooth)',
        backgroundColor: scrolled ? 'rgba(9, 12, 19, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.35)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <BrandLogo />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 400,
                letterSpacing: '0.08em',
                color: 'rgba(255, 255, 255, 0.85)',
                transition: 'color 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          {onOpenVideoModal && (
            <button
              onClick={onOpenVideoModal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(229, 176, 131, 0.12)',
                color: '#e5b083',
                border: '1px solid rgba(229, 176, 131, 0.35)',
                padding: '0.65rem 1.3rem',
                borderRadius: '9999px',
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5b083';
                e.currentTarget.style.color = '#090c13';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(229, 176, 131, 0.12)';
                e.currentTarget.style.color = '#e5b083';
              }}
            >
              <Film size={14} /> Watch Video Tour
            </button>
          )}

          <button
            onClick={onOpenTourModal}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: '#ffffff',
              color: '#090c13',
              padding: '0.75rem 1.6rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.35)';
              e.currentTarget.style.backgroundColor = '#f7f4ee';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
          >
            BOOK A TOUR
            <ArrowRight size={14} style={{ transition: 'transform 0.3s ease' }} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="mobile-menu-btn"
            style={{
              color: '#ffffff',
              padding: '0.5rem',
              display: 'none',
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(9, 12, 19, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            animation: 'fadeIn 0.3s ease forwards',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.25rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.05em',
                color: '#ffffff',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 859px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
