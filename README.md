# 🏛️ SOLARIA ESTATES — Ultra-Luxury Mediterranean Real Estate Platform

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Performance](https://img.shields.io/badge/Performance-Zero--Latency-brightgreen?style=flat-square)](https://github.com/SriniwasAwasthi/solaria-luxury-estates)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

> *"Where the Horizon Meets Timeless Elegance."*  
> **Solaria Estates** is a premier digital flagship platform showcasing an exclusive collection of nine bespoke architectural cliffside sanctuaries and crown sky penthouses across the Mediterranean coastline.

---

## 🌟 Table of Contents
1. [Overview & Vision](#-overview--vision)
2. [Why Solaria Was Created](#-why-solaria-was-created)
3. [Who It Is Designed For](#-who-it-is-designed-for)
4. [Key Features & Visual Tour](#-key-features--visual-tour)
5. [72-Stage 3D Walkthrough Simulator (9 Estates × 8 Stages)](#-72-stage-3d-walkthrough-simulator)
6. [Interactive Horizon Experience (Day / Sunset / Night)](#-interactive-horizon-experience)
7. [Zero-Latency Performance Engine](#-zero-latency-performance-engine)
8. [How to Use & Navigate the Platform](#-how-to-use--navigate-the-platform)
9. [Tech Stack & Engineering Architecture](#-tech-stack--engineering-architecture)
10. [Frequently Asked Questions (FAQ)](#-frequently-asked-questions-faq)
11. [Installation & Getting Started](#-installation--getting-started)
12. [License & Acknowledgments](#-license--acknowledgments)

---

## 🌟 Overview & Vision

**Solaria Estates** is an ultra-luxury digital real estate experience designed to bridge the gap between world-class architectural design and modern web technology. 

By combining **cinema-grade 150-frame camera flythrough scrubbing**, **hardware-accelerated desynchronized GPU canvas rendering**, **72 bespoke 3D walkthrough room stages**, and **procedural Web Audio coastal soundscapes**, Solaria provides a tactile, immersive digital viewing experience for high-profile estates across Positano, Capri, Ravello, Praiano, Monaco, and Cap d'Antibes.

---

## 💡 Why Solaria Was Created

Traditional luxury real estate websites often rely on static image galleries and slow, fragmented PDF brochures that fail to capture the true scale, natural lighting, and architectural elegance of coastal estates. 

**Solaria was engineered to solve this by:**
- **Bringing Architecture to Life:** Delivering a dynamic 150-frame aerial dive from high-altitude coastal skies directly into the living stone arches and multi-tiered waterfall pools.
- **Providing True Spatial Understanding:** Providing a 72-stage architectural room tour covering every floor (Exterior Drone, Gated Motor Courts with Supercars, Sculpted Bronze Doors, Art Foyers, Gourmet Chef Kitchens, Cascading Pools, Primary Master Suites, and Rooftop Sky Observatories).
- **Simulating Coastal Light:** Allowing prospective owners to witness how each residence interacts with Mediterranean sunlight across Day, Golden Hour Sunset, Twilight, and Starlit Midnight.
- **Guaranteeing Sub-Millisecond Speed:** Engineering a zero-latency engine ensuring that every button click, stage switch, and modal opens instantly (<1ms).

---

## 👑 Who It Is Designed For

- **High-Net-Worth Individuals & Discerning Buyers:** Seeking exclusive, private coastal sanctuaries with private deep-water docks, helipads, and bespoke architecture.
- **Luxury Real Estate Developers & Architectural Firms:** Looking for a modern benchmark for presenting multi-million-dollar developments.
- **Design & Web Engineering Enthusiasts:** Exploring how high-framerate canvas animation, Web Audio API synthesis, and memory preloading combine to deliver zero-latency web apps.

---

## ⚡ Key Features & Visual Tour

### 🎬 1. 150-Frame Cinematic Flythrough Hero Scroller
* **High-Density Frame Scrubber:** Preloads 150 pristine, watermark-free 1920x1080 frames (`frame_000.jpg` to `frame_149.jpg`).
* **Velocity-Damped LERP Animation:** Interpolates camera trajectory smoothly based on scroll position across an expansive `650vh` track.
* **Desynchronized GPU Rendering:** Utilizes HTML5 Canvas 2D `{ alpha: false, desynchronized: true }` to bypass OS compositor buffers for 60–120 FPS performance.
* **Progressive Narrative Pacing:**
  - **0% – 20%:** Hero Title & Brand Identity
  - **24% – 74%:** Cinematic Architecture Flythrough & Live Coastal Telemetry
  - **78% – 100%:** Collection Discovery Call-to-Action

### 📖 2. The Story & Architectural Philosophy
* Dedicated editorial section exploring the organic marriage of ancient Amalfi limestone with cantilevered glass, warm Italian walnut, and private superyacht harbors.

### 🏰 3. The Collection (9 Bespoke Coastal Residences)
* Filterable portfolio with tabs for **All Estates**, **Cliffside Villas**, and **Sky Penthouses**:
  1. **Villa Horizon Cliffside (Positano):** $24.5M • 6 Beds • 8 Baths • 11,400 sqft • Multi-tier infinity falls pool & Ferrari SF90 Stradale.
  2. **Solaria Mediterranean Estate (Capri):** $31.8M • 7 Beds • 9 Baths • 14,200 sqft • Flagship residence with dual pools & Sommelier lounge.
  3. **Palazzo Di Mare (Capri):** $38.5M • 8 Beds • 11 Baths • 16,800 sqft • Renaissance palace with private yacht slip & Bugatti Chiron.
  4. **Villa Azure Heights (Ravello):** $21.9M • 5 Beds • 6 Baths • 9,800 sqft • Cantilevered glass structure 320m above sea level.
  5. **Bellavista Cliff Sanctuary (Praiano):** $18.4M • 5 Beds • 7 Baths • 8,900 sqft • Botanical floral terraces & natural rock plunge pool.
  6. **The Riviera Sky Penthouse (Monaco):** $42.0M • 5 Beds • 7 Baths • 10,500 sqft • Duplex glass penthouse over Monaco harbor with private rooftop pool.
  7. **The Celestial Crown Penthouse (Cap d'Antibes):** $48.5M • 6 Beds • 8 Baths • 13,200 sqft • Crown jewel with private rooftop helipad.
  8. **Monaco Grand Sky Manor (Monte Carlo):** $36.2M • 6 Beds • 8 Baths • 12,100 sqft • Marina view rotunda, heated sky pool & glass elevator.
  9. **The Lumina Cliff Penthouse (Saint-Jean-Cap-Ferrat):** $29.0M • 4 Beds • 6 Baths • 8,400 sqft • Luminescent glass residence with 360° peninsula views.

---

## 🚶‍♂️ 72-Stage 3D Walkthrough Simulator

Every estate is equipped with an **interactive 8-stage architectural simulator** (72 unique high-resolution photographs with zero image repetition):

| Stage | Name | Location / Floor | Description |
| :---: | :--- | :--- | :--- |
| **01** | **Exterior Aerial Drone Scan** | Exterior Drone (180m–320m) | 4K high-altitude orbit revealing cliff topography, private yacht coves, and cantilevered infinity pool terraces. |
| **02** | **Private Motor Court & Hypercars** | Ground Floor | Hand-cut cobblestone motor courts featuring curated supercars (Ferrari SF90, Rolls-Royce Cullinan, Aston Martin DBS, Bugatti Chiron, McLaren 750S). |
| **03** | **Grand Entrance Doors Opening** | Ground Floor | Sculpted solid bronze & aged Italian oak portals opening smoothly to reveal the illuminated marble interiors. |
| **04** | **Double-Height Art Foyer** | Ground Floor | Curving Calacatta marble staircases, Mediterranean oil paintings, crystal chandeliers, and soaring glass walls. |
| **05** | **Gourmet Chef's Kitchen** | Ground Floor | Custom marble islands, integrated Gaggenau suites, temperature-controlled glass wine vaults, and sea terraces. |
| **06** | **Cascading Infinity Pool & Deck** | Ground Floor Terrace | Multi-tiered heated saltwater infinity pools with submerged loungers, fire bowls, and waterfall cascades. |
| **07** | **1st Floor Master Suite Sanctuary** | 1st Floor | California King primary wing, bespoke millwork, freestanding stone tub, and private bougainvillea balcony. |
| **08** | **2nd Floor Rooftop Sky Lounge** | 2nd Floor Rooftop | 360° astronomical observatory, fire pit sunset lounge, and private sea horizon cocktail bar. |

### Simulator Controls & Ergonomics:
- **Elastic Auto-Centering Stage Track:** Horizontally scrollable strip with dedicated `<` and `>` chevron scroll buttons.
- **Keyboard Arrow Navigation:** Full support for `ArrowLeft` / `ArrowRight` to transition through rooms.
- **360° Drag-to-Pan:** Interactive mouse/touch pan exploration across all room viewpoints.
- **Atmospheric Time-of-Day Grading:** Real-time visual tones for Sunset Warmth, Capri Azure, Midnight Indigo, and Golden Sun.

---

## 🌅 Interactive Horizon Experience

The **Views & Horizon Section** allows prospective buyers to experience how Mediterranean residences transition through natural daylight:
- **Daylight (12:00 PM):** Crisp azure Mediterranean sea, high-clarity limestone illumination, and bright horizons.
- **Golden Hour (6:30 PM):** Warm amber glow, shimmering water reflections, and glowing interior chandeliers.
- **Twilight (8:15 PM):** Deep violet skies, illuminated underwater pool lights, and ambient villa torches.
- **Midnight (11:45 PM):** Starlit night skies, distant lighthouse beams, and superyacht anchor lights.

---

## 🌊 Web Audio API Procedural Soundscape

Rather than loading heavy external `.mp3` or `.wav` audio files, Solaria features a custom **Web Audio API synthesizer**:
- Generates organic ocean wave acoustics procedurally using white noise buffers, lowpass biquad filters (320Hz), gain automation, and low-frequency LFO oscillators (0.12Hz).
- Toggled on/off with a single click from the floating bottom-left control button.

---

## ⚡ Zero-Latency Performance Engine

1. **Background RAM Preloader (`preloadAssets.js`):**
   - Automatically preloads all **150 Hero Scrubber frames** and all **72 Villa Walkthrough images** into browser memory immediately upon application mount.
   - Eliminates image loading delays, network latency, and disk stutter during navigation.
2. **Desynchronized GPU Canvas Pipeline (`HeroCanvas.jsx`):**
   - Direct hardware-rendered canvas bypassing system compositor queuing for 60–120 FPS scrolling.
3. **Hardware-Accelerated CSS Layers:**
   - Elements utilize `will-change: transform`, `transform: translateZ(0)`, and `backface-visibility: hidden` for sub-millisecond (<1ms) click response times.
4. **Vite Production Bundling:**
   - Code splitting (`manualChunks`) with Rolldown engine and Terser minification for instant page load on any network.

---

## 🎮 How to Use & Navigate the Platform

1. **Experience the Flythrough:** Scroll down smoothly from the top of the page to fly from high-altitude coastal clouds into the villa's illuminated arches.
2. **Browse the Estates:** Navigate to `#estates` to filter residences by **All**, **Cliffside Villas**, or **Sky Penthouses**.
3. **Launch the 3D Room Walkthrough:** Click **"EXPLORE VILLA"** on any estate card to open the 8-stage interactive simulator.
4. **Tour the Rooms:** Click any stage node (01 to 08), use the `<` `>` chevrons, or press the **Left/Right Arrow keys** on your keyboard to walk from the motor court into the rooftop sky lounge.
5. **Adjust Time of Day:** Click **"LIVE SIMULATION"** or scroll to `#views` to toggle between Day, Golden Hour, Twilight, and Midnight.
6. **Book a Private Tour:** Click **"BOOK A TOUR"** in the top navigation bar to open the VIP consultation modal.

---

## 🛠️ Tech Stack & Engineering Architecture

| Category | Technology / Specification |
| :--- | :--- |
| **Frontend Framework** | React 18.3 (Hooks, Context, Memoization) |
| **Build Tool & Bundler** | Vite 8.2 (Rolldown engine, Terser minification) |
| **Styling Framework** | Tailwind CSS 3.4 + Custom Luxury Design System Tokens |
| **Graphics Engine** | HTML5 Canvas 2D (Desynchronized pipeline) + Sharp |
| **Audio Engine** | Web Audio API (Procedural Wave Acoustics Synthesizer) |
| **Icons** | Lucide React |
| **Typography** | Cinzel, Cormorant Garamond, Plus Jakarta Sans |

---

## ❓ Frequently Asked Questions (FAQ)

<details>
<summary><strong>Q: Does the website require high internet bandwidth to run the 150-frame animation?</strong></summary>
No. All 150 frames are optimized and preloaded in background memory threads upon initial mount, allowing smooth, buffer-free scrolling even on standard connections.
</details>

<details>
<summary><strong>Q: Are the 3D walkthrough stages real unique images for each villa?</strong></summary>
Yes. All 9 estates have their own dedicated 8-stage image pipeline (72 unique high-resolution images in total) reflecting their distinct coastal geography, interior layout, and custom hypercars.
</details>

<details>
<summary><strong>Q: Can I deploy this platform to Vercel, Netlify, or AWS?</strong></summary>
Yes. The project builds standard static production artifacts via `npm run build` and can be deployed with 1 click to any static hosting provider.
</details>

<details>
<summary><strong>Q: Does the ambient soundscape require external audio downloads?</strong></summary>
No. The coastal wave audio is synthesized in real time in the user's browser using the native Web Audio API with zero external file downloads.
</details>

---

## 🚀 Installation & Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SriniwasAwasthi/solaria-luxury-estates.git
   cd solaria-luxury-estates
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open **`http://localhost:5173/`** in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Repository Directory Structure

```
solaria-luxury-estates/
├── public/
│   └── assets/
│       ├── hero_frames/         # 150 Clean 4K flythrough frames (frame_000.jpg - frame_149.jpg)
│       └── villas/              # 72 Unique 3D walkthrough stage photographs
├── src/
│   ├── components/
│   │   ├── BrandLogo.jsx        # Solaria brand emblem & watermark
│   │   ├── EstatesSection.jsx   # 9 Estates collection & filter grid
│   │   ├── Footer.jsx           # Platform footer & international legal disclosures
│   │   ├── Header.jsx           # Glassmorphic header & VIP booking navigation
│   │   ├── HeroCanvas.jsx       # 150-Frame desynchronized GPU canvas scroller
│   │   ├── HeroSection.jsx      # Multi-stage narrative scroll viewport
│   │   ├── InquirySection.jsx   # VIP tour booking & private consultation form
│   │   ├── LifestyleSection.jsx # Mediterranean luxury lifestyle amenities
│   │   ├── StorySection.jsx     # Architectural philosophy & heritage narrative
│   │   ├── TourModal.jsx        # Private tour booking modal
│   │   ├── ViewsSection.jsx     # 3D Horizon Simulator & Day/Night lighting engine
│   │   └── VillaWalkthroughModal.jsx # 8-Stage Interactive Room & Drone Simulator
│   ├── data/
│   │   └── estates.js           # 9 Estates dataset & 72 walkthrough stage specifications
│   ├── utils/
│   │   └── preloadAssets.js     # Background asset preloading engine
│   ├── App.jsx                  # Main application orchestrator
│   ├── index.css                # Global luxury design system & typography tokens
│   └── main.jsx                 # Application entrypoint
├── scripts/
│   ├── generate_clean_hero_frames.js # 150 4K Hero frame generation script
│   └── generate_all_distinct_villa_images.js # 72 distinct villa stage generator
├── index.html                   # HTML entrypoint with preconnect & preload hints
├── vite.config.js               # Production bundling & code splitting configuration
├── package.json                 # Project dependencies & build scripts
└── README.md                    # Comprehensive repository documentation
```

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Crafted with passion for elite architectural engineering by <a href="https://github.com/SriniwasAwasthi">Sriniwas Awasthi</a>.</sub>
</div>
