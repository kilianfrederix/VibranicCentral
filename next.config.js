/** @type {import('next').NextConfig} */

const NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
    ],
  },

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,

      fs: false,
    };

    return config;
  },
};

module.exports = NextConfig;
