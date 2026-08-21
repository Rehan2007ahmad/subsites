import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { TEMPLATES }  from '@/types/resume';

export const metadata: Metadata = {
  title: 'Free Resume Builder — Create a Professional Resume | ToolEka',
  description: 'Build a professional resume for free. No account required, no watermarks, no payment. ATS-friendly templates, live preview, and instant PDF download.',
  alternates: { canonical: 'https://resume.tooleka.com' },
  openGraph: {
    title: 'Free Resume Builder — Create a Professional Resume | ToolEka',
    description: 'Build your resume for free. No sign-up, no watermarks, instant PDF download.',
    url: 'https://resume.tooleka.com',
    type: 'website',
  },
};

/* ── data ──────────────────────────────────────────────────── */
const features = [
  { icon: '↗', title: 'Free Forever',       desc: 'No paid plans, no premium tiers, no hidden fees ever.' },
  { icon: '○', title: 'No Sign Up',          desc: 'Start building immediately — no email or account required.' },
  { icon: '✓', title: 'ATS-Friendly',        desc: 'Templates optimised to pass automated screening systems.' },
  { icon: '⊞', title: 'Multiple Templates',  desc: '5 professional designs — switch any time, content stays.' },
  { icon: '↓', title: 'PDF Download',        desc: 'Download a clean, text-selectable PDF. No watermarks.' },
  { icon: '⊘', title: 'Private & Local',     desc: 'Your data stays in your browser. Zero server uploads.' },
  { icon: '◎', title: 'Live Preview',        desc: 'See your resume update in real time as you type.' },
  { icon: '✎', title: 'Easy Editing',        desc: 'Clean forms make it fast to fill every resume section.' },
];

const steps = [
  { n: '1', title: 'Enter your information', desc: 'Fill in personal details, work experience, education, and skills — one section at a time.' },
  { n: '2', title: 'Choose a template',      desc: 'Pick from 5 professional templates. Switch any time and your content moves with you.' },
  { n: '3', title: 'Download your resume',   desc: 'Click Download PDF for a polished, ATS-friendly resume instantly — free, no watermark.' },
];

const faqs = [
  { q: 'Is the resume builder really free?', a: 'Yes, completely free. No paid plans, no premium templates, no watermarks. The product is supported by unobtrusive advertising.' },
  { q: 'Do I need to create an account?', a: 'No. You can build, edit, and download your resume without creating an account or providing your email address.' },
  { q: 'Can I download my resume as a PDF?', a: 'Yes. Click "Download PDF" in the builder to instantly get a professional PDF version of your resume.' },
  { q: 'Are the templates ATS-friendly?', a: 'The Classic, Minimal, and Developer templates are explicitly ATS-optimised. All five use clean, parseable formatting that avoids tables and text boxes.' },
  { q: 'Is my resume data stored online?', a: "No. Your data is stored only in your browser's local storage. It never leaves your device or gets sent to any server." },
  { q: 'Can I edit my resume later?', a: 'Yes. Your progress auto-saves in the browser. Return any time and your resume will be exactly as you left it.' },
];

