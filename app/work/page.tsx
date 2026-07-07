import type { Metadata } from 'next';
import Article from '@/components/shared/Article';
import { getArticle } from '@/lib/article';

const article = getArticle('work');

export const metadata: Metadata = {
  title: 'FinStocks',
  description: article.description,
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return <Article {...article} />;
}
