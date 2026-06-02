export interface ProjectItem {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  excerpt: string;
  coverImage: string;
  status: string;
  demoUrl?: string;
  stats: { l: string; v: string }[];
  tech: string[];
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    slug: 'hrm',
    category: 'SaaS · Enterprise',
    name: 'HRM',
    tagline: 'Enterprise-grade Human Resource Management System',
    excerpt:
      'A multi-tenant SaaS HRM platform allowing multiple companies on a single hosted instance — each with full data isolation, branded environments, and a smart attendance system supporting 8 check-in methods.',
    coverImage: '/projects/hrm/image.png',
    status: 'Live',
    demoUrl: 'http://103.174.51.180:5001/',
    stats: [
      { l: 'Check-in methods', v: '8' },
      { l: 'API endpoints', v: '80+' },
      { l: 'Permission types', v: '50+' },
    ],
    tech: ['Laravel', 'Vue.js', 'Firebase', 'Stripe', 'ZKTeco'],
  },
  {
    slug: 'newsportal',
    category: 'Media · Publishing',
    name: 'Online Newspaper',
    tagline: 'Full-Stack News Portal with Admin Control & Mobile App',
    excerpt:
      'A production-ready news publishing platform built with Laravel — covering the full workflow from reporter submission to admin approval to public reading, with a mobile app companion, multilingual support, and multiple revenue streams.',
    coverImage: '/projects/newspaper/frontpage.png',
    status: 'Live',
    stats: [
      { l: 'API endpoints', v: '50+' },
      { l: 'DB tables', v: '108+' },
      { l: 'News formats', v: '5' },
    ],
    tech: ['Laravel', 'TailwindCSS', 'Redis', 'AWS S3', 'Stripe', 'OpenAI'],
  },
];

export const CHANNEL1_FEATURES = [
  {
    title: 'Editorial Workflow',
    body: 'Reporter submits → Editor reviews → Admin approves. Scheduled publishing with auto-publish and auto-archive, plus breaking news, trending, and featured flags for fine-grained content control.',
  },
  {
    title: 'Multi-format News',
    body: 'Text, Video, Audio, Blog, and Picture formats all in one system. Serial/threaded news for story series, and full ePaper module with a digital newspaper and coordinate-based article placement.',
  },
  {
    title: 'Reader Engagement',
    body: 'Nested comments with upvote/downvote voting, polls and surveys embedded in articles, bookmarks, follow topics, personalized feed based on category preferences, and a social sharing reward system.',
  },
  {
    title: 'Multilingual & Geographic',
    body: 'Full LTR/RTL support across English, Bangla, Arabic, and more. Every model — news, categories, tags, menus, pages — is fully translatable. Country → State → City based news filtering for area-wise discovery.',
  },
  {
    title: 'Advertising & Monetization',
    body: 'Multiple ad zones and positions across the site with scheduled campaign dates. Premium content unlocked by subscription, newsletter management, and Stripe payment integration.',
  },
  {
    title: 'Mobile REST API',
    body: '50+ public API endpoints covering breaking news, trending, search, polls, bookmarks, and social sharing. Locale-based routes for multilingual app support with infinite scroll pagination.',
  },
  {
    title: 'Media & Cloud Storage',
    body: 'Built-in File Manager with image processing (small, medium, large, original). AWS S3 for cloud storage. Video embeds: YouTube, Vimeo, Dailymotion, SoundCloud, and VDocipher.',
  },
  {
    title: 'Performance & Security',
    body: 'Redis caching for news feeds and categories, Two-Factor Authentication (Google 2FA), role-based JSON permission system, Spatie Activity Log audit trail, and soft deletes for data preservation.',
  },
];

export const HRM_FEATURES = [
  {
    title: 'Multi-tenant SaaS',
    body: 'Multiple companies share one hosted instance with complete data isolation and their own branded environment. No cross-tenant data leakage, ever.',
  },
  {
    title: 'Dual Dashboard Architecture',
    body: 'A Company dashboard for organisation-wide oversight and a Branch dashboard giving local managers full control — attendance, payroll, leave, and projects all in one view.',
  },
  {
    title: 'Smart Attendance (8 Methods)',
    body: 'Face recognition, QR code, geofencing, IP restriction, selfie verification, ZKTeco biometric integration, and more. Every check-in captures timestamp, GPS coordinates, and a live photo.',
  },
  {
    title: 'Real-time Field Tracking',
    body: 'Field employees are tracked via Firebase Firestore, with continuous location logs visible on a live map for managers — updated in real time, no polling required.',
  },
  {
    title: 'Mobile REST API',
    body: '80+ REST endpoints for Android and iOS covering attendance, leave requests, expense claims, push notifications, and offline sync — built to work reliably on low-connectivity networks.',
  },
  {
    title: 'Payroll Automation',
    body: 'Custom salary structures, deductions, advance requests, and exportable payslips. Payroll runs are automated and auditable with a full calculation history.',
  },
  {
    title: 'Leave Management',
    body: 'Unlimited leave types, multi-level approval workflows, and real-time balance tracking. Managers approve or reject directly from the dashboard or mobile app.',
  },
  {
    title: 'Granular RBAC & Billing',
    body: '50+ permission types protect every route and API endpoint via middleware. Stripe handles subscription billing with plan-based feature gating — unused modules auto-disable on plan expiry.',
  },
];
