"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export default function ProductCard({ product, onRequestQuote }) {
  return (
    <article
      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
      aria-labelledby={`product-heading-${product.id}`}
    >
      {/* Product Image Area */}
      <div className="relative w-full h-44 sm:h-48 bg-slate-50/70 p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <span className="absolute top-2.5 left-2.5 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/90 text-slate-600 border border-slate-200">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3
            id={`product-heading-${product.id}`}
            className="text-base font-bold text-slate-900 group-hover:text-[#009ea9] transition-colors"
          >
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            {product.description}
          </p>

          {/* Quick Specs Snippet */}
          {product.specs && (
            <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-1.5 text-[11px] text-slate-600">
              {product.specs.power && (
                <div className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#009ea9]" />
                  <span>{product.specs.power}</span>
                </div>
              )}
              {product.specs.ipRating && (
                <div className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#009ea9]" />
                  <span>{product.specs.ipRating}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Link: Request Quote -> */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <button
            onClick={() => onRequestQuote && onRequestQuote(product.name)}
            type="button"
            className="w-full inline-flex items-center justify-between text-xs font-bold text-[#009ea9] hover:text-[#008791] group-hover:translate-x-0.5 transition-all cursor-pointer py-1"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
