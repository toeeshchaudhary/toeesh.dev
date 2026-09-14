import type { Metadata } from 'next';
import Article from '@/components/shared/Article';
import Schematic from '@/components/hardware/Schematic';
import DesignLog from '@/components/hardware/DesignLog';
import { getArticle } from '@/lib/article';

const article = getArticle('hardware');

export const metadata: Metadata = {
  title: 'Hardware',
  description: article.description,
  alternates: { canonical: '/hardware' },
};

export default function HardwarePage() {
  return (
    <Article {...article}>
      <Schematic />
      <DesignLog />
    </Article>
  );
}
