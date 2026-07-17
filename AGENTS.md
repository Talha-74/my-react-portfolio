# AGENTS.md

## Purpose

This repository contains Talha Khan's personal portfolio. The codebase is intentionally hand-written. Agents must preserve the existing human-authored structure, naming style, data-driven architecture, and deployment behavior while implementing the portfolio revamp.

This file must be read before making changes.

## Source of truth

Read these files before coding:

1. `AGENTS.md`
2. `docs/portfolio-revamp.md`
3. `docs/portfolio-implementation-plan.md`
4. The files directly related to the requested phase

Do not begin implementation from screenshots alone.

## Core principles

- Preserve the existing repository and evolve it incrementally.
- Do not replace the project with a generated starter template.
- Do not rewrite unrelated files.
- Do not introduce a new architectural pattern without explaining why it is needed.
- Keep content data-driven where the existing code already uses data files.
- Prefer small, reviewable changes over broad rewrites.
- Preserve working routes, links, assets, and Netlify deployment behavior.
- Never push directly to `master` for the revamp. Work on `revamp/v2` or a phase branch created from it.
- Do not remove existing functionality until its replacement is implemented and verified.
- Do not add placeholder claims, fake metrics, fake testimonials, fake clients, or fake projects.

## Design direction

The approved concept is **Signal in the Dark**.

The experience should feel:

- dark and cinematic
- editorial rather than template-like
- developer-focused rather than agency-focused
- technically credible
- modern without looking like generic AI-generated design
- animated with restraint

The pendant lamp is the signature visual. It represents clarity, focus, and engineering thought.

The visual system uses:

- Sora for headings, body text, buttons, and navigation
- a restrained monospace font for metadata, labels, commands, years, and terminal UI
- near-black surfaces
- warm ivory typography
- tungsten/golden light
- a controlled signal-orange accent
- subtle grey borders and technical grid details

Avoid:

- excessive glassmorphism
- neon gradients on every component
- random glowing blobs
- generic floating technology icons
- fake terminal decorations that do not support usability
- constant text scrambling
- scroll hijacking
- animations that block reading or navigation
- copying the reference portfolio layouts literally

## Styling rules

- Follow the repository's existing CSS organisation unless the active phase explicitly migrates it.
- Use clear class names tied to components and sections.
- Keep design tokens centralised before spreading repeated values.
- Do not add Tailwind unless the user explicitly approves it.
- Avoid inline styles except for genuinely dynamic visual values.
- Keep responsive behaviour intentional at desktop, tablet, and mobile sizes.
- Essential content must remain readable without WebGL, motion, hover, or pointer input.

## React rules

- Prefer small focused components.
- Keep section content separate from animation implementation.
- Keep static portfolio content in data files where practical.
- Do not create monolithic page components.
- Preserve accessibility semantics.
- Avoid adding state-management libraries unless the application genuinely needs one.
- Do not add an animation library for effects that CSS can handle cleanly.

## 3D and motion rules

- The hero must work before the 3D scene finishes loading.
- WebGL is enhancement, not a dependency for reading the page.
- Lazy-load the lamp scene.
- Pause or reduce animation when the scene is outside the viewport.
- Support `prefers-reduced-motion`.
- Provide a low-cost mobile fallback.
- Keep the lamp model optimised for the web.
- Use spring/damped motion rather than direct cursor snapping.
- Do not add a full physics engine unless a clear interaction requires it.
- Limit bloom, particles, dynamic shadows, and device pixel ratio.

## Contact form rules

The final contact section uses a terminal-inspired interface, but it remains a real accessible form.

Required fields:

- name
- email
- message

Optional later field:

- project type

Requirements:

- real labels must remain present
- keyboard navigation must work
- validation messages must be understandable
- successful submission must show a clear state
- errors must not be represented only by colour
- retain the working submission path until its replacement is verified
- terminal copy must not reduce clarity

Approved language direction:

- `INITIATE_HANDSHAKE`
- `./establish_connection.sh`
- `Searching for available uplink... FOUND.`
- `Opening secure socket layer... READY.`
- `Please provide session metadata below:`
- `EXECUTE` or `SEND TRANSMISSION`

## Netlify rules

The repository is connected directly to Netlify.

For every phase:

- keep the production build command valid
- verify the expected publish directory
- do not rename the default deployment branch accidentally
- use branch or pull-request deploy previews for review
- document any environment variables
- do not place secrets in the repository
- verify client-side routes on direct refresh

## Phase workflow

For each phase:

1. Read the phase scope in `docs/portfolio-implementation-plan.md`.
2. Inspect the existing files that will be changed.
3. State the intended file-level changes.
4. Implement only the current phase.
5. Run the build and relevant tests.
6. Check responsive and accessible behaviour.
7. Summarise changed files, decisions, known limitations, and the next phase.

Do not silently begin the next phase.

## Completion checklist

Before marking any phase complete:

- production build succeeds
- no obvious console errors
- no broken routes or links
- no accidental content loss
- desktop and mobile layouts are checked
- keyboard navigation is checked
- reduced-motion behaviour is checked when motion was changed
- Netlify deployment assumptions remain valid
- code matches the surrounding repository style
- documentation is updated where decisions changed
