import type { BrandConfig, CtaItem, NavItem, SocialLink } from '../_shared/types';
import { dataEs } from './locales/es';
import { dataEn } from './locales/en';

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface PillarItem {
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiciosData {
  brand: BrandConfig;
  nav: NavItem[];
  navCta?: CtaItem;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: CtaItem;
    secondaryCta?: CtaItem;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    pillars: PillarItem[];
  };
  stats: StatItem[];
  contact: {
    badge?: string;
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    whatsapp?: string;
    form?: {
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
    };
    labels?: {
      phone: string;
      email: string;
      whatsapp: string;
      address: string;
    };
  };
  footer: {
    description: string;
    socials: SocialLink[];
    copyright: string;
  };
}

export const currentLocale = import.meta.env.PUBLIC_LOCALE === 'en' ? 'en' : 'es';
export const data: ServiciosData = currentLocale === 'en' ? dataEn : dataEs;
