"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function TopBar() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // Read the current language from the googtrans cookie on mount
    const cookies = document.cookie.split(';');
    const googtransCookie = cookies.find(c => c.trim().startsWith('googtrans='));
    if (googtransCookie) {
      const val = googtransCookie.split('=')[1];
      if (val.includes('/ar')) {
        setLang("ar");
      }
    }
  }, []);

  const switchLanguage = (newLang) => {
    setLang(newLang);
    const cookieValue = `/en/${newLang}`;
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    document.cookie = `googtrans=${cookieValue}; domain=${window.location.hostname}; path=/;`;
    window.location.reload();
  };

  return (
    <div className="bg-slate-100/90 border-b border-slate-200/80 text-xs text-slate-700 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Location & Translate */}
        <div className="flex items-center gap-4 text-slate-700 font-medium">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#009ea9]" aria-hidden="true" />
            <span>{companyInfo.city}, {companyInfo.country}</span>
          </div>
          
          <div className="h-3 w-px bg-slate-300"></div>

          {/* Custom Sleek Language Switcher */}
          <div className="flex items-center gap-1.5 text-slate-600 hover:text-[#009ea9] transition-colors relative">
            <Globe className="w-3.5 h-3.5" />
            <select
              value={lang}
              onChange={(e) => switchLanguage(e.target.value)}
              className="bg-transparent border-none text-xs font-semibold outline-none cursor-pointer appearance-none pr-1"
            >
              <option value="en">EN</option>
              <option value="ar">AR (العربية)</option>
            </select>
          </div>

          {/* Hidden Google Translate Target */}
          <div id="google_translate_element" className="hidden"></div>
        </div>

        {/* Center: Tagline (hidden on very small screens) */}
        <div className="hidden md:block text-slate-600 font-medium tracking-wide">
          <span>{companyInfo.tagline}</span>
        </div>

        {/* Right: Phone & Email */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 hover:text-[#009ea9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9] rounded"
            aria-label={`Call ${companyInfo.name} at ${companyInfo.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#009ea9]" aria-hidden="true" />
            <span className="font-semibold">{companyInfo.phone}</span>
          </a>
          <a
            href={`mailto:${companyInfo.email}`}
            className="flex items-center gap-1.5 hover:text-[#009ea9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9] rounded"
            aria-label={`Email ${companyInfo.name} at ${companyInfo.email}`}
          >
            <Mail className="w-3.5 h-3.5 text-[#009ea9]" aria-hidden="true" />
            <span>{companyInfo.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
