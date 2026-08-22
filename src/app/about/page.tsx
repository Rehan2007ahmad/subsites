import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { HiCheck, HiSparkles, HiShieldCheck, HiCodeBracket, HiHeart, HiArrowRight } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'About Us — Mission & Story | ToolEka Free Resume Builder',
  description:
    'Discover the story behind ToolEka Resume Builder, built by Rehan Ahmad. Learn how we provide high-quality, privacy-first, ATS-friendly career tools for free.',
  alternates: { canonical: 'https://resume.tooleka.com/about' },
  openGraph: {
    title: 'About Us — Mission & Story | ToolEka Free Resume Builder',
    description:
      'Discover the story behind ToolEka Resume Builder, built by Rehan Ahmad. Learn how we provide high-quality, privacy-first, ATS-friendly career tools for free.',
    url: 'https://resume.tooleka.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#FBFBFB] py-12 md:py-16 text-[#262626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-12 mb-8 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-semibold uppercase tracking-widest mb-6">
              <HiHeart size={14} className="text-red-400" />
              <span>Our Story &amp; Philosophy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight mb-5 leading-tight">
              Building Free, Privacy-First Career Tools for Everyone
            </h1>
            <p className="text-base sm:text-lg text-[#595959] leading-relaxed max-w-2xl">
              ToolEka was founded with a straightforward conviction: job seekers should never be forced to pay exorbitant recurring monthly subscriptions or surrender their personal privacy just to format and download a clean, professional resume.
            </p>
          </div>

          {/* Core Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-[#E5E5E5] p-6 shadow-xs">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-4">
                <HiShieldCheck size={20} />
              </div>
              <h2 className="text-base font-bold text-black mb-2">100% Privacy by Design</h2>
              <p className="text-xs text-[#595959] leading-relaxed">
                Your career history belongs to you. All draft data is stored locally in your browser and never saved to any central corporate database.
              </p>
            </div>

            <div className="bg-white border border-[#E5E5E5] p-6 shadow-xs">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-4">
                <HiSparkles size={20} />
              </div>
              <h2 className="text-base font-bold text-black mb-2">Zero Paywalls &amp; Traps</h2>
              <p className="text-xs text-[#595959] leading-relaxed">
                No &ldquo;free preview&rdquo; that suddenly demands a credit card at the final download screen. ToolEka is genuinely free, sustained by clean advertising.
              </p>
            </div>

            <div className="bg-white border border-[#E5E5E5] p-6 shadow-xs">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-4">
                <HiCodeBracket size={20} />
              </div>
              <h2 className="text-base font-bold text-black mb-2">ATS-Optimized Output</h2>
              <p className="text-xs text-[#595959] leading-relaxed">
                Built with precision typography and standard single-page layouts engineered to seamlessly pass recruiter Applicant Tracking Systems.
              </p>
            </div>
          </div>

          {/* Main Story & Behind the Scenes */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-8 text-sm leading-relaxed text-[#404040] shadow-xs mb-8">
            <section>
              <h2 className="text-xl font-bold text-black border-b border-[#E5E5E5] pb-3 mb-4">
                The Story Behind ToolEka
              </h2>
              <p className="mb-4">
                When searching for modern resume creators on the web, almost every available service lures candidates in with promises of a &ldquo;free resume builder&rdquo;&mdash;only to require account creation, capture sensitive contact info, and slap a $25-$40/month auto-renewing subscription barrier when attempting to export the resulting PDF.
              </p>
              <p className="mb-4">
                Created and engineered by <strong>Rehan Ahmad</strong> as part of the <strong>ToolEka</strong> family of open web utilities (<a href="https://tooleka.com" className="text-black font-semibold underline">tooleka.com</a>), this resume builder was created to eliminate that friction completely.
              </p>
              <p>
                Whether you are a college graduate assembling your first curriculum vitae, a software engineer detailing technical achievements, or an executive pivoting industries, you can craft, preview in real time, and download a flawless vector PDF without creating an account or paying a single cent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black border-b border-[#E5E5E5] pb-3 mb-4">
                How We Keep ToolEka Free
              </h2>
              <p className="mb-3">
                Transparency is at the heart of our mission. To keep our high-speed Chromium rendering servers running and our software free for everyone worldwide, we support the platform through:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li><strong>Unobtrusive Display Ads:</strong> Standard, non-intrusive Google AdSense banners.</li>
                <li><strong>Optional Rewarded Ads:</strong> Quick, opt-in video views that support the infrastructure while immediately unlocking your download.</li>
                <li><strong>Zero Data Monetization:</strong> We will never sell user emails, employment leads, or resume data to recruiters or third-party brokers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black border-b border-[#E5E5E5] pb-3 mb-4">
                Connect With Us
              </h2>
              <p className="mb-4">
                ToolEka is an ongoing project, continuously improving with new templates, ATS analysis guides, and career tools. We welcome feedback, feature suggestions, and partnerships!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                >
                  Contact Our Team <HiArrowRight size={13} />
                </Link>
                <a
                  href="https://tooleka.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E5E5E5] text-xs font-semibold text-[#404040] hover:border-black hover:text-black transition-colors"
                >
                  Explore All ToolEka Utilities ↗
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
