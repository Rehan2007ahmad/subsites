import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/ui/Toast';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://resume.tooleka.com'),
  title: {
    default: 'Free Resume Builder — Create a Professional Resume | ToolEka',
    template: '%s | ToolEka Resume',
  },
  description: 'Build a professional resume for free. No account, no watermarks, instant PDF download. ATS-friendly templates, live preview.',
  authors: [{ name: 'ToolEka', url: 'https://tooleka.com' }],
  creator: 'Rehan Ahmad',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resume.tooleka.com',
    siteName: 'ToolEka Resume Builder',
    title: 'Free Resume Builder | ToolEka',
    description: 'Create a professional resume for free. No account required. Download as PDF.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable}`}>
      <head>
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`} crossOrigin="anonymous" />
        )}
      </head>
      <body className="flex flex-col min-h-screen antialiased selection:bg-black/10">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
