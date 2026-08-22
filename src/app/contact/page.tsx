import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import {
  HiGlobeAlt,
  HiClock,
  HiArrowTopRightOnSquare,
  HiQuestionMarkCircle,
  HiChatBubbleLeftRight,
  HiInformationCircle,
  HiEnvelope,
  HiShieldCheck,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Contact Support & Feedback | ToolEka Resume Builder',
  description:
    'Get in touch with the ToolEka Resume Builder engineering team for technical support, feedback, and feature requests. Fast response guaranteed.',
  alternates: { canonical: 'https://resume.tooleka.com/contact' },
  openGraph: {
    title: 'Contact Support & Feedback | ToolEka Resume Builder',
    description:
      'Get in touch with the ToolEka Resume Builder engineering team for technical support, feedback, and feature requests. Fast response guaranteed.',
    url: 'https://resume.tooleka.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://resume.tooleka.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact ToolEka Resume Builder Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Support & Feedback | ToolEka Resume Builder',
    description:
      'Get in touch with the ToolEka Resume Builder engineering team for technical support, feedback, and feature requests. Fast response guaranteed.',
    images: ['https://resume.tooleka.com/og-image.png'],
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact ToolEka Resume Builder',
    url: 'https://resume.tooleka.com/contact',
    description: 'Official contact and developer support portal for ToolEka Resume Builder.',
    mainEntity: {
      '@type': 'Organization',
      name: 'ToolEka',
      url: 'https://tooleka.com',
      email: 'hello@tooleka.com',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'hello@tooleka.com',
        url: 'https://tooleka.com/contact',
        availableLanguage: ['English'],
      },
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
        name: 'Contact Support',
        item: 'https://resume.tooleka.com/contact',
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
              <HiChatBubbleLeftRight size={14} />
              <span>Support &amp; Inquiries</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
              Contact Us
            </h1>
            <p className="text-sm text-[#595959] leading-relaxed max-w-2xl">
              Have a question about our ATS resume builder, feedback on templates, partnership inquiries, or technical support? We are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Main Central Notice & Action Area */}
            <div className="md:col-span-2 bg-white border border-[#E5E5E5] p-6 sm:p-10 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl font-bold text-black mb-2">
                  Official Support Channels
                </h2>
                <p className="text-sm text-[#404040] leading-relaxed mb-4">
                  You can reach our engineering and customer support team directly via email or through the central ToolEka contact portal:
                </p>
                <div className="p-4 bg-[#F8F8F8] border border-[#E5E5E5] text-xs space-y-2 text-black">
                  <div className="flex items-center gap-2 font-semibold">
                    <HiEnvelope className="text-black" size={16} /> Direct Email:
                    <a href="mailto:hello@tooleka.com" className="underline font-mono">hello@tooleka.com</a>
                  </div>
                  <div className="text-[#595959]">
                    Please include &ldquo;Resume Builder Inquiry&rdquo; in your subject line for expedited routing.
                  </div>
                </div>
              </div>

              {/* Action Banner Card */}
              <div className="bg-[#F7F7F7] border border-[#E5E5E5] p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                    <HiInformationCircle size={18} />
                  </div>
                  <div>
                    <strong className="text-sm text-black block mb-1">
                      Web Contact Portal Instructions
                    </strong>
                    <ul className="text-xs text-[#595959] space-y-1.5 list-disc list-inside">
                      <li>
                        Visit:{' '}
                        <a
                          href="https://tooleka.com/contact"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-black underline"
                        >
                          tooleka.com/contact
                        </a>
                      </li>
                      <li>
                        Set Subject to:{' '}
                        <span className="font-mono font-bold text-black bg-white px-1.5 py-0.5 border border-[#E5E5E5]">
                          Resume Query
                        </span>
                      </li>
                      <li>Detail your question, bug report, or template suggestion</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://tooleka.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                  >
                    Open ToolEka Contact Portal <HiArrowTopRightOnSquare size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Side Info Cards */}
            <div className="space-y-4">
              {/* ToolEka Network */}
              <div className="bg-white border border-[#E5E5E5] p-6 shadow-xs">
                <div className="flex items-center gap-2 text-black font-bold text-sm mb-1">
                  <HiGlobeAlt size={17} /> ToolEka Network
                </div>
                <p className="text-xs text-[#595959] leading-relaxed mb-4">
                  Explore our parent suite of free, privacy-first online tools and utilities at tooleka.com.
                </p>
                <a
                  href="https://tooleka.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-black border border-[#E5E5E5] px-3 py-1.5 hover:bg-[#F7F7F7] transition-colors"
                >
                  Visit tooleka.com <HiArrowTopRightOnSquare size={13} />
                </a>
              </div>

              {/* Response Time */}
              <div className="bg-white border border-[#E5E5E5] p-6 shadow-xs">
                <div className="flex items-center gap-2 text-black font-bold text-sm mb-1">
                  <HiClock size={17} /> Response Time
                </div>
                <p className="text-xs text-[#595959] leading-relaxed">
                  We typically respond within <strong>24 to 48 business hours</strong> (Monday &ndash; Friday).
                </p>
              </div>
            </div>
          </div>

          {/* Quick FAQ Strip */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-8 shadow-xs">
            <h2 className="text-base font-bold text-black flex items-center gap-2 mb-4">
              <HiQuestionMarkCircle size={18} /> Support Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#595959] leading-relaxed">
              <div>
                <strong className="text-black block mb-1">Is my resume data saved on your servers?</strong>
                No. All draft data is stored strictly in your browser&apos;s local storage. If you switch computers or clear your browser cache, your resume draft will be reset. Use &ldquo;Export JSON&rdquo; to create a persistent backup file!
              </div>
              <div>
                <strong className="text-black block mb-1">Is there any fee to download my PDF?</strong>
                No. ToolEka is 100% free with zero watermarks, no sign-up requirement, and no credit card needed.
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
