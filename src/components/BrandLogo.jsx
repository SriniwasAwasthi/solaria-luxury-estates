import React from 'react';

/**
 * Geometric Solaria Double-Diamond Logo
 * Matches the reference image brand mark exactly
 */
export const BrandLogo = ({ light = true }) => {
  const fillColor = light ? "#ffffff" : "#090c13";

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem' }}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Top Chevron/Diamond Block */}
        <polygon
          points="25,12 85,12 60,38 0,38"
          fill={fillColor}
        />
        {/* Bottom Chevron/Diamond Block */}
        <polygon
          points="40,55 100,55 75,81 15,81"
          fill={fillColor}
        />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-accent)',
          fontSize: '1.15rem',
          letterSpacing: '0.25em',
          fontWeight: 600,
          color: fillColor,
          textTransform: 'uppercase',
          lineHeight: 1
        }}
      >
        SOLARIA
      </span>
    </div>
  );
};

export const BrandWatermark = () => {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.85, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
    >
      <polygon points="25,12 85,12 60,38 0,38" fill="#ffffff" />
      <polygon points="40,55 100,55 75,81 15,81" fill="#ffffff" />
    </svg>
  );
};
