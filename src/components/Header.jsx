"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Phone, Mail } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { companyInfo } from "@/data/company";

import logoImg from "../../public/logo.png";

export default function Header({ onRequestQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9] rounded-lg p-1"
            aria-label="Al Kabir Lighting - Home"
          >
            <div className="relative w-40 h-14 sm:w-48 sm:h-16 flex items-center">
              <Image
                src={logoImg}
                alt="Al Kabir Lighting"
                priority
                className="object-contain w-auto h-full"
              />
            </div>
          </Link>




          {/* Desktop Navigation - Strictly Home, About, Contact */}
          <nav
            className="hidden md:flex items-center gap-2 lg:gap-3"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9] ${
                    active
                      ? "bg-[#e6f8fa] text-[#009ea9]"
                      : "text-slate-700 hover:text-[#009ea9] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#009ea9] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#009ea9]" />
              <span>{companyInfo.phone}</span>
            </a>

            <button
              onClick={onRequestQuote}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#009ea9] hover:bg-[#00858f] active:scale-95 transition-all shadow-sm hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9]"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onRequestQuote}
              type="button"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#009ea9]"
            >
              <span>Quote</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-slate-700 hover:text-[#009ea9] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    active
                      ? "bg-[#e6f8fa] text-[#009ea9]"
                      : "text-slate-800 hover:bg-slate-50"
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
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#009ea9]"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 px-2">
                <span>{companyInfo.email}</span>
                <span>{companyInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
