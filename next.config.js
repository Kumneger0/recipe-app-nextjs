/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.buzzfeed.com",
      },
    ],
  },
  env: {
    API_KEY: "d0ca022650mshf6f29a711c5a66dp113cb4jsnb35e2dd638b5",
  },
};

module.exports = nextConfig;
