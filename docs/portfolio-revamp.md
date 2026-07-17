# Recommendation: rebuild the design, not the repository

I inspected your GitHub project. We should **keep the repository, content structure and useful data files**, but replace most of the existing presentation layer.

The current project is based on **React 17, Create React App 4, Material UI 4 and React Reveal**. The home page currently renders many independent template-style sections—Landing, About, Education, Skills, Experience, Projects, Services, Testimonials, Blog and Contact.

The revamp should therefore be a **controlled rebuild inside the same repository**, not a few CSS adjustments.

---

# Final visual concept: **Signal in the Dark**

The portfolio will feel like a dark, cinematic engineering studio.

The central idea:

> **Talha builds clarity out of complex systems. The lamp represents that clarity.**

## Visual direction

We should not combine every inspiration literally. That would produce a confused design.

We will take:

* **Editorial typography and layout** from the black-and-red portfolios.
* **Premium black, cream and metallic details** from the black-and-gold design.
* **Tactile glass and realistic surfaces** from the leaf card.
* **Cinematic storytelling** from the night-sky website.
* **Interactive lighting** from the pendant-lamp experiment.
* **Clean structure** from the simpler developer portfolio.

We should avoid the generic white/orange agency style and avoid covering every section with glassmorphism.

### Palette

```text
Ink Black       #070707
Carbon          #111214
Warm Ivory      #E9E2D6
Signal Red      #FF493D
Tungsten Gold   #D3A35D
Muted Grey      #929292
```

The lamp produces warm golden light. Red is reserved for buttons, numbering, active navigation and important details.

### Typography

* **Sora** — headings, body text, buttons and navigation
* **IBM Plex Mono or Geist Mono** — metadata, dates, technologies and project numbers

Your current stylesheet imports around seven different font families. We should reduce that to two carefully controlled families.

---

# What the opening will look like

The site opens on an almost-black screen.

A thin cable descends from the top. The pendant lamp softly turns on, revealing parts of the hero rather than illuminating the whole screen at once.

Behind the lamp is enormous editorial typography:

```text
TALHA
KHAN
```

Alongside it:

```text
BACKEND ENGINEER
FULL-STACK BUILDER
AI-NATIVE DEVELOPER
```

Main statement:

> **Backend thinking. Frontend impact.**

Supporting copy:

> I build reliable web systems, automation pipelines and digital products that solve real business problems.

Primary actions:

```text
VIEW SELECTED WORK  →
START A CONVERSATION
```

The pointer moves the beam across the page. The lamp shade turns toward it with believable weight and inertia. Different words become brighter as the light passes over them.

On idle, the lamp moves slightly as though affected by air.

Your current hero uses a conventional split-screen layout with a circular profile image positioned between two coloured columns. We will completely replace that with the cinematic full-screen scene.

---

# Portfolio structure

## 1. Hero — the signature experience

The pendant lamp will be the only large 3D object above the fold.

Features:

* Pointer-following spotlight
* Smooth spring-based lamp rotation
* Real-time shadows
* Soft volumetric light cone
* Very restrained bloom
* Dust particles visible inside the beam
* Large typography reacting subtly to light
* Scroll indicator integrated into the lamp cable
* Automatic gentle motion on touch devices

A professional portrait should not be forced into the hero. It can appear later in the About section, provided you have a strong high-resolution photograph.

---

## 2. Introduction — “What I actually build”

After scrolling, the lamp beam widens and reveals a concise introduction:

> I work where business rules, backend architecture, automation and interface design meet.

Three large capabilities:

```text
01  PRODUCT ENGINEERING
02  BACKEND SYSTEMS
03  AUTOMATION & DATA
```

Each item expands on hover to show practical examples rather than generic skill percentages.

For example:

* Laravel applications
* Multi-tenant systems
* Accounting workflows
* Web-scraping pipelines
* API integrations
* AI-assisted product development

No animated progress bars claiming “PHP 95%.”

---

## 3. Selected work — the most important section

The portfolio should show **three or four serious case studies**, not eight generic project cards.

