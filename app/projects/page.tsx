import type { Metadata } from 'next';
import Article from '@/components/shared/Article';
import ProjectsIndex from '@/components/projects/ProjectsIndex';
import { getArticle } from '@/lib/article';

const article = getArticle('projects');

export const metadata: Metadata = {
  title: 'Projects',
  description: article.description,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <Article {...article}>
      <ProjectsIndex />
    </Article>
  );
}
