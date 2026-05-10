import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ContactForm } from '@/features/contact/components/ContactForm';
import { ContactSidebar } from '@/features/contact/components/ContactSidebar';
import { OfficeGrid } from '@/features/contact/components/OfficeGrid';
import { FAQAccordion } from '@/features/contact/components/FAQAccordion';
import { Reveal } from '@/components/shared/Reveal';

export const metadata: Metadata = {
  title: 'Contact — Infraloom Engineering',
  description: 'Tell us about the system you\'re trying to build. We respond to every qualified inquiry within one business day.',
};

export default function ContactPage() {
  return (
    <div className="page-enter">
      <PageHero
        eyebrow="Contact"
        title="Tell us about the system you're trying to build."
        body="We respond to every qualified inquiry within one business day. Discovery calls are 30 minutes, free, and scoped to your problem — no sales script."
      />

      <section className="section-tight">
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, alignItems: 'start' }}>
            <Reveal>
              <ContactForm />
            </Reveal>
            <ContactSidebar />
          </div>
        </div>
        <style>{`@media (max-width: 980px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <OfficeGrid />
      <FAQAccordion />
    </div>
  );
}
