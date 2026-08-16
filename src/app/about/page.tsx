import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MdArrowForward } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'About ToolEka Resume Builder | Free, Private, No Account',
  description: 'Learn about ToolEka Resume Builder — a completely free resume builder that runs in your browser. No account required, no data collected.',
  alternates: { canonical: 'https://resume.tooleka.com/about' },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white py-14 px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">About ToolEka Resume Builder</h1>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <p>
              ToolEka Resume Builder is a free, browser-based resume builder built as part of the <a href="https://tooleka.com" className="text-blue-600 hover:underline">ToolEka</a> family of free online tools. The goal is simple: give anyone the ability to create a professional resume without paying, creating an account, or worrying about their data.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-2">Our philosophy</h2>
            <p>
              Most resume builders lock useful features behind paywalls, add watermarks to free downloads, or require you to hand over your email address before you can type a single word. We think that's backwards.
            </p>
            <p>
              A well-formatted resume is a basic professional tool. It shouldn't cost money. ToolEka Resume Builder is completely free, start to finish — no watermarks, no locked templates, no "upgrade to download."
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-2">Privacy by design</h2>
            <p>
              Your resume is personal. It contains your contact details, employment history, and career narrative. We don't want that data — and we've built the product so we never receive it.
            </p>
            <p>
              Everything you type stays in your browser's local storage. Nothing is sent to our servers. You can verify this by opening your browser's network inspector while using the builder.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-2">How we sustain this</h2>
            <p>
              ToolEka Resume Builder is supported by advertising through Google AdSense. Ads appear on content pages. We are committed to placing ads in non-intrusive positions that never interfere with the resume building experience or deceive users.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-2">Part of the ToolEka ecosystem</h2>
            <p>
              ToolEka is a collection of free, useful online tools for everyone. The resume builder is our first major product. More tools are in development.
            </p>
            <p>
              Visit <a href="https://tooleka.com" className="text-blue-600 hover:underline">tooleka.com</a> to explore the full collection.
            </p>
          </div>

          <div className="mt-10 flex gap-3 flex-wrap">
            <Link href="/builder" className="inline-flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
              Try the Builder <MdArrowForward size={16} />
            </Link>
            <Link href="/contact" className="inline-flex h-10 items-center rounded-xl border border-slate-300 px-5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
