# DevOpsDays Nashville 2026 Presentation Outline

## Metadata

- Speaker: Brandon Hedge
- Event: DevOpsDays Nashville 2026
- Talk title: AI Slop Wrangling: Reining In Control When Developers Are Armed With A.I. Slop Cannons
- Speaker page: https://devopsdays.org/events/2026-nashville/speakers/brandon-hedge/
- Program page: https://devopsdays.org/events/2026-nashville/program/brandon-hedge/
- Runtime: Vite + React slide deck with a Tauri desktop wrapper
- First slide: blank black
- Last slide: blank black

## Talk Arc

The deck is focused on AI-assisted development as an incentive, pressure, and operating-control problem.

1. What causes the slop cannon?
2. Why do otherwise capable developers reach for it?
3. How do we focus the nozzle instead of banning the tool?
4. What concrete controls make AI-assisted work safer?
5. How do teams keep ownership, observability, and architecture human-led?

Core thesis:

> The slop cannon is an incentive problem with a tooling interface. Control the pressure, focus the nozzle, and keep humans responsible for the system.

## Slide Outline

### 01. Blank Start

- ID: `blank-start`
- Content: Empty black pre-roll slide.
- Speaker note: Use as the setup state before the talk starts.

### 02. AI Slop Wrangling

- ID: `title`
- Eyebrow: DevOpsDays Nashville 2026
- Subtitle: Reining In Control When Developers Are Armed With A.I. Slop Cannons
- Content:
  - Brandon Hedge
- Footer: Control the pressure. Focus the nozzle. Keep humans responsible.
- Speaker note: Set the premise: AI coding assistants are useful, but unmanaged pressure turns them into high-volume slop cannons.

### 03. About Me

- ID: `about-me`
- Eyebrow: Context
- Content:
  - Nearly 30 years across infrastructure, distributed systems, and engineering leadership.
  - Neural Payments: AI, data architecture, and PCI security.
  - Previously CTO at Lineage Bank; Elastic cloud systems; SRE leadership at npm.
  - I care about resilient systems, usable controls, and teams that can own what they ship.
- Speaker note: Introduce the perspective: deep infrastructure and leadership experience, current AI and security work in a PCI environment, and a focus on systems teams can actually operate.

### 04. The AI Race Is On

- ID: `ai-race`
- Eyebrow: Market pressure
- Content:
  - Move fast.
  - Ship more code in less time.
  - Do more with fewer people.
  - Shorten feature windows until review becomes a bottleneck.
- Speaker note: Start with the business pressure. Most teams are not adopting AI in a calm lab environment; they are adopting it while the delivery clock is already loud.

### 05. The Cannon Gets Loaded Before The Prompt

- ID: `cannon-loaded`
- Eyebrow: Root cause
- Content:
  - Developer fear changes incentives.
  - Teams under pressure optimize for visible output.
  - Reduced staffing makes automation feel mandatory.
  - The result is code volume without matching ownership.
- Speaker note: Name the human system first. Slop is not only a tooling problem; it is also a pressure and incentive problem.

### 06. Maslow Beats Maturity Models

- ID: `maslow`
- Eyebrow: Why capable people overuse it
- Content:
  - If safety feels threatened, people reach for leverage.
  - AI becomes a way to look productive, responsive, and safe.
  - The behavior is rational, even when the output is risky.
  - Stay relevant. Ship faster. Feed the family.
- Speaker note: Connect fear and job security to the temptation to generate more code than the team can understand. Developers may be seeing layoffs inside or outside the company, and self-preservation changes the incentives.

### 07. Slop Looks Useful Until It Compounds

- ID: `slop-anatomy`
- Eyebrow: Failure mode
- Content:
  - Plausible code that nobody really read.
  - Fake-green tests that mirror the implementation.
  - Leaky abstractions and parallel patterns.
  - Dependencies pulled in because they were convenient.
  - LGTM approvals that reward volume over understanding.
- Speaker note: AI slop is dangerous because it presents as progress during casual review. The first pass often looks plausible enough to merge.

### 08. Focus The Nozzle Before You Increase Pressure

