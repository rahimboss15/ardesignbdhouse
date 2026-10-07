import React, { useState, useEffect } from 'react';
import { Logo } from './BrandVisual';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.works, href: '#works' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#06251F]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="AR DesignBD Home"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} showTagline={!isScrolled} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F5F3EA]/80" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#D4AF37] transition-colors relative py-1 focus-visible:outline-none focus-visible:text-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#0B3A2E] rounded-md p-1 border border-[#D4AF37]/25 text-xs font-semibold">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  currentLang === 'en'
                    ? 'bg-[#D4AF37] text-[#06251F] font-bold shadow-sm'
                    : 'text-[#F5F3EA]/70 hover:text-[#F5F3EA]'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-[#D4AF37]/40 px-0.5">|</span>
              <button
                type="button"
                onClick={() => onLanguageChange('bn')}
                className={`px-2.5 py-1 rounded transition-colors font-bangla ${
                  currentLang === 'bn'
                    ? 'bg-[#D4AF37] text-[#06251F] font-bold shadow-sm'
                    : 'text-[#F5F3EA]/70 hover:text-[#F5F3EA]'
                }`}
                aria-label="বাংলা ভাষায় পরিবর্তন করুন"
              >
                বাংলা
              </button>
            </div>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#06251F] bg-[#D4AF37] hover:bg-[#ECC86A] transition-all duration-200 rounded-md shadow-md shadow-[#D4AF37]/10 hover:shadow-[#D4AF37]/25 active:scale-95"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button + Language Switcher for Mobile */}
          <div className="flex md:hidden items-center gap-2.5">
            {/* Compact Mobile Language Switcher */}
            <div className="flex items-center bg-[#0B3A2E] rounded p-0.5 border border-[#D4AF37]/25 text-xs">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                  currentLang === 'en' ? 'bg-[#D4AF37] text-[#06251F]' : 'text-[#F5F3EA]/70'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('bn')}
                className={`px-2 py-0.5 rounded text-[11px] font-bangla ${
                  currentLang === 'bn' ? 'bg-[#D4AF37] text-[#06251F]' : 'text-[#F5F3EA]/70'
                }`}
              >
                বাং
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F3EA] hover:text-[#D4AF37] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#06251F]/98 backdrop-blur-xl border-b border-[#D4AF37]/25 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#F5F3EA] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase tracking-wider text-[#06251F] bg-[#D4AF37] rounded-lg"
              >
                <span>{t.nav.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
