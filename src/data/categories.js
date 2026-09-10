import indoorImg from "../../public/images/cat-indoor.jpg";
import outdoorImg from "../../public/images/cat-outdoor.jpg";
import industrialImg from "../../public/images/cat-industrial.jpg";
import streetImg from "../../public/images/cat-street.jpg";
import emergencyImg from "../../public/images/cat-emergency.jpg";
import materialsImg from "../../public/images/cat-materials.jpg";

export const productCategories = [
  {
    id: "indoor-lighting",
    name: "Indoor Lighting",
    tagline: "Modern living & commercial spaces with glare-free architectural precision.",
    description: "Architectural magnetic track systems, recessed downlights, micro-prismatic LED panels, and designer suspended luminaires.",
    image: indoorImg,
    specs: "CRI > 90 • UGR < 19 • DALI / 0-10V Dimming",
    items: ["Magnetic Track Systems", "Architectural Downlights", "Linear Profiles", "Acoustic Pendants"],
  },
  {
    id: "outdoor-lighting",
    name: "Outdoor Lighting",
    tagline: "Engineered for harsh Gulf weather with IP66/IP67 durability.",
    description: "Façade grazing luminaires, architectural wall washers, landscape bollards, and submersible water features.",
    image: outdoorImg,
    specs: "IP66 / IP67 • Marine-Grade Die-Cast Aluminum • IK09",
    items: ["Façade Wall Washers", "Landscape Bollards", "Inground Spotlights", "Underwater Fixtures"],
  },
  {
    id: "industrial-lighting",
    name: "Industrial Lighting",
    tagline: "High-output efficiency for demanding production & logistics environments.",
    description: "Robust UFO high bays, tri-proof LED systems, explosion-proof ATEX luminaires, and heavy-duty crane floodlights.",
    image: industrialImg,
    specs: "Up to 160 lm/W • ATEX Zone 1 & 2 • 10kV Surge Protection",
    items: ["High Bay Luminaires", "ATEX Explosion-Proof", "Tri-Proof LED Batten", "High Mast Floods"],
  },
  {
    id: "street-lighting",
    name: "Street & Infrastructure",
    tagline: "Oman municipality-compliant roadway and highway lighting.",
    description: "Precision-optics LED streetlights, high-mast illumination for junctions, solar streetlights, and smart Zhaga/NEMA controllers.",
    image: streetImg,
    specs: "Nama & Municipality Approved • 100,000h L80B10 • Smart City Ready",
    items: ["Highway Streetlights", "High-Mast Systems", "Solar Hybrid Lights", "Zhaga IoT Nodes"],
  },
  {
    id: "emergency-lighting",
    name: "Emergency & Safety",
    tagline: "Civil defence-certified central battery and self-contained backup luminaires.",
    description: "Architectural illuminated exit signage, twin-head emergency spotlights, central battery control panels, and escape route luminaires.",
    image: emergencyImg,
    specs: "Civil Defence Approved • 3-Hour LiFePO4 Autonomy • Self-Testing",
    items: ["Illuminated Exit Signs", "Twin Spot Projectors", "Central Battery Systems", "Bulkhead Fittings"],
  },
  {
    id: "building-materials",
    name: "Electrical & Building Materials",
    tagline: "Comprehensive power distribution, cables, and turnkey MEP supplies.",
    description: "Low-voltage armored power cables, architectural metallic wiring accessories, modular switchgear, conduits, and project hardware.",
    image: materialsImg,
    specs: "BS 5467 / IEC 60502 • OETC & Nama Compliant • Fire-Resistant LSF",
    items: ["Low Voltage Cables", "Architectural Switches & Sockets", "Cable Trays & Conduits", "Industrial Switchgear"],
  },
];
