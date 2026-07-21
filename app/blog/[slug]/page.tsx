import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PromptBlock from '@/components/PromptBlock';
import { getAllSlugs, getPostBySlug, formatDate } from '@/lib/posts';
import '../post.css';

const NAV_LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/blog/', label: 'Writing' },
  { href: '/#contact', label: 'Contact' },
];

// Only build routes for known posts (required by static export).
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — ManiVannan Murugesan`,
    description: post.meta.summary || post.meta.sub || undefined,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components: {
      PromptBlock,
    },
    options: { parseFrontmatter: false },
  });

  return (
    <>
      <Nav links={NAV_LINKS} />

      <main id="main">
        <article className="post wrap">
          <p className="post-back">
            <Link className="link" href="/blog/">
              ← All writing
            </Link>
          </p>

          <header className="post-header">
            <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
            <h1>{post.meta.title}</h1>
            {post.meta.sub && <p className="post-sub">{post.meta.sub}</p>}
          </header>

          <div className="post-body">{content}</div>

          <footer className="post-footer">
            <p>
              Thanks for reading. Find me on{' '}
              <a
                className="link"
                href="https://www.linkedin.com/in/mani-minilabz/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>{' '}
              and{' '}
              <a
                className="link"
                href="https://github.com/manivannan-mp"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
              .
            </p>
          </footer>
        </article>
      </main>

      <Footer backHref="/#top" backLabel="Back to top ↑" />
    </>
  );
}
