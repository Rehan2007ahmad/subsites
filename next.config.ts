import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Required for @sparticuz/chromium on Vercel
  // Prevents webpack from trying to bundle native binaries
  serverExternalPackages: ['puppeteer-core', '@sparticuz/chromium'],

  webpack(config) {
    // Prevent webpack from bundling puppeteer's native .node files
    config.externals = config.externals || [];
    if (Array.isArray(config.externals)) {
      config.externals.push('puppeteer-core', '@sparticuz/chromium');
    }
    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'X-Frame-Options',          value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
