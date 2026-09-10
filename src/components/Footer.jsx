"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Send,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import logoImg from "../../public/logo.png";

export default function Footer({ onRequestQuote }) {
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
              aria-label="Al Kabir Lighting Home"
            >
              <div className="relative w-52 h-14">
                <Image
                  src={logoImg}
                  alt="Al Kabir Lighting"
                  className="object-contain object-left w-full h-full brightness-0 invert drop-shadow-lg"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Al Kabir Lighting is an Oman-based lighting, electrical, and
              building materials specialist supplying high-spec commercial,
              industrial, and infrastructure developments.
            </p>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Navigation
            </h4>
            <ul className="space-y-3 font-medium text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-[#00e5f2] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#009ea9]"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-[#00e5f2] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#009ea9]"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-300 hover:text-[#00e5f2] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#009ea9]"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[#00e5f2] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#009ea9]"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Muscat Headquarters
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
          <p className="tracking-wide">© {new Date().getFullYear()} Al Kabir Lighting &amp; Trading LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
