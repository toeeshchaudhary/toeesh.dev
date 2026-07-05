import type { Metadata } from 'next';
import StubPage from '@/components/shared/StubPage';

export const metadata: Metadata = {
  title: 'Client Work',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <StubPage
      counter="03 · client work"
      title="Client Work"
      note="deployed · fintech · write-up coming"
    />
  );
}
