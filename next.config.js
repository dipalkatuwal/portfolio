/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
  // Enables gzip compression on Vercel / Node server
  compress: true,
};

module.exports = nextConfig;
