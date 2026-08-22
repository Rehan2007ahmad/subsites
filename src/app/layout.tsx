import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/ui/Toast';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

const baseUrl = 'https://resume.tooleka.com';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Free Resume Builder — ATS Resume Maker | ToolEka',
    template: '%s | ToolEka',
  },
  description:
    'Build and download professional ATS-friendly resumes for free. Zero sign-up, no fees, instant single-page vector PDF export with clean templates.',
  applicationName: 'ToolEka Resume Builder',
  category: 'Career & Employment',
  classification: 'Free Online Career & Resume Tools',
  keywords: [
    'free resume builder',
    'resume maker',
    'cv builder free',
    'ats resume template',
    'ats-friendly resume',
    'download resume pdf',
    'free cv maker online',
    'resume generator',
    'executive resume template',
    'software engineer resume',
    'student resume maker',
    'curriculum vitae generator',
    'career change resume',
    'star method resume',
    'google xyz formula resume',
  ],
  authors: [
    { name: 'Rehan Ahmad', url: 'https://tooleka.com' },
    { name: 'ToolEka Career Insights', url: 'https://resume.tooleka.com' },
  ],
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
    title: 'Free Resume Builder — ATS Resume Maker | ToolEka',
    description:
      'Build and download professional ATS-friendly resumes for free. Zero sign-up, no fees, instant single-page vector PDF export with clean templates.',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'ToolEka Free Resume Builder - ATS Resume Maker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Resume Builder — ATS Resume Maker | ToolEka',
    description:
      'Build and download professional ATS-friendly resumes for free. Zero sign-up, no fees, instant vector PDF export.',
    images: [`${baseUrl}/og-image.png`],
    creator: '@tooleka',
  },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ToolEka Resume Builder',
    url: baseUrl,
    description: 'Free online ATS resume maker and career guides with instant PDF export.',
    publisher: {
      '@type': 'Organization',
      name: 'ToolEka',
      url: 'https://tooleka.com',
      logo: `${baseUrl}/favicon.ico`,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ToolEka',
    url: 'https://tooleka.com',
    logo: `${baseUrl}/favicon.ico`,
    founder: {
      '@type': 'Person',
      name: 'Rehan Ahmad',
    },
    sameAs: [
      'https://tooleka.com',
      'https://github.com/',
      'https://www.instagram.com/rehan_ahx',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'ToolEka Free Resume Builder',
    url: baseUrl,
    description:
      'Free online resume builder to create ATS-compliant, professional resumes with instant PDF export.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'ATS-friendly resume templates',
      'Live real-time preview',
      'Single-page A4 PDF export',
      'No registration or payment required',
      'Privacy-first local storage',
      'JSON resume import and export',
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable}`}>
      <head>
        {schemas.map((s, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
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
