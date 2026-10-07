import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface BrandStatementProps {
  currentLang: Language;
}

export const BrandStatement: React.FC<BrandStatementProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="py-24 sm:py-32 bg-[#082721] relative overflow-hidden flex items-center justify-center border-t border-[#D4AF37]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full" />

        <div className="space-y-3">
          <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F3EA] text-balance">
            {t.brandQuote.line1}
          </p>
          <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight gold-shimmer text-balance">
            {t.brandQuote.line2}
          </p>
        </div>

        <div className="mt-8">
          <span className="font-mono text-xs sm:text-sm tracking-widest text-[#D4AF37] uppercase font-bold">
            — {t.brandQuote.author}
          </span>
        </div>
      </div>
    </section>
  );
};
