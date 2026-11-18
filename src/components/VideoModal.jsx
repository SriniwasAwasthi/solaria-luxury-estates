import React from 'react';
import { X, Film, Play, Download, Sparkles } from 'lucide-react';

export const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(5, 8, 14, 0.92)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          backgroundColor: '#090c13',
          borderRadius: '24px',
          border: '1px solid rgba(229, 176, 131, 0.3)',
          boxShadow: '0 30px 100px rgba(0, 0, 0, 0.9)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            padding: '1.2rem 1.8rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(18, 25, 40, 0.75)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(229, 176, 131, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e5b083' }}>
              <Film size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', fontFamily: 'var(--font-heading)', margin: 0 }}>
                Solaria Estates — Comprehensive QA & Video Walkthrough
              </h3>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                125s Autonomous Agent Walkthrough • 1080p Ultra-Wide Screencast
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <a
              href="/assets/solaria_website_walkthrough_1080p.mp4"
              download="solaria_website_walkthrough_1080p.mp4"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '0.75rem',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
            >
              <Download size={14} /> Download MP4
            </a>

            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div style={{ position: 'relative', width: '100%', height: '560px', backgroundColor: '#000000' }}>
          <video
            src="/assets/solaria_website_walkthrough_1080p.mp4"
            controls
            autoPlay
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Bottom Details Footer */}
        <div style={{ padding: '1rem 1.8rem', backgroundColor: 'rgba(12, 17, 28, 0.95)', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.65)' }}>
          <span>Comprehensive QA recording covering all 12 major features & interactive workflows</span>
          <span style={{ color: 'var(--color-gold-300)' }}>File: public/assets/solaria_website_walkthrough_1080p.mp4</span>
        </div>
      </div>
    </div>
  );
};
export default VideoModal;
