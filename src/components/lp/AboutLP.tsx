import React from 'react';
import { Award, Handshake, Calendar, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const AboutLP: React.FC = () => {
  return (
    <section id="sobre" className="py-14 sm:py-16 md:py-20 bg-paper overflow-hidden">
      <div className="max-w-lp mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Real Store Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-card-strict overflow-hidden border border-surface-border shadow-lg">
              <img
                src={siteConfig.realPhotos.storeFacade}
                alt="Fachada real da Sabá Material de Construção em Manaus"
                className="w-full h-[320px] sm:h-[400px] md:h-[450px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              
              {/* Badge overlaid on store photo */}
              <div className="absolute bottom-4 left-4 right-4 bg-ink/90 backdrop-blur-sm p-4 rounded-card-strict border border-brand/40 text-paper">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand rounded-xs text-ink font-bold shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-brand text-xs font-bold uppercase tracking-wider">História & Tradição</p>
                    <p className="text-sm font-semibold text-paper">Atendendo Manaus com dedicação desde 2010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-charcoal/80 font-bold text-xs md:text-sm tracking-[0.2em] uppercase font-sans mb-2">
              SOBRE NÓS
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink leading-tight mb-2">
              Sabá Material de Construção
            </h2>

            <p className="text-brand font-bold text-lg md:text-xl font-display mb-4 bg-ink inline-block px-3 py-1 rounded-xs w-max">
              Desde 2010 de história em Manaus
            </p>

            <p className="text-charcoal text-sm sm:text-base leading-relaxed mb-6">
              A Sabá Material de Construção é referência em produtos para obras, reformas e projetos em Manaus. Trabalhamos com uma linha completa de materiais, do poço artesiano ao acabamento, sempre com foco na qualidade, bom atendimento e na confiança dos nossos clientes.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-whatsapp shrink-0 mt-0.5" />
                <span className="text-ink text-sm sm:text-base font-medium">
                  Assessoria técnica na escolha de materiais para poço artesiano e hidráulica.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-whatsapp shrink-0 mt-0.5" />
                <span className="text-ink text-sm sm:text-base font-medium">
                  Trabalho exclusivo com marcas líderes e homologadas do mercado brasileiro.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-whatsapp shrink-0 mt-0.5" />
                <span className="text-ink text-sm sm:text-base font-medium">
                  Atendimento ágil e consultivo direto pelo WhatsApp para facilitar seu pedido.
                </span>
              </div>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-surface-border">
              <div className="bg-surface p-3 rounded-card-strict text-center border border-surface-border">
                <Award className="w-5 h-5 text-ink mx-auto mb-1" />
                <p className="text-[11px] sm:text-xs font-bold text-ink uppercase">Qualidade</p>
                <p className="text-[10px] sm:text-[11px] text-charcoal/75">em cada produto</p>
              </div>

              <div className="bg-surface p-3 rounded-card-strict text-center border border-surface-border">
                <Handshake className="w-5 h-5 text-ink mx-auto mb-1" />
                <p className="text-[11px] sm:text-xs font-bold text-ink uppercase">Confiança</p>
                <p className="text-[10px] sm:text-[11px] text-charcoal/75">dos nossos clientes</p>
              </div>

              <div className="bg-surface p-3 rounded-card-strict text-center border border-surface-border">
                <Calendar className="w-5 h-5 text-ink mx-auto mb-1" />
                <p className="text-[11px] sm:text-xs font-bold text-ink uppercase">Desde 2010</p>
                <p className="text-[10px] sm:text-[11px] text-charcoal/75">no mercado local</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
