/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "its-movietime.com",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/redirect",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
