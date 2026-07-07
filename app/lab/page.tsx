import type { Metadata } from 'next';
import Article from '@/components/shared/Article';
import { getArticle } from '@/lib/article';

const article = getArticle('lab');

export const metadata: Metadata = {
  title: 'Lab',
  description: article.description,
  alternates: { canonical: '/lab' },
};

export default function LabPage() {
  return <Article {...article} />;
}
