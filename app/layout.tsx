import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_URL } from '@/lib/site-url';

const OG = { url: '/opengraph-image', width: 1200, height: 630, alt: 'toeesh.dev — Toeesh Chaudhary' };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'toeesh.dev — Toeesh Chaudhary',
    template: '%s — toeesh.dev',
  },
  description:
    'Toeesh Chaudhary — 18, Delhi NCR. Building at the edge of circuitry and software: embedded hardware, a game venture, production fintech work. ECE applicant, Japan 2027.',
  applicationName: 'toeesh.dev',
  authors: [{ name: 'Toeesh Chaudhary' }],
  creator: 'Toeesh Chaudhary',
  keywords: [
    'toeesh',
    'Toeesh Chaudhary',
    'portfolio',
    'embedded systems',
    'ECE',
    'game development',
    'hardware',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'toeesh.dev — Toeesh Chaudhary',
    description: 'Building at the edge of circuitry and software.',
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
  themeColor: '#f4f1e8',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* preload the display + body faces so the hero paints without a swap flash */}
        <link
          rel="preload"
          href="/fonts/fraunces-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/dmsans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
