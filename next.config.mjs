/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin-portfolio.wihant.com",
        // pathname: '/account123/**',
      },
    ],
  },};

export default nextConfig;
