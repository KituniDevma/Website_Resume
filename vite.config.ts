import { copyFileSync, cpSync, existsSync, readdirSync, rmSync, unlinkSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function restoreViteHtml() {
  if (existsSync('index.vite.html')) {
    copyFileSync('index.vite.html', 'index.html')
  }
}

const STATIC_FILES = [
  'logo.png',
  'background.webp',
  'phone-background.webp',
  'user.webp',
  'project-1.webp',
  'project-3.webp',
  'project-4.webp',
  'project-5.webp',
  'project-llm-kg.webp',
  'project-parkease.webp',
  'Kithuni_Devma_CV.pdf',
]

function publishDistToRoot() {
  if (!existsSync('dist/index.html')) return
  copyFileSync('dist/index.html', 'index.html')
  if (existsSync('assets')) rmSync('assets', { recursive: true, force: true })
  cpSync('dist/assets', 'assets', { recursive: true })

  // Remove stale root media from older deploys
  for (const name of readdirSync('.')) {
    if (
      (name.endsWith('.png') || name.endsWith('.webp') || name.endsWith('.jpg')) &&
      !STATIC_FILES.includes(name) &&
      name !== 'logo.png'
    ) {
      try {
        unlinkSync(name)
      } catch {
        // ignore
      }
    }
  }

  for (const file of STATIC_FILES) {
    const from = `dist/${file}`
    if (existsSync(from)) copyFileSync(from, file)
  }
}

function pagesRootPlugin() {
  return {
    name: 'pages-root-publish',
    buildStart() {
      restoreViteHtml()
    },
    closeBundle() {
      publishDistToRoot()
    },
  }
}

export default defineConfig({
  plugins: [react(), pagesRootPlugin()],
  base: '/Website_Resume/',
})
