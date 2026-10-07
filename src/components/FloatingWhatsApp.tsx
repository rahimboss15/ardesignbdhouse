import React from 'react';
import { BRAND_CONFIG } from '../config/imageConfig';
import { MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={BRAND_CONFIG.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-3 py-3 sm:px-4 sm:py-3 rounded-full bg-[#0B3A2E] border-2 border-[#D4AF37] text-[#F5F3EA] hover:bg-[#D4AF37] hover:text-[#06251F] shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp with Abdur Rahim at 01923057893"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-[#D4AF37] group-hover:text-[#06251F] transition-colors" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] group-hover:bg-[#06251F] animate-ping" />
        </div>

        {/* Text shown on desktop, hidden on small mobile screens */}
        <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider whitespace-nowrap">
          {t.floating.whatsappText}
        </span>
      </a>
    </aside>
  );
};
