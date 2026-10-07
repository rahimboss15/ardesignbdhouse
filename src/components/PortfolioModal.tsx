import React, { useEffect } from 'react';
import { ProjectItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ProjectVisualPlaceholder } from './BrandVisual';
import { IMAGE_CONFIG } from '../config/imageConfig';
import { X, Calendar, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface PortfolioModalProps {
  project: ProjectItem | null;
  currentLang: Language;
  onClose: () => void;
  onSelectServiceForContact?: (serviceId: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  project,
  currentLang,
  onClose,
  onSelectServiceForContact,
}) => {
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const title = currentLang === 'en' ? project.titleEn : project.titleBn;
  const categoryLabel = currentLang === 'en' ? project.categoryLabelEn : project.categoryLabelBn;
  const desc = currentLang === 'en' ? project.descEn : project.descBn;
  const challenge = currentLang === 'en' ? project.challengeEn : project.challengeBn;
  const approach = currentLang === 'en' ? project.approachEn : project.approachBn;
  const result = currentLang === 'en' ? project.resultEn : project.resultBn;

  // Check if custom URL exists in IMAGE_CONFIG for this project
  const projectKey = project.id as keyof typeof IMAGE_CONFIG.projects;
  const customUrl = IMAGE_CONFIG.projects[projectKey];

  const handleStartSimilarProject = () => {
    onClose();
    if (onSelectServiceForContact) {
      onSelectServiceForContact(project.category);
    }
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#06251F] border border-[#D4AF37]/40 rounded-2xl shadow-2xl flex flex-col text-[#F5F3EA]">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#06251F]/95 backdrop-blur-sm border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              {categoryLabel}
            </span>
            <span className="text-xs text-[#F5F3EA]/40">·</span>
            <span className="text-xs font-mono text-[#F5F3EA]/60 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#D4AF37]" /> {project.year}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#0B3A2E] border border-[#D4AF37]/30 text-[#F5F3EA] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
            aria-label={t.modal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Showcase Visual */}
          <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-xl bg-[#0B3A2E]">
            <ProjectVisualPlaceholder
              type={project.visualType}
              title={title}
              customUrl={customUrl}
            />
          </div>

          {/* Title & Overview */}
          <div className="space-y-3">
            <h2 id="modal-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F3EA]">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-[#F5F3EA]/80 leading-relaxed">
              {desc}
            </p>
          </div>

          {/* Detailed Editorial Case Study (Challenge / Approach / Result) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D4AF37]/20">
            <div className="p-5 rounded-xl bg-[#0B3A2E]/40 border border-[#D4AF37]/20 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] block">
                01 · {t.modal.challenge}
              </span>
              <p className="text-sm text-[#F5F3EA]/80 leading-relaxed font-normal">
                {challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0B3A2E]/40 border border-[#D4AF37]/20 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] block">
                02 · {t.modal.approach}
              </span>
              <p className="text-sm text-[#F5F3EA]/80 leading-relaxed font-normal">
                {approach}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0B3A2E]/40 border border-[#D4AF37]/20 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] block">
                03 · {t.modal.outcome}
              </span>
              <p className="text-sm text-[#F5F3EA]/80 leading-relaxed font-normal">
                {result}
              </p>
            </div>
          </div>

          {/* Tools & Deliverables Breakdown */}
          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block mb-2 font-semibold">
                {t.modal.tools}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-[#0B3A2E] border border-[#D4AF37]/30 text-xs font-medium text-[#F5F3EA]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleStartSimilarProject}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-bold text-[#06251F] bg-[#D4AF37] hover:bg-[#ECC86A] rounded-lg transition-colors active:scale-95"
            >
              <span>{t.modal.startProject}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
