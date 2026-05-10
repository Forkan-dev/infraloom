import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { PortfolioGrid } from '@/features/portfolio/components/PortfolioGrid';
import { BigCTA } from '@/components/shared/BigCTA';

export const metadata: Metadata = {
  title: 'Case Studies — Infraloom Engineering',
  description: 'Three engagements that show how we work — from white-boarding to on-call. The architecture, the metrics, the trade-offs.',
};

export default function PortfolioPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Case studies"
        title="Production systems, told end to end."
        body="Three engagements that show how we work — from white-boarding to on-call. The architecture, the metrics, the trade-offs."
      />
      <PortfolioGrid />
      <BigCTA />
    </div>
  );
}
