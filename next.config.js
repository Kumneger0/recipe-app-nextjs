/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
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
    API_KEY: "7320a25616mshc031aecbb8524e1p108be3jsn12c8d64b59d5",
  },
};

module.exports = nextConfig;
