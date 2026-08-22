import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import {
  HiClock,
  HiUser,
  HiCalendar,
  HiArrowLeft,
  HiCheckBadge,
  HiGlobeAmericas,
  HiAcademicCap,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Resume vs. CV: Key Differences, When to Use Which, and Global Standards',
  description:
    'Understand the fundamental differences between a Resume and a Curriculum Vitae (CV). Discover global standards across the US, UK, Europe, and academia.',
  alternates: { canonical: 'https://resume.tooleka.com/blog/resume-vs-cv-difference' },
  openGraph: {
    title: 'Resume vs. CV: Key Differences, When to Use Which, and Global Standards',
    description:
      'Understand the fundamental differences between a Resume and a Curriculum Vitae (CV). Discover global standards across the US, UK, Europe, and academia.',
    url: 'https://resume.tooleka.com/blog/resume-vs-cv-difference',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'Can a resume be more than one page?',
    a: 'For candidates with fewer than 5–7 years of experience, a single-page resume is strongly recommended. For seasoned senior professionals or managers with 10+ years of deep relevant experience, a 2-page resume is acceptable.',
  },
  {
    q: 'Do UK and European employers mean a Resume when they ask for a CV?',
    a: 'Yes. In the United Kingdom, Ireland, New Zealand, and most European countries, the term "CV" is used interchangeably with what Americans call a "Resume"—meaning a concise 1–2 page summary of work history rather than a multi-page academic dossier.',
  },
  {
    q: 'Should I include a photo on my CV or resume?',
    a: 'In the United States, Canada, the UK, and Australia, do NOT include a photo to prevent unconscious bias and anti-discrimination violations. In continental Europe (Germany, France) and parts of Asia, professional headshots are still common practice.',
  },
  {
    q: 'What is an Academic CV?',
    a: 'An Academic CV is an exhaustive, unconstrained document detailing a scholar\'s complete academic credentials, published peer-reviewed research papers, teaching appointments, conference presentations, grants, and awards. It can easily range from 3 to 10+ pages in length.',
  },
];

