import type { Metadata } from 'next';
import Article from '@/components/shared/Article';
import { getArticle } from '@/lib/article';

const article = getArticle('now');

export const metadata: Metadata = {
  title: 'Now',
  description: article.description,
  alternates: { canonical: '/now' },
};

export default function NowPage() {
  return <Article {...article} />;
}
