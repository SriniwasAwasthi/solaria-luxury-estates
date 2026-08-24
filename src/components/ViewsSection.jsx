import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Sunrise, Sunset, Eye, Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { estatesData } from '../data/estates';

export const ViewsSection = ({ initialSelectedEstate = null, onOpenWalkthroughModal }) => {
  const [selectedEstateState, setSelectedEstateState] = useState(initialSelectedEstate || estatesData[1]);
  const [prevInitial, setPrevInitial] = useState(initialSelectedEstate);

  if (initialSelectedEstate && initialSelectedEstate !== prevInitial) {
    setPrevInitial(initialSelectedEstate);
    setSelectedEstateState(initialSelectedEstate);
  }

  const selectedEstate = selectedEstateState;
  const setSelectedEstate = setSelectedEstateState;

  const [timeHour, setTimeHour] = useState(18.25); // 6:15 PM Golden Hour default
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1); // 1x, 2x, 4x
  const [nightLighting, setNightLighting] = useState(true);
  const [coastalMist, setCoastalMist] = useState(true);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const audioCtxRef = useRef(null);
  const carouselRef = useRef(null);

  // Live daylight simulation animation loop
  useEffect(() => {
    let animId;
    if (isPlaying) {
      const update = () => {
        setTimeHour((prev) => {
          let next = prev + 0.04 * playSpeed;
          if (next >= 24) next = 0;
          return next;
        });
        animId = requestAnimationFrame(update);
      };
      animId = requestAnimationFrame(update);
    }
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isPlaying, playSpeed]);

  // Preset time definitions
  const presets = [
    { id: 'dawn', label: 'Dawn Horizon', time: 6.25, icon: <Sunrise size={15} />, color: '#f5b285', desc: 'Soft rose-gold dawn mist breaking over the calm Mediterranean.' },
    { id: 'noon', label: 'High Noon', time: 12.0, icon: <Sun size={15} />, color: '#93d2fa', desc: 'Crystalline sapphire ocean reflections under radiant azure skies.' },
    { id: 'golden', label: 'Golden Hour', time: 18.25, icon: <Sunset size={15} />, color: '#ee9a4c', desc: 'Intense amber light enveloping cliffside limestone and infinity pools.' },
    { id: 'dusk', label: 'Twilight Dusk', time: 20.5, icon: <Sunset size={15} />, color: '#d47a95', desc: 'Glowing chandelier windows set against deep lavender and amber dusk.' },
    { id: 'night', label: 'Starlight Midnight', time: 0.0, icon: <Moon size={15} />, color: '#6f96d1', desc: 'Moonlit sea cliffs and illuminated turquoise pools under the stars.' },
  ];

  // Dynamic visual calculations from continuous timeHour (0 to 24)
  const calculateLighting = (hour) => {
    // 0h: Night (0), 6h: Dawn (0.5), 12h: Noon (1), 18h: Sunset (0.7), 21h: Dusk (0.3)
    let brightness = 1;
    let contrast = 1;
    let saturate = 1;
    let sepia = 0;
    let hueRotate = 0;
    let gradient = '';
    let phaseName = 'Daylight';
    let kelvin = '5500K';

    if (hour >= 4 && hour < 8) {
      // Dawn (4 - 8)
      const t = (hour - 4) / 4;
      brightness = 0.85 + t * 0.25;
      contrast = 1.05;
      saturate = 1.1 + t * 0.1;
      hueRotate = -15 + (1 - t) * 10;
      sepia = 0.15 * (1 - t);
      gradient = 'radial-gradient(ellipse at 30% 60%, rgba(245, 178, 133, 0.35) 0%, rgba(9, 12, 19, 0.4) 80%)';
      phaseName = 'Dawn Horizon';
      kelvin = '3500K Rose-Gold';
    } else if (hour >= 8 && hour < 16) {
      // Midday / Noon (8 - 16)
      brightness = 1.15;
      contrast = 1.08;
      saturate = 1.3;
      hueRotate = 0;
      sepia = 0;
      gradient = 'radial-gradient(ellipse at 50% 20%, rgba(147, 210, 250, 0.22) 0%, rgba(9, 12, 19, 0.25) 85%)';
      phaseName = 'High Noon Azure';
      kelvin = '5800K Sunlight';
    } else if (hour >= 16 && hour < 19.5) {
      // Golden Hour (16 - 19.5)
      const t = (hour - 16) / 3.5;
      brightness = 1.05 - t * 0.08;
      contrast = 1.12;
      saturate = 1.35 + t * 0.15;
      sepia = 0.25 * t;
      hueRotate = -8 * t;
      gradient = 'radial-gradient(ellipse at 70% 65%, rgba(238, 154, 76, 0.4) 0%, rgba(9, 12, 19, 0.5) 85%)';
      phaseName = 'Golden Hour';
      kelvin = '2800K Amber Glow';
    } else if (hour >= 19.5 && hour < 22) {
      // Twilight Dusk (19.5 - 22)
      const t = (hour - 19.5) / 2.5;
      brightness = 0.9 - t * 0.22;
      contrast = 1.2;
      saturate = 1.15 - t * 0.2;
      hueRotate = 15 * t;
      gradient = 'radial-gradient(ellipse at 60% 50%, rgba(180, 100, 150, 0.3) 0%, rgba(9, 12, 19, 0.75) 85%)';
      phaseName = 'Twilight Dusk';
      kelvin = '2200K Evening Violet';
    } else {
      // Midnight Starlight (22 - 4)
      brightness = 0.68;
      contrast = 1.28;
      saturate = 0.85;
      hueRotate = 200;
      gradient = 'radial-gradient(ellipse at 50% 30%, rgba(60, 95, 160, 0.3) 0%, rgba(5, 8, 14, 0.9) 85%)';
      phaseName = 'Starlight Midnight';
      kelvin = '8500K Moonlit Indigo';
    }

    return {
      filter: `brightness(${brightness}) contrast(${contrast}) saturate(${saturate}) sepia(${sepia}) hue-rotate(${hueRotate}deg)`,
      gradient,
      phaseName,
      kelvin,
      isNight: hour < 5.5 || hour >= 20.5,
    };
  };

  const lighting = calculateLighting(timeHour);

  // Format decimal hour to 12h AM/PM string
  const formatTime = (hourVal) => {
    const totalMinutes = Math.floor(hourVal * 60);
    const h = Math.floor(totalMinutes / 60) % 24;
    const m = totalMinutes % 60;
    const period = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 === 0 ? 12 : h % 12;
    const displayM = String(m).padStart(2, '0');
    return `${displayH}:${displayM} ${period}`;
  };

  // Soundscape toggle
  const toggleAudio = () => {
    if (isAudioActive) {
      if (audioCtxRef.current) audioCtxRef.current.suspend();
      setIsAudioActive(false);
    } else {
      try {
        let ctx = audioCtxRef.current;
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
            output[i] *= 0.035;
            b6 = white * 0.115926;
          }
          const source = ctx.createBufferSource();
          source.buffer = noiseBuffer;
          source.loop = true;
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(300, ctx.currentTime);
          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.08, ctx.currentTime);
          source.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);
          source.start();
          audioCtxRef.current = ctx;
        } else {
          ctx.resume();
        }
        setIsAudioActive(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="views"
      style={{
        padding: '8rem 0',
        backgroundColor: '#070a10',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: 'var(--color-gold-400)',
              textTransform: 'uppercase',
              marginBottom: '0.8rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Sparkles size={14} /> Interactive Horizon Experience
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
              lineHeight: 1.15,
              fontWeight: 300,
              color: '#ffffff',
              marginBottom: '1.2rem',
            }}
          >
            Witness the Changing Lights of Solaria
          </h2>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
            Select any of our 9 luxury residences below and scrub through the 24-hour solar cycle to experience real-time architectural lighting, twilight luminescence, and ocean horizon reflections.
          </p>
        </div>

        {/* 1. ESTATE SELECTOR CAROUSEL (All 9 Estates) */}
        <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', padding: '0 0.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold-300)', fontWeight: 600 }}>
              Select Residence ({estatesData.length} Signature Estates)
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => scrollCarousel('left')}
                aria-label="Scroll left"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                aria-label="Scroll right"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Track */}
          <div
            ref={carouselRef}
            style={{
              display: 'flex',
              gap: '1rem',
              overflowX: 'auto',
              paddingBottom: '0.8rem',
              scrollbarWidth: 'none',
              scrollSnapType: 'x mandatory',
            }}
          >
            {estatesData.map((est) => {
              const isSelected = selectedEstate.id === est.id;
              return (
                <div
                  key={est.id}
                  onClick={() => setSelectedEstate(est)}
                  style={{
                    flex: '0 0 240px',
                    backgroundColor: isSelected ? 'rgba(229, 176, 131, 0.12)' : 'rgba(15, 21, 35, 0.6)',
                    border: isSelected ? '1.5px solid var(--color-gold-400)' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '0.6rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isSelected ? '0 10px 25px rgba(229, 176, 131, 0.25)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '110px', borderRadius: '10px', overflow: 'hidden' }}>
                    <img
                      src={est.image}
                      alt={est.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {isSelected && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '0.4rem',
                          right: '0.4rem',
                          backgroundColor: 'var(--color-gold-400)',
                          color: '#090c13',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.5rem',
                          borderRadius: '9999px',
                          textTransform: 'uppercase',
                        }}
                      >
                        Active
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {est.title}
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-300)', fontWeight: 600 }}>{est.price}</span>
                      <span style={{ fontSize: '0.68rem', color: 'rgba(255, 255, 255, 0.5)' }}>{est.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Launch Full 3D Drone & Room Walkthrough Button */}
        {onOpenWalkthroughModal && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.8rem' }}>
            <button
              onClick={() => onOpenWalkthroughModal(selectedEstate)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 2rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--color-gold-400)',
                color: '#090c13',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                boxShadow: '0 10px 30px rgba(229, 176, 131, 0.35)',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
            >
              <Sparkles size={16} /> ⚡ Launch 3D Drone & Room Walkthrough for {selectedEstate.title}
            </button>
          </div>
        )}

        {/* 2. TIME PRESET BUTTONS */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
          {presets.map((p) => {
            const isCurrent = Math.abs(timeHour - p.time) < 1.2;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setTimeHour(p.time);
                  setIsPlaying(false);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.3rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: isCurrent ? '#090c13' : 'rgba(255, 255, 255, 0.8)',
                  backgroundColor: isCurrent ? p.color : 'rgba(18, 25, 40, 0.7)',
                  border: isCurrent ? `1px solid ${p.color}` : '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                {p.icon} {p.label}
              </button>
            );
          })}
        </div>

        {/* 3. SIMULATOR CANVAS VIEWPORT */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '600px',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.7)',
            backgroundColor: '#05070c',
          }}
        >
          {/* Active Estate Simulated HD Image */}
          <img
            src={selectedEstate.image}
            alt={`${selectedEstate.title} Simulation`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: lighting.filter,
              transition: isPlaying ? 'none' : 'filter 0.5s ease',
            }}
          />

          {/* Dynamic Sky Light Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: lighting.gradient,
              transition: isPlaying ? 'none' : 'background 0.5s ease',
              pointerEvents: 'none',
            }}
          />

          {/* Night / Dusk Architectural Window and Pool Light Luminescence */}
          {nightLighting && lighting.isNight && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(circle at 60% 65%, rgba(245, 178, 133, 0.25) 0%, transparent 45%),
                  radial-gradient(circle at 45% 75%, rgba(100, 220, 255, 0.28) 0%, transparent 40%)
                `,
                mixBlendMode: 'screen',
                pointerEvents: 'none',
                animation: 'pulseGlow 4s ease-in-out infinite',
              }}
            />
          )}

          {/* Coastal Mist Overlay */}
          {coastalMist && (
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '35%',
                background: 'linear-gradient(to top, rgba(147, 210, 250, 0.08) 0%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />
          )}

          {/* TOP OVERLAY: Active Estate Details & Telemetry */}
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '1.5rem',
              right: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              pointerEvents: 'none',
            }}
          >
            {/* Estate Tag */}
            <div
              style={{
                backgroundColor: 'rgba(9, 12, 19, 0.82)',
                backdropFilter: 'blur(16px)',
                padding: '0.8rem 1.4rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-300)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                <Eye size={14} /> LIVE SIMULATION
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#ffffff', margin: 0, fontWeight: 400 }}>{selectedEstate.title}</h3>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                {selectedEstate.elevation} • {selectedEstate.orientation}
              </div>
            </div>

            {/* Time Telemetry Pill */}
            <div
              style={{
                backgroundColor: 'rgba(9, 12, 19, 0.82)',
                backdropFilter: 'blur(16px)',
                padding: '0.7rem 1.2rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: isPlaying ? '#10b981' : 'var(--color-gold-400)',
                  boxShadow: `0 0 10px ${isPlaying ? '#10b981' : 'var(--color-gold-400)'}`,
                }}
              />
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.05em' }}>
                {formatTime(timeHour)}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-300)', borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '0.8rem' }}>
                {lighting.phaseName} ({lighting.kelvin})
              </span>
            </div>
          </div>

          {/* BOTTOM OVERLAY: Full Interactive Player & Scrubber Bar */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              right: '1.5rem',
              backgroundColor: 'rgba(9, 12, 19, 0.88)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '1.25rem 1.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Timeline Slider Track */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', width: '45px' }}>12:00 AM</span>
              <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
                <input
                  type="range"
                  min="0"
                  max="24"
                  step="0.1"
                  value={timeHour}
                  onChange={(e) => {
                    setTimeHour(parseFloat(e.target.value));
                    setIsPlaying(false);
                  }}
                  style={{
                    width: '100%',
                    accentColor: 'var(--color-gold-400)',
                    cursor: 'pointer',
                    height: '6px',
                    borderRadius: '9999px',
                  }}
                />
              </div>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', width: '45px', textAlign: 'right' }}>11:59 PM</span>
            </div>

            {/* Playback Controls & Toggles */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              {/* Play / Pause / Reset & Speed */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: isPlaying ? 'var(--color-gold-400)' : '#ffffff',
                    color: '#090c13',
                    padding: '0.55rem 1.3rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  {isPlaying ? 'Pause Simulation' : 'Play 24H Cycle'}
                </button>

                <button
                  onClick={() => {
                    setTimeHour(18.25);
                    setIsPlaying(false);
                  }}
                  title="Reset to Golden Hour"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    cursor: 'pointer',
                  }}
                >
                  <RotateCcw size={14} />
                </button>

                {/* Speed Selector */}
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '9999px',
                    padding: '0.2rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {[1, 2, 4].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setPlaySpeed(spd)}
                      style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: '9999px',
                        fontSize: '0.7rem',
                        color: playSpeed === spd ? '#090c13' : 'rgba(255, 255, 255, 0.7)',
                        backgroundColor: playSpeed === spd ? '#ffffff' : 'transparent',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles: Lighting, Mist, Audio */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setNightLighting(!nightLighting)}
                  style={{
                    padding: '0.5rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    color: nightLighting ? 'var(--color-gold-300)' : 'rgba(255,255,255,0.4)',
                    backgroundColor: nightLighting ? 'rgba(229, 176, 131, 0.15)' : 'rgba(255,255,255,0.05)',
                    border: nightLighting ? '1px solid rgba(229, 176, 131, 0.4)' : '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                  }}
                >
                  💡 Architectural Lights: {nightLighting ? 'ON' : 'OFF'}
                </button>

                <button
                  onClick={() => setCoastalMist(!coastalMist)}
                  style={{
                    padding: '0.5rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    color: coastalMist ? '#93d2fa' : 'rgba(255,255,255,0.4)',
                    backgroundColor: coastalMist ? 'rgba(147, 210, 250, 0.15)' : 'rgba(255,255,255,0.05)',
                    border: coastalMist ? '1px solid rgba(147, 210, 250, 0.4)' : '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                  }}
                >
                  🌫️ Coastal Mist: {coastalMist ? 'ON' : 'OFF'}
                </button>

                <button
                  onClick={toggleAudio}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    color: isAudioActive ? 'var(--color-gold-300)' : 'rgba(255,255,255,0.5)',
                    backgroundColor: isAudioActive ? 'rgba(229, 176, 131, 0.2)' : 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    cursor: 'pointer',
                  }}
                >
                  {isAudioActive ? <Volume2 size={13} /> : <VolumeX size={13} />}
                  <span>Wave Audio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
