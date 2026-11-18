import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, 
  Calendar, Lock, Copy, Check, Clock, Sparkles, User, Globe2 
} from 'lucide-react';
import { estatesData } from '../data/estates';

export const InquirySection = ({ onOpenTourModal }) => {
  const [formData, setFormData] = useState({
    salutation: 'Mr.',
    fullName: '',
    email: '',
    phone: '',
    estateInterest: estatesData[1]?.title || 'Solaria Mediterranean Estate',
    timeline: 'Immediate Acquisition (30-60 Days)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [docketNumber, setDocketNumber] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText('concierge@solariaestates.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    
    // Simulate high-security end-to-end encryption transmission
    setTimeout(() => {
      const generatedDocket = `SOL-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
      setDocketNumber(generatedDocket);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      salutation: 'Mr.',
      fullName: '',
      email: '',
      phone: '',
      estateInterest: estatesData[1]?.title || 'Solaria Mediterranean Estate',
      timeline: 'Immediate Acquisition (30-60 Days)',
      message: '',
    });
  };

  return (
    <section
      id="inquire"
      style={{
        padding: '8rem 0',
        backgroundColor: '#090c13',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(229, 176, 131, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147, 210, 250, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '4.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Private Office Locations & Credentials */}
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.25em',
                color: 'var(--color-gold-400)',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <ShieldCheck size={16} /> Private Client Office
            </span>

            <h2
              style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                lineHeight: 1.15,
                fontWeight: 300,
                color: '#ffffff',
                marginBottom: '1.6rem',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Initiate a Confidential Dialogue
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.75, marginBottom: '2.8rem' }}>
              Whether seeking a primary residence, private family compound, or portfolio acquisition, our Private Client Directors provide discreet advisory services.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {/* Hubs */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.2rem',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(18, 25, 40, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(229, 176, 131, 0.12)', color: 'var(--color-gold-300)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', fontFamily: 'var(--font-sans)', fontWeight: 600, margin: '0 0 0.3rem 0' }}>
                    Global Advisory Hubs
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                    Monaco • Zurich • London • Dubai
                  </p>
                </div>
              </div>

              {/* Direct Hotline */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.2rem',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(18, 25, 40, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(229, 176, 131, 0.12)', color: 'var(--color-gold-300)' }}>
                  <Phone size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4 style={{ fontSize: '0.95rem', color: '#ffffff', fontFamily: 'var(--font-sans)', fontWeight: 600, margin: '0 0 0.3rem 0' }}>
                      Direct Advisory Hotline
                    </h4>
                    <span style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} /> Line Open
                    </span>
                  </div>
                  <a
                    href="tel:+37798908800"
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--color-gold-300)',
                      fontWeight: 600,
                      display: 'inline-block',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-gold-300)')}
                  >
                    +377 (98) 90-88-00 (24/7 VIP Access)
                  </a>
                </div>
              </div>

              {/* Confidential Inquiries */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.2rem',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(18, 25, 40, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(229, 176, 131, 0.12)', color: 'var(--color-gold-300)' }}>
                  <Mail size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4 style={{ fontSize: '0.95rem', color: '#ffffff', fontFamily: 'var(--font-sans)', fontWeight: 600, margin: '0 0 0.3rem 0' }}>
                      Confidential Inquiries
                    </h4>
                    <button
                      onClick={handleCopyEmail}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: copiedEmail ? '#10b981' : 'rgba(255,255,255,0.5)',
                        cursor: 'pointer',
                        fontSize: '0.72rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                      }}
                      title="Copy confidential email address"
                    >
                      {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                      {copiedEmail ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <a
                    href="mailto:concierge@solariaestates.com"
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--color-gold-300)',
                      fontWeight: 600,
                      display: 'inline-block',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-gold-300)')}
                  >
                    concierge@solariaestates.com
                  </a>
                </div>
              </div>

              {/* Book Private VIP Tour CTA */}
              {onOpenTourModal && (
                <button
                  type="button"
                  onClick={onOpenTourModal}
                  style={{
                    marginTop: '0.8rem',
                    padding: '1rem 2.2rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(229, 176, 131, 0.5)',
                    background: 'linear-gradient(135deg, rgba(229, 176, 131, 0.16) 0%, rgba(212, 149, 97, 0.08) 100%)',
                    color: 'var(--color-gold-300)',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    width: 'fit-content',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-gold-400)';
                    e.currentTarget.style.color = '#090c13';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(229, 176, 131, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(229, 176, 131, 0.16) 0%, rgba(212, 149, 97, 0.08) 100%)';
                    e.currentTarget.style.color = 'var(--color-gold-300)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
                  }}
                >
                  <Calendar size={16} /> Book Private VIP Tour
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Ultra-Luxurious "Send Direct Inquiry" Client Suite */}
          <div
            style={{
              padding: '3rem 3.2rem',
              borderRadius: '26px',
              backgroundColor: 'rgba(16, 22, 35, 0.75)',
              border: '1px solid rgba(229, 176, 131, 0.22)',
              backdropFilter: 'blur(25px)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle card accent top border line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, var(--color-gold-400) 50%, transparent 100%)',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.8rem' }}>
              <div>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--color-gold-400)', textTransform: 'uppercase', fontWeight: 600 }}>
                  Principal Acquisition Desk
                </span>
                <h3 style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 300, margin: '0.2rem 0 0 0', fontFamily: 'var(--font-heading)' }}>
                  Send Direct Inquiry
                </h3>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.72rem',
                  color: 'rgba(255, 255, 255, 0.55)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <Lock size={12} color="var(--color-gold-400)" /> 256-Bit Encrypted
              </div>
            </div>

            {isSubmitted ? (
              /* Verified VIP Certificate & Docket Confirmation */
              <div
                style={{
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  animation: 'fadeIn 0.4s ease forwards',
                }}
              >
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(229, 176, 131, 0.15)',
                    border: '1.5px solid var(--color-gold-400)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    color: 'var(--color-gold-400)',
                    boxShadow: '0 0 30px rgba(229, 176, 131, 0.3)',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-400)', fontWeight: 600 }}>
                  Transmission Confirmed
                </span>
                
                <h4 style={{ fontSize: '1.55rem', color: '#ffffff', margin: '0.4rem 0 0.8rem 0', fontFamily: 'var(--font-heading)' }}>
                  Confidential Dialogue Initiated
                </h4>

                <div
                  style={{
                    backgroundColor: 'rgba(9, 12, 19, 0.65)',
                    borderRadius: '16px',
                    padding: '1.2rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    margin: '1.5rem 0',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Docket Reference</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-gold-300)', fontWeight: 700, letterSpacing: '0.08em' }}>{docketNumber}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Residence</span>
                    <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 500 }}>{formData.estateInterest}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Managing Partner</span>
                    <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 500 }}>Monaco & Zurich Private Office</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  A Senior Client Director has received your confidential brief and will initiate direct contact via your specified channel within 2 hours under strict non-disclosure protocol.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    padding: '0.75rem 1.8rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
                >
                  Send Additional Confidential Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Full Name & Salutation */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold-300)', marginBottom: '0.45rem', fontWeight: 600 }}>
                    Client Name & Salutation *
                  </label>
                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    <select
                      name="salutation"
                      value={formData.salutation}
                      onChange={handleChange}
                      style={{
                        width: '85px',
                        padding: '0.85rem 0.6rem',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontSize: '0.88rem',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="Mr." style={{ backgroundColor: '#090c13' }}>Mr.</option>
                      <option value="Mrs." style={{ backgroundColor: '#090c13' }}>Mrs.</option>
                      <option value="Ms." style={{ backgroundColor: '#090c13' }}>Ms.</option>
                      <option value="Dr." style={{ backgroundColor: '#090c13' }}>Dr.</option>
                      <option value="H.E." style={{ backgroundColor: '#090c13' }}>H.E.</option>
                    </select>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Principal Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      style={{
                        flex: 1,
                        padding: '0.85rem 1.2rem',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold-400)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold-300)', marginBottom: '0.45rem', fontWeight: 600 }}>
                      Confidential Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="client@familyoffice.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.2rem',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold-400)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold-300)', marginBottom: '0.45rem', fontWeight: 600 }}>
                      Direct Phone / WhatsApp VIP
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.2rem',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold-400)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>
                </div>

                {/* Residence of Interest Selection */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold-300)', marginBottom: '0.45rem', fontWeight: 600 }}>
                    Residence of Primary Interest
                  </label>
                  <select
                    name="estateInterest"
                    value={formData.estateInterest}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="Bespoke Portfolio Acquisition (Multiple Estates)" style={{ backgroundColor: '#090c13' }}>
                      Bespoke Portfolio Acquisition (Multiple Estates)
                    </option>
                    {estatesData.map((estate) => (
                      <option key={estate.id} value={estate.title} style={{ backgroundColor: '#090c13' }}>
                        {estate.title} — {estate.price} ({estate.location})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Acquisition Horizon */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold-300)', marginBottom: '0.45rem', fontWeight: 600 }}>
                    Target Acquisition Horizon
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="Immediate Acquisition (30-60 Days)" style={{ backgroundColor: '#090c13' }}>
                      Immediate Acquisition (30-60 Days)
                    </option>
                    <option value="Mid-Term Allocation (3-6 Months)" style={{ backgroundColor: '#090c13' }}>
                      Mid-Term Allocation (3-6 Months)
                    </option>
                    <option value="Long-Term Family Estate Planning" style={{ backgroundColor: '#090c13' }}>
                      Long-Term Family Estate Planning
                    </option>
                    <option value="Confidential Advisory Review" style={{ backgroundColor: '#090c13' }}>
                      Confidential Advisory Review
                    </option>
                  </select>
                </div>

                {/* Confidential Brief Notes */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold-300)', marginBottom: '0.45rem', fontWeight: 600 }}>
                    Confidential Brief & Specific Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Provide details regarding privacy needs, superyacht slip depth, architectural preferences, or family office requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.2rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'none',
                      lineHeight: 1.5,
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold-400)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.7rem',
                    padding: '1.05rem',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #f5d4b7 0%, #e5b083 50%, #d49561 100%)',
                    color: '#090c13',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    cursor: isSubmitting ? 'wait' : 'pointer',
                    border: 'none',
                    boxShadow: '0 10px 30px rgba(229, 176, 131, 0.35)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    marginTop: '0.5rem',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 14px 40px rgba(229, 176, 131, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(229, 176, 131, 0.35)';
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles size={16} /> Encrypting & Transmitting Brief...
                    </>
                  ) : (
                    <>
                      Transmit Confidential Inquiry <Send size={15} />
                    </>
                  )}
                </button>

                <div style={{ textAlign: 'center', marginTop: '0.4rem' }}>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.45)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={13} color="var(--color-gold-400)" /> Protected under international fiduciary non-disclosure laws.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
