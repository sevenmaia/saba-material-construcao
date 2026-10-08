import React from 'react';
import { BrandCarousel } from '@/components/common/BrandCarousel';

export const BrandsLP: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-surface border-y border-surface-border/80">
      <div className="max-w-lp mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8 text-center">
        <span className="text-charcoal/80 font-bold text-xs md:text-sm tracking-[0.2em] uppercase font-sans block mb-2">
          TRABALHAMOS COM AS MELHORES MARCAS
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
          Marcas que você confia, <span className="text-brand bg-ink px-2 py-0.5 rounded-xs inline-block">aqui na Sabá</span>
        </h2>
      </div>

      {/* Infinite loop partner carousel */}
      <BrandCarousel />
    </section>
  );
};
