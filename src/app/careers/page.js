import React from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { careersData } from "@/data/careers";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Lightbulb, 
  Users, 
  ChevronRight, 
  Mail 
} from "lucide-react";

export const metadata = {
  title: "Careers",
  description: "Join the Al Kabir Lighting team and build a rewarding career in the lighting and building materials industry.",
};

const iconMap = {
  TrendingUp: TrendingUp,
  Lightbulb: Lightbulb,
  Users: Users,
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <PageHeader
        title={careersData.header.title}
        subtitle={careersData.header.subtitle}
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* 1. Intro & Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up" distance={30}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
                Why Work With Us?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {careersData.header.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careersData.benefits.map((benefit, idx) => {
              const Icon = iconMap[benefit.icon] || Briefcase;
              return (
                <ScrollReveal key={idx} delay={idx * 150} direction="up" distance={30}>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-[#009ea9]/10 hover:border-[#009ea9]/30 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-[#e6f8fa] text-[#009ea9] flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Open Positions Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <ScrollReveal direction="up" distance={30}>
              <span className="text-xs font-bold uppercase tracking-wider text-[#009ea9]">
                Current Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Open Positions
              </h2>
            </ScrollReveal>
          </div>

          {careersData.openPositions && careersData.openPositions.length > 0 ? (
          <div className="space-y-6">
            {careersData.openPositions.map((job, idx) => (
              <ScrollReveal key={job.id} delay={idx * 100} direction="up" distance={20}>
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      
                      {/* Job Header Info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                            <MapPin className="w-4 h-4 text-[#009ea9]" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                            <Clock className="w-4 h-4 text-[#009ea9]" />
                            {job.type}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#009ea9] transition-colors mb-3">
                          {job.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
                          {job.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((req, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                  <ChevronRight className="w-4 h-4 text-[#009ea9] shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                  <ChevronRight className="w-4 h-4 text-[#009ea9] shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Apply CTA (Desktop right aligned) */}
                      <div className="lg:w-48 shrink-0 flex flex-col justify-start lg:border-l border-slate-100 lg:pl-6 pt-6 lg:pt-0">
                        <div className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100 mb-4">
                          <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Experience</span>
                          <span className="block text-sm font-bold text-slate-900">{job.experience}</span>
                        </div>
                        <a 
                          href={`mailto:${careersData.applicationProcess.email}?subject=Application for ${job.title}`}
                          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#009ea9] hover:bg-[#00858f] transition-all shadow-md hover:shadow-lg active:scale-95"
                        >
                          <Mail className="w-4 h-4" />
                          Apply Now
                        </a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          ) : (
            <ScrollReveal direction="up" distance={20}>
              <div className="bg-white rounded-3xl border border-slate-200 border-dashed p-12 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6">
                  <Briefcase className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">No Open Positions Currently</h3>
                <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
                  We are not actively hiring for specific roles at the moment, but we are always eager to meet talented professionals in the lighting and electrical industry. 
                </p>
                <a 
                  href={`mailto:${careersData.applicationProcess.email}?subject=General Application`}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-[#009ea9] bg-[#e6f8fa] hover:bg-[#c9f1f4] transition-all shadow-sm active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  Submit General Application
                </a>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* 3. Application Process CTA */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" distance={20}>
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-[#009ea9]" />
            </div>
            <h2 className="text-3xl font-extrabold mb-4">How to Apply</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {careersData.applicationProcess.instructions}
            </p>
            <a 
              href={`mailto:${careersData.applicationProcess.email}`}
              className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl text-base font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-xl hover:shadow-white/20 active:scale-95"
            >
              Email Your Resume
            </a>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
