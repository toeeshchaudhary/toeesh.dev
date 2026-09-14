'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { revealContainer, revealItem } from '@/components/motion/variants';

const LINKS = [
  { href: '/hardware', label: 'hardware' },
  { href: '/projects', label: 'projects' },
  { href: '/recorder', label: 'recorder' },
  { href: '/now', label: 'now' },
  { href: '/about', label: 'about' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="nav-shell"
      initial="hidden"
      animate="show"
      variants={revealItem}
    >
      <motion.div
        className="container"
        variants={revealContainer}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 850,
            fontSize: '1.05rem',
            letterSpacing: '-0.02em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span className="chip" style={{ background: 'var(--red)', width: 10, height: 10 }} />
          toeesh.dev
        </Link>
        <motion.div
          variants={revealContainer}
          style={{ display: 'flex', gap: 'clamp(0.9rem, 2.5vw, 1.75rem)', flexWrap: 'wrap' }}
        >
          {LINKS.map((l) => (
            <motion.span key={l.href} variants={revealItem} whileHover={{ y: -2 }}>
              <Link
                href={l.href}
                className="label"
                data-active={pathname === l.href}
                style={{ color: 'var(--bone)' }}
              >
                {l.label}
              </Link>
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
