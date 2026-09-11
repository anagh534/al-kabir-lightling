import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Target,
  Compass,
  Cpu,
  Layers,
  FileSpreadsheet,
  Award,
  Lightbulb,
  Truck,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import studioImg from "../../../public/images/about/about-studio.jpg";
import { companyInfo } from "@/data/company";
import { aboutData } from "@/data/about";

export const metadata = {
  title: `About Us | ${companyInfo.name}`,
  description: companyInfo.description,
};

export default function AboutPage() {
  const { strengths, technicalServices, markets, narrative, vision, mission } = aboutData;

  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <PageHeader
        title="About Al Kabir Lighting"
        subtitle="Your Trusted Lighting, Electrical & Building Material Partner in Oman"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* 1. Who We Are Section with High-Res Studio Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative (6 cols) */}
            <ScrollReveal direction="right" distance={40} className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009ea9]">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Dependable Engineering &amp; Sourcing for Oman&apos;s Built Environment
              </h2>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                {narrative.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-2 grid grid-cols-2 gap-4">
                {companyInfo.stats.slice(0, 2).map((stat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <p className="text-3xl font-black text-[#009ea9]">{stat.value}</p>
                    <p className="text-xs font-semibold text-slate-600 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right High-Res Studio Photography (6 cols) */}
            <ScrollReveal direction="left" distance={40} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 aspect-[16/10]">
                <Image
                  src={studioImg}
                  alt="Al Kabir Lighting Engineering Simulation Studio in Muscat"
                  fill
                  quality={90}
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00e5f2]">
                    Muscat Technical Studio
                  </p>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5">
                    Senior lighting engineers reviewing 3D Dialux simulations &amp; consultant submittal dossiers
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <ScrollReveal direction="right" distance={30}>
              <div className="h-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:border-[#009ea9] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#e6f8fa] text-[#009ea9] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {vision}
                </p>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal direction="left" distance={30} delay={200}>
              <div className="h-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:border-[#009ea9] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#e6f8fa] text-[#009ea9] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {mission}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Core Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider font-bold text-[#009ea9]">
              The Al Kabir Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Our Core Strengths
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Designed around the fast-paced requirements of modern Oman
              contractors, engineering consultants, and project developers.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 100}>
                <div className="h-full bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-[#009ea9] hover:bg-white hover:shadow-md transition-all duration-300">
                  <span className="text-xs font-black text-[#009ea9]">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Engineering Services */}
      <section className="py-20 bg-[#090e17] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-wider font-bold text-[#00e5f2]">
              Practical Engineering Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Technical &amp; Project Support Services
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              We present technical support as a practical service that assists
              consultants and contractors in passing project submissions,
              achieving spec compliance, and accelerating installation.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={idx} direction="up" distance={30} delay={idx * 100}>
                  <div className="h-full bg-slate-900/90 border border-slate-800 rounded-3xl p-7 hover:border-[#009ea9] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#009ea9]/20 text-[#00e5f2] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Markets We Serve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal direction="right" distance={40} className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-[#009ea9]">
                Market Sectors
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Markets We Serve Across Oman
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether supplying public infrastructure tenders, high-spec
                private developments, or urgent maintenance packages, Al Kabir
                Lighting serves every level of Oman’s construction ecosystem.
              </p>
            </ScrollReveal>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {markets.map((market, idx) => (
                  <ScrollReveal key={idx} direction="up" distance={15} delay={idx * 50}>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-[#009ea9] transition-colors">
                      <div className="w-6 h-6 rounded-full bg-[#e6f8fa] text-[#009ea9] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {market}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="py-20 bg-white border-t border-slate-200">
        <ScrollReveal direction="up" distance={30} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Ready to Discuss Your Project Specifications?
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Contact our engineering specialists or submit your BOQ documents for
            a fast, transparent, and competitive commercial quotation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#009ea9] hover:bg-[#00858f] shadow-md transition-all group"
            >
              <span>Contact Commercial Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