Your current project data still contains generic template projects, stock SVGs and repeated links to the original template repository. This must be replaced before the visual revamp can feel credible.

Suggested case studies:

### FuelDaftar

```text
MULTI-BRANCH ACCOUNTING PLATFORM
Laravel · Financial Workflows · Reporting
```

Show:

* Dashboard video
* Transaction workflow
* Multi-business and branch structure
* Reporting system
* Architecture diagram
* Important engineering decisions

### Healthcare data automation

Use a non-confidential title where necessary:

```text
HEALTHCARE REPORTING PIPELINE
Data Conversion · Automation · Dashboards
```

Show the workflow visually:

```text
Source files → Validation → Transformation → Database → Dashboard
```

### Automated data collection platform

```text
RESILIENT WEB DATA PIPELINE
Browser Automation · Scraping · Monitoring
```

Show:

* Discovery process
* Handling dynamic websites
* Deduplication
* Scheduled jobs
* Failure monitoring

### WordPress or WooCommerce work

Only include this when you can demonstrate a real plugin, meaningful feature or measurable result.

## Project card behaviour

Each project appears as a large physical-looking glass panel inspired by the leaf image:

* A project screenshot occupies approximately 60% of the card.
* The card tilts subtly toward the pointer.
* Light moves across its surface.
* Technology tags appear as small engraved labels.
* Hovering reveals “View case study.”
* Clicking expands the card into the case-study route.

The full case study should contain:

```text
Context
Problem
Constraints
My role
Architecture
Key decisions
Implementation
Result
What I would improve
```

That will demonstrate engineering maturity much better than a gallery of screenshots.

---

## 4. System-thinking section

This is where the portfolio becomes different from a normal frontend portfolio.

A lightweight interactive system map shows:

```text
Client
   ↓
API Gateway
   ↓
Application Services
   ↓
Queues / Jobs
   ↓
Database
   ↓
Analytics
```

As the visitor moves over a node:

* Related connections brighten.
* A short explanation appears.
* Relevant technologies become visible.
* The camera shifts slightly, not dramatically.

This can represent how you think rather than claiming familiarity with random tools.

The visual can resemble a dark technical blueprint with glowing red and amber nodes. It should be 2.5D rather than another heavy photorealistic scene.

---

## 5. Experience — presented as shipped work

Instead of a standard resume timeline, present experience as an engineering log:

```text
2026 / NOW
Building software with AI-assisted development workflows

2025
Laravel, WordPress and automation products

2024
Production web applications and backend systems
```

Each entry opens to show:

* Responsibility
* Type of systems built
* Technical challenge
* Contribution
* Outcome

A narrow line travels down the timeline as the visitor scrolls.

---

## 6. Skills — an organised toolkit

Use four groups instead of one wall of logos:

```text
BACKEND
Laravel · PHP · REST APIs · Authentication · Queues

DATA & AUTOMATION
Python · Scraping · ETL · Scheduled Jobs · Integrations

FRONTEND
React · Three.js · Responsive UI · Motion

INFRASTRUCTURE
Git · Linux · Deployment · Databases · Monitoring
```

Technology icons can sit on dark metallic tiles with a faint engraved effect. Hovering should reveal what you have actually done with each technology.

---

## 7. Process

Borrow the strong numbered structure from the editorial references:

```text
01  UNDERSTAND
02  MODEL
03  BUILD
04  VERIFY
05  SHIP
```

As each step enters the viewport, a thin light line travels through it.

Keep the copy practical:

> I begin with the business rules, model the data and edge cases, build the smallest reliable version, verify real workflows, and then improve it.

---

## 8. Experiments / Lab

A small section for work that is visually impressive but may not be a complete product:

* Interactive pendant light
* Three.js experiments
* AI-assisted interfaces
* Data visualisation
* Browser automation prototypes
* UI explorations

This prevents experimental work from being confused with production case studies.

---

## 9. Contact — the final light scene

At the final section, most of the page becomes dark again.

The lamp lowers closer to the contact panel and illuminates:

