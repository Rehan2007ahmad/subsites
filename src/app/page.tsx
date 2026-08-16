import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { TEMPLATES } from '@/types/resume';
import {
  MdCheckCircle, MdArrowForward, MdShield, MdDownload,
  MdNoAccounts, MdLock, MdSpeed, MdEdit,
  MdOutlineFormatAlignLeft, MdStar,
} from 'react-icons/md';
import { FaRegFilePdf } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Free Resume Builder – Create a Professional Resume | ToolEka',
  description:
    'Build a professional resume for free in minutes. No account required, no watermarks, no payment. ATS-friendly templates, live preview, and instant PDF download.',
  alternates: { canonical: 'https://resume.tooleka.com' },
  openGraph: {
    title: 'Free Resume Builder – Create a Professional Resume | ToolEka',
    description: 'Build your resume for free. No sign-up, no watermarks, instant PDF download.',
    url: 'https://resume.tooleka.com',
    siteName: 'ToolEka Resume',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Resume Builder | ToolEka',
    description: 'Build a professional resume for free. No account required.',
  },
};

const features = [
  { icon: <MdCheckCircle size={22} />, title: 'Free Forever', desc: 'Every feature is completely free. No hidden fees, no premium tiers.' },
  { icon: <MdNoAccounts size={22} />, title: 'No Sign Up', desc: 'Start building immediately. No email or account required.' },
  { icon: <MdShield size={22} />, title: 'ATS-Friendly', desc: 'Optimized templates that pass applicant tracking systems.' },
  { icon: <MdOutlineFormatAlignLeft size={22} />, title: 'Multiple Templates', desc: 'Classic, Modern, Minimal, Developer, and Student templates.' },
  { icon: <FaRegFilePdf size={20} />, title: 'PDF Download', desc: 'Download a professional PDF instantly, no watermarks.' },
  { icon: <MdLock size={22} />, title: 'Private & Local', desc: 'Your data stays in your browser. Nothing is sent to our servers.' },
  { icon: <MdSpeed size={22} />, title: 'Live Preview', desc: 'See your resume update in real time as you type.' },
  { icon: <MdEdit size={22} />, title: 'Easy Editing', desc: 'Intuitive forms make it fast to fill in your information.' },
];

const steps = [
  { num: '01', title: 'Enter your information', desc: 'Fill in your personal details, work experience, education, and skills using our clean, simple forms.' },
  { num: '02', title: 'Choose a template', desc: 'Pick from 5 professional templates. Switch anytime — your content moves with you.' },
  { num: '03', title: 'Download your resume', desc: 'Download a polished, ATS-friendly PDF for free. No account, no watermark.' },
];

const exampleLinks = [
  { href: '/resume-examples/software-engineer', label: 'Software Engineer Resume' },
  { href: '/resume-examples/student', label: 'Student Resume' },
  { href: '/resume-examples/accountant', label: 'Accountant Resume' },
  { href: '/resume-examples/teacher', label: 'Teacher Resume' },
  { href: '/resume-examples/marketing-manager', label: 'Marketing Manager Resume' },
];

