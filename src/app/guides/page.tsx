import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MdArrowForward } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Resume Writing Guides – Tips, Examples & Best Practices | ToolEka',
  description: 'Free resume writing guides covering how to write a resume, ATS optimization, professional summaries, skills sections, and resume vs CV.',
  alternates: { canonical: 'https://resume.tooleka.com/guides' },
};

const guides = [
  {
    href: '/guides/how-to-write-a-resume',
    title: 'How to Write a Resume',
    desc: 'A complete step-by-step guide to writing a professional resume from scratch — formatting, sections, and what to include.',
    readTime: '8 min read',
  },
  {
    href: '/guides/ats-resume-guide',
    title: 'ATS Resume Guide',
    desc: 'How applicant tracking systems work and exactly how to format your resume to get past automated filters.',
    readTime: '6 min read',
  },
  {
    href: '/guides/resume-summary-examples',
    title: 'Resume Summary Examples',
    desc: 'How to write a compelling professional summary — with real examples for different industries and experience levels.',
    readTime: '5 min read',
  },
  {
    href: '/guides/resume-skills',
    title: 'Resume Skills Section',
    desc: 'Which skills to include, how to organize them, and how to write a skills section that stands out to both ATS and humans.',
    readTime: '5 min read',
  },
  {
    href: '/guides/resume-vs-cv',
    title: 'Resume vs CV — What\'s the Difference?',
    desc: 'Clear explanation of when to use a resume versus a CV, and how they differ in length, purpose, and format.',
    readTime: '4 min read',
  },
];

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="bg-slate-50 border-b border-slate-100 py-14 px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Resume Writing Guides</h1>
          <p className="mt-3 text-lg text-slate-600 max-w-xl mx-auto">
            Practical, actionable advice for writing a resume that gets interviews.
          </p>
        </section>
        <section className="py-14 px-4">
          <div className="mx-auto max-w-3xl space-y-4">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="flex items-start justify-between gap-4 p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div>
                  <p className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{g.title}</p>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">{g.desc}</p>
                  <p className="text-xs text-slate-400 mt-2">{g.readTime}</p>
                </div>
                <MdArrowForward size={20} className="text-slate-300 group-hover:text-blue-500 shrink-0 mt-1 transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
