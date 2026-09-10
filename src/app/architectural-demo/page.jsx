'use client';

import React, { useState } from 'react';
import ArchitecturalHero from '../../components/ArchitecturalHero';
import ProductShowcaseCard from '../../components/ProductShowcaseCard';

export default function ArchitecturalDemoPage() {
  const [activeKelvin, setActiveKelvin] = useState(2700);

  return (
    <div 
      className="transition-colors duration-1200 ease-editorial"
      style={{ 
        backgroundColor: activeKelvin === 2700 ? '#141210' : '#0B0B0C',
        minHeight: '100vh'
      }}
    >
      <ArchitecturalHero />
      
      <section className="container mx-auto px-6 md:px-12 py-32">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-lux-100 tracking-tight">The Collection</h2>
          <p className="text-lux-300 mt-4 max-w-xl font-light leading-relaxed">
            Hover over the luminaires to feel the shift in atmosphere, as the space transitions between 2700K warm living and 4000K precise task lighting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductShowcaseCard 
            title="Arco Floor Lamp"
            designer="Achille & Pier Giacomo Castiglioni"
            imageUrl="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800"
            kelvin={2700}
            onHoverContextShift={setActiveKelvin}
          />
          <ProductShowcaseCard 
            title="Akari Light Sculpture"
            designer="Isamu Noguchi"
            imageUrl="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800"
            kelvin={4000}
            onHoverContextShift={setActiveKelvin}
          />
          <ProductShowcaseCard 
            title="Parentesi"
            designer="Achille Castiglioni & Pio Manzù"
            imageUrl="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800"
            kelvin={2700}
            onHoverContextShift={setActiveKelvin}
          />
        </div>
      </section>
    </div>
  );
}
