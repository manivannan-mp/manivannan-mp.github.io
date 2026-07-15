import type { CSSProperties } from 'react';

// Inline styles carry CSS custom properties (--hot / --hot-soft) plus the
// absolute positioning for each card; React passes custom props through.
const card = (
  hot: string,
  delay: string,
  left: number,
  top: number,
  width: number,
  height: number
): CSSProperties =>
  ({
    '--hot': `var(--c-${hot})`,
    '--hot-soft': `var(--c-${hot}-soft)`,
    animationDelay: delay,
    left: `${left}px`,
    top: `${top}px`,
    width: `${width}px`,
    height: `${height}px`,
  }) as CSSProperties;

// Port of the three-role pipeline diagram from build-agent-loop/index.html.
export default function RoleFlowDiagram() {
  return (
    <div className="flow-viz reveal flow">
      <div className="flow-scroll">
        <div className="flow">
          <svg
            className="flow-svg"
            viewBox="0 0 960 600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="mOrch"
                viewBox="0 0 10 10"
                refX="7.5"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M0,0 L10,5 L0,10 z" className="mk-orch" />
              </marker>
              <marker
                id="mVer"
                viewBox="0 0 10 10"
                refX="7.5"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M0,0 L10,5 L0,10 z" className="mk-ver" />
              </marker>
            </defs>
            <path className="cxn cxn-orch" markerEnd="url(#mOrch)" d="M136,74 V88" />
            <path
              className="cxn cxn-orch"
              markerEnd="url(#mOrch)"
              d="M252,306 C288,306 268,152 298,152"
            />
            <path
              className="cxn cxn-orch"
              markerEnd="url(#mOrch)"
              d="M252,306 C282,306 282,260 298,260"
            />
            <path
              className="cxn cxn-orch"
              markerEnd="url(#mOrch)"
              d="M252,306 C282,306 282,368 298,368"
            />
            <path
              className="cxn cxn-orch"
              markerEnd="url(#mOrch)"
              d="M252,306 C288,306 268,476 298,476"
            />
            <path className="cxn cxn-ver" markerEnd="url(#mVer)" d="M500,152 H546" />
            <path className="cxn cxn-ver" markerEnd="url(#mVer)" d="M500,260 H546" />
            <path className="cxn cxn-ver" markerEnd="url(#mVer)" d="M500,368 H546" />
            <path className="cxn cxn-ver" markerEnd="url(#mVer)" d="M500,476 H546" />
            <path className="cxn cxn-ver" markerEnd="url(#mVer)" d="M760,152 H804" />
            <path className="cxn cxn-ver" markerEnd="url(#mVer)" d="M760,260 H804" />
            <path className="cxn cxn-ver" markerEnd="url(#mVer)" d="M760,368 H804" />
            <path className="cxn cxn-ver" markerEnd="url(#mVer)" d="M760,476 H804" />
            <path
              className="cxn cxn-fail cxn-dash"
              markerEnd="url(#mOrch)"
              d="M546,390 H502"
            />
            <text className="fail-label" x="523" y="382">
              fail→fix
            </text>
            <path
              className="cxn cxn-ver cxn-dash"
              markerEnd="url(#mVer)"
              d="M872,520 V552 H136 V524"
            />
            <text className="rail-label" x="506" y="545">
              every run reports back → orchestrator writes state + logs
            </text>
          </svg>

          <div className="fcard f-trigger stage" style={card('orch', '-10s', 48, 34, 176, 40)}>
            <span className="f-trig">⏰ trigger fires</span>
          </div>

          <div className="fcard f-orch stage" style={card('orch', '-8s', 24, 92, 228, 428)}>
            <div className="f-role" style={{ color: 'var(--c-orch)' }}>
              <span className="ic">🧭</span>Orchestrator
            </div>
            <div className="f-note">find the work, don&apos;t do it</div>
            <div className="f-chips">
              <span>🐛 errors</span>
              <span>📥 inbox</span>
              <span>📈 metrics</span>
              <span>🔀 PRs</span>
            </div>
            <div className="f-pill f-pill-orch">prioritise → dispatch</div>
            <div className="f-note center">
              one task per lane,
              <br />
              lanes never touch
            </div>
            <div className="f-pill f-pill-ver">✍ writes state + logs</div>
          </div>

          <div className="fcard f-lane stage" style={card('exec', '-6s', 300, 108, 200, 88)}>
            <span className="f-lane-tag">support · inbox</span>
            <div className="f-role" style={{ color: 'var(--c-exec)' }}>
              <span className="ic">📦</span>Executor
            </div>
            <div className="f-sub" style={{ color: 'var(--c-exec)' }}>
              draft replies · isolated
            </div>
          </div>
          <div className="fcard f-lane stage" style={card('exec', '-6s', 300, 216, 200, 88)}>
            <span className="f-lane-tag">data · metrics</span>
            <div className="f-role" style={{ color: 'var(--c-exec)' }}>
              <span className="ic">📦</span>Executor
            </div>
            <div className="f-sub" style={{ color: 'var(--c-exec)' }}>
              scan metrics · read-only
            </div>
          </div>
          <div className="fcard f-lane stage" style={card('exec', '-6s', 300, 324, 200, 88)}>
            <span className="f-lane-tag">engineering · errors</span>
            <div className="f-role" style={{ color: 'var(--c-exec)' }}>
              <span className="ic">📦</span>Executor
            </div>
            <div className="f-sub" style={{ color: 'var(--c-exec)' }}>
              fix in a git worktree
            </div>
          </div>
          <div className="fcard f-lane stage" style={card('exec', '-6s', 300, 432, 200, 88)}>
            <span className="f-lane-tag">finance / legal</span>
            <div className="f-role" style={{ color: 'var(--c-exec)' }}>
              <span className="ic">📦</span>Executor
            </div>
            <div className="f-sub" style={{ color: 'var(--c-exec)' }}>
              read clauses · isolated
            </div>
          </div>

          <div className="fcard f-ver stage" style={card('ver', '-4s', 548, 108, 212, 88)}>
            <div className="f-role" style={{ color: 'var(--c-ver)' }}>
              <span className="ic">🛡️</span>Verifier
            </div>
            <div className="f-sub">tone + facts · ✅ checked</div>
          </div>
          <div className="fcard f-ver stage" style={card('ver', '-4s', 548, 216, 212, 88)}>
            <div className="f-role" style={{ color: 'var(--c-ver)' }}>
              <span className="ic">🛡️</span>Verifier
            </div>
            <div className="f-sub">&gt; 2σ vs 14-day · 📊</div>
          </div>
          <div className="fcard f-ver stage" style={card('ver', '-4s', 548, 324, 212, 88)}>
            <div className="f-role" style={{ color: 'var(--c-ver)' }}>
              <span className="ic">🛡️</span>Verifier
            </div>
            <div className="f-sub">tests pass · 🎬 screenshot</div>
          </div>
          <div className="fcard f-ver stage" style={card('ver', '-4s', 548, 432, 212, 88)}>
            <div className="f-role" style={{ color: 'var(--c-ver)' }}>
              <span className="ic">🛡️</span>Verifier
            </div>
            <div className="f-sub">vs clause library · 📑</div>
          </div>

          <div className="fcard f-pr stage" style={card('ver', '-2s', 806, 108, 132, 88)}>
            <div className="f-role">✉ drafts ready</div>
            <div className="f-sub">you hit send</div>
          </div>
          <div className="fcard f-pr stage" style={card('ver', '-2s', 806, 216, 132, 88)}>
            <div className="f-role">🚩 anomaly flagged</div>
            <div className="f-sub">human reviews</div>
          </div>
          <div className="fcard f-pr stage" style={card('ver', '-2s', 806, 324, 132, 88)}>
            <div className="f-role">✓ PR + proof</div>
            <div className="f-sub">approve in seconds</div>
          </div>
          <div className="fcard f-pr stage" style={card('ver', '-2s', 806, 432, 132, 88)}>
            <div className="f-role">⚖ risks flagged</div>
            <div className="f-sub">a lawyer decides</div>
          </div>
        </div>
      </div>
    </div>
  );
}
