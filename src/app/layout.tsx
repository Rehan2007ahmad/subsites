import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/ui/Toast';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

const baseUrl = 'https://resume.tooleka.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Free Resume Builder — Create a Professional Resume | ToolEka',
    template: '%s | ToolEka Resume Builder',
  },
  description:
    'Build and download high-scoring ATS-friendly resumes for free. Zero sign-up, no hidden fees, instant PDF export with executive, modern, and developer templates.',
  keywords: [
    'free resume builder',
    'resume maker',
    'cv builder free',
    'ats resume template',
    'download resume pdf',
    'free cv maker online',
    'resume generator',
    'executive resume template',
    'software engineer resume',
    'student resume maker',
  ],
  authors: [{ name: 'ToolEka', url: 'https://tooleka.com' }],
  creator: 'Rehan Ahmad',
  publisher: 'ToolEka',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'ToolEka Resume Builder',
    title: 'Free Resume Builder — Create ATS-Friendly Resumes in Minutes',
    description:
      'Create and export a professional resume in minutes for free. No account required. Download ready-to-print ATS-friendly PDFs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Resume Builder | ToolEka',
    description:
      'Create and export a professional resume in minutes for free. No watermark, no signup needed.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'ToolEka Free Resume Builder',
  url: baseUrl,
  description:
    'Free online resume builder to create ATS-compliant, professional resumes with instant PDF export.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'ATS-friendly templates',
    'Live real-time preview',
    'Single-page A4 PDF export',
    'No registration required',
    'Privacy-first local storage',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="flex flex-col min-h-screen antialiased selection:bg-black/10">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
