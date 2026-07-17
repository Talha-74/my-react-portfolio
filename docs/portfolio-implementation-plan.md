# Portfolio Revamp — Six-Phase Implementation Plan

## Project

Repository: `Talha-74/my-react-portfolio`  
Deployment: Netlify, connected directly to the GitHub repository  
Working branch: `revamp/v2`  
Primary concept: **Signal in the Dark**

This document converts the approved portfolio direction into six implementation phases. Each phase must be completed, reviewed, and accepted before the next one begins.

---

# 1. Finalised Creative Direction

## 1.1 What the portfolio should feel like

The final portfolio should feel like a dark, cinematic engineering interface rather than a standard personal website.

It should communicate that Talha:

- thinks in systems
- builds reliable backend-heavy products
- understands modern frontend experiences
- uses AI as an engineering multiplier rather than as a substitute for judgement
- can turn complex business workflows into usable software

The portfolio must not look like a generic AI-generated landing page. It should retain a hand-built, deliberate personality.

## 1.2 Final visual identity

### Concept name

**Signal in the Dark**

### Meaning

The portfolio starts in darkness. A suspended pendant lamp introduces focus and reveals information as the user moves through the page. The lamp is not decoration only; it becomes the visual metaphor for engineering clarity.

### Palette

```text
Ink Black       #070707
Carbon          #111214
Panel Black     #191B1F
Warm Ivory      #E9E2D6
Muted Grey      #929292
Border Grey     #2B2E34
Signal Orange   #F06A00
Tungsten Gold   #D3A35D
Success Green   #73C991
Error Red       #FF625F
```

Orange is the primary interaction accent. Gold belongs mostly to the lamp and illuminated surfaces. Red should be used only for errors or rare emphasis.

### Typography

- **Sora** for headings, body text, navigation, buttons, and major statements
- **Geist Mono**, **IBM Plex Mono**, or a similar restrained monospace for labels, commands, numbers, technical metadata, and terminal content

Use only these two font roles. Do not introduce several unrelated font families.

## 1.3 Final hero concept

The hero will be a **Developer Command Deck illuminated by a physical pendant lamp**.

It will not be a normal split-screen hero with a portrait on one side. It will combine cinematic lighting, editorial typography, and technical interface details.

### Desktop composition

The full-screen hero contains:

1. A slim fixed or floating navigation at the top.
2. A large editorial name treatment in the background:

```text
TALHA
KHAN
```

3. A small command-like status label:

```text
STATUS: AVAILABLE_FOR_MEANINGFUL_WORK
```

4. A central statement:

> **I engineer digital systems that stay useful after the demo.**

5. Supporting copy:

> Backend-focused full-stack developer building business software, automation pipelines, integrations, and modern web experiences.

6. Two clear actions:

```text
VIEW SELECTED WORK  →
ESTABLISH CONNECTION
```

7. A custom pendant lamp descending from the top of the viewport.
8. A real spotlight that follows the cursor with delayed, weighted movement.
9. A thin technical status rail showing concise metadata such as:

```text
BASED_IN        PAKISTAN
FOCUS           BACKEND + PRODUCT ENGINEERING
MODE            AI-AUGMENTED DEVELOPMENT
AVAILABILITY    REMOTE / WORLDWIDE
```

### Hero interaction

- The cursor moves the light target.
- The lamp rotates toward that target with spring inertia.
- The light reveals selected text and subtle background grid details.
- The lamp moves gently while idle.
- Hovering over the main CTA increases local light intensity slightly.
- Scrolling causes the lamp cable and light cone to guide the eye into the next section.
- The text remains readable without the lamp.

### Mobile composition

- The hero becomes a cleaner stacked layout.
- The lamp performs a gentle automatic swing instead of following touch precisely.
- Heavy shadows, particles, and post-processing are reduced.
- Primary content remains visible without relying on the spotlight.
- CTA buttons remain easy to tap.

### Why this hero is unique

It combines three ideas into one coherent experience:

- editorial portfolio typography
- a developer-oriented command interface
- a physically believable light interaction

It avoids the common pattern of placing a random rotating 3D laptop, globe, robot, or stack of technology logos beside generic text.

## 1.4 Final closing and contact concept

The last major section contains two connected parts.

### Part A — Closing statement

Small command label:

```text
READY_FOR_ENGAGEMENT?
```

Main statement:

