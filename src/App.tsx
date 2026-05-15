import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  FileText,
  Hourglass,
  Pause,
  Play,
  ScanLine,
} from "lucide-react";
import { slides, type Slide } from "./slides";

const TALK_TIMER_SECONDS = 30 * 60;
const TIMER_START_INDEX = 2;
const TIMER_STOP_INDEX = 37;

function clampSlide(index: number, slideCount = slides.length) {
  return Math.min(Math.max(index, 0), slideCount - 1);
}

function BulletContent({ bullet, slide }: { bullet: string; slide: Slide }) {
  if (slide.id === "about-me" && bullet.includes("npm")) {
    const [before, after] = bullet.split("npm");

    return (
      <>
        {before}
        <span className="npm-logo-mark" role="img" aria-label="npm logo">
          npm
        </span>
        {after}
      </>
    );
  }

  return bullet;
}

type FallingCodeBlock = {
  column: number;
  height: number;
  row: number;
  speed: number;
  width: number;
  x: number;
  y: number;
};

type StackedCodeBlock = {
  height: number;
  row: number;
  width: number;
  x: number;
};

function CodeFallCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    let animationFrame = 0;
    let lastTime = performance.now();
    let spawnAccumulator = 0;
    let dumpOffset = 0;
    let dumping = false;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let columns = 24;
    let cellWidth = 64;
    let cellHeight = 15;
    let reservations: number[] = [];
    const falling: FallingCodeBlock[] = [];
    const stacked: StackedCodeBlock[] = [];

    const reset = () => {
      falling.length = 0;
      stacked.length = 0;
      reservations = Array.from({ length: columns }, () => 0);
      dumpOffset = 0;
      dumping = false;
      spawnAccumulator = 0;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.max(14, Math.floor(width / 72));
      cellWidth = width / columns;
      cellHeight = Math.max(12, Math.min(16, height / 70));
      reset();
    };

    const spawnBlock = () => {
      const column = Math.floor(Math.random() * columns);
      const row = reservations[column];
      const blockWidth = 9 + Math.random() * 17;
      const blockHeight = 6 + Math.random() * 6;

      reservations[column] += 1;
      falling.push({
        column,
        height: blockHeight,
        row,
        speed: 135 + Math.random() * 85,
        width: blockWidth,
        x: column * cellWidth + (cellWidth - blockWidth) / 2 + (Math.random() - 0.5) * 9,
        y: -24 - Math.random() * 140,
      });
    };

    const drawBlock = (block: StackedCodeBlock | FallingCodeBlock, y: number, alpha = 1) => {
      const glow = context.createLinearGradient(block.x, y, block.x + block.width, y + block.height);
      glow.addColorStop(0, `rgba(35, 124, 255, ${0.5 * alpha})`);
      glow.addColorStop(1, `rgba(83, 215, 255, ${0.82 * alpha})`);

      context.fillStyle = glow;
      context.shadowColor = `rgba(72, 185, 255, ${0.42 * alpha})`;
      context.shadowBlur = 8;
      context.fillRect(block.x, y, block.width, block.height);
      context.shadowBlur = 0;

      context.fillStyle = `rgba(211, 246, 255, ${0.62 * alpha})`;
      context.fillRect(block.x + 2, y + 2, Math.max(3, block.width * 0.44), 1);
      context.fillRect(block.x + 2, y + block.height - 3, Math.max(2, block.width * 0.28), 1);
    };

    const draw = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      context.clearRect(0, 0, width, height);
      context.fillStyle = "#000";
      context.fillRect(0, 0, width, height);

      const floorY = height - 10 + dumpOffset;
      context.strokeStyle = dumping ? "rgba(53, 181, 255, 0.18)" : "rgba(53, 181, 255, 0.32)";
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(width * 0.08, floorY);
      context.lineTo(width * 0.92, floorY);
      context.stroke();

      if (!dumping) {
        spawnAccumulator += delta;
        while (spawnAccumulator > 0.026) {
          spawnBlock();
          spawnAccumulator -= 0.026;
        }

        const maxRows = Math.floor((height - 36) / cellHeight);
        if (Math.max(...reservations) >= maxRows) {
          dumping = true;
        }
      } else {
        dumpOffset += delta * 430;
      }

      for (const block of stacked) {
        const y = height - 12 - (block.row + 1) * cellHeight + dumpOffset;
        drawBlock(block, y, dumping ? 0.74 : 0.86);
      }

      for (let index = falling.length - 1; index >= 0; index -= 1) {
        const block = falling[index];
        const targetY = height - 12 - (block.row + 1) * cellHeight;

        if (!dumping) {
          block.y += block.speed * delta;
        }

        const y = dumping ? block.y + dumpOffset : Math.min(block.y, targetY);
        drawBlock(block, y, dumping ? 0.7 : 1);

        if (!dumping && block.y >= targetY) {
          stacked.push({
            height: block.height,
            row: block.row,
            width: block.width,
            x: block.x,
          });
          falling.splice(index, 1);
        }
      }

      if (dumping && dumpOffset > height + 120) {
        reset();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas className="code-fall-canvas" ref={canvasRef} aria-hidden="true" />;
}

