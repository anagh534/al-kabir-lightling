"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Home,
  Building2,
  Briefcase,
  Store,
  GraduationCap,
  HeartPulse,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";


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
  const ITEMS_PER_PAGE = 16;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  /* ── Handlers ── */
  const handleQuote = useCallback(
    (name) => router.push(`/contact?subject=${encodeURIComponent(name)}#quote-form`),
    [router]
  );

  /* ── Filtered products ── */
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const q = searchQuery.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    });
  }, [searchQuery]);

  /* ── Pagination ── */
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedProducts = filteredProducts.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE
  );
  const startItem = filteredProducts.length === 0 ? 0 : (safeCurrentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(safeCurrentPage * ITEMS_PER_PAGE, filteredProducts.length);

  // Reset page when search changes
  useEffect(() => { setCurrentPage(1); }, [searchQuery]);

  const goToPage = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


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

            {/* Product count */}
            <span className="hidden md:block text-xs text-slate-500 font-medium shrink-0">
              Showing {startItem}–{endItem} of {filteredProducts.length} products
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
                    <p className="text-slate-500 text-sm mb-6">Try adjusting your search.</p>
                  </div>
                </ScrollReveal>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {paginatedProducts.map((product, idx) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={idx}
                        onQuote={handleQuote}
                        onViewDetail={setSelectedProduct}
                      />
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                      {/* Page info (mobile) */}
                      <p className="text-xs text-slate-500 font-medium order-2 sm:order-1">
                        Showing {startItem}–{endItem} of {filteredProducts.length} products
                      </p>

                      {/* Page buttons */}
                      <div className="flex items-center gap-1.5 order-1 sm:order-2">
                        {/* Prev */}
                        <button
                          onClick={() => goToPage(safeCurrentPage - 1)}
                          disabled={safeCurrentPage === 1}
                          className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#009ea9] hover:text-[#009ea9] disabled:opacity-30 disabled:pointer-events-none transition-all bg-white shadow-xs"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        {/* Page numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                          // Show first, last, current, and neighbors; ellipsis for gaps
                          const isVisible =
                            page === 1 ||
                            page === totalPages ||
                            Math.abs(page - safeCurrentPage) <= 1;

                          if (!isVisible) {
                            // Show ellipsis only once per gap
                            const prevVisible =
                              page - 1 === 1 ||
                              page - 1 === totalPages ||
                              Math.abs(page - 1 - safeCurrentPage) <= 1;
                            if (prevVisible) {
                              return (
                                <span key={page} className="w-10 h-10 flex items-center justify-center text-slate-400 text-sm">
                                  …
                                </span>
                              );
                            }
                            return null;
                          }

                          return (
                            <button
                              key={page}
                              onClick={() => goToPage(page)}
                              className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                                page === safeCurrentPage
                                  ? "bg-[#009ea9] text-white shadow-md"
                                  : "border border-slate-200 text-slate-600 hover:border-[#009ea9] hover:text-[#009ea9] bg-white shadow-xs"
                              }`}
                            >
                              {page}
                            </button>
                          );
                        })}

                        {/* Next */}
                        <button
                          onClick={() => goToPage(safeCurrentPage + 1)}
                          disabled={safeCurrentPage === totalPages}
                          className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#009ea9] hover:text-[#009ea9] disabled:opacity-30 disabled:pointer-events-none transition-all bg-white shadow-xs"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
        </div>
      </section>


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
