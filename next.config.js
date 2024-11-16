/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  // Disable server components since we're using static export
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig