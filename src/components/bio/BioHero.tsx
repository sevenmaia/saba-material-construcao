import React from 'react';
import { ArrowRight, CheckCircle2, Boxes, ShieldCheck, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/data/siteConfig';

export const BioHero: React.FC = () => {
  return (
    <section className="bg-brand text-ink pt-6 pb-6 border-b border-brand-dark/30">
      <div className="max-w-bio mx-auto px-4">
        {/* Main Content & Portrait arrangement */}
        <div className="relative mb-5">
          {/* Eyebrow / Headline */}
          <div className="w-full">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink leading-[0.96] tracking-tight mb-2">
              TUDO PARA SUA OBRA,<br />
              DO INÍCIO AO ACABAMENTO.
            </h1>
            <p className="text-ink/85 text-xs sm:text-sm font-medium leading-relaxed max-w-xs">
              Materiais de qualidade e atendimento especializado em Manaus.
            </p>
          </div>

          {/* 3 Trust Badges */}
          <div className="flex items-center gap-4 mt-3 pt-2 border-t border-ink/15 text-[11px] font-bold text-ink">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-ink" />
              <span>Qualidade</span>
            </div>
            <div className="flex items-center gap-1">
              <Boxes className="w-3.5 h-3.5 text-ink" />
              <span>Variedade</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-ink" />
              <span>Confiança</span>
            </div>
          </div>
        </div>

        {/* Real Professional Portrait Card */}
        <div className="relative w-full h-56 sm:h-64 rounded-card-strict overflow-hidden mb-5 border border-ink/20 shadow-md bg-ink">
          <img
            src={siteConfig.realPhotos.heroPortrait}
            alt="Profissional da Sabá Material de Construção"
            className="w-full h-full object-cover object-top filter brightness-[0.98]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
          <div className="absolute bottom-2.5 left-3 right-3 text-paper text-[11px] font-semibold flex items-center justify-between">
            <span>Sabá Material de Construção</span>
            <span className="text-brand font-bold uppercase">Manaus – AM</span>
          </div>
        </div>

        {/* WhatsApp Call to Action Button */}
        <div>
          <a
            href={getWhatsAppUrl("Olá! Vim pelo Instagram e gostaria de fazer um orçamento pelo WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between bg-ink text-paper hover:bg-ink-soft p-4 rounded-btn-strict shadow-md transition-all duration-200 min-h-[56px] border border-ink/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-whatsapp flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-paper fill-current" />
              </div>
              <div className="text-left">
                <p className="font-display font-extrabold text-base leading-tight tracking-wide text-brand">
                  FAZER ORÇAMENTO
                </p>
                <p className="text-[11px] text-surface/80">PELO WHATSAPP</p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-brand text-ink flex items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
