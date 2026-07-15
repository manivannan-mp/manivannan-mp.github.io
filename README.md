# manivannan-mp.github.io

Personal site & blog for **ManiVannan Murugesan** — CTO & Director at AllActivity,
building AI-powered SaaS products from Finland, and founder of MiniLabz.

🔗 Live: https://manivannan-mp.github.io

## Structure

```
index.html                 # Home: hero, about, projects, writing, contact
blog/
  index.html               # Writing index (placeholder until the first article ships)
  example-post.html        # Copy this to start a new article
build-agent-loop/          # Public Claude skill hub
  index.html               # Overview: what a loop is, the animated loop cycle, install
  showcase.html            # Catalog: 13 role-based use cases with copy-paste prompts
  build-agent-loop.skill   # Downloadable skill file (zip)
assets/
  css/style.css            # Site styles (auto light/dark + manual toggle)
  css/post.css             # Long-form article styles
  js/main.js               # Theme toggle, scroll reveal, footer year
```

The concepts (loop cycle, four building blocks, three roles, memory) live **only** on
`build-agent-loop/index.html`; `showcase.html` is purely the use-case catalog and links
back to the overview — keep it that way to avoid duplicating the same explanation twice.

## The build-agent-loop skill

Public download hub: https://manivannan-mp.github.io/build-agent-loop/
The `.skill` file is a zip; to update it, re-export from claude.ai and replace
`build-agent-loop/build-agent-loop.skill`.

## Publishing a new article

1. Duplicate `blog/example-post.html` → `blog/your-slug.html` and write your post
   in plain HTML.
2. In `blog/index.html`, replace the `.writing-soon` placeholder with a `.post-list`
   containing an `<a class="post-item">` card (newest posts at the top).
3. (Optional) surface the newest post in the **Writing** section of `index.html`,
   replacing its `.writing-soon` placeholder the same way.
4. Commit & push — GitHub Pages deploys automatically.

## Editing your details

The bio and project descriptions in `index.html` are drafted from public info.
Search the file for `✏️` comments to find the spots worth personalizing to match
your LinkedIn profile (headline, About summary, experience).

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
