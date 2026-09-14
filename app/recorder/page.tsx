import type { Metadata } from 'next';
import Article from '@/components/shared/Article';
import RecorderIndex from '@/components/recorder/RecorderIndex';
import { getArticle } from '@/lib/article';
import { getRecordings } from '@/lib/recordings';

const article = getArticle('recorder');

export const metadata: Metadata = {
  title: 'Recorder',
  description: article.description,
  alternates: { canonical: '/recorder' },
};

export default function RecorderPage() {
  return (
    <Article {...article}>
      <RecorderIndex recordings={getRecordings()} />
    </Article>
  );
}
