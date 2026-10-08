import React, { useEffect } from 'react';
import { BioHeader } from '@/components/bio/BioHeader';
import { BioHero } from '@/components/bio/BioHero';
import { BioCategories } from '@/components/bio/BioCategories';
import { BioTrustBar } from '@/components/bio/BioTrustBar';
import { BioWhyChoose } from '@/components/bio/BioWhyChoose';
import { BioHistory } from '@/components/bio/BioHistory';
import { BioBrands } from '@/components/bio/BioBrands';
import { BioLocationHours } from '@/components/bio/BioLocationHours';
import { BioFinalCta } from '@/components/bio/BioFinalCta';
import { BioSocialLinks } from '@/components/bio/BioSocialLinks';
import { BioFooter } from '@/components/bio/BioFooter';

export const BioPage: React.FC = () => {
  useEffect(() => {
    document.title = "Sabá Material de Construção | Biosite Instagram";
  }, []);

  return (
    <div className="min-h-screen bg-surface-alt/70 md:py-8 flex justify-center items-start">
      {/* 
        Centralized container: max-w-bio (560px) on desktop with subtle shadow.
        Full width on mobile. No phone frame mockups, clean real web page!
      */}
      <div className="w-full max-w-bio bg-paper shadow-2xl md:rounded-panel-strict overflow-hidden border-x border-surface-border/50">
        <BioHeader />
        <main>
          <BioHero />
          <BioCategories />
          <BioTrustBar />
          <BioWhyChoose />
          <BioHistory />
          <BioBrands />
          <BioLocationHours />
          <BioFinalCta />
          <BioSocialLinks />
        </main>
        <BioFooter />
      </div>
    </div>
  );
};
