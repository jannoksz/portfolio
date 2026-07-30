# Rey Cardama — Portfolio

Personal portfolio site for Rey E. Cardama, Platform Support Specialist.

**Live site:** https://jannoksz.github.io/portfolio/

Built with React + Vite. Auto-deploys to GitHub Pages via GitHub Actions on every push to `main`.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Updating content

All resume content (experience, skills, education) lives in data arrays near the top of `src/App.jsx` — edit those, then:

```bash
git add .
git commit -m "update content"
git push
```

The site rebuilds and redeploys automatically — check the **Actions** tab in the repo to watch progress. Changes are usually live within 1–2 minutes.

## Deployment notes

- Deploys via `.github/workflows/deploy.yml` using GitHub Pages' native Actions deployment (no `gh-pages` branch or manual build step needed).
- `vite.config.js` sets `base: '/portfolio/'` to match this repo's name — if the repo is ever renamed, update this value to match, or the site will break.