import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { lpCategories, getWhatsAppUrl } from '@/data/siteConfig';

export const CategoriesLP: React.FC = () => {
  return (
    <section id="produtos" className="py-14 sm:py-16 md:py-20 bg-paper">
      <div className="max-w-lp mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-charcoal/80 font-bold text-xs md:text-sm tracking-[0.2em] uppercase font-sans block mb-2">
            TUDO O QUE VOCÊ PRECISA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            Nossas <span className="text-brand bg-ink px-3 py-0.5 rounded-xs inline-block">Especialidades</span>
          </h2>
          <p className="mt-3 text-charcoal text-sm sm:text-base md:text-lg">
            Soluções completas em materiais de construção para sua obra, reforma ou projeto.
          </p>
        </div>

        {/* 6 Category Cards Grid: 6 cols on large desktop, 3 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {lpCategories.map((cat) => (
            <a
              key={cat.id}
              href={getWhatsAppUrl(cat.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-surface border border-surface-border rounded-card-strict overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-brand"
            >
              {/* Category Image with aspect-ratio 4:3 */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-alt">
                <img
                  src={cat.image}
                  alt={`Categoria ${cat.name}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between bg-paper">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-ink leading-tight group-hover:text-ink-soft">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-charcoal/80 text-xs sm:text-xs leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="mt-3 pt-2 flex items-center justify-between border-t border-surface-border/50">
                  <span className="text-[11px] font-semibold text-charcoal/70 uppercase tracking-wide group-hover:text-ink">
                    Consultar
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand text-ink flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
