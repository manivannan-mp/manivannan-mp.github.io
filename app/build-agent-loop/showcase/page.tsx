import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CopyButton from '@/components/CopyButton';
import { LOOPS } from '@/data/loops';
import './showcase.css';

const NAV_LINKS = [
  { href: '/build-agent-loop/', label: 'Build Agent Loop' },
  { href: '/blog/', label: 'Writing' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export const metadata: Metadata = {
  title: 'Agent Loops — 13 Role-Based Use Cases · Build Agent Loop',
  description:
    '13 role-based agent-loop patterns for the Build Agent Loop Claude skill — each with a trigger, a bounded action, a verification rule, and a ready-to-copy quick-start prompt. Draft-first by default.',
  openGraph: {
    type: 'website',
    title: 'Agent Loops — 13 Role-Based Use Cases',
    description:
      '13 role-based agent-loop patterns with ready-to-copy quick-start prompts. Draft-first by default.',
    url: 'https://manivannan-mp.github.io/build-agent-loop/showcase/',
  },
  twitter: { card: 'summary' },
};

export default function Showcase() {
  return (
    <div className="showcase">
      <Nav links={NAV_LINKS} />

      <main id="main">
        <section className="showcase-hero">
          <div className="wrap reveal">
            <p className="eyebrow">Build Agent Loop · 13 use cases</p>
            <h1>Agent Loops: 13 Role-Based Use Cases</h1>
            <p className="lede">
              Thirteen ready-to-copy loop patterns — one per role — each with a{' '}
              <strong>trigger</strong>, a <strong>bounded action</strong>, a{' '}
              <strong>verification rule</strong>, and a starter prompt you can
              paste straight into Claude. Every one starts{' '}
              <strong>read-only or draft-only</strong>, so the human keeps the
              click that matters.
            </p>
            <p className="lede" style={{ marginTop: '14px', fontSize: '1rem' }}>
              New here? Start with{' '}
              <a className="link" href="/build-agent-loop/">
                what a loop is and how it works →
              </a>
            </p>
          </div>
        </section>

        <section className="section" style={{ padding: '28px 0 0' }}>
          <div className="wrap">
            <div className="sub-head reveal">
              <span className="n">01</span>
              <h2>Pick your loop</h2>
            </div>
            <p className="lead-two reveal">
              Each card below is a starting template: a role, its trigger, the one
              bounded action, the rule that verifies the run, and a copy-paste
              prompt. Want the concepts behind them — the loop cycle, the four
              building blocks, the three roles, and the memory that compounds?
              Those live on the{' '}
              <a className="link" href="/build-agent-loop/">
                Build Agent Loop overview
              </a>
              .
            </p>
            <div className="loop-grid reveal">
              {LOOPS.map((l, i) => (
                <article className="loop-card" key={l.title}>
                  <div className="loop-top">
                    <div>
                      <div className="loop-role">
                        {i + 1} · {l.role}
                      </div>
                      <div className="loop-title">{l.title}</div>
                    </div>
                    <div className="perm">{l.perm}</div>
                  </div>
                  <dl>
                    <dt>Trigger</dt>
                    <dd>{l.trigger}</dd>
                    <dt>Action</dt>
                    <dd>{l.action}</dd>
                    <dt>Output</dt>
                    <dd>{l.output}</dd>
                    <dt>Verify</dt>
                    <dd className="verify">{l.verify}</dd>
                  </dl>
                  <div className="prompt-wrap">
                    <div className="prompt-head">
                      <span>Quick-start prompt</span>
                      <CopyButton text={l.prompt} />
                    </div>
                    <pre>{l.prompt}</pre>
                  </div>
                </article>
              ))}
            </div>

            <div className="callout reveal">
              <b>Before you schedule anything:</b> qualify the task (it repeats on
              a real cadence, success is objectively checkable, and future runs
              benefit from memory), then run the loop by hand 3–5 times and watch
              what it touches. These are starting templates, not proof a loop is
              ready to run unsupervised. Keep the permission level low, prefer
              draft-not-act, and never hand a loop unsupervised authority over
              money, contracts, grades, live production systems, or messages sent
              on your behalf.
            </div>
          </div>
        </section>
      </main>

      <Footer backHref="/build-agent-loop/" backLabel="← Build Agent Loop" />
    </div>
  );
}
