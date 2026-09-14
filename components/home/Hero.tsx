// Type-specimen hero: the name set like a foundry sheet — baseline grid,
// crop ticks, mono annotations. RM Neue at 900, lowercase (the system
// speaks quietly). Same voice as the MTTA brand book.
import Link from 'next/link';
import * as motion from 'motion/react-client';
import { revealContainer, revealItem, ruleDraw } from '@/components/motion/variants';

export default function Hero() {
  return (
    <motion.header
      className="container poster-shell hero-poster"
      initial="hidden"
      animate="show"
      variants={revealContainer}
    >
      {/* corner metadata row */}
      <motion.div className="hero-manifest" variants={revealContainer}>
        <motion.span className="label" variants={revealItem}>
          professional portfolio · est. 2026
        </motion.span>
        <motion.span className="label hero-manifest__center" variants={revealItem}>
          <span className="code-badge" style={{ background: 'var(--red)', width: 8, height: 8 }} />
          <span className="code-badge" style={{ background: 'var(--chip-blue)', width: 8, height: 8 }} />
          <span className="code-badge" style={{ background: 'var(--chip-green)', width: 8, height: 8 }} />
          <span className="code-badge" style={{ background: 'var(--chip-yellow)', width: 8, height: 8 }} />
        </motion.span>
        <motion.span className="label hero-manifest__right" variants={revealItem}>
          delhi ncr → japan 2027
        </motion.span>
      </motion.div>

      {/* the specimen sheet */}
      <motion.div className="hero-specimen" variants={revealContainer}>
        <motion.span
          className="label"
          variants={revealItem}
          style={{ position: 'absolute', top: '-1.6rem', left: 0, color: 'var(--bone-3)' }}
        >
          student builder · engineering portfolio
        </motion.span>
        <motion.span
          className="label specimen-note--aux"
          variants={revealItem}
          style={{ position: 'absolute', top: '-1.6rem', right: 0, color: 'var(--bone-3)' }}
        >
          delhi ncr · india
        </motion.span>

        <motion.span className="specimen-line" variants={ruleDraw} style={{ top: 0, transformOrigin: 'left' }} />
        <motion.span className="specimen-line" variants={ruleDraw} style={{ top: '50%', transformOrigin: 'left' }} />
        <motion.span className="specimen-line" variants={ruleDraw} style={{ bottom: 0, transformOrigin: 'left' }} />

        <motion.h1 className="poster" variants={revealItem} style={{ position: 'relative', zIndex: 1, padding: '0.06em 0' }}>
          toeesh
          <br />
          chaudhary
        </motion.h1>

        <motion.span
          className="label specimen-note--aux"
          variants={revealItem}
          style={{ position: 'absolute', bottom: '-1.7rem', right: 0, color: 'var(--bone-3)' }}
        >
          hardware · software · systems
        </motion.span>
      </motion.div>

      <motion.div className="hero-deck" variants={revealContainer}>
        <motion.div className="hero-deck__intro" variants={revealItem}>
          <h2 style={{ fontSize: 'var(--t-h2)', fontWeight: 850, letterSpacing: '-0.035em' }}>
            I design practical hardware, firmware, and software systems while preparing for electrical and computer engineering<span style={{ color: 'var(--red)' }}>.</span>
          </h2>
          <p className="hero-summary">
            I am Toeesh Chaudhary, a 17-year-old class 12 student from Delhi NCR. This portfolio
            collects my strongest work: my hardware — a handheld computer called Navigator that I&apos;m
            building from scratch; Hardware Lead at ARKANOX, an electrical &amp; computer engineering
            startup, and Head of R&amp;D at Hexoforge; a shelf of projects from agri-tech IoT to
            terminal tools; and toeesh.network, my life drawn as a subway map.
          </p>
          <motion.div className="hero-actions" variants={revealContainer}>
            <motion.div variants={revealItem}>
              <Link href="/hardware" className="button-link">
                view hardware
              </Link>
            </motion.div>
            <motion.div variants={revealItem}>
              <a href="mailto:toeesh239@gmail.com" className="button-link button-link--ghost">
                contact me
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
