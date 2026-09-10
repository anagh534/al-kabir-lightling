"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Phone, MessageSquare } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function Header({ onRequestQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/#products" },
    { name: "Brands", href: "/#brands" },
    { name: "Solutions", href: "/#solutions" },
    { name: "Sectors", href: "/#sectors" },
    { name: "Branches", href: "/branches" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9] rounded-lg p-1"
            aria-label="Al Kabir Lighting - Home"
          >
            <div className="relative w-36 h-14 sm:w-44 sm:h-16 flex items-center">
              <Image
                src="/logo.png"
                alt="Al Kabir Lighting Logo"
                width={176}
                height={64}
                priority
                className="object-contain w-auto h-full"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9] ${
                    active
                      ? "text-[#009ea9]"
                      : "text-slate-700 hover:text-[#009ea9]"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#009ea9] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Request Quote */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onRequestQuote}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#009ea9] hover:bg-[#008791] active:scale-95 transition-all shadow-sm hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9] focus-visible:ring-offset-2"
              aria-label="Request a project quotation"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestQuote}
              type="button"
              className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-[#009ea9] hover:bg-[#008791]"
            >
              <span>Quote</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-slate-700 hover:text-[#009ea9] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? "bg-[#e6f8fa] text-[#009ea9] font-semibold"
                      : "text-slate-800 hover:bg-slate-50 hover:text-[#009ea9]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onRequestQuote) onRequestQuote();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-[#009ea9] hover:bg-[#008791] shadow-sm"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex gap-2 pt-2">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  <Phone className="w-3.5 h-3.5 text-[#009ea9]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20Al%20Kabir%20Lighting,%20I%20have%20a%20project%20enquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