> **Let's build the future together.**

Supporting copy:

> Have a product, workflow, or system worth improving? Start a conversation and tell me what needs to work better.

Actions:

```text
ESTABLISH CONNECTION
DOWNLOAD MANIFEST (CV)
```

### Part B — Terminal contact interface

The CTA transitions into a terminal-inspired form titled:

```text
INITIATE_HANDSHAKE
Terminal Interface
```

Terminal header:

```text
talha@portfolio:~$ ./establish_connection.sh
```

System response:

```text
Searching for available uplink... FOUND.
Opening secure socket layer... READY.

Please provide session metadata below:
```

Fields:

```text
name:      [required_input]
email:     [required_input]
message:   Write your transmission here...
```

Primary action:

```text
EXECUTE  >
```

Possible success response:

```text
Transmission accepted.
Handshake complete.
I will respond through the supplied channel.
```

Possible failure response:

```text
Connection interrupted.
Please verify the required fields and retry.
```

The visual style may resemble a terminal, but the implementation must remain a proper semantic, accessible HTML form.

---

# 2. Implementation Principles

## 2.1 Preserve the human-written codebase

The current repository is not disposable scaffolding. It already contains working React structure, routes, data files, theme handling, and contact submission logic.

The revamp will therefore:

- inspect before replacing
- reuse working business logic
- migrate incrementally
- avoid unrelated rewrites
- preserve history and deployability
- replace visual layers only when their replacement is ready

## 2.2 Documentation-first agent workflow

Every coding agent must read:

1. `AGENTS.md`
2. `docs/portfolio-revamp.md`
3. `docs/portfolio-implementation-plan.md`

The agent must then inspect the exact files involved in the active phase before proposing changes.

## 2.3 Branching and Netlify safety

- `master` remains the production branch unless the Netlify configuration says otherwise.
- Revamp work takes place on `revamp/v2`.
- Each implementation phase may use a child branch such as `revamp/phase-1-foundation`.
- Review changes through a pull request and Netlify deploy preview.
- Merge only after build, responsive, accessibility, and deployment checks pass.
- Do not change build commands or publish directories without documenting and validating them.

## 2.4 Definition of done for every phase

A phase is complete only when:

- its listed deliverables are implemented
- production build succeeds
- no new obvious console errors are present
- mobile and desktop layouts are checked
- routes and links still work
- Netlify preview deploy succeeds
- accessibility requirements for that phase are checked
- the user reviews and approves the visual result

---

# Phase 1 — Audit, Guardrails, and Stable Foundation

## Goal

Create a safe foundation for the revamp without changing the public design significantly.

## Scope

### 1. Repository audit

Inspect and document:

- current route structure
- current component structure
- current data files
- theme handling
- contact form submission path
- static assets
- existing external links
- resume download flow
- build command
- publish directory
- Netlify configuration, redirects, and environment variables

### 2. Add coding guardrails

- Add `AGENTS.md` at repository root.
- Add this implementation plan.
- Add a concise architectural note if needed under `docs/architecture.md`.
- Add a phase checklist template under `docs/checklists/phase-review.md` if useful.

### 3. Establish a migration strategy

Decide whether the project will:

- remain on the current React/CRA foundation during the visual revamp, then migrate later, or
- migrate early to Vite and a supported React version

The preferred route is an early controlled migration because the 3D and motion stack benefits from a modern React setup. However, migration must not happen blindly.

### 4. Baseline verification

Before changing architecture:

- run the current production build
- record existing warnings
- verify the live routes
- verify contact form behaviour
- verify resume download
- record current Lighthouse or equivalent baseline where practical

### 5. Introduce code quality tools carefully

Where absent, add or normalise:

- ESLint
- Prettier
- consistent import ordering rules
- a simple build verification script

Do not introduce strict rules that force a full-repository rewrite in the first phase.

## Deliverables

- repository audit notes
- final migration decision
- working `revamp/v2` branch
- `AGENTS.md`
- verified current production build
- documented Netlify deployment settings
- no intentional visual redesign yet

## Acceptance criteria

- the current site still works
- the current production build succeeds
- existing routes remain valid
- Netlify preview works
- agents have clear written constraints
- the migration plan is agreed before dependencies are changed

## Out of scope

- new hero
- 3D scene
- new project cards
- terminal redesign
- broad content rewriting

---

# Phase 2 — Modern Runtime and Design System

