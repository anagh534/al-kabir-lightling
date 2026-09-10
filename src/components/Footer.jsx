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

export default function Footer({ onRequestQuote }) {
  return (
    <footer className="bg-[#090e17] text-slate-300 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-block p-2 bg-white rounded-xl shadow-xs"
              aria-label="Al Kabir Lighting Home"
            >
              <div className="relative w-44 h-12">
                <Image
                  src="/logo.png"
                  alt="Al Kabir Lighting"
                  width={176}
                  height={48}
                  className="object-contain w-auto h-full"
                />
              </div>
            </Link>



            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Al Kabir Lighting is an Oman-based lighting, electrical, and
              building materials specialist supplying high-spec commercial,
              industrial, and infrastructure developments.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#009ea9]" />
              <span>Oman Regulatory &amp; Ministry Compliant Products</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-[#009ea9] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-[#009ea9] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-[#009ea9] transition-colors"
                >
                  Contact &amp; RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Muscat Headquarters
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#009ea9] shrink-0 mt-1" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#009ea9] shrink-0" />
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#009ea9] shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#009ea9] shrink-0" />
                <span>{companyInfo.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#009ea9] hover:bg-[#00858f] transition-all cursor-pointer shadow-md"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/80 bg-black/40 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Al Kabir Lighting &amp; Trading LLC. All rights reserved.</p>
          <p className="text-slate-400 font-medium">Sultanate of Oman</p>
        </div>
      </div>
    </footer>
  );
}
