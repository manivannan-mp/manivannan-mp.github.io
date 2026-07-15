import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LoopDiagram from '@/components/LoopDiagram';
import RoleFlowDiagram from '@/components/RoleFlowDiagram';
import EvolveStrip from '@/components/EvolveStrip';
import './build-agent-loop.css';

const NAV_LINKS = [
  { href: '/#projects', label: 'Projects' },
  { href: '/blog/', label: 'Writing' },
  { href: '/build-agent-loop/showcase/', label: '13 use cases' },
  { href: '/#contact', label: 'Contact' },
];

export const metadata: Metadata = {
  title: 'Build Agent Loop — a Claude skill by ManiVannan Murugesan',
  description:
    'A free Claude Code skill for building repeatable, self-verifying agent loops — with 13 role-based use cases and a safe, draft-first default. Download the .skill and install it in your own Claude account.',
  openGraph: {
    type: 'website',
    title: 'Build Agent Loop — a Claude skill',
    description:
      'Turn recurring manual checks into safe, repeatable Claude loops. 13 role-based patterns, draft-first by default. Free .skill download.',
    url: 'https://manivannan-mp.github.io/build-agent-loop/',
  },
  twitter: { card: 'summary' },
};

export default function BuildAgentLoop() {
  return (
    <>
      <Nav links={NAV_LINKS} />

      <main id="main">
        {/* HERO */}
        <section className="skill-hero">
          <div className="wrap reveal">
            <span className="skill-badge">⚡ Claude Code skill · free &amp; open</span>
            <h1>Build Agent Loop</h1>
            <p className="lede">
              A skill that helps Claude turn a recurring manual check into a safe,
              repeatable <strong>loop</strong> — it reads the memory of prior runs,
              takes one bounded action, verifies its own output,{' '}
              <strong>carries what it learned forward</strong>, and knows when to
              stop, retry, or ask a human. Each run sets up a cheaper, sharper next
              one. Ships with 13 role-based patterns, every one{' '}
              <strong>draft-first</strong> by default.
            </p>
            <div className="dl-row">
              <a
                className="btn btn-primary"
                href="/build-agent-loop/build-agent-loop.skill"
                download
              >
                ⬇ Download the .skill
              </a>
              <a className="btn btn-ghost" href="/build-agent-loop/showcase/">
                See the 13 use cases →
              </a>
            </div>
            <p className="dl-note">
              build-agent-loop.skill · ~22&nbsp;KB · installs into your own Claude
              account
            </p>

            <LoopDiagram />
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="section" style={{ paddingTop: '32px' }}>
          <div className="wrap">
            <div className="section-head reveal">
              <span className="section-num">01</span>
              <h2>What it does</h2>
            </div>
            <div className="about-grid">
              <div className="about-body reveal">
                <p>
                  Most of us use Claude for one-off tasks. But a second pattern
                  quietly eats hours every week — the <em>recurring check</em>: the
                  daily pipeline scan, the weekly progress report, the nightly log
                  review. Work that isn&apos;t hard, just relentless.
                </p>
                <p>
                  <strong>Build Agent Loop</strong> is a Claude Code skill that sets
                  those up <em>once, correctly, with real guardrails</em>. When you
                  ask Claude to build a loop, the skill walks it through qualifying
                  the task, scaffolding a tiny workspace, baking in verification from
                  day one, and only scheduling once it&apos;s proven stable.
                </p>
                <p>
                  The design goal was never to give Claude more authority — it&apos;s
                  to take the boring, repetitive middle of a task off your plate so
                  you get the time back.
                </p>
              </div>
              <aside className="about-side reveal">
                <h3>Every loop has</h3>
                <div className="chips">
                  <span className="chip">Trigger</span>
                  <span className="chip">Context</span>
                  <span className="chip">Bounded action</span>
                  <span className="chip">Self-verify</span>
                  <span className="chip">Durable memory</span>
                  <span className="chip">Evolution pass</span>
                  <span className="chip">Human gate</span>
                </div>
                <h3 className="mt">Safe by default</h3>
                <ul className="focus-list">
                  <li>Read &amp; draft — never send</li>
                  <li>Explicit pass/fail checks</li>
                  <li>Carries memory forward, not authority</li>
                  <li>Escalates instead of guessing</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* FOUR PARTS */}
        <section className="section section-alt">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="section-num">02</span>
              <h2>The four building blocks of a durable loop</h2>
            </div>
            <p className="lead-two reveal">
              The prompt itself is maybe 5% of the work. The rest is the structure
              that makes it safe to leave the loop running. Most people build parts 1
              and 4 and skip 2 and 3 — the two that actually let it run unattended.
            </p>
            <div className="parts reveal">
              <div className="part">
                <div className="k">01 · Contract</div>
                <h3>The fence</h3>
                <p>
                  One file the agent re-reads every run: the goal, the boundary fence
                  (ship on its own vs. route to a human), and the steps. That fence is
                  what makes it safe to leave a run alone.
                </p>
              </div>
              <div className="part skip">
                <div className="tag">Most skip</div>
                <div className="k">02 · State + logs</div>
                <h3>Durable memory</h3>
                <p>
                  Hypotheses, &quot;skip / known-noise&quot; lists, and a dated log the
                  loop reads back every run — so it never re-solves solved work. Run
                  fifty ends up sharper than run five.
                </p>
              </div>
              <div className="part skip">
                <div className="tag">Most skip</div>
                <div className="k">03 · Verifier</div>
                <h3>Proof, or not done</h3>
                <p>
                  The loop runs fail → fix → verify until it can point to something a
                  person checks at a glance — a passing test, an exact count, a
                  screenshot. No evidence, not finished.
                </p>
              </div>
              <div className="part">
                <div className="k">04 · Trigger</div>
                <h3>Lightest that fits</h3>
                <p>
                  A push toward a goal, a cron schedule, or an event gate — so runs
                  that find nothing cost almost nothing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THREE ROLES */}
        <section className="section">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="section-num">03</span>
              <h2>Divide the work across three roles</h2>
            </div>
            <p className="lead-two reveal">
              A simple loop is one agent doing the whole job. Once it starts shipping
              real work to real people it splits: one picks the work, one carries it
              out in an isolated lane, one proves it. You sign off on{' '}
              <em>proof, not raw diffs</em>.
            </p>
            <div className="roles reveal flow">
              <div
                className="role-card stage"
                style={{
                  '--hot': 'var(--c-orch)',
                  '--hot-soft': 'var(--c-orch-soft)',
                  animationDelay: '-8s',
                } as React.CSSProperties}
              >
                <div className="rk" style={{ color: 'var(--c-orch)' }}>
                  Pick · Orchestrator
                </div>
                <h3>Finds the work</h3>
                <p>
                  Wakes on the trigger and picks the task — reads what changed
                  (errors, inbox, metrics, PRs), chooses the single most worthwhile
                  thing this run, and hands it off. It doesn&apos;t carry out the work
                  itself.
                </p>
              </div>
              <div
                className="role-card stage"
                style={{
                  '--hot': 'var(--c-exec)',
                  '--hot-soft': 'var(--c-exec-soft)',
                  animationDelay: '-6s',
                } as React.CSSProperties}
              >
                <div className="rk" style={{ color: 'var(--c-exec)' }}>
                  Do · Executor
                </div>
                <h3>Does it in a lane</h3>
                <p>
                  Carries out the work in an isolated box — its own git worktree per
                  task — so parallel tasks never collide with your working tree or each
                  other. It can loop fail → fix, but can&apos;t call it done.
                </p>
              </div>
              <div
                className="role-card stage"
                style={{
                  '--hot': 'var(--c-ver)',
                  '--hot-soft': 'var(--c-ver-soft)',
                  animationDelay: '-4s',
                } as React.CSSProperties}
              >
                <div className="rk" style={{ color: 'var(--c-ver)' }}>
                  Prove · Verifier
                </div>
                <h3>Proves each result</h3>
                <p>
                  Independently proves each result and attaches the evidence — a
                  screenshot, a video, a fact-check, a passing test. That proof is what
                  reaches you for sign-off, in seconds.
                </p>
              </div>
            </div>

            <RoleFlowDiagram />

            <p className="role-flow reveal">
              <b>Orchestrator</b> picks → <b>Executor</b> carries it out in a lane →{' '}
              <b>Verifier</b> proves it → you sign off on the evidence → repeat
            </p>
          </div>
        </section>

        {/* MEMORY + EVOLUTION */}
        <section className="section section-alt">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="section-num">04</span>
              <h2>Memory that compounds, a loop that evolves</h2>
            </div>
            <p className="lead-two reveal">
              The difference between a loop and a prompt on a timer is that a loop
              remembers — and gets better on purpose instead of staying as dumb as day
              one.
            </p>
            <div className="two-col reveal">
              <div className="box">
                <div className="mf">PROGRESS.md&nbsp;+&nbsp;MEMORY.md</div>
                <h3>Carry the context forward</h3>
                <p>
                  <b>PROGRESS.md</b> is short-term working memory: status, last run,
                  open items, and a &quot;do not repeat&quot; list. <b>MEMORY.md</b> is
                  long-term distilled memory: durable decisions, cached facts, reusable
                  snippets, and the evolution log.
                </p>
                <p>
                  Every run reads both before acting and writes both before stopping.
                  That&apos;s the one thing that separates a loop from re-typing a
                  prompt.
                </p>
              </div>
              <div className="box">
                <div className="mf">The evolve pass</div>
                <h3>Each run sets up a cheaper next one</h3>
                <p>
                  A good loop gets stronger from a bad run instead of breaking. Every N
                  runs, an evolve pass reviews the recent runs — what wasted compute,
                  which limit is too loose, which mistake keeps recurring — and rewrites
                  the loop, not the product: tighter contract, lighter trigger,
                  mechanical steps folded into scripts.
                </p>
                <p>
                  It <b>starts fully agent-driven</b>, learns the pattern, then the
                  now-certain part <b>hardens into a cheap script</b> — the model only
                  steps back in when a guard condition fires. It&apos;s verified like
                  any run, and may only <b>tighten</b> scope; loosening always needs a
                  human.
                </p>
              </div>
            </div>

            <EvolveStrip />
          </div>
        </section>

        {/* INSTALL */}
        <section className="section">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="section-num">05</span>
              <h2>Install in 3 steps</h2>
            </div>
            <div className="steps">
              <div className="step reveal">
                <div className="n">1</div>
                <h3>Download</h3>
                <p>
                  Grab <code>build-agent-loop.skill</code> using the button above.
                </p>
              </div>
              <div className="step reveal">
                <div className="n">2</div>
                <h3>Upload</h3>
                <p>
                  In claude.ai go to{' '}
                  <code>Settings → Capabilities → Skills → Add → Upload a skill</code>{' '}
                  and select the file.
                </p>
              </div>
              <div className="step reveal">
                <div className="n">3</div>
                <h3>Use it</h3>
                <p>
                  Ask Claude: <em>&quot;Set up a loop that…&quot;</em> — or copy any of
                  the 13 starter prompts from the{' '}
                  <a className="link" href="/build-agent-loop/showcase/">
                    use-cases page
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE LADDER */}
        <section className="section section-alt">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="section-num">06</span>
              <h2>The permission ladder</h2>
            </div>
            <p className="section-intro reveal">
              Loops start at the bottom and only move up after the current level has
              run reliably. Nothing sensitive happens without a human clicking the
              button.
            </p>
            <ul className="ladder reveal">
              <li>
                <b>L1</b> Read-only analysis
              </li>
              <li>
                <b>L2</b> Draft output to <code>outputs/</code>
              </li>
              <li>
                <b>L3</b> Sandbox / branch edits only
              </li>
              <li>
                <b>L4</b> Draft external actions (draft PR or message — not sent)
              </li>
              <li>
                <b>L5</b> Human-approved writes
              </li>
              <li>
                <b>L6</b> Fully automated low-risk actions (narrow, proven cases only)
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="wrap contact reveal" style={{ textAlign: 'center' }}>
            <div
              className="section-head reveal"
              style={{ justifyContent: 'center' }}
            >
              <h2>Try it on one recurring check</h2>
            </div>
            <p
              className="contact-lede"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            >
              Pick one thing you do manually every day, hand it to a loop, and see
              what you get back.
            </p>
            <div className="dl-row" style={{ justifyContent: 'center' }}>
              <a
                className="btn btn-primary"
                href="/build-agent-loop/build-agent-loop.skill"
                download
              >
                ⬇ Download the .skill
              </a>
              <a className="btn btn-ghost" href="/build-agent-loop/showcase/">
                Browse the 13 use cases →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer backHref="/#top" backLabel="Back home ↑" />
    </>
  );
}
