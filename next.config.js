/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    ENDPOINT: process.env.ENDPOINT,
  },

  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `${process.env.ENDPOINT}/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
