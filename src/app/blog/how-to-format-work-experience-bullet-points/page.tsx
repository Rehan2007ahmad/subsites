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
  HiSparkles,
  HiCheckBadge,
  HiDocumentText,
  HiQuestionMarkCircle,
  HiCalculator,
  HiAcademicCap,
  HiCheckCircle,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Write Resume Bullet Points with Google XYZ | ToolEka',
  description:
    'Master the Google XYZ and STAR frameworks to write high-converting resume bullet points with quantified business metrics and real-world examples.',
  alternates: { canonical: 'https://resume.tooleka.com/blog/how-to-format-work-experience-bullet-points' },
  openGraph: {
    title: 'Write Resume Bullet Points with Google XYZ | ToolEka',
    description:
      'Master the Google XYZ and STAR frameworks to write high-converting resume bullet points with quantified business metrics and real-world examples.',
    url: 'https://resume.tooleka.com/blog/how-to-format-work-experience-bullet-points',
    type: 'article',
    images: [
      {
        url: 'https://resume.tooleka.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Google XYZ Resume Bullet Formula Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Write Resume Bullet Points with Google XYZ | ToolEka',
    description:
      'Master the Google XYZ and STAR frameworks to write high-converting resume bullet points with quantified business metrics and real-world examples.',
    images: ['https://resume.tooleka.com/og-image.png'],
  },
};

const faqs = [
  {
    q: 'How many bullet points should I write per job on my resume?',
    a: 'For your most recent, senior, or relevant position, write 4 to 6 punchy bullet points. For previous positions held 3 to 7 years ago, 2 to 4 bullet points are ideal. For older roles held 8 to 12 years ago, 1 to 2 high-level accomplishment bullets are sufficient.',
  },
  {
    q: 'What if I work in a role without direct revenue, profit, or sales metrics?',
    a: 'You do not need dollar figures to quantify accomplishments! You can quantify time saved ("reduced reporting turnaround by 3.5 hours weekly"), volume handled ("processed 250+ invoices weekly with 99.8% audit accuracy"), error rate reduction ("decreased system downtime by 24%"), scale managed ("coordinated logistics for 45 retail stores"), or team size ("mentored 6 junior associates").',
  },
  {
    q: 'Should resume bullet points end with periods?',
    a: 'Yes, if your bullet points are complete grammatical clauses or sentences, standard business style guides (such as Chicago and AP) recommend ending each bullet with a period. The golden rule is consistency—either end all bullet points with periods or none.',
  },
  {
    q: 'What is the Google XYZ formula for resume writing?',
    a: 'Formulated by former Google SVP of People Operations Laszlo Bock, the formula states: "Accomplished [X], as measured by [Y], by doing [Z]". It forces you to state the accomplishment, provide the exact measurement metric, and explain the methodology applied.',
  },
  {
    q: 'How does the STAR method differ from the Google XYZ formula?',
    a: 'The STAR method (Situation, Task, Action, Result) is an interview answering framework that can be compressed into a single resume bullet point. The Google XYZ formula is specifically engineered as a tight mathematical syntax for written resume bullet points.',
  },
  {
    q: 'Can a bullet point be 3 lines long on a resume?',
    a: 'Bullet points should ideally be 1 to 2 lines long (between 15 and 25 words). Bullet points spanning 3 or more lines turn into dense paragraphs, creating visual fatigue for recruiters scanning quickly.',
  },
  {
    q: 'Should I write in first-person ("I did") or third-person implied?',
    a: 'Always write in the implied first-person (e.g. "Engineered distributed Redis cache...", NOT "I engineered distributed Redis cache..."). Never use personal pronouns ("I", "me", "my", "we") on a professional resume.',
  },
  {
    q: 'How do I handle confidential or proprietary company numbers?',
    a: 'If exact revenue numbers are protected under non-disclosure agreements (NDAs), express metrics as relative percentages, multiples, or generalized ranges (e.g. "Grew annual pipeline by 140%" or "Managed a multi-million-dollar regional capital budget").',
  },
  {
    q: 'Is it okay to list day-to-day job duties if I ran out of accomplishments?',
    a: 'Never simply list routine duties. If your job was routine (e.g. data entry or customer intake), highlight your reliability, speed, SLA compliance, and zero-defect accuracy.',
  },
  {
    q: 'What order should I put my bullet points in under a job title?',
    a: 'Order bullet points by impact and relevance to your target job, putting your most impressive, quantified accomplishment as the very first bullet point under the role.',
  },
];

export default function BulletPointsGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Write Powerful Resume Work Experience Bullet Points Using STAR & Google XYZ Methods',
    description:
      'Master the Google XYZ and STAR formulas to write high-converting resume bullet points with quantified results and measurable business impact.',
    author: {
      '@type': 'Organization',
      name: 'ToolEka Editorial Team',
      url: 'https://tooleka.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ToolEka',
      url: 'https://tooleka.com',
      logo: 'https://resume.tooleka.com/og-image.png',
    },
    datePublished: '2026-08-22T08:00:00+00:00',
    dateModified: '2026-08-22T10:00:00+00:00',
    mainEntityOfPage: 'https://resume.tooleka.com/blog/how-to-format-work-experience-bullet-points',
    wordCount: 2150,
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://resume.tooleka.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog & Career Guides',
        item: 'https://resume.tooleka.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Google XYZ & STAR Bullet Points Formula',
        item: 'https://resume.tooleka.com/blog/how-to-format-work-experience-bullet-points',
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main className="min-h-screen bg-[#FBFBFB] py-10 md:py-16 text-[#262626]">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#595959]">
            <Link href="/" className="hover:text-black hover:underline">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-black hover:underline">Blog</Link>
            <span>/</span>
            <span className="text-black font-semibold truncate max-w-[200px] sm:max-w-none">
              Google XYZ &amp; STAR Formulas
            </span>
          </nav>

          {/* Article Header */}
          <header className="bg-white border border-[#E5E5E5] p-6 sm:p-10 mb-8 shadow-xs">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-black text-white">
                Writing Formulas &amp; Metrics
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiClock size={13} /> 12 min read (2,150 words)
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiCalendar size={13} /> Updated August 22, 2026
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight mb-4">
              How to Write Powerful Resume Work Experience Bullet Points Using STAR &amp; Google XYZ Methods
            </h1>

            <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-6">
              The Work Experience section is where hiring managers decide whether to call you in for an interview or pass on your profile. Simply listing routine daily job responsibilities will not win you interviews. Learn how elite applicants leverage the Google XYZ formula and the STAR framework to turn standard responsibilities into high-converting proof of business value.
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4 text-xs text-[#595959]">
              <div className="flex items-center gap-2">
                <HiUser size={14} className="text-black" />
                <span>Written by <strong>ToolEka Editorial Team</strong> &bull; Resume Writing Mastery Division</span>
              </div>
              <span className="bg-[#F7F7F7] px-2.5 py-1 border border-[#E5E5E5] text-black font-mono">
                Used by Google, Meta &amp; Amazon Applicants
              </span>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="bg-white border border-[#E5E5E5] p-6 mb-8 shadow-xs">
            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Table of Contents</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#404040]">
              <li><a href="#why-bullets-matter" className="hover:underline hover:text-black">1. Why Standard Job Descriptions Fail</a></li>
              <li><a href="#google-xyz-formula" className="hover:underline hover:text-black">2. The Google XYZ Formula Deconstructed</a></li>
              <li><a href="#star-framework" className="hover:underline hover:text-black">3. The STAR Method for Resume Bullet Points</a></li>
              <li><a href="#car-framework" className="hover:underline hover:text-black">4. The CAR Method: Challenge, Action, Result</a></li>
              <li><a href="#quantifying-non-financials" className="hover:underline hover:text-black">5. How to Quantify Impact Without Dollar Numbers</a></li>
              <li><a href="#industry-templates" className="hover:underline hover:text-black">6. 20+ Real Bullet Point Templates (8 Industries)</a></li>
              <li><a href="#formatting-rules" className="hover:underline hover:text-black">7. Bullet Formatting, Count &amp; Visual Rhythm</a></li>
              <li><a href="#faqs" className="hover:underline hover:text-black">8. Frequently Asked Questions (FAQs)</a></li>
            </ul>
          </div>

          {/* Content Body */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-12 text-sm leading-relaxed text-[#333333] shadow-xs">

            {/* Section 1 */}
            <section id="why-bullets-matter" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiDocumentText className="text-black" /> 1. Why Standard Job Descriptions Fail to Win Interviews
              </h2>
              <p>
                When candidates write resume bullet points, 90% simply copy-paste sentences from their original job descriptions:
              </p>
              <div className="p-3 bg-red-50/70 border border-red-200 text-xs text-red-950 font-mono">
                &ldquo;Responsible for answering customer emails, updating spreadsheets, and attending daily team standups.&rdquo;
              </div>
              <p>
                This informs the hiring manager that you showed up to the office, but it provides zero evidence that you were actually competent. Recruiters need to know: <em>Did you make the company money? Did you save time? Did you optimize a broken workflow? Did you lead a team?</em>
              </p>
            </section>

            {/* Section 2: Google XYZ Formula */}
            <section id="google-xyz-formula" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiCalculator className="text-black" /> 2. The Google XYZ Formula Deconstructed
              </h2>
              <p>
                Former Google Senior Vice President of People Operations, Laszlo Bock, famously shared the standard formula required by Google recruiters:
              </p>

              <div className="p-6 bg-black text-white text-center font-mono text-sm sm:text-base my-4 leading-relaxed">
                &ldquo;Accomplished <span className="text-amber-400 font-bold">[X]</span>, as measured by <span className="text-emerald-400 font-bold">[Y]</span>, by doing <span className="text-blue-400 font-bold">[Z]</span>&rdquo;
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                <div className="p-4 bg-[#FBFBFB] border border-[#E5E5E5] space-y-1">
                  <strong className="text-amber-600 font-mono text-xs uppercase block">[X] The Accomplishment</strong>
                  <p className="text-xs text-[#595959]">The primary objective, milestone, or business goal achieved.</p>
                </div>
                <div className="p-4 bg-[#FBFBFB] border border-[#E5E5E5] space-y-1">
                  <strong className="text-emerald-600 font-mono text-xs uppercase block">[Y] The Measurable Metric</strong>
                  <p className="text-xs text-[#595959]">The quantifiable metric of success (percentages, dollars, hours, error reduction).</p>
                </div>
                <div className="p-4 bg-[#FBFBFB] border border-[#E5E5E5] space-y-1">
                  <strong className="text-blue-600 font-mono text-xs uppercase block">[Z] The Method / Action</strong>
                  <p className="text-xs text-[#595959]">The specific technical tools, frameworks, leadership tactics, or algorithms you applied.</p>
                </div>
              </div>
            </section>

            {/* Section 3: STAR Method */}
            <section id="star-framework" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                3. The STAR Method for Resume Bullet Points
              </h2>
              <p>
                The classic <strong>STAR</strong> interview technique (Situation, Task, Action, Result) can be compressed into a single high-velocity bullet point:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] space-y-2">
                  <strong className="text-black font-bold block">S/T: Situation &amp; Task (The Problem)</strong>
                  <p className="text-[#595959]">A high checkout abandonment rate causing revenue loss during peak shopping seasons.</p>
                </div>
                <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] space-y-2">
                  <strong className="text-black font-bold block">A/R: Action &amp; Result (The Payoff)</strong>
                  <p className="text-[#595959]">Redesigned Stripe 1-click payment integration, reducing checkout drop-off by 26% ($420K ARR).</p>
                </div>
              </div>
            </section>

            {/* Section 4: CAR Method */}
            <section id="car-framework" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                4. The CAR Method: Challenge, Action, Result
              </h2>
              <p>
                The <strong>CAR</strong> method is a rapid, three-part alternative ideal for technical problem-solving roles:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs text-[#595959]">
                <li><strong>Challenge:</strong> Identify the core bottleneck or inefficiency your team faced.</li>
                <li><strong>Action:</strong> Describe the engineering, design, or analytical solution you constructed.</li>
                <li><strong>Result:</strong> State the measurable operational improvement.</li>
              </ul>
            </section>

            {/* Section 5: Non-Financial Numbers */}
            <section id="quantifying-non-financials" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                5. How to Quantify Impact Without Dollar Numbers
              </h2>
              <p>
                Many candidates mistakenly believe you can only quantify bullet points if you work in sales or finance. Here is how to quantify any profession:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">1. Time &amp; Velocity</strong>
                  <p className="text-[#595959]">&ldquo;Decreased sprint build compilation time from 35 minutes to 4 minutes.&rdquo;</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">2. Volume &amp; Scale</strong>
                  <p className="text-[#595959]">&ldquo;Processed 350+ medical patient intake records weekly with zero compliance errors.&rdquo;</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">3. Error Rate &amp; Quality</strong>
                  <p className="text-[#595959]">&ldquo;Cut QA defect escape rate from 4.8% to 0.7% by creating automated Cypress test suites.&rdquo;</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">4. Team Size &amp; Mentorship</strong>
                  <p className="text-[#595959]">&ldquo;Mentored a cross-functional cohort of 8 junior engineers across 3 international time zones.&rdquo;</p>
                </div>
              </div>
            </section>

            {/* Section 6: 20+ Industry Examples */}
            <section id="industry-templates" className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                6. 20+ Real Bullet Point Templates (8 Industries)
              </h2>

              <div className="space-y-4 text-xs">
                {/* Tech */}
                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-2">
                  <strong className="text-black font-bold uppercase text-[11px] block">Software Engineering &amp; DevOps</strong>
                  <p className="text-[#404040]">
                    &bull; &ldquo;Architected cloud-native AWS ECS microservices using Go and Docker, decreasing API p99 latency by <strong>44%</strong> across 5M daily active users.&rdquo;
                  </p>
                  <p className="text-[#404040]">
                    &bull; &ldquo;Automated end-to-end CI/CD release pipelines via GitHub Actions, accelerating deployment frequency from bi-weekly to <strong>4x daily</strong>.&rdquo;
                  </p>
                </div>

                {/* Marketing */}
                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-2">
                  <strong className="text-black font-bold uppercase text-[11px] block">Digital Marketing &amp; Growth</strong>
                  <p className="text-[#404040]">
                    &bull; &ldquo;Generated <strong>$460,000</strong> in attributed pipeline ARR by designing and A/B testing a 5-step automated lifecycle email nurturing campaign.&rdquo;
                  </p>
                  <p className="text-[#404040]">
                    &bull; &ldquo;Scaled organic search traffic from 45K to <strong>210K monthly unique visitors</strong> by implementing programmatic SEO landing pages.&rdquo;
                  </p>
                </div>

                {/* Healthcare */}
                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-2">
                  <strong className="text-black font-bold uppercase text-[11px] block">Healthcare &amp; Nursing</strong>
                  <p className="text-[#404040]">
                    &bull; &ldquo;Delivered compassionate bedside critical care for up to <strong>14 ICU patients daily</strong> while maintaining a 100% medication safety record.&rdquo;
                  </p>
                  <p className="text-[#404040]">
                    &bull; &ldquo;Trained 22 newly onboarded staff nurses on electronic health records (EHR) compliance, reducing chart documentation errors by <strong>34%</strong>.&rdquo;
                  </p>
                </div>

                {/* Operations */}
                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-2">
                  <strong className="text-black font-bold uppercase text-[11px] block">Operations &amp; Supply Chain</strong>
                  <p className="text-[#404040]">
                    &bull; &ldquo;Reduced annual warehouse shrinkage write-offs by <strong>$85,000 (29%)</strong> by introducing real-time barcode inventory reconciliation.&rdquo;
                  </p>
                  <p className="text-[#404040]">
                    &bull; &ldquo;Negotiated vendor master service agreements across 12 logistics suppliers, saving <strong>$140,000</strong> in quarterly shipping costs.&rdquo;
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Formatting Rules */}
            <section id="formatting-rules" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                7. Bullet Formatting, Count &amp; Visual Rhythm
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-2 text-xs text-[#595959]">
                <li><strong>Word Count per Bullet:</strong> Aim for 15 to 25 words. Keep lines within 1 to 2 visual lines.</li>
                <li><strong>Bullet Count:</strong> 4 to 6 for your current role; 2 to 4 for previous positions.</li>
                <li><strong>Punctuation:</strong> End every bullet point consistently with a period.</li>
                <li><strong>Visual Hierarchy:</strong> Bold key numbers and metrics sparingly to guide the reader&apos;s eye.</li>
              </ul>
            </section>

            {/* Section 8: FAQs */}
            <section id="faqs" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiQuestionMarkCircle className="text-black" /> 8. Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-[#FBFBFB] border border-[#E5E5E5]">
                    <h3 className="font-bold text-black text-sm mb-1.5">{faq.q}</h3>
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
                  Create Your Free Resume →
                </Link>
              </div>
            </div>

            {/* Internal Linking: Related Career Guides */}
            <RelatedArticles currentSlug="how-to-format-work-experience-bullet-points" />
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
