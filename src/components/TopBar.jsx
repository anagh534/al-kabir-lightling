import { MapPin, Phone, Mail } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function TopBar() {
  return (
    <div className="bg-slate-100/90 border-b border-slate-200/80 text-xs text-slate-700 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Location */}
        <div className="flex items-center gap-2 text-slate-700 font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#009ea9]" aria-hidden="true" />
          <span>Muscat, Oman</span>
        </div>

        {/* Center: Tagline (hidden on very small screens) */}
        <div className="hidden md:block text-slate-600 font-medium tracking-wide">
          <span>Supplying a Brighter Tomorrow</span>
        </div>

        {/* Right: Phone & Email */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 hover:text-[#009ea9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9] rounded"
            aria-label={`Call Al Kabir Lighting at ${companyInfo.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#009ea9]" aria-hidden="true" />
            <span className="font-semibold">{companyInfo.phone}</span>
          </a>
          <a
            href={`mailto:${companyInfo.email}`}
            className="flex items-center gap-1.5 hover:text-[#009ea9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9] rounded"
            aria-label={`Email Al Kabir Lighting at ${companyInfo.email}`}
          >
            <Mail className="w-3.5 h-3.5 text-[#009ea9]" aria-hidden="true" />
            <span>{companyInfo.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
