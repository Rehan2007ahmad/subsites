import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MdArrowForward } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'How to Write a Resume: Step-by-Step Guide | ToolEka',
  description: 'Learn how to write a professional resume in 10 steps. Covers formatting, sections, what to include, and how to pass ATS systems.',
  alternates: { canonical: 'https://resume.tooleka.com/guides/how-to-write-a-resume' },
  openGraph: { title: 'How to Write a Resume | ToolEka', description: 'Step-by-step resume writing guide for any industry or experience level.' },
};

export default function HowToWriteResumeGuide() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="bg-slate-50 border-b border-slate-100 py-12 px-4">
          <div className="mx-auto max-w-3xl">
            <nav className="text-xs text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link><span className="mx-2">/</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link><span className="mx-2">/</span>
              <span>How to Write a Resume</span>
            </nav>
            <h1 className="text-3xl font-bold text-slate-900">How to Write a Resume: A Step-by-Step Guide</h1>
            <p className="mt-3 text-slate-600">Updated 2026 · 8 min read</p>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-sm text-slate-700 leading-relaxed">

            <p>Writing a resume can feel overwhelming, but it doesn't have to be. A professional resume follows a clear, predictable structure that hiring managers and ATS systems both expect. Follow these 10 steps to build a resume that gets results.</p>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Step 1: Choose the right format</h2>
              <p>There are three main resume formats:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-slate-600">
                <li><strong className="text-slate-800">Chronological</strong> — Lists experience in reverse chronological order. The most widely accepted format and best for most candidates.</li>
                <li><strong className="text-slate-800">Functional</strong> — Groups skills by type rather than by employer. Useful for career changers but viewed with suspicion by many recruiters.</li>
                <li><strong className="text-slate-800">Combination</strong> — Merges both. Good for experienced professionals making a significant industry change.</li>
              </ul>
              <p className="mt-3">For most job seekers, <strong className="text-slate-800">reverse-chronological</strong> is the safest and most effective choice.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Step 2: Add your contact information</h2>
              <p>Your contact section should include:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-slate-600">
                <li>Full name (large, prominent)</li>
                <li>Professional title (matching the job you're applying for)</li>
                <li>Email address (professional, ideally firstname.lastname@domain.com)</li>
                <li>Phone number</li>
                <li>City and state (full address not required)</li>
                <li>LinkedIn profile URL (optional but recommended)</li>
                <li>GitHub, portfolio, or personal website (if relevant)</li>
              </ul>
              <p className="mt-3">Do not include a photo (unless required by the country you're applying in), date of birth, marital status, or nationality on a US or UK resume.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Step 3: Write a professional summary</h2>
              <p>A summary (also called a profile or objective) is 2–4 sentences at the top of your resume that immediately explain who you are, what you've done, and what you bring to the role.</p>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mt-3">
                <p className="text-xs font-semibold text-slate-500 mb-2">Example:</p>
                <p className="text-sm text-slate-700 italic">"Senior Software Engineer with 6 years of experience building scalable web applications. Proficient in React, Node.js, and AWS. Proven track record of reducing system latency and mentoring junior engineers. Seeking to bring technical leadership to a mission-driven engineering team."</p>
              </div>
              <Link href="/guides/resume-summary-examples" className="inline-block mt-3 text-blue-600 text-xs hover:underline">See more summary examples →</Link>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Step 4: List your work experience</h2>
              <p>Work experience is the most important section for most candidates. For each position, include:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-slate-600">
                <li>Job title</li>
                <li>Company name and location</li>
                <li>Start and end dates (month and year)</li>
                <li>3–5 bullet points describing your achievements</li>
              </ul>
              <p className="mt-3">The key difference between a mediocre and excellent resume is how experience is written. Instead of describing job duties, describe <strong className="text-slate-800">achievements</strong>.</p>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mt-3 space-y-2">
                <p className="text-xs font-semibold text-red-500">Weak (duty):</p>
                <p className="text-sm text-slate-600">"Responsible for managing social media accounts."</p>
                <p className="text-xs font-semibold text-green-600 mt-2">Strong (achievement):</p>
                <p className="text-sm text-slate-600">"Grew company LinkedIn following from 2,000 to 18,000 in 12 months, generating 400+ qualified leads per quarter."</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Step 5: Quantify your achievements</h2>
              <p>Numbers make achievements credible and memorable. Add metrics wherever possible:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-slate-600">
                <li>Percentages (increased sales by 34%)</li>
                <li>Dollar amounts (managed $2M budget)</li>
                <li>Team size (led a team of 12)</li>
                <li>User numbers (product serves 50,000 monthly active users)</li>
                <li>Time (reduced deployment time from 3 hours to 15 minutes)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Step 6: Add your education</h2>
              <p>List degrees in reverse chronological order. Include degree name, institution, location, and graduation year. Add GPA if it's 3.5+ and you're a recent graduate. Omit high school if you have a university degree.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Step 7: List your skills</h2>
              <p>The skills section should contain hard skills relevant to the job. Soft skills like "communication" or "team player" are overused and rarely useful — focus on technical, tool-based, and measurable skills.</p>
              <Link href="/guides/resume-skills" className="inline-block mt-2 text-blue-600 text-xs hover:underline">Full guide: Skills section →</Link>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Step 8: Optimize for ATS</h2>
              <p>Most companies use Applicant Tracking Systems to filter resumes before a human reads them. To pass ATS:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-slate-600">
                <li>Use standard section names: Work Experience, Education, Skills</li>
                <li>Use keywords from the job description</li>
                <li>Avoid tables, text boxes, headers/footers, and images for text content</li>
                <li>Use a clean, simple font</li>
                <li>Save as PDF</li>
              </ul>
              <Link href="/guides/ats-resume-guide" className="inline-block mt-2 text-blue-600 text-xs hover:underline">Full ATS guide →</Link>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Step 9: Proofread carefully</h2>
              <p>A resume with typos signals carelessness. Read your resume out loud, use spell-check, and ask someone else to review it. Pay special attention to consistency — if you use periods at the end of bullet points, use them everywhere (or nowhere).</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Step 10: Export as PDF</h2>
              <p>Always send your resume as a PDF unless the employer specifically requests another format. PDF preserves formatting across all devices and operating systems. Avoid .doc or .docx unless explicitly asked.</p>
            </section>

            <div className="border-t border-slate-100 pt-8 text-center">
              <p className="text-slate-600 mb-4">Ready to build your resume? Use our free builder to apply everything from this guide.</p>
              <Link
                href="/builder"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Build My Resume Free <MdArrowForward size={16} />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
