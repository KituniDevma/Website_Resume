/** Prefixed asset path for GitHub Pages (`base: '/Website_Resume/'`). */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
