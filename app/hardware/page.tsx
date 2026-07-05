import type { Metadata } from 'next';
import StubPage from '@/components/shared/StubPage';

export const metadata: Metadata = {
  title: 'Hardware Build',
  alternates: { canonical: '/hardware' },
};

export default function HardwarePage() {
  return (
    <StubPage
      counter="01 · hardware build"
      title="Hardware Build"
      note="planning · first log entry est. aug 2026"
    />
  );
}
