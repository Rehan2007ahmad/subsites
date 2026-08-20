import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Externalize Puppeteer and Chromium so Turbopack & Next.js do not bundle them at build time
  serverExternalPackages: [
    'puppeteer-core',
    '@sparticuz/chromium-min',
  ],

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
