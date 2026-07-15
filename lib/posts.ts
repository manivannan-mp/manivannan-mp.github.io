import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  summary: string;
  sub?: string; // optional article subtitle
  draft?: boolean;
};

export type Post = {
  meta: PostMeta;
  content: string; // raw MDX body (frontmatter stripped)
};

// YAML parses an unquoted `2026-07-15` into a Date; normalize back to a
// timezone-safe yyyy-mm-dd string either way.
function toISODate(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v ?? '');
}

function readPost(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, '');
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8');
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      date: toISODate(data.date),
      summary: String(data.summary ?? ''),
      sub: data.sub ? String(data.sub) : undefined,
      draft: Boolean(data.draft),
    },
    content,
  };
}

function allFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));
}

/** Every slug, drafts included — used to generate routes. */
export function getAllSlugs(): string[] {
  return allFiles().map((f) => f.replace(/\.mdx?$/, ''));
}

/** Published posts (drafts excluded), newest first — used for the index. */
export function getPublishedPosts(): PostMeta[] {
  return allFiles()
    .map((f) => readPost(f).meta)
    .filter((m) => !m.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const file = allFiles().find((f) => f.replace(/\.mdx?$/, '') === slug);
  return file ? readPost(file) : null;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** Format an ISO date without timezone drift (yyyy-mm-dd → "July 15, 2026"). */
export function formatDate(iso: string): string {
  const parts = iso.split('-').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return iso;
  const [y, m, d] = parts;
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
