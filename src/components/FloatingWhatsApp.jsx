"use client";

import { MessageSquare } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function FloatingWhatsApp() {
  return (
    <aside
      className="fixed bottom-6 right-6 z-40 flex items-center group"
      aria-label="Contact via WhatsApp"
    >
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with a Lighting Specialist
      </span>
      <a
        href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20Al%20Kabir%20Lighting,%20I%20would%20like%20to%20inquire%20about%20products%20and%20pricing.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
        aria-label="Direct WhatsApp Chat with Al Kabir Lighting Oman"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
      </a>
    </aside>
  );
}