```text
HAVE A SYSTEM
WORTH BUILDING?
```

The form appears inside a dark glass surface:

* Name
* Email
* Project type
* Message
* Send button

The beam becomes slightly brighter when the user focuses on a field.

The footer remains minimal:

```text
GitHub · LinkedIn · Email
Pakistan / Available worldwide
© 2026 Talha Khan
```

---

# Motion system

Motion should support the story rather than make every element bounce.

## Primary motion

* Lamp follows pointer with spring inertia.
* Spotlight target moves independently of the lamp body.
* Project cards use restrained perspective tilt.
* Large words move at slightly different scroll speeds.
* Project pages use shared-element transitions.
* Section numbers draw into place.
* Architecture lines illuminate progressively.

## Micro-interactions

* Magnetic movement on primary buttons
* Animated arrows
* Text underline travelling from left to right
* Navigation active-state indicator
* Slight letter-spacing change on hover
* Technology badges rising by two or three pixels
* Form focus glow

## What we should avoid

* Constant text scrambling
* Excessive page-transition delays
* Large custom cursor replacing the real cursor
* Every section using parallax
* Multiple unrelated 3D objects
* Strong bloom everywhere
* Scroll-jacking
* Background video behind important text

---

# The 3D pendant lamp

## Blender asset

The lamp can be custom-built in Blender with:

* Matte-black metal shade
* Brushed metallic inner rim
* Warm emissive bulb
* Flexible dark cable
* Slight surface imperfections
* Optional tiny engraved `TK` mark

It does not need to be an extremely complicated model. Its quality will come from materials, lighting and movement.

Export format:

```text
lamp.glb
```

The model should be optimised:

* Modest polygon count
* Minimal material count
* Compressed geometry
* Small textures
* No unnecessary hidden geometry
* Correct pivot around the cable connection

## Web implementation

Use React Three Fiber for:

* Lamp mesh
* Spotlight
* Pointer-to-world conversion
* Shadows
* Camera movement
* Light cone
* Dust particles

Use a damped spring or quaternion interpolation for the lamp. A full physics engine is unnecessary unless we decide to simulate a genuinely flexible cable.

On mobile:

* Lamp automatically swings gently.
* Device movement may create tiny parallax where supported.
* The spotlight never hides essential content.
* Heavy shadows and post-processing are reduced.

---

# Technical foundation

The existing app runs React 17 under Create React App. Modern Motion requires React 18.2 or above, while current React Three Fiber supports React 18 and 19. ([Motion][1])

Create React App has also officially been deprecated, with the React team recommending migration to a framework or a build tool such as Vite. ([React][2])

## Recommended stack

```text
Vite
React
TypeScript
React Three Fiber
Three.js
Drei
Motion for React
CSS Modules or structured global CSS
Modern React Router
```

Vite provides an official React template and a modern development/build setup. ([vitejs][3]) Motion handles component, gesture, layout and scroll interactions, while React Three Fiber handles the WebGL scene. ([Motion][4])

I would remove:

```text
Create React App
Material UI 4
React Reveal
React Slick
Unused font imports
Old template styling
Unused generic sections
```

We should not add Tailwind merely because it is popular. A project this visually specific benefits from carefully named components and central design tokens.

---

# Proposed code structure

```text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers.tsx
│
├── components/
│   ├── Button/
│   ├── SectionTitle/
│   ├── ProjectCard/
│   ├── Navigation/
│   └── CursorLight/
│
├── sections/
│   ├── Hero/
│   ├── Introduction/
│   ├── SelectedWork/
│   ├── SystemThinking/
│   ├── Experience/
│   ├── Toolkit/
│   ├── Process/
│   ├── Lab/
│   └── Contact/
│
├── three/
│   ├── LampScene/
│   ├── PendantLamp/
│   ├── SpotlightTarget/
│   └── SystemMap/
│
├── pages/
│   ├── HomePage/
│   ├── ProjectsPage/
│   └── CaseStudyPage/
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
│
├── styles/
│   ├── tokens.css
│   ├── typography.css
│   ├── reset.css
│   └── globals.css
│
└── assets/
    ├── models/
    ├── images/
    ├── videos/
    └── textures/
```

