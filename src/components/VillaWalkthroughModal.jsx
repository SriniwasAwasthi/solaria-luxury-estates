import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Play, Pause, RotateCcw, 
  Volume2, VolumeX, Layers, Car, Sparkles, 
  Maximize2, Minimize2, Move, CheckCircle2, Navigation,
  Compass, Radio, Video, Eye, MapPin, ArrowRight
} from 'lucide-react';
import { estatesData } from '../data/estates';

export const VillaWalkthroughModal = ({ isOpen, onClose, initialEstate = null }) => {
  const [selectedEstateState, setSelectedEstateState] = useState(initialEstate || estatesData[1]);
  const [currentStageIndex, setCurrentStageIndex] = useState(0); // 0 to 7
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1);
  const [panAngle, setPanAngle] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [doorOpenProgress, setDoorOpenProgress] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [droneTelemetry, setDroneTelemetry] = useState({ alt: 210, speed: 22.4, pitch: -14.2, heading: 284 });

  const viewportRef = useRef(null);
  const stageTrackRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Synchronize on modal open or estate switch
  useEffect(() => {
    if (isOpen) {
      if (initialEstate) {
        setSelectedEstateState(initialEstate);
      }
      setCurrentStageIndex(0);
      setPanAngle({ x: 0, y: 0 });
      setIsPlaying(false);
      setDoorOpenProgress(1);
      setIsTransitioning(false);
    }
  }, [isOpen, initialEstate]);

  const selectedEstate = selectedEstateState;
  const setSelectedEstate = setSelectedEstateState;

  const stages = useMemo(() => selectedEstate.walkthroughStages || [], [selectedEstate]);
  const currentStage = stages[currentStageIndex] || stages[0];
  const isDroneStage = currentStage?.id === 'aerial' || currentStage?.floor?.toLowerCase().includes('drone');

  // Real-time drone flight telemetry oscillation (creates lifelike drone hovering feel)
  useEffect(() => {
    let animId;
    if (isOpen && isDroneStage) {
      const updateTelemetry = (now) => {
        const t = now / 1000;
        setDroneTelemetry({
          alt: Math.round(210 + Math.sin(t * 0.8) * 3),
          speed: +(22.4 + Math.sin(t * 1.2) * 1.8).toFixed(1),
          pitch: +(-14.2 + Math.cos(t * 0.9) * 1.5).toFixed(1),
          heading: Math.round(284 + Math.sin(t * 0.5) * 4),
        });
        animId = requestAnimationFrame(updateTelemetry);
      };
      animId = requestAnimationFrame(updateTelemetry);
    }
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isOpen, isDroneStage]);

  // Navigate to stage with smooth 3D camera warp transition
  const navigateToStage = (idx) => {
    if (idx === currentStageIndex || idx < 0 || idx >= stages.length) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStageIndex(idx);
      setPanAngle({ x: 0, y: 0 });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 350);
    }, 250);
  };

  // Auto-scroll active stage node in bottom strip
  useEffect(() => {
    const el = document.getElementById(`walkthrough-node-${currentStageIndex}`);
    if (el && stageTrackRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [currentStageIndex]);

  // Zero-latency image preloading
  useEffect(() => {
    if (stages && stages.length > 0) {
      stages.forEach((st) => {
        if (st.image) {
          const img = new Image();
          img.src = st.image;
        }
      });
    }
  }, [stages]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        navigateToStage(Math.min(stages.length - 1, currentStageIndex + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        navigateToStage(Math.max(0, currentStageIndex - 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, stages.length, currentStageIndex, onClose]);

  // Auto drone walkthrough cycle loop
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        navigateToStage(currentStageIndex >= stages.length - 1 ? 0 : currentStageIndex + 1);
      }, 4200 / playSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playSpeed, stages.length, currentStageIndex]);

  // Mouse wheel room navigation
  const handleWheel = (e) => {
    e.preventDefault();
    if (Math.abs(e.deltaY) > 25 && !isTransitioning) {
      if (e.deltaY > 0) {
        navigateToStage(Math.min(stages.length - 1, currentStageIndex + 1));
      } else {
        navigateToStage(Math.max(0, currentStageIndex - 1));
      }
    }
  };

  // 360-degree Pan drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panAngle.x, y: e.clientY - panAngle.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = Math.max(-25, Math.min(25, e.clientY - dragStart.y));
    setPanAngle({ x: newX * 0.45, y: newY * 0.25 });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetPan = () => {
    setPanAngle({ x: 0, y: 0 });
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

  // Realistic coastal ocean wind & wave audio synthesis
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

  // Interactive 3D Spatial Radar Hotspots per stage
  const getStageHotspots = () => {
    switch (currentStage?.id) {
      case 'aerial':
        return [
          { label: 'Fly to Motor Court & Hypercars', targetIndex: 1, top: '56%', left: '38%' },
          { label: 'Dive to Heated Infinity Pools', targetIndex: 5, top: '68%', left: '55%' },
          { label: 'Ascend to Rooftop Sky Belvedere', targetIndex: 7, top: '38%', left: '62%' },
        ];
      case 'motorcourt':
        return [
          { label: 'Step Through Grand Bronze Doors', targetIndex: 2, top: '52%', left: '50%' },
          { label: 'Aerial Drone Orbit View', targetIndex: 0, top: '25%', left: '25%' },
        ];
      case 'doors':
        return [
          { label: 'Enter Grand Foyer & Art Gallery', targetIndex: 3, top: '50%', left: '50%' },
          { label: 'Back to Motor Court', targetIndex: 1, top: '80%', left: '20%' },
        ];
      case 'foyer':
        return [
          { label: "Gourmet Chef's Kitchen", targetIndex: 4, top: '58%', left: '25%' },
          { label: 'Step to Infinity Pool Terrace', targetIndex: 5, top: '62%', left: '72%' },
          { label: 'Ascend to Master Suite (1st Floor)', targetIndex: 6, top: '36%', left: '52%' },
        ];
      case 'kitchen':
        return [
          { label: 'Step to Infinity Pool Terrace', targetIndex: 5, top: '55%', left: '78%' },
          { label: 'Return to Grand Foyer', targetIndex: 3, top: '60%', left: '20%' },
        ];
      case 'pool':
        return [
          { label: 'Ascend to 1st Floor Master Suite', targetIndex: 6, top: '32%', left: '42%' },
          { label: 'Enter Chef Kitchen & Dining', targetIndex: 4, top: '55%', left: '22%' },
          { label: 'Aerial Drone Scan Over Sea', targetIndex: 0, top: '25%', left: '78%' },
        ];
      case 'master':
        return [
          { label: 'Ascend to 2nd Floor Sky Lounge', targetIndex: 7, top: '32%', left: '68%' },
          { label: 'Descend to Grand Foyer', targetIndex: 3, top: '70%', left: '25%' },
        ];
      case 'skylounge':
        return [
          { label: 'Panoramic 3D Drone Orbit', targetIndex: 0, top: '30%', left: '30%' },
          { label: 'Descend to Master Suite', targetIndex: 6, top: '75%', left: '50%' },
        ];
      default:
        return [];
    }
  };

  if (!isOpen) return null;

  const hotspots = getStageHotspots();

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 400,
        backgroundColor: 'rgba(5, 8, 14, 0.98)',
        backdropFilter: 'blur(30px)',
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
          zIndex: 30,
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
            <h2 style={{ fontSize: '1.35rem', fontWeight: 400, color: '#ffffff', margin: '0.1rem 0 0 0', fontFamily: 'var(--font-heading)' }}>
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
              fontSize: '0.76rem',
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
          <div style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
            Stage {currentStageIndex + 1} of {stages.length}: <span style={{ color: '#ffffff', fontWeight: 600 }}>{currentStage.title}</span>
          </div>
        </div>

        {/* Right: Actions (Audio, Fullscreen, Close) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button
            onClick={toggleAudio}
            title="Toggle Coastal Ocean Audio"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.95rem',
              borderRadius: '9999px',
              backgroundColor: isAudioActive ? 'rgba(229, 176, 131, 0.2)' : 'rgba(255, 255, 255, 0.08)',
              color: isAudioActive ? 'var(--color-gold-300)' : '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.75rem',
              cursor: 'pointer',
            }}
          >
            {isAudioActive ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span>{isAudioActive ? 'Ocean Sound ON' : 'Ocean Sound OFF'}</span>
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
            title="Exit Simulator"
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

      {/* 2. MAIN 3D SIMULATION VIEWPORT */}
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
        {/* Rendered 3D Camera Image with smooth warp transition & pan */}
        <div
          style={{
            position: 'absolute',
            inset: '-5%',
            width: '110%',
            height: '110%',
            transform: `translate(${panAngle.x}px, ${panAngle.y}px) scale(${isTransitioning ? 1.12 : isDragging ? 1.03 : 1.05})`,
            filter: isTransitioning ? 'blur(6px) brightness(1.1)' : 'none',
            opacity: isTransitioning ? 0.65 : 1,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease, opacity 0.35s ease',
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

          {/* Cinematic Vignette */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(5, 8, 14, 0.55) 90%),
                linear-gradient(to bottom, rgba(5, 8, 14, 0.35) 0%, transparent 20%, transparent 75%, rgba(5, 8, 14, 0.85) 100%)
              `,
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* 3D DRONE FLIGHT HUD OVERLAY (Active on Drone Stage) */}
        {isDroneStage && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem 3rem',
            }}
          >
            {/* Top HUD: Recording status & GPS Telemetry */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: 'rgba(9, 12, 19, 0.75)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                }}
              >
                <span
                  style={{
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: '#ef4444',
                    boxShadow: '0 0 10px #ef4444',
                    animation: 'pulseGlow 1.5s infinite',
                  }}
                />
                <span style={{ fontWeight: 700 }}>● REC 4K UHD 60FPS</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 0.2rem' }}>|</span>
                <span style={{ color: 'var(--color-gold-300)' }}>GPS CINEMATIC ORBIT</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  backgroundColor: 'rgba(9, 12, 19, 0.75)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.45rem 1.2rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontFamily: 'monospace',
                }}
              >
                <span>ALT: <strong style={{ color: 'var(--color-gold-300)' }}>{droneTelemetry.alt}M</strong></span>
                <span>SPD: <strong style={{ color: '#10b981' }}>{droneTelemetry.speed} KTS</strong></span>
                <span>GIMBAL: <strong style={{ color: '#93d2fa' }}>{droneTelemetry.pitch}°</strong></span>
                <span>HDG: <strong style={{ color: '#ffffff' }}>{droneTelemetry.heading}°</strong></span>
              </div>
            </div>

            {/* Center HUD: Drone Optical Gimbal Crosshair */}
            <div
              style={{
                alignSelf: 'center',
                width: '140px',
                height: '140px',
                border: '1px dashed rgba(229, 176, 131, 0.35)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div style={{ width: '16px', height: '1px', backgroundColor: 'var(--color-gold-400)' }} />
              <div style={{ height: '16px', width: '1px', backgroundColor: 'var(--color-gold-400)', position: 'absolute' }} />
            </div>

            {/* Bottom HUD: Signal & Lat/Long Coordinates */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>
                COORDINATES: 40°33'14"N 14°14'38"E • FARAGLIONI AIRSPACE CORRIDOR
              </div>
              <div style={{ fontSize: '0.72rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Radio size={12} /> 5.8GHz TELEMETRY LINK ACTIVE (98%)
              </div>
            </div>
          </div>
        )}

        {/* 3D SPATIAL RADAR HOTSPOTS (Clickable In-Scene Teleport Pins) */}
        {!isTransitioning && hotspots.map((spot, idx) => (
          <button
            key={idx}
            onClick={() => navigateToStage(spot.targetIndex)}
            style={{
              position: 'absolute',
              top: spot.top,
              left: spot.left,
              transform: 'translate(-50%, -50%)',
              zIndex: 20,
              backgroundColor: 'rgba(9, 12, 19, 0.88)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid var(--color-gold-400)',
              color: '#ffffff',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(229, 176, 131, 0.4)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.08)';
              e.currentTarget.style.backgroundColor = 'var(--color-gold-400)';
              e.currentTarget.style.color = '#090c13';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
              e.currentTarget.style.backgroundColor = 'rgba(9, 12, 19, 0.88)';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <MapPin size={14} color="var(--color-gold-400)" />
            <span>{spot.label}</span>
            <ArrowRight size={13} />
          </button>
        ))}

        {/* FLOATING TOP-LEFT: Room / Drone Details Panel */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            maxWidth: '430px',
            backgroundColor: 'rgba(9, 12, 19, 0.88)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            padding: '1.3rem 1.6rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.65)',
            pointerEvents: 'auto',
            zIndex: 15,
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

          <h3 style={{ fontSize: '1.3rem', fontWeight: 400, color: '#ffffff', margin: '0 0 0.4rem 0', fontFamily: 'var(--font-heading)' }}>
            {currentStage.title}
          </h3>

          <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, margin: '0 0 0.8rem 0' }}>
            {currentStage.desc}
          </p>

          {/* Contextual Badges: Hypercars or Suite Features */}
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
            zIndex: 15,
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
              Click Hotspots or Arrows to Fly
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
          onClick={() => navigateToStage(currentStageIndex - 1)}
          disabled={currentStageIndex === 0}
          aria-label="Previous Stage"
          style={{
            position: 'absolute',
            left: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
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
            zIndex: 25,
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => navigateToStage(currentStageIndex + 1)}
          disabled={currentStageIndex === stages.length - 1}
          aria-label="Next Stage"
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
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
            zIndex: 25,
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* 3. BOTTOM CONTROL DOCK & STAGE TRACK */}
      <div
        style={{
          padding: '0.85rem 1.8rem 1.2rem 1.8rem',
          backgroundColor: 'rgba(9, 12, 19, 0.98)',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          zIndex: 30,
        }}
      >
        {/* Horizontally Scrollable Stage Nodes Strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', width: '100%', position: 'relative' }}>
          <button
            onClick={() => stageTrackRef.current?.scrollBy({ left: -260, behavior: 'smooth' })}
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

          {/* Scrollable Stage Nodes Track */}
          <div
            ref={stageTrackRef}
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
                  id={`walkthrough-node-${idx}`}
                  onClick={() => {
                    navigateToStage(idx);
                    setIsPlaying(false);
                  }}
                  style={{
                    flex: '0 0 auto',
                    minWidth: '165px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0.55rem 0.9rem',
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
            onClick={() => stageTrackRef.current?.scrollBy({ left: 260, behavior: 'smooth' })}
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

        {/* Bottom Bar: Auto Tour Playback Controls & Speed */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: isPlaying ? 'var(--color-gold-400)' : '#ffffff',
                color: '#090c13',
                padding: '0.5rem 1.3rem',
                borderRadius: '9999px',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.2s ease',
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
                    padding: '0.25rem 0.6rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
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

          <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Navigation size={12} color="var(--color-gold-400)" />
            <span>Click any Radar Pin to Fly Directly to That Room</span>
          </div>
        </div>
      </div>
    </div>
  );
};
