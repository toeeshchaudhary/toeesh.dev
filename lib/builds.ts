// Single source of truth for every shipped build. The home shelf
// (components/home/BuildsIndex) and the /projects index both read this.
export type Build = {
  name: string;
  blurb: string;
  tech: string;
  href: string;
  color: string;
  bullet: string;
  tags: string[];
  /** How much of a thing it is. Drives the layout: featured cards vs index rows. */
  scale: 'flagship' | 'major' | 'tool' | 'experiment';
  status: string;
};

export const BUILDS: Build[] = [
  {
    name: 'AEGIS',
    blurb:
      'A low-cost agri-tech field network for small farmers — ESP32 sensor nodes, a live dashboard, a rule engine, and AI-written crop advice.',
    tech: 'ESP32 · Next.js',
    href: 'https://github.com/toeeshchaudhary/AEGIS',
    color: 'var(--chip-green)',
    bullet: 'AE',
    tags: ['hardware', 'ai', 'web'],
    scale: 'flagship',
    status: 'hardware meets software, start to finish',
  },
  {
    name: 'synergyclash',
    blurb:
      'A real-time multiplayer corporate-strategy sim: a live market, mergers, hostile takeovers, crisis events, and a spectator mode.',
    tech: 'Next.js · Prisma · Socket.IO',
    href: 'https://github.com/toeeshchaudhary/synergyclash',
    color: 'var(--chip-blue)',
    bullet: 'SC',
    tags: ['web'],
    scale: 'major',
    status: 'real-time multiplayer, shipped',
  },
  {
    name: 'HASH 12',
    blurb:
      'A dark, cinematic, scroll-driven site for an inter-school tech fest — preloader, magnetic buttons, event previews, custom cursor.',
    tech: 'Next.js · GSAP · Three.js',
    href: 'https://github.com/toeeshchaudhary/hash12',
    color: 'var(--chip-orange)',
    bullet: 'H12',
    tags: ['web'],
    scale: 'major',
    status: 'shipped for an inter-school tech fest',
  },
  {
    name: 'socius',
    blurb:
      'A local-first AI operating companion for the terminal — an intelligent Unix citizen, not a chat box in a browser.',
    tech: 'TypeScript',
    href: 'https://github.com/toeeshchaudhary/socius',
    color: 'var(--chip-yellow)',
    bullet: 'SO',
    tags: ['ai', 'tools'],
    scale: 'major',
    status: 'the one I keep coming back to',
  },
  {
    name: 'chamak',
    blurb:
      'An investor reasoning engine for Indian markets: it turns your own investing beliefs into a rule graph and scores stocks through your lens.',
    tech: 'Python · Textual TUI',
    href: 'https://github.com/toeeshchaudhary/chamak',
    color: 'var(--chip-green)',
    bullet: 'CH',
    tags: ['tools'],
    scale: 'tool',
    status: 'built for my own investing',
  },
  {
    name: 'writee',
    blurb:
      'A cross-platform handwriting whiteboard: infinite canvas, a pressure-sensitive pen, linked notes, and self-contained web export.',
    tech: 'Rust · wgpu · SQLite',
    href: 'https://github.com/toeeshchaudhary/writee',
    color: 'var(--chip-blue)',
    bullet: 'WR',
    tags: ['tools'],
    scale: 'tool',
    status: 'Rust, because the canvas had to be fast',
  },
  {
    name: 'pracq',
    blurb:
      'A lightweight flashcard & practice-test TUI — plain-Markdown decks, spaced repetition, one static binary with no runtime.',
    tech: 'Go',
    href: 'https://github.com/toeeshchaudhary/pracq',
    color: 'var(--chip-orange)',
    bullet: 'PR',
    tags: ['tools'],
    scale: 'tool',
    status: 'one static binary, no runtime',
  },
  {
    name: 'adhyapak',
    blurb:
      'A from-scratch, gamified JEE-2027 tutor: plain-text lessons, spaced repetition, a concept map, and a local web app with no database.',
    tech: 'JavaScript',
    href: 'https://github.com/toeeshchaudhary/adhyapak',
    color: 'var(--chip-yellow)',
    bullet: 'AD',
    tags: ['web', 'tools'],
    scale: 'tool',
    status: 'built to teach myself JEE',
  },
  {
    name: 'XRPbot',
    blurb:
      'A cross-platform control suite for an XRP robot — joins its WiFi, streams telemetry at 20 Hz, drives it with a gamepad, reconnects on drop.',
    tech: 'Bun · Expo + Electron',
    href: 'https://github.com/toeeshchaudhary',
    color: 'var(--chip-green)',
    bullet: 'XR',
    tags: ['hardware', 'tools'],
    scale: 'experiment',
    status: 'telemetry at 20 Hz over its own WiFi',
  },
  {
    name: 'MTTA',
    blurb:
      'The engine behind toeesh.network — my life drawn as a subway map, with a custom map editor so the thing keeps growing.',
    tech: 'Next.js',
    href: 'https://github.com/toeeshchaudhary/MTTA',
    color: 'var(--chip-blue)',
    bullet: 'MT',
    tags: ['web', 'design'],
    scale: 'flagship',
    status: 'live at toeesh.network, always growing',
  },
  {
    name: 'COLLISION CTF',
    blurb:
      'The portal and all 16 challenges for the CTF I ran — a Next.js + Supabase scoreboard, plus build and solve scripts for every challenge.',
    tech: 'Next.js · Supabase · Python',
    href: 'https://github.com/toeeshchaudhary',
    color: 'var(--chip-orange)',
    bullet: 'CX',
    tags: ['web', 'tools'],
    scale: 'flagship',
    status: 'ran it for 16 challenges and a full portal',
  },
  {
    name: 'questlog',
    blurb:
      'My life as an RPG — a world map, a character sheet, a quest drawer, a codex, and a daily engine that keeps the campaign moving.',
    tech: 'Next.js · React 19',
    href: 'https://github.com/toeeshchaudhary',
    color: 'var(--chip-yellow)',
    bullet: 'QL',
    tags: ['web', 'tools'],
    scale: 'experiment',
    status: 'in progress',
  },
  {
    name: 'stim',
    blurb:
      'Make beats with your keyboard, no DAW — drums, sampler and synth with record, quantize, and save/load, as a desktop app.',
    tech: 'React · Tone.js · Tauri',
    href: 'https://github.com/toeeshchaudhary',
    color: 'var(--chip-blue)',
    bullet: 'ST',
    tags: ['tools', 'design'],
    scale: 'experiment',
    status: 'a keyboard as an instrument',
  },
  {
    name: 'turn-mom',
    blurb:
      'A dataset pipeline for an SMS-reply suggester: clean, rehydrate, then label with a local Llama-3.3-70B teacher served on a GH200.',
    tech: 'Python · vLLM',
    href: 'https://github.com/toeeshchaudhary/turn-mom',
    color: 'var(--chip-green)',
    bullet: 'TM',
    tags: ['ai', 'tools'],
    scale: 'major',
    status: 'ran a 70B teacher on a GH200',
  },
  {
    name: 'tenderscrape',
    blurb:
      'Finds Indian government tenders still open for bidding, filtered by value band and category, and reports them to SQLite, CSV and PDF.',
    tech: 'Python · SQLite',
    href: 'https://github.com/toeeshchaudhary',
    color: 'var(--chip-orange)',
    bullet: 'TS',
    tags: ['tools'],
    scale: 'tool',
    status: 'built for Hexoforge',
  },
  {
    name: 'deejaaay',
    blurb:
      'A hand-built USB-MIDI pad controller on an ESP32-S3 — four pads sending note on/off over TinyUSB, straight into any DAW.',
    tech: 'ESP32-S3 · Arduino C++',
    href: 'https://github.com/toeeshchaudhary',
    color: 'var(--red)',
    bullet: 'DJ',
    tags: ['hardware'],
    scale: 'experiment',
    status: 'early prototype, real hardware',
  },
  {
    name: 'brand systems',
    blurb:
      'Two full identity packages — campus-gateway and naava — logos, decks, pamphlets and social templates, rendered HTML → PNG through a headless pipeline.',
    tech: 'HTML/CSS · headless chromium',
    href: 'https://github.com/toeeshchaudhary',
    color: 'var(--chip-yellow)',
    bullet: 'BR',
    tags: ['design'],
    scale: 'experiment',
    status: 'two identities, rendered from HTML',
  },
  {
    name: 'dotfiles',
    blurb:
      'My whole Arch + i3 desktop, bootstrap-installable — a minimal grayscale rice with pywal theming and a self-update system.',
    tech: 'Shell',
    href: 'https://github.com/toeeshchaudhary/dotfiles',
    color: 'var(--hairline-strong)',
    bullet: 'DF',
    tags: ['tools', 'design'],
    scale: 'tool',
    status: 'my daily driver, bootstrap-installable',
  },
];

// Tag order is deliberate — broadest first, so the filter row reads as a
// spectrum rather than an alphabetised dump.
export const BUILD_TAGS = ['hardware', 'ai', 'web', 'tools', 'design'] as const;
