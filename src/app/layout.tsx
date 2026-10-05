import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Infraloom Engineering | Software systems businesses run on',
  description: 'A small senior team behind backends, real-time products and AI tools that work on day one and still make sense in year three.',
  icons: {
    icon: '/logo/icon.jpeg',
    apple: '/logo/icon.jpeg',
  },
  openGraph: {
    title: 'Infraloom Engineering',
    description: 'Senior engineers who build distributed systems, real-time streaming, and AI-native products.',
    siteName: 'Infraloom Engineering',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
