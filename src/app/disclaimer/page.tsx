import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import {
  HiExclamationTriangle,
  HiShieldCheck,
  HiCurrencyDollar,
  HiAcademicCap,
  HiInformationCircle,
  HiDocumentCheck,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Disclaimer & Advertising Disclosures | ToolEka Resume',
  description:
    'Read the official disclaimers, employment outcome notices, professional advice limitations, and Google AdSense disclosures for ToolEka Resume.',
  alternates: { canonical: 'https://resume.tooleka.com/disclaimer' },
  openGraph: {
    title: 'Disclaimer & Advertising Disclosures | ToolEka Resume',
    description:
      'Read the official disclaimers, employment outcome notices, professional advice limitations, and Google AdSense disclosures for ToolEka Resume.',
    url: 'https://resume.tooleka.com/disclaimer',
    type: 'website',
    images: [
      {
        url: 'https://resume.tooleka.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ToolEka Resume Builder Legal Disclaimers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer & Advertising Disclosures | ToolEka Resume',
    description:
      'Read the official disclaimers, employment outcome notices, professional advice limitations, and Google AdSense disclosures for ToolEka Resume.',
    images: ['https://resume.tooleka.com/og-image.png'],
  },
};

export default function DisclaimerPage() {
  const lastUpdated = 'August 22, 2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Disclaimer & Advertising Disclosures - ToolEka Resume Builder',
    url: 'https://resume.tooleka.com/disclaimer',
    description: 'Official disclaimers, employment outcome notices, and advertising transparency policies.',
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
        name: 'Disclaimer & Disclosures',
        item: 'https://resume.tooleka.com/disclaimer',
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
              <HiExclamationTriangle size={14} />
              <span>Legal Disclaimers &amp; Disclosures</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
              Disclaimer &amp; Advertising Disclosure
            </h1>
            <p className="text-xs text-[#737373]">
              Last updated: <strong>{lastUpdated}</strong> &bull; Effective date: <strong>January 1, 2026</strong>
            </p>
            <div className="mt-6 p-4 bg-[#F7F7F7] border-l-4 border-black text-xs sm:text-sm text-[#404040] leading-relaxed">
              <strong>Summary Notice:</strong> ToolEka Free Resume Builder provides formatting software, ATS templates, and informational career articles on an &ldquo;as is&rdquo; basis. We are an independent open web utility and do not guarantee employment, job interviews, or hiring outcomes. We are funded by transparent third-party digital advertising (Google AdSense).
            </div>
          </div>

          {/* Body Content */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-8 text-sm leading-relaxed text-[#404040] shadow-xs">

            {/* Section 1: Employment Outcome Disclaimer */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3 flex items-center gap-2">
                <HiBriefcaseIcon className="text-black" /> 1. No Guarantee of Employment or Interview Callbacks
              </h2>
              <p className="mb-3">
                The tools, resume templates, PDF generation utilities, and career guides provided on <strong>resume.tooleka.com</strong> are designed to assist job seekers in creating clean, ATS-parseable resumes aligned with prevailing modern recruitment standards.
              </p>
              <p className="mb-3">
                However, <strong>ToolEka makes no representations, warranties, or guarantees regarding employment results, job placement rates, interview callbacks, or salary negotiations</strong>.
              </p>
              <p>
                Hiring decisions are complex, multi-factor determinations made solely at the discretion of individual employers, hiring managers, corporate recruiting teams, and independent third-party automated screening filters. The effectiveness of your job application depends heavily on your true underlying skills, professional qualifications, industry economic conditions, interview performance, and factual accuracy of your background.
              </p>
            </section>

            {/* Section 2: Informational Purposes Only */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3 flex items-center gap-2">
                <HiAcademicCap className="text-black" /> 2. Educational &amp; Informational Purposes Only
              </h2>
              <p className="mb-3">
                All blog articles, tutorials, resume examples, action verb dictionaries, and formatting formulas published on this website are provided strictly for general educational and informational purposes.
              </p>
              <p>
                They do not constitute formal legal advice, accredited career counseling, executive recruitment representation, or certified human resources consulting. You should exercise your own professional judgment when deciding which credentials, experiences, and data points to include in your resume.
              </p>
            </section>

            {/* Section 3: Google AdSense & Third-Party Advertising Disclosure */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3 flex items-center gap-2">
                <HiCurrencyDollar className="text-black" /> 3. Third-Party Advertising &amp; Google AdSense Disclosure
              </h2>
              <p className="mb-3">
                ToolEka is committed to remaining 100% free forever for all job seekers worldwide. To support the technical costs of running high-speed serverless PDF compilation engines, bandwidth, and web hosting without imposing paywalls or subscription charges, this site displays programmatic online advertisements served by <strong>Google AdSense</strong> and <strong>Google Ad Manager</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-xs text-[#595959] mb-3">
                <li>
                  <strong>Cookie Usage:</strong> Google and other third-party ad networks use cookies (such as the DoubleClick DART cookie) to serve ads based on your visits to this website and other sites across the internet.
                </li>
                <li>
                  <strong>No Endorsement:</strong> The presence of an advertisement on this site does not constitute an endorsement, recommendation, or guarantee by ToolEka of the advertised product, service, or company.
                </li>
                <li>
                  <strong>Opting Out:</strong> You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-black underline font-semibold">Google Ads Settings</a> or through the <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-black underline font-semibold">Network Advertising Initiative</a>.
                </li>
              </ul>
            </section>

            {/* Section 4: Accuracy & User Responsibility */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3 flex items-center gap-2">
                <HiDocumentCheck className="text-black" /> 4. Accuracy of Information &amp; User Responsibility
              </h2>
              <p className="mb-3">
                You are solely responsible for ensuring the factual accuracy, truthfulness, grammar, spelling, and legality of all information you enter into the resume builder tool.
              </p>
              <p>
                ToolEka does not fact-check or verify the claims made in user resumes. Misrepresenting your work history, degrees, or certifications on a resume submitted to employers may have serious professional, legal, or civil consequences for which ToolEka assumes zero liability.
              </p>
            </section>

            {/* Section 5: External Links */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3 flex items-center gap-2">
                <HiInformationCircle className="text-black" /> 5. External Links Disclaimer
              </h2>
              <p className="mb-3">
                This website may contain links to external third-party websites (including job boards, educational platforms, software repositories, and our parent tools portal at <a href="https://tooleka.com" className="text-black underline font-semibold">tooleka.com</a>).
              </p>
              <p>
                ToolEka does not investigate, monitor, or check external links for accuracy, adequacy, validity, reliability, availability, or completeness. We assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
              </p>
            </section>

            {/* Section 6: Limitation of Liability */}
            <section>
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-2 mb-3 flex items-center gap-2">
                <HiShieldCheck className="text-black" /> 6. Limitation of Liability
              </h2>
              <p className="mb-3">
                To the maximum extent permitted by applicable law, in no event shall ToolEka, its founders, contributors, or partners be liable for any direct, indirect, incidental, special, consequential, or punitive damages (including, without limitation, loss of career opportunities, missed employment deadlines, loss of profits, or data loss) arising out of or in connection with your use or inability to use this website.
              </p>
            </section>

            {/* Section 7: Contact Info */}
            <section className="pt-4 border-t border-[#E5E5E5]">
              <h2 className="text-lg font-bold text-black mb-3">7. Questions &amp; Contact</h2>
              <p className="mb-3">
                If you have questions regarding this Disclaimer or our advertising disclosures, please reach out to us:
              </p>
              <div className="p-4 bg-[#F8F8F8] border border-[#E5E5E5] text-xs space-y-1 text-black font-mono">
                <div>ToolEka Online Tools Network</div>
                <div>Email: hello@tooleka.com</div>
                <div>Contact Portal: <a href="https://tooleka.com/contact" className="underline font-bold">tooleka.com/contact</a> (Subject: &quot;Resume Query&quot;)</div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function HiBriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}
