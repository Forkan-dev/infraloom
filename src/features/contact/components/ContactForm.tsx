'use client';

import { useState, FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

function FormField({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ultramarine)' }}>
        {label}
        {hint && <span style={{ fontSize: 12, color: 'var(--fg-3)', fontWeight: 400, marginLeft: 8 }}>{hint}</span>}
      </span>
      {children}
    </label>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState, v: string) => setForm(f => ({ ...f, [k]: v }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card" style={{ padding: 40 }}>
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'var(--chartreuse)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 28,
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l4 4L19 6" stroke="#07123F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 style={{ marginBottom: 14, fontSize: 24 }}>Inquiry received.</h3>
          <p style={{ color: 'var(--fg-2)', margin: 0, maxWidth: 380, marginInline: 'auto', lineHeight: 1.7, fontSize: 15 }}>
            A principal engineer will review your inquiry and reply within 4 hours. Check your inbox at{' '}
            <strong style={{ color: 'var(--fg-1)' }}>{form.email || 'your email'}</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="card contact-form" onSubmit={onSubmit}>
      <h2 className="contact-form-title">Contact Us</h2>

      <div className="contact-form-fields">
        <div className="contact-form-row">
          <FormField label="Your name">
            <input className="input" required autoComplete="name" placeholder="Jane Doe" value={form.name} onChange={e => update('name', e.target.value)} />
          </FormField>
          <FormField label="Work email">
            <input className="input" type="email" required autoComplete="email" placeholder="jane@company.com" value={form.email} onChange={e => update('email', e.target.value)} />
          </FormField>
        </div>
        <FormField label="Company" hint="optional">
          <input className="input" autoComplete="organization" placeholder="Acme Inc." value={form.company} onChange={e => update('company', e.target.value)} />
        </FormField>
        <FormField label="Tell us about your project">
          <textarea
            className="input"
            rows={6}
            placeholder="What are you trying to build? What's breaking? Any technical constraints we should know about?"
            value={form.message}
            onChange={e => update('message', e.target.value)}
            style={{ resize: 'vertical', minHeight: 150, fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6 }}
          />
        </FormField>
      </div>

      <button type="submit" className="btn btn-primary contact-form-submit">Send inquiry →</button>

      <style>{`
        .contact-form { padding: 40px; display: flex; flex-direction: column; gap: 28px; }
        .contact-form-title { font-size: clamp(28px, 3vw, 40px); color: var(--ultramarine); }
        .contact-form-fields { display: flex; flex-direction: column; gap: 20px; }
        .contact-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .contact-form-submit { align-self: flex-start; min-width: 160px; }
        [data-theme="dark"] .contact-form-title { color: var(--text); }
        @media (max-width: 640px) {
          .contact-form { padding: 24px; }
          .contact-form-row { grid-template-columns: 1fr; }
          .contact-form-submit { align-self: stretch; }
        }
      `}</style>
    </form>
  );
}
