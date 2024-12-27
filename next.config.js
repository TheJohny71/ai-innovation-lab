/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ai-innovation-lab',
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
