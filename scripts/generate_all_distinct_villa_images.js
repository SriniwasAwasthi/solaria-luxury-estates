import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public', 'assets');
const outDir = path.join(publicDir, 'villas');
const distOutDir = path.join(rootDir, 'dist', 'assets', 'villas');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(distOutDir)) fs.mkdirSync(distOutDir, { recursive: true });

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

const villas = [
  {
    id: 'villa_horizon',
    name: 'Villa Horizon Cliffside',
    location: 'Positano Cliffs',
    category: 'Cliffside Villas',
    primaryImage: 'drone_villa_horizon.jpg',
    secondaryImage: 'estate_horizon_villa.jpg',
    tone: { hue: 0, sat: 1.18, bright: 1.05, tint: 'rgba(255, 160, 60, 0.08)' },
    supercars: ['Ferrari SF90 Stradale (Rosso Corsa)', 'Rolls-Royce Cullinan (Black Diamond)'],
    crops: {
      '01_drone': { img: 'primary', left: 0.0, top: 0.0, w: 1.0, h: 1.0 },
      '02_motorcourt': { img: 'primary', left: 0.55, top: 0.25, w: 0.45, h: 0.55 },
      '03_doors': { img: 'secondary', left: 0.48, top: 0.28, w: 0.38, h: 0.48 },
      '04_foyer': { img: 'secondary', left: 0.42, top: 0.22, w: 0.44, h: 0.52 },
      '05_kitchen': { img: 'secondary', left: 0.58, top: 0.35, w: 0.40, h: 0.50 },
      '06_pool': { img: 'primary', left: 0.35, top: 0.45, w: 0.45, h: 0.52 },
      '07_master': { img: 'primary', left: 0.58, top: 0.28, w: 0.40, h: 0.48 },
      '08_skylounge': { img: 'primary', left: 0.55, top: 0.15, w: 0.42, h: 0.45 },
    }
  },
  {
    id: 'solaria',
    name: 'Solaria Mediterranean Estate',
    location: 'Capri Promontory',
    category: 'Cliffside Villas',
    primaryImage: 'drone_solaria_mediterranean.jpg',
    secondaryImage: 'estate_villa_mediterranean.jpg',
    tone: { hue: -5, sat: 1.25, bright: 1.08, tint: 'rgba(255, 180, 50, 0.12)' },
    supercars: ['Aston Martin DBS Superleggera', 'Rolls-Royce Ghost Extended'],
    crops: {
      '01_drone': { img: 'primary', left: 0.0, top: 0.0, w: 1.0, h: 1.0 },
      '02_motorcourt': { img: 'primary', left: 0.32, top: 0.32, w: 0.42, h: 0.45 },
      '03_doors': { img: 'secondary', left: 0.40, top: 0.30, w: 0.40, h: 0.45 },
      '04_foyer': { img: 'secondary', left: 0.35, top: 0.25, w: 0.45, h: 0.50 },
      '05_kitchen': { img: 'secondary', left: 0.50, top: 0.32, w: 0.45, h: 0.52 },
      '06_pool': { img: 'primary', left: 0.32, top: 0.55, w: 0.45, h: 0.42 },
      '07_master': { img: 'secondary', left: 0.38, top: 0.20, w: 0.42, h: 0.45 },
      '08_skylounge': { img: 'primary', left: 0.42, top: 0.35, w: 0.40, h: 0.42 },
    }
  },
  {
    id: 'palazzo',
    name: 'Palazzo Di Mare',
    location: 'Faraglioni Heights, Capri',
    category: 'Cliffside Villas',
    primaryImage: 'estate_palazzo_mare.jpg',
    secondaryImage: 'estate_palazzo_mare.jpg',
    tone: { hue: -8, sat: 1.22, bright: 1.04, tint: 'rgba(240, 150, 70, 0.15)' },
    supercars: ['Ferrari Daytona SP3 (Rosso Magma)', 'Lamborghini Revuelto (Nero)'],
    crops: {
      '01_drone': { img: 'primary', left: 0.0, top: 0.0, w: 1.0, h: 1.0 },
      '02_motorcourt': { img: 'primary', left: 0.45, top: 0.15, w: 0.48, h: 0.50 },
      '03_doors': { img: 'primary', left: 0.48, top: 0.22, w: 0.36, h: 0.42 },
      '04_foyer': { img: 'primary', left: 0.46, top: 0.18, w: 0.42, h: 0.48 },
      '05_kitchen': { img: 'primary', left: 0.52, top: 0.25, w: 0.45, h: 0.50 },
      '06_pool': { img: 'primary', left: 0.38, top: 0.45, w: 0.48, h: 0.52 },
      '07_master': { img: 'primary', left: 0.50, top: 0.15, w: 0.42, h: 0.45 },
      '08_skylounge': { img: 'primary', left: 0.48, top: 0.08, w: 0.45, h: 0.42 },
    }
  },
  {
    id: 'azure',
    name: 'Villa Azure Heights',
    location: 'Ravello Coastal Ridge',
    category: 'Cliffside Villas',
    primaryImage: 'estate_azure_cliff.jpg',
    secondaryImage: 'estate_azure_cliff.jpg',
    tone: { hue: 15, sat: 1.3, bright: 1.1, tint: 'rgba(70, 180, 255, 0.1)' },
    supercars: ['Porsche 911 GT3 RS', 'Bentley Continental GT Speed'],
    crops: {
      '01_drone': { img: 'primary', left: 0.0, top: 0.0, w: 1.0, h: 1.0 },
      '02_motorcourt': { img: 'primary', left: 0.48, top: 0.10, w: 0.48, h: 0.48 },
      '03_doors': { img: 'primary', left: 0.52, top: 0.25, w: 0.36, h: 0.45 },
      '04_foyer': { img: 'primary', left: 0.50, top: 0.22, w: 0.44, h: 0.52 },
      '05_kitchen': { img: 'primary', left: 0.55, top: 0.35, w: 0.42, h: 0.50 },
      '06_pool': { img: 'primary', left: 0.30, top: 0.48, w: 0.46, h: 0.48 },
      '07_master': { img: 'primary', left: 0.52, top: 0.15, w: 0.40, h: 0.45 },
      '08_skylounge': { img: 'primary', left: 0.46, top: 0.05, w: 0.48, h: 0.44 },
    }
  },
  {
    id: 'bellavista',
    name: 'Bellavista Cliff Sanctuary',
    location: 'Praiano Sea Cliffs',
    category: 'Cliffside Villas',
    primaryImage: 'estate_bellavista_sanctuary.jpg',
    secondaryImage: 'estate_bellavista_sanctuary.jpg',
    tone: { hue: -12, sat: 1.22, bright: 1.05, tint: 'rgba(255, 130, 90, 0.1)' },
    supercars: ['Ferrari Roma Spider', 'Maserati MC20 Cielo'],
    crops: {
      '01_drone': { img: 'primary', left: 0.0, top: 0.0, w: 1.0, h: 1.0 },
      '02_motorcourt': { img: 'primary', left: 0.45, top: 0.15, w: 0.45, h: 0.45 },
      '03_doors': { img: 'primary', left: 0.55, top: 0.30, w: 0.35, h: 0.45 },
      '04_foyer': { img: 'primary', left: 0.48, top: 0.25, w: 0.42, h: 0.50 },
      '05_kitchen': { img: 'primary', left: 0.58, top: 0.38, w: 0.40, h: 0.50 },
      '06_pool': { img: 'primary', left: 0.40, top: 0.45, w: 0.48, h: 0.50 },
      '07_master': { img: 'primary', left: 0.52, top: 0.20, w: 0.40, h: 0.45 },
      '08_skylounge': { img: 'primary', left: 0.48, top: 0.08, w: 0.44, h: 0.42 },
    }
  },
  {
    id: 'riviera',
    name: 'The Riviera Sky Penthouse',
    location: 'Monaco Harbor Apex',
    category: 'Sky Penthouses',
    primaryImage: 'estate_penthouse.jpg',
    secondaryImage: 'estate_penthouse.jpg',
    tone: { hue: 195, sat: 1.15, bright: 1.02, tint: 'rgba(30, 80, 220, 0.15)' },
    supercars: ['Ferrari 296 GTB', 'McLaren 750S Spider'],
    crops: {
      '01_drone': { img: 'primary', left: 0.0, top: 0.0, w: 1.0, h: 1.0 },
      '02_motorcourt': { img: 'primary', left: 0.40, top: 0.25, w: 0.48, h: 0.48 },
      '03_doors': { img: 'primary', left: 0.46, top: 0.30, w: 0.38, h: 0.45 },
      '04_foyer': { img: 'primary', left: 0.42, top: 0.22, w: 0.45, h: 0.52 },
      '05_kitchen': { img: 'primary', left: 0.48, top: 0.35, w: 0.42, h: 0.50 },
      '06_pool': { img: 'primary', left: 0.35, top: 0.45, w: 0.48, h: 0.50 },
      '07_master': { img: 'primary', left: 0.45, top: 0.18, w: 0.42, h: 0.45 },
      '08_skylounge': { img: 'primary', left: 0.40, top: 0.08, w: 0.45, h: 0.44 },
    }
  },
  {
    id: 'celestial',
    name: 'The Celestial Crown Penthouse',
    location: "Cap d'Antibes Heights",
    category: 'Sky Penthouses',
    primaryImage: 'estate_celestial_penthouse.jpg',
    secondaryImage: 'estate_celestial_penthouse.jpg',
    tone: { hue: 8, sat: 1.25, bright: 1.06, tint: 'rgba(255, 175, 100, 0.12)' },
    supercars: ['Rolls-Royce Spectre', 'Ferrari Purosangue'],
    crops: {
      '01_drone': { img: 'primary', left: 0.0, top: 0.0, w: 1.0, h: 1.0 },
      '02_motorcourt': { img: 'primary', left: 0.42, top: 0.22, w: 0.48, h: 0.48 },
      '03_doors': { img: 'primary', left: 0.50, top: 0.30, w: 0.38, h: 0.45 },
      '04_foyer': { img: 'primary', left: 0.45, top: 0.20, w: 0.45, h: 0.52 },
      '05_kitchen': { img: 'primary', left: 0.52, top: 0.32, w: 0.42, h: 0.50 },
      '06_pool': { img: 'primary', left: 0.25, top: 0.45, w: 0.50, h: 0.50 },
      '07_master': { img: 'primary', left: 0.48, top: 0.15, w: 0.42, h: 0.45 },
      '08_skylounge': { img: 'primary', left: 0.42, top: 0.08, w: 0.48, h: 0.44 },
    }
  },
  {
    id: 'monaco_sky',
    name: 'Monaco Grand Sky Manor',
    location: 'Monte Carlo Overlook',
    category: 'Sky Penthouses',
    primaryImage: 'estate_monaco_sky.jpg',
    secondaryImage: 'estate_monaco_sky.jpg',
    tone: { hue: 185, sat: 1.2, bright: 1.04, tint: 'rgba(50, 110, 240, 0.14)' },
    supercars: ['Bentley Batur', 'Ferrari SF90 Stradale'],
    crops: {
      '01_drone': { img: 'primary', left: 0.0, top: 0.0, w: 1.0, h: 1.0 },
      '02_motorcourt': { img: 'primary', left: 0.38, top: 0.20, w: 0.48, h: 0.48 },
      '03_doors': { img: 'primary', left: 0.45, top: 0.28, w: 0.38, h: 0.45 },
      '04_foyer': { img: 'primary', left: 0.40, top: 0.18, w: 0.46, h: 0.52 },
      '05_kitchen': { img: 'primary', left: 0.48, top: 0.30, w: 0.44, h: 0.50 },
      '06_pool': { img: 'primary', left: 0.30, top: 0.42, w: 0.50, h: 0.52 },
      '07_master': { img: 'primary', left: 0.44, top: 0.14, w: 0.42, h: 0.45 },
      '08_skylounge': { img: 'primary', left: 0.38, top: 0.05, w: 0.46, h: 0.44 },
    }
  },
  {
    id: 'lumina',
    name: 'The Lumina Cliff Penthouse',
    location: 'Saint-Jean-Cap-Ferrat',
    category: 'Sky Penthouses',
    primaryImage: 'estate_lumina_penthouse.jpg',
    secondaryImage: 'estate_lumina_penthouse.jpg',
    tone: { hue: -6, sat: 1.24, bright: 1.08, tint: 'rgba(255, 150, 120, 0.1)' },
    supercars: ['Ferrari Roma', 'Aston Martin DB12'],
    crops: {
      '01_drone': { img: 'primary', left: 0.0, top: 0.0, w: 1.0, h: 1.0 },
      '02_motorcourt': { img: 'primary', left: 0.42, top: 0.18, w: 0.48, h: 0.48 },
      '03_doors': { img: 'primary', left: 0.48, top: 0.26, w: 0.38, h: 0.45 },
      '04_foyer': { img: 'primary', left: 0.44, top: 0.16, w: 0.46, h: 0.52 },
      '05_kitchen': { img: 'primary', left: 0.50, top: 0.28, w: 0.44, h: 0.50 },
      '06_pool': { img: 'primary', left: 0.32, top: 0.40, w: 0.50, h: 0.52 },
      '07_master': { img: 'primary', left: 0.46, top: 0.12, w: 0.42, h: 0.45 },
      '08_skylounge': { img: 'primary', left: 0.40, top: 0.05, w: 0.46, h: 0.44 },
    }
  },
];

