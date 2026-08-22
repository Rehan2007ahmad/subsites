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
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Contact Us & Support | ToolEka Free Resume Builder',
  description:
    'Need help with your resume or have questions? Contact us via ToolEka support at tooleka.com/contact with the subject "Resume Query".',
  alternates: { canonical: 'https://resume.tooleka.com/contact' },
  openGraph: {
    title: 'Contact Us & Support | ToolEka Free Resume Builder',
    description:
      'Need help with your resume or have questions? Contact us via ToolEka support at tooleka.com/contact with the subject "Resume Query".',
    url: 'https://resume.tooleka.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
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
              Have a question about our resume builder, feature suggestions, or technical support? We handle all inquiries through the central ToolEka contact portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Main Central Notice & Action Area */}
            <div className="md:col-span-2 bg-white border border-[#E5E5E5] p-6 sm:p-10 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl font-bold text-black mb-2">
                  How to Send Us a Message
                </h2>
                <p className="text-sm text-[#404040] leading-relaxed">
                  To reach our support and developer team, please visit our official contact page at{' '}
                  <a
                    href="https://tooleka.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-bold underline hover:text-neutral-600"
                  >
                    https://tooleka.com/contact
                  </a>{' '}
                  and submit your message with the subject line <strong>&ldquo;Resume Query&rdquo;</strong>.
                </p>
              </div>

              {/* Action Banner Card */}
              <div className="bg-[#F7F7F7] border border-[#E5E5E5] p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                    <HiInformationCircle size={18} />
                  </div>
                  <div>
                    <strong className="text-sm text-black block mb-1">
                      Quick Contact Instructions
                    </strong>
                    <ul className="text-xs text-[#595959] space-y-1.5 list-disc list-inside">
                      <li>
                        Go to:{' '}
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
                      <li>Describe your issue, feedback, or suggestion in detail</li>
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
                    Open ToolEka Contact Page <HiArrowTopRightOnSquare size={14} />
                  </a>
                </div>
              </div>

              <div className="text-xs text-[#595959] leading-relaxed">
                Using the subject <strong>&ldquo;Resume Query&rdquo;</strong> routes your ticket directly to the resume builder engineering queue for expedited assistance.
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
                  We typically reply within <strong>24 to 48 hours</strong> on business days (Monday &ndash; Friday).
                </p>
              </div>
            </div>
          </div>

          {/* Quick FAQ Strip */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-8 shadow-xs">
            <h2 className="text-base font-bold text-black flex items-center gap-2 mb-4">
              <HiQuestionMarkCircle size={18} /> Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#595959] leading-relaxed">
              <div>
                <strong className="text-black block mb-1">Is my resume data saved on your servers?</strong>
                No. All draft data is stored strictly in your browser&apos;s local storage. If you switch computers or clear your browser history, your resume draft will be reset. Be sure to use &ldquo;Export JSON&rdquo; to create a backup file!
              </div>
              <div>
                <strong className="text-black block mb-1">Is there any fee to download my PDF?</strong>
                No. ToolEka is 100% free with zero watermarks and no credit card required.
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
