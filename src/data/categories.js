import indoorImg from "../../public/images/categories/cat-indoor.jpg";
import outdoorImg from "../../public/images/categories/cat-outdoor.jpg";
import archImg from "../../public/images/categories/cat-architectural.jpg";
import indImg from "../../public/images/categories/cat-industrial.jpg";
import streetImg from "../../public/images/categories/cat-street.jpg";
import emergImg from "../../public/images/categories/cat-emergency.jpg";
import landscapeImg from "../../public/images/categories/cat-landscape.jpg";
import solarImg from "../../public/images/categories/cat-solar.jpg";
import exImg from "../../public/images/categories/cat-explosion.jpg";
import sportsImg from "../../public/images/categories/cat-sports.jpg";
import elecImg from "../../public/images/categories/cat-electrical.jpg";
import matImg from "../../public/images/categories/cat-materials.jpg";

export const productCategories = [
  {
    id: "indoor",
    name: "Indoor Lighting",
    tagline: "Commercial & Residential",
    description: "Premium downlights, panels, and linear fixtures engineered for visual comfort and high efficacy.",
    image: indoorImg,
  },
  {
    id: "outdoor",
    name: "Outdoor Lighting",
    tagline: "Infrastructure & Security",
    description: "Robust floodlights and perimeter lighting built to withstand extreme GCC climates.",
    image: outdoorImg,
  },
  {
    id: "architectural",
    name: "Architectural Lighting",
    tagline: "Façade & Decorative",
    description: "Dynamic RGBW solutions and precision wall washers for iconic building facades.",
    image: archImg,
  },
  {
    id: "industrial",
    name: "Industrial Lighting",
    tagline: "Warehouses & Factories",
    description: "High-bay luminaires delivering powerful illumination for heavy industrial applications.",
    image: indImg,
  },
  {
    id: "street",
    name: "Street Lighting",
    tagline: "Roadways & Highways",
    description: "High-performance optics designed for municipal roads and large-scale infrastructure.",
    image: streetImg,
  },
  {
    id: "emergency",
    name: "Emergency Lighting",
    tagline: "Safety & Egress",
    description: "Reliable exit signs and backup luminaires ensuring compliance with life safety codes.",
    image: emergImg,
  },
  {
    id: "landscape",
    name: "Landscape Lighting",
    tagline: "Parks & Gardens",
    description: "Subtle bollards, uplights, and pathway fixtures to enhance nocturnal outdoor aesthetics.",
    image: landscapeImg,
  },
  {
    id: "solar",
    name: "Solar Lighting",
    tagline: "Off-Grid & Sustainable",
    description: "Autonomous solar street lights and area lighting for sustainable, low-carbon developments.",
    image: solarImg,
  },
  {
    id: "explosion",
    name: "Explosion Proof",
    tagline: "Oil & Gas (ATEX)",
    description: "Certified hazardous area lighting designed for refineries and petrochemical plants.",
    image: exImg,
  },
  {
    id: "sports",
    name: "Sports Lighting",
    tagline: "Stadiums & Arenas",
    description: "High-mast floodlighting systems delivering broadcast-quality illumination.",
    image: sportsImg,
  },
  {
    id: "electrical",
    name: "Electrical Accessories",
    tagline: "Wiring & Distribution",
    description: "Premium wiring devices, cables, and distribution boards for safe power management.",
    image: elecImg,
  },
  {
    id: "materials",
    name: "Building Materials",
    tagline: "Construction & Finishing",
    description: "High-grade finishing materials and supplies supporting major construction projects.",
    image: matImg,
  },
];
