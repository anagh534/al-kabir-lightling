"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Building2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import PageHeader from "@/components/PageHeader";

export default function PortfolioPage() {
  const showcaseRef = useRef(null);
  const [showcaseIntersecting, setShowcaseIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowcaseIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (showcaseRef.current) observer.observe(showcaseRef.current);
    return () => observer.disconnect();
  }, []);

  const featuredProject = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <PageHeader
        title="Portfolio & Showcase"
        subtitle="A curated selection of monumental architectural, commercial, and industrial projects successfully supplied and engineered across the Sultanate of Oman."
        breadcrumbs={[{ label: "Portfolio" }]}
      />

      {/* FEATURED SHOWCASE SECTION */}
      <section ref={showcaseRef} className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-slate-200 flex-grow"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Featured Showcase</span>
          <div className="h-px bg-slate-200 flex-grow"></div>
        </div>
        
        <div 
          className={`group relative w-full h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-1200 ease-editorial transform-gpu ${showcaseIntersecting ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-[0.97]'}`}
        >
          <img
            src={featuredProject.image}
            alt={featuredProject.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090e17]/90 via-[#090e17]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl text-white">
              <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black uppercase tracking-widest bg-[#009ea9] text-white rounded-full">
                {featuredProject.category}
              </span>
              <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4 group-hover:text-[#e6f8fa] transition-colors">
                {featuredProject.title}
              </h2>
              <p className="text-slate-300 text-sm lg:text-base leading-relaxed max-w-xl">
                {featuredProject.description}
              </p>
            </div>
            
            <div className="flex flex-col gap-3 min-w-[200px] shrink-0">
              <div className="flex items-center gap-3 text-slate-300 text-sm border-b border-white/10 pb-3">
                <Calendar className="w-4 h-4 text-[#009ea9]" />
                <span className="font-medium">Completion {featuredProject.year}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm border-b border-white/10 pb-3">
                <MapPin className="w-4 h-4 text-[#009ea9]" />
                <span className="font-medium">Muscat, Oman</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Building2 className="w-4 h-4 text-[#009ea9]" />
                <span className="font-medium">Supplied: {featuredProject.brands.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="px-4 sm:px-6 lg:px-8 pb-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [isIntersecting, setIntersecting] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#009ea9]/40 transition-all duration-700 ease-editorial transform-gpu ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
        <span className="absolute bottom-4 left-4 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md text-white rounded-md">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#009ea9] transition-colors mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-400">
            {project.year}
          </span>
          <div className="flex gap-2">
            {project.brands.map(brand => (
              <span key={brand} className="text-[10px] font-bold uppercase tracking-wider text-[#009ea9] bg-[#e6f8fa] px-2 py-0.5 rounded-sm">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
