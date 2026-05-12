# DevOpsDays Nashville 2026 Presentation Outline

## Working Metadata

- Speaker: Brandon Hedge
- Event: DevOpsDays Nashville 2026
- Talk title: AI Slop Wrangling: Reining In Control When Developers Are Armed With A.I. Slop Cannons
- Source pages:
  - Speaker bio: https://devopsdays.org/events/2026-nashville/speakers/brandon-hedge/
  - Talk abstract: https://devopsdays.org/events/2026-nashville/program/brandon-hedge/
- Runtime approach: Vite web UI first, Tauri wrapper later
- Primary presentation mode: looping motion slides
- Fallback mode: static themed slide for every motion slide
- First slide: blank black
- Last slide: blank black

## Updated Talk Arc

The deck should be less generic "AI governance" and more specific:

1. What causes the slop cannon?
2. Why do otherwise capable developers reach for it?
3. How do we focus the nozzle instead of banning the tool?
4. What concrete controls make AI-assisted work safer?

Core thesis:

> The slop cannon is an incentive problem with a tooling interface. Control the pressure, focus the nozzle, and keep humans responsible for the system.

## Creative Direction

The presentation should stand out without becoming ridiculous. The desired feel is a restrained cyberpunk dystopian engineering environment: black glass, command consoles, amber warnings, cyan telemetry, industrial machinery, damaged code pipelines, and late-night production pressure.

Visual principles:

- Base palette: black, graphite, gunmetal, cold gray.
- Accents: restrained cyan, amber, and occasional warning red.
- Texture: scratched glass, dim CRT scanlines, datacenter haze, terminal phosphor, industrial hazard markings.
- Motion: slow telemetry pulses, drifting diagnostics, controlled glitches, moving scanlines, pipeline flow, status lights.
- Typography: large direct claims, monospaced system labels, condensed technical supporting text.
- Avoid: cartoon cannons, loud rainbow neon, generic robots, stock corporate people, cluttered walls of unreadable code.

## Slide Outline

### 01. Blank Black

- Content: Empty black screen before the talk starts.
- Looped video direction: None.
- Static fallback: Pure black.
- Speaker note: Use as the setup state before the talk starts.

### 02. Title

- Content:
  - AI Slop Wrangling
  - Reining In Control When Developers Are Armed With A.I. Slop Cannons
  - Brandon Hedge
  - DevOpsDays Nashville 2026
- Looped video direction: A restrained cyberpunk engineering war room with black glass consoles, dim cyan and amber telemetry, pull request diffs, and a stylized slop cannon silhouette aimed at a repo pipeline.
- Static fallback: Still title card from the same war-room scene with readable typography.
- Speaker note: AI coding assistants are useful, but unmanaged pressure turns them into high-volume slop cannons.

### 03. The Cannon Gets Loaded Before The Prompt

- Content:
  - Developer fear changes incentives.
  - Teams under pressure optimize for visible output.
  - Reduced staffing makes automation feel mandatory.
  - The result is code volume without matching ownership.
- Looped video direction: Dark office command floor after a reduction in force: empty desks, glowing task queues, anxious delivery metrics, and an AI console loading generated code into a pipeline.
- Static fallback: Dystopian delivery dashboard showing fear, pressure, reduced capacity, and output volume as linked signals.
- Speaker note: Name the human system first. Slop is not only a tooling problem; it is also a pressure and incentive problem.

### 04. Maslow Beats Maturity Models

- Content:
  - If safety feels threatened, people reach for leverage.
  - AI becomes a way to look productive, responsive, and safe.
  - The behavior is rational, even when the output is risky.
- Looped video direction: A dark hierarchy diagram rendered as industrial control layers, with safety pulsing amber at the bottom and generated-code telemetry overlaid above it.
- Static fallback: Maslow-inspired hierarchy mapped to engineering behavior under AI pressure.
- Speaker note: Connect fear and job security to the temptation to generate more code than the team can understand.

### 05. Slop Looks Useful Until It Compounds

- Content:
  - Plausible code that nobody really read.
  - Fake-green tests that mirror the implementation.
  - Leaky abstractions and parallel patterns.
  - Dependencies pulled in because they were convenient.