export default function ResumeVsCvGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Resume vs. CV: Key Differences, When to Use Which, and Global Standards',
    description:
      'Unravel the differences between a Resume and a Curriculum Vitae (CV). Learn which document employers expect across the US, UK, Europe, and academic institutions.',
    author: { '@type': 'Person', name: 'ToolEka Editorial Team' },
    publisher: { '@type': 'Organization', name: 'ToolEka', url: 'https://tooleka.com' },
    datePublished: '2026-02-18',
    dateModified: '2026-02-22',
    mainEntityOfPage: 'https://resume.tooleka.com/blog/resume-vs-cv-difference',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main className="min-h-screen bg-[#FBFBFB] py-10 md:py-16 text-[#262626]">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#595959] hover:text-black transition-colors"
            >
              <HiArrowLeft size={13} /> Back to Blog Hub
            </Link>
          </div>

          {/* Article Header */}
          <header className="bg-white border border-[#E5E5E5] p-6 sm:p-10 mb-8 shadow-xs">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-black text-white">
                Career Basics
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiClock size={13} /> 7 min read
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiCalendar size={13} /> February 18, 2026
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight mb-4">
              Resume vs. CV: Key Differences, When to Use Which, and Global Standards
            </h1>

            <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-6">
              Are you applying for a job in the United States, Europe, or academia? Submitting the wrong document type can immediately confuse recruiters. Here is your definitive guide to understanding the distinctions between a Resume and a Curriculum Vitae (CV).
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] flex items-center gap-2 text-xs text-[#595959]">
              <HiUser size={14} className="text-black" />
              <span>Written by <strong>ToolEka Editorial Team</strong> &bull; Verified Career Standards</span>
            </div>
          </header>

          {/* Body Content */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-10 text-sm leading-relaxed text-[#333333] shadow-xs">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                1. What is a Resume vs. What is a CV?
              </h2>
              <p>
                The primary difference between a <strong>Resume</strong> and a <strong>Curriculum Vitae (CV)</strong> boils down to three core factors: <em>length</em>, <em>purpose</em>, and <em>geographical context</em>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
                <div className="p-4 bg-[#FBFBFB] border border-[#E5E5E5]">
                  <strong className="text-black text-base block mb-1">What is a Resume?</strong>
                  <p className="text-xs text-[#595959] leading-relaxed">
                    Originating from the French word for &ldquo;summary&rdquo;, a resume is a concise 1-to-2 page marketing document tailored specifically to a single target job. It highlights only the most relevant work experience, top skills, and measurable career achievements.
                  </p>
                </div>
                <div className="p-4 bg-[#FBFBFB] border border-[#E5E5E5]">
                  <strong className="text-black text-base block mb-1">What is a CV (Curriculum Vitae)?</strong>
                  <p className="text-xs text-[#595959] leading-relaxed">
                    Latin for &ldquo;course of life&rdquo;, an authentic CV is a comprehensive, multi-page record documenting a person&apos;s entire career history, scholarly research, publications, teaching appointments, awards, and degrees in chronological order.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Comparison Table */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                2. Direct Feature Comparison Table
              </h2>
              <div className="overflow-x-auto border border-[#E5E5E5]">
                <table className="w-full text-xs text-left">
                  <thead className="bg-black text-white uppercase text-[11px] font-mono">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">Resume</th>
                      <th className="p-3">Curriculum Vitae (CV)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5E5]">
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-black">Standard Length</td>
                      <td className="p-3">1 to 2 pages maximum</td>
                      <td className="p-3">2 to 10+ pages (No strict limit)</td>
                    </tr>
                    <tr className="bg-[#FAFAFA]">
                      <td className="p-3 font-bold text-black">Primary Purpose</td>
                      <td className="p-3">Targeted job applications in private &amp; tech sectors</td>
                      <td className="p-3">Academic, scientific research, medical, and fellowships</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-black">Customization</td>
                      <td className="p-3">Heavily customized for each specific job opening</td>
                      <td className="p-3">Comprehensive static document updated as milestones occur</td>
                    </tr>
                    <tr className="bg-[#FAFAFA]">
                      <td className="p-3 font-bold text-black">Core Focus</td>
                      <td className="p-3">Quantified accomplishments &amp; immediate job fit</td>
                      <td className="p-3">Complete academic history, publications, grants &amp; credentials</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Geographical context */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                3. Global Standards: Country-by-Country Differences
              </h2>
              <div className="space-y-3">
                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <div className="flex items-center gap-2 font-bold text-black text-sm mb-1">
                    <HiGlobeAmericas size={18} /> United States &amp; Canada
                  </div>
                  <p className="text-xs text-[#595959]">
                    Strict division between documents. Standard private company hiring managers expect a <strong>1-page Resume</strong>. The term &ldquo;CV&rdquo; is reserved almost exclusively for university professorships, PhD candidates, medical doctors, and scientific researchers.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <div className="flex items-center gap-2 font-bold text-black text-sm mb-1">
                    <HiGlobeAmericas size={18} /> United Kingdom, Ireland, Australia &amp; New Zealand
                  </div>
                  <p className="text-xs text-[#595959]">
                    The word &ldquo;Resume&rdquo; is rarely used. Employers ask for a <strong>&ldquo;CV&rdquo;</strong>, but they actually mean a 1-to-2 page concise summary of your career—equivalent to an American resume!
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <div className="flex items-center gap-2 font-bold text-black text-sm mb-1">
                    <HiGlobeAmericas size={18} /> European Union (Europass)
                  </div>
                  <p className="text-xs text-[#595959]">
                    European recruiters generally expect a 2-page CV, often adhering to the standardized Europass framework, with explicit sections for language proficiencies (CEFR levels A1&ndash;C2).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: FAQs */}
            <section className="space-y-4 pt-2">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                4. Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-[#FBFBFB] border border-[#E5E5E5]">
                    <h3 className="font-bold text-black text-sm mb-1">{faq.q}</h3>
                    <p className="text-xs text-[#595959] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="pt-6">
              <div className="bg-black text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">Create Your Tailored Resume Today</h3>
                  <p className="text-xs text-neutral-300">ATS-compliant formatting designed for both US and international standards.</p>
                </div>
                <Link
                  href="/builder"
                  className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
                >
                  Create Resume Now →
                </Link>
              </div>
            </div>

            {/* Internal Linking: Related Career Guides */}
            <RelatedArticles currentSlug="resume-vs-cv-difference" />
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
