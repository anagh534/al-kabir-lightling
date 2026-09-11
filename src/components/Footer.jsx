"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import { navLinks } from "@/data/navigation";
import logoImg from "../../public/logo.png";

export default function Footer({ onRequestQuote }) {
  const getSocialIcon = (platform) => {
    switch (platform) {
      case "linkedin": return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
      case "facebook": return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      );
      case "instagram": return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
      case "youtube": return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      );
      default: return platform.charAt(0).toUpperCase();
    }
  };

  return (
    <footer className="bg-[#040810] text-slate-300 relative overflow-hidden">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#009ea9] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Col 1: Brand (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <Link
              href="/"
              className="inline-block transition-transform hover:opacity-90"
              aria-label={`${companyInfo.name} Home`}
            >
              <div className="relative w-52 h-14">
                <Image
                  src={logoImg}
                  alt={companyInfo.name}
                  className="object-contain object-left w-full h-full brightness-0 invert drop-shadow-lg"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {Object.entries(companyInfo.socials).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-[#009ea9] hover:text-white transition-colors"
                    aria-label={`${companyInfo.name} on ${platform}`}
                  >
                    {getSocialIcon(platform)}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Navigation
            </h4>
            <ul className="space-y-3 font-medium text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-[#00e5f2] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#009ea9]"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Inquiries (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {companyInfo.city} Headquarters
            </h4>
            <div className="space-y-4 text-sm text-slate-300 font-medium">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#009ea9]" />
                </div>
                <span className="mt-1.5 leading-relaxed">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#009ea9]" />
                </div>
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} className="hover:text-[#00e5f2] transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#009ea9]" />
                </div>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-[#00e5f2] transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#009ea9]" />
                </div>
                <span>{companyInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/80 bg-black/50 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <p className="tracking-wide">© {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
