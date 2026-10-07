import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Logo } from './BrandVisual';
import { BRAND_CONFIG } from '../config/imageConfig';
import { MessageSquare, Mail, Facebook, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.works, href: '#works' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-[#041915] text-[#F5F3EA] border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 space-y-5">
            <Logo size="lg" showTagline={true} />
            <p className="text-base text-[#D4AF37] font-semibold max-w-sm">
              "{t.footer.tagline}"
            </p>
            <p className="text-sm text-[#F5F3EA]/70 max-w-sm leading-relaxed">
              {t.footer.subline}
            </p>
            <div className="text-xs font-mono text-[#D4AF37]/80">
              Founder & Designer: <span className="text-[#F5F3EA] font-bold">Abdur Rahim</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F5F3EA]/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#D4AF37] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social Profiles */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              {t.footer.connect}
            </h4>
            <ul className="space-y-3 text-sm text-[#F5F3EA]/80">
              <li>
                <a
                  href={BRAND_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                  <span>WhatsApp: {BRAND_CONFIG.contact.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND_CONFIG.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>{BRAND_CONFIG.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#D4AF37]" />
                  <span>Facebook: {BRAND_CONFIG.contact.facebookHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#D4AF37]" />
                  <span>LinkedIn: {BRAND_CONFIG.contact.linkedinHandle}</span>
                </a>
              </li>
            </ul>

            <div className="pt-2 text-xs text-[#F5F3EA]/60">
              <span className="text-[#D4AF37] font-semibold block">{t.footer.locationTitle}:</span>
              <span>{BRAND_CONFIG.location.en}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F3EA]/60">
          <div>
            <span>{t.footer.copyright}</span>
            <span className="mx-2 text-[#D4AF37]">·</span>
            <span className="text-[#D4AF37] font-medium">{t.footer.designerCredit}</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#06251F] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#06251F] transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
