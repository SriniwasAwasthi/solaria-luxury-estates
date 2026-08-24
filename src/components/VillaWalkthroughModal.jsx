import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Play, Pause, RotateCcw, 
  Volume2, VolumeX, Layers, Car, Sparkles, 
  Maximize2, Minimize2, Move, CheckCircle2, ArrowLeft, ArrowRight
} from 'lucide-react';
import { estatesData } from '../data/estates';

export const VillaWalkthroughModal = ({ isOpen, onClose, initialEstate = null }) => {
  const [selectedEstateState, setSelectedEstateState] = useState(initialEstate || estatesData[1]);
  const [prevInitial, setPrevInitial] = useState(initialEstate);

  if (initialEstate && initialEstate !== prevInitial) {
    setPrevInitial(initialEstate);
    setSelectedEstateState(initialEstate);
  }

  const selectedEstate = selectedEstateState;
  const setSelectedEstate = setSelectedEstateState;

  const [currentStageIndex, setCurrentStageIndex] = useState(0); // 0 to 7
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1);
  const [panAngle, setPanAngle] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [doorOpenProgress, setDoorOpenProgress] = useState(1); // 0 (closed) to 1 (fully open)

  const viewportRef = useRef(null);
  const stageTrackRef = useRef(null);
  const audioCtxRef = useRef(null);

  const stages = useMemo(() => selectedEstate.walkthroughStages || [], [selectedEstate]);
  const currentStage = stages[currentStageIndex] || stages[0];

  // Auto-scroll active stage node into view in the bottom bar whenever it changes
  useEffect(() => {
    const el = document.getElementById(`stage-node-${currentStageIndex}`);
    if (el && stageTrackRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [currentStageIndex]);

  // Zero-Latency Stage Image Preloader
  useEffect(() => {
    if (stages && stages.length > 0) {
      stages.forEach((st) => {
        if (st.image) {
          const img = new Image();
          img.src = st.image;
        }
      });
    }
  }, [selectedEstate, stages]);

  // Keyboard navigation (Arrow keys to move through stages)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setCurrentStageIndex((prev) => Math.min(stages.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrentStageIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, stages.length, onClose]);

  // Auto-play walkthrough loop
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStageIndex((prev) => {
          if (prev >= stages.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, 3500 / playSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playSpeed, stages.length]);

  // Handle door animation effect when entering door stage
  useEffect(() => {
    let timer;
    if (currentStage?.id === 'doors') {
      timer = setTimeout(() => {
        setDoorOpenProgress(1);
      }, 100);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentStageIndex, currentStage?.id]);

  // Mouse wheel scroll navigation through rooms
  const handleWheel = (e) => {
    e.preventDefault();
    if (Math.abs(e.deltaY) > 20) {
      if (e.deltaY > 0) {
        // Scroll forward
        setCurrentStageIndex((prev) => Math.min(stages.length - 1, prev + 1));
      } else {
        // Scroll backward
        setCurrentStageIndex((prev) => Math.max(0, prev - 1));
      }
    }
  };

  // 360 Pan drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panAngle.x, y: e.clientY - panAngle.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = Math.max(-30, Math.min(30, e.clientY - dragStart.y));
    setPanAngle({ x: newX * 0.45, y: newY * 0.25 });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetPan = () => {
    setPanAngle({ x: 0, y: 0 });
  };

  const scrollStageTrack = (direction) => {
    if (stageTrackRef.current) {
      stageTrackRef.current.scrollBy({
        left: direction === 'left' ? -260 : 260,
        behavior: 'smooth',
      });
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (viewportRef.current) {
        viewportRef.current.requestFullscreen?.();
        setIsFullscreen(true);
      }
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Soundscape
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
          filter.frequency.setValueAtTime(350, ctx.currentTime);
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

  // Distinct tone filters per villa
  const getVillaToneFilter = (estateId) => {
    switch (estateId) {
      case 'villa-horizon':
        return 'contrast(1.08) saturate(1.15) brightness(1.03)';
      case 'solaria-sanctuary':
        return 'contrast(1.1) saturate(1.22) brightness(1.05) sepia(0.04)';
      case 'palazzo-di-mare':
        return 'contrast(1.14) saturate(1.2) brightness(1.02) sepia(0.06)';
      case 'villa-azure-heights':
        return 'contrast(1.08) saturate(1.28) brightness(1.08) hue-rotate(4deg)';
      case 'bellavista-cliff-sanctuary':
        return 'contrast(1.1) saturate(1.18) brightness(1.04) hue-rotate(-6deg)';
      case 'riviera-sky-penthouse':
        return 'contrast(1.18) saturate(1.12) brightness(1.02) hue-rotate(185deg)';
      case 'celestial-crown-penthouse':
        return 'contrast(1.12) saturate(1.25) brightness(1.06) sepia(0.05)';
      case 'monaco-grand-sky-manor':
        return 'contrast(1.16) saturate(1.15) brightness(1.02) hue-rotate(180deg)';
      case 'lumina-cliff-penthouse':
        return 'contrast(1.09) saturate(1.24) brightness(1.08) hue-rotate(-4deg)';
      default:
        return 'none';
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        backgroundColor: 'rgba(5, 8, 14, 0.97)',
        backdropFilter: 'blur(25px)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 0.3s ease forwards',
        color: '#ffffff',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* 1. TOP STATUS & NAVIGATION BAR */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.85rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          backgroundColor: 'rgba(9, 12, 19, 0.95)',
          zIndex: 20,
          flexWrap: 'wrap',
          gap: '0.8rem',
        }}
      >
        {/* Left: Active Villa Title & Residence Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold-400)', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              <Sparkles size={13} /> 3D DRONE & ROOM WALKTHROUGH SIMULATOR
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 400, color: '#ffffff', margin: '0.1rem 0 0 0' }}>
              {selectedEstate.title}
            </h2>
          </div>

          {/* Quick Villa Dropdown Selector */}
          <select
            value={selectedEstate.id}
            onChange={(e) => {
              const target = estatesData.find((est) => est.id === e.target.value);
              if (target) {
                setSelectedEstate(target);
                setCurrentStageIndex(0);
                resetPan();
              }
            }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: 'var(--color-gold-300)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '9999px',
              padding: '0.45rem 1rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {estatesData.map((est) => (
              <option key={est.id} value={est.id} style={{ backgroundColor: '#090c13', color: '#ffffff' }}>
                {est.title} ({est.category})
              </option>
            ))}
          </select>
        </div>

        {/* Center: Stage Title & Floor Level Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div
            style={{
              backgroundColor: 'rgba(229, 176, 131, 0.15)',
              border: '1px solid rgba(229, 176, 131, 0.35)',
              color: 'var(--color-gold-300)',
              padding: '0.35rem 0.9rem',
              borderRadius: '9999px',
              fontSize: '0.72rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            <Layers size={13} /> {currentStage.floor}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
            Stage {currentStageIndex + 1} of {stages.length}: <span style={{ color: '#ffffff', fontWeight: 600 }}>{currentStage.title}</span>
          </div>
        </div>

        {/* Right: Actions (Audio, Fullscreen, Close) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button
            onClick={toggleAudio}
            title="Toggle Ambient Audio"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.9rem',
              borderRadius: '9999px',
              backgroundColor: isAudioActive ? 'rgba(229, 176, 131, 0.2)' : 'rgba(255, 255, 255, 0.08)',
              color: isAudioActive ? 'var(--color-gold-300)' : '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.75rem',
              cursor: 'pointer',
            }}
          >
            {isAudioActive ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span>{isAudioActive ? 'Sound ON' : 'Sound OFF'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            title="Toggle Fullscreen"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>

          <button
            onClick={onClose}
            title="Close Simulator"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 80, 80, 0.2)',
              color: '#ff7777',
              border: '1px solid rgba(255, 80, 80, 0.4)',
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

      {/* 2. MAIN SIMULATION VIEWPORT (Scroll & 360 Drag Area) */}
      <div
        ref={viewportRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          position: 'relative',
          flex: 1,
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          backgroundColor: '#05070c',
        }}
      >
        {/* Rendered Room / Drone Camera Image with distinct villa tone filter */}
        <div
          style={{
            position: 'absolute',
            inset: '-5%',
            width: '110%',
            height: '110%',
            transform: `translate(${panAngle.x}px, ${panAngle.y}px) scale(${isDragging ? 1.03 : 1.05})`,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            filter: getVillaToneFilter(selectedEstate.id),
          }}
        >
          <img
            src={currentStage.image}
            alt={currentStage.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Vignette & Ambient Light Overlays */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(5, 8, 14, 0.55) 90%),
                linear-gradient(to bottom, rgba(5, 8, 14, 0.35) 0%, transparent 20%, transparent 75%, rgba(5, 8, 14, 0.85) 100%)
              `,
              pointerEvents: 'none',
            }}
          />

          {/* 3D DOUBLE DOORS OPENING ANIMATION OVERLAY (Active on Stage 3) */}
          {currentStage.id === 'doors' && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                pointerEvents: 'none',
                perspective: '1200px',
                zIndex: 10,
              }}
            >
              {/* Left Door */}
              <div
                style={{
                  flex: 1,
                  height: '100%',
                  background: 'linear-gradient(to right, #1f1610 0%, #3d2c1e 70%, #150f0a 100%)',
                  borderRight: '2px solid rgba(229, 176, 131, 0.6)',
                  boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8), 20px 0 50px rgba(0,0,0,0.7)',
                  transformOrigin: 'left center',
                  transform: `rotateY(${-doorOpenProgress * 95}deg)`,
                  transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '2rem',
                }}
              >
                <div style={{ width: '12px', height: '60px', borderRadius: '6px', background: 'var(--color-gold-400)', boxShadow: '0 0 15px rgba(229,176,131,0.6)' }} />
              </div>

              {/* Right Door */}
              <div
                style={{
                  flex: 1,
                  height: '100%',
                  background: 'linear-gradient(to left, #1f1610 0%, #3d2c1e 70%, #150f0a 100%)',
                  borderLeft: '2px solid rgba(229, 176, 131, 0.6)',
                  boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8), -20px 0 50px rgba(0,0,0,0.7)',
                  transformOrigin: 'right center',
                  transform: `rotateY(${doorOpenProgress * 95}deg)`,
                  transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingLeft: '2rem',
                }}
              >
                <div style={{ width: '12px', height: '60px', borderRadius: '6px', background: 'var(--color-gold-400)', boxShadow: '0 0 15px rgba(229,176,131,0.6)' }} />
              </div>

              {/* Door Light Burst Glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 50% 50%, rgba(255, 230, 180, 0.4) 0%, transparent 65%)',
                  opacity: doorOpenProgress,
                  transition: 'opacity 1.2s ease',
                  mixBlendMode: 'screen',
                }}
              />
            </div>
          )}
        </div>

        {/* FLOATING TOP-LEFT: Interactive Room / Drone Telemetry */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            maxWidth: '440px',
            backgroundColor: 'rgba(9, 12, 19, 0.88)',
            backdropFilter: 'blur(16px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '1.3rem 1.6rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            pointerEvents: 'auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-gold-300)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
              {currentStage.subtitle}
            </span>
            <span style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)' }}>
              {selectedEstate.elevation}
            </span>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 400, color: '#ffffff', margin: '0 0 0.4rem 0' }}>
            {currentStage.title}
          </h3>

          <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: '0 0 0.8rem 0' }}>
            {currentStage.desc}
          </p>

          {/* Contextual Badges: Supercars or Room Features */}
          {currentStage.id === 'motorcourt' && selectedEstate.supercars && (
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--color-gold-300)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                <Car size={13} /> Parked Hypercar Collection
              </div>
              {selectedEstate.supercars.map((car, idx) => (
                <div key={idx} style={{ fontSize: '0.76rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                  <CheckCircle2 size={12} color="var(--color-gold-400)" /> {car}
                </div>
              ))}
            </div>
          )}

          {currentStage.id !== 'motorcourt' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {selectedEstate.features.slice(0, 3).map((feat, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '9999px',
                    padding: '0.25rem 0.65rem',
                    fontSize: '0.7rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {feat}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* FLOATING TOP-RIGHT: 360° Drag & Scroll Guidance Pill */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(9, 12, 19, 0.88)',
              backdropFilter: 'blur(16px)',
              borderRadius: '9999px',
              padding: '0.55rem 1.2rem',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <Move size={14} color="var(--color-gold-400)" />
            <span>Drag for 360° Pan</span>
            <span style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '0.8rem', color: 'var(--color-gold-300)' }}>
              Scroll Wheel / Arrow Keys to Fly
            </span>
          </div>

          {(panAngle.x !== 0 || panAngle.y !== 0) && (
            <button
              onClick={resetPan}
              style={{
                backgroundColor: 'rgba(229, 176, 131, 0.2)',
                border: '1px solid rgba(229, 176, 131, 0.4)',
                color: 'var(--color-gold-300)',
                borderRadius: '9999px',
                padding: '0.35rem 0.8rem',
                fontSize: '0.7rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer',
              }}
            >
              <RotateCcw size={12} /> Reset 360 Angle
            </button>
          )}
        </div>

        {/* SIDE ARROWS: Previous & Next Room Flight */}
        <button
          onClick={() => setCurrentStageIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentStageIndex === 0}
          aria-label="Previous Stage"
          style={{
            position: 'absolute',
            left: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(9, 12, 19, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: currentStageIndex === 0 ? 'rgba(255, 255, 255, 0.2)' : '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentStageIndex === 0 ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 15,
          }}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={() => setCurrentStageIndex((prev) => Math.min(stages.length - 1, prev + 1))}
          disabled={currentStageIndex === stages.length - 1}
          aria-label="Next Stage"
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(9, 12, 19, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: currentStageIndex === stages.length - 1 ? 'rgba(255, 255, 255, 0.2)' : '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentStageIndex === stages.length - 1 ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 15,
          }}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* 3. BOTTOM CONTROL DOCK & HORIZONTALLY SCROLLABLE STAGE STRIP */}
      <div
        style={{
          padding: '0.85rem 1.5rem 1.2rem 1.5rem',
          backgroundColor: 'rgba(9, 12, 19, 0.97)',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          zIndex: 20,
        }}
      >
        {/* Horizontally Scrollable Stage Nodes Strip with Dedicated Left/Right Scroll Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', width: '100%', position: 'relative' }}>
          <button
            onClick={() => scrollStageTrack('left')}
            aria-label="Scroll Stages Left"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <ChevronLeft size={16} />
          </button>

          {/* Scrollable Stage Nodes Track (Guarantees all 8/9 stages are 100% visible and accessible) */}
          <div
            ref={stageTrackRef}
            onWheel={(e) => {
              if (stageTrackRef.current) {
                stageTrackRef.current.scrollLeft += e.deltaY;
              }
            }}
            style={{
              display: 'flex',
              gap: '0.6rem',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              scrollSnapType: 'x mandatory',
              flex: 1,
              padding: '0.2rem 0',
            }}
          >
            {stages.map((stg, idx) => {
              const isActive = currentStageIndex === idx;
              return (
                <button
                  key={stg.id}
                  id={`stage-node-${idx}`}
                  onClick={() => {
                    setCurrentStageIndex(idx);
                    setIsPlaying(false);
                    resetPan();
                  }}
                  style={{
                    flex: '0 0 auto',
                    minWidth: '155px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0.55rem 0.85rem',
                    borderRadius: '12px',
                    backgroundColor: isActive ? 'rgba(229, 176, 131, 0.22)' : 'rgba(255, 255, 255, 0.06)',
                    border: isActive ? '1.5px solid var(--color-gold-400)' : '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    textAlign: 'left',
                    scrollSnapAlign: 'center',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: isActive ? 'var(--color-gold-300)' : 'rgba(255, 255, 255, 0.5)' }}>
                      0{idx + 1}
                    </span>
                    <span style={{ fontSize: '0.62rem', color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', fontWeight: 600 }}>
                      {stg.floor}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: isActive ? 600 : 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                    {stg.title}
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scrollStageTrack('right')}
            aria-label="Scroll Stages Right"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Bottom Bar: Auto Tour Playback Controls & Level Teleport */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.8rem' }}>
          {/* Play/Pause & Prev/Next */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: isPlaying ? 'var(--color-gold-400)' : '#ffffff',
                color: '#090c13',
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              {isPlaying ? 'Pause Auto Drone' : 'Auto Drone Walkthrough'}
            </button>

            <div
              style={{
                display: 'flex',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '9999px',
                padding: '0.15rem',
              }}
            >
              {[1, 2].map((spd) => (
                <button
                  key={spd}
                  onClick={() => setPlaySpeed(spd)}
                  style={{
                    padding: '0.2rem 0.55rem',
                    borderRadius: '9999px',
                    fontSize: '0.68rem',
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

            {/* Quick Step Buttons */}
            <button
              onClick={() => setCurrentStageIndex((p) => Math.max(0, p - 1))}
              disabled={currentStageIndex === 0}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.7rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: currentStageIndex === 0 ? 'rgba(255,255,255,0.3)' : '#ffffff',
                cursor: currentStageIndex === 0 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <ArrowLeft size={12} /> Prev Room
            </button>

            <button
              onClick={() => setCurrentStageIndex((p) => Math.min(stages.length - 1, p + 1))}
              disabled={currentStageIndex === stages.length - 1}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.7rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: currentStageIndex === stages.length - 1 ? 'rgba(255,255,255,0.3)' : '#ffffff',
                cursor: currentStageIndex === stages.length - 1 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              Next Room <ArrowRight size={12} />
            </button>
          </div>

          {/* Quick Floor Teleport Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Teleport Level:
            </span>
            {[
              { label: 'Ground & Court', stage: 1 },
              { label: 'Foyer & Gallery', stage: 3 },
              { label: 'Chef Kitchen', stage: 4 },
              { label: 'Infinity Pool', stage: 5 },
              { label: '1st Floor Master', stage: 6 },
              { label: '2nd Floor Sky Lounge', stage: 7 },
            ].map((lvl, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentStageIndex(lvl.stage);
                  setIsPlaying(false);
                  resetPan();
                }}
                style={{
                  backgroundColor: currentStageIndex === lvl.stage ? 'var(--color-gold-400)' : 'rgba(255, 255, 255, 0.06)',
                  color: currentStageIndex === lvl.stage ? '#090c13' : 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '9999px',
                  padding: '0.3rem 0.7rem',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
