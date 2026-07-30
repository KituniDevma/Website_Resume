import type { NextConfig } from 'next'

/**
 * GitHub Pages serves this site from the `/Website_Resume` project subpath.
 * Set NEXT_PUBLIC_BASE_PATH='' when moving to a custom domain served at root.
 */
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? '/Website_Resume' : '')

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

export default nextConfig
