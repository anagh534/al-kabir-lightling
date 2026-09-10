"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building,
  Users2,
  Settings,
  Sparkles,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { productCategories } from "@/data/categories";
import { featuredProducts } from "@/data/products";
import { sectors } from "@/data/sectors";
import { companyInfo } from "@/data/company";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import SectorCard from "@/components/SectorCard";
import BrandCarousel from "@/components/BrandCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import QuoteModal from "@/components/QuoteModal";

export default function HomePage() {
  const [activeModalCategory, setActiveModalCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenQuote = (categoryName = "") => {
    setActiveModalCategory(categoryName);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION matching reference mockup */}
      <section className="relative min-h-[560px] lg:min-h-[640px] flex items-center overflow-hidden bg-slate-900">
        {/* Background Showroom Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-showroom.jpg"
            alt="Al Kabir Lighting Luxury Showroom & Reception"
            fill
            priority
            className="object-cover object-center lg:object-right filter brightness-[0.88]"
          />
          {/* Gradient Overlay for high-contrast legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-900/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-[#009ea9]/40 text-[#00e5f2] text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quality Products. Stronger Spaces.</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Lighting &amp; Building <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#00e5f2]">
                  Material Solutions
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
                Supplying quality lighting, electrical, and building material
                products across Oman for a brighter, smarter tomorrow.
              </p>

              {/* Buttons matching reference */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#009ea9] hover:bg-[#008690] active:scale-95 transition-all shadow-lg shadow-[#009ea9]/25 cursor-pointer"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => handleOpenQuote("Project Solution")}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-slate-900/60 hover:bg-slate-900/90 border border-white/30 hover:border-white transition-all backdrop-blur-xs cursor-pointer"
                >
                  <span>Request a Quote</span>
                </button>
              </div>

              {/* 3 Badges below Hero Buttons */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#00e5f2]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Trusted Suppliers</p>
                    <p className="text-[11px] text-slate-300">Global Brands</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#00e5f2]">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Solutions for</p>
                    <p className="text-[11px] text-slate-300">Every Sector</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#00e5f2]">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Supporting</p>
                    <p className="text-[11px] text-slate-300">Oman&apos;s Growth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Architectural Typography Column (5 cols) */}
            <div className="hidden lg:flex lg:col-span-5 justify-end">
              <div className="p-8 rounded-3xl bg-slate-950/45 backdrop-blur-md border border-white/15 max-w-sm text-right space-y-3">
                <p className="text-xl font-black text-white/95 tracking-wide uppercase leading-snug">
                  Better <br />
                  Lighting <br />
                  Brighter <br />
                  Possibilities
                </p>
                <div className="w-12 h-1 bg-[#009ea9] ml-auto rounded-full" />
                <p className="text-xs text-slate-300 font-medium pt-2">
                  Lighting &bull; Electrical &bull; Building Materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR / CREDIBILITY STRIP */}
      <section className="bg-white border-b border-slate-200/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {companyInfo.stats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <p className="text-2xl sm:text-3xl font-black text-[#009ea9]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES matching reference */}
      <section id="products" className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#009ea9]">
                Complete Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Product Categories
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Explore our comprehensive range of lighting and building material
                solutions.
              </p>
            </div>
            <a
              href="#featured"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009ea9] hover:text-[#00858f] transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {productCategories.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onClick={() => handleOpenQuote(cat.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS matching reference */}
      <section id="featured" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#009ea9]">
                Commercial &amp; Project Ready
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Featured Products
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                High-quality products from trusted global brands.
              </p>
            </div>
            <button
              onClick={() => handleOpenQuote("All Featured Products")}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009ea9] hover:text-[#00858f] transition-colors cursor-pointer"
            >
              <span>Request Full Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {featuredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onRequestQuote={(prodName) => handleOpenQuote(prodName)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR BRANDS */}
      <BrandCarousel />

      {/* 6. SOLUTIONS FOR EVERY SECTOR matching reference */}
      <section id="sectors" className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#009ea9]">
                Oman Project Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Solutions for Every Sector
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Lighting and building material solutions for diverse industries
                across Oman.
              </p>
            </div>
            <Link
              href="/about#sectors"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009ea9] hover:text-[#00858f] transition-colors"
            >
              <span>Learn More About Sectors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {sectors.map((sec) => (
              <SectorCard key={sec.id} sector={sec} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US matching reference */}
      <WhyChooseUs />

      {/* 8. QUICK RFQ / REQUIREMENT FORM matching reference */}
      <ContactForm />

      {/* Modal instance */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCategory={activeModalCategory}
      />
    </div>
  );
}
