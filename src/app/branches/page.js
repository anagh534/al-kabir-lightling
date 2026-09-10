"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageSquare,
  CheckCircle2,
  Building,
  Warehouse,
  Truck,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { branches } from "@/data/branches";

export default function BranchesPage() {
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = [
    "All",
    "Muscat Governorate",
    "Al Batinah North",
    "Dhofar Governorate",
    "Ad Dakhiliyah",
  ];

  const filteredBranches =
    selectedRegion === "All"
      ? branches
      : branches.filter((b) => b.region === selectedRegion);

  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <PageHeader
        title="Branch & Logistics Network"
        subtitle="Strategic Showrooms, Warehouses, and Contractor Desks Across the Sultanate of Oman"
        breadcrumbs={[{ label: "Branches & Network" }]}
      />

      {/* Network Overview Stats */}
      <section className="bg-slate-50 border-b border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#009ea9]">5</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">
                Strategic Oman Hubs
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#009ea9]">
                15,000+ sq ft
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">
                Central Stockyard &amp; Staging
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#009ea9]">
                11 Governorates
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">
                Daily Fleet Coverage
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#009ea9]">
                24h
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">
                Fast Site Dispatch Response
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Branches Directory */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#009ea9]">
                Local Service Across Oman
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Find Your Nearest Branch
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Visit our commercial showrooms, technical simulation studios, or
                warehouse collection desks.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  type="button"
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                    selectedRegion === region
                      ? "bg-[#009ea9] text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {region === "All" ? "All Locations" : region}
                </button>
              ))}
            </div>
          </div>

          {/* Branch Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredBranches.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#009ea9] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Branch Card Top */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Badge & Title */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#e6f8fa] text-[#009ea9]">
                        {branch.region}
                      </span>
                      {branch.isPrimary && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
                          Main Headquarters
                        </span>
                      )}
                      <span className="text-xs text-slate-500">
                        {branch.type}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {branch.name}
                    </h3>
                  </div>

                  {/* Details List */}
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#009ea9] shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-slate-900">
                          {branch.address}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Landmark: {branch.landmark}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#009ea9] shrink-0" />
                        <a
                          href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                          className="hover:text-[#009ea9] font-medium"
                        >
                          {branch.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-[#009ea9] shrink-0" />
                        <a
                          href={`mailto:${branch.email}`}
                          className="hover:text-[#009ea9] truncate"
                        >
                          {branch.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                      <Clock className="w-4 h-4 text-[#009ea9] shrink-0 mt-0.5" />
                      <div className="text-xs space-y-0.5">
                        <p className="text-slate-800 font-medium">
                          {branch.hours}
                        </p>
                        <p className="text-slate-500">{branch.weekend}</p>
                      </div>
                    </div>
                  </div>

                  {/* Branch Key Capabilities */}
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      On-Site Facilities &amp; Services
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {branch.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#009ea9] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Branch Card Action Strip */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#009ea9]" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`https://wa.me/${branch.whatsapp}?text=Hello%20Al%20Kabir%20Lighting%20${encodeURIComponent(
                        branch.name
                      )},%20I%20have%20an%20enquiry.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${branch.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009ea9] hover:text-[#008690] transition-colors"
                  >
                    <span>Get Directions</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Logistics Guarantee */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-[#00e5f2]">
                Oman Logistics Guarantee
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Express Supply Fleet Reaching Every Construction Site in Oman
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether your project is located in Muscat, the industrial ports
                of Sohar and Duqm, or the remote interior oil concessions of
                Marmul and Fahud, our dedicated logistics fleet coordinates
                on-time, undamaged project drop-offs.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Truck className="w-4 h-4 text-[#00e5f2]" />
                  <span>Scheduled Daily Route Dispatches</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#00e5f2]" />
                  <span>On-Site Offloading &amp; Quality Inspection</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-800/90 rounded-3xl p-8 border border-slate-700 space-y-4">
              <h3 className="text-lg font-bold text-white">
                Need Bulk Warehouse Staging for Your Project?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We provide phased staging at our Ghala Central Facility for
                contractors with constrained on-site storage. Luminaires and
                cables are inspected, tagged per floor/zone, and released in
                exact sync with your site readiness.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#009ea9] hover:bg-[#008690] transition-colors"
                >
                  <span>Inquire with Logistics Team</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
