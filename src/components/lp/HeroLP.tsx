import React from 'react';
import { ArrowUpRight, MessageCircle, ShieldCheck, BadgeCheck, Users, FileText } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/data/siteConfig';

export const HeroLP: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-ink overflow-hidden border-b border-ink-soft">
      {/* Background Image Layer (Professional Photo) */}
      <div className="absolute inset-0 z-0">
        <picture>
          <img
            src={siteConfig.realPhotos.heroPortrait}
            alt="Profissional da Sabá Material de Construção em loja de Manaus"
            className="w-full h-full object-cover object-top md:object-[75%_top] lg:object-[82%_center] filter brightness-[0.9] contrast-[1.05]"
            loading="eager"
          />
        </picture>
        {/* Responsive Readability Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ink via-ink/90 md:via-ink/80 to-transparent z-1" />
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-2/3 bg-gradient-to-r from-ink via-ink/95 to-transparent z-1" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-lp mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col justify-center min-h-[560px] md:min-h-[620px]">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span className="text-brand font-bold text-xs md:text-sm tracking-[0.2em] uppercase font-sans">
              SABÁ MATERIAL DE CONSTRUÇÃO
            </span>
          </div>

          {/* Headline with Barlow Condensed typography */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.98] text-paper mb-5 md:mb-6 tracking-tight">
            Tudo para sua obra, <br className="hidden sm:inline" />
            <span className="text-brand">do poço artesiano</span> <br />
            ao acabamento.
          </h1>

          {/* Subtitle */}
          <p className="text-surface/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl">
            Desde 2010 sendo a sua referência completa em material de construção em Manaus. Variedade, grandes marcas e atendimento especializado para sua reforma ou projeto.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mb-10">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento para os materiais da minha obra.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-ink font-bold text-base px-6 py-4 rounded-btn-strict transition-all duration-200 shadow-lg hover:shadow-xl min-h-[52px]"
            >
              <FileText className="w-5 h-5 text-ink" />
              <span>Solicitar orçamento</span>
              <ArrowUpRight className="w-5 h-5 text-ink" />
            </a>

            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com um vendedor pelo WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-paper/10 text-paper border-2 border-paper/40 hover:border-paper font-semibold text-base px-6 py-4 rounded-btn-strict transition-all duration-200 min-h-[52px]"
            >
              <MessageCircle className="w-5 h-5 text-brand" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-4 border-t border-paper/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-paper/85 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-brand shrink-0" />
              <span><strong>Desde 2010</strong> em Manaus</span>
            </div>
            <div className="flex items-center gap-2.5">
              <BadgeCheck className="w-5 h-5 text-brand shrink-0" />
              <span>Grandes marcas homologadas</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 text-brand shrink-0" />
              <span>Atendimento especializado</span>
            </div>
          </div>
        </div>

        {/* Floating badge for desktop */}
        <div className="hidden lg:flex absolute right-8 bottom-12 items-center gap-3 bg-brand/95 text-ink px-5 py-3 rounded-card-strict border border-ink/20 shadow-xl backdrop-blur-sm transform rotate-[-2deg] hover:rotate-0 transition-transform">
          <span className="text-2xl font-black font-display tracking-wider">
            SUA OBRA EM BOAS MÃOS!
          </span>
        </div>
      </div>
    </section>
  );
};
