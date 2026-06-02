import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '@/lib/data/portfolio';
import { CaseStudyDetail } from '@/features/portfolio/components/CaseStudyDetail';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = CASE_STUDIES[params.slug];
  if (!study) return {};
  return {
    title: `${study.title} — Infraloom Engineering`,
    description: study.lead,
  };
}

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export default function CaseStudyPage({ params }: Props) {
  const study = CASE_STUDIES[params.slug];
  if (!study) notFound();
  return <CaseStudyDetail slug={params.slug} />;
}
