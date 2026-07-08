import type { CSSProperties } from 'react';
import * as motion from 'motion/react-client';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import ArticleBody from '@/components/shared/ArticleBody';
import { revealContainer, revealItem, ruleDraw } from '@/components/motion/variants';

interface ArticleProps {
  title: string;
  dek: string;
  tag: string;
  accent: string;
  line: string;
  body: string;
}

export default function Article({ title, dek, tag, accent, line, body }: ArticleProps) {
  return (
    <>
      <Nav />
      <main className="article">
        <motion.header
          className="container article-head"
          initial="hidden"
          animate="show"
          variants={revealContainer}
          style={{ '--article-accent': accent } as CSSProperties}
        >
          <motion.div className="article-eyebrow" variants={revealItem}>
            {line ? (
              <span className="article-bullet" style={{ background: accent }}>
                {line}
              </span>
            ) : null}
            {tag ? <span className="label article-tag">{tag}</span> : null}
          </motion.div>
          <motion.h1 className="article-title" variants={revealItem}>
            {title}
          </motion.h1>
          {dek ? (
            <motion.p className="article-dek" variants={revealItem}>
              {dek}
            </motion.p>
          ) : null}
          <motion.hr className="article-rule" variants={ruleDraw} />
        </motion.header>

        <section
          className="container article-body"
          style={{ '--article-accent': accent } as CSSProperties}
        >
          <ArticleBody markdown={body} />
        </section>
      </main>
      <Footer />
    </>
  );
}