## Goal

Create the technical and visual foundation used by every redesigned section.

## Scope

### 1. Runtime modernisation

After the Phase 1 audit, migrate in a controlled sequence to the approved stack.

Preferred target:

```text
Vite
Modern React
React Router compatible with the new runtime
Motion for React
Three.js
React Three Fiber
Drei
```

TypeScript should be introduced progressively rather than requiring every existing file to be converted immediately.

### 2. Preserve Netlify deployment

Update and verify:

- build command
- publish directory
- SPA redirect handling
- branch deploy previews
- environment variable usage

A direct refresh on routes such as `/projects` or future case-study routes must not return a 404.

### 3. Remove obsolete dependencies gradually

Candidates include:

- Material UI 4
- React Reveal
- React Slick
- Slick Carousel
- unused font imports
- unused template-specific packages

Do not remove a package until all active usages are replaced.

### 4. Create design tokens

Introduce central variables for:

- colours
- spacing
- container widths
- border radii
- typography scale
- shadows
- animation duration
- easing curves
- z-index layers
- WebGL overlay layers

Suggested files:

```text
src/styles/tokens.css
src/styles/reset.css
src/styles/typography.css
src/styles/globals.css
src/styles/motion.css
```

### 5. Typography

- Add Sora.
- Add one monospace companion.
- Remove redundant font imports once no longer used.
- Define consistent heading, body, label, and metadata styles.

### 6. Base components

Build or refactor reusable components:

```text
PageContainer
SectionHeader
CommandLabel
PrimaryButton
SecondaryButton
TextLink
StatusBadge
TechnicalDivider
SurfaceCard
LoadingFallback
```

### 7. Accessibility and responsive rules

Create baseline support for:

- visible keyboard focus
- sufficient contrast
- `prefers-reduced-motion`
- responsive spacing
- minimum tap targets
- semantic landmarks

## Deliverables

- modern runtime confirmed
- Netlify deployment still working
- central design tokens
- Sora and monospace typography system
- core UI components
- dark global page shell
- initial navigation shell
- no heavy 3D yet

## Acceptance criteria

- build succeeds locally and on Netlify
- routes work on direct refresh
- old and new sections can coexist during migration
- no unnecessary global CSS leakage
- fonts load reliably
- design tokens are used rather than repeated arbitrary values
- keyboard focus is visible

## Out of scope

- final hero lamp scene
- final project card design
- complete contact terminal
- case-study pages

---

# Phase 3 — Hero, Navigation, and Signature Lamp Experience

## Goal

Build the unique first impression of the portfolio.

## Scope

### 1. Navigation redesign

Create a restrained developer-focused navigation containing:

```text
INDEX
WORK
SYSTEMS
ABOUT
CONTACT
```

Optional right-side status:

```text
AVAILABLE
```

Behaviour:

- transparent or nearly transparent over the hero
- gains a dark surface after scrolling
- active section indicator
- keyboard accessible
- compact mobile menu
- no oversized hamburger animation

### 2. Hero content

Final content direction:

```text
STATUS: AVAILABLE_FOR_MEANINGFUL_WORK

TALHA KHAN

I engineer digital systems
that stay useful after the demo.

Backend-focused full-stack developer building business software,
automation pipelines, integrations, and modern web experiences.
```

Actions:

```text
VIEW SELECTED WORK  →
ESTABLISH CONNECTION
```

Technical metadata rail:

```text
BASED_IN        PAKISTAN
FOCUS           BACKEND + PRODUCT ENGINEERING
MODE            AI-AUGMENTED DEVELOPMENT
AVAILABILITY    REMOTE / WORLDWIDE
```

### 3. Lamp asset

Create a custom web-optimised pendant lamp.

Preferred visual:

- matte-black outer shade
- warm reflective inner surface
- tungsten bulb
- dark cable
- subtle imperfections
- optional tiny `TK` engraving

Requirements:

- correct pivot around suspension point
- modest polygon count
- minimal materials
- compressed GLB
- no unnecessary hidden geometry

### 4. React Three Fiber scene

Build:

- `LampScene`
- `PendantLamp`
- `SpotlightTarget`
- optional `DustParticles`
- loading and fallback state

Interaction:

- convert pointer position to a world target
- smoothly interpolate the light target
- rotate the lamp through damped quaternion movement
- keep the beam aligned with the target
- avoid direct snapping
- add only restrained camera parallax

