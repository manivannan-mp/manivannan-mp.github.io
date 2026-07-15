// Self-contained loop-cycle SVG, ported verbatim from build-agent-loop/index.html.
// Styling and animation live in build-agent-loop.css (class-based + SMIL).
export default function LoopDiagram() {
  return (
    <div className="loop-viz" role="group" aria-labelledby="loopviz-cap">
      <svg
        viewBox="0 0 720 600"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="The loop cycle: Trigger, Context, Action, Verify, State, Decide — repeating around a central run, with a human review gate for anything sensitive."
      >
        <defs>
          <path
            id="cometPath"
            d="M 360 85 A 165 165 0 0 1 360 415 A 165 165 0 0 1 360 85"
          />
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop className="grad-a" offset="0%" />
            <stop className="grad-b" offset="100%" />
          </linearGradient>
          <radialGradient id="cometGlow">
            <stop className="cg-a" offset="0%" />
            <stop className="cg-b" offset="100%" />
          </radialGradient>
          <radialGradient id="hubGlow">
            <stop className="hg-a" offset="0%" />
            <stop className="hg-b" offset="100%" />
          </radialGradient>
        </defs>

        {/* breathing centre */}
        <circle className="hub-glow" cx="360" cy="250" r="120" />
        <circle
          className="pulse-ring"
          cx="360"
          cy="250"
          r="150"
          style={{ animationDelay: '0s' }}
        />
        <circle
          className="pulse-ring"
          cx="360"
          cy="250"
          r="150"
          style={{ animationDelay: '3s' }}
        />

        {/* orbit track */}
        <circle className="ring-halo" cx="360" cy="250" r="165" />
        <circle className="ring-track" cx="360" cy="250" r="165" />
        <circle className="ring-flow" cx="360" cy="250" r="165" />

        {/* clockwise direction hints */}
        <path className="chev" d="M 541 302 l 12 7 l -4 13" />
        <path className="chev" d="M 179 198 l -12 -7 l 4 -13" />

        {/* travelling comet (core + tail + halo) */}
        <circle className="comet-halo" r="17" fill="url(#cometGlow)">
          <animateMotion dur="12s" repeatCount="indefinite">
            <mpath href="#cometPath" />
          </animateMotion>
        </circle>
        <circle className="comet-spark" r="3" opacity=".4">
          <animateMotion dur="12s" begin="-0.7s" repeatCount="indefinite">
            <mpath href="#cometPath" />
          </animateMotion>
        </circle>
        <circle className="comet-spark" r="4" opacity=".65">
          <animateMotion dur="12s" begin="-0.35s" repeatCount="indefinite">
            <mpath href="#cometPath" />
          </animateMotion>
        </circle>
        <circle className="comet-core" r="5.5">
          <animateMotion dur="12s" repeatCount="indefinite">
            <mpath href="#cometPath" />
          </animateMotion>
        </circle>

        {/* centre hub */}
        <text className="hub-title" x="360" y="245">
          One run
        </text>
        <text className="hub-sub" x="360" y="266">
          state carries into the next
        </text>

        {/* six beats */}
        <g
          className="node"
          style={{ animationDelay: '-12s', transformOrigin: '360px 85px' }}
        >
          <rect className="node-box" x="294" y="58" width="132" height="54" rx="11" />
          <text className="node-label" x="360" y="82">
            1 · Trigger
          </text>
          <text className="node-sub" x="360" y="99">
            timer · event · /loop
          </text>
        </g>
        <g
          className="node"
          style={{ animationDelay: '-10s', transformOrigin: '503px 167px' }}
        >
          <rect className="node-box" x="437" y="140" width="132" height="54" rx="11" />
          <text className="node-label" x="503" y="164">
            2 · Context
          </text>
          <text className="node-sub" x="503" y="181">
            TASK + PROGRESS
          </text>
        </g>
        <g
          className="node"
          style={{ animationDelay: '-8s', transformOrigin: '503px 332px' }}
        >
          <rect className="node-box" x="437" y="305" width="132" height="54" rx="11" />
          <text className="node-label" x="503" y="329">
            3 · Action
          </text>
          <text className="node-sub" x="503" y="346">
            bounded · in scope
          </text>
        </g>
        <g
          className="node"
          style={{ animationDelay: '-6s', transformOrigin: '360px 415px' }}
        >
          <rect className="node-box" x="294" y="388" width="132" height="54" rx="11" />
          <text className="node-label" x="360" y="412">
            4 · Verify
          </text>
          <text className="node-sub" x="360" y="429">
            pass / fail checklist
          </text>
        </g>
        <g
          className="node"
          style={{ animationDelay: '-4s', transformOrigin: '217px 332px' }}
        >
          <rect className="node-box" x="151" y="305" width="132" height="54" rx="11" />
          <text className="node-label" x="217" y="329">
            5 · State
          </text>
          <text className="node-sub" x="217" y="346">
            write memory
          </text>
        </g>
        <g
          className="node"
          style={{ animationDelay: '-2s', transformOrigin: '217px 167px' }}
        >
          <rect className="node-box" x="151" y="140" width="132" height="54" rx="11" />
          <text className="node-label" x="217" y="164">
            6 · Decide
          </text>
          <text className="node-sub" x="217" y="181">
            stop · retry · escalate
          </text>
        </g>

        {/* human review gate */}
        <path className="gate-link" d="M 360 442 V 500" />
        <rect className="gate-box" x="240" y="500" width="240" height="58" rx="12" />
        <text className="gate-title" x="360" y="524">
          Human review gate
        </text>
        <text className="gate-sub" x="360" y="542">
          anything sensitive or irreversible
        </text>
      </svg>
      <p className="loop-cap" id="loopviz-cap">
        Every run is one turn of the same six-beat cycle — and what it learns
        carries into the next.
      </p>
    </div>
  );
}
