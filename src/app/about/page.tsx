import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { MissionCard } from '@/features/about/components/MissionCard';
import { OurStory } from '@/features/about/components/OurStory';
import { Principles } from '@/features/about/components/Principles';
import { HowWeWork } from '@/features/about/components/HowWeWork';

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
      <OurStory />
      <Principles />
      <HowWeWork />
    </div>
  );
}