- ID: `focus-nozzle`
- Eyebrow: Operating principle
- Content:
  - Define where AI is allowed to work.
  - Constrain the shape of acceptable output.
  - Make feedback fast, local, and objective.
  - Keep humans responsible for architecture.
- Speaker note: Shift from cause to solution: do not ban the tool. Shape its operating envelope.

### 09. Bring Security In Early

- ID: `security-sync`
- Eyebrow: Security control
- Content:
  - Sync with security before agents write production code.
  - Agents can leak secrets, choose unsafe packages, or widen permissions.
  - Scan generated changes like any other supply-chain risk.
  - Measure repeatedly before cutting into critical systems.
  - Iterate on tests after every escape.
- Speaker note: This keeps the security message explicit: AI assistance does not bypass normal risk controls. If anything, it needs more observable gates.

### 10. Be Willing To Write The Small Module

- ID: `write-modules`
- Eyebrow: Dependency discipline
- Content:
  - Not every problem needs another package.
  - A simple local module can be easier to audit and own.
  - Generated dependency choices need skepticism.
  - Open source is powerful, but transitive risk is real.
- Speaker note: AI often reaches for the open source world of code. Sometimes the safer answer is to write the boring module yourself.

### 11. Never Give Production Keys To An LLM

- ID: `where-start`
- Eyebrow: Adoption path
- Content:
  - Start where mistakes are visible.
  - Use test credentials, sandboxes, and scoped throwaway tokens.
  - Keep the data model and production state guarded.
  - Automate code deployment as the very last step.
- Speaker note: Be blunt here: the first control is credential discipline. Do not give production secrets or production deployment authority to an LLM while you are still learning the operating model.

### 12. What Are You Using Today?

- ID: `audience-question`
- Eyebrow: Question
- Content:
  - Cursor or code completion?
  - Claude, Codex, or another coding agent?
  - Hosted public model?
  - Private hosted model or local model?
  - Agents with API budgets?
- Speaker note: Use this as an interaction beat. It gives you a read on the room before getting into controls.

### 13. Keep The Velocity. Narrow The Blast Radius.

- ID: `operating-model`
- Eyebrow: Operating model
- Content:
  - Start with one allowed area.
  - Write the operating manual.
  - Demand real tests and automated regression checks.
  - Instrument the runtime.
  - Keep architecture human-led.
  - Improve the controls after every escape.
- Speaker note: This is the actionable close: the answer is not panic or blind trust. It is operated AI delivery.

### 14. Pick One Use Case First

- ID: `pick-ui-first`
- Eyebrow: Scope control
- Subtitle: Start with UI work, not the database.
- Content:
  - UI changes are easier to inspect visually.
  - The blast radius is usually easier to contain.
  - Feedback loops can be shorter.
  - Data correctness and migrations need stricter human control.
- Speaker note: Make adoption incremental. Choose an area where mistakes are visible and reversible before letting AI touch deeper system state.

### 15. Help AI See The UI

- ID: `ai-sees-ui`
- Eyebrow: Feedback loop
- Content:
  - Give the model structured feedback from the running app.
  - Use MCP or wrappers around the UI to report DOM state, screenshots, errors, and interactions.
  - Close the loop between generated code and observed behavior.
- Speaker note: If the model only sees files, it guesses. Better feedback helps it correct UI work with evidence.

### 16. Give The Model A Real Operating Manual

- ID: `operating-manual`
- Eyebrow: Instruction layer
- Content:
  - Use a strong CLAUDE.md, AGENTS.md, or equivalent project guide.
  - Document architecture, commands, style, testing, and review expectations.
  - Put sharp boundaries in writing before asking for changes.
  - Treat prompts as part of engineering governance.
- Speaker note: A Karpathy-style project instruction file is a practical way to keep AI output aligned with the repo.

### 17. Think Before Coding

- ID: `claude-think`
- Eyebrow: CLAUDE.md
- Content:
  - State assumptions explicitly.
  - If uncertain, ask or name the risk.
  - Surface tradeoffs instead of picking silently.
  - Push back when the simpler approach is better.
- Speaker note: Use this as the first concrete example of turning vague prompting into repo-level operating rules.

### 18. Simplicity First

- ID: `claude-simplicity`
- Eyebrow: CLAUDE.md
- Content:
  - Minimum code that solves the problem.
  - No speculative features.
  - No one-use abstractions.
  - If 200 lines could be 50, rewrite it.
