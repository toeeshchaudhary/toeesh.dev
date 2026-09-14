import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Article from '@/components/shared/Article';
import Player from '@/components/recorder/Player';
import { getRecording, getRecordingSlugs } from '@/lib/recordings';
import { formatStamp } from '@/lib/timestamp';

export function generateStaticParams() {
  return getRecordingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const rec = getRecording(slug);
  if (!rec) return {};
  return {
    title: rec.title,
    description: rec.blurb,
    alternates: { canonical: `/recorder/${slug}` },
  };
}

export default async function RecordingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rec = getRecording(slug);
  if (!rec) notFound();

  return (
    <Article
      title={rec.title}
      dek={rec.blurb}
      tag={rec.duration > 0 ? `${formatStamp(rec.duration)} · ${rec.date}` : rec.date}
      accent="var(--chip-blue)"
      line="R"
      body=""
    >
      <Player recording={rec} />
      <p className="label" style={{ marginTop: '2.5rem' }}>
        <Link href="/recorder">← all recordings</Link>
      </p>
    </Article>
  );
}
