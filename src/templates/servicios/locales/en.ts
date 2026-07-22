import type { ServiciosData } from '../data';

export const dataEn: ServiciosData = {
  brand: {
    name: 'Aranda Consulting',
    initial: 'A',
    tagline: 'Strategic Business Advisory',
  },
  nav: [
    { label: 'Services', href: '#servicios' },
    { label: 'About Us', href: '#nosotros' },
    { label: 'Contact', href: '#contacto' },
  ],
  navCta: { label: 'Schedule Consultation', href: '#contacto' },
  hero: {
    eyebrow: 'Business Advisory · Since 2008',
    title: 'Strategic Decisions Backed by Expert Insight',
    subtitle:
      'Empowering mid-sized and family-owned businesses in Colombia to grow with structure, compliance, and long-term vision.',
    primaryCta: { label: 'Schedule Consultation', href: '#contacto' },
    secondaryCta: { label: 'Explore Services', href: '#servicios' },
  },
  services: {
    title: 'Our Services',
    subtitle: 'Tailored solutions designed to support every phase of your business growth.',
    items: [
      {
        icon: 'compass',
        title: 'Strategic Consulting',
        description: 'Comprehensive business diagnostics, 3-5 year roadmap, and ongoing executive guidance.',
      },
      {
        icon: 'calculator',
        title: 'Tax Advisory & Planning',
        description: 'Legal tax optimization, corporate tax filing, and shareholder wealth structuring.',
      },
      {
        icon: 'chart-line',
        title: 'Financial Analysis',
        description: 'Financial modeling, key metric tracking, and forecasting for data-driven decisions.',
      },
      {
        icon: 'shield-check',
        title: 'Compliance & Regulations',
        description: 'Regulatory compliance, SAGRILAFT risk management, SECOP, and public procurement.',
      },
      {
        icon: 'graduation-cap',
        title: 'Executive Training',
        description: 'Customized development programs for leadership teams and management personnel.',
      },
      {
        icon: 'trending-up',
        title: 'Digital Transformation',
        description: 'Modern tool adoption to automate key core operational and financial processes.',
      },
    ],
  },
  about: {
    eyebrow: 'About Us',
    title: 'One team, 17 years guiding leading Colombian enterprises',
    paragraphs: [
      'Aranda Consulting was founded in 2008 with the firm belief that growing mid-sized enterprises deserve top-tier corporate advisory services at an accessible investment level.',
      'Today, our team of 12 senior consultants specializes in strategy, finance, taxation, and corporate governance—partnering with over 80 businesses across manufacturing, retail, services, and agribusiness.',
    ],
    pillars: [
      { title: 'Total Transparency', description: 'Clear, upfront fee structure from day one with zero surprises.' },
      { title: 'Data Over Intuition', description: 'Every strategic recommendation is grounded in rigorous quantitative analysis.' },
      { title: 'Long-Term Partnerships', description: '70% of our enterprise clients have been with us for over 5 years.' },
      { title: 'Local Market Expertise', description: 'Deep specialization in the Colombian tax, financial, and legal regulatory landscape.' },
    ],
  },
  stats: [
    { value: '17+', label: 'Years of Experience' },
    { value: '80+', label: 'Enterprise Clients' },
    { value: '12', label: 'Senior Consultants' },
    { value: '95%', label: 'Annual Client Retention' },
  ],
  contact: {
    badge: 'Get in Touch',
    title: 'Let’s Discuss Your Business',
    subtitle: 'We reply within 24 business hours.',
    phone: '+57 (1) 555-0188',
    email: 'contacto@aranda.co',
    address: 'Carrera 11 # 93-32, Suite 504, Bogotá',
    hours: 'Mon to Fri · 8:00 AM – 6:00 PM',
    whatsapp: '+573001234567',
    form: {
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name',
      companyLabel: 'Company Name',
      companyPlaceholder: 'Your company name',
      emailLabel: 'Work Email',
      emailPlaceholder: 'email@company.com',
      messageLabel: 'How can we help you?',
      messagePlaceholder: 'Tell us briefly about your business goals and needs…',
      submitButton: 'Send Message',
    },
    labels: {
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      address: 'Address',
    },
  },
  footer: {
    description: 'Strategic business advisory and financial consulting for mid-sized companies in Colombia.',
    socials: [
      { type: 'linkedin', url: 'https://linkedin.com' },
      { type: 'facebook', url: 'https://facebook.com' },
    ],
    copyright: '© 2026 Aranda Consulting. All rights reserved.',
  },
};
