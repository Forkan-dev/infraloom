import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { SDLCInteractive } from '@/features/process/components/SDLCInteractive';
import { ProcessTimeline } from '@/features/process/components/ProcessTimeline';
import { WorkflowVisuals } from '@/features/process/components/WorkflowVisuals';
import { ArrowRight } from '@/components/ui/ArrowRight';

export const metadata: Metadata = {
  title: 'Process — Infraloom Engineering',
  description: 'Eight stages. Documented decisions. Predictable cadence. The same process we run on a six-week MVP and a three-year platform engagement.',
};

export default function ProcessPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Software development process"
        title="A delivery cadence built for grown-up engineering."
        body="Eight stages. Documented decisions. Predictable cadence. The same process we run on a six-week MVP and a three-year platform engagement."
      >
        <Link href="/contact" className="btn btn-primary">Plan an engagement <ArrowRight /></Link>
      </PageHero>

      <SDLCInteractive />
      <ProcessTimeline />
      <WorkflowVisuals />
    </div>
  );
}
