/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stimg.cardekho.com",
      },
      {
        protocol: "https",
        hostname: "images10.gaadi.com",
      },
      {
        protocol: "https",
        hostname: "mediaim.expedia.com",
      },
      {
        protocol: "https",
        hostname: "external-content.duckduckgo.com",
      },
    ],
  },
};

module.exports = nextConfig;
