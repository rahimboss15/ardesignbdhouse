import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, PROCESS_DATA } from '../data/translations';
import { MessageSquare, Compass, PenTool, CheckCircle } from 'lucide-react';

interface ProcessProps {
  currentLang: Language;
}

export const Process: React.FC<ProcessProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-[#D4AF37]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#D4AF37]" />;
      case 2:
        return <PenTool className="w-5 h-5 text-[#D4AF37]" />;
      case 3:
        return <CheckCircle className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return null;
    }
  };

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#082721] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
              {t.process.tag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EA]">
            {t.process.heading}
          </h2>
          <p className="mt-3 text-lg text-[#D4AF37] font-medium">
            {t.process.subheading}
          </p>
        </div>

        {/* Connected Steps Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/60 to-[#D4AF37]/20 -z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {PROCESS_DATA.map((step, idx) => {
              const title = currentLang === 'en' ? step.titleEn : step.titleBn;
              const desc = currentLang === 'en' ? step.descEn : step.descBn;

              return (
                <div
                  key={step.number}
                  className="flex flex-col space-y-4 p-6 rounded-2xl bg-[#06251F] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 group hover:-translate-y-1"
                >
                  {/* Step Top Badge + Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B3A2E] border border-[#D4AF37]/40 flex items-center justify-center shadow-lg group-hover:bg-[#06251F] transition-colors">
                      {getStepIcon(idx)}
                    </div>
                    <span className="text-2xl font-mono font-black text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-[#F5F3EA] group-hover:text-[#D4AF37] transition-colors">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-[#F5F3EA]/75 leading-relaxed font-normal">
                      {desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D4AF37]/10 text-[11px] font-mono text-[#D4AF37]/80">
                    Phase {step.number} of 04
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
