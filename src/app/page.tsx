import { Hero } from '@/features/home/components/Hero';
import { TrustedTechnologies } from '@/features/home/components/TrustedTechnologies';
import { ServicesPreview } from '@/features/home/components/ServicesPreview';
import { WhyChooseUs } from '@/features/home/components/WhyChooseUs';
import { ArchitectureShowcase } from '@/features/home/components/ArchitectureShowcase';
import { CaseStudiesPreview } from '@/features/home/components/CaseStudiesPreview';
import { TestimonialsRow } from '@/features/home/components/TestimonialsRow';
import { BigCTA } from '@/components/shared/BigCTA';

export default function HomePage() {
  return (
    <div className="page-enter">
      <Hero />
      <TrustedTechnologies />
      <ServicesPreview />
      <WhyChooseUs />
      <ArchitectureShowcase />
      <CaseStudiesPreview />
      <TestimonialsRow />
      <BigCTA />
    </div>
  );
}
