import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { IMAGE_CONFIG } from '../config/imageConfig';
import { ArrowUpRight, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#06251F] via-[#072a24] to-[#06251F]"
    >
      {/* Background Architectural Ambient Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0B3A2E] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
        <div className="w-full h-full bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      {/* Vertical Side Statement - Subtle Editorial Stamp */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none select-none items-center gap-3">
        <span className="text-[11px] font-mono tracking-[0.35em] text-[#D4AF37]/60 -rotate-90 origin-center whitespace-nowrap">
          {t.hero.sideVertical}
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            {/* Small Label with Status Indicator */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                {t.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#F5F3EA] leading-[1.08] text-balance">
              {currentLang === 'bn' ? (
                <span className="gold-shimmer">এ আর ডিজাইন ঘর</span>
              ) : (
                <>
                  {t.hero.headlineStart}{' '}
                  <span className="gold-shimmer block sm:inline">
                    {t.hero.headlineAccent}
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#F5F3EA]/80 font-normal leading-relaxed max-w-2xl">
              {t.hero.bio}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm uppercase tracking-wider font-semibold text-[#06251F] bg-[#D4AF37] hover:bg-[#ECC86A] transition-all duration-200 rounded-lg shadow-lg shadow-[#D4AF37]/20 active:scale-95 group"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm uppercase tracking-wider font-semibold text-[#F5F3EA] bg-[#0B3A2E] hover:bg-[#0F4738] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-200 rounded-lg active:scale-95"
              >
                <span>{t.hero.letsTalk}</span>
              </a>
            </div>

            {/* Quiet Status Note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#F5F3EA]/60">
              <span className="text-[#D4AF37]">✦</span>
              <span>{t.hero.badgeStatus}</span>
            </div>
          </div>

          {/* Right Side: First Photo Frame with Rotating Red & Green Border */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Rotating Red & Green Frame */}
              <div className="red-green-frame">
                <div className="red-green-frame-inner aspect-[4/4.8] relative flex flex-col justify-between overflow-hidden">
                  {/* Portrait Photograph */}
                  <img
                    src={IMAGE_CONFIG.profilePhoto}
                    alt="Abdur Rahim - Founder of AR DesignBD"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim for Content Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06251F] via-[#06251F]/30 to-black/40 pointer-events-none" />

                  {/* Top Bar with Crest Logo */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#06251F]/85 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg">
                      {IMAGE_CONFIG.logoUrl && (
                        <img
                          src={IMAGE_CONFIG.logoUrl}
                          alt="AR DesignBD Crest"
                          className="w-6 h-6 object-contain"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <span className="text-xs font-bold tracking-tight text-[#F5F3EA]">
                        AR <span className="text-[#D4AF37]">Design</span>BD
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] px-2.5 py-1 rounded-full bg-[#06251F]/80 backdrop-blur-md border border-[#D4AF37]/30">
                      EST. 2026
                    </span>
                  </div>

                  {/* Bottom Studio Credentials Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#06251F]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-2xl z-10 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-[#F5F3EA]">
                        Abdur Rahim
                      </h3>
                      <p className="text-xs text-[#D4AF37] font-medium tracking-wide">
                        Founder & Creative Director
                      </p>
                    </div>

                    <div className="text-right flex flex-col items-end">
                      <div className="flex items-center gap-1 text-[11px] text-[#F5F3EA]/70">
                        <MapPin className="w-3 h-3 text-[#D4AF37]" />
                        <span>Gazipur, BD</span>
                      </div>
                      <span className="text-[10px] text-[#D4AF37]/90 font-mono mt-0.5">
                        Creative Studio
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offset Decorative Backdrop Card */}
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-3xl border border-[#D4AF37]/20 -z-10 translate-x-2 translate-y-2 pointer-events-none opacity-40" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 sm:pt-20 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-[#F5F3EA]/60 hover:text-[#D4AF37] transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="tracking-wider uppercase">{t.hero.scrollDown}</span>
            <div className="w-6 h-10 rounded-full border border-[#D4AF37]/40 flex items-start justify-center p-1.5">
              <span className="w-1.5 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
