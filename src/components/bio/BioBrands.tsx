import React from 'react';
import { partnerBrands } from '@/data/siteConfig';

export const BioBrands: React.FC = () => {
  return (
    <section className="py-6 bg-brand text-ink border-b border-brand-dark/30">
      <div className="max-w-bio mx-auto px-4 text-center">
        <h2 className="font-display font-extrabold text-xl sm:text-2xl text-ink leading-tight mb-4">
          TRABALHAMOS COM AS MELHORES MARCAS
        </h2>

        {/* 3 columns grid on mobile */}
        <div className="grid grid-cols-3 gap-2">
          {partnerBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-paper p-2.5 rounded-card-strict border border-ink/10 flex items-center justify-center h-14 sm:h-16 shadow-xs"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-8 max-w-[85px] w-auto h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
