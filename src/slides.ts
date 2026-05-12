export type SlideVariant =
  | "black"
  | "title"
  | "pipeline"
  | "diagnostic"
  | "pressure"
  | "review"
  | "gates"
  | "quality"
  | "tests"
  | "architecture"
  | "security"
  | "audit"
  | "judgment"
  | "tooling"
  | "observability"
  | "ui-feedback"
  | "types"
  | "runbook"
  | "closing"
  | "terminal";

export type Slide = {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  bullets?: string[];
  footer?: string;
  variant: SlideVariant;
  backgroundImage?: string;
  videoPrompt?: string;
  staticFallback?: string;
  speakerNote?: string;
};

export const slides: Slide[] = [
  {
    id: "blank-start",
    variant: "black",
    staticFallback: "Pure black pre-roll slide.",
    speakerNote: "Use as the setup state before the talk starts.",
  },
  {
    id: "title",
    eyebrow: "DevOpsDays Nashville 2026",
    title: "AI Slop Wrangling",
    subtitle: "Reining In Control When Developers Are Armed With A.I. Slop Cannons",
    bullets: ["Brandon Hedge"],
    footer: "How pressure turns AI assistance into unchecked output",
    variant: "title",
    backgroundImage: "/images/title-war-room.png",
    videoPrompt:
      "A restrained cyberpunk engineering war room: black glass consoles, dim cyan and amber warning telemetry, pull request diffs, and a stylized slop cannon silhouette aimed at a repo pipeline. Dark, cinematic, dystopian, not cartoonish.",
    staticFallback:
      "Still title card from the same war-room scene with clean typography and high readability.",
    speakerNote:
      "Set the premise: AI coding assistants are useful, but unmanaged pressure turns them into high-volume slop cannons.",
  },
  {
    id: "cannon-loaded",
    eyebrow: "Root cause",
    title: "The cannon gets loaded before the prompt",
    bullets: [
      "Developer fear changes incentives.",
      "Teams under pressure optimize for visible output.",
      "Reduced staffing makes automation feel mandatory.",
      "The result is code volume without matching ownership.",
    ],
    variant: "pressure",
    videoPrompt:
      "Dark office command floor after a reduction in force: empty desks, glowing task queues, anxious delivery metrics, and an AI console loading generated code into a pipeline. No people close-up, no melodrama.",
    staticFallback:
      "Dystopian delivery dashboard showing fear, pressure, reduced capacity, and output volume as linked signals.",
    speakerNote:
      "Name the human system first. Slop is not only a tooling problem; it is also a pressure and incentive problem.",
  },
  {
    id: "maslow",
    eyebrow: "Why people overuse it",
    title: "Maslow beats maturity models",
    bullets: [
      "If safety feels threatened, people reach for leverage.",
      "AI becomes a way to look productive, responsive, and safe.",
      "The behavior is rational, even when the output is risky.",
    ],
    variant: "diagnostic",
    videoPrompt:
      "A dark hierarchy diagram rendered as industrial control layers: safety at the bottom pulsing amber, esteem and achievement above it, all overlaid with generated-code telemetry.",
    staticFallback:
      "Maslow-inspired hierarchy mapped to engineering behavior under AI pressure.",
    speakerNote:
      "Connect fear and job security to the temptation to generate more code than the team can understand.",
  },
  {
    id: "slop-anatomy",
    eyebrow: "Failure mode",
    title: "Slop looks useful until it compounds",
    bullets: [
      "Plausible code that nobody really read.",
      "Fake-green tests that mirror the implementation.",
      "Leaky abstractions and parallel patterns.",
      "Dependencies pulled in because they were convenient.",
    ],
    variant: "diagnostic",
    videoPrompt:
      "A clean green CI screen glitches to reveal hidden layers: unread code, fake-green tests, abstraction leaks, dependency sprawl, and production risk.",
    staticFallback:
      "Split diagnostic panel: green checks on top, hidden compounding risks underneath.",
    speakerNote:
      "AI slop is dangerous because it presents as progress during casual review.",
  },
  {
    id: "focus-nozzle",
    eyebrow: "Operating principle",
    title: "Focus the nozzle before you increase pressure",
    bullets: [
      "Define where AI is allowed to work.",
      "Constrain the shape of acceptable output.",
      "Make feedback fast, local, and objective.",
      "Keep humans responsible for architecture.",
    ],
    variant: "gates",
    videoPrompt:
      "A heavy industrial nozzle narrows from a chaotic spray of generated code into a controlled beam passing through labeled engineering gates. Dark cyberpunk machinery, amber hazard markings, cyan telemetry.",
    staticFallback:
      "Controlled-nozzle diagram showing AI output narrowed by rules, tests, architecture, and feedback.",
    speakerNote:
      "Shift from cause to solution: do not ban the tool, shape its operating envelope.",
  },
  {
    id: "claude-md",
    eyebrow: "Instruction layer",
    title: "Give the model a real operating manual",
    bullets: [
      "Use a strong `CLAUDE.md` or equivalent project guide.",
      "Document architecture, commands, style, testing, and review expectations.",
      "Put sharp boundaries in writing before asking for changes.",
      "Treat prompts as part of engineering governance.",
    ],
    variant: "quality",
    videoPrompt:
      "A project rulebook file opens on a dark terminal wall while generated code is redirected through documented commands, architecture boundaries, and review rules.",
    staticFallback:
      "Terminal-style `CLAUDE.md` slide with sections for architecture, commands, tests, style, and forbidden areas.",
    speakerNote:
      "A Karpathy-style project instruction file is a practical way to keep AI output aligned with the repo.",
  },
  {
    id: "pick-ui-first",
    eyebrow: "Scope control",
    title: "Pick one use case first",
    subtitle: "Start with UI work, not the database.",
    bullets: [
      "UI changes are easier to inspect visually.",
      "The blast radius is usually easier to contain.",
      "Feedback loops can be shorter.",
      "Data correctness and migrations need stricter human control.",
    ],
    variant: "ui-feedback",
    videoPrompt:
      "A UI preview panel is lit cyan while a database core is locked behind amber warning rails. Generated changes are routed only to the UI lane.",
    staticFallback:
      "Two-lane diagram: UI lane open for AI-assisted work, database lane locked for human-planned changes.",
    speakerNote:
      "Make adoption incremental. Choose an area where mistakes are visible and reversible before letting AI touch deeper system state.",
  },
  {
    id: "valid-tests",
    eyebrow: "Proof layer",
    title: "Write valid tests, not fake green",
    bullets: [
      "Tests should assert important behavior, not implementation trivia.",
      "Generated tests need human review like production code.",
      "Check edge cases, failure modes, and contract boundaries.",
      "Validate that coverage maps to logic that matters.",
    ],
    variant: "tests",
    videoPrompt:
      "Test probes move through a system map; fake-green probes stop at shallow paths while valid tests reach critical logic and failure branches.",
    staticFallback:
      "Behavior coverage map separating fake-green tests from meaningful tests.",
    speakerNote:
      "The test question is not whether tests exist. It is whether they would fail for the bugs you actually care about.",
  },
  {
    id: "qa-regression",
    eyebrow: "Verification layer",
    title: "Automate QA and regression checks",
    bullets: [
      "Run checks every time generated output changes the product.",
      "Prefer repeatable browser and API flows over manual vibes.",
      "Capture screenshots, traces, and diffs.",
      "Make regressions visible before review fatigue sets in.",
    ],
    variant: "audit",
    videoPrompt:
      "Automated QA drones sweep a dark product interface, collecting screenshots, visual diffs, API checks, and regression signals into a review console.",
    staticFallback:
      "QA pipeline diagram showing browser checks, API checks, visual diffs, and review artifacts.",
    speakerNote:
      "Automation should reduce the amount of trust reviewers need to place in generated changes.",
  },
  {
    id: "logging-observability",
    eyebrow: "Runtime feedback",
    title: "Great logging makes slop observable",
    bullets: [
      "Log the decisions that matter.",
      "Expose state transitions and failure reasons.",
      "Trace user journeys through generated code paths.",
      "Use production reality to improve the gates.",
    ],
    variant: "observability",
    videoPrompt:
      "A production observability wall shows traces, structured logs, error clusters, and user journeys over a dark city-grid network.",
    staticFallback:
      "Observability dashboard connecting logs, traces, metrics, and generated code paths.",
    speakerNote:
      "You cannot control what you cannot see. Logging is part of making AI-generated work operable.",
  },
  {
    id: "ai-sees-ui",
    eyebrow: "Feedback loop",
    title: "Help AI see the UI",
    bullets: [
      "Give the model structured feedback from the running app.",
      "Use MCP or wrappers around the UI to report DOM state, screenshots, errors, and interactions.",
      "Close the loop between generated code and observed behavior.",
    ],
    variant: "ui-feedback",
    videoPrompt:
      "An AI workbench receives screenshot, DOM, console error, and interaction telemetry from a running UI, then routes fixes back through tests.",
    staticFallback:
      "Feedback-loop diagram: UI runtime to MCP wrapper to AI assistant to tests to review.",
    speakerNote:
      "If the model only sees files, it guesses. Better feedback helps it correct UI work with evidence.",
  },
  {
    id: "human-architecture",
    eyebrow: "Human responsibility",
    title: "Humans still own architecture",
    bullets: [
      "Plan the work before generating code.",
      "Define module boundaries and contracts.",
      "Sequence changes so review remains possible.",
      "Use AI inside the plan, not instead of the plan.",
    ],
    variant: "architecture",
    videoPrompt:
      "A human-authored architecture map sits above an automated code pipeline; generated code can move only through approved module boundaries.",
    staticFallback:
      "Architecture-first workflow: plan, boundaries, contracts, generated implementation, review.",
    speakerNote:
      "AI can fill in work, but it should not decide the system shape by accident.",
  },
  {
    id: "write-modules",
    eyebrow: "Dependency discipline",
    title: "Be willing to write the small module",
    bullets: [
      "Not every problem needs another package.",
      "A simple local module can be easier to audit and own.",
      "Generated dependency choices need skepticism.",
      "Open source is powerful, but transitive risk is real.",
    ],
    variant: "security",
    videoPrompt:
      "A dependency graph expands into a tangled network, then collapses into one small well-lit local module with clear tests and ownership.",
    staticFallback:
      "Dependency decision panel comparing package pull-in versus local module.",
    speakerNote:
      "AI often reaches for the open source world of code. Sometimes the safer answer is to write the boring module yourself.",
  },
  {
    id: "typed-languages",
    eyebrow: "Constraint layer",
    title: "Make invalid shapes harder to ship",
    bullets: [
      "Strong types turn some mistakes into compiler errors.",
      "Go, Rust, and TypeScript give AI tighter rails.",
      "Types do not replace review, but they improve the feedback loop.",
    ],
    variant: "types",
    videoPrompt:
      "Generated code travels through a type-checking grid; malformed shapes are rejected as compiler diagnostics while valid shapes continue to review.",
    staticFallback:
      "Compiler-gate diagram showing type errors catching invalid generated code shapes.",
    speakerNote:
      "A strongly typed language is one more way to focus the nozzle before output reaches production.",
  },
  {
    id: "operating-model",
    eyebrow: "Operating model",
    title: "Keep the velocity. Narrow the blast radius.",
    bullets: [
      "Start with one allowed area.",
      "Write the operating manual.",
      "Demand real tests and automated regression checks.",
      "Instrument the runtime.",
      "Keep architecture human-led.",
      "Improve the controls after every escape.",
    ],
    variant: "runbook",
    videoPrompt:
      "A control-room runbook updates from unmanaged generation to operated AI delivery while risk indicators stabilize and the nozzle stays focused.",
    staticFallback:
      "Runbook checklist with status indicators for scope, instructions, tests, QA, observability, architecture, and feedback.",
    speakerNote:
      "This is the actionable close: the answer is not panic or blind trust. It is operated AI delivery.",
  },
  {
    id: "closing-thesis",
    eyebrow: "Closing thesis",
    title: "The slop cannon is an incentive problem with a tooling interface",
    subtitle: "Control the pressure, focus the nozzle, and keep humans responsible for the system.",
    bullets: ["Pressure", "Scope", "Tests", "Feedback", "Architecture"],
    variant: "closing",
    videoPrompt:
      "The slop cannon powers down into a controlled engineering instrument. A dark pipeline settles into a steady cyan pulse with amber control labels.",
    staticFallback:
      "Large closing thesis over a darkened delivery pipeline with pressure, scope, tests, feedback, and architecture labels.",
    speakerNote:
      "End with the core point: teams need both psychological safety and engineering controls.",
  },
  {
    id: "qa",
    eyebrow: "DevOpsDays Nashville 2026",
    title: "Questions",
    subtitle: "Brandon Hedge",
    bullets: ["Slides and contact details can land here."],
    variant: "terminal",
    videoPrompt:
      "Quiet dystopian terminal idle screen with blinking cursor, slow scanlines, and tiny amber/cyan console indicators.",
    staticFallback: "Terminal-style Q&A screen with high contrast readable text.",
    speakerNote:
      "Leave room to add contact details, a QR code, or conference-required information.",
  },
  {
    id: "blank-end",
    variant: "black",
    staticFallback: "Pure black post-talk slide.",
    speakerNote: "Use as the post-talk state when exiting presentation mode.",
  },
];
