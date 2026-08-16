import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MdArrowForward } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Resume vs CV – What\'s the Difference? | ToolEka',
  description: 'Clear explanation of the difference between a resume and a CV. Learn when to use each, how they differ in length and purpose, and which one you need.',
  alternates: { canonical: 'https://resume.tooleka.com/guides/resume-vs-cv' },
};

export default function ResumeVsCVGuide() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="bg-slate-50 border-b border-slate-100 py-12 px-4">
          <div className="mx-auto max-w-3xl">
            <nav className="text-xs text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link><span className="mx-2">/</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link><span className="mx-2">/</span>
              <span>Resume vs CV</span>
            </nav>
            <h1 className="text-3xl font-bold text-slate-900">Resume vs CV — What's the Difference?</h1>
            <p className="mt-3 text-slate-600">Updated 2026 · 4 min read</p>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-sm text-slate-700 leading-relaxed">

            <p>The terms "resume" and "CV" are often used interchangeably in casual conversation, but they refer to different documents with different purposes, lengths, and appropriate contexts.</p>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Key differences at a glance</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-3 font-semibold text-slate-800 border border-slate-200">Aspect</th>
                      <th className="text-left p-3 font-semibold text-slate-800 border border-slate-200">Resume</th>
                      <th className="text-left p-3 font-semibold text-slate-800 border border-slate-200">CV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Length', '1–2 pages', '2–10+ pages'],
                      ['Purpose', 'Job application in industry', 'Academic/research positions'],
                      ['Content', 'Tailored to specific job', 'Complete academic history'],
                      ['Common in', 'US, Canada, UK (industry)', 'Europe, academia, medicine'],
                      ['Changes per application', 'Yes — tailor each version', 'No — comprehensive document'],
                    ].map(([aspect, resume, cv]) => (
                      <tr key={aspect} className="border-b border-slate-100">
                        <td className="p-3 font-medium text-slate-700 border border-slate-200">{aspect}</td>
                        <td className="p-3 text-slate-600 border border-slate-200">{resume}</td>
                        <td className="p-3 text-slate-600 border border-slate-200">{cv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">When to use a resume</h2>
              <p>Use a resume when applying to industry jobs — in technology, finance, marketing, retail, healthcare (non-research), legal, and most other professional fields. A resume is a curated, focused document. You may have many versions, each tailored to a different role or industry.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">When to use a CV</h2>
              <p>Use a CV when applying to academic positions (professor, researcher, postdoc), medical residency programs, fellowships, grants, or roles in certain international contexts (particularly in Europe, Africa, and parts of Asia where "CV" is the standard term for any job application document).</p>
              <p className="mt-3">A CV includes your complete academic history: all degrees, publications, conference presentations, grants received, teaching experience, and professional memberships. Unlike a resume, a CV grows throughout your career and is never trimmed down.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">The confusing exception: Europe</h2>
              <p>In many European countries, what Americans call a "resume" is called a "CV." So if a European job posting asks for a CV, they typically want a 1–2 page document equivalent to an American resume — not the lengthy academic document described above. Context matters.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Which do you need?</h2>
              <p>If you're applying for most jobs in the US, Canada, or the UK: you need a <strong className="text-slate-800">resume</strong>. ToolEka Resume Builder is designed to create professional resumes for industry job applications.</p>
            </section>

            <div className="border-t border-slate-100 pt-8 text-center">
              <p className="text-slate-600 mb-4">Build a professional resume for free.</p>
              <Link href="/builder" className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                Create My Resume <MdArrowForward size={16} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