The existing data-driven idea can remain, but the schemas should be expanded for genuine case studies.

---

# Implementation roadmap

## Phase 1 — repository cleanup and migration

* Create a dedicated `revamp/v2` branch.
* Record the existing routes and reusable content.
* Migrate from CRA to Vite.
* Upgrade React.
* Add TypeScript progressively.
* Remove Material UI and React Reveal.
* Establish formatting and linting.
* Confirm deployment still works.

**Result:** same repository, modern foundation, no visual redesign yet.

## Phase 2 — design system

* Add Sora and one monospace companion.
* Define colour, spacing, typography and motion tokens.
* Build buttons, labels, section headings and cards.
* Create desktop, tablet and mobile layout rules.
* Build the dark editorial navigation.

**Result:** a reusable visual language before individual sections are created.

## Phase 3 — content restructuring

* Replace template project records.
* Select three main case studies.
* Write concise engineering-oriented copy.
* Gather real screenshots and recordings.
* Remove empty Blog, Achievement or Testimonial sections unless genuine content exists.
* Rewrite the headline and About text.

**Result:** the portfolio says something credible even without animation.

## Phase 4 — hero and lamp

* Model or create the lamp.
* Export and optimise the GLB.
* Build the React Three Fiber scene.
* Implement pointer-following light.
* Add spring movement.
* Add hero typography.
* Add mobile and reduced-motion fallbacks.
* Lazy-load the 3D scene.

**Result:** the signature interaction is complete.

## Phase 5 — selected work and case studies

* Build three large project cards.
* Add pointer tilt and light reflections.
* Create reusable case-study templates.
* Add architecture diagrams.
* Add project videos and screenshots.
* Build transitions from card to project page.

**Result:** the strongest professional proof is complete.

## Phase 6 — remaining sections

* System-thinking visual
* Experience log
* Toolkit
* Process
* Experiments
* Contact
* Footer

**Result:** complete portfolio structure.

## Phase 7 — motion polish

* Section entrance animations
* Scroll-linked typography
* Magnetic buttons
* Navigation indicator
* Page transitions
* Form interactions
* Mobile motion tuning
* Reduced-motion mode

**Result:** animations feel connected rather than independently added.

## Phase 8 — performance and quality

* Compress images and video.
* Compress the GLB.
* Lazy-load case studies and 3D.
* Pause WebGL when the hero is outside the viewport.
* Restrict device-pixel ratio on weaker devices.
* Disable expensive effects on mobile.
* Test keyboard navigation.
* Check text contrast.
* Test Safari, Chrome and Firefox.
* Test 360px through ultrawide layouts.
* Check metadata, social preview and structured project information.

---

# Realistic scope

A strong implementation is approximately **12–18 focused development days**, excluding delays in collecting project screenshots and writing case-study content.

The lamp itself is not the hardest part. The time-consuming work will be:

* Migrating the old project safely
* Producing authentic case studies
* Optimising WebGL
* Making interactions work well on mobile
* Maintaining visual consistency through the entire page

# Final direction

This should **not** become another template with a portrait, some skill bars and rotating technology icons.

The final experience should feel like:

> A dark editorial engineering portfolio where a physical light guides visitors through real products, system architecture and the way Talha solves problems.

The pendant lamp is the signature.
The project case studies are the substance.
Sora and the editorial layout create the identity.
The animations make it memorable without turning it into a demo that recruiters struggle to use.

[1]: https://motion.dev/docs/react-installation?utm_source=chatgpt.com "How to install Motion for React | Motion for React"
[2]: https://react.dev/blog/2025/02/14/sunsetting-create-react-app?utm_source=chatgpt.com "Sunsetting Create React App – React"
[3]: https://vite.dev/guide/?utm_source=chatgpt.com "Getting Started | Vite"
[4]: https://motion.dev/docs/react?utm_source=chatgpt.com "Motion for React: Get started - React Animation Library | Motion for React"
