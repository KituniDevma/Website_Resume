# Website Resume (modern)

Modern rebuild of [KituniDevma/Website_Resume](https://github.com/KituniDevma/Website_Resume) using **React + TypeScript + Vite**.

## Stack

- React 19 + TypeScript
- Vite 8
- Framer Motion (hero entrance, tabs, project reveal, mobile nav)
- CSS custom properties (no CSS framework)

## Run locally

```bash
cd website-resume
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## What’s improved

- Component-based UI with typed content in `src/data/content.ts`
- Accessible tabs and mobile navigation (original mobile menu had a broken `sidemenu` id)
- Responsive full-bleed hero with mobile-specific artwork
- Contact form still posts to the existing Google Apps Script endpoint
- Cleaner project layout with tags and GitHub links

## Original static site

The untouched clone lives in `../website-resume-original/` for reference.
