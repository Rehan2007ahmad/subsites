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
  HiSparkles,
  HiCheckBadge,
  HiDocumentText,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'How to Write Powerful Resume Work Experience Bullet Points Using STAR & Google XYZ Methods',
  description:
    'Learn how to write high-converting resume bullet points using the Google XYZ formula and the STAR method. Includes quantified examples across multiple industries.',
  alternates: { canonical: 'https://resume.tooleka.com/blog/how-to-format-work-experience-bullet-points' },
  openGraph: {
    title: 'How to Write Powerful Resume Work Experience Bullet Points Using STAR & Google XYZ Methods',
    description:
      'Learn how to write high-converting resume bullet points using the Google XYZ formula and the STAR method. Includes quantified examples across multiple industries.',
    url: 'https://resume.tooleka.com/blog/how-to-format-work-experience-bullet-points',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'How many bullet points should I write per job on my resume?',
    a: 'For your most recent and relevant position, write 4 to 6 concise bullet points. For older positions held 3–7 years ago, 2 to 3 bullet points focusing purely on key accomplishments are sufficient.',
  },
  {
    q: 'What if I do not have direct sales or revenue numbers to quantify?',
    a: 'You can quantify scale, time savings, volume, error reduction, frequency, or team size. For example: "Managed a team of 6 interns", "Reduced report generation time from 4 hours to 45 minutes", or "Maintained a 99.8% database uptime across 12 consecutive months".',
  },
  {
    q: 'Should resume bullet points end with periods?',
    a: 'Yes, if your bullet points are complete sentences or structured clauses, standard style guides recommend ending each bullet with a period. The most critical rule is consistency—either end all bullet points with periods or none.',
  },
];

export default function BulletPointsGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Write Powerful Resume Work Experience Bullet Points Using STAR & Google XYZ Methods',
    description:
      'Master the Google XYZ and STAR formulas to write high-converting resume bullet points with quantified results and measurable business impact.',
    author: { '@type': 'Person', name: 'ToolEka Editorial Team' },
    publisher: { '@type': 'Organization', name: 'ToolEka', url: 'https://tooleka.com' },
    datePublished: '2026-02-12',
    dateModified: '2026-02-22',
    mainEntityOfPage: 'https://resume.tooleka.com/blog/how-to-format-work-experience-bullet-points',
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
                Writing Formulas
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiClock size={13} /> 8 min read
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiCalendar size={13} /> February 12, 2026
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight mb-4">
              How to Write Powerful Resume Work Experience Bullet Points Using STAR &amp; Google XYZ Methods
            </h1>

            <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-6">
              The Work Experience section is where hiring managers decide whether to call you for an interview. Listing boring daily job duties won&apos;t cut it. Learn how elite applicants use the Google XYZ formula and the STAR framework to turn standard responsibilities into high-impact accomplishments.
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] flex items-center gap-2 text-xs text-[#595959]">
              <HiUser size={14} className="text-black" />
              <span>Written by <strong>ToolEka Editorial Team</strong> &bull; Resume Writing Mastery</span>
            </div>
          </header>

          {/* Content Body */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-10 text-sm leading-relaxed text-[#333333] shadow-xs">
            {/* Section 1: The Google XYZ Formula */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                1. The Google XYZ Formula Explained
              </h2>
              <p>
                Former Google Senior Vice President of People Operations, Laszlo Bock, famously shared the formula Google recruiters look for in every single bullet point:
              </p>
              <div className="p-5 bg-black text-white text-center font-mono text-sm sm:text-base my-3">
                &ldquo;Accomplished <span className="text-amber-400">[X]</span>, as measured by <span className="text-emerald-400">[Y]</span>, by doing <span className="text-blue-400">[Z]</span>&rdquo;
              </div>
              <ul className="list-disc list-inside space-y-2 text-xs text-[#595959] pl-2">
                <li><strong className="text-black">[X] The Accomplishment:</strong> What specific outcome or objective did you achieve?</li>
                <li><strong className="text-black">[Y] The Measurable Metric:</strong> How was success quantified? (Percentages, dollars, hours saved, volume).</li>
                <li><strong className="text-black">[Z] The Action / Method:</strong> What tools, skills, technologies, or leadership methods did you apply?</li>
              </ul>
            </section>

            {/* Section 2: The STAR Framework */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                2. The STAR Method for Resume Writing
              </h2>
              <p>
                Complementary to the XYZ formula is the classic <strong>STAR</strong> framework (Situation, Task, Action, Result), condensed into a single punchy bullet point:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-[#FBFBFB] border border-[#E5E5E5]">
                  <strong className="text-black block mb-1">S &ndash; Situation / T &ndash; Task</strong>
                  <p className="text-[#595959]">The business problem, bottleneck, or challenge your team was facing.</p>
                </div>
                <div className="p-3.5 bg-[#FBFBFB] border border-[#E5E5E5]">
                  <strong className="text-black block mb-1">A &ndash; Action / R &ndash; Result</strong>
                  <p className="text-[#595959]">The strategic intervention you implemented and the positive, measurable business payoff.</p>
                </div>
              </div>
            </section>

            {/* Section 3: Industry Examples */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                3. High-Converting Examples Across Industries
              </h2>
              <div className="space-y-3 text-xs">
                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-1">
                  <div className="font-bold text-black uppercase tracking-wider text-[11px]">Software Engineering</div>
                  <p className="text-[#404040]">
                    &ldquo;Reduced microservice API response latency by <strong>42%</strong> (measured by Datadog APM) by refactoring database indexing pipelines and migrating caching layers to Redis.&rdquo;
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-1">
                  <div className="font-bold text-black uppercase tracking-wider text-[11px]">Digital Marketing</div>
                  <p className="text-[#404040]">
                    &ldquo;Generated <strong>$380,000</strong> in attributed pipeline revenue by designing and A/B testing a 5-part personalized email nurturing campaign across 45,000 prospective enterprise leads.&rdquo;
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-1">
                  <div className="font-bold text-black uppercase tracking-wider text-[11px]">Operations / Project Management</div>
                  <p className="text-[#404040]">
                    &ldquo;Cut quarterly inventory write-off losses by <strong>28% ($75K)</strong> by standardizing real-time warehouse scanning protocols and retraining a staff of 22 technicians.&rdquo;
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
                  <h3 className="text-lg font-bold">Try ToolEka&apos;s Intuitive Resume Editor</h3>
                  <p className="text-xs text-neutral-300">Format your experience bullet points with real-time live preview.</p>
                </div>
                <Link
                  href="/builder"
                  className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
                >
                  Create Your Resume →
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
