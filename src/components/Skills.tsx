import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, SKILLS_DATA } from '../data/translations';
import { Sparkles, Palette, Video, PenTool, Layout, Wand2 } from 'lucide-react';

interface SkillsProps {
  currentLang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Adobe Photoshop':
        return <span className="font-bold font-mono text-sm text-[#00C8FF]">Ps</span>;
      case 'Adobe Illustrator':
        return <span className="font-bold font-mono text-sm text-[#FF9A00]">Ai</span>;
      case 'Canva':
        return <span className="font-bold font-mono text-sm text-[#00C4CC]">Cv</span>;
      case 'Adobe Premiere Pro':
        return <span className="font-bold font-mono text-sm text-[#EA77FF]">Pr</span>;
      case 'Adobe After Effects':
        return <span className="font-bold font-mono text-sm text-[#9999FF]">Ae</span>;
      case 'CapCut':
        return <span className="font-bold font-mono text-sm text-[#F5F3EA]">Cc</span>;
      case 'AI Design Tools':
        return <Wand2 className="w-4 h-4 text-[#D4AF37]" />;
      case 'Brand Identity Design':
        return <Palette className="w-4 h-4 text-[#D4AF37]" />;
      case 'Graphic Design':
        return <Layout className="w-4 h-4 text-[#D4AF37]" />;
      case 'Video Editing':
        return <Video className="w-4 h-4 text-[#D4AF37]" />;
      default:
        return <PenTool className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#06251F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
              {t.skills.tag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EA]">
            {t.skills.heading}
          </h2>
          <p className="mt-3 text-lg text-[#D4AF37] font-medium">
            {t.skills.subheading}
          </p>
        </div>

        {/* Toolkit Grid - Elegant Cards without fake progress bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {SKILLS_DATA.map((skill, index) => {
            const category = currentLang === 'en' ? skill.categoryEn : skill.categoryBn;

            return (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#0B3A2E]/50 border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:bg-[#0B3A2E] transition-all duration-300 group flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#06251F] border border-[#D4AF37]/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getToolIcon(skill.name)}
                  </div>
                  <span className="text-[11px] font-mono text-[#F5F3EA]/40">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#F5F3EA] group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {skill.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#F5F3EA]/70 leading-snug">
                    {category}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#D4AF37]/10 flex items-center justify-between text-[11px] font-mono text-[#D4AF37]">
                  <span>Active Workflow</span>
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
