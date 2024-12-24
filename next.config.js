/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS || false; // Check if running in GitHub Actions
const repo = "ai-innovation-lab"; // Replace with your GitHub repo name

const nextConfig = {
  output: "export", // Use static export mode
  basePath: isGitHubPages ? `/${repo}` : "", // Set the basePath for GitHub Pages
  assetPrefix: isGitHubPages ? `/${repo}/` : "", // Ensure static assets load correctly
};

module.exports = nextConfig;
