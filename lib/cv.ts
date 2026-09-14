// The CV as data. /cv renders it and print styles turn that same page into
// the PDF — one source, so the document and the site can never disagree.

export const CV_SUMMARY =
  'Toeesh Chaudhary — 17, class 12 student from Delhi NCR, building across hardware, software, and design. Hardware Lead at ARKANOX, an electrical & computer engineering startup, and Head of R&D at Hexoforge, an applied-research studio; previously AI developer intern at FinStocks, shipping features to a live fintech product. Now designing Navigator, a repairable handheld Linux computer, from the circuit board up. Pursuing electrical & computer engineering — target: Japan, 2027.';

export type Role = {
  org: string;
  title: string;
  period: string;
  detail: string;
};

export const ROLES: Role[] = [
  {
    org: 'ARKANOX',
    title: 'Hardware Lead — electrical & computer engineering startup',
    period: '2026 — present',
    detail:
      'Lead the hardware side of an early-stage ECE startup, from board-level design decisions through to what actually gets built and tested.',
  },
  {
    org: 'Hexoforge',
    title: 'Head of R&D — applied-research studio',
    period: '2026 — present',
    detail:
      'Lead research & development across the studio’s projects, bridging hardware and software work end to end.',
  },
  {
    org: 'FinStocks',
    title: 'AI Developer, intern — finance-tech',
    period: '2025',
    detail:
      'Built and shipped AI features into a live product used by real customers — first taste of production engineering: messy inputs, real deadlines, maintainable code.',
  },
];

export type SkillGroup = { group: string; items: string };

export const SKILLS: SkillGroup[] = [
  {
    group: 'Hardware',
    items: 'Circuit & PCB design · ESP32 · microcontrollers · firmware · power & battery',
  },
  { group: 'Frontend', items: 'TypeScript · React / Next.js · Three.js · GSAP · Tailwind' },
  { group: 'Backend', items: 'Node / Bun · Python · Go · PostgreSQL · Prisma · Socket.IO · SQLite' },
  { group: 'Systems', items: 'Rust · Linux (Arch, i3) · shell tooling · local LLM deployment' },
];

export const EDUCATION = {
  title: 'Class 12',
  where: 'Delhi NCR, India',
  year: '2027',
  detail:
    'University applications open November 2026; targeting electrical & computer engineering, ideally in Japan.',
};

/** Names from lib/builds, in the order the CV should show them. */
export const CV_PROJECT_ORDER = [
  'AEGIS',
  'MTTA',
  'COLLISION CTF',
  'synergyclash',
  'HASH 12',
  'socius',
  'writee',
  'turn-mom',
  'XRPbot',
  'chamak',
];
