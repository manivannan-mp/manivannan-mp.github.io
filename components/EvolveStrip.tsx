'use client';

import { useEffect, useRef } from 'react';

// Ports the evolve run-strip: plays its reveal sequence once when scrolled
// into view, with a replay button. Honors prefers-reduced-motion.
export default function EvolveStrip() {
  const evoRef = useRef<HTMLDivElement>(null);

  function play() {
    const evo = evoRef.current;
    if (!evo) return;
    evo.classList.remove('play');
    void evo.offsetWidth; // force reflow so the animation restarts
    evo.classList.add('play');
  }

  useEffect(() => {
    const evo = evoRef.current;
    if (!evo) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              play();
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.35 }
      );
      io.observe(evo);
      return () => io.disconnect();
    }

    play();
  }, []);

  return (
    <div className="evo reveal" ref={evoRef}>
      <div className="evo-head">
        <span className="evo-cap">
          <b>Every N runs, an evolve pass reads the recent runs</b> — what
          passed, what no-op&apos;d, what caught a failure — then rewrites the
          loop, not the product. The next run starts one step smarter, and
          cheaper.
        </span>
        <button
          className="evo-replay"
          type="button"
          aria-label="Replay the evolve animation"
          onClick={play}
        >
          ↺ replay
        </button>
      </div>
      <div className="evo-strip">
        <span className="evo-run r-pass" title="run passed"></span>
        <span className="evo-run r-noop" title="no-op — nothing to do"></span>
        <span className="evo-run r-pass" title="run passed"></span>
        <span className="evo-run r-fail" title="caught a failure"></span>
        <span className="evo-run r-pass" title="run passed"></span>
        <span className="evo-run r-pass" title="run passed"></span>
        <span className="evo-conn"></span>
        <span className="evo-pill">evolve</span>
        <span className="evo-conn"></span>
        <span className="evo-next" title="next run — starts sharper"></span>
      </div>
      <div className="evo-legend">
        <span>
          <i className="evo-dot r-pass"></i> passed
        </span>
        <span>
          <i className="evo-dot r-noop"></i> no-op
        </span>
        <span>
          <i className="evo-dot r-fail"></i> caught a failure
        </span>
      </div>
      <div className="evo-changes">
        <span>📘 contract sharpened</span>
        <span>🚧 boundaries redrawn</span>
        <span>⚙️ repeated steps → script</span>
        <span>⏰ trigger re-tuned</span>
        <span>📊 dashboard updated</span>
      </div>
    </div>
  );
}