const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <SiteHeader />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="border-b border-[#E5E5E5] bg-white py-16 md:py-24" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Badge — mirrors ToolEka exactly */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true" />
              100% free · no account required
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-[3.5rem] font-black tracking-tight text-black leading-[1.08] mb-5 max-w-3xl">
              Create a Professional<br className="hidden md:block" />
              Resume for Free
            </h1>

            <p className="text-base md:text-lg text-[#404040] max-w-xl leading-relaxed mb-10">
              Build an ATS-friendly resume in minutes. No sign-up, no watermarks, no payment.
              Your data stays in your browser.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/builder"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1">
                Create My Resume
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/builder"
                className="inline-flex items-center px-6 py-3 border border-[#D4D4D4] text-[#404040] text-sm font-medium hover:border-black hover:text-black transition-colors">
                Browse Templates
              </Link>
            </div>

            {/* Trust tags — mirrors ToolEka feature tags */}
            <div className="flex flex-wrap gap-3">
              {['No Account', 'No Watermarks', 'ATS-Friendly', 'Instant PDF', 'Auto-Saves', 'Privacy First'].map(tag => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#D4D4D4] text-xs font-medium text-[#404040] bg-white">
                  <span className="w-1 h-1 rounded-full bg-black" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 px-4 bg-[#F7F7F7] border-b border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto sm:px-2 lg:px-4">
            <div className="mb-8">
              <p className="text-xs font-semibold text-[#595959] uppercase tracking-widest mb-2">Features</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-black">Everything you need, completely free</h2>
            </div>
            {/* Grid that shares borders exactly like ToolEka tool grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E5E5E5]">
              {features.map((f, i) => (
                <div key={f.title} className="group flex flex-col bg-white p-6 hover:bg-[#F7F7F7] transition-colors duration-150 border-b border-r border-[#E5E5E5]">
                  <div className="flex items-start justify-between mb-5">
                    <div className="inline-flex items-center justify-center w-9 h-9 border border-[#E5E5E5] bg-[#F7F7F7] text-[#595959] text-base font-mono group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-150">
                      {f.icon}
                    </div>
                    <svg className="w-4 h-4 text-[#D4D4D4] group-hover:text-black transition-colors duration-150 mt-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-black mb-1.5 leading-snug">{f.title}</h3>
                  <p className="text-xs text-[#404040] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 px-4 bg-white border-b border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto sm:px-2 lg:px-4">
            <div className="mb-10">
              <p className="text-xs font-semibold text-[#595959] uppercase tracking-widest mb-2">How It Works</p>
              <h2 className="text-2xl font-bold text-black">Step-by-step</h2>
            </div>
            {/* Step cards — mirrors ToolEka's how-it-works divided list */}
            <div className="border border-[#E5E5E5] bg-white divide-y divide-[#E5E5E5]">
              {steps.map((s, i) => (
                <div key={s.n} className="flex gap-5 p-5 sm:p-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-bold">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1">{s.title}</h3>
                    <p className="text-sm text-[#404040] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/builder"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-colors">
                Start Building Now
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TEMPLATES ────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 px-4 bg-[#F7F7F7] border-b border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto sm:px-2 lg:px-4">
            <div className="mb-8 pb-4 border-b border-[#E5E5E5]">
              <p className="text-xs font-semibold text-[#595959] uppercase tracking-widest mb-1">Templates</p>
              <p className="text-sm text-[#404040]">Six professional designs — switch any time, your content stays intact.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 border border-[#E5E5E5]">
              {TEMPLATES.map(t => (
                <Link key={t.id} href={`/builder?template=${t.id}`}
                  className="group flex flex-col bg-white hover:bg-[#F7F7F7] transition-colors duration-150 border-b border-r border-[#E5E5E5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black overflow-hidden">
                  {/* Color swatch */}
                  <div className="h-24 w-full flex items-end justify-start p-2.5" style={{ background: t.previewBg }}>
                    {t.atsScore === 'High' && (
                      <span className="text-[10px] font-bold bg-white/90 text-black px-1.5 py-0.5">ATS ✓</span>
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-1.5">
                      <h3 className="text-sm font-semibold text-black leading-snug group-hover:underline">{t.name}</h3>
                      <svg className="w-4 h-4 text-[#D4D4D4] group-hover:text-black transition-colors shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-xs text-[#404040] leading-relaxed">{t.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 px-4 bg-white border-b border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto sm:px-2 lg:px-4 flex flex-col items-center">
            <div className="w-full max-w-2xl">
              <p className="text-xs font-semibold text-[#595959] uppercase tracking-widest mb-2 text-center">FAQ</p>
              <h2 className="text-2xl font-bold text-black mb-10 text-center">Frequently Asked Questions</h2>
              <FaqList faqs={faqs} />
            </div>
          </div>
        </section>

        {/* ── FINAL CTA — dark variant matching ToolEka CTASection ─────── */}
        <section className="bg-black py-16 md:py-20 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-widest mb-3">
              Get Started
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
              Ready to build your resume?
            </h2>
            <p className="text-sm text-[#A3A3A3] leading-relaxed max-w-sm mx-auto mb-8">
              Free, no account, no watermark. Download your PDF in minutes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/builder"
                className="inline-flex items-center px-6 py-3 bg-white text-black text-sm font-semibold hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                Create Your Free Resume
              </Link>
              <Link href="https://tooleka.com"
                className="inline-flex items-center px-6 py-3 border border-[#525252] text-[#D4D4D4] text-sm font-medium hover:border-white hover:text-white transition-colors">
                All ToolEka Tools
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}

/* ── Server-rendered FAQ accordion (no JS needed) ── */
function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-[#E5E5E5] border-t border-b border-[#E5E5E5]">
      {faqs.map(f => (
        <details key={f.q} className="group">
          <summary className="w-full flex items-center justify-between py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black list-none">
            <span className="text-sm font-medium text-black pr-8">{f.q}</span>
            <span className="flex-shrink-0 text-[#595959] text-lg leading-none group-open:hidden">+</span>
            <span className="flex-shrink-0 text-[#595959] text-lg leading-none hidden group-open:block">−</span>
          </summary>
          <div className="pb-5 text-sm text-[#404040] leading-relaxed">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
