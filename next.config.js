/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/ai-innovation-lab', // Add your repository name
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
