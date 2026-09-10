import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Target,
  Compass,
  Lightbulb,
  FileSpreadsheet,
  Layers,
  Cpu,
  Truck,
  Award,
  ArrowRight,
  Building2,
  ShieldCheck,
  Check,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About Us | Trusted Project Supply Partner in Oman",
  description:
    "Learn about Al Kabir Lighting: our vision, mission, core strengths, international brand sourcing, and engineering technical support for Oman and GCC projects.",
};

export default function AboutPage() {
  const strengths = [
    {
      title: "Multi-Brand Portfolio",
      desc: "Direct access to top global manufacturers across lighting, power distribution, and building materials.",
    },
    {
      title: "Lighting & Materials Expertise",
      desc: "Specialized engineering knowledge across commercial, infrastructure, heavy industrial, and ATEX standards.",
    },
    {
      title: "Strong Global Sourcing",
      desc: "Established supply chains across Europe, the UK, the Middle East, India, and the Far East.",
    },
    {
      title: "Project-Based Supply",
      desc: "Turnkey supply scheduling tailored to contractor construction milestones and delivery timelines.",
    },
    {
      title: "Technical Engineering Support",
      desc: "Comprehensive Dialux Lux calculations, consultant technical submittal dossiers, and compliance certificates.",
    },
    {
      title: "Responsive RFQ Turnaround",
      desc: "Commercial quotation desk providing structured, line-item pricing within 24–48 hours of BOQ receipt.",
    },
    {
      title: "Local Oman Stock",
      desc: "Central warehousing in Muscat and regional depots maintaining buffer stock for fast-moving project items.",
    },
    {
      title: "Dedicated Client Care",
      desc: "Assigned account engineers who coordinate every step from specification to on-site testing and commissioning.",
    },
  ];

  const technicalServices = [
    {
      icon: Cpu,
      title: "Lux Calculation & Dialux Simulation",
      description:
        "Computer-aided lighting simulations to ensure illuminance levels conform strictly to Oman and CIBSE standards.",
    },
    {
      icon: FileSpreadsheet,
      title: "BOQ & Tender Estimation Support",
      description:
        "Detailed bill-of-quantity takeoff and commercial itemization for contractors preparing competitive bids.",
    },
    {
      icon: Layers,
      title: "Technical Submittal Dossiers",
      description:
        "Full technical dossiers including compliance statements, manufacturer datasheets, test reports, and third-party certificates.",
    },
    {
      icon: Award,
      title: "Product Samples Coordination",
      description:
        "Arranging physical luminaire and wiring accessory samples for client and consultant approval committees.",
    },
    {
      icon: Lightbulb,
      title: "Alternative Equivalent Engineering",
      description:
        "Proposing value-engineered equivalent solutions that match technical specifications while optimizing project budgets.",
    },
    {
      icon: Truck,
      title: "Project Delivery & Supply Coordination",
      description:
        "Fleet logistics and coordinated drop-offs directly to construction sites throughout the Sultanate.",
    },
  ];

  const markets = [
    "Sultanate of Oman Infrastructure",
    "GCC Cross-Border Projects",
    "General MEP Contractors & Consultants",
    "Government Organisations & Ministries",
    "Oil & Gas / Energy Operating Companies",
    "Private Developers & Asset Owners",
    "Facility Management Companies",
    "Traders, Wholesalers & Resellers",
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <PageHeader
        title="About Al Kabir Lighting"
        subtitle="Your Trusted Lighting, Electrical & Building Material Partner in Oman"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* 1. Who We Are Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009ea9]">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Engineering Dependable Supply for Oman’s Infrastructure
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                <strong>Al Kabir Lighting</strong> is an Oman-based lighting and
                building material trading company serving contractors,
                consultants, industries, government organisations, developers,
                and project customers across the Sultanate and wider GCC region.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We provide dependable products, commercially competitive
                solutions, and professional project support through a
                diversified portfolio spanning architectural indoor fixtures,
                exterior infrastructure luminaires, heavy industrial ATEX
                fittings, power distribution cables, and high-performance
                building materials.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-2xl font-black text-[#009ea9]">500+</p>
                  <p className="text-xs font-semibold text-slate-600">
                    Oman Projects Supplied
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-2xl font-black text-[#009ea9]">50+</p>
                  <p className="text-xs font-semibold text-slate-600">
                    International Brand Partners
                  </p>
                </div>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 text-white p-8 sm:p-10">
                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#009ea9] flex items-center justify-center text-white">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    One Partner. Multiple Solutions.
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We eliminate the friction of managing dozens of individual
                    vendors. From project submittal to site delivery, our
                    integrated team handles technical compliance, logistics,
                    and warranty backing.
                  </p>

                  <div className="pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009ea9]" />
                      <span>Compliant with Oman Ministry &amp; Nama Standards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009ea9]" />
                      <span>Dedicated In-House Lighting Simulation Studio</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009ea9]" />
                      <span>Fast Local Stock in Muscat, Sohar, and Salalah</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission Cards */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs hover:border-[#009ea9] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#e6f8fa] text-[#009ea9] flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To become one of the most trusted lighting and building material
                solution providers in Oman and the GCC, renowned for engineering
                integrity, product dependability, and rapid commercial response.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs hover:border-[#009ea9] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#e6f8fa] text-[#009ea9] flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To provide reliable products, professional service and
                commercially competitive solutions while building long-term
                relationships with customers, suppliers and project partners
                supporting the Sultanate’s national growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Strengths Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#009ea9]">
              Built for Project Success
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Our Core Strengths
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Designed around the fast-paced requirements of modern Oman
              contractors, engineering consultants, and project developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-[#009ea9] hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-[#009ea9] text-white flex items-center justify-center text-xs font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Support & Engineering Services (PAGE 08 from Docx) */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#00e5f2]">
              Practical Engineering Value
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1">
              Technical &amp; Project Support
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              We present technical support as a practical service that assists
              consultants and contractors in passing project submissions,
              achieving spec compliance, and accelerating installation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-[#009ea9] transition-all"
                >
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
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Markets We Serve */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-[#009ea9]">
                Who We Partner With
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Markets We Serve
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether supplying public infrastructure tenders, high-spec
                private developments, or urgent maintenance packages, Al Kabir
                Lighting serves every level of Oman’s construction ecosystem.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#009ea9] hover:text-[#00858f]"
                >
                  <span>Connect with a Commercial Account Manager</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {markets.map((market, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#e6f8fa] text-[#009ea9] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {market}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Ready to Discuss Your Next Project?
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Contact our engineering specialists or submit your BOQ documents for
            a fast, transparent, and competitive commercial quotation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#009ea9] hover:bg-[#008690] shadow-md transition-all"
            >
              <span>Contact Commercial Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/branches"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
            >
              <span>View Branch Network</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
