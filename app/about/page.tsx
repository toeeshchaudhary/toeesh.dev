import type { Metadata } from 'next';
import StubPage from '@/components/shared/StubPage';

export const metadata: Metadata = {
  title: 'About',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <StubPage
      counter="05 · about"
      title="About"
      note="who · why japan · why ece"
    />
  );
}
