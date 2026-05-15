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


### About Me

B. Hedge is a technologist with nearly 30 years of experience spanning infrastructure, distributed systems, and engineering leadership. He currently works at Neural Payments, where he focuses on Artificial Intelligence, data architecture and security in a PCI environment — including end-to-end PGP encryption of cardholder data and a quantum-proof KMS tokenization solution for PANs.

Previously, he served as CTO of Lineage Bank, building out the technical foundation for both traditional banking and banking-as-a-service partnerships. Before that, he led cloud systems engineering at Elastic, managed the SRE team at npm, Inc., and held senior architecture and director-level roles at LeanKit and LifePoint Health.

His work sits at the intersection of deep technical craft and team leadership, with a long track record of building highly available systems, resilient data pipelines, and cohesive remote teams.



### Slide - The AI Race is on

move fast
ship more code in less time
do more with less resources
shortened feature windows


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
< show maslows hierarchy of needs >
describe how the developers are seeing job cuts outside their company or within, and have a need for self preservation. Stay relevant, ship faster, feed the family.

### 05. Slop Looks Useful Until It Compounds

- Content:
  - Plausible code that nobody really read.
  - Fake-green tests that mirror the implementation.
  - Leaky abstractions and parallel patterns.
  - Dependencies pulled in because they were convenient.
- Looped video direction: A clean green CI screen glitches to reveal unread code, fake-green tests, abstraction leaks, dependency sprawl, and production risk.
- Static fallback: Split diagnostic panel with green checks on top and hidden compounding risks underneath.
- Speaker note: AI slop is dangerous because it presents as progress during casual review.
LGTM :rocket: code approvals

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


### SLide - Karpathy CLAUDE.md
Show this text as a document PNG and break into slides:

CLAUDE.md
Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

Tradeoff: These guidelines bias toward caution over speed. For trivial tasks, use judgment.

1. Think Before Coding
Don't assume. Don't hide confusion. Surface tradeoffs.

Before implementing:

State your assumptions explicitly. If uncertain, ask.
If multiple interpretations exist, present them - don't pick silently.
If a simpler approach exists, say so. Push back when warranted.
If something is unclear, stop. Name what's confusing. Ask.
2. Simplicity First
Minimum code that solves the problem. Nothing speculative.

No features beyond what was asked.
No abstractions for single-use code.
No "flexibility" or "configurability" that wasn't requested.
No error handling for impossible scenarios.
If you write 200 lines and it could be 50, rewrite it.
Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

3. Surgical Changes
Touch only what you must. Clean up only your own mess.

When editing existing code:

Don't "improve" adjacent code, comments, or formatting.
Don't refactor things that aren't broken.
Match existing style, even if you'd do it differently.
If you notice unrelated dead code, mention it - don't delete it.
When your changes create orphans:

Remove imports/variables/functions that YOUR changes made unused.
Don't remove pre-existing dead code unless asked.
The test: Every changed line should trace directly to the user's request.

4. Goal-Driven Execution
Define success criteria. Loop until verified.

Transform tasks into verifiable goals:

"Add validation" → "Write tests for invalid inputs, then make them pass"
"Fix the bug" → "Write a test that reproduces it, then make it pass"
"Refactor X" → "Ensure tests pass before and after"
For multi-step tasks, state a brief plan:

1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

### Slide - What is an LLM
- brute force weights randomly trained tokens
- a pile of numbers
- statistical inference
- take only 200 invalid entries to poison a model in an area
- Ask ChatGPT about goblins

< graphic - show an overview of an LLM model >

### How an LLM reasons
- it is frightening to look under the hood at thinking and reasoning loops
- some models are better at certain things
- try multiple strategies


### How to work with an LLM
- Build my entire website. Make no mistakes. :laughing:
- Break things into concise bites
- PLAN. PLAN. PLAN.
- More text is not always better... clear your context when you change a context
- A large context can confuse the model
- 


### SLide - Question
QUESTION: what do you use today? Cursor or other code completion? Claude / Codex? Agents ( API Cost ), Hosted public model, run your own?


### WHERE DO YOU START ( slide )

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

### Work toward a multi agent strategy
- PR Review
- Security analysis of the pipelines
- QA regression tests
- Security white hat agent
- Documentation hygene
- Test writer persona who does not trust the code writer persona
- Automated agens

### Also, Watch your cost
- AI is not cheaper than humans
- Frontier models at scale are expensive
- Hosted private models may provide some capacity for automated agents
- running your own public model privately has a hardware expense for frontier capabilities ( have you priced GPUs and RAM recently )


### Include security
- Make sure you are in sync with the security team
- Agents are careless
- Posting private keys, insecure code, insecure packages
- Measure 4 times and cut once
- Iterate on tests

### 17. Closing Thesis

- Content:
  - The slop cannon is an incentive problem with a tooling interface.
  - Control the pressure, focus the nozzle, and keep humans responsible for the system.
- Looped video direction: The slop cannon powers down into a controlled engineering instrument. A dark pipeline settles into a steady cyan pulse with amber control labels.
- Static fallback: Large closing thesis over a darkened delivery pipeline with pressure, scope, tests, feedback, and architecture labels.
- Speaker note: End with both halves: psychological safety and engineering controls.

### 18. Q&A

- Content:
  - THANK YOU!
  - Brandon Hedge
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
