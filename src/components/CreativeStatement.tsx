import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface CreativeStatementProps {
  currentLang: Language;
}

export const CreativeStatement: React.FC<CreativeStatementProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="py-24 sm:py-36 bg-[#06251F] relative overflow-hidden flex items-center justify-center border-b border-[#D4AF37]/15">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#0B3A2E]/60 text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
          <span>Creative Philosophy</span>
        </div>

        {/* Dramatic Oversized Display Typography */}
        <blockquote className="space-y-4">
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F3EA] leading-tight text-balance">
            "{t.statement.line1}
          </p>
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight gold-shimmer leading-tight text-balance">
            {t.statement.line2}"
          </p>
        </blockquote>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-12 h-px bg-[#D4AF37]/40" />
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
            AR DesignBD · Abdur Rahim
          </span>
          <div className="w-12 h-px bg-[#D4AF37]/40" />
        </div>
      </div>
    </section>
  );
};
