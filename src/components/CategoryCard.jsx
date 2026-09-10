"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category, onClick }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick && onClick();
        }
      }}
      className="group relative bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9]"
      aria-label={`View ${category.name} category`}
    >
      {/* Category Image */}
      <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#009ea9] transition-colors leading-snug">
            {category.name}
          </h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
            {category.tagline}
          </p>
        </div>

        <div className="mt-4 pt-2 flex items-center justify-between border-t border-slate-100">
          <span className="text-[11px] font-semibold text-[#009ea9] uppercase tracking-wider">
            Explore
          </span>
          <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#009ea9] text-slate-500 group-hover:text-white flex items-center justify-center transition-colors">
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
