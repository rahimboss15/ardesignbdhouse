import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BRAND_CONFIG } from '../config/imageConfig';
import {
  MessageSquare,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Send,
  Linkedin,
  Facebook,
} from 'lucide-react';

interface ContactProps {
  currentLang: Language;
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ currentLang, preselectedService }) => {
  const t = TRANSLATIONS[currentLang];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: preselectedService || 'branding',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesOptions = [
    { value: 'logo', labelEn: '01 · Logo Design', labelBn: '০১ · লোগো ডিজাইন' },
    { value: 'branding', labelEn: '02 · Brand Identity', labelBn: '০২ · ব্র্যান্ড আইডেন্টিটি' },
    { value: 'social', labelEn: '03 · Social Media Design', labelBn: '০৩ · সোশ্যাল মিডিয়া ডিজাইন' },
    { value: 'poster', labelEn: '04 · Poster & Banner Design', labelBn: '০৪ · পোস্টার ও ব্যানার ডিজাইন' },
    { value: 'photo', labelEn: '05 · Photo Editing', labelBn: '০৫ · ছবি সম্পাদনা' },
    { value: 'video', labelEn: '06 · Video Editing', labelBn: '০৬ · ভিডিও এডিটিং' },
    { value: 'thumbnail', labelEn: '07 · YouTube Thumbnail', labelBn: '০৭ · ইউটিউব থাম্বনেইল' },
    { value: 'ai', labelEn: '08 · AI Creative Design', labelBn: '০৮ · এআই ক্রিয়েটিভ ডিজাইন' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const serviceName = servicesOptions.find((s) => s.value === formData.service)?.labelEn || formData.service;
    const text = encodeURIComponent(
      `Hello Abdur Rahim,\n\nMy name is ${formData.name || 'Client'}.\nI am interested in: ${serviceName}.\n\nMessage: ${formData.message || 'I would like to discuss a project with AR DesignBD.'}\n\nEmail: ${formData.email || 'N/A'}`
    );
    window.open(`https://wa.me/8801923057893?text=${text}`, '_blank');
  };

  const handleSendViaMail = () => {
    const serviceName = servicesOptions.find((s) => s.value === formData.service)?.labelEn || formData.service;
    const subject = encodeURIComponent(`Project Inquiry: ${serviceName} - AR DesignBD`);
    const body = encodeURIComponent(
      `Hi Abdur Rahim,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${serviceName}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:rubelboss15@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#06251F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
              {t.contact.tag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EA]">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-lg text-[#D4AF37] font-medium">
            {t.contact.subheading}
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 rounded-2xl bg-[#0B3A2E]/50 border border-[#D4AF37]/25 space-y-6">
              <h3 className="text-lg font-bold text-[#F5F3EA] uppercase tracking-wider font-mono">
                {t.contact.directContact}
              </h3>

              {/* WhatsApp Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#06251F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block">
                    WhatsApp
                  </span>
                  <a
                    href={BRAND_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#F5F3EA] hover:text-[#D4AF37] transition-colors"
                  >
                    {BRAND_CONFIG.contact.whatsapp}
                  </a>
                  <p className="text-xs text-[#F5F3EA]/60">
                    Fastest response for new project discussions
                  </p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#D4AF37]/15">
                <div className="w-10 h-10 rounded-xl bg-[#06251F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block">
                    Email
                  </span>
                  <a
                    href={`mailto:${BRAND_CONFIG.contact.email}`}
                    className="text-base font-bold text-[#F5F3EA] hover:text-[#D4AF37] transition-colors break-all"
                  >
                    {BRAND_CONFIG.contact.email}
                  </a>
                  <p className="text-xs text-[#F5F3EA]/60">
                    For detailed project briefs and formal contracts
                  </p>
                </div>
              </div>

              {/* Social Channels: Facebook & LinkedIn */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#D4AF37]/15">
                <div className="w-10 h-10 rounded-xl bg-[#06251F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block">
                    Facebook Profile
                  </span>
                  <a
                    href={BRAND_CONFIG.contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#F5F3EA] hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Abrgaraphic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#D4AF37]/15">
                <div className="w-10 h-10 rounded-xl bg-[#06251F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block">
                    LinkedIn
                  </span>
                  <a
                    href={BRAND_CONFIG.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#F5F3EA] hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>rubelboss2</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#D4AF37]/15">
                <div className="w-10 h-10 rounded-xl bg-[#06251F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block">
                    Studio Location
                  </span>
                  <p className="text-sm font-medium text-[#F5F3EA]">
                    {BRAND_CONFIG.location.en}
                  </p>
                </div>
              </div>
            </div>

            {/* Prominent WhatsApp Action Button */}
            <a
              href={BRAND_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm uppercase tracking-wider font-bold text-[#06251F] bg-[#D4AF37] hover:bg-[#ECC86A] transition-all duration-200 shadow-xl shadow-[#D4AF37]/15 active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t.contact.chatWhatsapp}</span>
            </a>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0B3A2E]/40 border border-[#D4AF37]/30 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#F5F3EA]">
                  {t.contact.formTitle}
                </h3>
                <p className="mt-1 text-sm text-[#F5F3EA]/70">
                  {t.contact.formDesc}
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#06251F] border-2 border-[#D4AF37] mx-auto flex items-center justify-center text-[#D4AF37]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-[#F5F3EA]">
                      {t.contact.successTitle}
                    </h4>
                    <p className="text-sm text-[#F5F3EA]/80 max-w-md mx-auto">
                      {t.contact.successDesc}
                    </p>
                  </div>

                  {/* Immediate actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-[#06251F] hover:bg-[#ECC86A] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue to WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSendViaMail}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#06251F] text-[#F5F3EA] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', service: 'branding', message: '' });
                    }}
                    className="text-xs text-[#D4AF37] hover:underline pt-2 block mx-auto"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 rounded-lg bg-[#06251F] border border-[#D4AF37]/30 text-[#F5F3EA] placeholder-[#F5F3EA]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                      {t.contact.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-lg bg-[#06251F] border border-[#D4AF37]/30 text-[#F5F3EA] placeholder-[#F5F3EA]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                      {t.contact.serviceLabel} *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#06251F] border border-[#D4AF37]/30 text-[#F5F3EA] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all cursor-pointer"
                    >
                      {servicesOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#06251F] text-[#F5F3EA]">
                          {currentLang === 'en' ? opt.labelEn : opt.labelBn}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                      {t.contact.messageLabel} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-lg bg-[#06251F] border border-[#D4AF37]/30 text-[#F5F3EA] placeholder-[#F5F3EA]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-xs font-bold uppercase tracking-wider text-[#06251F] bg-[#D4AF37] hover:bg-[#ECC86A] transition-colors shadow-lg shadow-[#D4AF37]/15 disabled:opacity-50 cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t.contact.sendingButton : t.contact.sendButton}</span>
                  </button>

                  <p className="text-[11px] text-[#F5F3EA]/50 text-center">
                    {t.contact.whatsappQuick}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
