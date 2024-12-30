import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  ignoreDuringBuilds: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
      },
    ],
  },
};

export default nextConfig;
