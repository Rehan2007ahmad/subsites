import React from 'react';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

export const metadata: Metadata = {
  title: 'Terms of Service | ToolEka Resume Builder',
  description: 'Terms of Service for ToolEka Resume Builder. Free to use, no warranties.',
  alternates: { canonical: 'https://resume.tooleka.com/terms' },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white py-14 px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-slate-500 mb-8">Last updated: January 2026</p>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Acceptance of Terms</h2>
              <p>By using ToolEka Resume Builder (accessible at resume.tooleka.com), you agree to these Terms of Service. If you do not agree, please do not use the service.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Description of Service</h2>
              <p>ToolEka Resume Builder is a free, browser-based application for creating professional resumes. The service is provided at no charge for personal and professional use.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Your Content</h2>
              <p>You retain full ownership of all resume content you create. Because your data is stored only in your browser and never sent to our servers, we have no access to your content. We claim no rights to your resume data.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Acceptable Use</h2>
              <p>You may use ToolEka Resume Builder for lawful purposes. You agree not to use the service to create fraudulent documents or misrepresent your qualifications. You are solely responsible for the accuracy of your resume content.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Disclaimer of Warranties</h2>
              <p>The service is provided "as is" without warranty of any kind. We do not guarantee uninterrupted availability, that the service will meet your specific requirements, or that resumes created using the service will result in employment.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law, ToolEka shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Contact</h2>
              <p>Questions about these terms? Email us at <a href="mailto:hello@tooleka.com" className="text-blue-600 hover:underline">hello@tooleka.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
