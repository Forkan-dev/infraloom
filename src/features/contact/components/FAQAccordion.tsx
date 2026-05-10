'use client';

import { useState } from 'react';
import { Reveal } from '@/components/shared/Reveal';

const FAQS = [
  { q: 'How fast can you start?', a: 'Discovery usually completes inside a week. From there, our typical lead time for a fully-formed pod is 10–14 days. Architecture-only engagements can start within 48 hours.' },
  { q: 'Do you take fixed-price or T&M?', a: 'Both. We default to time-and-materials with a per-sprint cap, because production scope shifts. Fixed-price works for tightly-scoped MVPs and architecture reviews.' },
  { q: 'What does a typical engagement look like?', a: 'A senior pod of 3–6 engineers, embedded in your Slack and repos, with a principal engineer running architecture and a tech-lead running delivery. Weekly demos, written RFCs, public dashboards.' },
  { q: 'Do you sign BAAs / DPAs / SOC 2 clauses?', a: 'Yes. We carry a SOC 2 Type II report, sign HIPAA BAAs, and have GDPR/DPA templates on file. Your security team can talk to ours directly.' },
  { q: 'What happens after launch?', a: 'Two options. We hand off to your team with runbooks and a 30-day support window, or we stay on a retainer for SRE-grade operations. Most clients pick the second for the first six months.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: 'var(--bg-2)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', padding: '20px 24px',
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: 'var(--fg-1)', fontSize: 15, fontFamily: 'var(--font-sans)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontWeight: 500 }}>{q}</span>
        <span style={{
          width: 22, height: 22, borderRadius: '50%', border: '1px solid var(--border)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, transition: 'transform 0.3s var(--ease)',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.4s var(--ease)' }}>
        <div style={{ padding: '0 24px 22px', color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6, maxWidth: '70ch' }}>{a}</div>
      </div>
    </div>
  );
}

export function FAQAccordion() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'start' }}>
          <Reveal>
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="gradient-text" style={{ marginTop: 16 }}>Things prospective clients ask.</h2>
            </div>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
              {FAQS.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .faq-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
