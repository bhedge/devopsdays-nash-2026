export type SlideVariant =
  | "black"
  | "title"
  | "about"
  | "race"
  | "pipeline"
  | "diagnostic"
  | "pressure"
  | "review"
  | "gates"
  | "quality"
  | "manual"
  | "llm"
  | "workflow"
  | "poll"
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
  | "agents"
  | "cost"
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
    footer: "Control the pressure. Focus the nozzle. Keep humans responsible.",
    variant: "title",
    backgroundImage: "/images/title-slop-cannon.png",
    videoPrompt:
      "A developer in an office operating an anti-AI slop cannon, blasting bright green AI slop across workstations and code quality warnings.",
    staticFallback:
      "Title card over the anti-AI slop cannon image with clean typography and high readability.",
    speakerNote:
      "Set the premise: AI coding assistants are useful, but unmanaged pressure turns them into high-volume slop cannons.",
  },
  {
    id: "about-me",
    eyebrow: "Context",
    title: "About me",
    bullets: [
      "Nearly 30 years across infrastructure, distributed systems, and engineering leadership.",
      "Neural Payments: AI, data architecture, and PCI security.",
      "Previously CTO at Lineage Bank; Elastic cloud systems; SRE leadership at npm.",
      "I care about resilient systems, usable controls, and teams that can own what they ship.",
    ],
    variant: "about",
    videoPrompt:
      "A restrained technical career timeline rendered as dark system consoles: banking security, cloud infrastructure, SRE, distributed systems, and AI controls connected by cyan telemetry lines.",
    staticFallback:
      "Concise speaker context slide with a technical timeline and high-contrast bullets.",
    speakerNote:
      "Introduce the perspective: deep infrastructure and leadership experience, current AI and security work in a PCI environment, and a focus on systems teams can actually operate.",
  },
  {
    id: "ai-race",
    eyebrow: "Market pressure",
    title: "The AI race is on",
    bullets: [
      "Move fast.",
      "Ship more code in less time.",
      "Do more with fewer people.",
      "Shorten feature windows until review becomes a bottleneck.",
    ],
    variant: "race",
    videoPrompt:
      "A dark delivery command center with sprint clocks, shrinking release windows, output counters, and generated-code streams accelerating toward a guarded repo pipeline.",
    staticFallback:
      "Pressure dashboard showing speed, output, staffing, and release-window compression as linked signals.",
    speakerNote:
      "Start with the business pressure. Most teams are not adopting AI in a calm lab environment; they are adopting it while the delivery clock is already loud.",
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
    eyebrow: "Why capable people overuse it",
    title: "Maslow beats maturity models",
    bullets: [
      "If safety feels threatened, people reach for leverage.",
      "AI becomes a way to look productive, responsive, and safe.",
      "The behavior is rational, even when the output is risky.",
      "Stay relevant. Ship faster. Feed the family.",
    ],
    variant: "diagnostic",
    videoPrompt:
      "A dark hierarchy diagram rendered as industrial control layers: safety at the bottom pulsing amber, esteem and achievement above it, all overlaid with generated-code telemetry.",
    staticFallback:
      "Maslow-inspired hierarchy mapped to engineering behavior under AI pressure.",
    speakerNote:
      "Connect fear and job security to the temptation to generate more code than the team can understand. Developers may be seeing layoffs inside or outside the company, and self-preservation changes the incentives.",
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
      "LGTM approvals that reward volume over understanding.",
    ],
    variant: "diagnostic",
    videoPrompt:
      "A clean green CI screen glitches to reveal hidden layers: unread code, fake-green tests, abstraction leaks, dependency sprawl, and production risk.",
    staticFallback:
      "Split diagnostic panel: green checks on top, hidden compounding risks underneath.",
    speakerNote:
      "AI slop is dangerous because it presents as progress during casual review. The first pass often looks plausible enough to merge.",
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
      "Shift from cause to solution: do not ban the tool. Shape its operating envelope.",
  },
  {
    id: "security-sync",
    eyebrow: "Security control",
    title: "Bring security in early",
    bullets: [
      "Sync with security before agents write production code.",
      "Agents can leak secrets, choose unsafe packages, or widen permissions.",
      "Scan generated changes like any other supply-chain risk.",
      "Measure repeatedly before cutting into critical systems.",
      "Iterate on tests after every escape.",
    ],
    variant: "security",
    videoPrompt:
      "A security operations panel overlays generated code with secret scanning, dependency risk, permission boundaries, and critical-system locks.",
    staticFallback:
      "Security checklist slide with generated-code risks, supply-chain checks, permissions, and test iteration.",
    speakerNote:
      "This keeps the security message explicit: AI assistance does not bypass normal risk controls. If anything, it needs more observable gates.",
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
    id: "where-start",
    eyebrow: "Adoption path",
    title: "Never give production keys to an LLM",
    bullets: [
      "Start where mistakes are visible.",
      "Use test credentials, sandboxes, and scoped throwaway tokens.",
      "Keep the data model and production state guarded.",
      "Automate code deployment as the very last step.",
    ],
    variant: "workflow",
    videoPrompt:
      "A guarded engineering map highlights a small low-risk starting zone while production keys and deployment controls remain behind red and amber locks.",
    staticFallback:
      "Adoption map showing visible, reversible work first, production keys locked away, and deployment automation last.",
    speakerNote:
      "Be blunt here: the first control is credential discipline. Do not give production secrets or production deployment authority to an LLM while you are still learning the operating model.",
  },
  {
    id: "audience-question",
    eyebrow: "Question",
    title: "What are you using today?",
    bullets: [
      "Cursor or code completion?",
      "Claude, Codex, or another coding agent?",
      "Hosted public model?",
      "Private hosted model or local model?",
      "Agents with API budgets?",
    ],
    variant: "poll",
    videoPrompt:
      "A conference-room polling terminal with dark glass controls, cyan selected states, amber unknowns, and tool categories displayed as console toggles.",
    staticFallback:
      "Audience question slide with large readable options for current AI development tools.",
    speakerNote:
      "Use this as an interaction beat. It gives you a read on the room before getting into controls.",
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
    id: "operating-manual",
    eyebrow: "Instruction layer",
    title: "Give the model a real operating manual",
    bullets: [
      "Use a strong CLAUDE.md, AGENTS.md, or equivalent project guide.",
      "Document architecture, commands, style, testing, and review expectations.",
      "Put sharp boundaries in writing before asking for changes.",
      "Treat prompts as part of engineering governance.",
    ],
    variant: "quality",
    videoPrompt:
      "A project rulebook file opens on a dark terminal wall while generated code is redirected through documented commands, architecture boundaries, and review rules.",
    staticFallback:
      "Terminal-style project guide slide with sections for architecture, commands, tests, style, and forbidden areas.",
    speakerNote:
      "A Karpathy-style project instruction file is a practical way to keep AI output aligned with the repo.",
  },
  {
    id: "claude-think",
    eyebrow: "CLAUDE.md",
    title: "Think before coding",
    bullets: [
      "State assumptions explicitly.",
      "If uncertain, ask or name the risk.",
      "Surface tradeoffs instead of picking silently.",
      "Push back when the simpler approach is better.",
    ],
    variant: "manual",
    videoPrompt:
      "A dark terminal document titled CLAUDE.md opens on a glass wall, with caution markers beside assumptions, ambiguity, tradeoffs, and pushback.",
    staticFallback:
      "Document slide showing the Think Before Coding section from the project operating manual.",
    speakerNote:
      "Use this as the first concrete example of turning vague prompting into repo-level operating rules.",
  },
  {
    id: "claude-simplicity",
    eyebrow: "CLAUDE.md",
    title: "Simplicity first",
    bullets: [
      "Minimum code that solves the problem.",
      "No speculative features.",
      "No one-use abstractions.",
      "If 200 lines could be 50, rewrite it.",
    ],
    variant: "manual",
    videoPrompt:
      "A terminal document collapses a sprawling generated diff into a smaller, readable patch while amber warnings clear one by one.",
    staticFallback:
      "Document slide showing the Simplicity First section from the project operating manual.",
    speakerNote:
      "This fights one of the most common AI failure modes: turning a narrow request into a framework.",
  },
  {
    id: "claude-surgical",
    eyebrow: "CLAUDE.md",
    title: "Surgical changes",
    bullets: [
      "Touch only what the task requires.",
      "Match the existing style.",
      "Clean up only the mess your change created.",
      "Every changed line should trace to the request.",
    ],
    variant: "manual",
    videoPrompt:
      "A generated patch is constrained inside a narrow maintenance window, with unrelated files locked behind warning rails.",
    staticFallback:
      "Document slide showing the Surgical Changes section from the project operating manual.",
    speakerNote:
      "This keeps AI from using every request as permission to refactor the neighborhood.",
  },
  {
    id: "claude-goal-driven",
    eyebrow: "CLAUDE.md",
    title: "Goal-driven execution",
    bullets: [
      "Define success criteria before changing code.",
      "Turn bugs into failing tests, then fixes.",
      "Verify each step with a concrete check.",
      "Loop independently until the evidence is clean.",
    ],
    variant: "manual",
    videoPrompt:
      "A terminal plan turns into test runs, browser traces, and build checks on a dark engineering dashboard.",
    staticFallback:
      "Document slide showing the Goal-Driven Execution section from the project operating manual.",
    speakerNote:
      "The goal is not ceremony. Strong success criteria let the assistant work longer without drifting.",
  },
  {
    id: "what-is-llm",
    eyebrow: "Mental model",
    title: "What is an LLM?",
    bullets: [
      "A pile of weights trained to predict tokens.",
      "Statistical inference, not intent.",
      "Powerful pattern matching over enormous context.",
      "Small poisoned or low-quality examples can distort a narrow area.",
    ],
    variant: "llm",
    videoPrompt:
      "An abstract model core made of weighted nodes, token streams, probability bars, and noisy training fragments in a dark cyan-and-amber diagnostic view.",
    staticFallback:
      "Simple LLM overview diagram: training data to weights to token probabilities to generated output.",
    speakerNote:
      "Give the audience a practical mental model. The point is not to dunk on the technology; it is to understand why verification matters.",
  },
  {
    id: "llm-reasoning",
    eyebrow: "Under the hood",
    title: "How an LLM reasons",
    bullets: [
      "Dense models fire next-token completion over billions of parameters per token.",
      "MoE, or mixture of experts, is slightly more efficient.",
      "But LLMs are DUMB!",
    ],
    variant: "llm",
    videoPrompt:
      "A dark reasoning console shows branching strategy paths, uncertainty markers, and verification gates accepting or rejecting generated claims.",
    staticFallback:
      "Reasoning-loop diagram with strategy branches flowing into objective checks.",
    speakerNote:
      "Model reasoning can be useful, but it is not the same as correctness. Treat it as a way to generate candidates that still need checks.",
  },
  {
    id: "plan-plan-plan",
    eyebrow: "Working method",
    title: "Plan. Plan. Plan.",
    bullets: [
      "Refine the plan before writing code.",
      "Make sure the assistant understands the codebase.",
      "Anchor the work in established patterns.",
      "Then write the smallest code that satisfies the plan.",
    ],
    variant: "workflow",
    videoPrompt:
      "A dark engineering planning board shows repeated plan refinement, codebase map inspection, established pattern matching, and then a narrow implementation lane opening.",
    staticFallback:
      "Planning workflow diagram: understand codebase, identify patterns, refine plan, then write code.",
    speakerNote:
      "Slow the assistant down before implementation. A better plan is cheaper than reviewing a confident patch that misunderstood the system.",
  },
  {
    id: "work-with-llm",
    eyebrow: "Working method",
    title: "Work in concise bites",
    bullets: [
      "Do not ask for the whole system in one breath.",
      "Plan the task. Then plan the verification.",
      "Clear context when the problem changes.",
      "Large context helps until it starts confusing the model.",
    ],
    variant: "workflow",
    videoPrompt:
      "A chaotic full-system request is broken into small verified work packets moving through a dark planning board and test console.",
    staticFallback:
      "Workflow slide showing large request, scoped task, plan, implementation, verification, and context reset.",
    speakerNote:
      "Make the practical point: better work units produce better output. More text is not automatically better context.",
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
    title: "There is no excuse not to write tests any longer",
    bullets: [
      "Run checks every time generated output changes the product.",
      "Prefer repeatable browser and API flows over manual vibes.",
      "Capture screenshots, traces, and diffs.",
      "Make regressions visible before review fatigue sets in.",
    ],
    variant: "audit",
    videoPrompt:
      "Automated QA scanners sweep a dark product interface, collecting screenshots, visual diffs, API checks, and regression signals into a review console.",
    staticFallback:
      "QA pipeline diagram showing browser checks, API checks, visual diffs, and review artifacts.",
    speakerNote:
      "Automation should reduce the amount of trust reviewers need to place in generated changes.",
  },
  {
    id: "review-bottleneck",
    eyebrow: "Flow control",
    title: "Review and shipping become the bottleneck",
    bullets: [
      "AI can generate changes faster than teams can understand them.",
      "PR review and release queues become the constraint.",
      "Stacking more work on the bottleneck only increases risk.",
      "Focus on precision, refinement, observability, tooling, and automation.",
    ],
    variant: "review",
    videoPrompt:
      "A dark delivery pipeline narrows at PR review and release gates while generated change packets pile up; precision tools, observability, and automation reroute pressure into controlled flow.",
    staticFallback:
      "Bottleneck diagram showing generated changes stacking at PR review and shipping, with precision, refinement, observability, tooling, and automation as relief controls.",
    speakerNote:
      "Make the capacity point explicit: when generation gets cheap, human review and shipping discipline become the limiting system. Do not just pile more work into that queue.",
  },
  {
    id: "release-gates",
    eyebrow: "Release control",
    title: "Humans still run and use the software",
    bullets: [
      "Control the release gates.",
      "Keep a strong QA and staging test gate.",
      "Do not be afraid to reject code.",
      "Use A/B testing where it fits.",
      "Monitor error rates and establish an error budget.",
      "Be sure you can rollback the code easily.",
      "Developers need to be on call for their slop.",
    ],
    variant: "review",
    videoPrompt:
      "A dark release control room with human-owned QA, staging, A/B testing, error budget, and on-call gates holding back risky generated code before production.",
    staticFallback:
      "Release-gate diagram showing QA, staging, reject, A/B test, error budget, and on-call ownership controls before production.",
    speakerNote:
      "The software is still used by real people and operated by real teams. Reject bad code, measure production impact, and keep ownership attached to the people shipping the change.",
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
      "A production observability wall shows traces, structured logs, error clusters, and user journeys over a dark network map.",
    staticFallback:
      "Observability dashboard connecting logs, traces, metrics, and generated code paths.",
    speakerNote:
      "You cannot control what you cannot see. Logging is part of making AI-generated work operable.",
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
    id: "multi-agent",
    eyebrow: "Scale pattern",
    title: "Work toward a multi-agent strategy",
    bullets: [
      "PR review and skeptical test writing.",
      "QA regression checks with artifacts.",
      "Pipeline and dependency security analysis.",
      "Documentation hygiene.",
      "Agents need roles, budgets, and gates.",
    ],
    variant: "agents",
    videoPrompt:
      "Multiple specialized AI workstations operate in parallel inside a dark control room: PR review, QA, security, documentation, and tests all reporting into a human review console.",
    staticFallback:
      "Multi-agent strategy map with specialized agents feeding controlled review gates.",
    speakerNote:
      "This is where teams can go after the basic controls work: separate personas for separate jobs, with one agent not blindly trusting another.",
  },
  {
    id: "cost",
    eyebrow: "Budget control",
    title: "Watch your cost",
    bullets: [
      "AI is not automatically cheaper than humans.",
      "Frontier models at scale are expensive.",
      "Private hosted models shift cost into capacity planning.",
      "Local models shift cost into hardware and operations.",
      "Measure tokens, retries, agent fan-out, and review time.",
    ],
    variant: "cost",
    videoPrompt:
      "A dark cost operations console shows token meters, agent fan-out, retry loops, GPU capacity, and review time trending against delivery value.",
    staticFallback:
      "Cost dashboard comparing frontier API use, private hosted capacity, local hardware, and human review effort.",
    speakerNote:
      "Bring the budget reality into the room. Automated agents can produce useful work, but uncontrolled loops and fan-out can become expensive fast.",
  },
  {
    id: "summary-pressure",
    eyebrow: "Summary",
    title: "The pressure is real",
    bullets: [
      "Business velocity is rising.",
      "Developer safety concerns change incentives.",
      "Code volume can increase faster than ownership.",
      "The problem starts before the prompt.",
    ],
    variant: "pressure",
    videoPrompt:
      "A dark pressure dashboard connects market speed, developer fear, generated code volume, and ownership gaps into one warning system.",
    staticFallback:
      "Summary dashboard showing pressure, incentives, volume, and ownership as the root cause chain.",
    speakerNote:
      "Restate the root cause before closing: this is not just a model-quality issue. It is pressure moving through a tooling interface.",
  },
  {
    id: "summary-controls",
    eyebrow: "Summary",
    title: "Control the operating envelope",
    bullets: [
      "Protect secrets and production authority.",
      "Start with visible, reversible work.",
      "Use project instructions, tests, types, and security gates.",
      "Make the model see evidence, not vibes.",
    ],
    variant: "gates",
    videoPrompt:
      "A generated-code stream narrows through credential locks, scoped work lanes, project instructions, tests, type checks, security gates, and UI evidence.",
    staticFallback:
      "Control-envelope diagram with secrets, scope, instructions, tests, types, security, and feedback gates.",
    speakerNote:
      "This is the pragmatic control stack. We are not banning the tool; we are defining where and how it can safely operate.",
  },
  {
    id: "summary-operation",
    eyebrow: "Summary",
    title: "Operate AI delivery like a system",
    bullets: [
      "PR review and shipping are capacity constraints.",
      "Invest in precision, refinement, tooling, and automation.",
      "Instrument generated paths in production.",
      "Keep architecture and accountability human-led.",
    ],
    variant: "runbook",
    videoPrompt:
      "A control-room runbook stabilizes AI-assisted delivery with review capacity, observability, automation, and human-owned architecture.",
    staticFallback:
      "Operated AI delivery runbook showing review capacity, precision, observability, automation, and human architecture ownership.",
    speakerNote:
      "Make the final transition: once generation is cheap, operations discipline matters more. The team still owns the system.",
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
    title: "Thank you",
    subtitle: "Brandon Hedge",
    bullets: ["Questions"],
    variant: "terminal",
    backgroundImage: "/images/happy-slop.png",
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
