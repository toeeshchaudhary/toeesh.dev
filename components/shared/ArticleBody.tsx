'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ArticleBody({
  markdown,
  className = 'prose',
}: {
  markdown: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            const external = !!href && /^https?:\/\//.test(href);
            return (
              <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                {children}
                {external ? ' ↗' : ''}
              </a>
            );
          },
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}
