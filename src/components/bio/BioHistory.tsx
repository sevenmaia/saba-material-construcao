import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const BioHistory: React.FC = () => {
  return (
    <section className="py-6 bg-ink text-paper border-y border-ink-soft">
      <div className="max-w-bio mx-auto px-4">
        <div className="p-5 rounded-panel-strict bg-ink-card border border-ink-soft">
          <span className="text-brand font-bold text-xs tracking-[0.2em] uppercase font-sans block mb-1">
            DESDE 2010 EM MANAUS
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand leading-tight mb-3">
            NOSSA HISTÓRIA
          </h2>

          <p className="text-surface/85 text-xs sm:text-sm leading-relaxed mb-4">
            Desde 2010, a Sabá Material de Construção é referência em Manaus, oferecendo produtos de qualidade para obras, com atendimento especializado e parcerias com as melhores marcas do mercado.
          </p>

          <div className="relative w-full h-40 rounded-card-strict overflow-hidden mb-4 border border-ink-soft bg-ink">
            <img
              src={siteConfig.realPhotos.heroPortrait}
              alt="Ambiente da Sabá Material de Construção em Manaus"
              className="w-full h-full object-cover object-center filter brightness-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-3 text-[11px] font-semibold text-brand">
              Tradição e compromisso na sua obra
            </div>
          </div>

          <a
            href="/#sobre"
            className="inline-flex items-center justify-center gap-2 w-full bg-brand hover:bg-brand-hover text-ink font-bold text-xs sm:text-sm py-3 px-4 rounded-btn-strict transition-colors shadow-xs"
          >
            <span>CONHEÇA MAIS SOBRE NÓS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
