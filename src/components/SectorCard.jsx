"use client";

import Image from "next/image";
import {
  Building2,
  Factory,
  Landmark,
  Flame,
  Home,
  Briefcase,
} from "lucide-react";

const iconMap = {
  Building2: Building2,
  Factory: Factory,
  Landmark: Landmark,
  Flame: Flame,
  Home: Home,
  Briefcase: Briefcase,
};

export default function SectorCard({ sector }) {
  const IconComponent = iconMap[sector.icon] || Building2;

  return (
    <article
      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
      aria-label={`Sector: ${sector.title}`}
    >
      {/* Sector Image */}
      <div className="relative w-full h-36 overflow-hidden bg-slate-100">
        <Image
          src={sector.image}
          alt={sector.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Sector Info with circular teal icon badge */}
      <div className="p-4 flex items-start gap-3 flex-1">
        <div className="w-9 h-9 rounded-full bg-[#009ea9] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
          <IconComponent className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#009ea9] transition-colors truncate">
            {sector.title}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 leading-snug">
            {sector.subtitle}
          </p>
        </div>
      </div>
    </article>
  );
}
