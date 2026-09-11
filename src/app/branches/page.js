"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  ChevronRight,
  Navigation,
  CheckCircle2,
  Building2,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { branches } from "@/data/branches";
import { companyInfo } from "@/data/company";

export default function BranchesPage() {
  const [activeBranchId, setActiveBranchId] = useState(branches[0]?.id);
  const activeBranch = branches.find((b) => b.id === activeBranchId) || branches[0];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <PageHeader
        title="Our Branches"
        subtitle="Find Al Kabir Lighting offices and showrooms across the Sultanate of Oman. Visit us for product consultations, technical support, and project discussions."
        breadcrumbs={[{ label: "Branches" }]}
      />

      {/* ═══════════════════════════════════════
          1. BRANCH SELECTOR TABS + DETAIL
          ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal direction="up" distance={20}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009ea9]">
                Nationwide Presence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                {branches.length} Locations Across Oman
              </h2>
              <p className="text-sm text-slate-500 mt-3">
                Strategically positioned to serve major commercial, industrial,
                and infrastructure hubs throughout the Sultanate.
              </p>
            </div>
          </ScrollReveal>

          {/* Branch Tabs */}
          <ScrollReveal direction="up" distance={16} delay={100}>
            <div className="flex overflow-x-auto gap-3 pb-2 mb-10 scrollbar-hide snap-x snap-mandatory">
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranchId(branch.id)}
                  className={`shrink-0 snap-start flex items-center gap-3 px-5 py-3.5 rounded-2xl border text-left transition-all duration-300 ${
                    activeBranchId === branch.id
                      ? "bg-[#009ea9] text-white border-[#009ea9] shadow-lg shadow-[#009ea9]/20"
                      : "bg-white text-slate-700 border-slate-200 hover:border-[#009ea9]/40 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      activeBranchId === branch.id
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-[#009ea9]"
                    }`}
                  >
                    {branch.isHeadquarters ? (
                      <Star className="w-4 h-4" />
                    ) : (
                      <Building2 className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">{branch.name}</p>
                    <p
                      className={`text-[11px] mt-0.5 ${
                        activeBranchId === branch.id ? "text-white/70" : "text-slate-400"
                      }`}
                    >
                      {branch.type}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Active Branch Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8" key={activeBranch.id}>
            {/* Left: Info (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* HQ Badge */}
              {activeBranch.isHeadquarters && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-bold uppercase tracking-wider">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  Headquarters &amp; Main Showroom
                </div>
              )}

              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {activeBranch.name}
              </h3>

              {/* Contact Card */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200/80 divide-y divide-slate-200/80 overflow-hidden">
                <InfoRow icon={MapPin} label="Address">
                  {activeBranch.address}
                  <br />
                  <span className="text-slate-400">{activeBranch.poBox}</span>
                </InfoRow>
                <InfoRow icon={Phone} label="Telephone" href={`tel:${activeBranch.phone.replace(/\s+/g, "")}`}>
                  {activeBranch.phone}
                </InfoRow>
                <InfoRow icon={Phone} label="Mobile" href={`tel:${activeBranch.mobile.replace(/\s+/g, "")}`}>
                  {activeBranch.mobile}
                </InfoRow>
                <InfoRow icon={Mail} label="Email" href={`mailto:${activeBranch.email}`}>
                  {activeBranch.email}
                </InfoRow>
                <InfoRow icon={Clock} label="Working Hours">
                  {activeBranch.hours}
                </InfoRow>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Available Services
                </h4>
                <div className="space-y-2">
                  {activeBranch.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#009ea9] shrink-0" />
                      <span className="text-[13px] font-medium text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(activeBranch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#009ea9] hover:bg-[#00858f] rounded-xl text-xs font-bold text-white shadow-md transition-all active:scale-[0.98]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
                <a
                  href={`tel:${activeBranch.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 bg-white hover:border-[#009ea9] hover:text-[#009ea9] transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Branch
                </a>
                <a
                  href={`https://wa.me/${activeBranch.mobile.replace(/[\s+]/g, "")}?text=Hello%20Al%20Kabir%20Lighting`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Map (3 cols) */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm h-[350px] sm:h-[420px] lg:h-full lg:min-h-[520px] bg-slate-100">
                <iframe
                  src={activeBranch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map – ${activeBranch.name}`}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. ALL BRANCHES OVERVIEW GRID
          ═══════════════════════════════════════ */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009ea9]">
                Quick Reference
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                All Branch Contacts at a Glance
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {branches.map((branch, idx) => (
              <ScrollReveal key={branch.id} direction="up" distance={24} delay={idx * 100}>
                <div className="h-full bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-[#009ea9]/30 transition-all duration-500 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        branch.isHeadquarters
                          ? "bg-amber-50 text-amber-600 border border-amber-200"
                          : "bg-[#e6f8fa] text-[#009ea9]"
                      }`}
                    >
                      {branch.isHeadquarters ? (
                        <Star className="w-5 h-5" />
                      ) : (
                        <Building2 className="w-5 h-5" />
                      )}
                    </div>
                    {branch.isHeadquarters && (
                      <span className="text-[9px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-1 rounded-md border border-amber-200">
                        HQ
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {branch.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium mb-5">
                    {branch.type}
                  </p>

                  {/* Quick Contacts */}
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-3.5 h-3.5 text-[#009ea9] mt-0.5 shrink-0" />
                      <span className="text-[12px] text-slate-600 leading-snug">
                        {branch.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-3.5 h-3.5 text-[#009ea9] shrink-0" />
                      <a
                        href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                        className="text-[12px] text-slate-600 hover:text-[#009ea9] transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-3.5 h-3.5 text-[#009ea9] shrink-0" />
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-[12px] text-slate-600 hover:text-[#009ea9] transition-colors"
                      >
                        {branch.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-3.5 h-3.5 text-[#009ea9] shrink-0" />
                      <span className="text-[12px] text-slate-600">
                        {branch.hours}
                      </span>
                    </div>
                  </div>

                  {/* View on Map button */}
                  <button
                    onClick={() => {
                      setActiveBranchId(branch.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="mt-6 w-full py-2.5 rounded-xl text-xs font-bold text-[#009ea9] bg-[#e6f8fa] hover:bg-[#009ea9] hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View on Map
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. CTA BANNER
          ═══════════════════════════════════════ */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" distance={20}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00e5f2]">
              Can&apos;t Visit Us?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2 mb-4">
              Connect with Our Team Remotely
            </h2>
            <p className="text-sm text-slate-400 mb-8 max-w-xl mx-auto">
              Our sales and engineering teams are available via phone, email, and
              WhatsApp to assist with your project requirements from anywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#009ea9] hover:bg-[#00858f] rounded-xl text-sm font-bold text-white shadow-lg transition-all active:scale-[0.98]"
              >
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20Al%20Kabir%20Lighting`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 rounded-xl text-sm font-bold text-white bg-white/5 hover:bg-white/15 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

/* ── Info Row ── */
function InfoRow({ icon: Icon, label, href, children }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={`flex items-start gap-4 px-5 py-4 ${
        href ? "hover:bg-slate-100/50 transition-colors" : ""
      }`}
    >
      <div className="w-9 h-9 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center shrink-0 text-[#009ea9]">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
          {label}
        </p>
        <p className={`text-sm font-medium text-slate-800 leading-snug ${href ? "hover:text-[#009ea9]" : ""}`}>
          {children}
        </p>
      </div>
    </Wrapper>
  );
}
