/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Export directory indexes for GitHub Pages; keep dev URLs stable.
  trailingSlash: process.env.NODE_ENV === 'production',
  images: {
    unoptimized: true,
    domains: ['cdn.jsdelivr.net', 'raw.githubusercontent.com', 'media.licdn.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
}

module.exports = nextConfig