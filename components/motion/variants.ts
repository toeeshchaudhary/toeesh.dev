import type { Variants } from 'motion/react';

// Swiss-poster easing — a firm, confident settle.
export const posterEase = [0.2, 0.8, 0.2, 1] as const;

export const quickTransition = {
  duration: 0.45,
  ease: posterEase,
};

export const revealContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.68, ease: posterEase },
  },
};

export const clippedReveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  show: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.72, ease: posterEase },
  },
};

export const ruleDraw: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: posterEase },
  },
};

export const routeArrival: Variants = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: quickTransition },
};

export const boardWipe: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  show: {
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.5, ease: posterEase },
  },
};

export const cardLift = {
  y: -5,
  transition: quickTransition,
};

export const tapPress = {
  scale: 0.985,
  transition: { duration: 0.16, ease: posterEase },
};
