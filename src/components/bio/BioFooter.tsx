import React from 'react';
import { siteConfig } from '@/data/siteConfig';

export const BioFooter: React.FC = () => {
  return (
    <footer className="py-8 bg-brand text-ink border-t border-brand-dark/30 text-center">
      <div className="max-w-bio mx-auto px-4 flex flex-col items-center">
        <a href="/" className="mb-3 inline-block">
          <img
            src={siteConfig.branding.logoBlack}
            alt="Sabá Material de Construção"
            className="h-10 w-auto object-contain"
          />
        </a>

        <p className="text-xs font-semibold text-ink/80 mb-2">
          Do poço artesiano ao acabamento em Manaus.
        </p>

        <a
          href="/"
          className="text-xs font-bold underline hover:text-ink-soft mb-4 block"
        >
          Visitar site institucional completo
        </a>

        <p className="text-[11px] text-ink/60">
          © {new Date().getFullYear()} Sabá Material de Construção. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
