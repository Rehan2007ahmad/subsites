import type { MetadataRoute } from 'next';
import { TEMPLATES } from '@/types/resume';
import { RESUME_EXAMPLES } from '@/lib/defaultData';

const BASE = 'https://resume.tooleka.com';
const NOW = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: NOW, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/builder`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/templates`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/resume-examples`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/guides`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/guides/how-to-write-a-resume`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/guides/ats-resume-guide`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/guides/resume-summary-examples`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/guides/resume-skills`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/guides/resume-vs-cv`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: NOW, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/contact`, lastModified: NOW, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: NOW, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: NOW, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const templatePages: MetadataRoute.Sitemap = TEMPLATES.map((t) => ({
    url: `${BASE}/templates/${t.id}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const examplePages: MetadataRoute.Sitemap = Object.keys(RESUME_EXAMPLES).map((key) => ({
    url: `${BASE}/resume-examples/${key}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...templatePages, ...examplePages];
}
