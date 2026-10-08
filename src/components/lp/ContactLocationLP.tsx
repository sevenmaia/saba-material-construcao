import React from 'react';
import { MessageCircle, MapPin, Clock, ArrowUpRight, Phone } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/data/siteConfig';

export const ContactLocationLP: React.FC = () => {
  return (
    <section id="contato" className="py-14 sm:py-16 md:py-20 bg-ink text-paper">
      <div className="max-w-lp mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: WhatsApp Commercial CTA (Col 4) */}
          <div className="lg:col-span-4 bg-ink-card p-6 sm:p-8 rounded-card-strict border border-ink-soft flex flex-col justify-between">
            <div>
              <span className="text-brand font-bold text-xs tracking-[0.2em] uppercase font-sans block mb-2">
                FALE CONOSCO
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-paper leading-tight mb-4">
                Faça seu pedido pelo <span className="text-brand">WhatsApp</span>
              </h2>
              <p className="text-surface/80 text-sm sm:text-base leading-relaxed mb-6">
                Fale direto com a nossa equipe de atendimento em Manaus e receba uma cotação rápida, sem complicações.
              </p>

              <div className="p-3 bg-ink rounded-card-strict border border-ink-soft mb-6 flex items-center gap-3 text-sm text-surface/90">
                <Phone className="w-4 h-4 text-brand shrink-0" />
                <span>Atendimento: <strong>{siteConfig.displayPhone}</strong></span>
              </div>
            </div>

            <div>
              <a
                href={getWhatsAppUrl("Olá! Gostaria de falar com um vendedor e fazer meu pedido.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-paper font-bold text-base px-6 py-4 rounded-btn-strict transition-all duration-200 shadow-lg min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar agora no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Store Facade Photo & Address (Col 4) */}
          <div className="lg:col-span-4 bg-ink-card rounded-card-strict border border-ink-soft overflow-hidden flex flex-col justify-between">
            {/* Real Store Photo */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-ink">
              <img
                src={siteConfig.realPhotos.storeFacade}
                alt="Fachada oficial da Sabá Material de Construção"
                className="w-full h-full object-cover object-center filter brightness-[0.95]"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-brand text-ink text-xs font-bold px-2.5 py-1 rounded-xs uppercase tracking-wide">
                Loja Física
              </div>
            </div>

            {/* Address Details */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-brand text-ink flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-paper">Nossa Localização</h3>
                </div>
                <p className="text-surface/85 text-xs sm:text-sm leading-relaxed mb-4">
                  {siteConfig.address.full}
                </p>
              </div>

              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-ink hover:bg-ink-soft text-paper border border-surface-border/40 font-semibold text-xs sm:text-sm px-4 py-3 rounded-btn-strict transition-colors min-h-[46px]"
              >
                <MapPin className="w-4 h-4 text-brand" />
                <span>Ver no Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand" />
              </a>
            </div>
          </div>

          {/* Card 3: Opening Hours & Location Map (Col 4) */}
          <div className="lg:col-span-4 bg-ink-card p-5 sm:p-6 rounded-card-strict border border-ink-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-brand text-ink flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-xl text-paper">Horário de Atendimento</h3>
              </div>

              <div className="space-y-2 mb-6 bg-ink p-4 rounded-card-strict border border-ink-soft">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-surface/75">Segunda a Sábado:</span>
                  <span className="font-bold text-brand">07:00 às 18:00</span>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm pt-2 border-t border-ink-soft/60">
                  <span className="text-surface/75">Domingo:</span>
                  <span className="font-bold text-brand">08:00 às 12:00</span>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Google Map for the actual store address in Tarumã, Manaus */}
            <div className="w-full h-44 sm:h-48 rounded-card-strict overflow-hidden border border-ink-soft relative">
              <iframe
                title="Mapa de Localização da Sabá Material de Construção"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.539753068936!2d-60.063124!3d-3.048742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1032df4c502b%3A0xc3b8eb33a9b9a695!2sPraia%20da%20Ponta%20Negra!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
