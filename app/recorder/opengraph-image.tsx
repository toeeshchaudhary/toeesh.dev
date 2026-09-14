import { getArticle } from '@/lib/article';
import { posterOg, OG_SIZE, OG_TYPE } from '@/lib/og';

const article = getArticle('recorder');

export const alt = `${article.title} — toeesh.dev`;
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return posterOg({
    title: article.title,
    tag: article.tag,
    dek: article.dek,
    accent: article.accent,
  });
}
