import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ManiVannan Murugesan',
  description: 'Personal site & blog.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
