import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/ui/Toast';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://resume.tooleka.com'),
  title: {
    default: 'Free Resume Builder – Create a Professional Resume | ToolEka',
    template: '%s | ToolEka Resume',
  },
  description:
    'Build a professional resume for free. No account, no watermarks, instant PDF download. ATS-friendly templates included.',
  keywords: [
    'free resume builder',
    'resume maker',
    'CV builder',
    'ATS resume',
    'resume templates',
    'PDF resume download',
  ],
  authors: [{ name: 'ToolEka', url: 'https://tooleka.com' }],
  creator: 'ToolEka',
  publisher: 'ToolEka',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resume.tooleka.com',
    siteName: 'ToolEka Resume Builder',
    title: 'Free Resume Builder | ToolEka',
    description: 'Create a professional resume for free. No account required. Download as PDF.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Resume Builder | ToolEka',
    description: 'Create a professional resume for free. No account required. Download as PDF.',
    creator: '@tooleka',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google AdSense Auto Ads — insert publisher ID via env before deploying */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
