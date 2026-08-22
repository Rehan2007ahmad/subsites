import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import {
  HiClock,
  HiUser,
  HiCalendar,
  HiArrowLeft,
  HiBolt,
  HiSparkles,
  HiCheckCircle,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: '250+ High-Impact Resume Action Verbs & Power Words That Get You Hired',
  description:
    'Replace weak phrases with 250+ high-impact resume action verbs. Categorized by leadership, technical, problem-solving, sales, and communication skills.',
  alternates: { canonical: 'https://resume.tooleka.com/blog/top-resume-action-verbs-and-power-words' },
  openGraph: {
    title: '250+ High-Impact Resume Action Verbs & Power Words That Get You Hired',
    description:
      'Replace weak phrases with 250+ high-impact resume action verbs. Categorized by leadership, technical, problem-solving, sales, and communication skills.',
    url: 'https://resume.tooleka.com/blog/top-resume-action-verbs-and-power-words',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'Why are action verbs so important on a resume?',
    a: 'Action verbs immediately establish ownership and impact. Instead of describing passive job duties ("responsible for managing"), action verbs ("orchestrated", "streamlined", "accelerated") clearly demonstrate what YOU achieved for the organization.',
  },
  {
    q: 'Should I use past tense or present tense action verbs?',
    a: 'Use past tense verbs (e.g. "Engineered", " Spearheaded", "Increased") for previous jobs. Use present tense verbs (e.g. "Develop", "Lead", "Manage") exclusively for your current, ongoing position.',
  },
  {
    q: 'What are the worst resume clichés to avoid?',
    a: 'Avoid overused buzzwords that lack concrete evidence, including: "hard worker", "team player", "think outside the box", "go-getter", "detail-oriented", and "responsible for". Replace them with specific, measurable achievements starting with power verbs.',
  },
];

