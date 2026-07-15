'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Ports the scroll-reveal behavior from the original main.js: elements marked
// with `.reveal` fade/slide in as they enter the viewport. Re-runs on route
// change so client-side navigation re-arms any new reveal elements.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.in)');
    if (!els.length) return;

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }

    els.forEach((el) => el.classList.add('in'));
  }, [pathname]);

  return null;
}
