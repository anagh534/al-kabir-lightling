"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Mountain,
} from "lucide-react";

import { companyInfo } from "@/data/company";

export default function Footer({ onRequestQuote }) {
  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-block p-2.5 bg-white rounded-xl shadow-xs hover:opacity-95 transition-opacity"
              aria-label="Al Kabir Lighting Homepage"
            >
              <div className="relative w-40 h-12">
                <Image
                  src="/logo.png"
                  alt="Al Kabir Lighting Logo"
                  width={160}
                  height={48}
                  className="object-contain w-auto h-full"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Your trusted partner for lighting, electrical and building material
              solutions across the Sultanate of Oman. Supplying world-class
              commercial, industrial and infrastructure projects.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#009ea9] transition-colors"
                aria-label="Follow Al Kabir Lighting on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.8v-7.6h-2.8M7.86 6.5a1.63 1.63 0 0 0-1.64 1.63c0 .9.73 1.63 1.64 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z" />
                </svg>
              </a>
              <a
                href={companyInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#009ea9] transition-colors"
                aria-label="Follow Al Kabir Lighting on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12Z" />
                </svg>
              </a>
              <a
                href={companyInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#009ea9] transition-colors"
                aria-label="Follow Al Kabir Lighting on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>
              <a
                href={companyInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#009ea9] transition-colors"
                aria-label="Subscribe to Al Kabir Lighting on YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#009ea9] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#009ea9] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="hover:text-[#009ea9] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#brands"
                  className="hover:text-[#009ea9] transition-colors"
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/#solutions"
                  className="hover:text-[#009ea9] transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/#sectors"
                  className="hover:text-[#009ea9] transition-colors"
                >
                  Sectors
                </Link>
              </li>
              <li>
                <Link
                  href="/branches"
                  className="hover:text-[#009ea9] transition-colors"
                >
                  Branches
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#009ea9] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#009ea9] shrink-0 mt-1" />
                <span>P.O. Box 1234, Muscat, Sultanate of Oman</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#009ea9] shrink-0" />
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#009ea9] shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#009ea9] shrink-0 mt-0.5" />
                <span>Sun – Thu: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Let's Build Brighter Together (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
              Let&apos;s Build Brighter Together
            </h3>
            <p className="text-sm text-slate-400">
              Quality products. Reliable partnerships. A brighter Oman. Submit
              your project BOQ or enquiry today for fast technical pricing.
            </p>
            <div>
              <button
                onClick={onRequestQuote}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#009ea9] hover:bg-[#008791] active:scale-95 transition-all shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9]"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Oman Bar */}
      <div className="border-t border-slate-800 bg-slate-950/60 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Al Kabir Lighting. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <Mountain className="w-4 h-4 text-[#009ea9]" aria-hidden="true" />
            <span>Proudly Supporting Oman&apos;s Development</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
