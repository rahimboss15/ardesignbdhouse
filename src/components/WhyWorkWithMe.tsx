import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, WHY_US_DATA } from '../data/translations';
import { Lightbulb, Eye, MessageCircle, Sparkles, UserCheck, Clock } from 'lucide-react';

interface WhyWorkWithMeProps {
  currentLang: Language;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const getReasonIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Lightbulb className="w-5 h-5 text-[#D4AF37]" />;
      case 1:
        return <Eye className="w-5 h-5 text-[#D4AF37]" />;
      case 2:
        return <MessageCircle className="w-5 h-5 text-[#D4AF37]" />;
      case 3:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 4:
        return <UserCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 5:
        return <Clock className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#06251F] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
              {t.whyUs.tag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EA]">
            {t.whyUs.heading}
          </h2>
          <p className="mt-3 text-lg text-[#D4AF37] font-medium">
            {t.whyUs.subheading}
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_US_DATA.map((item, idx) => {
            const title = currentLang === 'en' ? item.titleEn : item.titleBn;
            const desc = currentLang === 'en' ? item.descEn : item.descBn;

            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#0B3A2E]/40 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#06251F] border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#0B3A2E] transition-colors">
                  {getReasonIcon(idx)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F3EA] group-hover:text-[#D4AF37] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-[#F5F3EA]/75 leading-relaxed font-normal">
                    {desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D4AF37]/10 flex items-center justify-between text-[11px] font-mono text-[#D4AF37]/60">
                  <span>Standard 0{idx + 1}</span>
                  <span>✦</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
