import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, ChevronDown, Sparkles, Waves } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';

export const HeroSection = ({ _onOpenTourModal }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioCtx, setAudioCtx] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio API ambient ocean wave sound synthesizer
  const toggleSoundscape = () => {
    if (isPlayingAudio) {
      if (audioCtx) audioCtx.suspend();
      setIsPlayingAudio(false);
    } else {
      try {
        let ctx = audioCtx;
        if (!ctx) {
          ctx = new (window.AudioContext || window.webkitAudioContext)();
          const bufferSize = ctx.sampleRate * 2;
          const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            output[i] *= 0.03;
            b6 = white * 0.115926;
          }

          const whiteNoise = ctx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;

          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(320, ctx.currentTime);

          const gainNode = ctx.createGain();
          gainNode.gain.setValueAtTime(0.08, ctx.currentTime);

          const lfo = ctx.createOscillator();
          lfo.frequency.value = 0.12;
          lfo.connect(gainNode.gain);

          whiteNoise.connect(filter);
          filter.connect(gainNode);
          gainNode.connect(ctx.destination);

          whiteNoise.start();
          lfo.start();

          setAudioCtx(ctx);
        } else {
          ctx.resume();
        }
        setIsPlayingAudio(true);
      } catch (e) {
        console.log('Audio Error:', e);
      }
    }
  };

  // Expanded multi-stage narrative opacities across 650vh scroll (Much larger, deeper scrolling journey)
  // Stage 1: 0% -> 20% (Initial Hero Title & Brand Identity)
  const stage1Opacity = Math.max(0, 1 - scrollProgress * 5.0);
  const stage1Y = scrollProgress * -90;

  // Stage 2: 24% -> 74% (Flythrough Highlight & Architectural Metrics)
  let stage2Opacity = 0;
  if (scrollProgress >= 0.22 && scrollProgress <= 0.76) {
    if (scrollProgress < 0.44) {
      stage2Opacity = (scrollProgress - 0.22) / 0.18;
    } else {
      stage2Opacity = (0.76 - scrollProgress) / 0.18;
    }
  }
  stage2Opacity = Math.min(Math.max(stage2Opacity, 0), 1);

  // Stage 3: 78% -> 100% (Collection Discovery Call to Action)
  let stage3Opacity = 0;
  if (scrollProgress >= 0.76) {
    stage3Opacity = (scrollProgress - 0.76) / 0.20;
  }
  stage3Opacity = Math.min(Math.max(stage3Opacity, 0), 1);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        height: '650vh', // Expanded for a much bigger, grander, larger scrolling journey
        backgroundColor: '#090c13',
      }}
    >
      {/* Sticky Fullscreen Frame Scrubber Viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Canvas 75-Frame Flythrough Scrubber */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <HeroCanvas scrollProgress={scrollProgress} />
        </div>

        {/* Cinematic Vignette & Lighting Contrast Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background: `
              radial-gradient(ellipse at 50% 50%, rgba(9, 12, 19, 0.2) 0%, rgba(9, 12, 19, 0.75) 100%),
              linear-gradient(to bottom, rgba(9, 12, 19, 0.7) 0%, rgba(9, 12, 19, 0.15) 30%, rgba(9, 12, 19, 0.3) 70%, rgba(9, 12, 19, 0.85) 100%)
            `,
            pointerEvents: 'none',
          }}
        />

        {/* STAGE 1: Main Title & Hero Branding (0% -> 20%) */}
        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '960px',
            padding: '0 1.5rem',
            opacity: stage1Opacity,
            transform: `translateY(${stage1Y}px)`,
            pointerEvents: stage1Opacity > 0.1 ? 'auto' : 'none',
            transition: 'opacity 0.05s linear, transform 0.05s linear',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              color: 'var(--color-gold-300)',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
              fontWeight: 600,
            }}
          >
            <Sparkles size={14} /> The Solaria Collection
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '0.14em',
              color: '#ffffff',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.9), 0 2px 10px rgba(0,0,0,0.8)',
              marginBottom: '1.4rem',
              textTransform: 'uppercase',
            }}
          >
            Where the Horizon <br />
            <span style={{ fontStyle: 'italic', fontFamily: 'serif', fontWeight: 300, letterSpacing: '0.08em' }}>Meets</span> <br />
            Timeless Elegance
          </h1>

          <p
            style={{
              fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)',
              letterSpacing: '0.12em',
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '650px',
              margin: '0 auto 2.2rem auto',
              lineHeight: 1.6,
              textTransform: 'uppercase',
              textShadow: '0 2px 12px rgba(0,0,0,0.9)',
              fontWeight: 400,
            }}
          >
            An exclusive collection of nine bespoke residences on the Mediterranean coast
          </p>
        </div>

        {/* STAGE 2: Architectural Flythrough & Telemetry Metrics (24% -> 74%) */}
        <div
          className="container"
          style={{
            position: 'absolute',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '900px',
            opacity: stage2Opacity,
            transform: `translateY(${(1 - stage2Opacity) * 30}px)`,
            pointerEvents: stage2Opacity > 0.2 ? 'auto' : 'none',
            transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.5rem 1.4rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(229, 176, 131, 0.15)',
              border: '1px solid rgba(229, 176, 131, 0.35)',
              color: 'var(--color-gold-300)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
            }}
          >
            <Waves size={15} /> Cinematic Architecture Flythrough
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
              fontWeight: 300,
              letterSpacing: '0.08em',
              color: '#ffffff',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.9)',
              marginBottom: '1rem',
            }}
          >
            SCULPTED INTO LIVING CLIFFS
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '680px',
              margin: '0 auto 2rem auto',
              lineHeight: 1.6,
              textShadow: '0 2px 12px rgba(0,0,0,0.8)',
            }}
          >
            Every villa cascades seamlessly over ancient limestone, with infinity horizons meeting the Mediterranean tides.
          </p>

          <div
            style={{
              display: 'inline-flex',
              gap: '2rem',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(9, 12, 19, 0.65)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <div><strong style={{ color: 'var(--color-gold-300)' }}>9</strong> Bespoke Estates</div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            <div><strong style={{ color: 'var(--color-gold-300)' }}>360°</strong> Coastal Panoramas</div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            <div><strong style={{ color: 'var(--color-gold-300)' }}>Private</strong> Deep-Water Docks</div>
          </div>
        </div>

        {/* STAGE 3: Final Collection Discovery Trigger (78% -> 100%) */}
        <div
          className="container"
          style={{
            position: 'absolute',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '850px',
            opacity: stage3Opacity,
            transform: `translateY(${(1 - stage3Opacity) * 30}px)`,
            pointerEvents: stage3Opacity > 0.2 ? 'auto' : 'none',
            transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
          }}
        >
          <div
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.25em',
              color: 'var(--color-gold-400)',
              textTransform: 'uppercase',
              marginBottom: '0.8rem',
            }}
          >
            A New Standard of Coastal Living
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
              color: '#ffffff',
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: '1.2rem',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.9)',
            }}
          >
            DISCOVER YOUR PRIVATE SANCTUARY
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '620px',
              margin: '0 auto 2.2rem auto',
            }}
          >
            Explore 9 one-of-a-kind cliffside residences and sky penthouses crafted for those who demand the extraordinary.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a
              href="#estates"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: '#ffffff',
                color: '#090c13',
                padding: '0.9rem 2.2rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.25)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              EXPLORE THE 9 ESTATES <ChevronDown size={16} />
            </a>
          </div>
        </div>

        {/* Floating Soundscape Audio Toggle Button */}
        <button
          onClick={toggleSoundscape}
          aria-label="Toggle soundscape"
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '2.5rem',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.6rem 1.1rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(10, 14, 23, 0.75)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color: isPlayingAudio ? 'var(--color-gold-300)' : 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
        >
          {isPlayingAudio ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span>{isPlayingAudio ? 'Coastal Waves Audio: Active' : 'Soundscape: Off'}</span>
        </button>


      </div>
    </section>
  );
};