- Speaker note: This fights one of the most common AI failure modes: turning a narrow request into a framework.

### 19. Surgical Changes

- ID: `claude-surgical`
- Eyebrow: CLAUDE.md
- Content:
  - Touch only what the task requires.
  - Match the existing style.
  - Clean up only the mess your change created.
  - Every changed line should trace to the request.
- Speaker note: This keeps AI from using every request as permission to refactor the neighborhood.

### 20. Goal-Driven Execution

- ID: `claude-goal-driven`
- Eyebrow: CLAUDE.md
- Content:
  - Define success criteria before changing code.
  - Turn bugs into failing tests, then fixes.
  - Verify each step with a concrete check.
  - Loop independently until the evidence is clean.
- Speaker note: The goal is not ceremony. Strong success criteria let the assistant work longer without drifting.

### 21. What Is An LLM?

- ID: `what-is-llm`
- Eyebrow: Mental model
- Content:
  - A pile of weights trained to predict tokens.
  - Statistical inference, not intent.
  - Powerful pattern matching over enormous context.
  - Small poisoned or low-quality examples can distort a narrow area.
- Speaker note: Give the audience a practical mental model. The point is not to dunk on the technology; it is to understand why verification matters.

### 22. How An LLM Reasons

- ID: `llm-reasoning`
- Eyebrow: Under the hood
- Content:
  - Dense models fire next-token completion over billions of parameters per token.
  - MoE, or mixture of experts, is slightly more efficient.
  - But LLMs are DUMB!
- Speaker note: Model reasoning can be useful, but it is not the same as correctness. Treat it as a way to generate candidates that still need checks.

### 23. Plan. Plan. Plan.

- ID: `plan-plan-plan`
- Eyebrow: Working method
- Content:
  - Refine the plan before writing code.
  - Make sure the assistant understands the codebase.
  - Anchor the work in established patterns.
  - Then write the smallest code that satisfies the plan.
- Speaker note: Slow the assistant down before implementation. A better plan is cheaper than reviewing a confident patch that misunderstood the system.

### 24. Work In Concise Bites

- ID: `work-with-llm`
- Eyebrow: Working method
- Content:
  - Do not ask for the whole system in one breath.
  - Plan the task. Then plan the verification.
  - Clear context when the problem changes.
  - Large context helps until it starts confusing the model.
- Speaker note: Make the practical point: better work units produce better output. More text is not automatically better context.

### 25. Write Valid Tests, Not Fake Green

- ID: `valid-tests`
- Eyebrow: Proof layer
- Content:
  - Tests should assert important behavior, not implementation trivia.
  - Generated tests need human review like production code.
  - Check edge cases, failure modes, and contract boundaries.
  - Validate that coverage maps to logic that matters.
- Speaker note: The test question is not whether tests exist. It is whether they would fail for the bugs you actually care about.

### 26. There Is No Excuse Not To Write Tests Any Longer

- ID: `qa-regression`
- Eyebrow: Verification layer
- Content:
  - Run checks every time generated output changes the product.
  - Prefer repeatable browser and API flows over manual vibes.
  - Capture screenshots, traces, and diffs.
  - Make regressions visible before review fatigue sets in.
- Speaker note: Automation should reduce the amount of trust reviewers need to place in generated changes.

### 27. Review And Shipping Become The Bottleneck

- ID: `review-bottleneck`
- Eyebrow: Flow control
- Content:
  - AI can generate changes faster than teams can understand them.
  - PR review and release queues become the constraint.
  - Stacking more work on the bottleneck only increases risk.
  - Focus on precision, refinement, observability, tooling, and automation.
- Speaker note: Make the capacity point explicit: when generation gets cheap, human review and shipping discipline become the limiting system. Do not just pile more work into that queue.

### 28. Humans Still Run And Use The Software

- ID: `release-gates`
- Eyebrow: Release control
- Content:
  - Control the release gates.
  - Keep a strong QA and staging test gate.
  - Do not be afraid to reject code.
  - Use A/B testing where it fits.
  - Monitor error rates and establish an error budget.
  - Be sure you can rollback the code easily.
  - Developers need to be on call for their slop.
