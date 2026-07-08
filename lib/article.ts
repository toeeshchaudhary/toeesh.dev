import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/pages');

export interface Article {
  slug: string;
  title: string;
  dek: string;
  tag: string;
  accent: string;
  line: string;
  description: string;
  body: string;
}

export function getArticle(slug: string): Article {
  const file = fs.readFileSync(path.join(contentDirectory, `${slug}.md`), 'utf8');
  const { data, content } = matter(file);
  return {
    slug,
    title: data.title ?? '',
    dek: data.dek ?? '',
    tag: data.tag ?? '',
    accent: data.accent ?? 'var(--red)',
    line: data.line ?? '',
    description: data.description ?? '',
    body: content.trim(),
  };
}
