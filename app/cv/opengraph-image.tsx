import { posterOg, OG_SIZE, OG_TYPE } from '@/lib/og';

export const alt = 'CV — Toeesh Chaudhary';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return posterOg({
    title: 'cv',
    tag: 'hardware × code × design',
    dek: 'Hardware Lead at ARKANOX · Head of R&D at Hexoforge · designing Navigator, a repairable handheld Linux computer.',
    accent: 'var(--red)',
  });
}
