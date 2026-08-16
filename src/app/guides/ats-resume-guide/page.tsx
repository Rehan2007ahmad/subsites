import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MdCheckCircle, MdCancel, MdArrowForward } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'ATS Resume Guide: How to Make Your Resume Pass Applicant Tracking Systems | ToolEka',
  description: 'Learn how ATS systems work and exactly how to format your resume to get past automated filters. Includes a checklist of do\'s and don\'ts.',
  alternates: { canonical: 'https://resume.tooleka.com/guides/ats-resume-guide' },
};

export default function ATSGuide() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="bg-slate-50 border-b border-slate-100 py-12 px-4">
          <div className="mx-auto max-w-3xl">
            <nav className="text-xs text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link><span className="mx-2">/</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link><span className="mx-2">/</span>
              <span>ATS Resume Guide</span>
            </nav>
            <h1 className="text-3xl font-bold text-slate-900">ATS Resume Guide: How to Get Past Applicant Tracking Systems</h1>
            <p className="mt-3 text-slate-600">Updated 2026 · 6 min read</p>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-sm text-slate-700 leading-relaxed">

            <p>More than 75% of resumes are rejected by ATS software before a human ever sees them. Understanding how these systems work — and formatting your resume accordingly — can dramatically increase your callback rate.</p>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">What is an ATS?</h2>
              <p>An Applicant Tracking System (ATS) is software used by employers to manage job applications. When you submit a resume, the ATS parses it into a structured database — extracting your name, contact info, work history, education, and skills. A recruiter then searches this database for relevant candidates.</p>
              <p className="mt-3">If the ATS can't parse your resume correctly — because of unusual formatting, graphics, or non-standard section names — your application may be rejected or ranked poorly even if you're qualified.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">How ATS parsing works</h2>
              <p>ATS systems scan your resume looking for specific patterns:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-slate-600">
                <li><strong className="text-slate-800">Section headings</strong> — The ATS looks for known labels like "Work Experience," "Education," "Skills." Unusual names like "My Journey" confuse parsers.</li>
                <li><strong className="text-slate-800">Keywords</strong> — The ATS matches terms in your resume against the job description. Missing keywords = lower ranking.</li>
                <li><strong className="text-slate-800">Dates</strong> — Employment dates are parsed to determine your years of experience. Inconsistent formats can cause parsing errors.</li>
                <li><strong className="text-slate-800">Contact info</strong> — Name, email, and phone must be in the main body, not in a header or text box.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">ATS-friendly formatting rules</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                  <p className="text-xs font-bold text-green-700 mb-3 flex items-center gap-1"><MdCheckCircle size={14} /> DO</p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li>Use standard section names</li>
                    <li>Use a simple, clean font (Arial, Calibri, Times New Roman)</li>
                    <li>Use standard bullet points (• or -)</li>
                    <li>Include keywords from the job description</li>
                    <li>Use consistent date formats (MM/YYYY or Month YYYY)</li>
                    <li>Save and submit as PDF</li>
                    <li>Put contact info in the main body</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                  <p className="text-xs font-bold text-red-700 mb-3 flex items-center gap-1"><MdCancel size={14} /> DON'T</p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li>Use tables or text boxes</li>
                    <li>Put text inside headers or footers</li>
                    <li>Use images, logos, or icons for content</li>
                    <li>Use unusual section names</li>
                    <li>Use multiple columns (some ATS can't read them)</li>
                    <li>Use fancy fonts or very small font sizes</li>
                    <li>Submit a scanned PDF or image-based PDF</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Keyword optimization</h2>
              <p>Keywords are the single most important factor in ATS ranking. Here's how to use them effectively:</p>
              <ol className="mt-3 space-y-3 list-decimal list-inside text-slate-600">
                <li><strong className="text-slate-800">Read the job description carefully.</strong> Identify specific tools, technologies, certifications, and skill phrases used repeatedly.</li>
                <li><strong className="text-slate-800">Mirror the language.</strong> If the job says "project management," use that exact phrase — not "managing projects."</li>
                <li><strong className="text-slate-800">Don't keyword-stuff.</strong> Inserting keywords unnaturally harms readability for the human reviewer and can be flagged.</li>
                <li><strong className="text-slate-800">Include keywords in context.</strong> "Managed a team of 6 using Agile/Scrum methodology" is better than just listing "Scrum."</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Which ToolEka templates are ATS-friendly?</h2>
              <p>Our <strong className="text-slate-800">Classic, Minimal, and Developer</strong> templates are specifically designed with ATS compatibility in mind. They use standard single-column layouts, clean fonts, and predictable section ordering.</p>
              <p className="mt-3">The <strong className="text-slate-800">Modern</strong> template uses a two-column layout which some older ATS systems may have trouble parsing correctly.</p>
            </section>

            <div className="border-t border-slate-100 pt-8 text-center">
              <p className="text-slate-600 mb-4">Create an ATS-friendly resume for free with ToolEka.</p>
              <Link href="/builder" className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                Build ATS-Friendly Resume <MdArrowForward size={16} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
