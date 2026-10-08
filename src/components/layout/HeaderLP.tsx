import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/data/siteConfig';

export const HeaderLP: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-ink shadow-sm border-b border-brand-dark/20">
      <div className="max-w-lp mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ink">
          <img
            src={siteConfig.branding.logoBlack}
            alt="Sabá Material de Construção"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-base text-ink">
          <a href="#inicio" className="hover:text-ink-soft transition-colors py-1 border-b-2 border-transparent hover:border-ink">
            Início
          </a>
          <a href="#produtos" className="hover:text-ink-soft transition-colors py-1 border-b-2 border-transparent hover:border-ink">
            Produtos
          </a>
          <a href="#sobre" className="hover:text-ink-soft transition-colors py-1 border-b-2 border-transparent hover:border-ink">
            Sobre
          </a>
          <a href="#contato" className="hover:text-ink-soft transition-colors py-1 border-b-2 border-transparent hover:border-ink">
            Contato
          </a>
          <a href="/bio" className="text-xs uppercase font-bold tracking-wider px-2 py-1 bg-ink text-brand rounded-xs hover:bg-ink-soft transition-colors">
            Link da Bio
          </a>
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={getWhatsAppUrl("Olá! Vim pelo site da Sabá e gostaria de solicitar um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-paper hover:bg-ink-soft font-semibold text-sm px-5 py-3 rounded-btn-strict transition-all duration-200 shadow hover:shadow-md min-h-[46px]"
          >
            <MessageCircle className="w-5 h-5 text-brand" />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-brand" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá! Vim pelo site e gostaria de um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-ink text-brand rounded-btn-strict focus:outline-none"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink hover:text-ink-soft focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ink text-paper border-t border-ink-soft py-4 px-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-lg">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-ink-soft/40 hover:text-brand"
            >
              Início
            </a>
            <a
              href="#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-ink-soft/40 hover:text-brand"
            >
              Produtos & Especialidades
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-ink-soft/40 hover:text-brand"
            >
              Sobre a Sabá
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-ink-soft/40 hover:text-brand"
            >
              Localização & Contato
            </a>
            <a
              href="/bio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-brand font-bold flex items-center justify-between"
            >
              <span>Ver Biosite (Link da Bio)</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </nav>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl("Olá! Vim pelo site da Sabá e gostaria de atendimento pelo WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-brand text-ink font-bold px-4 py-3 rounded-btn-strict min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
