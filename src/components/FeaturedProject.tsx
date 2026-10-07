import React from 'react';
import { Language, ProjectItem } from '../types';
import { TRANSLATIONS, PORTFOLIO_DATA } from '../data/translations';
import { ProjectVisualPlaceholder } from './BrandVisual';
import { IMAGE_CONFIG } from '../config/imageConfig';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FeaturedProjectProps {
  currentLang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  currentLang,
  onSelectProject,
}) => {
  const t = TRANSLATIONS[currentLang];
  const featured = PORTFOLIO_DATA.find((p) => p.featured) || PORTFOLIO_DATA[0];

  const title = currentLang === 'en' ? featured.titleEn : featured.titleBn;
  const categoryLabel = currentLang === 'en' ? featured.categoryLabelEn : featured.categoryLabelBn;
  const challenge = currentLang === 'en' ? featured.challengeEn : featured.challengeBn;
  const approach = currentLang === 'en' ? featured.approachEn : featured.approachBn;
  const result = currentLang === 'en' ? featured.resultEn : featured.resultBn;

  return (
    <section className="py-24 sm:py-32 bg-[#082721] relative border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
            {t.featured.tag}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EA] mb-12">
          {t.featured.heading}
        </h2>

        {/* Feature Split Showcase Card */}
        <div className="rounded-3xl bg-[#06251F] border border-[#D4AF37]/35 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Left Large Visual */}
          <div
            className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-[#0B3A2E] cursor-pointer group"
            onClick={() => onSelectProject(featured)}
          >
            <ProjectVisualPlaceholder
              type={featured.visualType}
              title={title}
              customUrl={IMAGE_CONFIG.featuredProjectCover || IMAGE_CONFIG.projects.brandIdentity}
              className="h-full"
            />
            <div className="absolute inset-0 bg-[#06251F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-4 py-2 bg-[#D4AF37] text-[#06251F] text-xs font-bold uppercase rounded-lg shadow-xl flex items-center gap-1.5">
                <span>{t.featured.viewDetails}</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Right Side Editorial Specifications */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Category + Title */}
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D4AF37]">
                  {categoryLabel}
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#F5F3EA]">
                  {title}
                </h3>
              </div>

              {/* Challenge */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block font-semibold">
                  {t.featured.challengeLabel}
                </span>
                <p className="text-sm text-[#F5F3EA]/80 leading-relaxed font-normal">
                  {challenge}
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block font-semibold">
                  {t.featured.approachLabel}
                </span>
                <p className="text-sm text-[#F5F3EA]/80 leading-relaxed font-normal">
                  {approach}
                </p>
              </div>

              {/* Result */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block font-semibold">
                  {t.featured.resultLabel}
                </span>
                <p className="text-sm text-[#F5F3EA]/80 leading-relaxed font-normal">
                  {result}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#D4AF37]/20 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {featured.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#0B3A2E] text-[#D4AF37] border border-[#D4AF37]/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onSelectProject(featured)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#06251F] bg-[#D4AF37] hover:bg-[#ECC86A] transition-colors rounded-lg active:scale-95"
              >
                <span>{t.featured.viewDetails}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