- Looped video direction: A clean green CI screen glitches to reveal unread code, fake-green tests, abstraction leaks, dependency sprawl, and production risk.
- Static fallback: Split diagnostic panel with green checks on top and hidden compounding risks underneath.
- Speaker note: AI slop is dangerous because it presents as progress during casual review.

### 06. Focus The Nozzle Before You Increase Pressure

- Content:
  - Define where AI is allowed to work.
  - Constrain the shape of acceptable output.
  - Make feedback fast, local, and objective.
  - Keep humans responsible for architecture.
- Looped video direction: A heavy industrial nozzle narrows from a chaotic spray of generated code into a controlled beam passing through engineering gates.
- Static fallback: Controlled-nozzle diagram showing AI output narrowed by rules, tests, architecture, and feedback.
- Speaker note: Do not ban the tool. Shape its operating envelope.

### 07. Give The Model A Real Operating Manual

- Content:
  - Use a strong `CLAUDE.md` or equivalent project guide.
  - Document architecture, commands, style, testing, and review expectations.
  - Put sharp boundaries in writing before asking for changes.
  - Treat prompts as part of engineering governance.
- Looped video direction: A project rulebook file opens on a dark terminal wall while generated code is redirected through documented commands, architecture boundaries, and review rules.
- Static fallback: Terminal-style `CLAUDE.md` slide with sections for architecture, commands, tests, style, and forbidden areas.
- Speaker note: A Karpathy-style project instruction file is a practical way to keep AI output aligned with the repo.

### 08. Pick One Use Case First

- Content:
  - Start with UI work, not the database.
  - UI changes are easier to inspect visually.
  - The blast radius is usually easier to contain.
  - Feedback loops can be shorter.
  - Data correctness and migrations need stricter human control.
- Looped video direction: A UI preview panel is lit cyan while a database core is locked behind amber warning rails. Generated changes route only to the UI lane.
- Static fallback: Two-lane diagram: UI lane open for AI-assisted work, database lane locked for human-planned changes.
- Speaker note: Choose an area where mistakes are visible and reversible before letting AI touch deeper system state.

### 09. Write Valid Tests, Not Fake Green

- Content:
  - Tests should assert important behavior, not implementation trivia.
  - Generated tests need human review like production code.
  - Check edge cases, failure modes, and contract boundaries.
  - Validate that coverage maps to logic that matters.
- Looped video direction: Test probes move through a system map; fake-green probes stop at shallow paths while valid tests reach critical logic and failure branches.
- Static fallback: Behavior coverage map separating fake-green tests from meaningful tests.
- Speaker note: The test question is whether tests would fail for the bugs you actually care about.

### 10. Automate QA And Regression Checks

- Content:
  - Run checks every time generated output changes the product.
  - Prefer repeatable browser and API flows over manual vibes.
  - Capture screenshots, traces, and diffs.
  - Make regressions visible before review fatigue sets in.
- Looped video direction: Automated QA scanners sweep a product interface, collecting screenshots, visual diffs, API checks, and regression signals into a review console.
- Static fallback: QA pipeline diagram showing browser checks, API checks, visual diffs, and review artifacts.
- Speaker note: Automation should reduce the amount of trust reviewers need to place in generated changes.

### 11. Great Logging Makes Slop Observable

- Content:
  - Log the decisions that matter.
  - Expose state transitions and failure reasons.
  - Trace user journeys through generated code paths.
  - Use production reality to improve the gates.
- Looped video direction: A production observability wall shows traces, structured logs, error clusters, and user journeys over a dark network map.
- Static fallback: Observability dashboard connecting logs, traces, metrics, and generated code paths.
- Speaker note: You cannot control what you cannot see. Logging is part of making AI-generated work operable.

### 12. Help AI See The UI

- Content:
  - Give the model structured feedback from the running app.
  - Use MCP or wrappers around the UI to report DOM state, screenshots, errors, and interactions.
  - Close the loop between generated code and observed behavior.
- Looped video direction: An AI workbench receives screenshot, DOM, console error, and interaction telemetry from a running UI, then routes fixes back through tests.
- Static fallback: Feedback-loop diagram: UI runtime to MCP wrapper to AI assistant to tests to review.
- Speaker note: If the model only sees files, it guesses. Better feedback helps it correct UI work with evidence.

