import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { HiShieldCheck, HiLockClosed, HiEnvelope, HiInformationCircle } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Rights | ToolEka Resume Builder',
  description:
    'Learn how ToolEka Resume Builder protects your privacy. 100% client-side local storage with zero server databases, GDPR, and CCPA compliance.',
  alternates: { canonical: 'https://resume.tooleka.com/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy & Data Rights | ToolEka Resume Builder',
    description:
      'Learn how ToolEka Resume Builder protects your privacy. 100% client-side local storage with zero server databases, GDPR, and CCPA compliance.',
    url: 'https://resume.tooleka.com/privacy-policy',
    type: 'website',
    images: [
      {
        url: 'https://resume.tooleka.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ToolEka Resume Builder Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy & Data Rights | ToolEka Resume Builder',
    description:
      'Learn how ToolEka Resume Builder protects your privacy. 100% client-side local storage with zero server databases, GDPR, and CCPA compliance.',
    images: ['https://resume.tooleka.com/og-image.png'],
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'August 22, 2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy - ToolEka Resume Builder',
    url: 'https://resume.tooleka.com/privacy-policy',
    description: 'Privacy Policy explaining client-side storage architecture, GDPR/CCPA compliance, and advertising disclosures.',
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
        name: 'Privacy Policy',
        item: 'https://resume.tooleka.com/privacy-policy',
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
              <HiShieldCheck size={14} />
              <span>Privacy First</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#737373]">
              Last updated: <strong>{lastUpdated}</strong> &bull; Effective date: <strong>January 1, 2026</strong>
            </p>
            <div className="mt-6 p-4 bg-[#F7F7F7] border-l-4 border-black text-xs sm:text-sm text-[#404040] leading-relaxed">
              <strong>The Short Version:</strong> ToolEka Resume Builder is built with a strict privacy-first architecture. All your resume data, employment history, personal contact info, and draft notes are stored <em>only inside your web browser’s local storage</em>. We do not store, view, sell, or transfer your resume content to any private database.
            </div>
          </div>

          {/* Policy Body */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-8 text-sm leading-relaxed text-[#404040] shadow-xs">
            {/* Section 1 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                1. Information We Do NOT Collect
              </h2>
              <p className="mb-3">
                Unlike traditional resume building platforms that require email registration, account passwords, and store your career data on remote cloud servers, <strong>ToolEka Resume Builder</strong> operates on a decentralized, client-side paradigm:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs text-[#595959]">
                <li><strong>No User Accounts:</strong> You do not need to provide your name, email address, password, or credit card details to use this application.</li>
                <li><strong>No Resume Database:</strong> Your resume details (names, phone numbers, addresses, work experience, education, references) remain strictly in your browser’s local storage (<code className="bg-[#F2F2F2] px-1 py-0.5 text-xs font-mono text-black">localStorage</code>).</li>
                <li><strong>Ephemeral PDF Generation:</strong> When you generate a PDF, your formatted resume data is sent securely to our stateless serverless rendering endpoint solely to render the PDF file stream directly back to your download manager, after which all memory buffers are immediately purged. No copy of your resume is ever archived or retained.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                2. Information Collected Automatically &amp; Cookies
              </h2>
              <p className="mb-3">
                When you visit <strong>resume.tooleka.com</strong>, certain standard internet technical data may be automatically collected by hosting providers and third-party advertising partners:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs text-[#595959]">
                <li><strong>Log Files &amp; Device Information:</strong> Standard server logs include internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamps, and clickstream data to diagnose system performance and security.</li>
                <li><strong>Browser Local Storage:</strong> We use browser localStorage to ensure your resume content auto-saves while you work, allowing you to close the browser and resume editing at any time. You can clear this data at any moment by clicking &ldquo;Reset Resume&rdquo; in the application menu or clearing your browser cookies/storage.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                3. Third-Party Advertising &amp; Google AdSense
              </h2>
              <p className="mb-3">
                ToolEka is completely free to use and funded by unobtrusive online advertising. We partner with third-party vendors, including <strong>Google AdSense</strong> and <strong>Google Ad Manager (Google Publisher Tag)</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-xs text-[#595959]">
                <li>
                  <strong>DoubleClick DART Cookies:</strong> Google, as a third-party vendor, uses cookies to serve ads on our site. Google&apos;s use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet.
                </li>
                <li>
                  <strong>Opting Out:</strong> Users may opt out of personalized advertising by visiting Google&apos;s Ads Settings at{' '}
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-semibold underline hover:text-neutral-600"
                  >
                    https://adssettings.google.com/
                  </a>{' '}
                  or by visiting the Network Advertising Initiative opt-out page at{' '}
                  <a
                    href="https://optout.networkadvertising.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-semibold underline hover:text-neutral-600"
                  >
                    optout.networkadvertising.org
                  </a>.
                </li>
                <li>
                  <strong>Rewarded Web Ads:</strong> In designated release modes, users may choose to view a short rewarded ad in exchange for unlocking their exported PDF. Participation in rewarded ads is voluntary and triggered only upon your explicit opt-in confirmation.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                4. Data Protection Rights (GDPR &amp; CCPA / CPRA)
              </h2>
              <p className="mb-3">
                We fully respect your global privacy rights under the <strong>General Data Protection Regulation (GDPR)</strong> and the <strong>California Consumer Privacy Act (CCPA)</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs text-[#595959]">
                <li><strong>Right to Access &amp; Portability:</strong> You can export your full resume dataset anytime as a standardized JSON backup file using our &ldquo;Export JSON&rdquo; tool.</li>
                <li><strong>Right to Erasure (Right to be Forgotten):</strong> You can permanently wipe all locally saved resume information at any second by clicking &ldquo;Reset Resume&rdquo;.</li>
                <li><strong>Do Not Sell My Personal Information:</strong> We do not sell, rent, or trade your personal data to any data brokers or commercial third parties.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                5. Children&apos;s Information (COPPA)
              </h2>
              <p>
                Protecting the privacy of young children is especially important. ToolEka does not knowingly collect any personal identifiable information from children under the age of 13. If you believe that your child provided personal information on our website, please contact us immediately so we can assist in removing it.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                6. External Links &amp; Parent Network
              </h2>
              <p>
                Our site may contain links to external sites, including our primary utilities portal at{' '}
                <a href="https://tooleka.com" className="text-black font-semibold underline hover:text-neutral-600">
                  tooleka.com
                </a>. Please be aware that we are not responsible for the content or privacy practices of other websites. We encourage our users to read the privacy statements of each website that collects personal information.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3">
                7. Contact Us Regarding Privacy
              </h2>
              <p className="mb-4">
                If you have any questions, suggestions, or concerns regarding this Privacy Policy, please feel free to reach out to us:
              </p>
              <div className="bg-[#F7F7F7] border border-[#E5E5E5] p-4 text-xs sm:text-sm space-y-1.5">
                <p><strong>Website:</strong> <a href="https://resume.tooleka.com" className="underline text-black">resume.tooleka.com</a> / <a href="https://tooleka.com" className="underline text-black">tooleka.com</a></p>
                <p><strong>Email:</strong> <a href="mailto:hello@tooleka.com" className="underline text-black">hello@tooleka.com</a></p>
                <p><strong>Contact Page:</strong> <Link href="/contact" className="underline text-black font-semibold">Visit our Contact Page</Link> or visit <a href="https://tooleka.com" className="underline text-black">tooleka.com/contact</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
