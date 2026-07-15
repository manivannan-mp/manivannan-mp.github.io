# manivannan-mp.github.io

Personal site & blog for **ManiVannan Murugesan** — founder of MiniLabz, building
AI-powered SaaS products from Finland.

🔗 Live: https://manivannan-mp.github.io

## Structure

```
index.html            # Home: hero, about, projects, writing, contact
blog/
  index.html          # Writing index (list of articles)
  example-post.html   # Copy this to start a new article
assets/
  css/style.css       # Site styles (auto light/dark + manual toggle)
  css/post.css        # Long-form article styles
  js/main.js          # Theme toggle, scroll reveal, footer year
```

## Publishing a new article

1. Duplicate `blog/example-post.html` → `blog/your-slug.html` and write your post
   in plain HTML.
2. Add a card for it at the top of the `.post-list` in `blog/index.html`.
3. (Optional) surface the newest post in the **Writing** section of `index.html`.
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