### 13. Humans Still Own Architecture

- Content:
  - Plan the work before generating code.
  - Define module boundaries and contracts.
  - Sequence changes so review remains possible.
  - Use AI inside the plan, not instead of the plan.
- Looped video direction: A human-authored architecture map sits above an automated code pipeline; generated code can move only through approved module boundaries.
- Static fallback: Architecture-first workflow: plan, boundaries, contracts, generated implementation, review.
- Speaker note: AI can fill in work, but it should not decide the system shape by accident.

### 14. Be Willing To Write The Small Module

- Content:
  - Not every problem needs another package.
  - A simple local module can be easier to audit and own.
  - Generated dependency choices need skepticism.
  - Open source is powerful, but transitive risk is real.
- Looped video direction: A dependency graph expands into a tangled network, then collapses into one small well-lit local module with clear tests and ownership.
- Static fallback: Dependency decision panel comparing package pull-in versus local module.
- Speaker note: Sometimes the safer answer is to write the boring module yourself.

### 15. Make Invalid Shapes Harder To Ship

- Content:
  - Strong types turn some mistakes into compiler errors.
  - Go, Rust, and TypeScript give AI tighter rails.
  - Types do not replace review, but they improve the feedback loop.
- Looped video direction: Generated code travels through a type-checking grid; malformed shapes are rejected as compiler diagnostics while valid shapes continue to review.
- Static fallback: Compiler-gate diagram showing type errors catching invalid generated code shapes.
- Speaker note: A strongly typed language is one more way to focus the nozzle before output reaches production.

### 16. Keep The Velocity. Narrow The Blast Radius.

- Content:
  - Start with one allowed area.
  - Write the operating manual.
  - Demand real tests and automated regression checks.
  - Instrument the runtime.
  - Keep architecture human-led.
  - Improve the controls after every escape.
- Looped video direction: A control-room runbook updates from unmanaged generation to operated AI delivery while risk indicators stabilize and the nozzle stays focused.
- Static fallback: Runbook checklist with status indicators for scope, instructions, tests, QA, observability, architecture, and feedback.
- Speaker note: The answer is not panic or blind trust. It is operated AI delivery.

### 17. Closing Thesis

- Content:
  - The slop cannon is an incentive problem with a tooling interface.
  - Control the pressure, focus the nozzle, and keep humans responsible for the system.
- Looped video direction: The slop cannon powers down into a controlled engineering instrument. A dark pipeline settles into a steady cyan pulse with amber control labels.
- Static fallback: Large closing thesis over a darkened delivery pipeline with pressure, scope, tests, feedback, and architecture labels.
- Speaker note: End with both halves: psychological safety and engineering controls.

### 18. Q&A

- Content:
  - Questions
  - Brandon Hedge
  - Optional contact links or QR code to repo/slides
- Looped video direction: Quiet dystopian terminal idle screen with blinking cursor, slow scanlines, and tiny amber/cyan console indicators.
- Static fallback: Terminal-style Q&A screen with high contrast readable text.
- Speaker note: Leave room to add contact details and any conference-required information.

### 19. Blank Black

- Content: Empty black screen after the talk ends.
- Looped video direction: None.
- Static fallback: Pure black.
- Speaker note: Use as the post-talk state when exiting presentation mode.

## Static Fallback Requirements

- Same text hierarchy as the animated slide.
- Same palette and composition as the video direction.
- No essential information should exist only in motion.
- Each fallback should be legible at conference-room projection distance.
- Static assets should be loadable without network access inside the Tauri app.

## Candidate Concept Images

These are the first image targets to generate once the direction is ready:

1. Title concept: cyberpunk engineering war room with slop cannon silhouette and PR telemetry.
2. Root-cause concept: pressure dashboard connecting fear, reduced capacity, output volume, and review risk.
3. Focus-the-nozzle concept: industrial nozzle turning chaotic generated code into controlled output.
4. UI-feedback concept: running UI connected to MCP-style feedback loop.

## Open Questions

- Talk length and expected slide count.
- Whether to include real code examples or keep the examples conceptual.
- Which contact links or QR code should appear on the Q&A slide.
- Whether to include specific tool recommendations by name.
- Whether the Tauri app should support presenter notes, timer, keyboard navigation, and a slide overview.
