import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { DesignerPortraitVisual } from './BrandVisual';
import { MapPin, User, Briefcase, Compass } from 'lucide-react';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#06251F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
              {t.about.tag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EA]">
            {t.about.heading}
          </h2>
          <p className="mt-3 text-lg text-[#D4AF37] font-medium">
            {t.about.subheading}
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Professional Portrait Visual */}
          <div className="lg:col-span-5">
            <DesignerPortraitVisual />
          </div>

          {/* Right Column: Narrative & Specific Studio Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-base sm:text-lg text-[#F5F3EA]/85 leading-relaxed font-normal">
              <p className="font-semibold text-xl text-[#F5F3EA] border-l-2 border-[#D4AF37] pl-4">
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p>
                {t.about.p3}
              </p>
            </div>

            {/* Structured Real Information Grid (Strictly no fake credentials or fake awards) */}
            <div className="pt-6 border-t border-[#D4AF37]/25 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0B3A2E]/50 border border-[#D4AF37]/20">
                <div className="p-2 rounded-lg bg-[#06251F] border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                    {t.about.founderLabel}
                  </span>
                  <span className="text-base font-bold text-[#F5F3EA]">
                    {t.about.founderName}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0B3A2E]/50 border border-[#D4AF37]/20">
                <div className="p-2 rounded-lg bg-[#06251F] border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                    {t.about.studioLabel}
                  </span>
                  <span className="text-base font-bold text-[#F5F3EA]">
                    {t.about.studioName}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0B3A2E]/50 border border-[#D4AF37]/20">
                <div className="p-2 rounded-lg bg-[#06251F] border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                    {t.about.basedInLabel}
                  </span>
                  <span className="text-base font-bold text-[#F5F3EA]">
                    {t.about.location}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0B3A2E]/50 border border-[#D4AF37]/20">
                <div className="p-2 rounded-lg bg-[#06251F] border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                    {t.about.focusLabel}
                  </span>
                  <span className="text-sm font-semibold text-[#F5F3EA] leading-snug">
                    {t.about.focusText}
                  </span>
                </div>
              </div>
            </div>

            {/* Personal Touch Assurance */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#0B3A2E] to-transparent border-l-4 border-[#D4AF37] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-mono text-[#D4AF37] font-semibold">
                  {t.about.coreStrengths}
                </span>
                <p className="text-sm text-[#F5F3EA] font-medium mt-0.5">
                  {t.about.experienceFocus}
                </p>
              </div>
              <a
                href="#contact"
                className="text-xs font-semibold text-[#D4AF37] hover:text-[#ECC86A] underline underline-offset-4"
              >
                {t.nav.cta} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
