'use client';

import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // Fallback for browsers without the async clipboard API.
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        /* ignore */
      }
      document.body.removeChild(ta);
    }
    setDone(true);
    setTimeout(() => setDone(false), 1600);
  }

  return (
    <button
      className={`copy${done ? ' done' : ''}`}
      type="button"
      onClick={copy}
    >
      {done ? 'Copied' : 'Copy'}
    </button>
  );
}
