import type { ServiceIconName } from '@/components/shared/ServiceIcon';

export interface Service {
  icon: ServiceIconName;
  title: string;
  body: string;
  deliverables: string[];
}

export interface CaseStudy {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  heroStats: Stat[];
  problem: string;
  goals: string[];
  solution: string[];
  microservices: Microservice[];
  challenges: Challenge[];
  results: Result[];
  stack: string[];
  hasArch?: boolean;
}

export interface Stat {
  l: string;
  v: string;
}

export interface Microservice {
  n: string;
  lang: string;
  role: string;
}

export interface Challenge {
  t: string;
  b: string;
}

export interface Result {
  l: string;
  v: string;
  was: string;
}

export interface TechItem {
  n: string;
  g: string;
  c: string;
  note: string;
}

export interface TechCategory {
  title: string;
  body: string;
  items: TechItem[];
}

export interface Industry {
  n: string;
  title: string;
  glyph: string;
  color: string;
  challenge: string;
  solution: string;
  stack: string[];
  kpis: Stat[];
}

export interface ProcessStage {
  n: string;
  title: string;
  body: string;
  outputs: string[];
  tools: string[];
}

export interface NavItem {
  label: string;
  to: string;
  body?: string;
}

export interface FooterGroup {
  title: string;
  items: { label: string; href: string }[];
}

export interface ContactInquiry {
  name: string;
  email: string;
  company: string;
  role: string;
  project: string;
  budget: string;
  timeline: string;
  message: string;
}
