import React from 'react';
import { IMAGE_CONFIG } from '../config/imageConfig';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg'; showTagline?: boolean; className?: string }> = ({
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* AR Monogram Emblem */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0B3A2E] via-[#06251F] to-[#111111] border border-[#D4AF37]/40 shadow-[0_2px_12px_rgba(212,175,55,0.18)] shrink-0 overflow-hidden group`}
      >
        {IMAGE_CONFIG.logoUrl ? (
          <img
            src={IMAGE_CONFIG.logoUrl}
            alt="AR DesignBD Logo"
            className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full p-1.5 transition-transform duration-300 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Subtle geometric framing */}
            <rect x="8" y="8" width="84" height="84" rx="8" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.4" />
            <circle cx="50" cy="50" r="38" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
            
            {/* Stylized Monogram A & R */}
            <path
              d="M32 72L48 26C49 23 51 23 52 26L68 72"
              stroke="url(#goldGradient)"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* A crossbar merging into R bowl */}
            <path
              d="M39 55H61"
              stroke="url(#goldGradient)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* R Loop & Leg */}
            <path
              d="M50 26H63C70 26 74 31 74 38C74 45 70 50 63 50H50"
              stroke="url(#goldGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60 50L73 72"
              stroke="url(#goldGradient)"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            
            <defs>
              <linearGradient id="goldGradient" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F9E29B" />
                <stop offset="0.5" stopColor="#D4AF37" />
                <stop offset="1" stopColor="#9E7817" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col text-left">
        <span className={`font-bold tracking-tight text-[#F5F3EA] leading-tight ${textSizes[size]}`}>
          AR <span className="text-[#D4AF37]">Design</span>BD
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#F5F3EA]/60 font-medium">
            Creative Digital Studio
          </span>
        )}
      </div>
    </div>
  );
};

