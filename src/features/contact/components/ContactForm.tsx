'use client';

import { useState } from 'react';
import { ChipPicker } from './ChipPicker';

const PROJECT_TYPES = ['Enterprise platform', 'SaaS MVP', 'Cloud / DevOps', 'AI integration', 'Real-time / streaming', 'Architecture review'] as const;
const BUDGETS = ['< $50k', '$50k–$100k', '$100k–$250k', '$250k–$500k', '$500k+'] as const;
const TIMELINES = ['< 1 month', '1–3 months', '3–6 months', '6+ months', 'Long-term retainer'] as const;
const ROLES = ['CTO', 'Founder', 'VP Engineering', 'Head of Product', 'Other'] as const;

interface FormState {
  name: string;
  email: string;
  company: string;
  role: string;
  project: string;
  budget: string;
  timeline: string;
  message: string;
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span className="mono" style={{ fontSize: 10.5, color: 'var(--fg-3)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{label}</span>
      {children}
    </label>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', company: '', role: 'CTO',
    project: 'Enterprise platform', budget: '$100k–$250k',
    timeline: '1–3 months', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);

  const update = (k: keyof FormState, v: string) => setForm(f => ({ ...f, [k]: v }));

  if (submitted) {
    return (
      <div className="card has-glow" style={{ padding: 36 }}>
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(59,130,246,0.2))',
            border: '1px solid rgba(34,197,94,0.4)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 24, boxShadow: '0 0 30px rgba(34,197,94,0.3)',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l4 4L19 6" stroke="#86efac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 style={{ marginBottom: 12 }}>Inquiry received.</h3>
          <p style={{ color: 'var(--fg-2)', margin: 0, maxWidth: 380, marginInline: 'auto', lineHeight: 1.6 }}>
            A principal engineer will review your inquiry and reply within 4 hours. Check your inbox at{' '}
            <strong style={{ color: 'var(--fg-1)' }}>{form.email || 'your email'}</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card has-glow" style={{ padding: 36, position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 26 }}>
        <h3 style={{ margin: 0 }}>Project inquiry</h3>
        <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.14em' }}>STEP {step + 1} / 3</span>
      </div>

      <div style={{ height: 2, background: 'var(--border)', borderRadius: 2, marginBottom: 32, overflow: 'hidden' }}>
        <div style={{
          width: `${((step + 1) / 3) * 100}%`, height: '100%',
          background: 'linear-gradient(90deg, var(--blue), var(--violet))',
          transition: 'width 0.4s var(--ease)',
        }} />
      </div>

      {step === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <FormField label="Your name">
            <input className="input" placeholder="Jane Doe" value={form.name} onChange={e => update('name', e.target.value)} />
          </FormField>
          <FormField label="Work email">
            <input className="input" type="email" placeholder="jane@company.com" value={form.email} onChange={e => update('email', e.target.value)} />
          </FormField>
          <FormField label="Company">
            <input className="input" placeholder="Acme Inc." value={form.company} onChange={e => update('company', e.target.value)} />
          </FormField>
          <FormField label="Your role">
            <ChipPicker options={ROLES} value={form.role} onChange={v => update('role', v)} />
          </FormField>
        </div>
      )}

      {step === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <FormField label="Project type">
            <ChipPicker options={PROJECT_TYPES} value={form.project} onChange={v => update('project', v)} />
          </FormField>
          <FormField label="Budget range">
            <ChipPicker options={BUDGETS} value={form.budget} onChange={v => update('budget', v)} />
          </FormField>
          <FormField label="Timeline">
            <ChipPicker options={TIMELINES} value={form.timeline} onChange={v => update('timeline', v)} />
          </FormField>
        </div>
      )}

      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <FormField label="Tell us about your project">
            <textarea
              className="input"
              rows={8}
              placeholder="What are you trying to build? Any technical constraints we should know about?"
              value={form.message}
              onChange={e => update('message', e.target.value)}
              style={{ resize: 'vertical', minHeight: 160, fontFamily: 'var(--font-sans)' }}
            />
          </FormField>
          <div style={{
            padding: 16, background: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.2)', borderRadius: 10,
            display: 'flex', gap: 12, alignItems: 'flex-start',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)', flexShrink: 0, marginTop: 5, boxShadow: '0 0 10px var(--success)' }} />
            <p style={{ margin: 0, fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5 }}>
              Reviewed by a principal engineer, not a salesperson. Average response time:{' '}
              <strong style={{ color: '#86efac' }}>4 hours</strong> on weekdays.
            </p>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32, gap: 12 }}>
        {step > 0
          ? <button className="btn btn-secondary" onClick={() => setStep(step - 1)}>Back</button>
          : <span />
        }
        {step < 2
          ? <button className="btn btn-primary" onClick={() => setStep(step + 1)}>Continue</button>
          : <button className="btn btn-primary" onClick={() => setSubmitted(true)}>Send inquiry</button>
        }
      </div>
    </div>
  );
}
