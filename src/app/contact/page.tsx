import React from 'react';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MdEmail } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Contact – ToolEka Resume Builder',
  description: 'Get in touch with the ToolEka team. Report bugs, send feedback, or ask a question about the free resume builder.',
  alternates: { canonical: 'https://resume.tooleka.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white py-14 px-4">
        <div className="mx-auto max-w-xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h1>
          <p className="text-slate-600 mb-8">Have a question, found a bug, or want to share feedback? We'd love to hear from you.</p>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-8">
            <MdEmail size={20} className="text-blue-600 shrink-0" />
            <div>
              <p className="text-sm font-medium text-slate-800">Email</p>
              <a href="mailto:hello@tooleka.com" className="text-sm text-blue-600 hover:underline">hello@tooleka.com</a>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-600">
            <p><strong className="text-slate-800">Bug reports:</strong> Please describe what you were doing when the issue occurred, your browser, and operating system.</p>
            <p><strong className="text-slate-800">Feature requests:</strong> We read all feature suggestions. We can't promise to implement every idea, but we genuinely consider them.</p>
            <p><strong className="text-slate-800">Business inquiries:</strong> For partnerships, advertising, or other business matters, use the same email above.</p>
            <p className="pt-4 text-slate-500">We aim to respond within 2–3 business days.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
