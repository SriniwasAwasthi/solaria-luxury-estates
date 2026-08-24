import React, { useEffect, useRef, useState } from 'react';

export const HeroCanvas = ({ scrollProgress = 0, onLoaded }) => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const currentFrameRef = useRef(0);
  const animationFrameRef = useRef(null);

  const TOTAL_FRAMES = 150;

  // Preload all 150 frames into memory
  useEffect(() => {
    let count = 0;
    const loadedImages = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/assets/hero_frames/frame_${frameNum}.jpg`;

      img.onload = () => {
        count++;
        if (count === TOTAL_FRAMES) {
          setIsFullyLoaded(true);
          if (onLoaded) onLoaded();
        }
      };

      img.onerror = () => {
        // Fallback gracefully if single frame fails
        count++;
        if (count === TOTAL_FRAMES) {
          setIsFullyLoaded(true);
          if (onLoaded) onLoaded();
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;
  }, [onLoaded]);

  // Draw current frame onto canvas with responsive aspect ratio mapping
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;

    const img = imagesRef.current[Math.min(Math.max(0, Math.floor(frameIndex)), TOTAL_FRAMES - 1)];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Calculate aspect ratio covering container (cover mode)
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let renderWidth, renderHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderWidth = canvasWidth;
      renderHeight = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - renderHeight) / 2;
    } else {
      renderWidth = canvasHeight * imgRatio;
      renderHeight = canvasHeight;
      offsetX = (canvasWidth - renderWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
        canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
        drawFrame(currentFrameRef.current);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth frame interpolation (LERP) bound to scrollProgress
  useEffect(() => {
    const targetFrame = scrollProgress * (TOTAL_FRAMES - 1);

    const updateLoop = () => {
      const diff = targetFrame - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.18; // smooth LERP velocity
        drawFrame(currentFrameRef.current);
        animationFrameRef.current = requestAnimationFrame(updateLoop);
      } else {
        currentFrameRef.current = targetFrame;
        drawFrame(currentFrameRef.current);
      }
    };

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollProgress, isFullyLoaded]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: '#090c13',
      }}
    >

      {/* Canvas Element */}
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover',
          filter: 'brightness(0.92) contrast(1.05)',
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
    </div>
  );
};
