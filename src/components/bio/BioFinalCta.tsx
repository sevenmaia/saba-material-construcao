import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/siteConfig';

export const BioFinalCta: React.FC = () => {
  return (
    <section className="py-6 bg-ink text-paper">
      <div className="max-w-bio mx-auto px-4">
        <div className="bg-ink-card p-5 sm:p-6 rounded-panel-strict border border-ink-soft shadow-lg text-center">
          <span className="text-brand font-bold text-xs tracking-[0.2em] uppercase font-sans block mb-1">
            ATENDIMENTO RÁPIDO
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand leading-tight mb-2">
            PRECISA DE ORÇAMENTO?
          </h2>
          <p className="text-surface/85 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm mx-auto">
            Fale com nossa equipe agora mesmo pelo WhatsApp e receba um atendimento rápido e personalizado.
          </p>

          <a
            href={getWhatsAppUrl("Olá! Vim pelo link da bio e preciso de um orçamento para minha obra.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-between bg-whatsapp hover:bg-whatsapp-hover text-paper p-4 rounded-btn-strict font-bold transition-all duration-200 shadow-md min-h-[54px]"
          >
            <div className="flex items-center gap-2.5">
              <MessageCircle className="w-5 h-5 fill-current" />
              <span className="font-display font-extrabold text-sm sm:text-base tracking-wide">
                FAZER ORÇAMENTO PELO WHATSAPP
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-paper/20 flex items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4 text-paper" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
