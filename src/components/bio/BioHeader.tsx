import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const BioHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-ink border-b border-brand-dark/20 shadow-sm">
      <div className="max-w-bio mx-auto px-4 h-16 flex items-center justify-between">
        {/* Official Black Logo */}
        <a href="/" className="flex items-center">
          <img
            src={siteConfig.branding.logoBlack}
            alt="Sabá Material de Construção"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="p-2 text-ink hover:text-ink-soft rounded-btn-strict transition-colors"
            title="Ir para o site completo"
            aria-label="Ir para o site completo"
          >
            <Home className="w-5 h-5" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-ink hover:text-ink-soft rounded-btn-strict focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-expanded={menuOpen}
            aria-label="Menu de opções"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown */}
      {menuOpen && (
        <div className="bg-ink text-paper border-t border-ink-soft px-5 py-4 space-y-3">
          <a
            href="/"
            className="block py-2 text-sm font-semibold border-b border-ink-soft/40 hover:text-brand"
          >
            Acessar Site Completo (Landing Page)
          </a>
          <a
            href="#categorias"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-semibold border-b border-ink-soft/40 hover:text-brand"
          >
            Categorias de Produtos
          </a>
          <a
            href="#localizacao"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-semibold border-b border-ink-soft/40 hover:text-brand"
          >
            Localização & Horário
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm font-semibold text-brand"
          >
            Seguir no Instagram
          </a>
        </div>
      )}
    </header>
  );
};
