/**
 * AR DESIGNBD - IMAGE & BRAND ASSET CONFIGURATION
 * 
 * Replace image URLs here anytime with your personal photos or client project images.
 * If imageUrl is empty, a bespoke luxury geometric artwork placeholder is rendered automatically.
 */

export interface ImageAsset {
  imageUrl?: string;
  alt: string;
}

export const BRAND_CONFIG = {
  brandName: 'AR DesignBD',
  founder: 'Abdur Rahim',
  roles: ['Graphic Designer', 'Brand Identity Designer', 'Digital Creative Designer', 'Video Editor', 'AI Creative Designer'],
  tagline: {
    en: 'Creative Design. Powerful Identity.',
    bn: 'সৃজনশীল ডিজাইন। শক্তিশালী পরিচিতি।',
  },
  secondaryTagline: {
    en: 'Turning ideas into memorable visual experiences.',
    bn: 'ধারনাকে রূপান্তর করি স্মরণীয় দৃশ্যমান অভিজ্ঞতায়।',
  },
  location: {
    en: 'Konabari, Gazipur, Bangladesh',
    bn: 'কোনাবাড়ী, গাজীপুর, বাংলাদেশ',
  },
  contact: {
    whatsapp: '01923057893',
    whatsappFormatted: '+880 1923-057893',
    whatsappUrl: 'https://wa.me/8801923057893',
    email: 'rubelboss15@gmail.com',
    facebook: 'https://www.facebook.com/Abrgaraphic',
    facebookHandle: 'Abrgaraphic',
    linkedin: 'https://www.linkedin.com/in/rubelboss2',
    linkedinHandle: 'rubelboss2',
  },
};

export const IMAGE_CONFIG = {
  // Official AR DesignBD Gold Crest Logo:
  logoUrl: 'https://res.cloudinary.com/bsfkdefy/image/upload/v1791306789/AR_DesignBD_Gold_Crest_Logo.png',

  // Founder Portrait (Abdur Rahim):
  profilePhoto: 'https://res.cloudinary.com/bsfkdefy/image/upload/v1791366240/IMG20240423100519_copy.jpg',

  // Featured Project / Hero Creative Artwork:
  featuredProjectCover: 'https://res.cloudinary.com/bsfkdefy/image/upload/v1791306433/Gemini_Generated_Image_r0t5sgr0t5sgr0t5_1.png',

  // Portfolio items images:
  projects: {
    brandIdentity: 'https://res.cloudinary.com/bsfkdefy/image/upload/v1791306433/Gemini_Generated_Image_r0t5sgr0t5sgr0t5_1.png',
    creativePoster: '' as string,
    socialMediaCampaign: '' as string,
    modernLogoExploration: 'https://res.cloudinary.com/bsfkdefy/image/upload/v1791306789/AR_DesignBD_Gold_Crest_Logo.png',
    youtubeThumbnailCollection: '' as string,
    photoEditingSeries: 'https://res.cloudinary.com/bsfkdefy/image/upload/v1791366240/IMG20240423100519_copy.jpg',
    videoMotionReel: '' as string,
    aiCreativeVisual: 'https://res.cloudinary.com/bsfkdefy/image/upload/v1791306433/Gemini_Generated_Image_r0t5sgr0t5sgr0t5_1.png',
  },
};
