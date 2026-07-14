import { copyFileSync, cpSync, existsSync, rmSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function restoreViteHtml() {
  if (existsSync('index.vite.html')) {
    copyFileSync('index.vite.html', 'index.html')
  }
}

function publishDistToRoot() {
  if (!existsSync('dist/index.html')) return
  copyFileSync('dist/index.html', 'index.html')
  if (existsSync('assets')) rmSync('assets', { recursive: true, force: true })
  cpSync('dist/assets', 'assets', { recursive: true })
  for (const file of [
    'logo.png',
    'background.png',
    'phone-background.png',
    'user.png',
    'project-1.png',
    'project-3.png',
    'project-4.png',
    'project-5.png',
    'project-llm-kg.png',
    'project-parkease.png',
    'Kithuni_Devma_CV.pdf',
  ]) {
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pagesRootPlugin()],
  base: '/Website_Resume/',
})
