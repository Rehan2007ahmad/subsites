import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Prevent Next.js/Webpack/Turbopack from bundling these packages into the
  // server bundle. They contain native binaries that must remain as-is in
  // node_modules and be required at runtime — never inlined or traced by NFT.
  //
  // Without this, Next.js Node File Tracer (NFT) recursively walks the entire
  // puppeteer-core and chromium-min trees (hundreds of MB of binaries and .pak
  // files), causing the Vercel build to hang for 45+ minutes at:
  //   "Creating an optimized production build ..."
  serverExternalPackages: [
    'puppeteer-core',
    '@sparticuz/chromium-min',
  ],

  experimental: {
    // Exclude Chromium binary directories from the output file trace entirely.
    // NFT would otherwise attempt to copy them into the .next/server bundle.
    outputFileTracingExcludes: {
      '/api/pdf': [
        'node_modules/@sparticuz/chromium-min/**/*',
        'node_modules/puppeteer-core/.local-chromium/**/*',
        'node_modules/puppeteer-core/.local-browsers/**/*',
      ],
    },
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
