"use client";


import Image from "next/image";
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
                <div className="h-full bg-white rounded-2xl border border-slate-200/80 hover:shadow-lg hover:border-[#009ea9]/30 transition-all duration-500 flex flex-col overflow-hidden">
                  {/* Branch Image */}
                  <div className="relative w-full h-48 bg-slate-100 group">
                    {branch.image ? (
                      <Image
                        src={branch.image}
                        alt={`${branch.name} - Al Kabir Lighting branch in Oman`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <Building2 className="w-12 h-12" />
                      </div>
                    )}
                    {branch.isHeadquarters && (
                      <span className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2.5 py-1.5 rounded-md border border-amber-200 z-10 shadow-sm">
                        HQ
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {branch.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium mb-5 uppercase tracking-wider">
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

                    {/* View on Map link */}
                    <a
                      href={branch.mapUrl.replace('&output=embed', '')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-full py-2.5 rounded-xl text-xs font-bold text-[#009ea9] bg-[#e6f8fa] hover:bg-[#009ea9] hover:text-white transition-all flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View on Map
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. HEAD OFFICE DETAILS
          ═══════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Al Kabir Lighting Head Office
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            {/* Contact Details Card */}
            <ScrollReveal direction="right" distance={30} className="lg:col-span-2">
              <div className="bg-slate-50 p-8 sm:p-10 rounded-[2rem] border border-slate-200/80 shadow-sm h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center shrink-0 text-[#009ea9]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Address</p>
                      <p className="text-[15px] font-medium text-slate-700 leading-relaxed">
                        Al Kabir Lighting<br />
                        Muscat, Sultanate of Oman
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center shrink-0 text-[#009ea9]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Phone</p>
                      <a href="tel:+96892125048" className="text-[15px] font-medium text-slate-700 hover:text-[#009ea9] transition-colors">
                        +968 9212 5048
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center shrink-0 text-[#009ea9]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Email</p>
                      <a href="mailto:sales@alkabirlighting.com" className="text-[15px] font-medium text-slate-700 hover:text-[#009ea9] transition-colors">
                        sales@alkabirlighting.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map iframe */}
            <ScrollReveal direction="left" distance={30} className="lg:col-span-3 h-full">
              <div className="h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-md">
                <iframe
                  src="https://maps.google.com/maps?q=23.585972,58.549839&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. CTA BANNER
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
