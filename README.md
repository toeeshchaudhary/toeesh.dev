# toeesh.dev

> A personal portfolio built like a Swiss poster — charcoal grain field, bone grotesk, a single signal red.

toeesh.dev is Toeesh Chaudhary's personal site: a place for the hardware, software, and creative
work, laid out on an editorial "brand-specimen" design system rather than a template. The home page
composes a set of hand-built sections; a few deeper routes hold the longer story. It's a Next.js App
Router site, statically composed and deployed on Vercel.

**Live:** https://toeesh.dev

## Run it

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # fetches RM Neue, then `next build`
```

The `build` script runs `scripts/fetch-fonts.mjs` before `next build`. With no font token it still
succeeds and falls back gracefully (see [Fonts](#fonts)).

## Structure

The home page composes standalone sections; the nav routes hold the deeper pages.

```
app/
  page.tsx          # home — composes the sections below
  about/            # who / what
  work/             # selected work
  hardware/         # hardware builds
  lab/              # the lab — experiments
  game/             # game
  layout.tsx        # shell + fonts
  globals.css       # swiss-poster design system (tokens, type scale)
  opengraph-image.tsx

components/
  home/
    Hero.tsx          # poster masthead
    ServiceStatus.tsx # status strip
    ProjectGrid.tsx   # hardware · finstocks internship · the lab
    MttaCard.tsx      # links out to the MTTA transit-map site
    CreativeStrip.tsx # music/fl-studio · moodboard/cosmos · musings archive
  layout/
    Nav.tsx
    Footer.tsx
```

## Fonts

The site sets in **RM Neue VF**, a commercial CoType Foundry face that is *not* committed to this
public repo — it's fetched at build from a private repo. Full setup, tokens, and troubleshooting:
[`FONTS.md`](./FONTS.md).

## Tech

| Piece | Choice |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript |
| Animation | [`motion`](https://motion.dev) |
| Content | react-markdown + remark-gfm + gray-matter |
| Type | RM Neue VF (grotesk) · JetBrains Mono |
| Deploy | Vercel |

---

Built by [toeesh](https://github.com/toeeshchaudhary) · MIT licensed
