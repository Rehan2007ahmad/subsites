import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Remove reactCompiler as it can cause issues with complex client components
  // reactCompiler: true,

  // Cloudflare-compatible output
  // output: 'export', // Uncomment for static export / Cloudflare Pages

  // Enable strict mode
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Headers for security — allow same-origin iframes for print functionality
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Changed from DENY to SAMEORIGIN so print iframes work
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
