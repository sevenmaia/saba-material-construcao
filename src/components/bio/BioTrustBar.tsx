import React from 'react';
import { Calendar, Users, Award, Truck } from 'lucide-react';

export const BioTrustBar: React.FC = () => {
  return (
    <section className="py-4 bg-surface border-y border-surface-border">
      <div className="max-w-bio mx-auto px-4">
        <div className="grid grid-cols-4 gap-1.5 text-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-brand text-ink flex items-center justify-center mb-1.5 shadow-xs">
              <Calendar className="w-4 h-4" />
            </div>
            <p className="font-display font-bold text-xs text-ink leading-none">Desde 2010</p>
            <p className="text-[10px] text-charcoal/70 mt-0.5">em Manaus</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-brand text-ink flex items-center justify-center mb-1.5 shadow-xs">
              <Users className="w-4 h-4" />
            </div>
            <p className="font-display font-bold text-xs text-ink leading-none">Atendimento</p>
            <p className="text-[10px] text-charcoal/70 mt-0.5">especializado</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-brand text-ink flex items-center justify-center mb-1.5 shadow-xs">
              <Award className="w-4 h-4" />
            </div>
            <p className="font-display font-bold text-xs text-ink leading-none">Grandes</p>
            <p className="text-[10px] text-charcoal/70 mt-0.5">marcas</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-brand text-ink flex items-center justify-center mb-1.5 shadow-xs">
              <Truck className="w-4 h-4" />
            </div>
            <p className="font-display font-bold text-xs text-ink leading-none">Variedade</p>
            <p className="text-[10px] text-charcoal/70 mt-0.5">para sua obra</p>
          </div>
        </div>
      </div>
    </section>
  );
};
