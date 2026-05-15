# DevOps Days Presentation

Interactive slide deck for Brandon Hedge's DevOpsDays Nashville 2026 talk:

**AI Slop Wrangling: Reining In Control When Developers Are Armed With A.I. Slop Cannons**

Official pages:

- Talk and speaker page: https://devopsdays.org/events/2026-nashville/speakers/brandon-hedge/
- Program abstract: https://devopsdays.org/events/2026-nashville/program/brandon-hedge/

## Abstract

AI coding assistants can accelerate delivery, but unmanaged use can flood teams with plausible code that is hard to trust, review, and operate. This talk frames that risk as an incentive and tooling problem: developers under delivery pressure may reach for more generated output than their systems can safely absorb. The deck focuses on practical controls for narrowing scope, improving review quality, requiring meaningful tests, automating regression checks, instrumenting runtime behavior, and keeping architecture decisions human-led.

The presentation is a Vite + React app with a Tauri desktop wrapper. The talk focuses on the pressure and incentive systems that make AI-assisted development risky, then walks through concrete controls for keeping AI-generated work scoped, testable, observable, and human-owned.

Core thesis:

> The slop cannon is an incentive problem with a tooling interface. Control the pressure, focus the nozzle, and keep humans responsible for the system.

## Local Development

Install dependencies:

```bash
npm install
```

Run the web presentation locally:

```bash
npm run dev
```

Vite serves the deck at:

```text
http://127.0.0.1:5173/
```

Build the web app:

```bash
npm run build
```

Preview the production web build:

```bash
npm run preview
```

## Tauri App

This repo also includes a Tauri v2 wrapper in `src-tauri/`, so the presentation can run as a desktop app.

Run the desktop app in development mode:

```bash
npm run tauri dev
```

Build the desktop app:

```bash
npm run tauri build
```

The local macOS app bundle is written to:

```text
src-tauri/target/release/bundle/macos/DevOps Days Presentation.app
```

## Releases

GitHub releases are built by `.github/workflows/release.yml` when a `v*` tag is pushed.

The release workflow builds:

- macOS app bundle
- Windows installer

Current release:

```text
https://github.com/bhedge/devops-days-presentation/releases/tag/v0.1.0
```

## Project Notes

- Slide content and talk planning live in `docs/slide-outline.md`.
- Runtime presentation data lives in `src/slides.ts`.
- The project-specific AI coding guidance lives in `CLAUDE.md`.
