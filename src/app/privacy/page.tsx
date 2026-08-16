import React from 'react';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

export const metadata: Metadata = {
  title: 'Privacy Policy | ToolEka Resume Builder',
  description: 'ToolEka Resume Builder privacy policy. Learn how we handle your data — which is almost nothing, by design.',
  alternates: { canonical: 'https://resume.tooleka.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white py-14 px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-8">Last updated: January 2026</p>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Summary</h2>
              <p className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-slate-700">
                <strong>Short version:</strong> Your resume data stays entirely in your browser. We never receive, store, or process your resume content on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Resume Data</h2>
              <p>All resume content you enter — including your name, contact details, work experience, education, and skills — is stored exclusively in your browser's <code className="bg-slate-100 rounded px-1">localStorage</code>. This data never leaves your device. ToolEka does not have access to, collect, or store your resume content.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Analytics</h2>
              <p>We may use privacy-respecting analytics to understand aggregate traffic patterns (e.g., how many users visit the builder, which pages are most popular). Analytics data is never linked to individual resume content.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Advertising</h2>
              <p>ToolEka Resume Builder is supported by Google AdSense. Google AdSense may use cookies to show relevant ads. For information about Google's data practices, see the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</a>.</p>
              <p className="mt-2">Advertising is served only on content pages. We do not serve ads in the resume builder itself in a way that interferes with your work.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Cookies</h2>
              <p>This site may use cookies for analytics and advertising purposes. We do not use cookies to identify you individually or to collect personal information.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Children's Privacy</h2>
              <p>ToolEka Resume Builder is not directed at children under 13. We do not knowingly collect personal information from children.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Changes to This Policy</h2>
              <p>We may update this policy from time to time. Changes will be posted on this page with an updated date.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Contact</h2>
              <p>Questions about this privacy policy? Email us at <a href="mailto:hello@tooleka.com" className="text-blue-600 hover:underline">hello@tooleka.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
