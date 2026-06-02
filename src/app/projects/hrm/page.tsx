import type { Metadata } from 'next';
import { HRMDetail } from '@/features/projects/components/HRMDetail';

export const metadata: Metadata = {
  title: 'HRM — Infraloom Engineering',
  description: 'Enterprise-grade Human Resource Management System — multi-tenant SaaS with dual dashboards, smart attendance (8 methods), mobile API, payroll automation, and granular RBAC.',
};

export default function HRMPage() {
  return <HRMDetail />;
}
