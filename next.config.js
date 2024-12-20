/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ai-innovation-lab' : '',
  images: {
    loader: 'custom',
    unoptimized: true
  }
}

module.exports = nextConfig
