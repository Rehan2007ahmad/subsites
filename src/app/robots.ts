import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://resume.tooleka.com/sitemap.xml',
    host: 'https://resume.tooleka.com',
  };
}
