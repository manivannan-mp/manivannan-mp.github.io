'use client';

import { useState } from 'react';

export default function PromptBlock({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="prompt-block">
      <div className="prompt-head">
        <div>
          <p className="prompt-kicker">{kicker}</p>
          <h3>{title}</h3>
        </div>
        <button type="button" className="prompt-copy" onClick={copyPrompt}>
          {copied ? 'Copied' : 'Quick Copy'}
        </button>
      </div>
      <pre>
        <code>{text}</code>
      </pre>
    </section>
  );
}
