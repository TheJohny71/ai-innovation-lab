/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ai-innovation-lab',
  assetPrefix: '/ai-innovation-lab/',
  trailingSlash: true,
}

module.exports = nextConfig