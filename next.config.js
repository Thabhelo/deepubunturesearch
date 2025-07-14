/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Keep ESLint checks
  },
  typescript: {
    ignoreBuildErrors: false, // Keep TypeScript checks
  },
  images: {
    domains: ['localhost'],
  },
  webpack: (config, { isServer }) => {
    // Handle GSAP and browser-only packages
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    return config
  },
}

module.exports = nextConfig 