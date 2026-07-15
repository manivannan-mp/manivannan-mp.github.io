# Report: Migrating the static site to Next.js

> Planning document. No migration work has started — this is the brief for a future
> session. Last updated: 2026-07-15.

## TL;DR recommendation

The site is small: 7 HTML pages (~1,900 lines total), one CSS design system, and
~50 lines of JS. Next.js is **worth it** mainly if you're about to write regularly
(blog) and add more project / use-case content — the payoff is **content management
and reuse**, not runtime performance. If the site stays roughly this size, migration
is a "nice-to-have," not urgent.

**Best fit:** Next.js App Router with **static export** (`output: 'export'`) + **MDX**
for writing, still deployed to **GitHub Pages**.

Also seriously consider **Astro** as a lighter alternative (see "My suggestion" below).

## Why migrate (the real wins)

- **Kill the remaining duplication at the source.** The nav header, theme toggle,
  footer, and `<head>` are copy-pasted into all 7 pages today. In Next.js those become
  one `<Layout>` / component each. (The content dedup already done by hand is exactly
  what components prevent from recurring.)
- **Writing becomes MDX.** Author posts in Markdown-with-components instead of
  hand-writing `<article>` HTML and manually updating three index cards. The blog index
  and the homepage "latest posts" can be generated from the filesystem.
- **The 13 use cases become data-driven cleanly.** They already are (the `LOOPS` array
  in `showcase.html`). In Next they'd be a typed data file rendered **server-side** —
  better SEO than the current client-side `document.createElement` injection (crawlers
  and social cards currently see an empty grid).
- **Reusable primitives:** `Button`, `Card`, `Section`, `LoopDiagram`, theme provider —
  write once, use everywhere.

## Why you might not (the honest costs)

- **No runtime benefit.** GitHub Pages already serves the hand-tuned HTML/CSS instantly.
  Next.js static export produces *more* JS, not less, for what is currently a near-zero-JS
  site.
- **Build step + toolchain.** Today: edit a file, `git push`, done. After: Node/npm, a
  build, and a CI action to deploy. That's real added surface area for a personal site.
- **The CSS is already good.** `assets/css/style.css` (design tokens, light/dark,
  `color-mix`) is clean and portable — but you'd need to decide: keep it as global CSS,
  or convert to CSS Modules / Tailwind. Keeping it as-is is the low-risk path.

## What it would take — scope & effort

| Area | Work | Est. |
|---|---|---|
| Project setup | `create-next-app`, App Router, `next.config` static export, GitHub Actions deploy to Pages, `.nojekyll` | 0.5 day |
| Layout & primitives | `RootLayout`, `Nav`, `Footer`, `ThemeToggle` (port `main.js` → a small client component + inline anti-FOUC script), `Button`, `Section`, `Card` | 1 day |
| Port pages | Home, build-agent-loop overview (incl. the `LoopDiagram` component), showcase (render 13 loops server-side from a typed data file), blog index | 1–1.5 days |
| Writing pipeline | MDX setup, post loader (frontmatter → title/date/summary), `post.css` port, auto-generated indexes, RSS (optional) | 1 day |
| SEO / polish | Metadata API for per-page OG tags, sitemap, favicon, redirects so existing URLs (`/build-agent-loop/`, `/blog/...`) don't break | 0.5 day |
| Verify & cut over | Visual parity check light/dark, Lighthouse, deploy | 0.5 day |
| **Total** | | **~4–5 focused days** |

## Key decisions to make before starting

1. **Styling:** keep global `style.css` as-is (fastest, lowest risk — **recommended**)
   vs. CSS Modules vs. Tailwind (bigger rewrite).
2. **Hosting:** stay on GitHub Pages via static export (keeps the domain, zero cost —
   **recommended**) vs. move to Vercel (unlocks ISR, previews, image optimization — only
   worth it if you want dynamic features later).
3. **The animation:** port the loop-cycle SVG into a `<LoopDiagram>` React component
   as-is (**recommended** — it's self-contained), no logic change needed.
4. **URL preservation:** static export gives `/build-agent-loop/index.html`-style paths,
   so existing links keep working — worth confirming during cutover.

## My suggestion

Since the immediate friction is *content management* (writing + reuse), a lighter-weight
middle option is worth considering: **Astro** instead of Next.js. Astro ships zero JS by
default (closer to the current site's philosophy), has first-class MDX and content
collections, and the migration is arguably simpler for a content site — you'd keep the
HTML/CSS almost verbatim as `.astro` components.

- Choose **Next.js** if the site will grow into an app (dashboards, auth, dynamic
  SaaS-adjacent pages).
- Choose **Astro** if it stays a content / marketing site.

## Current site inventory (starting point for the migration)

```
index.html                 # Home: hero, about, projects, writing, contact
blog/
  index.html               # Writing index (placeholder until first article ships)
  example-post.html        # Article template
build-agent-loop/
  index.html               # Overview: what a loop is, animated loop cycle, install
  showcase.html            # Catalog: 13 role-based use cases (LOOPS data array)
  build-agent-loop.skill   # Downloadable skill file (zip) — copy through as a static asset
assets/
  css/style.css            # Design tokens, light/dark, layout — port as global CSS first
  css/post.css             # Long-form article styles
  js/main.js               # Theme toggle, scroll reveal, footer year → client component(s)
```

### Component/data mapping (suggested)

| Today | Becomes |
|---|---|
| Repeated `<header class="nav">` | `<Nav />` |
| Repeated `<footer class="footer">` | `<Footer />` |
| Repeated `<head>` + fonts + favicon | `RootLayout` + Metadata API |
| Theme toggle in `main.js` | `<ThemeToggle />` client component + inline anti-FOUC script |
| `.reveal` scroll animation | small client hook / component |
| `LOOPS` array + client render | `data/loops.ts` rendered server-side into `<LoopCard />` |
| Loop-cycle SVG | `<LoopDiagram />` (self-contained SVG + scoped CSS) |
| `blog/*.html` articles | `content/*.mdx` + generated routes and indexes |

## Suggested first steps (for the new session)

1. Decide the three key questions above (framework, styling, hosting).
2. Scaffold the project (`create-next-app` or `npm create astro`) in a branch.
3. Port `Nav` / `Footer` / `ThemeToggle` / `RootLayout` and get one page (Home) to
   visual parity in both themes before touching the rest.
4. Move `build-agent-loop` pages, porting the SVG into `<LoopDiagram />` and the 13
   loops into a typed data file.
5. Set up the MDX writing pipeline and re-add the first article.
6. Wire the GitHub Actions → Pages deploy, confirm URLs are preserved, cut over.
