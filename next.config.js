/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ai-innovation-lab',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/ai-innovation-lab/',
}

module.exports = nextConfig