import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MdArrowForward } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Resume Summary Examples for Every Industry | ToolEka',
  description: 'Professional resume summary examples for software engineers, students, accountants, teachers, and marketing professionals. Learn the formula and write yours.',
  alternates: { canonical: 'https://resume.tooleka.com/guides/resume-summary-examples' },
};

const examples = [
  {
    role: 'Software Engineer',
    text: 'Senior Software Engineer with 6 years of experience building scalable web applications using React, Node.js, and AWS. Track record of improving system performance and mentoring junior developers. Seeking to drive technical excellence at a high-growth startup.',
  },
  {
    role: 'Recent Graduate / Student',
    text: 'Computer Science graduate with hands-on experience building full-stack applications through internships and personal projects. Strong foundation in Python, JavaScript, and machine learning. Looking to apply analytical skills to a software engineering role.',
  },
  {
    role: 'Marketing Manager',
    text: 'Data-driven Marketing Manager with 7 years of experience in demand generation and digital campaigns. Generated $5M+ in pipeline through SEO, PPC, and content marketing. Skilled in cross-functional collaboration and budget management.',
  },
  {
    role: 'Accountant',
    text: 'CPA with 8 years of experience in financial reporting, tax compliance, and audit management for Fortune 500 clients. Identified $2.3M in cost savings through detailed expense analysis. Deep knowledge of GAAP, IFRS, and Sarbanes-Oxley requirements.',
  },
  {
    role: 'Teacher',
    text: 'Dedicated English teacher with 7 years of experience designing AP curriculum and fostering student achievement. Improved AP exam pass rate from 62% to 84%. Committed to inclusive classroom practices and differentiated instruction.',
  },
  {
    role: 'Career Changer',
    text: 'Operations manager transitioning to data analytics. 8 years of experience identifying process inefficiencies and driving measurable improvements. Recently completed Google Data Analytics certification and built 3 portfolio projects in Python and SQL.',
  },
];

export default function ResumeSummaryExamples() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="bg-slate-50 border-b border-slate-100 py-12 px-4">
          <div className="mx-auto max-w-3xl">
            <nav className="text-xs text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link><span className="mx-2">/</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link><span className="mx-2">/</span>
              <span>Resume Summary Examples</span>
            </nav>
            <h1 className="text-3xl font-bold text-slate-900">Resume Summary Examples</h1>
            <p className="mt-3 text-slate-600">Updated 2026 · 5 min read</p>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-sm text-slate-700 leading-relaxed">
            <p>A professional summary is the first thing a recruiter reads. You have about 6 seconds to make an impression. A strong summary immediately communicates your experience level, key strengths, and what you're looking for.</p>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">The resume summary formula</h2>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-slate-800 font-mono">[Title] with [X years] of experience in [core skills]. [Key achievement or differentiator]. [What you're seeking].</p>
              </div>
              <p className="mt-3">This formula works because it answers the recruiter's three unconscious questions: Who are you? Can you do the job? Why are you applying here?</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Examples by profession</h2>
              <div className="space-y-4">
                {examples.map((ex) => (
                  <div key={ex.role} className="rounded-xl border border-slate-200 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">{ex.role}</p>
                    <p className="text-slate-700 leading-relaxed italic">"{ex.text}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Common summary mistakes</h2>
              <ul className="space-y-2 list-disc list-inside text-slate-600">
                <li><strong className="text-slate-800">Too generic:</strong> "Hard-working team player seeking a challenging opportunity" tells the recruiter nothing.</li>
                <li><strong className="text-slate-800">Too long:</strong> 5+ sentences lose the reader. Keep it 2–4 sentences maximum.</li>
                <li><strong className="text-slate-800">Written in first person:</strong> Avoid "I am a software engineer…" — resumes are understood to be about you.</li>
                <li><strong className="text-slate-800">Using an Objective instead of Summary:</strong> An objective statement focuses on what you want. A summary focuses on what you offer. Employers care about the latter.</li>
              </ul>
            </section>

            <div className="border-t border-slate-100 pt-8 text-center">
              <p className="text-slate-600 mb-4">Write your summary in the free ToolEka Resume Builder.</p>
              <Link href="/builder" className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                Build My Resume <MdArrowForward size={16} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
