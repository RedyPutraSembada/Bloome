/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    config.cache = {
      type: 'filesystem',
      maxMemoryGenerations: 1, // untuk mengurangi penggunaan RAM
    };

    return config;
  },
};

export default nextConfig;