export const DesignerPortraitVisual: React.FC<{ className?: string; withRotatingBorder?: boolean }> = ({
  className = '',
  withRotatingBorder = true,
}) => {
  if (IMAGE_CONFIG.profilePhoto) {
    const photoContent = (
      <div className="relative w-full h-full aspect-[4/5] overflow-hidden bg-[#0B3A2E] group">
        <img
          src={IMAGE_CONFIG.profilePhoto}
          alt="Abdur Rahim - Founder & Creative Designer at AR DesignBD"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06251F] via-[#06251F]/20 to-transparent opacity-80" />
        
        {/* Subtle glass overlay tag */}
        <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#06251F]/90 backdrop-blur-md border border-[#D4AF37]/35 flex items-center justify-between text-xs shadow-xl">
          <div>
            <span className="font-bold text-[#F5F3EA] text-sm block">Abdur Rahim</span>
            <span className="text-[#D4AF37] text-[11px] font-mono">Founder & Lead Designer</span>
          </div>
          <span className="px-2.5 py-1 rounded bg-[#0B3A2E] text-[10px] text-[#D4AF37] font-mono font-bold border border-[#D4AF37]/30">
            AR DesignBD
          </span>
        </div>
      </div>
    );

    if (withRotatingBorder) {
      return (
        <div className={`red-green-frame ${className}`}>
          <div className="red-green-frame-inner">
            {photoContent}
          </div>
        </div>
      );
    }

    return (
      <div className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#0B3A2E] shadow-2xl ${className}`}>
        {photoContent}
      </div>
    );
  }

  // Refined Editorial Portrait Artwork Placeholder
  return (
    <div
      className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-gradient-to-b from-[#0B3A2E] via-[#06251F] to-[#111111] shadow-2xl p-6 sm:p-8 flex flex-col justify-between group ${className}`}
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Top Status */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06251F]/90 border border-[#D4AF37]/30 text-xs text-[#F5F3EA]/80 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span>Founder & Designer</span>
        </div>
        <span className="text-xs tracking-widest text-[#D4AF37]/80 font-mono">EST. 2026</span>
      </div>

      {/* Centerpiece Monogram Silhouette Composition */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center py-6">
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#0B3A2E] to-[#F5F3EA]/30 shadow-2xl">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#082C24] to-[#041612] flex items-center justify-center overflow-hidden border border-[#D4AF37]/20 relative">
            {/* Stylized Silhouette */}
            <svg viewBox="0 0 120 120" className="w-32 h-32 sm:w-36 sm:h-36 text-[#D4AF37]/90" fill="currentColor">
              {/* Head / Hair / Beard stylized shape */}
              <circle cx="60" cy="42" r="22" opacity="0.85" />
              <path d="M60 20C47 20 38 28 38 42C38 52 45 60 52 63C57 65 63 65 68 63C75 60 82 52 82 42C82 28 73 20 60 20Z" opacity="0.95" />
              {/* Torso / Jacket collar */}
              <path d="M30 110C30 84 45 74 60 74C75 74 90 84 90 110H30Z" opacity="0.9" />
              <path d="M50 78L60 92L70 78" stroke="#06251F" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-[#06251F] via-transparent to-transparent opacity-60" />
          </div>
        </div>

        <div className="mt-5 space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F3EA]">
            Abdur Rahim
          </h3>
          <p className="text-sm text-[#D4AF37] font-medium tracking-wide">
            Lead Designer & Creative Strategist
          </p>
        </div>
      </div>

      {/* Bottom Editorial Meta Card */}
      <div className="relative z-10 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#F5F3EA]/70">
        <div>
          <span className="block text-[#D4AF37] font-semibold text-[11px] uppercase tracking-wider">Studio</span>
          <span>AR DesignBD</span>
        </div>
        <div className="text-right">
          <span className="block text-[#D4AF37] font-semibold text-[11px] uppercase tracking-wider">Location</span>
          <span>Gazipur, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export const ProjectVisualPlaceholder: React.FC<{
  type: string;
  title: string;
  customUrl?: string;
  className?: string;
}> = ({ type, title, customUrl, className = '' }) => {
  if (customUrl) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#0B3A2E] ${className}`}>
        <img
          src={customUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06251F]/90 via-[#06251F]/20 to-transparent pointer-events-none" />
      </div>
    );
  }

  // Bespoke editorial artworks tailored to each design category
  return (
    <div
      className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#0B3A2E] via-[#06251F] to-[#111111] overflow-hidden flex flex-col justify-between p-6 transition-all duration-500 group-hover:border-[#D4AF37]/50 ${className}`}
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Top Header of the Card */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
          AR · {type}
        </span>
        <div className="w-6 h-6 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[10px] text-[#D4AF37]">
          ✦
        </div>
      </div>

      {/* Center Artwork Representation */}
      <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center">
        {type === 'brand' && (
          <div className="w-4/5 max-w-[260px] aspect-[16/10] rounded-lg bg-[#06251F] border border-[#D4AF37]/40 shadow-xl p-4 flex flex-col justify-between transform transition-transform duration-500 group-hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-tight text-[#D4AF37]">AR DESIGNBD</span>
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="h-2 w-3/4 bg-[#D4AF37]/30 rounded-full" />
              <div className="h-1.5 w-1/2 bg-[#F5F3EA]/20 rounded-full" />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#D4AF37]/20 text-[9px] text-[#F5F3EA]/50 font-mono">
              <span>VISUAL SYSTEM</span>
              <span>2026</span>
            </div>
          </div>
        )}

        {type === 'logo' && (
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-[#0B3A2E] to-[#124b3c] border border-[#D4AF37]/50 shadow-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
            <svg viewBox="0 0 60 60" className="w-16 h-16 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="30" cy="30" r="24" strokeOpacity="0.4" strokeDasharray="4 2" />
              <path d="M20 44L30 18L40 44" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24 35H36" />
              <path d="M30 18H38C42 18 45 21 45 25C45 29 42 32 38 32H30" strokeLinecap="round" />
              <path d="M36 32L44 44" strokeLinecap="round" />
            </svg>
          </div>
        )}

        {type === 'poster' && (
          <div className="w-36 h-48 rounded bg-[#111111] border border-[#D4AF37]/40 shadow-2xl p-3 flex flex-col justify-between transform transition-transform duration-500 group-hover:scale-105">
            <div className="space-y-1">
              <div className="text-[10px] font-black uppercase tracking-tight text-[#F5F3EA] leading-none">
                VISUAL
                <br />
                <span className="text-[#D4AF37]">EXHIBITION</span>
              </div>
              <div className="h-0.5 w-8 bg-[#D4AF37]" />
            </div>
            <div className="w-full h-14 bg-gradient-to-br from-[#0B3A2E] to-[#06251F] rounded border border-[#D4AF37]/20 flex items-center justify-center">
              <span className="text-[10px] text-[#D4AF37] font-mono">01. CREATIVE</span>
            </div>
            <div className="text-[8px] font-mono text-[#F5F3EA]/50 flex justify-between">
              <span>BANGLADESH</span>
              <span>2026</span>
            </div>
          </div>
        )}

        {type === 'social' && (
          <div className="w-52 aspect-square rounded-xl bg-[#082c24] border border-[#D4AF37]/30 shadow-xl p-3 flex flex-col justify-between transform transition-transform duration-500 group-hover:scale-105">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#D4AF37]/30 flex items-center justify-center text-[10px] text-[#D4AF37]">
                AR
              </div>
              <span className="text-[10px] text-[#F5F3EA]/80 font-medium">@ardesignbd</span>
            </div>
            <div className="py-2 text-center">
              <p className="text-xs font-bold text-[#F5F3EA]">HOW TO BUILD A</p>
              <p className="text-sm font-extrabold text-[#D4AF37]">MEMORABLE BRAND</p>
              <p className="text-[9px] text-[#F5F3EA]/60 mt-1">SWIPE FOR STRATEGY →</p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span className="w-3 h-1 rounded-full bg-[#D4AF37]" />
              <span className="w-1.5 h-1 rounded-full bg-[#F5F3EA]/30" />
              <span className="w-1.5 h-1 rounded-full bg-[#F5F3EA]/30" />
            </div>
          </div>
        )}

        {type === 'thumbnail' && (
          <div className="w-56 aspect-[16/9] rounded-lg bg-[#061e19] border-2 border-[#D4AF37] shadow-2xl p-2.5 flex items-center justify-between relative overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
            <div className="space-y-0.5 z-10 max-w-[65%]">
              <span className="inline-block px-1.5 py-0.5 bg-[#D4AF37] text-[#06251F] text-[9px] font-black uppercase rounded">
                SECRET FORMULA
              </span>
              <p className="text-xs font-black text-[#F5F3EA] leading-tight">
                TOP DESIGN HACKS
              </p>
            </div>
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#D4AF37] to-amber-200 p-0.5 shadow-lg">
              <div className="w-full h-full rounded-full bg-[#06251F] flex items-center justify-center text-xs font-bold text-[#D4AF37]">
                100%
              </div>
            </div>
          </div>
        )}

        {type === 'photo' && (
          <div className="w-40 aspect-[3/4] rounded-xl bg-gradient-to-b from-[#0F4738] to-[#06251F] border border-[#D4AF37]/40 shadow-xl p-3 flex flex-col justify-between transform transition-transform duration-500 group-hover:scale-105">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#D4AF37]">
              <span>RETOUCH</span>
              <span>GRADE A</span>
            </div>
            <div className="w-20 h-20 rounded-full mx-auto border-2 border-[#D4AF37]/50 flex items-center justify-center bg-[#06251F]/60">
              <span className="text-xs text-[#D4AF37]">PORTRAIT</span>
            </div>
            <div className="text-center text-[9px] text-[#F5F3EA]/70">
              NATURAL SKIN TEXTURE
            </div>
          </div>
        )}

        {type === 'video' && (
          <div className="w-36 aspect-[9/16] rounded-xl bg-[#09221C] border border-[#D4AF37]/40 shadow-2xl p-3 flex flex-col justify-between transform transition-transform duration-500 group-hover:scale-105">
            <div className="flex items-center justify-between text-[9px] text-[#D4AF37]">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" /> REC
              </span>
              <span>4K · 60FPS</span>
            </div>
            <div className="my-auto text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#06251F] flex items-center justify-center mx-auto shadow-md">
                ▶
              </div>
              <p className="text-[10px] font-bold text-[#F5F3EA]">KINETIC REEL</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-0.5 justify-center h-4">
                {[4, 12, 8, 16, 6, 14, 10, 8, 15, 6].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}px` }}
                    className="w-1 bg-[#D4AF37]/70 rounded-full"
                  />
                ))}
              </div>
              <div className="h-1 w-full bg-[#D4AF37]/20 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-[#D4AF37]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Title Label */}
      <div className="relative z-10 pt-2 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs">
        <span className="font-semibold text-[#F5F3EA] truncate">{title}</span>
        <span className="text-[#D4AF37] text-sm group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
};
