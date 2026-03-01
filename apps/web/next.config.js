/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@slugger/ui', '@slugger/db', '@slugger/types'],
  images: {
    domains: ['images.unsplash.com'],
  },
  // Static export for deployment
  output: 'export',
  distDir: 'dist',
  // Dynamic routes will be handled at runtime
  trailingSlash: true,
}

module.exports = nextConfig
