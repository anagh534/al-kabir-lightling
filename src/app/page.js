"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  FileSpreadsheet,
  Award,
  Truck,
  ExternalLink,
} from "lucide-react";
import { productCategories } from "@/data/categories";
import { brands } from "@/data/brands";
import { companyInfo } from "@/data/company";
import ContactForm from "@/components/ContactForm";
import QuoteModal from "@/components/QuoteModal";

export default function HomePage() {
  const [activeModalCategory, setActiveModalCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategoryTab, setSelectedCategoryTab] = useState("all");

  const handleOpenQuote = (categoryName = "") => {
    setActiveModalCategory(categoryName);
    setModalOpen(true);
  };

  const engineeringCapabilities = [
    {
      icon: Cpu,
      title: "Dialux 3D Photometric Simulation",
      description:
        "Comprehensive Lux level calculations, false-color heatmaps, and glare UGR analyses conforming strictly to Oman Municipality and CIBSE guidelines.",
    },
    {
      icon: Layers,
      title: "Consultant Submittal Preparation",
      description:
        "Full technical dossiers with compliance statements, manufacturer datasheets, test certificates, and third-party lab approvals for fast consultant sign-off.",
    },
    {
      icon: FileSpreadsheet,
      title: "BOQ Take-Off & Value Engineering",
      description:
        "Itemized bill-of-quantity pricing and alternative equivalent luminaire proposals that maintain technical integrity while optimizing contractor margins.",
    },
    {
      icon: Award,
      title: "Sample Coordination & Mockups",
      description:
        "Physical luminaire and wiring accessory samples coordinated directly for client and consultant approval committees prior to bulk procurement.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[620px] lg:min-h-[720px] flex items-center bg-[#090e17] text-white overflow-hidden">
        {/* Master Hero Background Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-lighting.jpg"
            alt="Monumental Architectural Lighting in Modern Commercial Lobby"
            fill
            priority
            quality={92}
            className="object-cover object-center filter brightness-[0.78]"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#090e17]/95 via-[#090e17]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090e17] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#00e5f2] uppercase">
              Oman&apos;s Trusted Project Supply Partner
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Architectural Lighting &amp; Building Material Solutions
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              Supplying high-performance commercial, industrial, infrastructure
              lighting, and certified electrical building materials across the
              Sultanate of Oman.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => handleOpenQuote("Turnkey Project Solution")}
                type="button"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#009ea9] hover:bg-[#00858f] active:scale-95 transition-all shadow-lg shadow-[#009ea9]/25 cursor-pointer"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Browse Portfolio</span>
              </a>
            </div>

            {/* Value Indicators */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-300 text-xs">
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">500+</p>
                <p className="text-slate-400 mt-0.5">Projects Supplied</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">50+</p>
                <p className="text-slate-400 mt-0.5">Global Brand Partners</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">100%</p>
                <p className="text-slate-400 mt-0.5">Oman Spec Compliant</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">24–48h</p>
                <p className="text-slate-400 mt-0.5">RFQ Turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORIES - HIGH RESOLUTION PHOTOGRAPHY */}
      <section id="categories" className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#009ea9]">
                Engineered for Projects
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Product Categories
              </h2>
              <p className="text-sm text-slate-500 mt-1 max-w-xl">
                Comprehensive multi-brand portfolio covering architectural
                interiors, high-power exterior façade fixtures, ATEX industrial
                units, and electrical infrastructure.
              </p>
            </div>

            <button
              onClick={() => handleOpenQuote("Full Product Range")}
              type="button"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#009ea9] hover:text-[#00858f] transition-colors cursor-pointer"
            >
              <span>Download Product Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Grid of 6 High-Res Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#009ea9]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* High-Res Photography */}
                  <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute bottom-3 left-4 text-xs font-semibold text-white/90 drop-shadow-sm">
                      {cat.specs}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#009ea9] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#009ea9] mt-1">
                      {cat.tagline}
                    </p>
                    <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Sub-items */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {cat.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-100 text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleOpenQuote(cat.name)}
                    type="button"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#009ea9] hover:text-white bg-[#e6f8fa] hover:bg-[#009ea9] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Quotation / BOQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL & ENGINEERING SUPPORT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009ea9]">
                Engineering Integrity
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Technical Support from Specification to Commissioning
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe technical support should be a practical, daily service
                that eliminates project bottlenecks. Our engineers work directly
                with MEP consultants and main contractors across Oman to ensure
                smooth submittal approvals and compliant lighting calculations.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#009ea9] hover:bg-[#00858f] transition-all shadow-sm"
                >
                  <span>Read About Our Engineering Process</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {engineeringCapabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#009ea9] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#e6f8fa] text-[#009ea9] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. GLOBAL BRAND PARTNERS */}
      <section className="py-20 bg-slate-50/80 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#009ea9]">
              Multi-Brand Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Internationally Recognized Manufacturers
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Sourcing authentic, factory-warranted luminaires, switchgear, and
              building materials from world leaders.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brands.map((b) => (
              <div
                key={b.name}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-[#009ea9] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-slate-900 tracking-tight">
                      {b.name}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      {b.origin}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#009ea9]">
                    {b.category}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                    {b.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE RFQ / REQUIREMENT FORM */}
      <ContactForm />

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCategory={activeModalCategory}
      />
    </div>
  );
}
