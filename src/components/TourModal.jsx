import React, { useState } from 'react';
import { X, CheckCircle2, Shield } from 'lucide-react';

export const TourModal = ({ isOpen, onClose, defaultEstate = null }) => {
  const [submitted, setSubmitted] = useState(false);
  const [tourType, setTourType] = useState('in-person'); // 'in-person' | 'yacht' | 'virtual'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    estate: defaultEstate ? defaultEstate.title : 'Villa Horizon Cliffside',
    date: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s
    }, 3000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(9, 12, 19, 0.85)',
        backdropFilter: 'blur(20px)',
        animation: 'fadeIn 0.3s ease forwards',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '650px',
          backgroundColor: '#0d131f',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '24px',
          padding: '2.5rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: '#ffffff',
            padding: '0.5rem',
            borderRadius: '50%',
            border: 'none',
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-gold-400)', textTransform: 'uppercase' }}>
                Private Concierge
              </span>
              <h3 style={{ fontSize: '2rem', color: '#ffffff', fontWeight: 300, marginTop: '0.4rem' }}>
                Schedule a VIP Private Tour
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.65)', marginTop: '0.4rem' }}>
                Experience Solaria in person or via private superyacht sea viewing.
              </p>
            </div>

            {/* Tour Type Selector */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                marginBottom: '1.8rem',
              }}
            >
              {[
                { id: 'in-person', label: 'VIP On-Site Visit' },
                { id: 'yacht', label: 'Sea & Yacht Tour' },
                { id: 'virtual', label: '360° VR Live Tour' },
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setTourType(type.id)}
                  style={{
                    padding: '0.75rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: tourType === type.id ? '#090c13' : 'rgba(255, 255, 255, 0.75)',
                    backgroundColor: tourType === type.id ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid ' + (tourType === type.id ? '#ffffff' : 'rgba(255, 255, 255, 0.08)'),
                    transition: 'all 0.2s ease',
                  }}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>Selected Estate</label>
                <select
                  value={formData.estate}
                  onChange={(e) => setFormData({ ...formData, estate: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  <option value="Villa Horizon Cliffside" style={{ background: '#0d131f' }}>Villa Horizon Cliffside ($24.5M)</option>
                  <option value="Solaria Mediterranean Estate" style={{ background: '#0d131f' }}>Solaria Mediterranean Estate ($31.8M)</option>
                  <option value="The Riviera Sky Penthouse" style={{ background: '#0d131f' }}>The Riviera Sky Penthouse ($18.9M)</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Lord / Lady / Mr. / Ms."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>Private Email</label>
                  <input
                    type="email"
                    required
                    placeholder="vip@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>Direct Telephone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  borderRadius: '9999px',
                  backgroundColor: '#ffffff',
                  color: '#090c13',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  transition: 'transform 0.2s ease',
                }}
              >
                Confirm Tour Reservation
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.5rem' }}>
                <Shield size={12} /> Confidentiality & Privacy Guaranteed
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <CheckCircle2 size={64} style={{ color: 'var(--color-gold-400)', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '2rem', color: '#ffffff', fontWeight: 300, marginBottom: '0.8rem' }}>
              Tour Request Confirmed
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '420px', margin: '0 auto 2rem auto' }}>
              Thank you, {formData.name || 'Valued Client'}. A Solaria Senior Estate Director will contact your private line shortly to finalize transfer details.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              style={{
                padding: '0.8rem 2rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
