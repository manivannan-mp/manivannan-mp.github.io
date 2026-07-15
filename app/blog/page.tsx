import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getPublishedPosts, formatDate } from '@/lib/posts';

const NAV_LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#writing', label: 'Writing' },
  { href: '/#contact', label: 'Contact' },
];

export const metadata: Metadata = {
  title: 'Writing — ManiVannan Murugesan',
  description:
    'Articles on AI, SaaS engineering, and building products solo — by ManiVannan Murugesan.',
};

export default function BlogIndex() {
  const posts = getPublishedPosts();

  return (
    <>
      <Nav links={NAV_LINKS} />

      <main id="main" className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="section-num">✍️</span>
            <h2>Writing</h2>
          </div>
          <p className="section-intro reveal">
            Notes and lessons on AI, SaaS engineering, and building products solo.
            Also shared on{' '}
            <a
              className="link"
              href="https://www.linkedin.com/in/mani-minilabz/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            .
          </p>

          {posts.length === 0 ? (
            <div className="writing-soon reveal">
              <p>
                <strong>First articles coming soon.</strong> Pieces on agent loops,
                AI product engineering, and shipping solo are in draft. Follow along
                on{' '}
                <a
                  className="link"
                  href="https://www.linkedin.com/in/mani-minilabz/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>{' '}
                for now.
              </p>
            </div>
          ) : (
            <div className="post-list reveal">
              {posts.map((p) => (
                <Link
                  className="post-item"
                  href={`/blog/${p.slug}/`}
                  key={p.slug}
                >
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                </Link>
              ))}
            </div>
          )}

          <p style={{ marginTop: '36px' }}>
            <Link className="btn btn-ghost" href="/">
              ← Back home
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
