"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Home,
  Building2,
  Briefcase,
  Store,
  GraduationCap,
  HeartPulse,
  SlidersHorizontal,
  RotateCcw,
  Download,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { products, filterOptions } from "@/data/products";

/* ──────────────────────────────────────────────
   Reusable Filter Checkbox
   ────────────────────────────────────────────── */
function Checkbox({ checked, onChange, label, accent = false }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group py-1">
      <div className="relative flex items-center justify-center w-[18px] h-[18px]">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer appearance-none w-[18px] h-[18px] border-2 border-slate-300 rounded checked:bg-[#009ea9] checked:border-[#009ea9] transition-all cursor-pointer"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <span
        className={`text-[13px] transition-colors select-none ${accent ? "text-[#009ea9] font-semibold" : "text-slate-600 group-hover:text-slate-900"
          }`}
      >
        {label}
      </span>
    </label>
  );
}

/* ──────────────────────────────────────────────
   Collapsible Filter Section
   ────────────────────────────────────────────── */
function FilterAccordion({ title, sectionKey, options, filters, onFilterChange, onClearSection, isOpen, onToggle }) {
  const activeCount = filters[sectionKey]?.length || 0;

  return (
    <div className="border-b border-slate-100 last:border-none">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-left group"
      >
        <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
          {title}
          {activeCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#009ea9] text-white text-[10px] font-bold flex items-center justify-center">
              {activeCount}
            </span>
          )}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
      >
        <Checkbox
          checked={activeCount === 0}
          onChange={() => onClearSection(sectionKey)}
          label="All"
        />
        {options.map((opt) => (
          <Checkbox
            key={opt}
            checked={filters[sectionKey].includes(opt)}
            onChange={() => onFilterChange(sectionKey, opt)}
            label={opt}
            accent={filters[sectionKey].includes(opt)}
          />
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Product Detail Modal
   ────────────────────────────────────────────── */
function ProductDetailModal({ product, isOpen, onClose, onQuote }) {
  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!product) return null;

  const specItems = [
    { label: "Category", value: product.category },
    { label: "Brand", value: product.brand },
    { label: "Colour Temp", value: product.colorTemp },
    { label: "Power", value: product.power },
    { label: "Mounting", value: product.mounting },
    { label: "Warranty", value: product.warranty },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Panel */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div
          className={`relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col transition-all duration-300 ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-slate-100/80 backdrop-blur-sm hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1">
            <div className="flex flex-col md:flex-row">
              {/* Left: Image */}
              <div className="md:w-5/12 bg-[#f8f8f8] p-10 md:p-12 flex items-center justify-center shrink-0 md:sticky md:top-0 md:h-[90vh]">
                <div className="relative w-full aspect-square max-w-[320px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="400px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Right: Details */}
              <div className="md:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col">
                {/* Category badge */}
                <span className="inline-flex self-start px-3 py-1 rounded-lg bg-[#e6f8fa] text-[10px] font-bold text-[#009ea9] uppercase tracking-wider mb-4">
                  {product.category}
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                  {product.name}
                </h2>

                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
                  by {product.brand} — {product.specs}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  {product.longDescription || product.description}
                </p>

                {/* Spec Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {specItems.map((item) => (
                    <div key={item.label} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        {item.label}
                      </span>
                      <span className="text-[13px] font-semibold text-slate-900">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-900 mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#e6f8fa] text-[#009ea9] flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[13px] text-slate-600">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Applications */}
                {product.applications && product.applications.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-900 mb-3">Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <span key={app} className="px-3 py-1.5 rounded-lg border border-slate-200 text-[12px] font-semibold text-slate-700 bg-white">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {product.certifications && product.certifications.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-900 mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map((cert) => (
                        <span key={cert} className="px-3 py-1.5 rounded-lg bg-slate-900 text-[11px] font-bold text-white tracking-wide">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="pt-4 mt-auto border-t border-slate-100">
                  <button
                    onClick={() => { onQuote(product.name); onClose(); }}
                    className="w-full py-3.5 rounded-2xl text-sm font-bold text-white bg-[#009ea9] hover:bg-[#00858f] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#009ea9]/25"
                  >
                    Request Quotation for {product.name}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Product Card
   ────────────────────────────────────────────── */
function ProductCard({ product, index, onQuote, onViewDetail }) {
  return (
    <ScrollReveal direction="up" distance={24} delay={(index % 8) * 80} duration={700}>
      <div
        onClick={() => onViewDetail(product)}
        className="group bg-white rounded-2xl border border-slate-200/60 hover:shadow-xl hover:shadow-[#009ea9]/8 hover:border-[#009ea9]/30 transition-all duration-500 flex flex-col h-full overflow-hidden transform-gpu hover:-translate-y-1 cursor-pointer"
      >
        {/* Product Image */}
        <div className="relative w-full aspect-square bg-[#f8f8f8] p-8 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-contain group-hover:scale-[1.06] transition-transform duration-700 ease-out will-change-transform"
            />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col flex-grow border-t border-slate-100">
          <h3 className="text-[15px] font-bold text-slate-900 leading-snug mb-1.5 group-hover:text-[#009ea9] transition-colors">
            {product.name}
          </h3>
          <p className="text-[12px] text-slate-500 leading-relaxed mb-5 flex-grow">
            {product.description}
          </p>
          <button
            onClick={(e) => { e.stopPropagation(); onQuote(product.name); }}
            className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-[#009ea9] hover:bg-[#00858f] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            Request Quote
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ──────────────────────────────────────────────
   Main Page Component
   ────────────────────────────────────────────── */
export default function ProductsPage() {
  const router = useRouter();

  /* ── State ── */
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    colorTemperatures: [],
    powerRanges: [],
    mountingTypes: [],
  });
  const [openSections, setOpenSections] = useState({
    categories: true,
    brands: true,
    colorTemperatures: true,
    powerRanges: true,
    mountingTypes: true,
  });

  /* ── Handlers ── */
  const toggleSection = useCallback(
    (section) => setOpenSections((prev) => ({ ...prev, [section]: !prev[section] })),
    []
  );

  const handleFilterChange = useCallback((section, value) => {
    setFilters((prev) => {
      const current = prev[section];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [section]: updated };
    });
  }, []);

  const clearSection = useCallback((section) => {
    setFilters((prev) => ({ ...prev, [section]: [] }));
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters({
      categories: [],
      brands: [],
      colorTemperatures: [],
      powerRanges: [],
      mountingTypes: [],
    });
    setSearchQuery("");
  }, []);

  const handleQuote = useCallback(
    (name) => router.push(`/contact?subject=${encodeURIComponent(name)}#quote-form`),
    [router]
  );

  const activeFilterCount = Object.values(filters).reduce((acc, arr) => acc + arr.length, 0);

  /* ── Filtered products ── */
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      const matchesCat = filters.categories.length === 0 || filters.categories.includes(p.category);
      const matchesBrand = filters.brands.length === 0 || filters.brands.includes(p.brand);
      const matchesTemp =
        filters.colorTemperatures.length === 0 || filters.colorTemperatures.includes(p.colorTemp);
      const matchesPower = filters.powerRanges.length === 0 || filters.powerRanges.includes(p.power);
      const matchesMounting =
        filters.mountingTypes.length === 0 || filters.mountingTypes.includes(p.mounting);

      return matchesSearch && matchesCat && matchesBrand && matchesTemp && matchesPower && matchesMounting;
    });
  }, [searchQuery, filters]);

  /* ── Lock body scroll when mobile filter is open ── */
  useEffect(() => {
    document.body.style.overflow = isMobileFilterOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileFilterOpen]);

  /* ── Shared filter accordion props factory ── */
  const filterProps = (key, title) => ({
    title,
    sectionKey: key,
    options: filterOptions[key],
    filters,
    onFilterChange: handleFilterChange,
    onClearSection: clearSection,
    isOpen: openSections[key],
    onToggle: () => toggleSection(key),
  });

  /* ── Application Areas data ── */
  const applicationAreas = [
    { icon: Home, title: "Homes &\nResidential", img: products[0]?.image },
    { icon: Building2, title: "Offices &\nWorkspaces", img: products[1]?.image },
    { icon: Store, title: "Retail Stores\n& Showrooms", img: products[2]?.image },
    { icon: Briefcase, title: "Hotels &\nHospitality", img: products[3]?.image },
    { icon: GraduationCap, title: "Educational\nInstitutions", img: products[4]?.image },
    { icon: HeartPulse, title: "Healthcare\nFacilities", img: products[5]?.image },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ═══════════════════════════════════════
          1. PAGE HEADER (consistent with other pages)
          ═══════════════════════════════════════ */}
      <PageHeader
        title="Product Catalogue"
        subtitle="Explore our comprehensive range of high-performance luminaires, fixtures and infrastructure solutions for every project scale."
        breadcrumbs={[{ label: "Products" }]}
      />

      {/* ═══════════════════════════════════════
          2. SEARCH BAR (sticky on scroll)
          ═══════════════════════════════════════ */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 bg-white shadow-xs hover:border-[#009ea9] hover:text-[#009ea9] transition-all shrink-0 relative"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#009ea9] text-white text-[10px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Search Input */}
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#009ea9] transition-colors" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 focus:border-[#009ea9] transition-all"
              />
            </div>

            {/* Sort */}
            <select className="hidden sm:block px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 bg-white outline-none focus:ring-2 focus:ring-[#009ea9] cursor-pointer shrink-0">
              <option>Sort by: Featured</option>
              <option>Newest Arrivals</option>
              <option>Name A-Z</option>
              <option>Name Z-A</option>
            </select>

            {/* Product count */}
            <span className="hidden md:block text-xs text-slate-500 font-medium shrink-0">
              {filteredProducts.length} of {products.length} products
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          3. MAIN LAYOUT (Sidebar + Grid)
          ═══════════════════════════════════════ */}
      <section className="flex-1 py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-10">
            {/* ── Desktop Sidebar ── */}
            <aside className="hidden lg:block w-[260px] shrink-0">
              <div className="sticky top-[85px] bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
                  <h2 className="text-base font-bold text-slate-900">Filter Products</h2>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="text-[11px] font-semibold text-[#009ea9] hover:underline flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Clear All
                    </button>
                  )}
                </div>
                <div className="px-5 max-h-[calc(100vh-180px)] overflow-y-auto">
                  <FilterAccordion {...filterProps("categories", "Categories")} />
                  <FilterAccordion {...filterProps("brands", "Brands")} />
                  <FilterAccordion {...filterProps("colorTemperatures", "Colour Temperature")} />
                  <FilterAccordion {...filterProps("powerRanges", "Power Range")} />
                  <FilterAccordion {...filterProps("mountingTypes", "Mounting Type")} />
                </div>
              </div>
            </aside>

            {/* ── Products Grid ── */}
            <main className="flex-1 min-w-0">
              <ScrollReveal direction="up" distance={20}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Indoor Lighting</h2>
                  <p className="text-sm text-slate-500 mt-1 max-w-2xl">
                    Explore our wide range of indoor lighting products, combining modern design with energy efficiency to create brighter, healthier and more inspiring interiors.
                  </p>
                </div>
              </ScrollReveal>

              {filteredProducts.length === 0 ? (
                <ScrollReveal direction="up" distance={20}>
                  <div className="text-center py-24 bg-slate-50 rounded-2xl border border-slate-200/50">
                    <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                      <Search className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">No products matched</h3>
                    <p className="text-slate-500 text-sm mb-6">Try adjusting your search or removing some filters.</p>
                    <button
                      onClick={clearAllFilters}
                      className="px-6 py-2.5 bg-[#009ea9] hover:bg-[#00858f] rounded-xl text-xs font-bold text-white transition-colors shadow-sm"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </ScrollReveal>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
                  {filteredProducts.map((product, idx) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={idx}
                      onQuote={handleQuote}
                      onViewDetail={setSelectedProduct}
                    />
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. MOBILE FILTER DRAWER (slide-in from left)
          ═══════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileFilterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setIsMobileFilterOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isMobileFilterOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-white">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-[#009ea9]" />
              Filters
            </h2>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Filter content (scrollable) */}
          <div className="flex-1 overflow-y-auto px-5">
            <FilterAccordion {...filterProps("categories", "Categories")} />
            <FilterAccordion {...filterProps("brands", "Brands")} />
            <FilterAccordion {...filterProps("colorTemperatures", "Colour Temperature")} />
            <FilterAccordion {...filterProps("powerRanges", "Power Range")} />
            <FilterAccordion {...filterProps("mountingTypes", "Mounting Type")} />
          </div>

          {/* Footer actions */}
          <div className="px-5 py-4 border-t border-slate-200 bg-slate-50 flex gap-3">
            <button
              onClick={clearAllFilters}
              className="flex-1 py-3 rounded-xl border border-slate-300 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Clear
            </button>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="flex-1 py-3 rounded-xl text-sm font-bold text-white bg-[#009ea9] hover:bg-[#00858f] shadow-sm transition-colors"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          7. PRODUCT DETAIL MODAL
          ═══════════════════════════════════════ */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onQuote={handleQuote}
      />
    </div>
  );
}
