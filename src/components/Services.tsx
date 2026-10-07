import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, SERVICES_DATA } from '../data/translations';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  currentLang: Language;
}

export const Services: React.FC<ServicesProps> = ({ currentLang }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#082721] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
              {t.services.tag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EA]">
            {t.services.heading}
          </h2>
          <p className="mt-3 text-lg text-[#D4AF37] font-medium">
            {t.services.subheading}
          </p>
        </div>

        {/* Numbered Editorial List */}
        <div className="divide-y divide-[#D4AF37]/15 border-y border-[#D4AF37]/15">
          {SERVICES_DATA.map((service) => {
            const isActive = activeServiceId === service.id;
            const title = currentLang === 'en' ? service.titleEn : service.titleBn;
            const desc = currentLang === 'en' ? service.descEn : service.descBn;
            const deliverables = currentLang === 'en' ? service.deliverablesEn : service.deliverablesBn;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                onClick={() => setActiveServiceId(isActive ? '' : service.id)}
                className={`group py-7 sm:py-9 transition-colors cursor-pointer ${
                  isActive ? 'bg-[#0B3A2E]/40' : 'hover:bg-[#0B3A2E]/20'
                } px-4 sm:px-6 rounded-lg -mx-4 sm:-mx-6`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                  {/* Service Number */}
                  <div className="md:col-span-2 flex items-center justify-between md:justify-start gap-4">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#F5F3EA]/40 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                      {service.tag}
                    </span>
                  </div>

                  {/* Service Title */}
                  <div className="md:col-span-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3EA] group-hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                      <span>{title}</span>
                      <ChevronRight
                        className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 md:hidden ${
                          isActive ? 'rotate-90' : ''
                        }`}
                      />
                    </h3>
                  </div>

                  {/* Short Description */}
                  <div className="md:col-span-5">
                    <p className="text-sm sm:text-base text-[#F5F3EA]/75 font-normal leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Direct Inquiry Link */}
                  <div className="md:col-span-1 hidden md:flex justify-end">
                    <div className="w-9 h-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#06251F] group-hover:border-[#D4AF37] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Deliverables Drawer */}
                {isActive && (
                  <div className="mt-5 pt-4 border-t border-[#D4AF37]/10 grid grid-cols-1 md:grid-cols-12 gap-4 text-xs">
                    <div className="md:col-span-2 text-[#D4AF37] font-mono uppercase tracking-wider font-semibold">
                      {t.services.deliverablesTitle}
                    </div>
                    <div className="md:col-span-10 flex flex-wrap gap-2 sm:gap-3">
                      {deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded bg-[#06251F] border border-[#D4AF37]/25 text-[#F5F3EA]/85 text-xs font-medium"
                        >
                          ✦ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Services Note */}
        <div className="mt-14 p-6 rounded-2xl bg-[#06251F] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#F5F3EA]">
              Need a customized design solution for your business?
            </h4>
            <p className="text-xs sm:text-sm text-[#F5F3EA]/70">
              Each project is uniquely tailored to your brand identity and audience goals.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#06251F] bg-[#D4AF37] hover:bg-[#ECC86A] transition-colors rounded-lg shrink-0"
          >
            <span>{t.nav.cta}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
