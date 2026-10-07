import React, { useState, useEffect } from 'react';
import { Language, ProjectItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { FeaturedProject } from './components/FeaturedProject';
import { CreativeStatement } from './components/CreativeStatement';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { BrandStatement } from './components/BrandStatement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PortfolioModal } from './components/PortfolioModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('ar_designbd_lang');
      if (saved === 'bn' || saved === 'en') {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'en'; // English is DEFAULT
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('branding');

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('ar_designbd_lang', lang);
    } catch {
      // Ignore localStorage restrictions
    }
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'bn') {
      document.body.classList.add('lang-bn');
    } else {
      document.body.classList.remove('lang-bn');
    }
  }, [currentLang]);

  const handleSelectServiceForContact = (serviceId: string) => {
    setPreselectedService(serviceId);
  };

  return (
    <div className="min-h-screen bg-[#06251F] text-[#F5F3EA] selection:bg-[#D4AF37] selection:text-[#06251F]">
      {/* 01. Header */}
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      {/* Main Content Sections */}
      <main>
        {/* 02. Hero Section */}
        <Hero currentLang={currentLang} />

        {/* 03. About Section */}
        <About currentLang={currentLang} />

        {/* 04. Services Section */}
        <Services currentLang={currentLang} />

        {/* 05. Selected Works / Portfolio Section */}
        <Portfolio
          currentLang={currentLang}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 06. Featured Project Spotlight */}
        <FeaturedProject
          currentLang={currentLang}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 07. Creative Philosophy Statement */}
        <CreativeStatement currentLang={currentLang} />

        {/* 08. Skills / Creative Toolkit */}
        <Skills currentLang={currentLang} />

        {/* 09. How I Work / Process */}
        <Process currentLang={currentLang} />

        {/* 10. Why AR DesignBD? */}
        <WhyWorkWithMe currentLang={currentLang} />

        {/* 11. Personal Brand Statement */}
        <BrandStatement currentLang={currentLang} />

        {/* 12. Contact Section */}
        <Contact currentLang={currentLang} preselectedService={preselectedService} />
      </main>

      {/* 13. Footer */}
      <Footer currentLang={currentLang} />

      {/* 14. Floating WhatsApp Button */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* 15. Lightbox / Case Study Modal */}
      <PortfolioModal
        project={selectedProject}
        currentLang={currentLang}
        onClose={() => setSelectedProject(null)}
        onSelectServiceForContact={handleSelectServiceForContact}
      />
    </div>
  );
}
