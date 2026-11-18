import React, { useState, useEffect, useRef } from 'react';
import { 
  Sun, Moon, Sunrise, Sunset, Eye, Play, Pause, RotateCcw, 
  Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight, 
  Camera, Compass, Layers, ShieldCheck, Clock, Move, Radio
} from 'lucide-react';
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
  const [viewPerspective, setViewPerspective] = useState('architecture'); // 'architecture' | 'drone'
  const [nightLighting, setNightLighting] = useState(true);
  const [coastalMist, setCoastalMist] = useState(true);
  const [isAudioActive, setIsAudioActive] = useState(false);
  
  // Interactive 3D Drone Pan controls
  const [dronePan, setDronePan] = useState({ x: 0, y: 0 });
  const [isDroneDragging, setIsDroneDragging] = useState(false);
  const [droneDragStart, setDroneDragStart] = useState({ x: 0, y: 0 });
  const [isPerspectiveSwitching, setIsPerspectiveSwitching] = useState(false);

  const audioCtxRef = useRef(null);
  const carouselRef = useRef(null);

  // Lifelike, smooth 24-hour solar cycle animation loop with delta timing
  useEffect(() => {
    let animId;
    let lastTime = performance.now();
    if (isPlaying) {
      const update = (now) => {
        const delta = Math.min((now - lastTime) / 1000, 0.08);
        lastTime = now;
        setTimeHour((prev) => {
          let next = prev + delta * 0.9 * playSpeed;
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

  // Handle perspective switcher with smooth cross-fade
  const handlePerspectiveChange = (mode) => {
    if (mode === viewPerspective) return;
    setIsPerspectiveSwitching(true);
    setTimeout(() => {
      setViewPerspective(mode);
      setDronePan({ x: 0, y: 0 });
      setTimeout(() => setIsPerspectiveSwitching(false), 300);
    }, 150);
  };

  // 3D Drone Drag Handlers
  const handleMouseDown = (e) => {
    if (viewPerspective !== 'drone') return;
    setIsDroneDragging(true);
    setDroneDragStart({ x: e.clientX - dronePan.x, y: e.clientY - dronePan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDroneDragging || viewPerspective !== 'drone') return;
    const newX = e.clientX - droneDragStart.x;
    const newY = Math.max(-30, Math.min(30, e.clientY - droneDragStart.y));
    setDronePan({ x: newX * 0.45, y: newY * 0.25 });
  };

  const handleMouseUp = () => {
    setIsDroneDragging(false);
  };

  // Preset solar moments
  const presets = [
    { id: 'dawn', label: 'Dawn Horizon', time: 6.25, icon: <Sunrise size={14} />, color: '#f5b285', desc: 'Soft rose-gold dawn mist breaking over the calm Mediterranean.' },
    { id: 'noon', label: 'High Noon', time: 12.0, icon: <Sun size={14} />, color: '#93d2fa', desc: 'Crystalline sapphire ocean reflections under radiant azure skies.' },
    { id: 'golden', label: 'Golden Hour', time: 18.25, icon: <Sunset size={14} />, color: '#ee9a4c', desc: 'Intense amber light enveloping cliffside limestone and infinity pools.' },
    { id: 'dusk', label: 'Twilight Dusk', time: 20.25, icon: <Sunset size={14} />, color: '#d47a95', desc: 'Glowing chandelier windows set against deep lavender and amber dusk.' },
    { id: 'night', label: 'Starlight Midnight', time: 0.0, icon: <Moon size={14} />, color: '#6f96d1', desc: 'Moonlit sea cliffs and illuminated turquoise pools under the stars.' },
  ];

  // Continuous, real-life 24-hour solar cycle lighting (Zero color-wheel distortion)
  const calculateLighting = (hour) => {
    let brightness = 1.0;
    let contrast = 1.05;
    let saturate = 1.15;
    let sepia = 0;
    let gradient = '';
    let phaseName = 'Daylight';
    let kelvin = '5500K';
    let isNight = false;
    let nightOverlayOpacity = 0;
    let poolGlowOpacity = 0;

    if (hour >= 4.5 && hour < 7.5) {
      // Dawn (4:30 AM to 7:30 AM)
      const t = (hour - 4.5) / 3.0;
      brightness = 0.78 + t * 0.32;
      contrast = 1.14 - t * 0.06;
      saturate = 0.95 + t * 0.25;
      sepia = 0.12 * (1 - t * 0.5);
      gradient = `radial-gradient(ellipse at 30% 65%, rgba(245, 178, 133, ${0.4 * (1 - t * 0.3)}) 0%, rgba(210, 140, 180, ${0.22 * (1 - t)}) 50%, rgba(9, 12, 19, ${0.45 * (1 - t)}) 90%)`;
      phaseName = 'Dawn Horizon';
      kelvin = `${Math.round(3200 + t * 1800)}K Rose-Gold Sunrise`;
      nightOverlayOpacity = Math.max(0, (1 - t) * 0.45);
      isNight = hour < 6.0;
      poolGlowOpacity = Math.max(0, (1 - t) * 0.6);
    } else if (hour >= 7.5 && hour < 16.0) {
      // High Noon / Daylight (7:30 AM to 4:00 PM)
      const t = Math.sin(((hour - 7.5) / 8.5) * Math.PI);
      brightness = 1.08 + t * 0.10;
      contrast = 1.06 + t * 0.04;
      saturate = 1.20 + t * 0.10;
      sepia = 0;
      gradient = `radial-gradient(ellipse at 50% 20%, rgba(147, 210, 250, ${0.22 + t * 0.08}) 0%, rgba(9, 12, 19, 0.1) 85%)`;
      phaseName = 'High Noon Azure';
      kelvin = `${Math.round(5400 + t * 500)}K Radiant Daylight`;
      nightOverlayOpacity = 0;
      isNight = false;
      poolGlowOpacity = 0;
    } else if (hour >= 16.0 && hour < 19.5) {
      // Golden Hour (4:00 PM to 7:30 PM)
      const t = (hour - 16.0) / 3.5;
      brightness = 1.12 - t * 0.15;
      contrast = 1.08 + t * 0.08;
      saturate = 1.30 + t * 0.15;
      sepia = 0.22 * t;
      gradient = `radial-gradient(ellipse at 72% 65%, rgba(238, 154, 76, ${0.35 + t * 0.15}) 0%, rgba(200, 95, 40, ${0.2 * t}) 55%, rgba(9, 12, 19, ${0.2 + t * 0.3}) 90%)`;
      phaseName = 'Golden Hour';
      kelvin = `${Math.round(4200 - t * 1600)}K Amber Glow`;
      nightOverlayOpacity = 0;
      isNight = false;
      poolGlowOpacity = t * 0.35;
    } else if (hour >= 19.5 && hour < 22.0) {
      // Twilight Dusk (7:30 PM to 10:00 PM)
      const t = (hour - 19.5) / 2.5;
      brightness = 0.97 - t * 0.25;
      contrast = 1.16 + t * 0.08;
      saturate = 1.25 - t * 0.35;
      sepia = 0.15 * (1 - t);
      gradient = `radial-gradient(ellipse at 60% 50%, rgba(180, 100, 160, ${0.35 * (1 - t * 0.3)}) 0%, rgba(35, 20, 60, ${0.3 + t * 0.3}) 55%, rgba(9, 12, 19, ${0.5 + t * 0.35}) 90%)`;
      phaseName = 'Twilight Dusk';
      kelvin = `${Math.round(2600 - t * 600)}K Evening Violet`;
      nightOverlayOpacity = t * 0.55;
      isNight = true;
      poolGlowOpacity = 0.35 + t * 0.55;
    } else {
      // Deep Starlight Midnight (10:00 PM to 4:30 AM)
      brightness = 0.72;
      contrast = 1.24;
      saturate = 0.88;
      sepia = 0;
      gradient = 'radial-gradient(ellipse at 50% 30%, rgba(45, 80, 150, 0.32) 0%, rgba(12, 20, 42, 0.55) 60%, rgba(5, 8, 14, 0.85) 90%)';
      phaseName = 'Starlight Midnight';
      kelvin = '8500K Moonlit Indigo';
      nightOverlayOpacity = 0.65;
      isNight = true;
      poolGlowOpacity = 0.95;
    }

    return {
      filter: `brightness(${brightness.toFixed(3)}) contrast(${contrast.toFixed(3)}) saturate(${saturate.toFixed(3)}) sepia(${sepia.toFixed(3)})`,
      gradient,
      phaseName,
      kelvin,
      isNight,
      nightOverlayOpacity,
      poolGlowOpacity,
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

  // Coastal wave soundscape
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
          filter.frequency.setValueAtTime(320, ctx.currentTime);
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
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  const activeDisplayImage = viewPerspective === 'drone' && selectedEstate.droneImage
    ? selectedEstate.droneImage
    : selectedEstate.image;

  return (
    <section
      id="views"
      style={{
        padding: '8rem 0',
        backgroundColor: '#070a10',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
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
              gap: '0.5rem',
            }}
          >
            <Sparkles size={14} /> Interactive Horizon & Solar Experience
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
              lineHeight: 1.15,
              fontWeight: 300,
              color: '#ffffff',
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Witness the Changing Lights of Solaria
          </h2>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.7 }}>
            Select any of our 9 signature estates below to explore real-time architectural day-to-night lighting transitions, ocean reflections, and drone perspectives across the full 24-hour solar cycle.
          </p>
        </div>

        {/* 1. ESTATE SELECTOR CAROUSEL (All 9 Estates) */}
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.9rem', padding: '0 0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold-300)', fontWeight: 600 }}>
                Select Residence ({estatesData.length} Signature Estates)
              </span>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.45)', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                Active: {selectedEstate.title}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => scrollCarousel('left')}
                aria-label="Scroll left"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(229, 176, 131, 0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                aria-label="Scroll right"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(229, 176, 131, 0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
              >
                <ChevronRight size={18} />
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
                    flex: '0 0 250px',
                    backgroundColor: isSelected ? 'rgba(229, 176, 131, 0.14)' : 'rgba(15, 21, 35, 0.65)',
                    border: isSelected ? '1.5px solid var(--color-gold-400)' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '0.65rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isSelected ? '0 12px 30px rgba(229, 176, 131, 0.25)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    transform: isSelected ? 'translateY(-2px)' : 'none',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '115px', borderRadius: '12px', overflow: 'hidden' }}>
                    <img
                      src={est.image}
                      alt={est.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {isSelected && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '0.45rem',
                          right: '0.45rem',
                          backgroundColor: 'var(--color-gold-400)',
                          color: '#090c13',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '9999px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                        }}
                      >
                        Simulating
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: '0 0 0.2rem 0' }}>
                      {est.title}
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-gold-300)', fontWeight: 600 }}>{est.price}</span>
                      <span style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)' }}>{est.specs.sqft} sq ft</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. PROMINENT 3D DRONE & ROOM WALKTHROUGH LAUNCH BUTTON */}
        {onOpenWalkthroughModal && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <button
              onClick={() => onOpenWalkthroughModal(selectedEstate)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.95rem 2.4rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #f5d4b7 0%, #e5b083 50%, #d49561 100%)',
                color: '#090c13',
                fontSize: '0.86rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                boxShadow: '0 12px 35px rgba(229, 176, 131, 0.38)',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 16px 45px rgba(229, 176, 131, 0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(229, 176, 131, 0.38)';
              }}
            >
              <Sparkles size={18} /> ⚡ Launch 3D Drone & Room Walkthrough for {selectedEstate.title}
            </button>
          </div>
        )}

        {/* 3. TIME PRESET BUTTONS */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.8rem' }}>
          {presets.map((p) => {
            const isCurrent = Math.abs(timeHour - p.time) < 1.1;
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
                  padding: '0.55rem 1.3rem',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: isCurrent ? '#090c13' : 'rgba(255, 255, 255, 0.85)',
                  backgroundColor: isCurrent ? p.color : 'rgba(18, 25, 40, 0.75)',
                  border: isCurrent ? `1px solid ${p.color}` : '1px solid rgba(255, 255, 255, 0.12)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
              >
                {p.icon} {p.label}
              </button>
            );
          })}
        </div>

        {/* 4. REAL-LIFE SIMULATOR CANVAS VIEWPORT */}
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            position: 'relative',
            width: '100%',
            height: '630px',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.75)',
            backgroundColor: '#05070c',
            cursor: viewPerspective === 'drone' ? (isDroneDragging ? 'grabbing' : 'grab') : 'default',
            userSelect: 'none',
          }}
        >
          {/* Active Estate HD Image with dynamic day-to-night lighting & drone pan */}
          <div
            style={{
              position: 'absolute',
              inset: '-4%',
              width: '108%',
              height: '108%',
              transform: viewPerspective === 'drone' 
                ? `translate(${dronePan.x}px, ${dronePan.y}px) scale(${isDroneDragging ? 1.05 : 1.03})`
                : 'translate(0, 0) scale(1)',
              filter: lighting.filter,
              opacity: isPerspectiveSwitching ? 0.7 : 1,
              transition: isDroneDragging 
                ? 'none' 
                : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease, opacity 0.3s ease',
            }}
          >
            <img
              src={activeDisplayImage}
              alt={`${selectedEstate.title} Simulation`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                imageRendering: 'auto',
                filter: 'contrast(1.04) brightness(1.02)',
              }}
            />
          </div>

          {/* Dynamic Sky Light Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: lighting.gradient,
              transition: isPlaying ? 'none' : 'background 0.4s ease',
              pointerEvents: 'none',
              mixBlendMode: 'overlay',
            }}
          />

          {/* Smooth Moonlit Indigo Shadow Tint (No color-wheel distortion) */}
          {lighting.nightOverlayOpacity > 0 && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(10, 18, 42, 0.58) 0%, rgba(6, 10, 24, 0.72) 100%)',
                opacity: lighting.nightOverlayOpacity,
                pointerEvents: 'none',
                mixBlendMode: 'multiply',
                transition: isPlaying ? 'none' : 'opacity 0.4s ease',
              }}
            />
          )}

          {/* Realistic Architectural Interior & Pool Illumination (Warm Window Chandeliers & Pool LEDs) */}
          {nightLighting && lighting.poolGlowOpacity > 0 && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: lighting.poolGlowOpacity,
                background: viewPerspective === 'drone'
                  ? 'radial-gradient(circle at 52% 52%, rgba(255, 215, 140, 0.38) 0%, rgba(80, 230, 255, 0.28) 35%, transparent 55%)'
                  : `
                    radial-gradient(circle at 62% 66%, rgba(255, 215, 140, 0.45) 0%, transparent 40%),
                    radial-gradient(circle at 45% 78%, rgba(80, 230, 255, 0.48) 0%, transparent 38%)
                  `,
                mixBlendMode: 'screen',
                pointerEvents: 'none',
                transition: isPlaying ? 'none' : 'opacity 0.4s ease',
              }}
            />
          )}

          {/* Coastal Sea Mist Horizon Overlay */}
          {coastalMist && (
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '35%',
                background: 'linear-gradient(to top, rgba(147, 210, 250, 0.12) 0%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />
          )}

          {/* TOP OVERLAY: Active Estate Details & Perspective Toggle */}
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
              flexWrap: 'wrap',
              gap: '1rem',
              zIndex: 10,
            }}
          >
            {/* Estate Tag */}
            <div
              style={{
                backgroundColor: 'rgba(9, 12, 19, 0.85)',
                backdropFilter: 'blur(20px)',
                padding: '0.85rem 1.5rem',
                borderRadius: '18px',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem',
                pointerEvents: 'auto',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-gold-300)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 700 }}>
                <Eye size={13} /> LIVE 24H SIMULATION
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0, fontWeight: 400, fontFamily: 'var(--font-heading)' }}>
                {selectedEstate.title}
              </h3>
              <div style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                {selectedEstate.elevation} • {selectedEstate.orientation}
              </div>
            </div>

            {/* View Mode Toggle & Telemetry Pill */}
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', pointerEvents: 'auto', flexWrap: 'wrap' }}>
              {/* Perspective Switcher */}
              <div
                style={{
                  display: 'flex',
                  backgroundColor: 'rgba(9, 12, 19, 0.85)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '9999px',
                  padding: '0.25rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <button
                  onClick={() => handlePerspectiveChange('architecture')}
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: viewPerspective === 'architecture' ? '#090c13' : 'rgba(255, 255, 255, 0.75)',
                    backgroundColor: viewPerspective === 'architecture' ? 'var(--color-gold-400)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Camera size={13} /> Facade & Pools
                </button>
                <button
                  onClick={() => handlePerspectiveChange('drone')}
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: viewPerspective === 'drone' ? '#090c13' : 'rgba(255, 255, 255, 0.75)',
                    backgroundColor: viewPerspective === 'drone' ? 'var(--color-gold-400)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Compass size={13} /> 3D Drone View
                </button>
              </div>

              {/* Time Telemetry Pill */}
              <div
                style={{
                  backgroundColor: 'rgba(9, 12, 19, 0.85)',
                  backdropFilter: 'blur(20px)',
                  padding: '0.7rem 1.3rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
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
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.04em' }}>
                  {formatTime(timeHour)}
                </div>
                <span style={{ fontSize: '0.74rem', color: 'var(--color-gold-300)', borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '0.8rem' }}>
                  {lighting.phaseName} ({lighting.kelvin})
                </span>
              </div>
            </div>
          </div>

          {/* 3D DRONE FLIGHT TELEMETRY BANNER (Active only in 3D Drone View) */}
          {viewPerspective === 'drone' && (
            <div
              style={{
                position: 'absolute',
                top: '5.8rem',
                left: '1.5rem',
                right: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pointerEvents: 'none',
                zIndex: 8,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: 'rgba(9, 12, 19, 0.82)',
                  backdropFilter: 'blur(12px)',
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  fontSize: '0.72rem',
                  color: '#ffffff',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 8px #10b981',
                  }}
                />
                <span style={{ fontWeight: 700, letterSpacing: '0.05em' }}>3D DRONE AERIAL SCAN</span>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                <span style={{ color: 'var(--color-gold-300)' }}>ALT {selectedEstate.elevation}</span>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>{selectedEstate.orientation}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'rgba(9, 12, 19, 0.82)',
                  backdropFilter: 'blur(12px)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  fontSize: '0.7rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <Move size={12} color="var(--color-gold-400)" /> Click & Drag on Canvas to Pan Aerial View
              </div>
            </div>
          )}

          {/* BOTTOM OVERLAY: Interactive Player Bar */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              right: '1.5rem',
              backgroundColor: 'rgba(9, 12, 19, 0.88)',
              backdropFilter: 'blur(24px)',
              borderRadius: '22px',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              padding: '1.25rem 1.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.65)',
              zIndex: 10,
            }}
          >
            {/* Timeline Slider Track */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', width: '48px' }}>12:00 AM</span>
              <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
                <input
                  type="range"
                  min="0"
                  max="24"
                  step="0.05"
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
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', width: '48px', textAlign: 'right' }}>11:59 PM</span>
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
                    gap: '0.55rem',
                    backgroundColor: isPlaying ? 'var(--color-gold-400)' : '#ffffff',
                    color: '#090c13',
                    padding: '0.6rem 1.4rem',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: 'none',
                  }}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  {isPlaying ? 'Pause Simulation' : 'PLAY 24H CYCLE'}
                </button>

                <button
                  onClick={() => {
                    setTimeHour(18.25);
                    setIsPlaying(false);
                  }}
                  title="Reset to Golden Hour"
                  style={{
                    width: '36px',
                    height: '36px',
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
                  <RotateCcw size={15} />
                </button>

                {/* Speed Selector */}
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
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
                        padding: '0.3rem 0.7rem',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        color: playSpeed === spd ? '#090c13' : 'rgba(255, 255, 255, 0.75)',
                        backgroundColor: playSpeed === spd ? '#ffffff' : 'transparent',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: 'none',
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
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    color: nightLighting ? 'var(--color-gold-300)' : 'rgba(255,255,255,0.45)',
                    backgroundColor: nightLighting ? 'rgba(229, 176, 131, 0.15)' : 'rgba(255,255,255,0.05)',
                    border: nightLighting ? '1px solid rgba(229, 176, 131, 0.45)' : '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                  }}
                >
                  💡 Architectural Lights: {nightLighting ? 'ON' : 'OFF'}
                </button>

                <button
                  onClick={() => setCoastalMist(!coastalMist)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    color: coastalMist ? '#93d2fa' : 'rgba(255,255,255,0.45)',
                    backgroundColor: coastalMist ? 'rgba(147, 210, 250, 0.15)' : 'rgba(255,255,255,0.05)',
                    border: coastalMist ? '1px solid rgba(147, 210, 250, 0.45)' : '1px solid rgba(255,255,255,0.1)',
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
                    gap: '0.45rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    color: isAudioActive ? 'var(--color-gold-300)' : 'rgba(255,255,255,0.55)',
                    backgroundColor: isAudioActive ? 'rgba(229, 176, 131, 0.2)' : 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    cursor: 'pointer',
                  }}
                >
                  {isAudioActive ? <Volume2 size={14} /> : <VolumeX size={14} />}
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
