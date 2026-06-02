import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { PortfolioGrid } from '@/features/portfolio/components/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Case Studies — Infraloom Engineering',
  description: 'Real-world systems we designed and shipped — geo-tracking at 92k vehicles, pixel streaming at scale, and enterprise HRM.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Systems we're proud to be on call for."
        body="Every engagement is a production system, not a demo. Here's what we shipped."
      />
      <PortfolioGrid />
    </>
  );
}
