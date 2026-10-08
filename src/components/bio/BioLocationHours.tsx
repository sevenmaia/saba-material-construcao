import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const BioLocationHours: React.FC = () => {
  return (
    <section id="localizacao" className="py-6 bg-paper space-y-4">
      <div className="max-w-bio mx-auto px-4 space-y-4">
        {/* Location Card */}
        <div className="bg-surface rounded-panel-strict border border-surface-border p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-brand text-ink flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-lg text-ink">NOSSA LOCALIZAÇÃO</h3>
          </div>

          <div className="relative w-full h-40 rounded-card-strict overflow-hidden mb-3 border border-surface-border">
            <img
              src={siteConfig.realPhotos.storeFacade}
              alt="Fachada real da Sabá Material de Construção"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <p className="text-charcoal text-xs sm:text-sm leading-relaxed mb-4">
            {siteConfig.address.full}
          </p>

          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between bg-ink text-paper hover:bg-ink-soft p-3 rounded-btn-strict transition-colors text-xs font-semibold"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand" />
              <span>VER NO GOOGLE MAPS</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-brand text-ink flex items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Operating Hours Card */}
        <div className="bg-brand text-ink rounded-panel-strict border border-brand-dark/20 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-ink text-brand flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-lg text-ink">HORÁRIO DE ATENDIMENTO</h3>
          </div>

          <div className="bg-paper p-3 rounded-card-strict border border-ink/10 space-y-2 text-xs sm:text-sm font-semibold">
            <div className="flex justify-between items-center">
              <span className="text-charcoal">Segunda a Sábado:</span>
              <span className="text-ink font-bold">07:00 às 18:00</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-surface-border">
              <span className="text-charcoal">Domingo:</span>
              <span className="text-ink font-bold">08:00 às 12:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