function SlideVisual({ slide, motionEnabled }: { slide: Slide; motionEnabled: boolean }) {
  const isBlack = slide.variant === "black";
  const isStartSlide = slide.id === "blank-start";
  const isEndSlide = slide.id === "blank-end";
  const useSlideBackground = slide.backgroundImage && slide.id !== "title" && slide.id !== "qa";

  return (
    <section
      className={[
        "slide",
        `slide-${slide.variant}`,
        useSlideBackground ? "has-generated-bg" : "",
        motionEnabled ? "motion-on" : "motion-off",
        isBlack ? "is-black" : "",
      ].join(" ")}
      style={
        useSlideBackground
          ? ({ "--slide-bg": `url(${slide.backgroundImage})` } as CSSProperties)
          : undefined
      }
      aria-label={slide.title ?? "Blank black slide"}
    >
      {isStartSlide && <CodeFallCanvas />}
      {isEndSlide && (
        <>
          <div className="ooze-bed" aria-hidden="true">
            {Array.from({ length: 42 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="fin-mark">Thank you.</div>
        </>
      )}
      {!isBlack && (
        <>
          <div className="backdrop" aria-hidden="true">
            <div className="grid-plane" />
            <div className="data-rain" />
            <div className="scanlines" />
            <div className="ambient-node node-a" />
            <div className="ambient-node node-b" />
            <div className="ambient-node node-c" />
          </div>
          <div className="slide-shell">
            <div className="slide-copy">
              {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
              {slide.title && <h1>{slide.title}</h1>}
              {slide.subtitle && <p className="subtitle">{slide.subtitle}</p>}
              {slide.bullets && (
                <ul className="bullets">
                  {slide.bullets.map((bullet) => (
                    <li key={bullet}>
                      <BulletContent bullet={bullet} slide={slide} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <SlidePanel slide={slide} />
            {slide.footer && <p className="slide-footer">{slide.footer}</p>}
          </div>
        </>
      )}
    </section>
  );
}

function SlidePanel({ slide }: { slide: Slide }) {
  const usePanelImage = (slide.id === "title" || slide.id === "qa") && slide.backgroundImage;

  return (
    <div
      className={usePanelImage ? "visual-panel title-image-panel" : "visual-panel"}
      style={
        usePanelImage
          ? ({ "--panel-bg": `url(${slide.backgroundImage})` } as CSSProperties)
          : undefined
      }
      aria-hidden="true"
    >
      <div className="panel-header">
        <span />
        <span />
        <span />
      </div>
      <div className="panel-body">
        {slide.id === "slop-anatomy" ? (
          <div className="slop-cannon-scene">
            <div className="developer-operator">
              <span className="operator-head" />
              <span className="operator-body" />
              <span className="operator-arm arm-top" />
              <span className="operator-arm arm-bottom" />
            </div>
            <div className="slop-cannon">
              <span className="cannon-stock" />
              <span className="cannon-body" />
              <span className="cannon-barrel" />
              <span className="cannon-nozzle" />
            </div>
            <div className="slop-stream">
              {["LGTM", "TODO", "any", "mock", "dep", "pass"].map((token) => (
                <span key={token}>{token}</span>
              ))}
            </div>
            <div className="repo-target">
              <span>PR</span>
              <span>CI</span>
              <span>PROD?</span>
            </div>
          </div>
        ) : slide.id === "maslow" ? (
          <div className="maslow-pyramid">
            {["SELF-ACTUALIZATION", "ESTEEM", "LOVE / BELONGING", "SAFETY", "PHYSIOLOGICAL"].map(
              (need) => (
                <span key={need}>{need}</span>
              ),
            )}
          </div>
        ) : slide.variant === "about" ? (
          <div className="timeline-map">
            {["INFRA", "SRE", "BANKING", "SECURITY", "AI"].map((milestone) => (
              <span key={milestone}>{milestone}</span>
            ))}
          </div>
        ) : slide.variant === "race" ? (
          <div className="race-dashboard">
            {[
              ["VELOCITY", "+43%"],
              ["HEADCOUNT", "-18%"],
              ["WINDOW", "SHRINKING"],
              ["REVIEW", "SATURATED"],
            ].map(([label, value]) => (
              <span key={label}>
                <strong>{value}</strong>
                {label}
              </span>
            ))}
          </div>
        ) : slide.variant === "gates" || slide.variant === "closing" ? (
          <div className="gate-diagram">
            {["QUALITY", "TESTS", "ARCH", "SEC"].map((gate) => (
              <div className="gate" key={gate}>
                {gate}
              </div>
            ))}
          </div>
        ) : slide.variant === "quality" || slide.variant === "manual" ? (
          <div className="manual-doc">
            <div className="manual-title">CLAUDE.md</div>
            {["ASSUMPTIONS", "BOUNDARIES", "COMMANDS", "TESTS", "REVIEW"].map((section) => (
              <span key={section}>{section}</span>
            ))}
          </div>
        ) : slide.variant === "llm" ? (
          <div className="model-core">
            <span className="core-node" />
            {["TOKENS", "WEIGHTS", "PROBABILITY", "CONTEXT", "OUTPUT"].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        ) : slide.variant === "workflow" ? (
          <div className="workflow-lane">
            {["PLAN", "SCOPE", "BUILD", "VERIFY", "RESET"].map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
        ) : slide.variant === "poll" ? (
          <div className="poll-board">
            {["COMPLETION", "AGENT", "HOSTED", "PRIVATE", "LOCAL"].map((choice) => (
              <span key={choice}>{choice}</span>
            ))}
          </div>
        ) : slide.variant === "review" ? (
          <div className="bottleneck-flow">
            <div className="flow-lane incoming">
              {["GEN", "GEN", "GEN", "GEN", "GEN"].map((label, index) => (
                <span key={`${label}-${index}`}>{label}</span>
              ))}
            </div>
            <div className="flow-gate">PR REVIEW</div>
            <div className="flow-gate release">SHIP</div>
            <div className="relief-controls">
              {["PRECISION", "REFINE", "OBSERVE", "TOOL", "AUTO"].map((control) => (
                <span key={control}>{control}</span>
              ))}
            </div>
          </div>
        ) : slide.variant === "pressure" ? (
          <div className="pressure-map">
            {["FEAR", "RIF", "OUTPUT", "REVIEW RISK"].map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        ) : slide.variant === "tests" ? (
          <div className="probe-map">
            <span className="probe p1" />
            <span className="probe p2" />
            <span className="probe p3" />
            <span className="dead-zone">happy path only</span>
          </div>
        ) : slide.variant === "ui-feedback" ? (
          <div className="feedback-loop">
            {["UI", "DOM", "MCP", "AI", "TESTS"].map((node) => (
              <span key={node}>{node}</span>
            ))}
          </div>
        ) : slide.variant === "architecture" ? (
          <div className="architecture-map">
            <span>UI</span>
            <span>API</span>
            <span>DOMAIN</span>
            <span>DATA</span>
          </div>
        ) : slide.variant === "observability" ? (
          <div className="observability-wall">
            {["TRACE", "LOG", "METRIC", "ERROR", "USER FLOW", "ESCAPE"].map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        ) : slide.variant === "runbook" ? (
          <div className="runbook-list">
            {["SCOPE", "MANUAL", "TESTS", "QA", "OBSERVE", "RETRO"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : slide.variant === "agents" ? (
          <div className="agent-grid">
            {["PR", "QA", "SEC", "DOCS", "TEST", "HUMAN"].map((agent) => (
              <span key={agent}>{agent}</span>
            ))}
          </div>
        ) : slide.variant === "cost" ? (
          <div className="cost-meter">
            {["TOKENS", "RETRIES", "FAN-OUT", "GPU", "REVIEW"].map((cost) => (
              <span key={cost}>{cost}</span>
            ))}
          </div>
        ) : slide.variant === "types" ? (
          <div className="type-grid">
            {["string", "Result<T>", "never", "interface", "enum", "compile error"].map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        ) : slide.variant === "security" ? (
          <div className="risk-stack">
            {["SECRET", "INJECTION", "DEPENDENCY", "PERMISSION"].map((risk) => (
              <span key={risk}>{risk}</span>
            ))}
          </div>
        ) : (
          <div className="diff-stack">
            {Array.from({ length: 10 }, (_, index) => (
              <span key={index} className={index % 3 === 0 ? "warn" : ""} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function App() {
  const [current, setCurrent] = useState(0);
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [notesOpen, setNotesOpen] = useState(false);
  const [timerStartedAt, setTimerStartedAt] = useState<number | null>(null);
  const [timerRemainingSeconds, setTimerRemainingSeconds] = useState(TALK_TIMER_SECONDS);
  const slideCount = slides.length;
  const slide = slides[current];
  const showTalkTimer = current >= TIMER_START_INDEX && current <= TIMER_STOP_INDEX;
  const timerMinutes = Math.max(0, Math.ceil(timerRemainingSeconds / 60));
  const timerFill = `${(timerRemainingSeconds / TALK_TIMER_SECONDS) * 100}%`;

  const goTo = useCallback((index: number) => {
    setCurrent(clampSlide(index, slideCount));
  }, [slideCount]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const previous = useCallback(() => goTo(current - 1), [current, goTo]);

  const progress = useMemo(() => {
    return `${((current + 1) / slideCount) * 100}%`;
  }, [current, slideCount]);

  useEffect(() => {
    if (current === 0 || current === slideCount - 1) {
      setTimerStartedAt(null);
      setTimerRemainingSeconds(TALK_TIMER_SECONDS);
      return;
    }

    if (current >= TIMER_STOP_INDEX) {
      setTimerStartedAt(null);
      return;
    }

    if (current >= TIMER_START_INDEX && timerStartedAt === null) {
      setTimerStartedAt(Date.now() - (TALK_TIMER_SECONDS - timerRemainingSeconds) * 1000);
    }
  }, [current, slideCount, timerRemainingSeconds, timerStartedAt]);

  useEffect(() => {
    if (timerStartedAt === null) {
      return;
    }

    const updateTimer = () => {
      const elapsedSeconds = Math.floor((Date.now() - timerStartedAt) / 1000);
      const nextRemaining = Math.max(0, TALK_TIMER_SECONDS - elapsedSeconds);

      setTimerRemainingSeconds(nextRemaining);

      if (nextRemaining === 0) {
        setTimerStartedAt(null);
      }
    };

    updateTimer();
    const interval = window.setInterval(updateTimer, 1000);

    return () => window.clearInterval(interval);
  }, [timerStartedAt]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        setCurrent((value) => clampSlide(value + 1, slideCount));
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        setCurrent((value) => clampSlide(value - 1, slideCount));
      }
      if (event.key.toLowerCase() === "m") {
        setMotionEnabled((value) => !value);
      }
      if (event.key.toLowerCase() === "n") {
        setNotesOpen((value) => !value);
      }
      if (event.key.toLowerCase() === "f") {
        void document.documentElement.requestFullscreen?.();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [slideCount]);

  return (
    <main className="app">
      <div className="stage">
        <SlideVisual slide={slide} motionEnabled={motionEnabled} />
      </div>

      <div className="progress" aria-hidden="true">
        <span style={{ width: progress }} />
      </div>

      {showTalkTimer && (
        <div
          className="talk-timer"
          style={{ "--timer-fill": timerFill } as CSSProperties}
          aria-label={`${timerMinutes} minutes left`}
        >
          <span className="hourglass-shell" aria-hidden="true">
            <Hourglass size={20} strokeWidth={2.2} />
            <span className="hourglass-fill" />
          </span>
          <span>{timerMinutes}</span>
        </div>
      )}

      <nav className="controls" aria-label="Presentation controls">
        <button type="button" onClick={previous} aria-label="Previous slide" disabled={current === 0}>
          <ChevronLeft size={22} />
        </button>
        <div className="slide-count">
          {current + 1} / {slideCount}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          disabled={current === slideCount - 1}
        >
          <ChevronRight size={22} />
        </button>
        <button
          type="button"
          onClick={() => setMotionEnabled((value) => !value)}
          aria-label={motionEnabled ? "Pause slide motion" : "Resume slide motion"}
        >
          {motionEnabled ? <Pause size={19} /> : <Play size={19} />}
        </button>
        <button
          type="button"
          onClick={() => setNotesOpen((value) => !value)}
          aria-label="Toggle speaker notes"
          aria-pressed={notesOpen}
        >
          <FileText size={19} />
        </button>
        <button
          type="button"
          onClick={() => void document.documentElement.requestFullscreen?.()}
          aria-label="Enter fullscreen"
        >
          <Expand size={19} />
        </button>
      </nav>

      <aside className={notesOpen ? "notes open" : "notes"} aria-live="polite">
        <div className="notes-heading">
          <ScanLine size={16} />
          <span>Slide brief</span>
        </div>
        <p>{slide.speakerNote ?? "No speaker note yet."}</p>
        {slide.videoPrompt && (
          <>
            <h2>Looped video direction</h2>
            <p>{slide.videoPrompt}</p>
          </>
        )}
        {slide.staticFallback && (
          <>
            <h2>Static fallback</h2>
            <p>{slide.staticFallback}</p>
          </>
        )}
      </aside>
    </main>
  );
}
