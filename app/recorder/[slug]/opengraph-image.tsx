import { getRecording, getRecordingSlugs } from '@/lib/recordings';
import { formatStamp } from '@/lib/timestamp';
import { posterOg, OG_SIZE, OG_TYPE } from '@/lib/og';

export const alt = 'a recording — toeesh.dev';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export function generateStaticParams() {
  return getRecordingSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rec = getRecording(slug);
  return posterOg({
    title: rec?.title ?? 'a recording',
    tag: rec ? `voice memo · ${formatStamp(rec.duration)}` : 'voice memo',
    dek: rec?.blurb,
    accent: 'var(--chip-blue)',
  });
}
