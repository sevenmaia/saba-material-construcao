import React from 'react';
import { partnerBrands } from '@/data/siteConfig';

interface BrandCarouselProps {
  darkBackground?: boolean;
}

export const BrandCarousel: React.FC<BrandCarouselProps> = ({ darkBackground = false }) => {
  // Duplicate array 3 times for seamless infinite CSS scroll
  const duplicatedBrands = [...partnerBrands, ...partnerBrands, ...partnerBrands];

  return (
    <div className={`w-full overflow-hidden py-4 ${darkBackground ? 'bg-ink-soft' : 'bg-surface'}`}>
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Subtle gradient edges on desktop for clean visual fade */}
        <div className={`hidden md:block absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r ${darkBackground ? 'from-ink-soft to-transparent' : 'from-surface to-transparent'}`} />
        <div className={`hidden md:block absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l ${darkBackground ? 'from-ink-soft to-transparent' : 'from-surface to-transparent'}`} />

        <div className="flex w-max animate-infinite-scroll pause-hover">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex items-center justify-center mx-4 md:mx-7 min-w-[120px] md:min-w-[150px] h-16 md:h-20 bg-paper/90 rounded-card-strict border border-surface-border/60 px-5 py-2 shadow-sm transition-transform duration-200 hover:scale-105"
            >
              <img
                src={brand.logo}
                alt={`Logo da marca parceira ${brand.name}`}
                className="max-h-10 md:max-h-12 max-w-[110px] md:max-w-[130px] w-auto h-auto object-contain filter contrast-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
