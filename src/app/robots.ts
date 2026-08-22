import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://resume.tooleka.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/builder', '/builder/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
