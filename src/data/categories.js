import indoorImg from "../../public/images/categories/cat-indoor.webp";
import outdoorImg from "../../public/images/categories/cat-outdoor.webp";
import archImg from "../../public/images/categories/cat-architectural.webp";
import emergImg from "../../public/images/categories/cat-emergency.webp";
import elecImg from "../../public/images/categories/cat-electrical.webp";
import matImg from "../../public/images/categories/cat-materials.webp";

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
    id: "emergency",
    name: "Emergency Lighting",
    tagline: "Safety & Egress",
    description: "Reliable exit signs and backup luminaires ensuring compliance with life safety codes.",
    image: emergImg,
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
