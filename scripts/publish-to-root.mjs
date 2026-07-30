/**
 * GitHub Pages serves this repository's main-branch root, so the static export
 * in `out/` is copied to the repo root after every build and committed.
 */
import { cpSync, existsSync, readdirSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'out')

if (!existsSync(join(out, 'index.html'))) {
  console.error('publish-to-root: out/index.html is missing — run `next build` first.')
  process.exit(1)
}

// Replaced wholesale so renamed chunks from previous builds do not linger.
const generated = ['_next', 'assets', '404', '_not-found']
for (const name of generated) {
  rmSync(join(root, name), { recursive: true, force: true })
}

const copied = []
for (const entry of readdirSync(out)) {
  cpSync(join(out, entry), join(root, entry), { recursive: true })
  copied.push(entry)
}

console.log(`publish-to-root: copied ${copied.length} entries from out/ to the repo root.`)
