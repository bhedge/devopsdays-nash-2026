import { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  FileText,
  Pause,
  Play,
  ScanLine,
} from "lucide-react";
import { slides, type Slide } from "./slides";

function clampSlide(index: number) {
  return Math.min(Math.max(index, 0), slides.length - 1);
}

function SlideVisual({ slide, motionEnabled }: { slide: Slide; motionEnabled: boolean }) {
  const isBlack = slide.variant === "black";

  return (
    <section
      className={[
        "slide",
        `slide-${slide.variant}`,
        slide.backgroundImage ? "has-generated-bg" : "",
        motionEnabled ? "motion-on" : "motion-off",
        isBlack ? "is-black" : "",
      ].join(" ")}
      style={
        slide.backgroundImage
          ? ({ "--slide-bg": `url(${slide.backgroundImage})` } as CSSProperties)
          : undefined
      }
      aria-label={slide.title ?? "Blank black slide"}
    >
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
                    <li key={bullet}>{bullet}</li>
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
  return (
    <div className="visual-panel" aria-hidden="true">
      <div className="panel-header">
        <span />
        <span />
        <span />
      </div>
      <div className="panel-body">
        {slide.variant === "gates" || slide.variant === "closing" ? (
          <div className="gate-diagram">
            {["QUALITY", "TESTS", "ARCH", "SEC"].map((gate) => (
              <div className="gate" key={gate}>
                {gate}
              </div>
            ))}
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
  const slide = slides[current];

  const goTo = useCallback((index: number) => {
    setCurrent(clampSlide(index));
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const previous = useCallback(() => goTo(current - 1), [current, goTo]);

  const progress = useMemo(() => {
    return `${((current + 1) / slides.length) * 100}%`;
  }, [current]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        setCurrent((value) => clampSlide(value + 1));
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        setCurrent((value) => clampSlide(value - 1));
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
  }, []);

  return (
    <main className="app">
      <div className="stage">
        <SlideVisual slide={slide} motionEnabled={motionEnabled} />
      </div>

      <div className="progress" aria-hidden="true">
        <span style={{ width: progress }} />
      </div>

      <nav className="controls" aria-label="Presentation controls">
        <button type="button" onClick={previous} aria-label="Previous slide" disabled={current === 0}>
          <ChevronLeft size={22} />
        </button>
        <div className="slide-count">
          {current + 1} / {slides.length}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          disabled={current === slides.length - 1}
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
