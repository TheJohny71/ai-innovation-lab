/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ai-innovation-lab' : '',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  distDir: 'dist'
}

module.exports = nextConfig
