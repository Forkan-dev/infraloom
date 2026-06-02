import { Hero } from '@/features/home/components/Hero';
import { TrustedTechnologies } from '@/features/home/components/TrustedTechnologies';
import { WhyChooseUs } from '@/features/home/components/WhyChooseUs';
import { CaseStudiesPreview } from '@/features/home/components/CaseStudiesPreview';
import { TestimonialsRow } from '@/features/home/components/TestimonialsRow';

export default function HomePage() {
  return (
    <div className="page-enter">
      <Hero />
      <TrustedTechnologies />
      <WhyChooseUs />
      <CaseStudiesPreview />
      <TestimonialsRow />
    </div>
  );
}