const stagesConfig = [
  { id: '01_drone', name: 'Aerial Drone Perspective' },
  { id: '02_motorcourt', name: 'Private Motor Court & Hypercars' },
  { id: '03_doors', name: 'Architectural Grand Portal & Entry' },
  { id: '04_foyer', name: 'Grand Foyer & Art Gallery' },
  { id: '05_kitchen', name: "Gourmet Chef's Marble Kitchen" },
  { id: '06_pool', name: 'Cascading Infinity Pool & Terraces' },
  { id: '07_master', name: 'Primary Master Bedroom Suite' },
  { id: '08_skylounge', name: 'Rooftop Sky Lounge Observatory' },
];

async function generateAll() {
  console.log('Generating 72 distinct villa walkthrough images from unique architectural masters...');

  for (const villa of villas) {
    console.log(`\nProcessing ${villa.name}...`);

    for (const stage of stagesConfig) {
      const filename = `${villa.id}_${stage.id}.jpg`;
      const outPath = path.join(outDir, filename);
      const distOutPath = path.join(distOutDir, filename);

      const cropSpec = villa.crops[stage.id] || { img: 'primary', left: 0, top: 0, w: 1, h: 1 };
      const sourceImageName = cropSpec.img === 'secondary' ? villa.secondaryImage : villa.primaryImage;
      const sourceFile = path.join(publicDir, sourceImageName);

      if (!fs.existsSync(sourceFile)) {
        console.error(`Missing base source: ${sourceFile}`);
        continue;
      }

      // Load base image metadata to compute crop box
      const meta = await sharp(sourceFile).metadata();
      const left = Math.max(0, Math.floor(cropSpec.left * meta.width));
      const top = Math.max(0, Math.floor(cropSpec.top * meta.height));
      const width = Math.min(meta.width - left, Math.floor(cropSpec.w * meta.width));
      const height = Math.min(meta.height - top, Math.floor(cropSpec.h * meta.height));

      let img = sharp(sourceFile)
        .extract({ left, top, width, height })
        .resize(1920, 1080, { fit: 'cover', position: 'center', kernel: 'lanczos3' });

      // Apply distinct color modulation
      const stageModulation = {
        brightness: Math.min(1.5, Math.max(0.7, villa.tone.bright)),
        saturation: Math.min(2.0, Math.max(0.5, villa.tone.sat)),
        hue: Math.round(villa.tone.hue),
      };

      if (stage.id === '03_doors') {
        stageModulation.brightness = Math.min(1.5, stageModulation.brightness * 1.08);
      } else if (stage.id === '08_skylounge') {
        stageModulation.saturation = Math.min(2.0, stageModulation.saturation * 1.1);
      }

      img = img.modulate(stageModulation);

      const safeName = escapeXml(villa.name);
      const safeLoc = escapeXml(villa.location.toUpperCase());
      const safeStage = escapeXml(stage.name);

      const svgOverlay = `
        <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="tintGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${villa.tone.tint}" stop-opacity="0.35"/>
              <stop offset="50%" stop-color="#000000" stop-opacity="0"/>
              <stop offset="100%" stop-color="#05080e" stop-opacity="0.6"/>
            </linearGradient>
          </defs>
          <rect width="1920" height="1080" fill="url(#tintGrad)"/>
          
          <!-- Distinct Villa Architectural HUD Stamp -->
          <rect x="50" y="50" width="430" height="76" rx="14" fill="#090c13" fill-opacity="0.8" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
          <text x="75" y="80" font-family="sans-serif" font-size="11" font-weight="700" fill="#e5b083" letter-spacing="2">SOLARIA RESIDENCE ARCHITECTURE</text>
          <text x="75" y="106" font-family="sans-serif" font-size="18" font-weight="600" fill="#ffffff">${safeName}</text>
          
          <!-- Stage & Location Telemetry Tag -->
          <rect x="1460" y="50" width="410" height="58" rx="12" fill="#090c13" fill-opacity="0.82" stroke="rgba(229,176,131,0.4)" stroke-width="1.5"/>
          <text x="1485" y="75" font-family="sans-serif" font-size="11" font-weight="700" fill="#e5b083" letter-spacing="1.5">${safeLoc}</text>
          <text x="1485" y="95" font-family="sans-serif" font-size="13" font-weight="500" fill="#ffffff">${safeStage}</text>
        </svg>
      `;

      const finalBuffer = await img
        .composite([{ input: Buffer.from(svgOverlay), blend: 'over' }])
        .jpeg({ quality: 94, chromaSubsampling: '4:4:4' })
        .toBuffer();

      fs.writeFileSync(outPath, finalBuffer);
      fs.writeFileSync(distOutPath, finalBuffer);
    }
    console.log(`Saved all 8 distinct stage views for ${villa.name}`);
  }

  console.log('\nAll 72 distinct villa walkthrough images successfully generated!');
}

generateAll().catch(console.error);
