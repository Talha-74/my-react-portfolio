# Netlify deployment notes

## Phase 2 runtime

The portfolio now uses Vite for local development and production builds.

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects: `netlify.toml` and `public/_redirects` both route unknown paths to `/index.html` so direct refreshes such as `/projects` and `/blog` resolve through the React router.

## Environment variables

No repository secrets or required runtime environment variables are introduced in Phase 2.

If future Vite client-side variables are needed, they must use the `VITE_` prefix and be configured through Netlify, not committed to the repository.

## Lockfile note

The previous lockfiles were generated for the Create React App runtime. Phase 2 removes those stale lockfiles so the first Netlify preview install resolves dependencies from the updated Vite `package.json`.
