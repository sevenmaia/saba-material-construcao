import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { siteConfig, getWhatsAppUrl } from '@/data/siteConfig';

export const FooterLP: React.FC = () => {
  return (
    <footer className="bg-ink text-paper border-t border-ink-soft pt-12 pb-24 md:pb-12">
      <div className="max-w-lp mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-ink-soft">
          {/* Logo on black background (Yellow Sabá Logo) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={siteConfig.branding.logoYellow}
              alt="Sabá Material de Construção"
              className="h-12 w-auto object-contain mb-3"
            />
            <p className="text-surface/70 text-xs sm:text-sm max-w-sm">
              Tudo para sua obra, do poço artesiano ao acabamento. Qualidade e compromisso em Manaus desde 2010.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-surface/80">
            <a href="#inicio" className="hover:text-brand transition-colors">Início</a>
            <a href="#produtos" className="hover:text-brand transition-colors">Produtos</a>
            <a href="#sobre" className="hover:text-brand transition-colors">Sobre Nós</a>
            <a href="#contato" className="hover:text-brand transition-colors">Contato</a>
            <a href="/bio" className="text-brand font-semibold hover:underline">Link da Bio</a>
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-surface/80 hover:text-brand text-xs sm:text-sm transition-colors"
            >
              <SiInstagram className="w-4 h-4 text-brand" />
              <span>@sabamaterialdeconstrucao</span>
            </a>

            <a
              href={`tel:+${siteConfig.whatsappNumber}`}
              className="inline-flex items-center gap-2 text-surface/80 hover:text-brand text-xs sm:text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-brand" />
              <span>{siteConfig.displayPhone}</span>
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 text-center text-xs text-surface/50">
          <p>© {new Date().getFullYear()} Sabá Material de Construção. Todos os direitos reservados. Manaus – AM.</p>
        </div>
      </div>

      {/* Floating WhatsApp Action Button for LP */}
      <aside aria-label="Botão de contato flutuante" className="fixed bottom-6 right-6 z-40">
        <a
          href={getWhatsAppUrl("Olá! Vim pelo site da Sabá e gostaria de atendimento pelo WhatsApp.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-paper font-bold px-4 py-3.5 rounded-btn-strict shadow-2xl transition-all duration-200 hover:scale-105 min-h-[50px] border border-whatsapp-hover/40"
          aria-label="Falar no WhatsApp com a Sabá Material de Construção"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline text-sm font-semibold">Orçamento via WhatsApp</span>
        </a>
      </aside>
    </footer>
  );
};
