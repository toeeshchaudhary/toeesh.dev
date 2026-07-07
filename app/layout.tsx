import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_URL } from '@/lib/site-url';
import MotionProvider from '@/components/motion/MotionProvider';
import PageTransition from '@/components/motion/PageTransition';

const OG = { url: '/opengraph-image', width: 1200, height: 630, alt: 'toeesh.dev — Toeesh Chaudhary' };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'toeesh.dev — Toeesh Chaudhary',
    template: '%s — toeesh.dev',
  },
  description:
    'Toeesh Chaudhary — 18, Delhi NCR. Designing practical hardware, firmware, and software systems while preparing for ECE in Japan.',
  applicationName: 'toeesh.dev',
  authors: [{ name: 'Toeesh Chaudhary' }],
  creator: 'Toeesh Chaudhary',
  keywords: [
    'toeesh',
    'Toeesh Chaudhary',
    'portfolio',
    'embedded systems',
    'Navigator',
    'ECE',
    'firmware',
    'hardware',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'toeesh.dev — Toeesh Chaudhary',
    description: 'Hardware · firmware · software systems.',
    url: SITE_URL,
    siteName: 'toeesh.dev',
    type: 'website',
    images: [OG],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'toeesh.dev — Toeesh Chaudhary',
    description: 'Building at the edge of circuitry and software.',
    images: [OG],
  },
};

export const viewport: Viewport = {
  themeColor: '#131311',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* preload the grotesk so the poster hero paints without a swap flash */}
        <link
          rel="preload"
          href="/fonts/RMNeueVF-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <MotionProvider>
          <PageTransition>{children}</PageTransition>
        </MotionProvider>
      </body>
    </html>
  );
}
