# Blog Writing Guide

Use this guide when creating or improving posts in `content/posts/`. It captures the site-specific lessons from the Project Genesis article so future Codex or Claude sessions can produce blog posts that publish cleanly and reuse existing components.

## Non-Negotiable Rule

Every blog-writing task must update this guide with any new learning, reusable component, layout pattern, content pattern, bug, or verification step discovered during the work.

Examples:

- A new reusable MDX component is added.
- A Markdown feature does not render as expected.
- A CSS pattern improves article readability.
- A CTA, TOC, table, image, diagram, or prompt pattern becomes reusable.
- A verification step catches a bug that future posts should avoid.

Do not leave blog-writing knowledge only in chat history.

## Publishing Model

Blog posts live in `content/posts/*.mdx`.

The slug comes from the filename. For example:

```text
content/posts/project-genesis-strong-ai-project-framework.mdx
```

publishes at:

```text
/blog/project-genesis-strong-ai-project-framework/
```

Required frontmatter:

```mdx
---
title: "Clear Article Title"
date: 2026-07-21
sub: "Optional subtitle shown under the title."
summary: "Short summary shown on the blog index and metadata."
---
```

Use quoted frontmatter values when the text contains `:` or other YAML-sensitive punctuation.

Add `draft: true` only when the post should be reachable by URL but hidden from the blog index.

## Theme Rule

Posts must use the website theme, not copied theme CSS from a source HTML file.

When converting an HTML article:

- Preserve the content, structure, and useful interactions.
- Remove standalone `<html>`, `<head>`, `<style>`, `<script>`, nav, body, and footer wrappers.
- Rebuild visual structure through MDX, React components, and `app/blog/post.css`.
- Use existing design tokens: `--bg`, `--surface`, `--border`, `--text`, `--muted`, `--accent`, `--accent-2`, `--accent-soft`, `--shadow`, `--radius`, and `--radius-sm`.
- Verify both light and dark theme contrast when adding CTAs or custom blocks.

## Recommended Article Structure

For practical guide posts, use this shape:

```mdx
Intro paragraph.

<div className="post-actions">
  <a className="post-cta post-cta-primary" href="#prompts">Copy the prompts</a>
  <a className="post-cta post-cta-secondary" href="#framework">Understand the system</a>
</div>

<nav className="post-toc" aria-label="Article sections">
  <a href="#framework">Framework</a>
  <a href="#roles">Roles</a>
  <a href="#prompts">Prompts</a>
  <a href="#workflow">Workflow</a>
  <a href="#project-bible">Project Bible</a>
</nav>

<section id="framework">

## Section Heading

Content.

</section>
```

Give every TOC target a stable `<section id="...">` wrapper. The blog CSS adds `scroll-margin-top` so TOC jumps land below the sticky post header.

## Reusable Patterns

### Sticky TOC

Use `<nav className="post-toc">` near the top of a post for long-form guides. On desktop it appears as a sticky right-side rail. On narrower screens it falls back inline.

Rules:

- Keep labels short.
- Link only to high-level sections.
- Use stable lowercase hash IDs.
- Do not add a second in-page navigation system unless the article genuinely needs it.

### CTA Buttons

Use the post CTA classes for article-level calls to action:

```mdx
<div className="post-actions">
  <a className="post-cta post-cta-primary" href="#prompts">Copy the prompts</a>
  <a className="post-cta post-cta-secondary" href="#framework">Understand the system</a>
</div>
```

Use `post-cta-primary` for the main action and `post-cta-secondary` for supporting navigation. These classes are styled separately from global `.btn` so they remain high-contrast in both light and dark themes inside `.post-body`.

### PromptBlock

Use `PromptBlock` for any copyable prompt, template, checklist, or command block that readers are likely to reuse.

```mdx
<PromptBlock
  kicker="Prompt 1"
  title="ChatGPT Project Instructions - Genesis Engine"
  text={`Paste the reusable prompt here.`}
/>
```

`PromptBlock` is registered in `app/blog/[slug]/page.tsx` and implemented in `components/PromptBlock.tsx`.

Rules:

- Keep `kicker` short.
- Put the reader-facing label in `title`.
- Put only the copyable content in `text`.
- Avoid duplicating the same prompt as a separate fenced code block.

### Section Cards

Use `post-section-card`, `post-stage-grid`, and `post-stage-card` when a section benefits from scannable blocks rather than plain paragraphs.

```mdx
<div className="post-stage-grid">
  <article className="post-stage-card">
    <p className="post-kicker">Step 1</p>
    <h3>Genesis</h3>
    <p>ChatGPT defines the problem, vision, architecture, and rules.</p>
  </article>
</div>
```

Keep cards for individual repeated items or compact framed explanations. Do not nest cards inside cards.

### Tables

This MDX setup does not currently parse GitHub-flavored Markdown tables. Do not rely on pipe-table Markdown.

Use explicit JSX/HTML table markup:

```mdx
<div className="project-bible-table">
  <table>
    <thead>
      <tr>
        <th>Area</th>
        <th>Purpose</th>
        <th>Typical artifacts</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Core Memory</strong></td>
        <td>Preserves product identity and long-term intent.</td>
        <td>Vision, mission, users, non-goals, principles.</td>
      </tr>
    </tbody>
  </table>
</div>
```

Use `project-bible-table` for dense article tables until a more generic table class is added.

## Copy And Language

Prefer practical, grounded positioning. Avoid inflated terms such as "world-class" unless the user explicitly wants that wording.

Good alternatives:

- strong
- exceptional
- execution-ready
- durable
- practical
- reliable
- production-minded

For article titles, keep the promise clear and search-friendly:

```text
Project Genesis: A Strong AI Project Framework
```

For summaries, state what the reader gets:

```text
A practical guide for using ChatGPT as a Genesis engine, then handing off to Codex or Claude Code as the implementation engine.
```

## Verification Checklist

Run these before finishing blog-writing work:

```bash
npm run build
git diff --check
```

For layout changes, also do a visual check at desktop width. Use the local dev server:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Check:

- The post route renders.
- Sticky TOC does not overlap content.
- TOC jumps land below the sticky post title.
- CTAs are readable in light and dark themes.
- Tables render as actual tables, not raw Markdown text.
- PromptBlock copy buttons are visible and readable.
- Mobile/narrow layout does not overflow.

If using Playwright through the local Node REPL, Chrome can be launched with:

```text
/Applications/Google Chrome.app/Contents/MacOS/Google Chrome
```

## Known Lessons From Project Genesis

- Plain Markdown tables rendered as raw text because GFM table parsing was not enabled. Use JSX tables.
- Global `.post-body a` styles can override CTA link colors. CTA selectors need enough specificity, including `:visited`.
- Sticky post headers hide anchor targets unless sections define `scroll-margin-top`.
- The TOC works best as a sticky right rail on desktop and inline grid/list on smaller screens.
- `PromptBlock` is the right reusable component for copyable prompts.
- Renaming a post changes its public slug, so update homepage links and any CTA links when changing filenames.
