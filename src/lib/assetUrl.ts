export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Prefixed path for files in `public/`, which Next does not rewrite for plain `src`/`href`. */
export function assetUrl(path: string): string {
  return `${basePath}/${path.replace(/^\//, '')}`
}
