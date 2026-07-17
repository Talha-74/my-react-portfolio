# Portfolio implementation plan

This plan turns the `Signal in the Dark` concept from `docs/portfolio-revamp.md` into reviewable implementation phases.

## Phase 1 — repository cleanup and migration

Scope:

- Work on `revamp/v2`.
- Record existing routes and reusable content before the visual redesign.
- Migrate from Create React App to Vite.
- Upgrade React to the React 18 rendering API.
- Add TypeScript support progressively while keeping existing JavaScript files valid.
- Remove Material UI, React Reveal and React Slick from the runtime path.
- Establish linting configuration for the Vite foundation.
- Confirm production build command and publish directory for Netlify.

Out of scope:

- No visual redesign.
- No new case-study content.
- No pendant-lamp WebGL implementation.
- No section removals beyond dependency/runtime cleanup.

Existing routes to preserve:

- `/`
- `/blog`
- `/projects`

Reusable source content to preserve for later phases:

- `src/data/headerData.js`
- `src/data/aboutData.js`
- `src/data/projectsData.js`
- `src/data/experienceData.js`
- `src/data/skillsData.js`
- `src/data/contactsData.js`
- `src/assets/pdf/resume.pdf`
- current image and SVG assets until their replacements are implemented

Netlify assumptions after Phase 1:

- Build command: `npm run build`
- Publish directory: `dist`
- Client-side route fallback still needs to be configured in Netlify before deploy previews are considered complete.

## Phase 2 — design system

Define the dark editorial visual language, typography, tokens, navigation and reusable components before redesigning sections.
