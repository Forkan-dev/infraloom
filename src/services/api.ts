import type { ContactInquiry } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.infraloom.dev';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export const contactApi = {
  submitInquiry: (data: ContactInquiry) =>
    request<{ id: string; message: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

export const portfolioApi = {
  list: () =>
    request<Array<{ slug: string; title: string; tag: string }>>('/portfolio'),

  getBySlug: (slug: string) =>
    request<Record<string, unknown>>(`/portfolio/${slug}`),
};

export const servicesApi = {
  list: () =>
    request<Array<{ id: string; title: string; body: string }>>('/services'),
};
