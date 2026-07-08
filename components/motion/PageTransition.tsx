'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { posterEase } from './variants';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className="page-transition"
        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
        exit={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
        transition={{ duration: 0.44, ease: posterEase }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
