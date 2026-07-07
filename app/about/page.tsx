import type { Metadata } from 'next';
import Article from '@/components/shared/Article';
import { getArticle } from '@/lib/article';

const article = getArticle('about');

export const metadata: Metadata = {
  title: 'About',
  description: article.description,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <Article {...article} />;
}