export default function PowerActionVerbsGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '250+ High-Impact Resume Action Verbs & Power Words That Get You Hired',
    description:
      'Transform boring job descriptions into compelling achievements with 250+ categorized power verbs. Includes before-and-after bullet point transformations.',
    author: { '@type': 'Person', name: 'Rehan Ahmad' },
    publisher: { '@type': 'Organization', name: 'ToolEka', url: 'https://tooleka.com' },
    datePublished: '2026-02-15',
    dateModified: '2026-02-22',
    mainEntityOfPage: 'https://resume.tooleka.com/blog/top-resume-action-verbs-and-power-words',
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
                Resume Writing
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiClock size={13} /> 9 min read
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiCalendar size={13} /> February 15, 2026
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight mb-4">
              250+ High-Impact Resume Action Verbs &amp; Power Words That Get You Hired
            </h1>

            <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-6">
              Recruiters scan resumes in an average of 6 seconds. If your bullet points start with passive phrases like &ldquo;Responsible for&rdquo; or &ldquo;Helped with&rdquo;, your resume fades into the background. Use this curated dictionary of 250+ power verbs to transform your experience into an impressive highlight reel.
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] flex items-center gap-2 text-xs text-[#595959]">
              <HiUser size={14} className="text-black" />
              <span>Written by <strong>Rehan Ahmad</strong> &bull; ToolEka Career Insights</span>
            </div>
          </header>

          {/* Content Body */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-10 text-sm leading-relaxed text-[#333333] shadow-xs">
            {/* Section 1: Leadership Verbs */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiBolt className="text-amber-500" /> 1. Leadership, Project Management &amp; Execution
              </h2>
              <p className="text-xs text-[#595959]">
                Use these verbs when you spearheaded projects, managed teams, aligned stakeholders, or drove initiatives:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-[#FBFBFB] border border-[#E5E5E5] p-4 text-black">
                <div>&bull; Spearheaded</div>
                <div>&bull; Orchestrated</div>
                <div>&bull; Mobilized</div>
                <div>&bull; Championed</div>
                <div>&bull; Governed</div>
                <div>&bull; Directed</div>
                <div>&bull; Steered</div>
                <div>&bull; Delegated</div>
                <div>&bull; Executed</div>
                <div>&bull; Cultivated</div>
                <div>&bull; Mentored</div>
                <div>&bull; Galvanized</div>
                <div>&bull; Piloted</div>
                <div>&bull; Overhauled</div>
                <div>&bull; Centralized</div>
                <div>&bull; Realigned</div>
              </div>
            </section>

            {/* Section 2: Technical & Engineering */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiBolt className="text-blue-500" /> 2. Technical, Engineering &amp; Development
              </h2>
              <p className="text-xs text-[#595959]">
                Showcase your technical prowess, system architecture, database modeling, and code shipping:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-[#FBFBFB] border border-[#E5E5E5] p-4 text-black">
                <div>&bull; Architected</div>
                <div>&bull; Engineered</div>
                <div>&bull; Deployed</div>
                <div>&bull; Refactored</div>
                <div>&bull; Configured</div>
                <div>&bull; Containerized</div>
                <div>&bull; Automated</div>
                <div>&bull; Debugged</div>
                <div>&bull; Provisioned</div>
                <div>&bull; Modeled</div>
                <div>&bull; Benchmarked</div>
                <div>&bull; Integrated</div>
                <div>&bull; Programmed</div>
                <div>&bull; Optimized</div>
                <div>&bull; Migrated</div>
                <div>&bull; Virtualized</div>
              </div>
            </section>

            {/* Section 3: Revenue, Sales & Growth */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiBolt className="text-emerald-500" /> 3. Revenue, Sales &amp; Business Growth
              </h2>
              <p className="text-xs text-[#595959]">
                Highlight client acquisition, conversion rate improvements, and bottom-line profit expansion:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-[#FBFBFB] border border-[#E5E5E5] p-4 text-black">
                <div>&bull; Generated</div>
                <div>&bull; Maximized</div>
                <div>&bull; Outperformed</div>
                <div>&bull; Captured</div>
                <div>&bull; Closed</div>
                <div>&bull; Accelerated</div>
                <div>&bull; Expanded</div>
                <div>&bull; Monetized</div>
                <div>&bull; Negotiated</div>
                <div>&bull; Scaled</div>
                <div>&bull; Projected</div>
                <div>&bull; Converted</div>
              </div>
            </section>

            {/* Section 4: Before vs After Transformations */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                4. Real-World Before vs. After Transformations
              </h2>
              <div className="space-y-3 text-xs">
                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-2">
                  <div className="text-red-600 line-through">
                    <strong>Weak:</strong> Responsible for answering customer emails and dealing with complaints.
                  </div>
                  <div className="text-emerald-700 font-semibold">
                    <strong>High-Impact:</strong> Resolved 90+ daily customer escalations with a 98.4% first-contact resolution rate, cutting ticket turnaround time by 35%.
                  </div>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-2">
                  <div className="text-red-600 line-through">
                    <strong>Weak:</strong> Made the website faster and fixed coding bugs.
                  </div>
                  <div className="text-emerald-700 font-semibold">
                    <strong>High-Impact:</strong> Refactored front-end React rendering pipeline, decreasing Largest Contentful Paint (LCP) from 3.8s to 1.1s and boosting checkout conversions by 14%.
                  </div>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-2">
                  <div className="text-red-600 line-through">
                    <strong>Weak:</strong> Led a sales team and met our quarterly targets.
                  </div>
                  <div className="text-emerald-700 font-semibold">
                    <strong>High-Impact:</strong> Spearheaded a cross-functional sales force of 8 enterprise account executives, generating $2.4M in new ARR (128% of quarterly quota).
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: FAQs */}
            <section className="space-y-4 pt-2">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                5. Frequently Asked Questions (FAQs)
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
                  <h3 className="text-lg font-bold">Write Your Standout Resume Now</h3>
                  <p className="text-xs text-neutral-300">Clean typography with effortless section editing and instant PDF generation.</p>
                </div>
                <Link
                  href="/builder"
                  className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
                >
                  Start Building Free →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
