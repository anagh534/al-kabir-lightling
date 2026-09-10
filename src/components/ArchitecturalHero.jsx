'use client';

import React, { useEffect, useState } from 'react';

export default function ArchitecturalHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Trigger editorial reveal on mount
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-lux-900 text-lux-100 selection:bg-lux-300 selection:text-lux-900 overflow-hidden motion-reduce:transition-none">
      
      {/* Minimalist Header with strict scroll thresholds */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-editorial motion-reduce:transition-none ${
          scrolled 
            ? 'backdrop-blur-xl bg-lux-900/40 border-b border-neutral-800/40 py-4' 
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <span className="text-sm tracking-widest uppercase font-medium">Atelier Luminaire</span>
          <nav className="hidden md:flex gap-8 text-sm tracking-wide">
            <a href="#" className="hover:text-lux-300 transition-colors duration-400">Collections</a>
            <a href="#" className="hover:text-lux-300 transition-colors duration-400">Designers</a>
            <a href="#" className="hover:text-lux-300 transition-colors duration-400">Projects</a>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col justify-center min-h-screen container mx-auto px-6 md:px-12">
        <div className="max-w-4xl pt-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1]">
            <span className="block overflow-hidden pb-2">
              <span className={`block transition-transform duration-1200 ease-editorial will-change-transform motion-reduce:transform-none motion-reduce:opacity-100 ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                Light as a
              </span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className={`block transition-transform duration-1200 ease-editorial delay-100 will-change-transform motion-reduce:transform-none motion-reduce:opacity-100 ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                physical material.
              </span>
            </span>
          </h1>
          
          <p className="mt-8 text-lux-300 text-lg md:text-xl max-w-xl font-light leading-relaxed overflow-hidden">
             <span className={`block transition-all duration-1200 ease-editorial delay-300 motion-reduce:transform-none motion-reduce:opacity-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Silent, directional, warm. Our visual philosophy mirrors the intentionality of architectural spaces.
             </span>
          </p>
        </div>
      </main>

      {/* Background ambient lighting - strictly GPU composited */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lux-300/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
    </div>
  );
}
