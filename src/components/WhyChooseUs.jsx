import { Layers, Users, Cog, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Layers,
      title: "Wide Product Range",
      description: "Lighting, electrical and building materials under one roof.",
      detail: "Over 5,000+ SKUs across architectural, industrial, outdoor, explosion-proof, and commercial applications.",
    },
    {
      icon: Users,
      title: "Technical Support",
      description: "Expert guidance for the right solutions.",
      detail: "In-house lighting design, Dialux / Relux Lux calculations, BOQ optimization, and consultant submittals.",
    },
    {
      icon: Cog,
      title: "Project Supply",
      description: "Reliable supply for projects of any scale.",
      detail: "Direct manufacturer sourcing, turnkey delivery scheduling, buffer warehousing, and on-site coordination.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Service",
      description: "Committed to long-term partnerships.",
      detail: "Backed by Oman regulatory compliance, international manufacturer warranties, and dedicated account managers.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-[#009ea9]">
            The Al Kabir Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Why Choose Us
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Your trusted partner for lighting and building material solutions in Oman.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#009ea9] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#e6f8fa] text-[#009ea9] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#009ea9] mt-1">
                    {pillar.description}
                  </p>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