### 5. Progressive enhancement

The DOM hero must appear immediately. The 3D canvas loads separately.

Fallbacks:

- static or CSS-rendered lamp silhouette
- fixed warm radial light
- no hidden essential text
- reduced-motion mode
- mobile automatic movement

### 6. Performance controls

- lazy-load the 3D bundle
- pause the animation loop when hero is outside the viewport where possible
- cap device pixel ratio
- reduce shadow resolution on mobile
- avoid expensive volumetric effects unless performance is acceptable
- keep initial loading experience visually complete without WebGL

## Deliverables

- final navigation
- complete hero layout
- functional cursor-following lamp
- mobile and reduced-motion behaviour
- hero loading fallback
- hero performance budget documented

## Acceptance criteria

- hero content is readable before 3D loads
- lamp motion feels weighted and stable
- pointer movement does not cause motion sickness or jitter
- mobile experience remains polished
- keyboard users can reach both CTAs
- hero works when WebGL is unavailable
- no major layout shift during scene loading
- Netlify preview performs acceptably on a normal mobile connection

## Out of scope

- full project case-study pages
- complete system-thinking interaction
- final contact form redesign

---

# Phase 4 — Content Architecture, Selected Work, and Engineering Story

## Goal

Replace generic portfolio content with credible evidence of real engineering work.

## Scope

### 1. Restructure the home page

Target section order:

```text
Hero
What I Build
Selected Work
System Thinking
Experience
Toolkit
Process
Experiments
Closing CTA
Contact Terminal
Footer
```

Not every old section must remain. Empty or weak sections should be removed only after the replacement structure is implemented.

### 2. What I Build section

Introduce three capability groups:

```text
01  PRODUCT ENGINEERING
02  BACKEND SYSTEMS
03  AUTOMATION & DATA
```

Each should use concrete examples rather than percentage bars.

### 3. Selected Work

Use three or four real case studies.

Priority candidates:

1. FuelDaftar — multi-business and multi-branch accounting platform
2. Healthcare reporting/data-conversion workflow
3. Resilient web-data or scraping pipeline
4. A meaningful WordPress/WooCommerce product or plugin

Do not use template projects or fake metrics.

### 4. Project data model

Replace the simple card data with a richer schema supporting:

```text
slug
title
eyebrow
summary
problem
role
status
technologies
architecture
keyDecisions
features
challenges
results
lessons
coverImage
screenshots
video
repositoryUrl
demoUrl
confidentialityNote
```

### 5. Project cards

Visual behaviour:

- large editorial project number
- real screenshot or video preview
- dark physical surface
- subtle pointer tilt
- moving reflection or light response
- concise role and technology metadata
- clear `VIEW CASE STUDY` action

Do not add excessive glass or hover movement.

### 6. Case-study pages

Create reusable pages containing:

```text
Context
Problem
Constraints
My Role
Architecture
Key Decisions
Implementation
Result
What I Learned
What I Would Improve
```

The architecture section should communicate technical reasoning visually.

### 7. System-thinking section

Create a lightweight 2.5D diagram rather than another heavy 3D scene.

Possible flow:

```text
Client
API Layer
Application Services
Queues / Jobs
Database
Reporting / Analytics
```

Hover or focus behaviour:

- highlight connected nodes
- reveal short descriptions
- show relevant technologies

### 8. Experience, toolkit, and process

Replace template-style sections with:

- an engineering log for experience
- grouped tools with real usage descriptions
- a five-step workflow:

```text
01 UNDERSTAND
02 MODEL
03 BUILD
04 VERIFY
05 SHIP
```

## Deliverables

- new home-page section structure
- real project data
- three or four selected-work cards
- reusable case-study route and template
- system-thinking visual
- redesigned experience, toolkit, and process sections

## Acceptance criteria

- no template project links remain
- all claims are accurate
- each project communicates the problem and Talha's contribution
- cards work with mouse, keyboard, and touch
- case-study routes work on Netlify direct refresh
- project media is optimised
- the page remains understandable without animation

## Out of scope

- final contact terminal polish
- final site-wide motion pass
- final performance and SEO audit

---

# Phase 5 — Closing CTA and Terminal Contact Interface

## Goal

Create a memorable final interaction that converts visitors into real conversations.

## Scope

### 1. Closing CTA section

Content:

