# Website Resume

Portfolio of Kithuni Devma Wickramasinghe, built with **Next.js + TypeScript** and deployed as a static export to GitHub Pages.

## Stack

- Next.js 16 (App Router, `output: 'export'`)
- React 19 + TypeScript
- Framer Motion (hero entrance, tabs, project reveal, mobile nav)
- CSS custom properties (no CSS framework)

## Run locally

```bash
cd website-resume
npm install
npm run dev
```

Build the static site:

```bash
npm run build   # writes ./out
```

## Deployment

GitHub Pages publishes this repository's **main-branch root**, so `npm run build`
also copies the export from `out/` into the repo root (see
`scripts/publish-to-root.mjs`). To ship a change:

```bash
npm run build
git add -A
git commit -m "Update site"
git push
```

The site is served from the `/Website_Resume` project subpath, so
`next.config.ts` sets `basePath` accordingly. When moving to a custom domain
served at the root, build with `NEXT_PUBLIC_BASE_PATH=''`.

Because `_next/` starts with an underscore, the `.nojekyll` file is required so
GitHub Pages does not run the output through Jekyll.

Note that this publishing mode also serves the source files (`package.json`,
`src/`) publicly. Switching Pages to the "GitHub Actions" source would keep the
build output out of the repo and stop serving source files.

## SEO

Content is prerendered into the HTML at build time, so crawlers see the full
page without executing JavaScript. `src/app/layout.tsx` holds the metadata,
Open Graph tags, and `Person` JSON-LD; `sitemap.xml` and `robots.txt` are
generated from `src/app/sitemap.ts` and `src/app/robots.ts`.

## Content

All copy lives in `src/data/content.ts` — profile, stats, experience, skills,
projects, and publications. The downloadable CV is `public/Kithuni_Devma_CV.pdf`.

## Original static site

The untouched clone lives in `../website-resume-original/` for reference.
