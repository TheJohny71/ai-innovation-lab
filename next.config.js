/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ai-innovation-lab' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
