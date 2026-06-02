import type { Metadata } from 'next';
import { NewsportalDetail } from '@/features/projects/components/NewsportalDetail';

export const metadata: Metadata = {
  title: 'Online Newspaper  Infraloom Engineering',
  description: 'Full-stack news publishing platform with Laravel featuring reporter-to-admin editorial workflow, 50+ REST API endpoints for mobile app, multilingual support, ad management, premium subscriptions, and real-time reader engagement.',
};

export default function NewsportalPage() {
  return <NewsportalDetail />;
}
