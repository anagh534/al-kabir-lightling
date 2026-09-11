import airportImg from "../../public/images/portfolio/airport.jpg";
import conventionImg from "../../public/images/portfolio/convention.jpg";
import mallImg from "../../public/images/portfolio/mall.jpg";
import portImg from "../../public/images/portfolio/port.jpg";
import hotelImg from "../../public/images/portfolio/hotel.jpg";
import officeImg from "../../public/images/portfolio/office.jpg";

export const projects = [
  {
    id: 1,
    title: "Muscat International Airport",
    category: "Infrastructure",
    description: "Complete supply of high-mast apron lighting and interior terminal LED solutions. Meeting rigorous international aviation standards.",
    image: airportImg,
    year: "2023",
    brands: ["Philips", "Schneider Electric"]
  },
  {
    id: 2,
    title: "Oman Convention & Exhibition Centre",
    category: "Commercial",
    description: "Architectural interior lighting and advanced dimming control systems for exhibition halls and luxury auditoriums.",
    image: conventionImg,
    year: "2022",
    brands: ["OSRAM", "Legrand"]
  },
  {
    id: 3,
    title: "Mall of Oman",
    category: "Retail",
    description: "Dynamic facade lighting, general retail ambiance lighting, and comprehensive building material supply for structural integrity.",
    image: mallImg,
    year: "2021",
    brands: ["Philips", "Havells"]
  },
  {
    id: 4,
    title: "Sohar Industrial Port",
    category: "Industrial",
    description: "Heavy-duty ATEX certified industrial lighting and robust electrical switchgear for harsh maritime environments.",
    image: portImg,
    year: "2023",
    brands: ["ABB", "3M"]
  },
  {
    id: 5,
    title: "Kempinski Hotel Muscat",
    category: "Hospitality",
    description: "Luxury hospitality lighting design supply, ensuring a warm, inviting, and highly controlled atmospheric experience.",
    image: hotelImg,
    year: "2020",
    brands: ["Legrand", "Dulux"]
  },
  {
    id: 6,
    title: "Ministry of Education HQ",
    category: "Government",
    description: "Energy-efficient office lighting panels and complete wiring device solutions for a modern corporate workspace.",
    image: officeImg,
    year: "2022",
    brands: ["Schneider Electric", "Philips"]
  }
];
