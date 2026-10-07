export type Language = 'en' | 'bn';

export interface ServiceItem {
  id: string;
  number: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  deliverablesEn: string[];
  deliverablesBn: string[];
  tag: string;
}

export interface ProjectItem {
  id: string;
  titleEn: string;
  titleBn: string;
  category: 'logo' | 'branding' | 'poster' | 'social' | 'thumbnail' | 'photo' | 'video';
  categoryLabelEn: string;
  categoryLabelBn: string;
  descEn: string;
  descBn: string;
  challengeEn: string;
  challengeBn: string;
  approachEn: string;
  approachBn: string;
  resultEn: string;
  resultBn: string;
  tools: string[];
  year: string;
  aspect: 'landscape' | 'portrait' | 'square' | 'wide';
  featured?: boolean;
  visualType: 'brand' | 'poster' | 'social' | 'video' | 'logo' | 'thumbnail' | 'photo';
}

export interface SkillItem {
  name: string;
  categoryEn: string;
  categoryBn: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
}

export interface ValueProp {
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
}