```text
READY_FOR_ENGAGEMENT?

Let's build the future together.

Have a product, workflow, or system worth improving?
Start a conversation and tell me what needs to work better.
```

Actions:

```text
ESTABLISH CONNECTION
DOWNLOAD MANIFEST (CV)
```

Behaviour:

- large centered editorial typography
- subtle chromatic offset or technical shadow, not a constant glitch
- CTA scrolls or transitions into the terminal form
- CV button preserves the existing real resume download

### 2. Terminal shell

Structure:

```text
INITIATE_HANDSHAKE
Terminal Interface

[terminal window]
```

Terminal chrome:

- dark panel
- restrained top bar
- three small status circles
- session title such as `bash — talha@portfolio`
- small status indicator

### 3. Contact form copy

```text
talha@portfolio:~$ ./establish_connection.sh

Searching for available uplink... FOUND.
Opening secure socket layer... READY.

Please provide session metadata below:
```

Fields:

- name
- email
- message
- optional project type, only if it improves qualification without adding friction

### 4. Form implementation

Retain the existing working submission logic until the new form is fully tested.

Required states:

```text
idle
validating
sending
success
error
```

Suggested button text:

```text
EXECUTE  >
```

Loading state:

```text
TRANSMITTING...
```

Success state:

```text
HANDSHAKE_COMPLETE
Transmission accepted. I will respond through the supplied channel.
```

Error state:

```text
CONNECTION_FAILED
Please verify the highlighted fields and retry.
```

### 5. Netlify form decision

During this phase, decide whether to keep the current API/sheet submission or move to one of:

- Netlify Forms
- a Netlify Function
- a dedicated form endpoint

The decision must consider spam, reliability, validation, data privacy, and maintenance.

Do not expose secrets in the browser bundle.

### 6. Accessibility

- visible real labels
- helpful placeholders only as supplementary text
- clear error associations
- success status announced to assistive technology
- sensible tab order
- no fake terminal typing that delays access to the form
- sufficient contrast

### 7. Footer

Minimal content:

```text
GitHub · LinkedIn · Email
Pakistan / Available worldwide
© 2026 Talha Khan
```

Optional final system line:

```text
SESSION_STATUS: OPEN_TO_COLLABORATION
```

## Deliverables

- final closing CTA
- terminal contact UI
- tested submission flow
- loading, error, and success states
- retained CV download
- minimal footer

## Acceptance criteria

- form submits successfully in the Netlify preview environment
- validation is understandable
- keyboard-only submission works
- success and failure states are clear
- terminal design does not reduce usability
- no secrets appear in source or client bundle
- CTA links correctly to the form and CV

## Out of scope

- unrelated backend services
- chatbot
- newsletter system
- complex command-line simulation

---

# Phase 6 — Motion Cohesion, Performance, Accessibility, SEO, and Launch

## Goal

Polish the complete portfolio into a fast, accessible, production-ready experience.

## Scope

### 1. Unified motion system

Apply motion selectively:

- section reveal transitions
- subtle scroll-linked editorial typography
- lamp continuity where appropriate
- project card hover responses
- architecture-line illumination
- process-step progression
- navigation active state
- button arrow movement
- contact form state transitions

Avoid:

- constant text scrambling
- repeated glitch effects
- scroll hijacking
- long entrance delays
- motion on every element
- animations that prevent immediate reading

### 2. Reduced-motion mode

When `prefers-reduced-motion` is enabled:

- disable cursor-following lamp rotation or simplify it heavily
- remove parallax
- remove nonessential particle motion
- replace animated reveals with immediate visibility or simple fades
- preserve all functionality

### 3. Performance optimisation

Optimise:

- GLB geometry and textures
- images and videos
- route-level code splitting
- 3D scene lazy loading
- font loading
- unused JavaScript
- duplicate dependencies
- animation loop activity
- device pixel ratio
- shadow resolution

Targets should be realistic and measured rather than promised blindly.

Suggested initial goals:

- no severe Core Web Vitals problems
- fast readable DOM content before 3D is ready
- no major cumulative layout shift
- mobile experience remains usable on mid-range devices

### 4. Accessibility audit

Check:

- semantic headings
- landmark structure
- keyboard navigation
- focus order
- focus visibility
- colour contrast
- form labels and errors
- alt text
- reduced-motion behaviour
- menu accessibility
- interactive project cards
- skip-to-content link

