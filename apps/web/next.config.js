/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@slugger/ui', '@slugger/db', '@slugger/types'],
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
}

module.exports = nextConfig
