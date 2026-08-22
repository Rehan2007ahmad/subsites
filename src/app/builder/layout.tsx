import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Free Online Resume Editor – Live Preview & PDF Download | ToolEka',
  description:
    'Build and customize your professional resume for free. Real-time preview, executive & ATS templates, instant A4 PDF export.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://resume.tooleka.com/builder',
  },
};

export default function BuilderLayout({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>;
}
