"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { brands } from "@/data/brands";

export default function BrandCarousel() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Brands" },
    { id: "lighting", label: "Lighting" },
    { id: "electrical", label: "Electrical" },
    { id: "materials", label: "Materials" },
  ];

  const filteredBrands = brands.filter((brand) => {
    if (filter === "all") return true;
    if (filter === "lighting")
      return brand.category.toLowerCase().includes("lighting");
    if (filter === "electrical")
      return (
        brand.category.toLowerCase().includes("electrical") ||
        brand.category.toLowerCase().includes("power")
      );
    if (filter === "materials")
      return (
        brand.category.toLowerCase().includes("materials") ||
        brand.category.toLowerCase().includes("coatings")
      );
    return true;
  });

  return (
    <section id="brands" className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-[#009ea9]">
              Global Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Our Brands
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Partnering with globally trusted brands to deliver the best solutions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                type="button"
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  filter === cat.id
                    ? "bg-[#009ea9] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Grid matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {filteredBrands.map((brand) => (
            <div
              key={brand.name}
              className="group bg-white border border-slate-200/90 hover:border-[#009ea9] rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center min-h-[90px] shadow-2xs hover:shadow-md transition-all duration-200"
              title={`${brand.name} - ${brand.category}`}
            >
              <div className="relative w-full h-10 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="120px"
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
                />
              </div>
              <span className="text-[10px] text-slate-400 group-hover:text-slate-600 mt-2 truncate w-full text-center font-medium">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
