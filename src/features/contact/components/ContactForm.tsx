'use client';

import { useState } from 'react';
import { ChipPicker } from './ChipPicker';

const PROJECT_TYPES = ['Enterprise platform', 'SaaS MVP', 'Cloud / DevOps', 'AI integration', 'Real-time / streaming', 'Architecture review'] as const;
const BUDGETS = ['< $50k', '$50k–$100k', '$100k–$250k', '$250k–$500k', '$500k+'] as const;
const TIMELINES = ['< 1 month', '1–3 months', '3–6 months', '6+ months', 'Long-term retainer'] as const;
const ROLES = ['CTO', 'Founder', 'VP Engineering', 'Head of Product', 'Other'] as const;

const STEP_LABELS = ['Your details', 'Project scope', 'Description'];

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

function FormField({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--fg-1)' }}>
        {label}
        {hint && <span style={{ fontSize: 12, color: 'var(--fg-3)', fontWeight: 400, marginLeft: 8 }}>{hint}</span>}
      </span>
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
      <div className="card has-glow" style={{ padding: 40 }}>
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(59,130,246,0.15))',
            border: '1px solid rgba(34,197,94,0.4)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 28, boxShadow: '0 0 40px rgba(34,197,94,0.2)',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l4 4L19 6" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
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
    <div className="card has-glow" style={{ padding: 36, position: 'relative' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 600 }}>Project inquiry</h3>
          <p style={{ margin: '6px 0 0', fontSize: 14, color: 'var(--fg-3)' }}>{STEP_LABELS[step]}</p>
        </div>
        <span style={{
          flexShrink: 0,
          display: 'inline-flex', alignItems: 'center',
          background: 'var(--bg-3)', border: '1px solid var(--border)',
          borderRadius: 999, padding: '5px 14px',
          fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--fg-3)', letterSpacing: '0.08em',
        }}>
          {step + 1} / 3
        </span>
      </div>

      {/* Progress */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 32 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            flex: 1, height: 4, borderRadius: 4,
            background: i <= step
              ? 'linear-gradient(90deg, var(--blue), var(--violet))'
              : 'var(--border)',
            transition: 'background 0.35s var(--ease)',
          }} />
        ))}
      </div>

      {/* Step 0 */}
      {step === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <FormField label="Your name">
              <input className="input" placeholder="Jane Doe" value={form.name} onChange={e => update('name', e.target.value)} />
            </FormField>
            <FormField label="Work email">
              <input className="input" type="email" placeholder="jane@company.com" value={form.email} onChange={e => update('email', e.target.value)} />
            </FormField>
          </div>
          <FormField label="Company">
            <input className="input" placeholder="Acme Inc." value={form.company} onChange={e => update('company', e.target.value)} />
          </FormField>
          <FormField label="Your role">
            <ChipPicker options={ROLES} value={form.role} onChange={v => update('role', v)} />
          </FormField>
        </div>
      )}

      {/* Step 1 */}
      {step === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <FormField label="Project type" hint="pick one">
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

      {/* Step 2 */}
      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <FormField label="Tell us about your project">
            <textarea
              className="input"
              rows={7}
              placeholder="What are you trying to build? What's breaking? Any technical constraints we should know about?"
              value={form.message}
              onChange={e => update('message', e.target.value)}
              style={{ resize: 'vertical', minHeight: 150, fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6 }}
            />
          </FormField>
          <div style={{
            padding: '14px 18px',
            background: 'rgba(34,197,94,0.07)',
            border: '1px solid rgba(34,197,94,0.18)',
            borderRadius: 10,
            display: 'flex', gap: 12, alignItems: 'center',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)', flexShrink: 0, boxShadow: '0 0 8px var(--success)' }} />
            <p style={{ margin: 0, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5 }}>
              Reviewed by a principal engineer — not a salesperson.{' '}
              <span className="cf-time" style={{ fontWeight: 600 }}>Avg. response: 4 hours</span> on weekdays.
            </p>
          </div>
          <style>{`
            .cf-time { color: #16a34a; }
            [data-theme="light"] .cf-time { color: #15803d; }
          `}</style>
        </div>
      )}

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, gap: 12 }}>
        {step > 0
          ? <button className="btn btn-secondary" onClick={() => setStep(step - 1)} style={{ minWidth: 88 }}>← Back</button>
          : <span />
        }
        {step < 2
          ? <button className="btn btn-primary" onClick={() => setStep(step + 1)} style={{ minWidth: 120 }}>Continue →</button>
          : <button className="btn btn-primary" onClick={() => setSubmitted(true)} style={{ minWidth: 140 }}>Send inquiry →</button>
        }
      </div>
    </div>
  );
}
