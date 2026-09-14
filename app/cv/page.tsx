import type { Metadata } from 'next';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { BUILDS, buildColor } from '@/lib/builds';
import { CV_SUMMARY, CV_PROJECT_ORDER, ROLES, SKILLS, EDUCATION } from '@/lib/cv';

export const metadata: Metadata = {
  title: 'CV',
  description:
    'Toeesh Chaudhary — CV. Hardware Lead at ARKANOX, Head of R&D at Hexoforge, former AI developer intern at FinStocks. Designing Navigator, a repairable handheld Linux computer.',
  alternates: { canonical: '/cv' },
};

const PROJECTS = CV_PROJECT_ORDER.map((name) => BUILDS.find((b) => b.name === name)).filter(
  (b): b is NonNullable<typeof b> => Boolean(b),
);

export default function CvPage() {
  return (
    <>
      <Nav />
      <main className="container cv">
        <header className="cv__head">
          <div>
            <h1 className="cv__name">
              toeesh<span className="cv__dot">.</span>chaudhary
            </h1>
            <p className="label cv__role">builder · hardware × code × design</p>
          </div>
          <address className="cv__contact label">
            Delhi NCR, India
            <br />
            <a href="mailto:toeesh239@gmail.com">toeesh239@gmail.com</a>
            <br />
            <a href="https://toeesh.dev">toeesh.dev</a>
            <br />
            <a href="https://github.com/toeeshchaudhary">github.com/toeeshchaudhary</a>
          </address>
        </header>

        <p className="cv__summary">{CV_SUMMARY}</p>

        <section className="cv__section">
          <h2 className="label cv__heading">experience</h2>
          {ROLES.map((r) => (
            <article key={r.org} className="cv__entry">
              <div className="cv__entry-head">
                <h3>
                  {r.org} <span className="cv__entry-title">· {r.title}</span>
                </h3>
                <span className="label cv__period">{r.period}</span>
              </div>
              <p>{r.detail}</p>
            </article>
          ))}
        </section>

        <section className="cv__section">
          <h2 className="label cv__heading">projects</h2>
          <div className="cv__projects">
            {PROJECTS.map((b) => (
              <article key={b.name} className="cv__project">
                <h3>
                  <span className="cv__mark" style={{ background: buildColor(b) }} aria-hidden />
                  {b.name} <span className="cv__entry-title">· {b.tags[0]}</span>
                </h3>
                <p>{b.blurb}</p>
                <span className="label cv__tech">{b.tech}</span>
              </article>
            ))}
          </div>
        </section>

        <div className="cv__split">
          <section className="cv__section">
            <h2 className="label cv__heading">skills</h2>
            <dl className="cv__skills">
              {SKILLS.map((s) => (
                <div key={s.group}>
                  <dt>{s.group}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="cv__section">
            <h2 className="label cv__heading">education</h2>
            <article className="cv__entry">
              <div className="cv__entry-head">
                <h3>
                  {EDUCATION.title} <span className="cv__entry-title">· {EDUCATION.where}</span>
                </h3>
                <span className="label cv__period">{EDUCATION.year}</span>
              </div>
              <p>{EDUCATION.detail}</p>
            </article>
          </section>
        </div>

        <p className="label cv__print-hint">
          print this page (⌘P / Ctrl-P) for the PDF — it is laid out for A4.
        </p>
      </main>
      <Footer />
    </>
  );
}
