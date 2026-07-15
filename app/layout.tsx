import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import ThemeScript from '@/components/ThemeScript';
import RevealObserver from '@/components/RevealObserver';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = 'https://manivannan-mp.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'ManiVannan Murugesan — CTO & Director · Founder & Full-Stack Builder',
  description:
    'ManiVannan Murugesan — CTO & Director at AllActivity, building AI-powered SaaS products from Finland, and founder of MiniLabz. Full-stack engineer, product builder, and writer on AI & software.',
  authors: [{ name: 'ManiVannan Murugesan' }],
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%E2%9A%A1%3C/text%3E%3C/svg%3E",
  },
  openGraph: {
    type: 'website',
    title:
      'ManiVannan Murugesan — CTO & Director · Founder & Full-Stack Builder',
    description:
      'CTO & Director at AllActivity, building AI-powered SaaS products — and founder of MiniLabz. Full-stack engineer & writer, based in Finland.',
    url: SITE_URL,
  },
  twitter: { card: 'summary' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ThemeScript />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
