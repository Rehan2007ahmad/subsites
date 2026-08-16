import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { TEMPLATES }  from '@/types/resume';
import { MdCheckCircle, MdArrowForward } from 'react-icons/md';
import {
  RiFileTextLine, RiLayout5Line, RiShieldCheckLine,
  RiUserUnfollowLine, RiLockPasswordLine,
  RiEyeLine, RiEditLine, RiDownloadLine,
} from 'react-icons/ri';

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
};

const features = [
  { icon: <RiFileTextLine />,     title: 'Free Forever',       desc: 'No paid plans, no premium tiers, no hidden fees ever.' },
  { icon: <RiUserUnfollowLine />, title: 'No Sign Up',         desc: 'Start building immediately — no email required.' },
  { icon: <RiShieldCheckLine />,  title: 'ATS-Friendly',       desc: 'Templates optimised to pass automated screening.' },
  { icon: <RiLayout5Line />,      title: 'Multiple Templates', desc: '5 professional designs you can switch instantly.' },
  { icon: <RiDownloadLine />,     title: 'PDF Download',       desc: 'Download a clean PDF instantly. No watermarks.' },
  { icon: <RiLockPasswordLine />, title: 'Private & Local',    desc: 'Your data stays in your browser. Zero uploads.' },
  { icon: <RiEyeLine />,          title: 'Live Preview',       desc: 'See your resume update in real time as you type.' },
  { icon: <RiEditLine />,         title: 'Easy Editing',       desc: 'Clean forms make it fast to fill every section.' },
];

const steps = [
  { n: '1', title: 'Enter your information', desc: 'Fill in personal details, work experience, education, and skills — one section at a time.' },
  { n: '2', title: 'Choose a template',      desc: 'Pick from 5 professional templates. Switch any time and your content moves with you.' },
  { n: '3', title: 'Download your resume',   desc: 'Hit Download PDF for a polished, ATS-friendly resume instantly — free, no watermark.' },
];

const faqs = [
  { q: 'Is the resume builder really free?',
    a: 'Yes, completely free. No paid plans, no premium templates, no watermarks. The product is supported by advertising.' },
  { q: 'Do I need to create an account?',
    a: 'No. You can build, edit, and download your resume without creating an account or providing your email.' },
  { q: 'Can I download my resume as a PDF?',
    a: 'Yes. Click "Download PDF" in the builder to instantly get a professional PDF version of your resume.' },
  { q: 'Are the templates ATS-friendly?',
    a: 'The Classic, Minimal, and Developer templates are explicitly ATS-optimised. All five templates use clean, parseable formatting.' },
  { q: 'Is my resume data stored online?',
    a: "No. Your data is stored only in your browser's local storage. It never leaves your device." },
  { q: 'Can I continue editing my resume later?',
    a: 'Yes. Your progress auto-saves in the browser. Return any time and your resume will be exactly as you left it.' },
  { q: 'Can I use this resume for job applications?',
    a: 'Absolutely. The downloaded PDF is a professional, fully formatted document suitable for any job application.' },
];

const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question', name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const appLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'ToolEka Resume Builder', url: 'https://resume.tooleka.com',
  applicationCategory: 'ProductivityApplication', operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />

      <SiteHeader />
      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="bg-white pt-16 pb-20 px-4 border-b border-slate-100">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-6">
              <MdCheckCircle size={13} /> 100% Free · No Account Required
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Create a Professional<br />
              <span className="text-blue-600">Resume for Free</span>
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              Build an ATS-friendly resume in minutes. No sign-up, no watermarks, no payment.
              Your data stays in your browser.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/builder"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-8 text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Create My Resume <MdArrowForward size={16} />
              </Link>
              <Link href="/builder"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors">
                Browse Templates
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {['Free PDF download', 'No watermarks', 'ATS-friendly', 'No account needed', 'Auto-saves'].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MdCheckCircle size={13} className="text-emerald-500 shrink-0" /> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-slate-50 border-b border-slate-100">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900">Everything you need, completely free</h2>
              <p className="mt-2 text-sm text-slate-500">No gimmicks, no locked features.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {features.map(f => (
                <div key={f.title} className="bg-white rounded-xl border border-slate-200 p-4 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="text-blue-600 text-xl mb-3">{f.icon}</div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{f.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section className="py-16 px-4 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
              <p className="mt-2 text-sm text-slate-500">Three steps from blank page to professional resume.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {steps.map(s => (
                <div key={s.n} className="text-center">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white font-extrabold text-xl mb-4 shadow-md shadow-blue-200">
                    {s.n}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/builder"
                className="inline-flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white hover:bg-blue-700 transition-colors">
                Start Building Now <MdArrowForward size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── TEMPLATES ────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-slate-50 border-b border-slate-100">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900">Professional templates</h2>
              <p className="mt-2 text-sm text-slate-500">Five designs — switch any time, content stays intact.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {TEMPLATES.map(t => (
                <div key={t.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-blue-200 transition-all">
                  <div className="h-28 flex items-end justify-start p-2.5" style={{ background: t.previewBg }}>
                    {t.atsScore === 'High' && (
                      <span className="text-[10px] font-bold bg-emerald-400 text-emerald-900 rounded-full px-2 py-0.5">
                        ATS ✓
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-bold text-slate-900 mb-0.5">{t.name}</p>
                    <p className="text-[11px] text-slate-400 mb-3 leading-relaxed line-clamp-2">{t.description}</p>
                    <Link href={`/builder?template=${t.id}`}
                      className="block w-full text-center text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg py-1.5 transition-colors">
                      Use Template
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Frequently asked questions</h2>
            <div className="space-y-2">
              {faqs.map(f => (
                <details key={f.q} className="group rounded-xl border border-slate-200 overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-slate-800 list-none select-none hover:bg-slate-50 transition-colors">
                    {f.q}
                    <span className="ml-4 shrink-0 text-slate-400 font-light text-xl leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-5 pb-4 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-extrabold text-white mb-3">Ready to build your resume?</h2>
            <p className="text-blue-100 text-sm mb-8">Free, no account, no watermark. Download your PDF in minutes.</p>
            <Link href="/builder"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-sm font-bold text-blue-600 hover:bg-blue-50 transition-colors shadow-lg">
              Create Your Free Resume <MdArrowForward size={16} />
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
