import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { TEMPLATES }  from '@/types/resume';
import {
  HiCheckCircle,
  HiShieldCheck,
  HiBolt,
  HiDocumentText,
  HiSparkles,
  HiArrowRight,
  HiBookOpen,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Free Resume Builder — ATS Resume Maker | ToolEka',
  description:
    'Build and download professional ATS-friendly resumes for free. Zero sign-up, no fees, instant single-page vector PDF export with clean templates.',
  alternates: { canonical: 'https://resume.tooleka.com' },
  openGraph: {
    title: 'Free Resume Builder — ATS Resume Maker | ToolEka',
    description:
      'Build and download professional ATS-friendly resumes for free. Zero sign-up, no fees, instant single-page vector PDF export with clean templates.',
    url: 'https://resume.tooleka.com',
    type: 'website',
    images: [
      {
        url: 'https://resume.tooleka.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ToolEka Free Resume Builder - ATS Resume Maker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Resume Builder — ATS Resume Maker | ToolEka',
    description:
      'Build and download professional ATS-friendly resumes for free. Zero sign-up, no fees, instant vector PDF export.',
    images: ['https://resume.tooleka.com/og-image.png'],
  },
};

/* ── data ──────────────────────────────────────────────────── */
const features = [
  { icon: '↗', title: '100% Free Forever',   desc: 'No paid plans, no locked templates, and zero hidden paywalls.' },
  { icon: '○', title: 'No Account Needed',   desc: 'Start building immediately — no email, registration, or credit card.' },
  { icon: '✓', title: 'ATS-Friendly Vector', desc: 'Templates engineered to pass automated corporate screening systems.' },
  { icon: '⊞', title: 'Multiple Templates',  desc: '6 professional designs — switch any time, your content stays intact.' },
  { icon: '↓', title: 'Instant PDF Export',  desc: 'Download a clean, text-selectable vector PDF with no watermarks.' },
  { icon: '⊘', title: 'Private & Local',     desc: 'Your career data stays in your browser. Zero server databases.' },
  { icon: '◎', title: 'Live Preview',        desc: 'See your resume update in real time as you edit each section.' },
  { icon: '✎', title: 'JSON Backup & Import',desc: 'Export and import your entire resume data file for effortless backup.' },
];

const steps = [
  { n: '1', title: 'Enter Your Information', desc: 'Fill in contact details, work experience, education, and technical skills — one section at a time.' },
  { n: '2', title: 'Choose an ATS Template', desc: 'Select from 6 professional templates (Classic, Modern, Minimal, Developer, Executive). Switch anytime.' },
  { n: '3', title: 'Download Vector PDF',    desc: 'Click Download PDF to instantly export a print-ready, single-page A4 resume — free with no watermark.' },
];

const faqs = [
  {
    q: 'Is this resume builder genuinely free?',
    a: 'Yes, completely free. There are no trial periods, no locked "pro" templates, no credit card requirements, and no watermarks on exported PDFs. The platform is supported by unobtrusive programmatic advertising (Google AdSense).',
  },
  {
    q: 'Do I need to register or create an account?',
    a: 'No. You can build, customize, and download your resume immediately without creating an account or providing your email address.',
  },
  {
    q: 'Are the templates compliant with Applicant Tracking Systems (ATS)?',
    a: 'Yes. All templates use clean semantic HTML and linear hierarchies without complex nested tables, text boxes, or flat raster images, ensuring 100% parsing accuracy across Workday, Greenhouse, Lever, and Taleo.',
  },
  {
    q: 'Where is my personal resume data stored?',
    a: "Your data is stored strictly in your web browser's local storage (localStorage). It never gets uploaded, archived, or sold to any central database or third-party recruiters.",
  },
  {
    q: 'Can I export my resume as a PDF?',
    a: 'Yes. Our serverless headless Chromium rendering engine converts your resume into a crisp, single-page vector PDF with text-selectable characters ready for job applications.',
  },
  {
    q: 'Can I save my resume and edit it later?',
    a: 'Yes. Your work auto-saves locally in your browser. You can return anytime to make changes, or use the "Export JSON" feature to save a persistent backup file on your computer.',
  },
  {
    q: 'What makes ToolEka different from other online resume makers?',
    a: 'Most other resume builders lure job seekers in with "free" promises only to hit them with a $30/month subscription at the final download screen. ToolEka is truly 100% free with no account creation and complete data privacy.',
  },
  {
    q: 'Can I import existing resume data?',
    a: 'Yes. You can import previously saved ToolEka JSON resume files or pre-load realistic sample data across multiple professional personas (Software Engineer, Marketing Director, Project Manager).',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <SiteHeader />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="border-b border-[#E5E5E5] bg-white py-16 md:py-24" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true" />
              100% free · no account required · instant vector pdf
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-[3.5rem] font-black tracking-tight text-black leading-[1.08] mb-5 max-w-3xl">
              Create a Professional<br className="hidden md:block" />
              Resume for Free
            </h1>

            <p className="text-base md:text-lg text-[#404040] max-w-xl leading-relaxed mb-10">
              Build high-scoring, ATS-friendly resumes in minutes. No sign-up, no hidden fees, no watermarks.
              Your data stays private in your browser.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/builder"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1">
                Create My Resume Free
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/blog"
                className="inline-flex items-center px-6 py-3 border border-[#D4D4D4] text-[#404040] text-sm font-medium hover:border-black hover:text-black transition-colors">
                Read ATS Guides
              </Link>
            </div>

            {/* Trust tags */}
            <div className="flex flex-wrap gap-3">
              {['No Account Required', 'Zero Watermarks', '100% ATS-Compliant', 'Instant Vector PDF', 'Browser Auto-Save', 'Privacy-First'].map(tag => (
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
              <h2 className="text-2xl sm:text-3xl font-bold text-black">Everything you need to land interviews, completely free</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E5E5E5]">
              {features.map((f) => (
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
              <p className="text-xs font-semibold text-[#595959] uppercase tracking-widest mb-2">Simple 3-Step Process</p>
              <h2 className="text-2xl font-bold text-black">How to build your resume in minutes</h2>
            </div>
            <div className="border border-[#E5E5E5] bg-white divide-y divide-[#E5E5E5]">
              {steps.map((s) => (
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

        {/* ── ATS BEST PRACTICES SECTION ───────────────────────────────── */}
        <section className="py-16 md:py-20 px-4 bg-white border-b border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto sm:px-2 lg:px-4">
            <div className="mb-10">
              <p className="text-xs font-semibold text-[#595959] uppercase tracking-widest mb-2">ATS Strategy &amp; Standards</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Why ATS-Friendly Resume Formatting Matters</h2>
              <p className="text-sm text-[#595959] max-w-3xl leading-relaxed">
                Over 75% of job applications are filtered out by automated Applicant Tracking Systems (ATS) like Workday, Greenhouse, and Taleo before reaching a human recruiter. ToolEka resumes are engineered from the ground up to follow strict parsing rules:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 bg-[#FBFBFB] border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-black mb-2">Linear Column Hierarchy</h3>
                <p className="text-xs text-[#595959] leading-relaxed">
                  Avoids sidebars and floating text boxes that cause ATS parsers to jumble dates, job titles, and company names.
                </p>
              </div>
              <div className="p-6 bg-[#FBFBFB] border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-black mb-2">Standard Section Headers</h3>
                <p className="text-xs text-[#595959] leading-relaxed">
                  Uses universally recognized section anchors (&ldquo;Work Experience&rdquo;, &ldquo;Skills&rdquo;, &ldquo;Education&rdquo;) for 100% entity extraction.
                </p>
              </div>
              <div className="p-6 bg-[#FBFBFB] border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-black mb-2">Selectable Vector PDF</h3>
                <p className="text-xs text-[#595959] leading-relaxed">
                  Exports pure text-selectable vector PDFs rather than flat raster images, allowing OCR engines to read every keyword cleanly.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link href="/blog/how-to-write-ats-friendly-resume" className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:underline">
                Read our complete ATS Optimization Masterclass <HiArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 px-4 bg-[#F7F7F7] border-b border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto sm:px-2 lg:px-4 flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <p className="text-xs font-semibold text-[#595959] uppercase tracking-widest mb-2 text-center">FAQ</p>
              <h2 className="text-2xl font-bold text-black mb-10 text-center">Frequently Asked Questions</h2>
              <FaqList faqs={faqs} />
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="bg-black py-16 md:py-20 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-widest mb-3">
              Get Started Free
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
              Ready to build your standout resume?
            </h2>
            <p className="text-sm text-[#A3A3A3] leading-relaxed max-w-sm mx-auto mb-8">
              100% Free, no account, zero watermarks. Download your vector PDF in minutes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/builder"
                className="inline-flex items-center px-6 py-3 bg-white text-black text-sm font-semibold hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                Create Your Free Resume
              </Link>
              <Link href="/blog"
                className="inline-flex items-center px-6 py-3 border border-[#525252] text-[#D4D4D4] text-sm font-medium hover:border-white hover:text-white transition-colors">
                Browse Career Guides
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
    <div className="divide-y divide-[#E5E5E5] border-t border-b border-[#E5E5E5] bg-white p-4 sm:p-6 shadow-xs">
      {faqs.map(f => (
        <details key={f.q} className="group">
          <summary className="w-full flex items-center justify-between py-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black list-none">
            <span className="text-sm font-semibold text-black pr-8">{f.q}</span>
            <span className="flex-shrink-0 text-[#595959] text-lg leading-none group-open:hidden">+</span>
            <span className="flex-shrink-0 text-[#595959] text-lg leading-none hidden group-open:block">−</span>
          </summary>
          <div className="pb-4 text-xs sm:text-sm text-[#595959] leading-relaxed">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
