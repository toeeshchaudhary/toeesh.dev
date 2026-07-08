'use client';

import { MotionConfig } from 'motion/react';
import { posterEase } from './variants';

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.45, ease: posterEase }}>
      {children}
    </MotionConfig>
  );
}
