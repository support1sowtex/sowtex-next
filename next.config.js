/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sowtex.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
