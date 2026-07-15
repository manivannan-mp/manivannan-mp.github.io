import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />

      <main id="main">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-inner">
            <div className="hero-text reveal">
              <p className="eyebrow">CTO &amp; Director · Founder · Finland</p>
              <h1>
                Hi, I&apos;m{' '}
                <span className="accent">ManiVannan Murugesan</span>.
              </h1>
              <p className="lede">
                I&apos;m CTO &amp; Director at <strong>AllActivity</strong>, where we
                build AI-powered SaaS products — and the founder of{' '}
                <Link href="#projects" className="link">
                  MiniLabz
                </Link>
                . I turn rough ideas into shipped software, and care about clean
                architecture, fast iteration, and tools that quietly make
                people&apos;s work easier.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="#projects">
                  See my work
                </Link>
                <a
                  className="btn btn-ghost"
                  href="https://www.linkedin.com/in/mani-minilabz/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/manivannan-mp"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
              </div>
              <ul className="hero-meta">
                <li>
                  <span className="dot dot-green"></span> Open to opportunities
                </li>
                <li>📍 Finland</li>
                <li>🛠️ TypeScript · React · Node · Supabase · AI</li>
              </ul>
            </div>
            <div className="hero-card reveal">
              <div className="avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://avatars.githubusercontent.com/u/1787450?v=4"
                  alt="ManiVannan Murugesan"
                  loading="lazy"
                  width={180}
                  height={180}
                />
              </div>
              <div className="terminal" aria-hidden="true">
                <div className="terminal-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <pre className="terminal-body">
                  <code>
                    <span className="c-prompt">mani@allactivity</span>:
                    <span className="c-path">~</span>$ whoami{'\n'}
                    <span className="c-out">
                      CTO &amp; Director · founder · builder
                    </span>
                    {'\n'}
                    <span className="c-prompt">mani@allactivity</span>:
                    <span className="c-path">~</span>$ cat stack.txt{'\n'}
                    <span className="c-out">
                      TypeScript · React · Node · Supabase
                    </span>
                    {'\n'}
                    <span className="c-out">AI/LLM apps · SaaS platforms</span>
                    {'\n'}
                    <span className="c-prompt">mani@allactivity</span>:
                    <span className="c-path">~</span>$ status --now{'\n'}
                    <span className="c-ok">▲ shipping</span>{' '}
                    <span className="c-out">
                      AI SaaS at AllActivity · founder @ MiniLabz
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="section-num">01</span>
              <h2>About</h2>
            </div>
            <div className="about-grid">
              <div className="about-body reveal">
                <p>
                  I&apos;m a full-stack engineer, founder, and product builder
                  based in Finland. As{' '}
                  <strong>CTO &amp; Director at AllActivity</strong>, I lead the
                  engineering behind AI-powered SaaS products; under my own
                  banner, <strong>MiniLabz</strong>, I design and ship the same —
                  from enterprise knowledge platforms to lightweight tools that
                  solve one problem well.
                </p>
                <p>
                  My work spans the whole stack: product thinking and UX at the
                  front, robust TypeScript/Node services in the middle, and data,
                  auth, and AI integrations underneath. I&apos;m happiest moving
                  fast from idea to working prototype, then hardening it into
                  something people can rely on.
                </p>
                <p>
                  I&apos;m now sharing what I learn along the way — writing about
                  AI, SaaS engineering, and the craft of building products solo.
                  Follow along in the{' '}
                  <Link href="#writing" className="link">
                    Writing
                  </Link>{' '}
                  section.
                </p>
                <p className="edit-hint">
                  {/* ✏️ Update this bio to match your LinkedIn "About" once you're ready. */}
                </p>
              </div>
              <aside className="about-side reveal">
                <h3>What I work with</h3>
                <div className="chips">
                  <span className="chip">TypeScript</span>
                  <span className="chip">React</span>
                  <span className="chip">Next.js</span>
                  <span className="chip">Node.js</span>
                  <span className="chip">Supabase</span>
                  <span className="chip">PostgreSQL</span>
                  <span className="chip">AI / LLMs</span>
                  <span className="chip">REST &amp; APIs</span>
                  <span className="chip">Product design</span>
                </div>
                <h3 className="mt">Focus areas</h3>
                <ul className="focus-list">
                  <li>AI &amp; document-intelligence products</li>
                  <li>SaaS platforms &amp; developer tooling</li>
                  <li>0→1 product engineering</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section section-alt">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="section-num">02</span>
              <h2>Projects</h2>
            </div>
            <p className="section-intro reveal">
              A selection of what I&apos;m building at MiniLabz. Several are in
              private development — reach out if you&apos;d like a closer look or
              early access.
            </p>
            <div className="cards">
              <Link
                className="card reveal"
                href="/build-agent-loop/"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="card-top">
                  <span className="card-tag">Claude Skill · Public</span>
                  <span className="card-lang">⚡ Free</span>
                </div>
                <h3>Build Agent Loop</h3>
                <p>
                  A Claude Code skill for building safe, repeatable agent loops —
                  13 role-based patterns, draft-first by default. Download &amp;
                  install it yourself. →
                </p>
              </Link>

              <article className="card reveal">
                <div className="card-top">
                  <span className="card-tag">AI Platform</span>
                  <span className="card-lang">
                    <span className="dot dot-ts"></span> TypeScript
                  </span>
                </div>
                <h3>Cortex</h3>
                <p>
                  AI Enterprise Knowledge &amp; Document Intelligence Platform —
                  surface answers and insights from an organization&apos;s
                  documents.
                </p>
              </article>

              <article className="card reveal">
                <div className="card-top">
                  <span className="card-tag">Framework</span>
                  <span className="card-lang">
                    <span className="dot dot-ts"></span> TypeScript
                  </span>
                </div>
                <h3>SaaSBlocks</h3>
                <p>
                  Modular authentication, access control &amp; SDK integration
                  framework built on Supabase — inspired by Clerk + Permit.io.
                </p>
              </article>

              <article className="card reveal">
                <div className="card-top">
                  <span className="card-tag">AI · Social</span>
                  <span className="card-lang">
                    <span className="dot dot-js"></span> JavaScript
                  </span>
                </div>
                <h3>Social Caster</h3>
                <p>
                  One caption in, three platforms out — write once and publish
                  tailored posts across your social channels.
                </p>
              </article>

              <article className="card reveal">
                <div className="card-top">
                  <span className="card-tag">Community</span>
                  <span className="card-lang">
                    <span className="dot dot-ts"></span> TypeScript
                  </span>
                </div>
                <h3>WeTribe</h3>
                <p>
                  Your tribe to thrive — a platform for building and nurturing
                  communities that grow together.
                </p>
              </article>

              <article className="card reveal">
                <div className="card-top">
                  <span className="card-tag">Fintech</span>
                  <span className="card-lang">
                    <span className="dot dot-html"></span> Data
                  </span>
                </div>
                <h3>NSE Screener</h3>
                <p>
                  A daily NSE stock screener on free data — cached and fully
                  automated for reliable, hands-off market snapshots.
                </p>
              </article>

              <article className="card reveal">
                <div className="card-top">
                  <span className="card-tag">EdTech</span>
                  <span className="card-lang">
                    <span className="dot dot-ts"></span> TypeScript
                  </span>
                </div>
                <h3>TestMe</h3>
                <p>
                  Practice. Improve. Celebrate learning. — a focused app that
                  turns study into steady, measurable progress.
                </p>
              </article>
            </div>
            <div className="projects-cta reveal">
              <a
                className="btn btn-ghost"
                href="https://github.com/manivannan-mp"
                target="_blank"
                rel="noopener"
              >
                More on GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* WRITING */}
        <section id="writing" className="section">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="section-num">03</span>
              <h2>Writing</h2>
            </div>
            <p className="section-intro reveal">
              I write about AI, SaaS engineering, and building products solo. New
              articles will land here and on LinkedIn.
            </p>
            <div className="writing-soon reveal">
              <p>
                <strong>Writing is on the way.</strong> The first pieces — on
                agent loops, AI product engineering, and shipping solo — are in
                draft. In the meantime, I share shorter notes on{' '}
                <a
                  className="link"
                  href="https://www.linkedin.com/in/mani-minilabz/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
            {/*
              ✏️ To publish an article: add a post to content/posts/ and it will
              surface automatically on the /blog/ index. See the blog for details.
            */}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-alt">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="section-num">04</span>
              <h2>Get in touch</h2>
            </div>
            <div className="contact reveal">
              <p className="contact-lede">
                Open to interesting problems, collaborations, and conversations
                about AI &amp; product. The fastest way to reach me:
              </p>
              <div className="contact-links">
                <a className="contact-link" href="mailto:mmvmaniit@gmail.com">
                  <span className="ci">✉️</span>
                  <span>
                    <strong>Email</strong>
                    <small>mmvmaniit@gmail.com</small>
                  </span>
                </a>
                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/mani-minilabz/"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="ci">in</span>
                  <span>
                    <strong>LinkedIn</strong>
                    <small>mani-minilabz</small>
                  </span>
                </a>
                <a
                  className="contact-link"
                  href="https://github.com/manivannan-mp"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="ci">gh</span>
                  <span>
                    <strong>GitHub</strong>
                    <small>manivannan-mp</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
