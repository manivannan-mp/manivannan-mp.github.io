import Link from 'next/link';

export default function Footer({
  backHref = '/#top',
  backLabel = 'Back to top ↑',
}: {
  backHref?: string;
  backLabel?: string;
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>© {year} ManiVannan Murugesan · Built with care in Finland 🇫🇮</p>
        <Link href={backHref} className="to-top">
          {backLabel}
        </Link>
      </div>
    </footer>
  );
}
