import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { TechCategory } from '@/features/technologies/components/TechCategory';
import { BigCTA } from '@/components/shared/BigCTA';

export const metadata: Metadata = {
  title: 'Technologies — Infraloom Engineering',
  description: 'Tools we\'ve shipped to production. Repeatedly. Go, Node, Laravel, NestJS, Kubernetes, Kong, RabbitMQ, Grafana, Prometheus and more.',
};

export default function TechnologiesPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Technology"
        title="Tools we've shipped to production. Repeatedly."
        body="We don't pick a stack to look modern. We pick what survives an on-call rotation, a security audit and a migration."
      />
      <TechCategory />
      <BigCTA />
    </div>
  );
}
