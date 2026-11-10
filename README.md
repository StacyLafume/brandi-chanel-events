# Brandi Chanel Portfolio

A portfolio website for Brandi Chanel, a Boston-based
multidisciplinary creative working across art curation,
event production, music curation, and real estate.

## Live Site

https://brandi-chanel-events.netlify.app/

## Current Features

- Portrait-led introduction
- Responsive layout using Material UI breakpoints
- Email booking link
- “Explore Her Work” button pointing to a future
  art-curation section

## Project Status

In development. The current application renders the hero
section; the art-curation section is not yet implemented.

This project was adapted from the NOSA codebase. Legacy
components, content, dependencies, and build tooling remain
in the repository but are not all used by the current page.

The original NOSA site is available separately:
https://nosa-boston-archive.netlify.app/

## Tech Stack

React, JavaScript, Material UI, Emotion, HTML, and CSS.

Built with React Scripts and hosted on Netlify.

## Run Locally

Install Node.js and npm, then run:

```bash
git clone https://github.com/StacyLafume/brandi-chanel-events.git
cd brandi-chanel-events
npm install
npm start
```

Open http://localhost:3000/.

## Production Build

```bash
npm run build
```

The output is generated in `build/`.

The build command first runs `public/main.js`, an inherited
NOSA content-processing script. It may regenerate tracked
JSON files under `src/content/`; inspect those changes
before committing.

## Main Files

- `src/App.js` — renders the current page
- `src/pages/Hero.jsx` — portrait, introduction, and buttons
- `src/images/` — image assets
- `public/index.html` — HTML template and browser-tab title
- `public/main.js` — inherited content-processing script

## Netlify Settings

- Production branch: `main`
- Build command: `npm run build`
- Publish directory: `build`

## Developer

Built by Stacy Lafume.
https://stacylafume.com/
