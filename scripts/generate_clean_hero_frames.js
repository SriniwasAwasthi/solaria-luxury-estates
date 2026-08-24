import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const publicFramesDir = path.join(rootDir, 'public', 'assets', 'hero_frames');
const distFramesDir = path.join(rootDir, 'dist', 'assets', 'hero_frames');

if (!fs.existsSync(publicFramesDir)) fs.mkdirSync(publicFramesDir, { recursive: true });
if (!fs.existsSync(distFramesDir)) fs.mkdirSync(distFramesDir, { recursive: true });

const TOTAL_FRAMES = 150;

// Base high-definition source: pristine 4K Mediterranean villa photo
const baseSource = path.join(rootDir, 'public', 'assets', 'estate_villa_mediterranean.jpg');

async function generateCleanFrames() {
  console.log('Generating 150 clean, watermark-free high-definition Hero flythrough frames...');

  const meta = await sharp(baseSource).metadata();
  const origWidth = meta.width;
  const origHeight = meta.height;

  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const t = i / (TOTAL_FRAMES - 1); // 0.0 to 1.0

    // Smooth cubic easing for ultra-fluid 150-frame camera flight
    const easeT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // Camera Flight Parameters:
    // Scale: 1.00 (wide establishing) -> 1.60 (deep architectural dive into illuminated arches & pool)
    const scale = 1.0 + easeT * 0.60;
    
    // Crop window dimensions
    const cropWidth = Math.floor(origWidth / scale);
    const cropHeight = Math.floor(origHeight / scale);

    // Pan trajectory: smoothly centers toward the illuminated villa salon & waterfall pool
    const startX = 0.5; // center
    const startY = 0.5;
    const targetX = 0.52; // slightly toward illuminated central arches
    const targetY = 0.46; // toward terrace & pool

    const currentCenterX = startX + (targetX - startX) * easeT;
    const currentCenterY = startY + (targetY - startY) * easeT;

    const left = Math.max(0, Math.min(origWidth - cropWidth, Math.floor(currentCenterX * origWidth - cropWidth / 2)));
    const top = Math.max(0, Math.min(origHeight - cropHeight, Math.floor(currentCenterY * origHeight - cropHeight / 2)));

    // Subtle atmospheric evening lighting transition as you fly closer
    const brightness = 1.0 + easeT * 0.05;
    const saturation = 1.0 + easeT * 0.08;

    // Format frame index as frame_000.jpg -> frame_149.jpg and also frame_00.jpg -> frame_149.jpg for backward compatibility
    const frameNum3 = String(i).padStart(3, '0');
    const frameNum2 = String(i).padStart(2, '0');

    const frameBuffer = await sharp(baseSource)
      .extract({ left, top, width: cropWidth, height: cropHeight })
      .resize(1920, 1080, { fit: 'cover', position: 'center', kernel: 'lanczos3' })
      .modulate({ brightness, saturation })
      .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
      .toBuffer();

    fs.writeFileSync(path.join(publicFramesDir, `frame_${frameNum3}.jpg`), frameBuffer);
    fs.writeFileSync(path.join(distFramesDir, `frame_${frameNum3}.jpg`), frameBuffer);

    // Also write frame_00..frame_99 for fallback consistency
    fs.writeFileSync(path.join(publicFramesDir, `frame_${frameNum2}.jpg`), frameBuffer);
    fs.writeFileSync(path.join(distFramesDir, `frame_${frameNum2}.jpg`), frameBuffer);
  }

  console.log(`Successfully generated all ${TOTAL_FRAMES} clean Hero frames!`);
}

generateCleanFrames().catch(console.error);
