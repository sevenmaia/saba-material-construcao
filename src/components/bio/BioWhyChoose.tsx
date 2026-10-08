import React from 'react';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/data/siteConfig';

export const BioWhyChoose: React.FC = () => {
  const benefits = [
    "Produtos de qualidade com garantia",
    "Marcas líderes e reconhecidas no mercado",
    "Equipe especializada para orientar seu projeto",
    "Atendimento rápido e direto pelo WhatsApp",
    "Variedade completa do poço ao acabamento",
  ];

  return (
    <section className="py-6 bg-paper">
      <div className="max-w-bio mx-auto px-4">
        {/* Yellow Panel Container */}
        <div className="bg-brand text-ink rounded-panel-strict p-5 border border-brand-dark/20 shadow-sm overflow-hidden">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink leading-tight mb-4">
            POR QUE ESCOLHER A SABÁ?
          </h2>

          {/* Benefits Checkmarks */}
          <div className="space-y-2.5 mb-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-ink">
                <div className="w-5 h-5 rounded-full bg-ink text-brand flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Real Store Facade Photo */}
          <div className="relative w-full h-44 rounded-card-strict overflow-hidden mb-5 border border-ink/20 shadow-xs">
            <img
              src={siteConfig.realPhotos.storeFacade}
              alt="Fachada oficial da loja Sabá em Manaus"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute bottom-2 left-2 bg-ink/90 text-brand text-[10px] font-bold px-2 py-0.5 rounded-xs uppercase">
              Loja Física em Manaus
            </div>
          </div>

          {/* WhatsApp Action Button */}
          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar dúvidas e fazer meu pedido pelo WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between bg-ink text-paper hover:bg-ink-soft p-3.5 rounded-btn-strict shadow transition-all duration-200 min-h-[52px]"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-whatsapp flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-paper fill-current" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-sm text-brand leading-tight">
                  CHAMAR NO WHATSAPP
                </p>
                <p className="text-[10px] text-surface/75">Tire suas dúvidas e faça seu pedido</p>
              </div>
            </div>

            <div className="w-7 h-7 rounded-full bg-brand text-ink flex items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
