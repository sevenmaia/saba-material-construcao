import React from 'react';
import { UsersRound, BadgeCheck, Truck, CalendarDays } from 'lucide-react';
import { differentials } from '@/data/siteConfig';

const iconMap: Record<string, React.ReactNode> = {
  UsersRound: <UsersRound className="w-6 h-6 text-ink" />,
  BadgeCheck: <BadgeCheck className="w-6 h-6 text-ink" />,
  Truck: <Truck className="w-6 h-6 text-ink" />,
  CalendarDays: <CalendarDays className="w-6 h-6 text-ink" />,
};

export const DifferentialsLP: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-surface border-y border-surface-border/60">
      <div className="max-w-lp mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-charcoal/80 font-bold text-xs md:text-sm tracking-[0.2em] uppercase font-sans block mb-2">
            QUALIDADE, ATENDIMENTO E CONFIANÇA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            Por que escolher a <span className="text-brand bg-ink px-2.5 py-0.5 rounded-xs inline-block">Sabá?</span>
          </h2>
        </div>

        {/* 4 Differentials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {differentials.map((item) => (
            <div
              key={item.id}
              className="bg-paper p-5 sm:p-6 rounded-card-strict border border-surface-border shadow-sm flex flex-col items-start transition-all hover:border-brand hover:shadow-md"
            >
              {/* Circular Yellow Icon Container (allowed circle exception for icons) */}
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center mb-4 shrink-0 shadow-sm">
                {iconMap[item.iconName]}
              </div>

              <h3 className="font-display font-bold text-xl text-ink leading-snug mb-2">
                {item.title}
              </h3>

              <p className="text-charcoal text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
