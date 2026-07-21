# manivannan-mp.github.io

Personal site & blog for **ManiVannan Murugesan** — CTO & Director at AllActivity,
building AI-powered SaaS products from Finland, and founder of MiniLabz.

🔗 Live: https://manivannan-mp.github.io

Built with **Next.js** (App Router) and exported to **static HTML**
(`output: 'export'`), deployed to **GitHub Pages** via GitHub Actions. Articles
are authored in **MDX**. The design system (design tokens, light/dark, manual
theme toggle) is the original hand-tuned CSS, kept as global styles.

## Structure

```
app/
  layout.tsx                 # RootLayout: fonts, metadata, theme script, reveal observer
  page.tsx                   # Home: hero, about, projects, writing, contact
  globals.css                # Site design system (light/dark, layout) — global CSS
  robots.ts, sitemap.ts      # Generated robots.txt + sitemap.xml
  blog/
    page.tsx                 # Writing index (lists published posts, else "coming soon")
    post.css                 # Long-form article styles
    [slug]/page.tsx          # Renders a post from content/posts/<slug>.mdx
  build-agent-loop/
    page.tsx                 # Overview: what a loop is, the animated loop cycle, install
    build-agent-loop.css     # Page-scoped styles for the overview
    showcase/
      page.tsx               # Catalog: 13 role-based use cases (from data/loops.ts)
      showcase.css           # Page-scoped styles for the catalog
components/                   # Nav, Footer, ThemeToggle, ThemeScript, RevealObserver,
                             # LoopDiagram, RoleFlowDiagram, EvolveStrip, CopyButton
content/posts/               # Articles as .mdx (frontmatter: title, date, summary, draft)
data/loops.ts                # The 13 use-case definitions (typed, rendered server-side)
lib/posts.ts                 # MDX post loader (frontmatter, dates, draft filtering)
public/
  .nojekyll                  # Keeps GitHub Pages from processing the _next folder
  build-agent-loop/build-agent-loop.skill   # Downloadable skill file (zip)
  build-agent-loop/showcase.html            # Redirect stub → /build-agent-loop/showcase/
  blog/example-post.html                    # Redirect stub → /blog/example-post/
```

The concepts (loop cycle, four building blocks, three roles, memory) live **only**
on the Build Agent Loop overview; the showcase page is purely the use-case catalog
and links back to the overview — keep it that way to avoid duplicating the same
explanation twice.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
```

`npm run build` writes the deployable static site to `out/`.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages.

> **One-time setup:** in the repo settings, set **Settings → Pages → Build and
> deployment → Source** to **GitHub Actions** (instead of "Deploy from a branch").
> This is required because the site is now built by the workflow rather than
> served directly from the branch.

## Publishing a new article

1. Add a file to `content/posts/`, e.g. `content/posts/my-first-post.mdx`, with
   frontmatter:

   ```mdx
   ---
   title: My first post
   date: 2026-08-01
   summary: A one-line summary shown on the writing index.
   sub: Optional subtitle shown under the post title.
   ---

   Write the body in Markdown / MDX.
   ```

2. Commit & push. The post is generated at `/blog/my-first-post/` and listed on
   the writing index automatically — no manual card to add.

Add `draft: true` to keep a post reachable by URL but off the index (that is how
`content/posts/example-post.mdx`, the template, behaves).

For full article patterns, reusable MDX components, CTA/TOC/table guidance, and
the required rule to update learnings after every blog-writing task, see
`docs/blog-writing-guide.md`.

## Editing your details

The bio and project descriptions live in `app/page.tsx`. Search for `✏️`
comments for the spots worth personalizing to match your LinkedIn profile.

## The build-agent-loop skill

Public download hub: https://manivannan-mp.github.io/build-agent-loop/
The `.skill` file is a zip; to update it, re-export from claude.ai and replace
`public/build-agent-loop/build-agent-loop.skill`.
