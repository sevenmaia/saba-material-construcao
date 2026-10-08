import React from 'react';
import { ArrowRight } from 'lucide-react';
import { bioCategories, getWhatsAppUrl } from '@/data/siteConfig';

export const BioCategories: React.FC = () => {
  return (
    <section id="categorias" className="py-6 bg-paper">
      <div className="max-w-bio mx-auto px-4">
        {/* Compact Grid of 6 Categories (2 columns on mobile) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {bioCategories.map((cat) => (
            <a
              key={cat.id}
              href={getWhatsAppUrl(cat.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-ink text-paper rounded-card-strict overflow-hidden border border-ink-soft transition-all duration-200 hover:border-brand shadow-sm"
            >
              {/* Category Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-alt">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Title & Arrow Footer */}
              <div className="p-2.5 flex items-center justify-between gap-1 bg-ink min-h-[54px]">
                <span className="font-display font-bold text-xs sm:text-sm text-paper leading-snug line-clamp-2">
                  {cat.name}
                </span>
                <div className="w-6 h-6 rounded-full bg-brand text-ink flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
