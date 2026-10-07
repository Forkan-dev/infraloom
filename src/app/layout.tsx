import type { Metadata } from 'next';
import { Geist, Geist_Mono, Urbanist } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const urbanist = Urbanist({ variable: '--font-urbanist', subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

// Applies the stored theme before first paint so the page never flashes the wrong edition.
const THEME_SCRIPT = `try{var t=localStorage.getItem('infraloom-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

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
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
