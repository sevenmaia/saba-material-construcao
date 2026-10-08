import React, { useEffect } from 'react';
import { HeaderLP } from '@/components/layout/HeaderLP';
import { HeroLP } from '@/components/lp/HeroLP';
import { CategoriesLP } from '@/components/lp/CategoriesLP';
import { DifferentialsLP } from '@/components/lp/DifferentialsLP';
import { AboutLP } from '@/components/lp/AboutLP';
import { BrandsLP } from '@/components/lp/BrandsLP';
import { ContactLocationLP } from '@/components/lp/ContactLocationLP';
import { FooterLP } from '@/components/layout/FooterLP';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Sabá Material de Construção | Manaus - AM";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <HeaderLP />
      <main className="flex-1">
        <HeroLP />
        <CategoriesLP />
        <DifferentialsLP />
        <AboutLP />
        <BrandsLP />
        <ContactLocationLP />
      </main>
      <FooterLP />
    </div>
  );
};
