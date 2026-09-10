"use client";

import { useState, useEffect } from "react";
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
import ProductShowcaseCard from "@/components/ProductShowcaseCard";
import heroImg from "../../public/images/hero-lighting.jpg";

export default function HomePage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    setIsHeroVisible(true);
  }, []);

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
      {/* 1. HERO SECTION - REDESIGNED */}
      <section className="relative min-h-[100svh] flex items-center bg-[#090e17] text-white overflow-hidden motion-reduce:transition-none pt-20">
        {/* Modern Architectural Background */}
        <div 
          className="absolute inset-0 z-0 transform-gpu"
          style={{
            clipPath: isHeroVisible ? 'inset(0 0 0 0)' : 'inset(8% 8% 8% 8%)',
            transform: isHeroVisible ? 'scale(1)' : 'scale(1.05)',
            transition: 'all 1600ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop"
            alt="Modern Architectural Lighting in Oman"
            className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.1]"
          />
          {/* Multi-layer thematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#090e17] via-[#090e17]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090e17] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[#009ea9]/10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-4xl space-y-8">
            
            {/* Dynamic Floating Badges - Instantly answers "What do we do?" */}
            <div className="flex flex-wrap items-center gap-3">
              {[
                { name: 'Architectural Lighting', delay: 'delay-100' },
                { name: 'Electrical Switchgear', delay: 'delay-200' },
                { name: 'Building Materials', delay: 'delay-300' }
              ].map((badge) => (
                <span 
                  key={badge.name}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-white/5 border border-white/10 backdrop-blur-md text-[#e6f8fa] shadow-2xl transition-all duration-1000 ease-editorial transform will-change-transform ${isHeroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'} ${badge.delay}`}
                >
                  {badge.name}
                </span>
              ))}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              <span className="block overflow-hidden pb-1">
                <span className={`block transition-transform duration-1200 ease-editorial delay-300 will-change-transform ${isHeroVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                  Engineering the Light
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className={`block transition-transform duration-1200 ease-editorial delay-400 will-change-transform text-[#00e5f2]`}>
                  <span className={`block transition-transform duration-1200 ease-editorial delay-400 will-change-transform ${isHeroVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                    that builds Oman.
                  </span>
                </span>
              </span>
            </h1>

            <div className="overflow-hidden">
              <p className={`text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl transition-all duration-1200 ease-editorial delay-500 ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                We are Oman's premier supply partner, sourcing world-class luminaires, certified electrical infrastructure, and structural materials for commercial and industrial mega-projects.
              </p>
            </div>

            {/* CTAs with modern pulse animation */}
            <div className={`flex flex-wrap items-center gap-5 pt-6 transition-all duration-1200 ease-editorial delay-700 ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button
                onClick={() => handleOpenQuote("Turnkey Project Solution")}
                type="button"
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-black text-white bg-[#009ea9] hover:bg-[#00858f] active:scale-95 transition-all shadow-[0_0_40px_rgba(0,158,169,0.4)] hover:shadow-[0_0_60px_rgba(0,158,169,0.6)] cursor-pointer group overflow-hidden"
              >
                <span className="relative z-10">Request Project Quotation</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
              </button>

              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-white/5 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all cursor-pointer group"
              >
                <span>View Our Portfolio</span>
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Value Indicators - Refined */}
            <div className={`pt-12 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-slate-300 text-xs transition-all duration-1200 ease-editorial delay-1000 ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="group">
                <p className="text-3xl font-black text-white group-hover:text-[#00e5f2] transition-colors">500+</p>
                <p className="text-slate-400 mt-1 uppercase tracking-widest text-[10px] font-bold">Projects Supplied</p>
              </div>
              <div className="group">
                <p className="text-3xl font-black text-white group-hover:text-[#00e5f2] transition-colors">50+</p>
                <p className="text-slate-400 mt-1 uppercase tracking-widest text-[10px] font-bold">Global Brands</p>
              </div>
              <div className="group">
                <p className="text-3xl font-black text-white group-hover:text-[#00e5f2] transition-colors">100%</p>
                <p className="text-slate-400 mt-1 uppercase tracking-widest text-[10px] font-bold">Spec Compliant</p>
              </div>
              <div className="group">
                <p className="text-3xl font-black text-white group-hover:text-[#00e5f2] transition-colors">24h</p>
                <p className="text-slate-400 mt-1 uppercase tracking-widest text-[10px] font-bold">RFQ Turnaround</p>
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

          {/* Grid of High-Res Category Cards using Architectural Design System */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat, idx) => (
              <ProductShowcaseCard 
                key={cat.id}
                title={cat.name}
                designer={cat.tagline}
                imageUrl={cat.image}
                description={cat.description}
                items={cat.items}
                onQuoteClick={() => handleOpenQuote(cat.name)}
              />
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
                className="bg-white p-8 rounded-2xl border border-slate-200/90 hover:border-[#009ea9] hover:shadow-md transition-all flex items-center justify-center min-h-[120px]"
              >
                <div className="flex items-center justify-center">
                  {b.name === "PHILIPS" && (
                    <span className="font-sans font-black tracking-wider text-2xl uppercase" style={{ color: '#00529A' }}>Philips</span>
                  )}
                  {b.name === "Schneider Electric" && (
                    <div className="flex items-center gap-2">
                      <svg className="w-8 h-8" style={{ color: '#3DCD58' }} viewBox="0 0 100 100" fill="currentColor">
                        <path d="M20,20 L80,20 L80,80 L20,80 Z M35,35 L65,35 L65,65 L35,65 Z" fillRule="evenodd" clipRule="evenodd" />
                      </svg>
                      <span className="font-sans font-bold tracking-tight text-base leading-tight" style={{ color: '#3DCD58' }}>Schneider<br/>Electric</span>
                    </div>
                  )}
                  {b.name === "OSRAM" && (
                    <span className="font-sans font-bold tracking-widest text-2xl uppercase" style={{ color: '#FF6600' }}>Osram</span>
                  )}
                  {b.name === "Legrand" && (
                    <div className="flex items-center gap-2">
                      <svg className="w-6 h-6" style={{ color: '#E30613' }} viewBox="0 0 100 100" fill="currentColor">
                        <rect x="10" y="10" width="35" height="80" />
                        <rect x="55" y="10" width="35" height="80" />
                      </svg>
                      <span className="font-sans font-black tracking-tight text-xl lowercase" style={{ color: '#E30613' }}>legrand</span>
                    </div>
                  )}
                  {b.name === "ABB" && (
                    <span className="font-sans font-black tracking-tighter text-4xl uppercase" style={{ color: '#FF000F' }}>ABB</span>
                  )}
                  {b.name === "HAVELLS" && (
                    <span className="font-sans font-black tracking-widest text-2xl uppercase" style={{ color: '#ED1C24' }}>Havells</span>
                  )}
                  {b.name === "3M" && (
                    <span className="font-sans font-black tracking-tighter text-5xl uppercase" style={{ color: '#FF0000' }}>3M</span>
                  )}
                  {b.name === "Dulux" && (
                    <span className="font-serif font-bold italic tracking-tight text-3xl" style={{ color: '#003B7E' }}>Dulux</span>
                  )}
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
