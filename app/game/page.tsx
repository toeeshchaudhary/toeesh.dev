import type { Metadata } from 'next';
import StubPage from '@/components/shared/StubPage';

export const metadata: Metadata = {
  title: 'The Game',
  alternates: { canonical: '/game' },
};

export default function GamePage() {
  return (
    <StubPage
      counter="02 · the game"
      title="the game"
      note="in progress · chapter 1 playable target jan 2027"
    />
  );
}
