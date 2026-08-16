import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Free Resume Builder – Create & Download Your Resume | ToolEka',
  description:
    'Build a professional resume for free. No account required. Live preview, multiple templates, ATS-friendly. Download as PDF instantly.',
  robots: { index: true, follow: true },
};

export default function BuilderLayout({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>;
}