const faqs = [
  {
    q: 'Is the resume builder really free?',
    a: 'Yes, completely free. There are no paid plans, no premium templates, and no watermarks. The product is supported by advertising.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. You can build, edit, and download your resume without creating an account or providing your email.',
  },
  {
    q: 'Can I download my resume as a PDF?',
    a: 'Yes. Click the "Download PDF" button in the builder to instantly download a professional PDF version of your resume.',
  },
  {
    q: 'Are the templates ATS-friendly?',
    a: 'Several templates are specifically designed to pass Applicant Tracking Systems. The Classic, Minimal, and Developer templates all have high ATS compatibility.',
  },
  {
    q: 'Is my resume data stored online?',
    a: "No. Your resume data is stored only in your browser's local storage. It never leaves your device or gets sent to any server.",
  },
  {
    q: 'Can I continue editing my resume later?',
    a: 'Yes. Your progress is automatically saved in your browser. When you return to the builder, your resume will be exactly as you left it.',
  },
  {
    q: 'Can I use this resume for job applications?',
    a: 'Absolutely. The PDF you download is a professional, fully formatted resume suitable for any job application.',
  },
  {
    q: "What's the difference between a resume and a CV?",
    a: 'A resume is typically 1–2 pages and tailored to a specific job. A CV (Curriculum Vitae) is a comprehensive document listing all academic and professional achievements, often used in academic or research contexts.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'ToolEka Resume Builder',
  url: 'https://resume.tooleka.com',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free online resume builder. No account required. Download as PDF.',
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <SiteHeader />
      <main>
        {/* ── HERO ── */}
        <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-16 pb-20 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
              <MdCheckCircle size={14} /> 100% Free · No Account Required
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Create a Professional<br />
              <span className="text-blue-600">Resume for Free</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Build a polished, ATS-friendly resume in minutes. No sign-up, no watermarks, no payment. Your data stays in your browser.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/builder"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 text-base font-semibold text-white hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
              >
                Create My Resume <MdArrowForward size={18} />
              </Link>
              <Link
                href="/templates"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Browse Templates
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
              {['Free PDF download', 'No watermarks', 'ATS-friendly', 'No account needed', 'Auto-saves'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <MdCheckCircle size={14} className="text-green-500" /> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-16 px-4 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Everything you need, completely free</h2>
              <p className="mt-3 text-slate-600 max-w-xl mx-auto">No gimmicks, no locked features. Every tool available from the moment you open the page.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f) => (
                <div key={f.title} className="p-5 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="text-blue-600 mb-3">{f.icon}</div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
              <p className="mt-3 text-slate-600">Three steps from blank page to professional resume.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.num} className="text-center">
                  <div className="text-5xl font-bold text-blue-100 mb-3">{s.num}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/builder"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Start Building Now <MdArrowForward size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── TEMPLATES ── */}
        <section className="py-16 px-4 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Professional templates</h2>
              <p className="mt-3 text-slate-600 max-w-xl mx-auto">Five distinct designs. Switch between them any time — your content stays intact.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {TEMPLATES.map((t) => (
                <div key={t.id} className="rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                  <div
                    className="h-32 flex items-center justify-center"
                    style={{ backgroundColor: t.previewBg }}
                  >
                    <span className="text-white/80 text-xs font-mono uppercase tracking-widest">{t.name}</span>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-800">{t.name}</span>
                      {t.atsScore === 'High' && (
                        <span className="text-[10px] font-bold text-green-700 bg-green-100 rounded-full px-2 py-0.5">ATS ✓</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mb-3 leading-relaxed">{t.description}</p>
                    <Link
                      href={`/builder?template=${t.id}`}
                      className="block text-center text-xs font-medium text-blue-600 hover:underline"
                    >
                      Use Template →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/templates" className="text-sm font-medium text-blue-600 hover:underline">
                View all templates →
              </Link>
            </div>
          </div>
        </section>

        {/* ── RESUME EXAMPLES ── */}
        <section className="py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Resume examples by profession</h2>
            <p className="mt-3 text-slate-600 mb-8">Real-world examples to inspire and guide your own resume.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {exampleLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO CONTENT ── */}
        <section className="py-16 px-4 bg-white">
          <div className="mx-auto max-w-3xl prose prose-slate prose-sm">
            <h2 className="text-2xl font-bold text-slate-900 not-prose mb-4">What makes a great resume?</h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                A resume is a concise document summarizing your professional experience, skills, and education for a prospective employer. The goal is to quickly communicate why you are the right person for the job — usually within 6–10 seconds of initial review.
              </p>
              <p>
                <strong className="text-slate-800">Clear formatting</strong> is the first thing hiring managers notice. A well-structured resume uses consistent fonts, clear section headings, and appropriate whitespace. Avoid decorative elements that add visual noise without adding information.
              </p>
              <p>
                <strong className="text-slate-800">ATS compatibility</strong> matters before a human ever sees your resume. Most companies use Applicant Tracking Systems to filter applications automatically. An ATS-friendly resume uses standard section names (Work Experience, Education, Skills), avoids tables, text boxes, and images for content, and uses plain fonts.
              </p>
              <p>
                <strong className="text-slate-800">Quantified achievements</strong> are what separate good resumes from great ones. Instead of writing "Responsible for managing a team," write "Led a team of 8 engineers to deliver a $1.2M project on time and 10% under budget." Numbers provide concrete evidence of your impact.
              </p>
              <p>
                <strong className="text-slate-800">Relevance over completeness.</strong> You don't need to list every job you've ever had. Focus on the last 10–15 years and the experiences most relevant to the role you're applying for. Tailor your resume for each application.
              </p>
            </div>
            <div className="mt-6 flex gap-3 flex-wrap not-prose">
              <Link href="/guides/how-to-write-a-resume" className="text-sm font-medium text-blue-600 hover:underline">
                Full guide: How to write a resume →
              </Link>
              <Link href="/guides/ats-resume-guide" className="text-sm font-medium text-blue-600 hover:underline">
                ATS resume guide →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-slate-200 bg-white overflow-hidden">
                  <summary className="flex justify-between items-center px-5 py-4 cursor-pointer font-medium text-slate-800 text-sm list-none">
                    {f.q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg">+</span>
                  </summary>
                  <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to build your resume?</h2>
            <p className="text-blue-100 mb-8">Free, no account, no watermark. Download your PDF in minutes.</p>
            <Link
              href="/builder"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Create Your Free Resume <MdArrowForward size={18} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
