import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { MissionCard } from '@/features/about/components/MissionCard';
import { Timeline } from '@/features/about/components/Timeline';
import { Principles } from '@/features/about/components/Principles';
import { TeamGrid } from '@/features/about/components/TeamGrid';
import { HowWeWork } from '@/features/about/components/HowWeWork';
import { BigCTA } from '@/components/shared/BigCTA';

export const metadata: Metadata = {
  title: 'About — Infraloom Engineering',
  description: 'An engineering company. Not an agency. Founded by infrastructure engineers who build, ship and operate production systems.',
};

export default function AboutPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="About"
        title="An engineering company. Not an agency."
        body="We were founded by infrastructure engineers who got tired of inheriting other people's slideware. Today we build, ship and operate production systems for companies who can't afford to be wrong."
      />
      <MissionCard />
      <Timeline />
      <Principles />
      <TeamGrid />
      <HowWeWork />
      <BigCTA />
    </div>
  );
}
