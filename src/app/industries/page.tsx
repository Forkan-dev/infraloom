import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { IndustryRow } from '@/features/industries/components/IndustryRow';
import { BigCTA } from '@/components/shared/BigCTA';

export const metadata: Metadata = {
  title: 'Industries — Infraloom Engineering',
  description: 'Healthcare, Fintech, Logistics, Education, SaaS and Media & Streaming. Industries we\'ve gone deep in.',
};

export default function IndustriesPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Industries"
        title="Industries we've gone deep in."
        body="The shape of a platform is decided by what it has to comply with, who pays the bills and who gets paged. We design for those constraints."
      />
      <IndustryRow />
      <BigCTA />
    </div>
  );
}
