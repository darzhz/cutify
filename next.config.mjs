/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  experimental: {
    appDir: true,
  },
  images:{
    domains: ['placehold.co']
  }
}

export default nextConfig
