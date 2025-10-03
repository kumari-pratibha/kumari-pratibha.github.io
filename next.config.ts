import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Disable devtools in development to fix the error
  ...(process.env.NODE_ENV === 'development' && {
    webpack: (config: any) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      return config;
    },
  }),
};

export default nextConfig;
