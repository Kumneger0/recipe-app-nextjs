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
    API_KEY: "2a3f82251amsh65a256bb11e9a6cp1ca354jsn2c3129658aad",
  },
};

module.exports = nextConfig;
