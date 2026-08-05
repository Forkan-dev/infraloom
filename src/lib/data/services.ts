import type { Service } from '@/types';

export const SERVICES: Service[] = [
  {
    icon: 'web',
    title: 'Web Applications',
    body: 'Software built around how your business actually works, from customer portals and ecommerce to internal tools and dashboards.',
    deliverables: ['Architecture and data model', 'Production codebase', 'Admin tooling', 'Deployment pipeline'],
  },
  {
    icon: 'game',
    title: 'Game Streaming',
    body: 'Unreal Engine pixel streaming platforms that run interactive 3D on GPU servers and deliver it to any browser, with no install.',
    deliverables: ['Pixel streaming setup', 'GPU session orchestration', 'Auto scaling and pooling', 'Usage and cost reporting'],
  },
  {
    icon: 'saas',
    title: 'SaaS Platforms',
    body: 'Multi-tenant products with role-aware access, subscription billing, audit logs and an admin console from day one.',
    deliverables: ['Multi-tenant data model', 'Subscription billing', 'Admin console', 'Public API'],
  },
  {
    icon: 'enterprise',
    title: 'Enterprise Systems',
    body: 'Replacing ageing internal systems with modern ones, keeping the business running throughout the migration.',
    deliverables: ['Migration plan', 'Single sign-on and roles', 'Audit trails', 'Staff training and handover'],
  },
  {
    icon: 'mobile',
    title: 'Mobile Apps',
    body: 'Cross-platform apps for iOS and Android that stay usable offline and ship through an automated release process.',
    deliverables: ['iOS and Android builds', 'Offline sync', 'Push notifications', 'Crash and usage analytics'],
  },
  {
    icon: 'ai',
    title: 'AI & Automation',
    body: 'Practical AI features on your own data, including document search, assistants and workflow automation you can host yourself.',
    deliverables: ['Document search and RAG', 'Assistant or agent runtime', 'Quality evaluation', 'Self-hosted model option'],
  },
  {
    icon: 'cloud',
    title: 'Cloud Infrastructure',
    body: 'Cloud environments that are predictable to run and cheap to operate, with recovery tested before you need it.',
    deliverables: ['Infrastructure as code', 'Environment setup', 'Backup and recovery plan', 'Cost review'],
  },
  {
    icon: 'devops',
    title: 'DevOps & CI/CD',
    body: 'Automated build, test and release pipelines so shipping is routine rather than an event.',
    deliverables: ['CI/CD pipelines', 'Automated testing gates', 'Staged rollouts', 'Monitoring and alerts'],
  },
  {
    icon: 'support',
    title: 'Maintenance & Support',
    body: 'Long-term ownership of the systems we build. We keep them patched, monitored and ready for the next growth step.',
    deliverables: ['On-call cover', 'Security updates', 'Performance reviews', 'Capacity planning'],
  },
];

export const SERVICES_PREVIEW = [
  { title: 'Web Applications', body: 'Customer portals, ecommerce storefronts, internal tools, dashboards and marketplaces, built to stay fast as they grow.', icon: 'web' },
  { title: 'Game Streaming', body: 'Unreal Engine pixel streaming platforms with GPU session orchestration and interactive 3D delivered straight to the browser.', icon: 'game' },
  { title: 'AI Solutions', body: 'RAG pipelines, agent loops and local LLM inference for sensitive data.', icon: 'ai' },
  { title: 'Mobile Development', body: 'Cross-platform apps with offline-first sync and battery-conscious sessions.', icon: 'mobile' },
  { title: 'DevOps & Automation', body: 'Observability, SLOs and automated rollouts from day one.', icon: 'devops' },
] as const;
