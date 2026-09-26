"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Navigation,
  CheckCircle2,
  Building2,
  ExternalLink,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { branches } from "@/data/branches";
import { companyInfo } from "@/data/company";
import CtaBanner from "@/components/CtaBanner";

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {branches.map((branch, idx) => (
              <ScrollReveal key={branch.id} direction="up" distance={24} delay={idx * 100}>
                <div className="h-full bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-[#009ea9]/30 transition-all duration-500 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${branch.isHeadquarters
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
                        href={`tel:${branch.mobile.replace(/\s+/g, "")}`}
                        className="text-[12px] text-slate-600 hover:text-[#009ea9] transition-colors"
                      >
                        {branch.mobile}
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
      <CtaBanner />
    </div>
  );
}

/* ── Info Row ── */
function InfoRow({ icon: Icon, label, href, children }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={`flex items-start gap-4 px-5 py-4 ${href ? "hover:bg-slate-100/50 transition-colors" : ""
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
