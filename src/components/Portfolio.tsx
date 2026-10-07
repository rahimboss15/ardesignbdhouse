import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { TRANSLATIONS, PORTFOLIO_DATA } from '../data/translations';
import { ProjectVisualPlaceholder } from './BrandVisual';
import { IMAGE_CONFIG } from '../config/imageConfig';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  currentLang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ currentLang, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = TRANSLATIONS[currentLang];

  const filterTabs = [
    { id: 'all', label: t.portfolio.filterAll },
    { id: 'logo', label: t.portfolio.filterLogo },
    { id: 'branding', label: t.portfolio.filterBranding },
    { id: 'poster', label: t.portfolio.filterPoster },
    { id: 'social', label: t.portfolio.filterSocial },
    { id: 'thumbnail', label: t.portfolio.filterThumbnail },
    { id: 'photo', label: t.portfolio.filterPhoto },
    { id: 'video', label: t.portfolio.filterVideo },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="py-24 sm:py-32 bg-[#06251F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                {t.portfolio.tag}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EA]">
              {t.portfolio.heading}
            </h2>
            <p className="mt-3 text-lg text-[#D4AF37] font-medium">
              {t.portfolio.subheading}
            </p>
          </div>
        </div>

        {/* Functional Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#D4AF37] text-[#06251F] shadow-md shadow-[#D4AF37]/20 font-bold'
                  : 'bg-[#0B3A2E] text-[#F5F3EA]/80 hover:text-[#F5F3EA] hover:bg-[#0F4738] border border-[#D4AF37]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editorial Asymmetric Masonry / Bento Gallery */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center text-[#F5F3EA]/60 font-medium">
            {t.portfolio.emptyState}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => {
              const title = currentLang === 'en' ? project.titleEn : project.titleBn;
              const categoryLabel = currentLang === 'en' ? project.categoryLabelEn : project.categoryLabelBn;
              const desc = currentLang === 'en' ? project.descEn : project.descBn;
              const projectKey = project.id as keyof typeof IMAGE_CONFIG.projects;
              const customUrl = IMAGE_CONFIG.projects[projectKey];

              // Editorial Asymmetric Layout Logic
              let colSpan = 'md:col-span-6 lg:col-span-6';
              if (index === 0 && activeCategory === 'all') {
                colSpan = 'md:col-span-12 lg:col-span-8'; // Major featured card
              } else if (index === 1 && activeCategory === 'all') {
                colSpan = 'md:col-span-6 lg:col-span-4';
              } else if (index === 2 && activeCategory === 'all') {
                colSpan = 'md:col-span-6 lg:col-span-5';
              } else if (index === 3 && activeCategory === 'all') {
                colSpan = 'md:col-span-6 lg:col-span-7';
              }

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`${colSpan} group relative rounded-2xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37] bg-[#0B3A2E] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10 cursor-pointer flex flex-col justify-between`}
                >
                  {/* Visual Display Container */}
                  <div className="w-full min-h-[260px] sm:min-h-[300px] flex-grow overflow-hidden relative">
                    <ProjectVisualPlaceholder
                      type={project.visualType}
                      title={title}
                      customUrl={customUrl}
                      className="h-full"
                    />

                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-[#06251F]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4AF37] text-[#06251F] text-xs font-bold uppercase tracking-wider shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span>{t.portfolio.viewProject}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Card Editorial Footer */}
                  <div className="p-5 sm:p-6 bg-[#06251F] border-t border-[#D4AF37]/20 flex flex-col justify-between gap-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-[#D4AF37] uppercase font-semibold">{categoryLabel}</span>
                        <span className="text-[#F5F3EA]/30">/</span>
                        <span className="text-[#F5F3EA]/60">{project.year}</span>
                      </div>
                      <span className="text-xs font-mono text-[#D4AF37]/80 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                        Explore →
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#F5F3EA] group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#F5F3EA]/70 line-clamp-2">
                        {desc}
                      </p>
                    </div>

                    {/* Tools Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono text-[#F5F3EA]/60 px-2 py-0.5 rounded bg-[#0B3A2E] border border-[#D4AF37]/15"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
