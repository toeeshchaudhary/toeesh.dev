import type { Metadata } from 'next';
import StubPage from '@/components/shared/StubPage';

export const metadata: Metadata = {
  title: 'Lab',
  alternates: { canonical: '/lab' },
};

export default function LabPage() {
  return (
    <StubPage
      counter="04 · lab"
      title="the lab"
      note="ongoing · llms on 4gb vram · riced linux · ffmpeg"
    />
  );
}
