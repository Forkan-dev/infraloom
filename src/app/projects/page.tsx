import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ProjectsGrid } from '@/features/projects/components/ProjectsGrid';

export const metadata: Metadata = {
  title: 'Projects — Infraloom Engineering',
  description: 'SaaS products and platforms built by Infraloom — enterprise-grade systems shipped end to end.',
};

export default function ProjectsPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="Products we built and shipped."
        body="Enterprise-grade SaaS platforms designed, built, and operated by our team — from architecture to production."
      />
      <ProjectsGrid />
    </div>
  );
}
