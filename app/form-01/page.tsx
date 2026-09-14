import type { Metadata } from 'next';
import Article from '@/components/shared/Article';
import { getArticle } from '@/lib/article';

const article = getArticle('form-01');

export const metadata: Metadata = {
  title: 'FORM/01',
  description: article.description,
  alternates: { canonical: '/form-01' },
};

export default function FormOnePage() {
  return <Article {...article} />;
}
