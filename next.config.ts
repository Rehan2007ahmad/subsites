import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CRITICAL: Prevent the Next.js bundler from processing puppeteer-core and
  // @sparticuz/chromium-min at build time.
  //
  // Without this, Next.js Node File Tracer (NFT) recursively walks thousands
  // of files inside puppeteer-core/lib/esm/ and chromium-min/build/ during
  // "Creating an optimized production build ...", causing Vercel to time out
  // at 45 minutes.
  //
  // These packages must be required at RUNTIME by Node.js — not bundled.
  // ─────────────────────────────────────────────────────────────────────────
  serverExternalPackages: [
    'puppeteer-core',
    '@sparticuz/chromium-min',
    // Transitive deps that must also stay external:
    '@puppeteer/browsers',
    'chromium-bidi',
    'devtools-protocol',
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // Exclude Chromium/Puppeteer file trees from NFT output tracing.
  //
  // puppeteer-core ships a "browser" field in package.json that points to
  // an ESM entry (puppeteer-core-browser.js). Even with serverExternalPackages,
  // NFT can still walk this ESM tree looking for files to include in the
  // serverless function bundle. These exclusions prevent that entirely.
  // ─────────────────────────────────────────────────────────────────────────
  outputFileTracingExcludes: {
    // Apply to the PDF API route
    '/api/pdf': [
      './node_modules/@sparticuz/chromium-min/**/*',
      './node_modules/puppeteer-core/**/*',
      './node_modules/@puppeteer/browsers/**/*',
      './node_modules/chromium-bidi/**/*',
      './node_modules/devtools-protocol/**/*',
      './node_modules/ws/**/*',
    ],
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
