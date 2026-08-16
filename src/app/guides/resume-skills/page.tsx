import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MdArrowForward } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Resume Skills Section: What to Include & How to Write It | ToolEka',
  description: 'Learn which skills to include on your resume, how to organize them, and how to match keywords from job descriptions for ATS success.',
  alternates: { canonical: 'https://resume.tooleka.com/guides/resume-skills' },
};

export default function ResumeSkillsGuide() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="bg-slate-50 border-b border-slate-100 py-12 px-4">
          <div className="mx-auto max-w-3xl">
            <nav className="text-xs text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link><span className="mx-2">/</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link><span className="mx-2">/</span>
              <span>Resume Skills</span>
            </nav>
            <h1 className="text-3xl font-bold text-slate-900">Resume Skills Section: What to Include</h1>
            <p className="mt-3 text-slate-600">Updated 2026 · 5 min read</p>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-sm text-slate-700 leading-relaxed">

            <p>The skills section of a resume serves two purposes: helping ATS systems find relevant keywords, and giving recruiters a quick snapshot of your capabilities. Done right, it reinforces your experience. Done wrong, it wastes space.</p>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Hard skills vs soft skills</h2>
              <p><strong className="text-slate-800">Hard skills</strong> are measurable, teachable abilities: programming languages, software tools, certifications, foreign languages, or technical methodologies.</p>
              <p className="mt-2"><strong className="text-slate-800">Soft skills</strong> are interpersonal traits: communication, leadership, problem-solving. While important, listing them without evidence is meaningless — every candidate claims "excellent communication skills."</p>
              <p className="mt-2 font-medium text-slate-800">Rule: Fill your skills section with hard skills. Demonstrate soft skills through your achievement bullet points.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">How to choose which skills to include</h2>
              <ol className="space-y-3 list-decimal list-inside text-slate-600">
                <li>Read the job description and highlight specific tools, technologies, and skills mentioned.</li>
                <li>Cross-reference with your own experience. Only list skills you can speak to in an interview.</li>
                <li>Prioritize skills that appear in multiple job postings for your target role.</li>
                <li>Include skills from your work experience, even if you didn't list them explicitly in bullet points.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Skills by category — examples</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { cat: 'Software Engineering', skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'CI/CD'] },
                  { cat: 'Marketing', skills: ['SEO/SEM', 'Google Analytics', 'HubSpot', 'Salesforce', 'Content Strategy', 'A/B Testing', 'SQL', 'Figma'] },
                  { cat: 'Finance & Accounting', skills: ['GAAP', 'IFRS', 'QuickBooks', 'SAP', 'Excel', 'Tax Compliance', 'Financial Modeling', 'Audit'] },
                  { cat: 'Education', skills: ['Curriculum Development', 'Canvas LMS', 'Google Classroom', 'Differentiated Instruction', 'AP Curriculum'] },
                ].map((g) => (
                  <div key={g.cat} className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{g.cat}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {g.skills.map((s) => (
                        <span key={s} className="rounded-full bg-slate-100 text-slate-700 px-2 py-0.5 text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">How to format the skills section</h2>
              <p>There's no single correct format, but the most ATS-friendly approach is a simple comma-separated list or a flat tag-style layout. Avoid rating your skills with stars or progress bars — these are meaningless to recruiters and invisible to ATS.</p>
            </section>

            <div className="border-t border-slate-100 pt-8 text-center">
              <Link href="/builder" className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                Add Skills to My Resume <MdArrowForward size={16} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
