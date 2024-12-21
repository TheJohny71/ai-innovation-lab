/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ai-innovation-lab',
  assetPrefix: '/ai-innovation-lab/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig