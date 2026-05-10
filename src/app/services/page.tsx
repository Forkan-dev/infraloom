import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { ServiceRow } from '@/features/services/components/ServiceRow';
import { BigCTA } from '@/components/shared/BigCTA';
import { Reveal } from '@/components/shared/Reveal';
import { ArrowRight } from '@/components/ui/ArrowRight';
import { SERVICES } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Services — Infraloom Engineering',
  description: 'Ten capabilities, one team. From custom software and SaaS development to cloud architecture, DevOps and real-time streaming systems.',
};

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Services"
        title="Engineering services, end to end."
        body="Ten capabilities, one team. We slot in where you need senior depth — system design, build, ship, scale."
      >
        <Link href="/contact" className="btn btn-primary">Book a discovery call <ArrowRight /></Link>
        <Link href="/process" className="btn btn-secondary">See our process</Link>
      </PageHero>

      <section className="section-tight" style={{ position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={(i % 3) * 60}>
                <ServiceRow {...s} reverse={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BigCTA />
    </div>
  );
}
