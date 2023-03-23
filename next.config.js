/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcMinify: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.buzzfeed.com",
      },
    ],
  },
  env: {
    API_KEY: "Replace this with your api key",
  },
};

module.exports = nextConfig;
