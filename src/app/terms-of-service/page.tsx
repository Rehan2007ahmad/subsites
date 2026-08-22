import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { HiDocumentText, HiCheckCircle, HiExclamationTriangle, HiShieldCheck } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Terms of Service & License | ToolEka Resume Builder',
  description:
    'Review the official Terms of Service, software license terms, user content ownership policies, and conditions for ToolEka Free Resume Builder.',
  alternates: { canonical: 'https://resume.tooleka.com/terms-of-service' },
  openGraph: {
    title: 'Terms of Service & License | ToolEka Resume Builder',
    description:
      'Review the official Terms of Service, software license terms, user content ownership policies, and conditions for ToolEka Free Resume Builder.',
    url: 'https://resume.tooleka.com/terms-of-service',
    type: 'website',
    images: [
      {
        url: 'https://resume.tooleka.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ToolEka Resume Builder Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service & License | ToolEka Resume Builder',
    description:
      'Review the official Terms of Service, software license terms, user content ownership policies, and conditions for ToolEka Free Resume Builder.',
    images: ['https://resume.tooleka.com/og-image.png'],
  },
};

export default function TermsPage() {
  const lastUpdated = 'August 22, 2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service - ToolEka Resume Builder',
    url: 'https://resume.tooleka.com/terms-of-service',
    description: 'Official terms of service, user rights, and software license conditions.',
    publisher: {
      '@type': 'Organization',
      name: 'ToolEka',
      url: 'https://tooleka.com',
    },
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://resume.tooleka.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Terms of Service',
        item: 'https://resume.tooleka.com/terms-of-service',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <SiteHeader />
      <main className="min-h-screen bg-[#FBFBFB] py-12 md:py-16 text-[#262626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Card */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 mb-8 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-semibold uppercase tracking-widest mb-4">
              <HiDocumentText size={14} />
              <span>Legal Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
              Terms of Service
            </h1>
            <p className="text-xs text-[#737373]">
              Last updated: <strong>{lastUpdated}</strong> &bull; Effective date: <strong>January 1, 2026</strong>
            </p>
          </div>

          {/* Terms Content */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-8 text-sm leading-relaxed text-[#404040] shadow-xs">
            {/* Section 1 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using <strong>ToolEka Resume Builder</strong> (&ldquo;resume.tooleka.com&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, our <Link href="/privacy-policy" className="underline text-black font-semibold">Privacy Policy</Link>, our <Link href="/disclaimer" className="underline text-black font-semibold">Disclaimer</Link>, and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                2. Use License &amp; User Ownership of Content
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-2 text-xs text-[#595959]">
                <li>
                  <strong>Your Content Remains Yours:</strong> You retain 100% full legal ownership, copyright, and title to all resume content, biographies, work history, and documents generated through this platform. ToolEka claims zero ownership over your personal documents.
                </li>
                <li>
                  <strong>Free Tool License:</strong> We grant you a revocable, non-exclusive, royalty-free license to use our resume templates and builder tools for your personal or professional job applications.
                </li>
                <li>
                  <strong>Restrictions:</strong> You agree not to reverse engineer, scrape at scale, redistribute our source code for commercial resale, or use automated bots to overwhelm the PDF generation infrastructure.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                3. Career &amp; Employment Disclaimer
              </h2>
              <div className="p-4 bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 mb-3 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-900">
                  <HiExclamationTriangle size={16} /> Important Notice Regarding Employment Results
                </div>
                <p>
                  ToolEka provides resume formatting templates and editing software designed to follow industry Applicant Tracking System (ATS) best practices. However, <strong>we do not guarantee job interviews, employment offers, or hiring outcomes</strong>. For comprehensive disclosures, view our dedicated <Link href="/disclaimer" className="underline font-bold">Disclaimer page</Link>.
                </p>
              </div>
              <p>
                Hiring decisions remain entirely at the discretion of individual prospective employers, recruiters, and automated corporate filters. You are solely responsible for ensuring the factual accuracy, honesty, and grammar of the information entered into your resume.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                4. Third-Party Advertising &amp; Sponsor Content
              </h2>
              <p className="mb-2">
                ToolEka is provided 100% free of charge and is supported by programmatic digital advertising (such as Google AdSense and Google Ad Manager).
              </p>
              <p>
                Third-party advertisements shown on our pages or during optional rewarded ad flows are managed by ad networks. ToolEka does not personally endorse any specific advertised third-party products, services, or commercial claims.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                5. Limitation of Liability &amp; &ldquo;As Is&rdquo; Service
              </h2>
              <p>
                The materials, tools, and PDF generation services on ToolEka Resume Builder are provided on an <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis</strong> without warranties of any kind, whether express or implied. In no event shall ToolEka, its founders, or contributors be held liable for any damages (including, without limitation, loss of data, loss of career opportunity, or business interruption) arising out of the use or inability to use the tools on this site.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                6. Governing Law &amp; Modifications
              </h2>
              <p className="mb-2">
                We reserve the right to revise or update these Terms of Service at any time without prior notice. By continuing to use this website after any modifications are posted, you agree to be bound by the revised terms.
              </p>
              <p>
                For questions regarding these terms, contact us at{' '}
                <a href="mailto:hello@tooleka.com" className="text-black font-semibold underline">
                  hello@tooleka.com
                </a>{' '}
                or through our <Link href="/contact" className="text-black font-semibold underline">Contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
