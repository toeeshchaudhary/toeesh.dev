---
title: the lab
line: L
tag: ongoing
accent: var(--chip-yellow)
dek: "Where I tinker: running AI on my own laptop, tuning my Linux setup, writing small tools, and building toeesh.network — my life drawn as a subway map."
description: "The lab — local LLMs on limited hardware, a hand-tuned Arch + i3 desktop, small open-source tools, and the transit-map site toeesh.network."
---

Not every project is big enough to get its own page. The lab is where the smaller stuff lives — the experiments, the tinkering, and the tools I write to make my own life easier. It's the workshop behind the bigger projects, and most of it is open source on [GitHub](https://github.com/toeeshchaudhary).

## Running AI on my own machine

Most AI runs on giant, expensive servers you rent by the minute. I like figuring out what I can run on my own laptop instead — completely offline, private, and free.

It mostly comes down to picking the right models and settings for limited hardware, and it's taught me a lot about how these systems actually work underneath all the hype. That thread runs straight into [**socius**](https://github.com/toeeshchaudhary/socius) — a local-first AI companion that lives in the terminal and tries to be a genuinely helpful Unix citizen rather than a chat box in a browser.

## Small tools I keep building

I have a habit of turning "I wish something did this" into a real, finished tool. The recent ones:

- [**socius**](https://github.com/toeeshchaudhary/socius) — a local-first AI operating companion for the terminal; an intelligent Unix citizen. *(TypeScript)*
- [**chamak**](https://github.com/toeeshchaudhary/chamak) — an investor reasoning engine for Indian markets: it turns your own investing beliefs into a rule graph and scores every stock through your lens. *(Python · Textual TUI)*
- [**writee**](https://github.com/toeeshchaudhary/writee) — a cross-platform handwriting whiteboard: infinite canvas, a pressure-sensitive pen, arrows and text, and self-contained web export. *(Rust · wgpu + winit · SQLite)*
- [**pracq**](https://github.com/toeeshchaudhary/pracq) — a lightweight TUI for flashcards and practice tests: plain-Markdown decks, spaced repetition, and a single static binary with no runtime or dependencies. *(Go)*
- [**adhyapak**](https://github.com/toeeshchaudhary/adhyapak) — a from-scratch, gamified JEE-2027 tutor: plain-text Markdown lessons, spaced repetition, a concept map, and a local web app with no database. *(JavaScript)*

The common thread is the same as the hardware: plain files over databases, offline over cloud, and something you can actually open up and repair.

## Bigger builds

Some experiments outgrow "small tool." These are the larger ones — full apps, sites, and hardware I took start to finish:

- [**AEGIS**](https://github.com/toeeshchaudhary/AEGIS) — a low-cost agri-tech field network for small farmers: ESP32 sensor nodes in the field, a live Next.js cloud dashboard, a rule engine, and AI-written crop advice, with SMS alerts and a demo simulator. My clearest hardware-meets-software project outside Navigator. *(ESP32 firmware · Next.js)*
- [**synergyclash**](https://github.com/toeeshchaudhary/synergyclash) — a real-time multiplayer corporate-strategy simulator: a live stock market, mergers and hostile takeovers, news and crisis events, an admin control room, and a spectator mode. *(Next.js · Prisma + PostgreSQL · Socket.IO)*
- [**HASH 12**](https://github.com/toeeshchaudhary/hash12) — a dark, cinematic, scroll-driven site for an inter-school tech fest: a preloader, magnetic buttons, event-hover previews, a horizontal archive, and a custom cursor. *(Next.js · GSAP + Lenis · Three.js)*
- **XRPbot** — a cross-platform control suite (iOS/Android + desktop) for an XRP robot: it joins the robot's WiFi, streams telemetry at 20 Hz, and drives it with a gamepad, reconnecting automatically. *(Bun monorepo · Expo + Electron)*

## A computer setup tuned by hand

I run **Arch Linux** with a keyboard-driven, no-frills setup — no wasted clicks, no animations. I've themed and tuned the whole thing by hand so the machine gets out of my way and I can just work. It's equal parts hobby and daily tool: there's always one more thing to make faster or cleaner. The whole rice is bootstrap-installable as [**dotfiles**](https://github.com/toeeshchaudhary/dotfiles) — a minimal grayscale i3wm setup (i3 · polybar · picom · rofi · eww) with pywal theming and a self-update system. *(Shell)*

## toeesh.network

The biggest thing in the lab is a website where I've drawn my whole life as a subway map — every line is a part of me, and every stop is something I made or can't stop thinking about. I built it with a custom map editor so I can keep adding to it over time. The code is open source as [**MTTA**](https://github.com/toeeshchaudhary/MTTA).

It's live and always growing — [take a ride through it here](https://toeeshnetwork.vercel.app). If you want to see where the hardware fits in, that lives on [its own page](/hardware).
