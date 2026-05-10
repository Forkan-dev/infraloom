import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyDetail } from '@/features/portfolio/components/CaseStudyDetail';
import { CASE_STUDIES } from '@/lib/data/portfolio';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];
  if (!study) return {};
  return {
    title: `${study.title} — Infraloom Engineering`,
    description: study.lead,
  };
}

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map(slug => ({ slug }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  if (!CASE_STUDIES[slug]) notFound();
  return <CaseStudyDetail slug={slug} />;
}
