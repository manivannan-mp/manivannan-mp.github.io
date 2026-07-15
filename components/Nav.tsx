import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export type NavLink = { href: string; label: string };

// Default set matches the homepage nav (on-page anchors).
export const HOME_LINKS: NavLink[] = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#writing', label: 'Writing' },
  { href: '/#contact', label: 'Contact' },
];

export default function Nav({
  links = HOME_LINKS,
  brandHref = '/',
}: {
  links?: NavLink[];
  brandHref?: string;
}) {
  return (
    <header className="nav" id="top">
      <div className="wrap nav-inner">
        <Link href={brandHref} className="brand">
          <span className="brand-mark">MM</span>
          <span className="brand-name">ManiVannan</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href + l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
