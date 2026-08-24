import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const InquirySection = ({ onOpenTourModal }) => {
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setMsg('');
    }, 4000);
  };

  return (
    <section
      id="inquire"
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Private Office Locations */}
          <div>
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
              Private Client Office
            </span>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                lineHeight: 1.15,
                fontWeight: 300,
                color: '#ffffff',
                marginBottom: '1.8rem',
              }}
            >
              Initiate a Confidential Dialogue
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Whether seeking a primary residence, private family compound, or portfolio acquisition, our Private Client Directors provide discreet advisory services.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.8rem', borderRadius: '12px', background: 'rgba(226, 168, 118, 0.1)', color: 'var(--color-gold-300)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Global Advisory Hubs</h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Monaco • Zurich • London • Dubai</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.8rem', borderRadius: '12px', background: 'rgba(226, 168, 118, 0.1)', color: 'var(--color-gold-300)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Direct Advisory Hotline</h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>+377 (98) 90-88-00 (24/7 VIP Access)</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.8rem', borderRadius: '12px', background: 'rgba(226, 168, 118, 0.1)', color: 'var(--color-gold-300)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Confidential Inquiries</h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>concierge@solariaestates.com</p>
                </div>
              </div>

              {onOpenTourModal && (
                <button
                  type="button"
                  onClick={onOpenTourModal}
                  style={{
                    marginTop: '1rem',
                    padding: '0.8rem 1.6rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(229, 176, 131, 0.4)',
                    backgroundColor: 'rgba(229, 176, 131, 0.1)',
                    color: 'var(--color-gold-300)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    width: 'fit-content',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-gold-400)';
                    e.currentTarget.style.color = '#090c13';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(229, 176, 131, 0.1)';
                    e.currentTarget.style.color = 'var(--color-gold-300)';
                  }}
                >
                  Book Private VIP Tour
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Inline Inquiry Form */}
          <div
            style={{
              padding: '3rem',
              borderRadius: '24px',
              backgroundColor: 'rgba(16, 22, 34, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', fontWeight: 300, marginBottom: '1.5rem' }}>
              Send Direct Inquiry
            </h3>

            {sent ? (
              <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--color-gold-300)' }}>
                <CheckCircle size={48} style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.5rem' }}>Inquiry Received</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  Your private message has been transmitted directly to our Chief Client Officer.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.2rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.2rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding your desired acquisition timeline or estate preferences..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.2rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    padding: '1rem',
                    borderRadius: '9999px',
                    backgroundColor: '#ffffff',
                    color: '#090c13',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  Transmit Confidential Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
