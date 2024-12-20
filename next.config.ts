/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ai-innovation-lab',
  images: {
    unoptimized: true,
  },
  // Add this to disable image optimization which can cause build issues
  distDir: 'build',
}

module.exports = nextConfig