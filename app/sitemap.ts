import type { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/posts';

const BASE = 'https://manivannan-mp.github.io';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/build-agent-loop/',
    '/build-agent-loop/showcase/',
    '/blog/',
  ];

  const postRoutes = getPublishedPosts().map((p) => `/blog/${p.slug}/`);

  return [...staticRoutes, ...postRoutes].map((route) => ({
    url: `${BASE}${route}`,
  }));
}
