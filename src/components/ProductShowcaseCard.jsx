'use client';

import React, { useRef, useState, useEffect } from 'react';

import Image from 'next/image';

import { ArrowRight } from "lucide-react";

export default function ProductShowcaseCard({ title, designer, imageUrl, description, items, onQuoteClick }) {
  const [isIntersecting, setIntersecting] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#009ea9]/60 transition-all duration-300 flex flex-col justify-between transform-gpu"
      style={{
        clipPath: isIntersecting ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
        transition: 'clip-path 1200ms cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div>
        {/* High-Res Photography with Sheen */}
        <div className="relative w-full h-56 overflow-hidden bg-slate-100 rounded-t-3xl">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-[1.015] transition-transform duration-700 ease-editorial will-change-transform"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          <div className="absolute inset-0 bg-ceiling-wash opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-lumen pointer-events-none" />
          <span className="absolute bottom-3 left-4 text-xs font-semibold text-white/90 drop-shadow-sm">
            {designer}
          </span>
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#009ea9] transition-colors">
            {title}
          </h3>
          <p className="text-xs text-slate-500 mt-2.5 leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Sub-items */}
          {items && items.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
              {items.map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-100 text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Action */}
      <div className="p-6 pt-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuoteClick?.();
          }}
          type="button"
          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#009ea9] hover:text-white bg-[#e6f8fa] hover:bg-[#009ea9] transition-all flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group/btn"
        >
          <span className="relative z-10 flex items-center gap-2 transition-transform duration-400 ease-editorial group-hover/btn:-translate-y-0.5">
            <span>Request Quotation / BOQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </div>
  );
}
