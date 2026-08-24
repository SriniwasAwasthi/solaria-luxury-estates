export const estatesData = [
  {
    id: 'villa-horizon',
    title: 'Villa Horizon Cliffside',
    category: 'Cliffside Villas',
    price: '$24,500,000',
    location: 'Positano Cliffs, Amalfi Coast',
    image: '/assets/estate_horizon_villa.jpg',
    droneImage: '/assets/villas/villa_horizon_01_drone.jpg',
    specs: { beds: 6, baths: 8, sqft: '11,400', floorsCount: 3 },
    tagline: 'Sculpted Multi-Tier Waterfall Sanctuary',
    description: 'Sculpted directly into the coastal cliff face, featuring cascading multi-tier infinity waterfalls, sunset arched galleries, and private deep-water dock access.',
    features: ['Cascading Waterfall Pool', 'Subterranean Wine Cellar', 'Private Sea Elevator', 'Helipad Access', 'Smart Home Automation', 'Chef Commercial Kitchen'],
    elevation: '180m Above Sea Level',
    orientation: 'South-West Panoramic Sunset',
    supercars: ['Ferrari SF90 Stradale (Rosso Corsa)', 'Rolls-Royce Cullinan (Black Diamond)'],
    floors: {
      ground: ['Gated Motor Court & Supercars', 'Grand Bronze Entrance Doors', 'Double-Height Foyer & Oil Painting Gallery', 'Calacatta Marble Chef Kitchen', 'Cascading Waterfall Infinity Pool Deck'],
      first: ['Primary Master Wing with Panoramic Soaking Tub', '3 VIP Oceanview Guest En-Suites', 'Bougainvillea Sunset Loggia', 'Private Hydrotherapy Sauna'],
      second: ['360° Rooftop Sky Observatory', 'Fire Pit Sunset Lounge', 'Astronomy Telescope Deck', 'Private Sea Horizon Bar']
    },
    walkthroughStages: [
      { id: 'aerial', title: 'Positano Aerial Drone Scan', subtitle: 'Drone Flight at 180m Over Positano Cliffs', floor: 'Exterior Drone', image: '/assets/villas/villa_horizon_01_drone.jpg', icon: 'drone', desc: 'High-altitude 4K drone orbit over sheer Amalfi cliffs, revealing multi-tier cantilevered infinity pools and yachts below.' },
      { id: 'motorcourt', title: 'Motor Court & Supercars', subtitle: 'Private Gated Entrance', floor: 'Ground Floor', image: '/assets/villas/villa_horizon_02_motorcourt.jpg', icon: 'car', desc: 'Hand-cut cobblestone motor court with Ferrari SF90 Stradale & Rolls-Royce Cullinan parked under cypress arches.' },
      { id: 'doors', title: 'Grand Double Doors Opening', subtitle: 'Sculpted Solid Bronze & Oak Doors', floor: 'Ground Floor', image: '/assets/villas/villa_horizon_03_doors.jpg', icon: 'door', isDoorOpen: true, desc: 'Massive 12-foot custom bronze doors open smoothly to reveal the luminous marble interior.' },
      { id: 'foyer', title: 'Grand Foyer & Art Gallery', subtitle: 'Double-Height Reception Hall', floor: 'Ground Floor', image: '/assets/villas/villa_horizon_04_foyer.jpg', icon: 'gallery', desc: 'Curving Italian marble staircase, 18th-century Mediterranean oil masterpieces, and sparkling crystal chandelier.' },
      { id: 'kitchen', title: "Gourmet Chef's Kitchen", subtitle: 'Culinary Masterpiece & Wine Vault', floor: 'Ground Floor', image: '/assets/villas/villa_horizon_05_kitchen.jpg', icon: 'kitchen', desc: 'Massive Calacatta gold marble island, integrated Gaggenau suite, temperature-controlled glass wine vault, and terrace access.' },
      { id: 'pool', title: 'Cascading Infinity Pool & Falls', subtitle: 'Cantilevered Sea Terrace', floor: 'Ground Floor', image: '/assets/villas/villa_horizon_06_pool.jpg', icon: 'pool', desc: 'Multi-tiered heated saltwater infinity pool edge with submerged loungers, fire bowls, and waterfall cascade.' },
      { id: 'master', title: '1st Floor Master Bedroom Sanctuary', subtitle: 'Panoramic Ocean Balcony & Spa', floor: '1st Floor', image: '/assets/villas/villa_horizon_07_master.jpg', icon: 'bed', desc: 'Plush California King suite, bespoke walnut millwork, freestanding stone bathtub with unobstructed sea horizon views.' },
      { id: 'skylounge', title: '2nd Floor Rooftop Sky Lounge', subtitle: '360° Observatory & Fire Pit', floor: '2nd Floor', image: '/assets/villas/villa_horizon_08_skylounge.jpg', icon: 'sun', desc: 'Top-tier rooftop entertainment lounge with 360-degree views over the Amalfi coastline, superyacht coves, and sunset.' }
    ]
  },
  {
    id: 'solaria-sanctuary',
    title: 'Solaria Mediterranean Estate',
    category: 'Cliffside Villas',
    price: '$31,800,000',
    location: 'Capri Coastal Promontory',
    image: '/assets/estate_villa_mediterranean.jpg',
    droneImage: '/assets/villas/solaria_01_drone.jpg',
    specs: { beds: 7, baths: 9, sqft: '14,200', floorsCount: 3 },
    tagline: 'Flagship Residence of the Enclave',
    description: 'The flagship residence of the enclave. Panoramic sunset views over the ocean, private bougainvillea terraces, marble spa, and multi-car underground gallery.',
    features: ['Dual Infinity Edge Pools', 'Private Citrus Groves', 'Sommelier Tasting Lounge', 'Separate Staff Quarters', 'Solar Thermal Microgrid', '24/7 VIP Detail'],
    elevation: '210m Above Sea Level',
    orientation: 'Direct West Horizon',
    supercars: ['Aston Martin DBS Superleggera', 'Rolls-Royce Ghost Extended'],
    floors: {
      ground: ['Capri Olive Grove Motor Court', 'Grand Double Portal Entrance', 'Imperial Marble Foyer & Roman Murals', 'Open-Plan Show Kitchen & Dining Salon', 'Dual Infinity Pools & Sunset Solarium'],
      first: ['Master Presidential Suite with Private Pool Access', '4 Guest En-Suites', 'Capri Lemon Terrace', 'Sommelier Wine Lounge'],
      second: ['Rooftop Observation Belvédère', 'Sunset Fireplace Lounge', 'Private Helipad Access Deck', 'Starlight Stargazing Lounge']
    },
    walkthroughStages: [
      { id: 'aerial', title: 'Capri Promontory Drone Sweep', subtitle: 'Drone Flight at 210m Over Capri Coast', floor: 'Exterior Drone', image: '/assets/villas/solaria_01_drone.jpg', icon: 'drone', desc: 'Flagship 4K drone orbit over the Capri coastal promontory, dual infinity pools, olive groves, and the Faraglioni horizon.' },
      { id: 'motorcourt', title: 'Capri Motor Court & Supercars', subtitle: 'Private Gated Courtyard', floor: 'Ground Floor', image: '/assets/villas/solaria_02_motorcourt.jpg', icon: 'car', desc: 'Limestone paved courtyard framed by century-old olive trees, featuring Aston Martin DBS & Rolls-Royce Ghost.' },
      { id: 'doors', title: 'Grand Portal Doors Opening', subtitle: 'Handcrafted Capri Walnut & Iron', floor: 'Ground Floor', image: '/assets/villas/solaria_03_doors.jpg', icon: 'door', isDoorOpen: true, desc: 'Motorized dual entrance doors open wide with ambient chime into the grand oceanfront salon.' },
      { id: 'foyer', title: 'Grand Foyer & Art Gallery', subtitle: 'Imperial Double-Height Hall', floor: 'Ground Floor', image: '/assets/villas/solaria_04_foyer.jpg', icon: 'gallery', desc: 'Sweeping marble staircase, curated neoclassical paintings, and floor-to-ceiling glass arches looking toward the sea.' },
      { id: 'kitchen', title: "Gourmet Chef's Kitchen", subtitle: 'Culinary Pavilion & Wine Gallery', floor: 'Ground Floor', image: '/assets/villas/solaria_05_kitchen.jpg', icon: 'kitchen', desc: 'Calacatta marble waterfall counter, La Cornue range, walk-in sommelier reserve, and sliding glass veranda doors.' },
      { id: 'pool', title: 'Dual Heated Infinity Pools', subtitle: 'Limestone Cliff Overhang', floor: 'Ground Floor', image: '/assets/villas/solaria_06_pool.jpg', icon: 'pool', desc: 'Two-level heated saltwater infinity pools with swim-up sunset bar and direct sound of ocean waves.' },
      { id: 'master', title: '1st Floor Presidential Master Suite', subtitle: 'Private Terraced Sanctuary', floor: '1st Floor', image: '/assets/villas/solaria_07_master.jpg', icon: 'bed', desc: 'Panoramic king retreat with carved stone soaking bath, custom walk-in dressing salon, and private sea loggia.' },
      { id: 'skylounge', title: '2nd Floor Rooftop Observation Belvédère', subtitle: '360° Coastal Observatory', floor: '2nd Floor', image: '/assets/villas/solaria_08_skylounge.jpg', icon: 'sun', desc: 'Expansive open-air belvedere with glowing fire table, 360° unobstructed Mediterranean views, and private telescope.' }
    ]
  },
  {
    id: 'palazzo-di-mare',
    title: 'Palazzo Di Mare',
    category: 'Cliffside Villas',
    price: '$42,500,000',
    location: 'Faraglioni Heights, Capri',
    image: '/assets/estate_palazzo_mare.jpg',
    droneImage: '/assets/villas/palazzo_01_drone.jpg',
    specs: { beds: 8, baths: 10, sqft: '16,800', floorsCount: 3 },
    tagline: 'Grand Italian Seaside Palace',
    description: 'Grand Italian seaside palace overlooking private yacht coves. Triple-tiered cascading infinity pools, limestone colonnades, grand chandeliers, and private harbor launch.',
    features: ['Triple Waterfall Pools', 'Private Yacht Slip and Mooring', 'Roman Thermal Bath', 'Grand Ballroom and Salon', 'Private Security Gatehouse', 'Helipad Access'],
    elevation: '140m Above Sea Level',
    orientation: 'South-Southwest Sea Views',
    supercars: ['Ferrari Daytona SP3 (Rosso Magma)', 'Lamborghini Revuelto (Nero Noctis)'],
    floors: {
      ground: ['Palatial Gated Courtyard & Supercars', 'Grand Renaissance Portal', 'Great Ballroom & Art Gallery', 'State Banquet Kitchen & Wine Cellar', 'Triple Cascading Infinity Pool Terrace'],
      first: ['Grand Master Duke Suite with Ocean Terrace', '5 Imperial VIP Guest Suites', 'Roman Marble Hammam Spa', 'Private Screening Room'],
      second: ['Imperial Rooftop Observatory Salon', 'Fire Pit Banqueting Loggia', 'Private Helipad Sky Lounge', 'Faraglioni 360° Horizon Deck']
    },
    walkthroughStages: [
      { id: 'aerial', title: 'Faraglioni Palace Drone Flyby', subtitle: 'Drone Flight at 140m Over Yacht Coves', floor: 'Exterior Drone', image: '/assets/villas/palazzo_01_drone.jpg', icon: 'drone', desc: 'Distinct drone perspective of the Italian seaside palace, limestone colonnades, triple waterfall pools, and private yacht slip.' },
      { id: 'motorcourt', title: 'Palazzo Motor Court & Hypercars', subtitle: 'Private Gated Porte-Cochère', floor: 'Ground Floor', image: '/assets/villas/palazzo_02_motorcourt.jpg', icon: 'car', desc: 'Grand Roman paved courtyard showcasing Ferrari Daytona SP3 and Lamborghini Revuelto surrounded by stone arches.' },
      { id: 'doors', title: 'Renaissance Double Doors Opening', subtitle: 'Hand-Carved Walnut & Gilded Hardware', floor: 'Ground Floor', image: '/assets/villas/palazzo_03_doors.jpg', icon: 'door', isDoorOpen: true, desc: 'Massive hand-carved Italian double doors swing open smoothly to unveil the grand marble gallery.' },
      { id: 'foyer', title: 'Great Hall & Art Gallery', subtitle: 'Triple-Height Palace Reception', floor: 'Ground Floor', image: '/assets/villas/palazzo_04_foyer.jpg', icon: 'gallery', desc: 'Museum-grade Renaissance oil paintings, sweeping marble double staircase, and 24k gold leaf chandelier.' },
      { id: 'kitchen', title: "Banquet Gourmet Kitchen", subtitle: 'Commercial Culinary Suite & Cellar', floor: 'Ground Floor', image: '/assets/villas/palazzo_05_kitchen.jpg', icon: 'kitchen', desc: 'Double Calacatta marble preparation islands, custom wood oven, and climate-controlled sommelier wine wall.' },
      { id: 'pool', title: 'Triple Waterfall Infinity Pools', subtitle: 'Cascading Limestone Sea Terraces', floor: 'Ground Floor', image: '/assets/villas/palazzo_06_pool.jpg', icon: 'pool', desc: 'Three cascading pools stepping down the cliffs toward the ocean with illuminated underwater fountains.' },
      { id: 'master', title: '1st Floor Grand Duke Master Suite', subtitle: 'Imperial Seafront Sanctuary', floor: '1st Floor', image: '/assets/villas/palazzo_07_master.jpg', icon: 'bed', desc: 'Palatial master sanctuary with freestanding travertine bathtub looking out to the Faraglioni rock formations.' },
      { id: 'skylounge', title: '2nd Floor Imperial Sky Belvédère', subtitle: '360° Faraglioni Horizon Deck', floor: '2nd Floor', image: '/assets/villas/palazzo_08_skylounge.jpg', icon: 'sun', desc: 'Panoramic top-floor lounge with glowing fire table, teak sunbeds, and 360° views across the Mediterranean.' }
    ]
  },
  {
    id: 'villa-azure-heights',
    title: 'Villa Azure Heights',
    category: 'Cliffside Villas',
    price: '$28,200,000',
    location: 'Ravello Coastal Ridge',
    image: '/assets/estate_azure_cliff.jpg',
    droneImage: '/assets/villas/azure_01_drone.jpg',
    specs: { beds: 6, baths: 7, sqft: '12,600', floorsCount: 3 },
    tagline: 'Cantilevered Modern Coastal Sanctuary',
    description: 'Modern architectural triumph cantilevered over the azure sea. Features floating glass-edge cantilever pool, bougainvillea pergolas, and outdoor sunset banquets.',
    features: ['Cantilevered Glass Pool', 'Sunset Dining Terrace', 'Panoramic Glass Lift', 'Smart Climate Atrium', 'Wine and Cigar Vault', 'Private Wellness Center'],
    elevation: '320m Above Sea Level',
    orientation: 'Unobstructed 270-degree Ocean Arc',
    supercars: ['Porsche 911 GT3 RS', 'Bentley Continental GT Speed'],
    floors: {
      ground: ['Ravello Ridge Gated Motor Court', 'Glass & Bronze Pivot Doors', 'Double-Height Foyer & Modern Art Gallery', 'Open Concept Gourmet Kitchen', 'Cantilevered Floating Glass Pool'],
      first: ['Primary Master Suite with 270° Ocean Views', '3 VIP Guest Suites', 'Wellness Hydrotherapy Spa', 'Private Gym & Yoga Terrace'],
      second: ['2nd Floor Sky Lounge & Fire Terrace', 'Star Observatory Deck', 'Outdoor Teppanyaki Bar', 'Ravello Coastal Panorama']
    },
    walkthroughStages: [
      { id: 'aerial', title: 'Ravello Ridge Cantilever Drone Scan', subtitle: 'Drone Flight at 320m Over Coastal Ridge', floor: 'Exterior Drone', image: '/assets/villas/azure_01_drone.jpg', icon: 'drone', desc: 'Dramatic drone flyover high above Ravello coastline revealing the cantilevered glass structure suspended over the sea.' },
      { id: 'motorcourt', title: 'Gated Motor Court & Supercars', subtitle: 'Cantilevered Cliff Driveway', floor: 'Ground Floor', image: '/assets/villas/azure_02_motorcourt.jpg', icon: 'car', desc: 'Private paved motor court with Porsche 911 GT3 RS and Bentley Continental GT Speed.' },
      { id: 'doors', title: 'Glass & Bronze Pivot Doors Opening', subtitle: 'Motorized Architectural Entryway', floor: 'Ground Floor', image: '/assets/villas/azure_03_doors.jpg', icon: 'door', isDoorOpen: true, desc: 'Oversized glass and bronze pivot door glides open smoothly welcoming you into the luminous atrium.' },
      { id: 'foyer', title: 'Grand Foyer & Art Gallery', subtitle: 'Floating Marble Staircase & Salon', floor: 'Ground Floor', image: '/assets/villas/azure_04_foyer.jpg', icon: 'gallery', desc: 'Museum oil art collection on Venetian plaster walls with floating marble steps and panoramic ocean vistas.' },
      { id: 'kitchen', title: "Gourmet Chef's Kitchen", subtitle: 'Integrated Gaggenau & Wine Vault', floor: 'Ground Floor', image: '/assets/villas/azure_05_kitchen.jpg', icon: 'kitchen', desc: 'Polished Calacatta marble island, custom walnut cabinets, and sliding glass wall opening to the breakfast patio.' },
      { id: 'pool', title: 'Cantilevered Glass Infinity Pool', subtitle: 'Suspended Over the Mediterranean', floor: 'Ground Floor', image: '/assets/villas/azure_06_pool.jpg', icon: 'pool', desc: 'Clear glass bottom cantilevered infinity pool extending out past the cliff edge for an eagle-eye water experience.' },
      { id: 'master', title: '1st Floor Master Ridge Suite', subtitle: 'Private Balcony & Sea-Facing Spa', floor: '1st Floor', image: '/assets/villas/azure_07_master.jpg', icon: 'bed', desc: 'Serene king sanctuary with carved stone soaking tub overlooking 270 degrees of azure Mediterranean water.' },
      { id: 'skylounge', title: '2nd Floor Sky Lounge & Observation', subtitle: '360° Ravello Coastline Panorama', floor: '2nd Floor', image: '/assets/villas/azure_08_skylounge.jpg', icon: 'sun', desc: 'Highest point of the estate featuring a fire lounge, telescope station, and sweeping coastline views.' }
    ]
  },
  {
    id: 'bellavista-cliff-sanctuary',
    title: 'Bellavista Cliff Sanctuary',
    category: 'Cliffside Villas',
    price: '$22,900,000',
    location: 'Praiano Sea Cliffs',
    image: '/assets/estate_bellavista_sanctuary.jpg',
    droneImage: '/assets/villas/bellavista_01_drone.jpg',
    specs: { beds: 5, baths: 6, sqft: '9,800', floorsCount: 3 },
    tagline: 'Secluded Clifftop Botanical Haven',
    description: 'Secluded clifftop haven immersed in private botanical gardens. Features dramatic infinity plunge pools, outdoor stone fire lounges, and direct cliff stairs to private sea dock.',
    features: ['Botanical Terraces', 'Cliff-Edge Plunge Pool', 'Private Dock Stairs', 'Outdoor Pizza and Grill Kitchen', 'Solar Microgrid', 'Wine Tasting Cave'],
    elevation: '160m Above Sea Level',
    orientation: 'South-Facing Ocean Panorama',
    supercars: ['Ferrari Roma Spider', 'Maserati MC20 Cielo'],
    floors: {
      ground: ['Botanical Motor Court & Supercars', 'Arched Mediterranean Entry Doors', 'Vaulted Foyer & Painting Gallery', 'Artisan Chef Kitchen & Pizza Oven', 'Cliff-Edge Plunge Pool & Fire Pit'],
      first: ['Master Ocean Haven with Stone Bathtub', '3 En-Suite Bedrooms', 'Herb & Citrus Loggia', 'Private Spa Treatment Room'],
      second: ['2nd Floor Starlight Observation Terrace', 'Panoramic Sea Lounge', 'Outdoor Cinema Deck', '360° Coastline Views']
    },
    walkthroughStages: [
      { id: 'aerial', title: 'Praiano Botanical Drone Approach', subtitle: 'Drone Flight at 160m Over Floral Terraces', floor: 'Exterior Drone', image: '/assets/villas/bellavista_01_drone.jpg', icon: 'drone', desc: 'Drone flyby over cascading floral botanical terraces and sheer sea cliffs plunging into turquoise waters.' },
      { id: 'motorcourt', title: 'Botanical Motor Court & Supercars', subtitle: 'Bougainvillea Stone Driveway', floor: 'Ground Floor', image: '/assets/villas/bellavista_02_motorcourt.jpg', icon: 'car', desc: 'Cobblestone driveway lined with blooming flora, housing Ferrari Roma Spider and Maserati MC20.' },
      { id: 'doors', title: 'Hand-Carved Entry Doors Opening', subtitle: 'Solid Chestnut & Wrought Iron', floor: 'Ground Floor', image: '/assets/villas/bellavista_03_doors.jpg', icon: 'door', isDoorOpen: true, desc: 'Arched timber doors swing inward to showcase the warm stone and marble reception salon.' },
      { id: 'foyer', title: 'Grand Foyer & Art Gallery', subtitle: 'Vaulted Ceiling & Italian Oil Murals', floor: 'Ground Floor', image: '/assets/villas/bellavista_04_foyer.jpg', icon: 'gallery', desc: 'Curving stone staircase, classic Mediterranean landscape paintings, and warm evening lighting.' },
      { id: 'kitchen', title: "Artisan Chef's Kitchen", subtitle: 'Marble Island & Outdoor Pizza Terrace', floor: 'Ground Floor', image: '/assets/villas/bellavista_05_kitchen.jpg', icon: 'kitchen', desc: 'Sculpted stone countertop, built-in espresso bar, and glass doors opening to the alfresco dining pergola.' },
      { id: 'pool', title: 'Cliff-Edge Plunge Pool & Lounges', subtitle: 'Direct Oceanfront Solarium', floor: 'Ground Floor', image: '/assets/villas/bellavista_06_pool.jpg', icon: 'pool', desc: 'Heated saltwater pool built into the rock face with private loungers and linear flame table.' },
      { id: 'master', title: '1st Floor Master Ocean Haven', subtitle: 'Private Balcony & Freestanding Bath', floor: '1st Floor', image: '/assets/villas/bellavista_07_master.jpg', icon: 'bed', desc: 'Tranquil master bedroom with hand-carved stone bath overlooking the calm sea and passing sailboats.' },
      { id: 'skylounge', title: '2nd Floor Starlight Sky Deck', subtitle: '360° Praiano Ocean Panorama', floor: '2nd Floor', image: '/assets/villas/bellavista_08_skylounge.jpg', icon: 'sun', desc: 'Top floor open-air observatory with plush sectional seating, fire table, and 360° coastline vistas.' }
    ]
  },
  {
    id: 'riviera-sky-penthouse',
    title: 'The Riviera Sky Penthouse',
    category: 'Sky Penthouses',
    price: '$18,900,000',
    location: 'Monaco Harbor Apex',
    image: '/assets/estate_penthouse.jpg',
    droneImage: '/assets/villas/riviera_01_drone.jpg',
    specs: { beds: 4, baths: 5, sqft: '7,800', floorsCount: 2 },
    tagline: 'Rooftop Helipad & Glass Infinity Pool',
    description: 'Duplex sky penthouse crowning the Monaco coastline with a private rooftop infinity pool, dedicated express lift, 360-degree glass walls, and automated yacht marina surveillance.',
    features: ['Rooftop Infinity Sky Pool', 'Private Express Elevator', '360 Glass Curtain Walls', 'Smart Automation Hub', 'Private 4-Car Showroom', '24/7 Concierge Service'],
    elevation: '280m Above Monaco Harbor',
    orientation: '360-degree Harbor and Sea Arc',
    supercars: ['Ferrari 296 GTB (Argento Nürburgring)', 'McLaren 750S Spider'],
    floors: {
      ground: ['Private Underground 4-Car Showroom', 'High-Speed Private Lift Foyer', 'Great Glass Salon & Art Gallery', 'Custom Italian Marble Kitchen', 'Cantilevered Sky Balcony'],
      first: ['Primary Master Sky Suite with Panoramic Bath', '3 VIP Suites', 'Private Spa & Sauna', 'Monaco Harbor Overlook Terrace'],
      second: ['Rooftop Sky Deck with Glass Infinity Pool', 'Helipad Touchdown Platform', 'Champagne Sunset Bar', '360° Monaco Harbor View']
    },
    walkthroughStages: [
      { id: 'aerial', title: 'Monaco Harbor Apex Drone Flight', subtitle: 'Drone Flight at 280m Over Monaco Harbor', floor: 'Exterior Drone', image: '/assets/villas/riviera_01_drone.jpg', icon: 'drone', desc: 'Aerial drone orbit over Monaco harbor, megayachts, and the glass sky penthouse crowning the coastline.' },
      { id: 'motorcourt', title: 'Private Sky Garage & Hypercars', subtitle: 'Enclosed Glass Car Gallery', floor: 'Ground Floor', image: '/assets/villas/riviera_02_motorcourt.jpg', icon: 'car', desc: 'Private temperature-controlled showroom with Ferrari 296 GTB and McLaren 750S Spider.' },
      { id: 'doors', title: 'Private Lift & Portal Doors Opening', subtitle: 'Biometric Access Penthouse Doors', floor: 'Ground Floor', image: '/assets/villas/riviera_03_doors.jpg', icon: 'door', isDoorOpen: true, desc: 'Express private lift doors part smoothly opening directly into the double-height glass penthouse foyer.' },
      { id: 'foyer', title: 'Double-Height Penthouse Gallery', subtitle: 'Curated Contemporary Art & Marble', floor: 'Ground Floor', image: '/assets/villas/riviera_04_foyer.jpg', icon: 'gallery', desc: 'Contemporary fine art paintings, custom spiral glass staircase, and shimmering Mediterranean harbor views.' },
      { id: 'kitchen', title: "Italian Marble Show Kitchen", subtitle: 'Calacatta Marble & Wine Vault', floor: 'Ground Floor', image: '/assets/villas/riviera_05_kitchen.jpg', icon: 'kitchen', desc: 'Sculpted marble kitchen island with concealed appliances and sliding glass wall to the dining terrace.' },
      { id: 'pool', title: 'Rooftop Glass Sky Pool', subtitle: 'Cantilevered Over Monaco Harbor', floor: 'Rooftop', image: '/assets/villas/riviera_06_pool.jpg', icon: 'pool', desc: 'Glass-walled infinity pool floating 280 meters in the sky above superyachts and city lights.' },
      { id: 'master', title: '1st Floor Master Sky Sanctuary', subtitle: 'Panoramic Glass En-Suite & Spa', floor: '1st Floor', image: '/assets/villas/riviera_07_master.jpg', icon: 'bed', desc: 'Luxurious king bedroom suite with floor-to-ceiling glass and stone soaking tub looking down at Monaco harbor.' },
      { id: 'skylounge', title: '2nd Floor Rooftop Sky Lounge', subtitle: '360° Monaco & Sea Horizon Belvédère', floor: 'Rooftop', image: '/assets/villas/riviera_08_skylounge.jpg', icon: 'sun', desc: 'Top rooftop observation deck featuring fire lounge, champagne bar, and 360-degree views across the French Riviera.' }
    ]
  },
  {
    id: 'celestial-crown-penthouse',
    title: 'The Celestial Crown Penthouse',
    category: 'Sky Penthouses',
    price: '$34,000,000',
    location: "Cap d'Antibes Heights",
    image: '/assets/estate_celestial_penthouse.jpg',
    droneImage: '/assets/villas/celestial_01_drone.jpg',
    specs: { beds: 5, baths: 6, sqft: '10,500', floorsCount: 2 },
    tagline: 'Double-Height Sky Palace with Private Helipad',
    description: 'Double-height architectural masterpiece towering over the French Riviera. Features private helipad, cantilevered glass infinity pool, and 360-degree sunset ocean views.',
    features: ['Private Rooftop Helipad', 'Glass Cantilevered Pool', 'Dedicated High-Speed Elevator', 'Sommelier Wine Vault', 'Smart Glass Windows', 'Private Spa Suite'],
    elevation: '240m Above Sea Level',
    orientation: '360-degree Riviera Horizon',
    supercars: ['Rolls-Royce Spectre (Bespoke Blue)', 'Ferrari Purosangue (Nero)'],
    floors: {
      ground: ['Private Car Showroom & Porte-Cochère', 'Direct Biometric Lift Entry', 'Double-Height Grand Foyer & Art Gallery', 'Show Kitchen & Sommelier Vault', 'Cantilevered Sky Terrace'],
      first: ['Primary Master Sky Suite with Bath', '4 VIP Suites with Sea Loggias', 'Private Hydro Spa & Sauna', 'Executive Office with Panoramic View'],
      second: ['Rooftop Sky Palace & Helipad', 'Cantilevered Glass Infinity Pool', 'Champagne Sky Lounge', '360° Cap d’Antibes View']
    },
    walkthroughStages: [
      { id: 'aerial', title: "Cap d'Antibes Helipad Drone View", subtitle: "Drone Flight at 240m Over Cap d'Antibes", floor: 'Exterior Drone', image: '/assets/villas/celestial_01_drone.jpg', icon: 'drone', desc: 'High-altitude drone scan revealing the double-height glass crown, private helipad, and azure sea.' },
      { id: 'motorcourt', title: 'Private Porte-Cochère & Supercars', subtitle: 'Secure Executive Parking', floor: 'Ground Floor', image: '/assets/villas/celestial_02_motorcourt.jpg', icon: 'car', desc: 'Executive motor court housing electric Rolls-Royce Spectre and Ferrari Purosangue.' },
      { id: 'doors', title: 'Private Penthouse Doors Opening', subtitle: 'Motorized Glass & Titanium Portal', floor: 'Ground Floor', image: '/assets/villas/celestial_03_doors.jpg', icon: 'door', isDoorOpen: true, desc: 'Titanium and glass portal glides open with soundless luxury into the soaring penthouse salon.' },
      { id: 'foyer', title: 'Double-Height Art Foyer', subtitle: 'Curated Museum Masterpieces', floor: 'Ground Floor', image: '/assets/villas/celestial_04_foyer.jpg', icon: 'gallery', desc: 'Museum-grade oil paintings along stone walls with custom floating glass and marble staircase.' },
      { id: 'kitchen', title: "Gourmet Marble Kitchen", subtitle: 'Custom Walnut & Wine Cellar', floor: 'Ground Floor', image: '/assets/villas/celestial_05_kitchen.jpg', icon: 'kitchen', desc: 'Calacatta marble waterfall island, Gaggenau suite, and floor-to-ceiling glass doors opening to ocean breeze.' },
      { id: 'pool', title: 'Cantilevered Glass Sky Pool', subtitle: 'Suspended Over Cap d’Antibes', floor: 'Rooftop', image: '/assets/villas/celestial_06_pool.jpg', icon: 'pool', desc: 'Breathtaking cantilevered pool with transparent glass edge overlooking passing luxury yachts.' },
      { id: 'master', title: '1st Floor Master Sky Sanctuary', subtitle: 'Freestanding Spa & Balcony', floor: '1st Floor', image: '/assets/villas/celestial_07_master.jpg', icon: 'bed', desc: 'Double master bedroom suite with stone soaking tub and panoramic terrace looking across the Côte d’Azur.' },
      { id: 'skylounge', title: '2nd Floor Rooftop Sky Palace', subtitle: '360° Cap d’Antibes Sunset Deck', floor: 'Rooftop', image: '/assets/villas/celestial_08_skylounge.jpg', icon: 'sun', desc: 'Private rooftop observatory with fire table, helipad deck, and 360-degree panoramic ocean views.' }
    ]
  },
  {
    id: 'monaco-grand-sky-manor',
    title: 'Monaco Grand Sky Manor',
    category: 'Sky Penthouses',
    price: '$26,500,000',
    location: 'Monte Carlo Overlook',
    image: '/assets/estate_monaco_sky.jpg',
    droneImage: '/assets/villas/monaco_sky_01_drone.jpg',
    specs: { beds: 4, baths: 5, sqft: '8,400', floorsCount: 2 },
    tagline: 'Palatial Sky Manor Overlooking Monte Carlo Harbor',
    description: 'Palatial sky manor overlooking the iconic Monte Carlo harbor. Features private sky pool, panoramic glass rotunda, private elevator, and Italian marble finishes throughout.',
    features: ['Panoramic Harbor Views', 'Private Sky Pool', 'Direct Elevator Access', 'Private Wellness Spa', 'Automated Smart Home', '24/7 VIP Concierge'],
    elevation: '260m Above Sea Level',
    orientation: 'Direct South Harbor and Sea View',
    supercars: ['Bentley Batur (Midnight Onyx)', 'Ferrari SF90 Stradale'],
    floors: {
      ground: ['Monaco Private Parking Gallery', 'Direct Biometric Lift Vestibule', 'Grand Reception Foyer & Art Rotunda', 'Italian Show Kitchen & Wine Bar', 'Harbor-Facing Glass Terrace'],
      first: ['Master Penthouse Suite with Ocean View Spa', '3 Guest En-Suites', 'Wellness Sauna & Steam Room', 'Private Executive Lounge'],
      second: ['2nd Floor Sky Pool & Solarium Deck', 'Monte Carlo Harbor Fire Lounge', 'Cocktail Bar & Telescope Station', '360° Monaco Coastline Arc']
    },
    walkthroughStages: [
      { id: 'aerial', title: 'Monte Carlo Sky Manor Drone Scan', subtitle: 'Drone Flight at 260m Over Monte Carlo', floor: 'Exterior Drone', image: '/assets/villas/monaco_sky_01_drone.jpg', icon: 'drone', desc: 'Aerial drone scan overlooking Monte Carlo marina, yacht regattas, and the crowning glass sky manor.' },
      { id: 'motorcourt', title: 'Private Sky Garage & Hypercars', subtitle: 'Exclusive Resident Garage', floor: 'Ground Floor', image: '/assets/villas/monaco_sky_02_motorcourt.jpg', icon: 'car', desc: 'Private garage featuring Bentley Batur and Ferrari SF90 Stradale with direct private elevator access.' },
      { id: 'doors', title: 'Private Manor Doors Opening', subtitle: 'Bronze & Smoked Glass Portal', floor: 'Ground Floor', image: '/assets/villas/monaco_sky_03_doors.jpg', icon: 'door', isDoorOpen: true, desc: 'Bronze and smoked glass doors swing open smoothly welcoming you into the grand harborfront salon.' },
      { id: 'foyer', title: 'Grand Foyer & Art Gallery', subtitle: 'Curated Modern Art Rotunda', floor: 'Ground Floor', image: '/assets/villas/monaco_sky_04_foyer.jpg', icon: 'gallery', desc: 'Italian marble floor, curated oil paintings, and panoramic arched glass looking down onto Monte Carlo.' },
      { id: 'kitchen', title: "Gourmet Marble Kitchen", subtitle: 'Calacatta Marble & Wine Vault', floor: 'Ground Floor', image: '/assets/villas/monaco_sky_05_kitchen.jpg', icon: 'kitchen', desc: 'Calacatta gold island with brass fixtures, integrated Gaggenau appliances, and ocean view terrace.' },
      { id: 'pool', title: 'Private Sky Pool & Solarium', subtitle: 'Suspended Over Harbor Lights', floor: 'Rooftop', image: '/assets/villas/monaco_sky_06_pool.jpg', icon: 'pool', desc: 'Heated sky pool with illuminated underwater fixtures overlooking the Mediterranean night lights.' },
      { id: 'master', title: '1st Floor Master Manor Suite', subtitle: 'Oceanfront Spa Sanctuary', floor: '1st Floor', image: '/assets/villas/monaco_sky_07_master.jpg', icon: 'bed', desc: 'King suite sanctuary with stone tub, walk-in dressing room, and glass doors looking over the sea.' },
      { id: 'skylounge', title: '2nd Floor Rooftop Sky Lounge', subtitle: '360° Monte Carlo Coastline Panorama', floor: 'Rooftop', image: '/assets/villas/monaco_sky_08_skylounge.jpg', icon: 'sun', desc: 'Top-tier sky lounge with outdoor fire table, cocktail bar, and 360-degree panorama of Monaco and the sea.' }
    ]
  },
  {
    id: 'lumina-cliff-penthouse',
    title: 'The Lumina Cliff Penthouse',
    category: 'Sky Penthouses',
    price: '$16,800,000',
    location: 'Saint-Jean-Cap-Ferrat',
    image: '/assets/estate_lumina_penthouse.jpg',
    droneImage: '/assets/villas/lumina_01_drone.jpg',
    specs: { beds: 3, baths: 4, sqft: '6,600', floorsCount: 2 },
    tagline: 'Modern Luminescent Sea Penthouse',
    description: 'Modern luminescent penthouse nestled on the cliffs of Saint-Jean-Cap-Ferrat. Features private rooftop terrace, infinity edge plunge pool, and floor-to-ceiling glass walls.',
    features: ['Rooftop Infinity Plunge Pool', 'Private Sea View Solarium', 'Direct Elevator Access', 'Integrated Smart Home', 'Private 2-Car Garage', '24/7 Security'],
    elevation: '190m Above Sea Level',
    orientation: 'South-East Sunrise & Sunset Ocean Arc',
    supercars: ['Ferrari Roma (Grigio Titanio)', 'Aston Martin DB12 (Satin Silver)'],
    floors: {
      ground: ['Cap-Ferrat Gated Motor Court', 'Direct Elevator Foyer Entry', 'Open Concept Foyer & Gallery', 'Artisan Marble Kitchen & Wine Wall', 'Cantilevered Sea Terrace'],
      first: ['Primary Master Suite with Stone Soaking Bath', '2 VIP Guest En-Suites', 'Private Wellness Sauna', 'Cap-Ferrat Sunset Balcony'],
      second: ['2nd Floor Rooftop Plunge Pool Deck', 'Sunset Fire Pit Lounge', 'Stargazing Telescope Point', '360° Cap-Ferrat Sea Panorama']
    },
    walkthroughStages: [
      { id: 'aerial', title: 'Cap-Ferrat Peninsula Drone Scan', subtitle: 'Drone Flight at 190m Over Cap-Ferrat', floor: 'Exterior Drone', image: '/assets/villas/lumina_01_drone.jpg', icon: 'drone', desc: 'Aerial drone scan over the lush peninsula of Saint-Jean-Cap-Ferrat and sparkling turquoise waters.' },
      { id: 'motorcourt', title: 'Private Motor Court & Supercars', subtitle: 'Secure Coastal Driveway', floor: 'Ground Floor', image: '/assets/villas/lumina_02_motorcourt.jpg', icon: 'car', desc: 'Stone motor court with Ferrari Roma and Aston Martin DB12 under shaded olive trees.' },
      { id: 'doors', title: 'Architectural Entry Doors Opening', subtitle: 'Minimalist Walnut & Glass Portal', floor: 'Ground Floor', image: '/assets/villas/lumina_03_doors.jpg', icon: 'door', isDoorOpen: true, desc: 'Floor-to-ceiling glass and timber pivot doors glide open into the luminous oceanfront interior.' },
      { id: 'foyer', title: 'Grand Foyer & Art Gallery', subtitle: 'Curated Riviera Fine Art', floor: 'Ground Floor', image: '/assets/villas/lumina_04_foyer.jpg', icon: 'gallery', desc: 'Curated coastal oil paintings, Italian marble flooring, and sweeping views of the Mediterranean.' },
      { id: 'kitchen', title: "Gourmet Marble Kitchen", subtitle: 'Calacatta Island & Wine Vault', floor: 'Ground Floor', image: '/assets/villas/lumina_05_kitchen.jpg', icon: 'kitchen', desc: 'Calacatta marble preparation island with wine vault and sliding glass doors to the sea terrace.' },
      { id: 'pool', title: 'Rooftop Infinity Plunge Pool', subtitle: 'Suspended Over Saint-Jean-Cap-Ferrat', floor: 'Rooftop', image: '/assets/villas/lumina_06_pool.jpg', icon: 'pool', desc: 'Rooftop heated plunge pool with submerged lights and direct views of passing yachts.' },
      { id: 'master', title: '1st Floor Master Suite Sanctuary', subtitle: 'Panoramic Soaking Tub & Balcony', floor: '1st Floor', image: '/assets/villas/lumina_07_master.jpg', icon: 'bed', desc: 'Tranquil king master suite with stone bathtub overlooking the azure bay of Cap-Ferrat.' },
      { id: 'skylounge', title: '2nd Floor Rooftop Sky Deck', subtitle: '360° Cap-Ferrat Coastline Panorama', floor: 'Rooftop', image: '/assets/villas/lumina_08_skylounge.jpg', icon: 'sun', desc: 'Top floor rooftop lounge with open flame table, cocktail bar, and 360-degree ocean views.' }
    ]
  }
];
