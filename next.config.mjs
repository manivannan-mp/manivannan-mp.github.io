/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export → deployable to GitHub Pages as plain files.
  output: 'export',
  // Emit directory-style URLs (/build-agent-loop/ → build-agent-loop/index.html)
  // so existing links keep working after the migration.
  trailingSlash: true,
  images: {
    // next/image optimization needs a server; static export has none.
    unoptimized: true,
  },
};

export default nextConfig;