- Speaker note: The software is still used by real people and operated by real teams. Reject bad code, measure production impact, and keep ownership attached to the people shipping the change.

### 29. Great Logging Makes Slop Observable

- ID: `logging-observability`
- Eyebrow: Runtime feedback
- Content:
  - Log the decisions that matter.
  - Expose state transitions and failure reasons.
  - Trace user journeys through generated code paths.
  - Use production reality to improve the gates.
- Speaker note: You cannot control what you cannot see. Logging is part of making AI-generated work operable.

### 30. Make Invalid Shapes Harder To Ship

- ID: `typed-languages`
- Eyebrow: Constraint layer
- Content:
  - Strong types turn some mistakes into compiler errors.
  - Go, Rust, and TypeScript give AI tighter rails.
  - Types do not replace review, but they improve the feedback loop.
- Speaker note: A strongly typed language is one more way to focus the nozzle before output reaches production.

### 31. Work Toward A Multi-Agent Strategy

- ID: `multi-agent`
- Eyebrow: Scale pattern
- Content:
  - PR review and skeptical test writing.
  - QA regression checks with artifacts.
  - Pipeline and dependency security analysis.
  - Documentation hygiene.
  - Agents need roles, budgets, and gates.
- Speaker note: This is where teams can go after the basic controls work: separate personas for separate jobs, with one agent not blindly trusting another.

### 32. Watch Your Cost

- ID: `cost`
- Eyebrow: Budget control
- Content:
  - AI is not automatically cheaper than humans.
  - Frontier models at scale are expensive.
  - Private hosted models shift cost into capacity planning.
  - Local models shift cost into hardware and operations.
  - Measure tokens, retries, agent fan-out, and review time.
- Speaker note: Bring the budget reality into the room. Automated agents can produce useful work, but uncontrolled loops and fan-out can become expensive fast.

### 33. The Pressure Is Real

- ID: `summary-pressure`
- Eyebrow: Summary
- Content:
  - Business velocity is rising.
  - Developer safety concerns change incentives.
  - Code volume can increase faster than ownership.
  - The problem starts before the prompt.
- Speaker note: Restate the root cause before closing: this is not just a model-quality issue. It is pressure moving through a tooling interface.

### 34. Control The Operating Envelope

- ID: `summary-controls`
- Eyebrow: Summary
- Content:
  - Protect secrets and production authority.
  - Start with visible, reversible work.
  - Use project instructions, tests, types, and security gates.
  - Make the model see evidence, not vibes.
- Speaker note: This is the pragmatic control stack. We are not banning the tool; we are defining where and how it can safely operate.

### 35. Operate AI Delivery Like A System

- ID: `summary-operation`
- Eyebrow: Summary
- Content:
  - PR review and shipping are capacity constraints.
  - Invest in precision, refinement, tooling, and automation.
  - Instrument generated paths in production.
  - Keep architecture and accountability human-led.
- Speaker note: Make the final transition: once generation is cheap, operations discipline matters more. The team still owns the system.

### 36. Humans Still Own Architecture

- ID: `human-architecture`
- Eyebrow: Human responsibility
- Content:
  - Plan the work before generating code.
  - Define module boundaries and contracts.
  - Sequence changes so review remains possible.
  - Use AI inside the plan, not instead of the plan.
- Speaker note: AI can fill in work, but it should not decide the system shape by accident.

### 37. The Slop Cannon Is An Incentive Problem With A Tooling Interface

- ID: `closing-thesis`
- Eyebrow: Closing thesis
- Subtitle: Control the pressure, focus the nozzle, and keep humans responsible for the system.
- Content:
  - Pressure
  - Scope
  - Tests
  - Feedback
  - Architecture
- Speaker note: End with the core point: teams need both psychological safety and engineering controls.

### 38. Thank You

- ID: `qa`
- Eyebrow: DevOpsDays Nashville 2026
- Subtitle: Brandon Hedge
- Content:
  - Questions
- Speaker note: Leave room to add contact details, a QR code, or conference-required information.

### 39. Blank End

- ID: `blank-end`
- Content: Empty black post-talk slide.
- Speaker note: Use as the post-talk state when exiting presentation mode.