### 5. SEO and sharing

Add or verify:

- accurate page title and description
- canonical URL
- Open Graph metadata
- Twitter card metadata
- social preview image
- favicon and application icons
- sitemap where appropriate
- robots configuration
- structured data for Person and selected projects where useful
- meaningful case-study URLs

Remove old template names and references from metadata and console messages.

### 6. Browser and device testing

Test:

- Chrome
- Firefox
- Safari where available
- Edge
- desktop sizes
- tablet sizes
- mobile sizes from approximately 360px upward
- touch behaviour
- direct route refresh
- slow network loading
- WebGL unavailable or reduced cases

### 7. Netlify launch verification

- confirm production branch
- confirm build command and publish directory
- confirm redirects
- confirm environment variables
- confirm contact submissions
- confirm custom domain and HTTPS
- confirm old public URLs either still work or redirect intentionally
- perform final deploy preview review
- merge through pull request
- monitor the first production deployment

### 8. Final documentation

Update:

- README setup instructions
- dependency notes
- Netlify deployment notes
- asset optimisation guidance
- how to add a new project
- how to update resume and contact information
- known limitations

## Deliverables

- cohesive motion system
- reduced-motion support
- optimised assets and bundles
- accessibility review
- SEO and social metadata
- browser/device verification
- final README and maintenance notes
- production Netlify launch

## Acceptance criteria

- production deployment succeeds
- contact form works in production
- important routes refresh correctly
- no known critical accessibility issue remains
- no major console errors remain
- essential content renders even if 3D fails
- mobile experience remains responsive and readable
- metadata no longer references the original template
- repository documentation explains ongoing maintenance

---

# 3. Proposed Final Information Architecture

```text
/
├── Hero
├── What I Build
├── Selected Work
├── System Thinking
├── Experience
├── Toolkit
├── Process
├── Experiments
├── Let's Build the Future Together
├── Terminal Contact
└── Footer

/projects
└── All selected and archived projects

/work/:slug
└── Reusable project case study
```

The exact route naming may follow the current repository's conventions after Phase 1 inspection.

---

# 4. Proposed Component Direction

```text
src/
├── app/
│   ├── App
│   ├── routes
│   └── providers
├── components/
│   ├── Navigation
│   ├── CommandLabel
│   ├── SectionHeader
│   ├── PrimaryButton
│   ├── SecondaryButton
│   ├── ProjectCard
│   ├── TechnicalDivider
│   └── LoadingFallback
├── sections/
│   ├── Hero
│   ├── Capabilities
│   ├── SelectedWork
│   ├── SystemThinking
│   ├── Experience
│   ├── Toolkit
│   ├── Process
│   ├── Experiments
│   ├── ClosingCTA
│   └── ContactTerminal
├── three/
│   └── LampScene
│       ├── PendantLamp
│       ├── SpotlightTarget
│       └── DustParticles
├── pages/
│   ├── HomePage
│   ├── ProjectsPage
│   └── CaseStudyPage
├── data/
│   ├── profile
│   ├── projects
│   ├── experience
│   ├── skills
│   └── navigation
├── styles/
│   ├── tokens.css
│   ├── reset.css
│   ├── typography.css
│   ├── globals.css
│   └── motion.css
└── assets/
    ├── models
    ├── images
    ├── videos
    └── textures
```

This is a direction, not permission for an agent to reorganise the whole repository in one change. The structure must be adopted incrementally and only where it improves clarity.

---

# 5. Phase Execution Template

Before beginning any phase, the implementation agent must provide:

```text
Phase:
Goal:
Existing files inspected:
Files expected to change:
Dependencies expected to change:
Netlify impact:
Risks:
Validation plan:
```

After completing the phase, the agent must provide:

```text
What changed:
Why it changed:
Files changed:
Build result:
Responsive checks:
Accessibility checks:
Netlify preview result:
Known limitations:
Next recommended phase:
```

---

# 6. Final Product Statement

The finished portfolio should feel like a **developer's illuminated command space**: dark, precise, cinematic, technically credible, and unmistakably personal.

The signature lamp attracts attention.  
The engineering case studies build trust.  
The system diagrams demonstrate thinking.  
The terminal contact experience converts interest into conversation.  
The restrained motion and hand-built architecture prevent the result from feeling like AI-generated visual noise.

Implementation must proceed one approved phase at a time.
