import React, { useState } from 'react';
import { Phone, Share2, Check } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { siteConfig } from '@/data/siteConfig';

export const BioSocialLinks: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Sabá Material de Construção",
      text: "Tudo para sua obra em Manaus, do poço artesiano ao acabamento!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or unsupported
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Fallback
      }
    }
  };

  return (
    <section className="py-6 bg-paper border-b border-surface-border">
      <div className="max-w-bio mx-auto px-4">
        <div className="grid grid-cols-3 gap-2">
          {/* Instagram */}
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-card-strict bg-surface border border-surface-border hover:border-brand transition-colors text-center shadow-xs"
          >
            <div className="w-9 h-9 rounded-full bg-ink text-paper flex items-center justify-center mb-1.5">
              <SiInstagram className="w-5 h-5 text-brand" />
            </div>
            <span className="text-[11px] font-bold text-ink leading-tight">Nosso Instagram</span>
          </a>

          {/* Ligar Agora */}
          <a
            href={`tel:+${siteConfig.whatsappNumber}`}
            className="flex flex-col items-center justify-center p-3 rounded-card-strict bg-surface border border-surface-border hover:border-brand transition-colors text-center shadow-xs"
          >
            <div className="w-9 h-9 rounded-full bg-ink text-paper flex items-center justify-center mb-1.5">
              <Phone className="w-5 h-5 text-brand" />
            </div>
            <span className="text-[11px] font-bold text-ink leading-tight">Ligar Agora</span>
          </a>

          {/* Compartilhar */}
          <button
            type="button"
            onClick={handleShare}
            className="flex flex-col items-center justify-center p-3 rounded-card-strict bg-surface border border-surface-border hover:border-brand transition-colors text-center shadow-xs focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-ink text-paper flex items-center justify-center mb-1.5">
              {copied ? <Check className="w-5 h-5 text-whatsapp" /> : <Share2 className="w-5 h-5 text-brand" />}
            </div>
            <span className="text-[11px] font-bold text-ink leading-tight">
              {copied ? "Link Copiado!" : "Compartilhar"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
