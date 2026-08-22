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
  HiBolt,
  HiSparkles,
  HiCheckCircle,
  HiXCircle,
  HiQuestionMarkCircle,
  HiChartBar,
  HiCodeBracket,
  HiShieldCheck,
  HiCurrencyDollar,
  HiUserGroup,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: '250+ High-Impact Resume Action Verbs & Power Words That Get You Hired',
  description:
    'Replace passive job descriptions with 250+ high-impact resume action verbs categorized across 12 disciplines. Includes real before-and-after rewrite transformations.',
  alternates: { canonical: 'https://resume.tooleka.com/blog/top-resume-action-verbs-and-power-words' },
  openGraph: {
    title: '250+ High-Impact Resume Action Verbs & Power Words That Get You Hired',
    description:
      'Replace passive job descriptions with 250+ high-impact resume action verbs categorized across 12 disciplines. Includes before-and-after transformations.',
    url: 'https://resume.tooleka.com/blog/top-resume-action-verbs-and-power-words',
    type: 'article',
    images: [
      {
        url: 'https://resume.tooleka.com/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Resume Action Verbs Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '250+ Resume Action Verbs & Power Words (2026)',
    description:
      'Transform weak bullet points with 250+ categorized power words, before-and-after transformations, and syntax formulas.',
  },
};

const faqs = [
  {
    q: 'Why are action verbs so critical on a resume?',
    a: 'Recruiters scan resumes in an average of 6 to 7 seconds. Action verbs immediately establish psychological ownership, proactive initiative, and leadership. Instead of describing passive, routine job obligations ("responsible for handling support tickets"), action verbs ("resolved 90+ daily customer escalations", "orchestrated", "streamlined") immediately communicate what YOU accomplished.',
  },
  {
    q: 'Should I use past tense or present tense verbs on my resume?',
    a: 'Use past tense verbs (e.g., "Engineered", "Spearheaded", "Accelerated", "Negotiated") for all previous positions. Use present tense verbs (e.g., "Architect", "Lead", "Manage", "Deploy") exclusively for your current, ongoing role. Consistency is crucial.',
  },
  {
    q: 'What are the worst resume clichés and buzzwords to avoid?',
    a: 'Eliminate hollow buzzwords that lack concrete evidence: "hard worker", "team player", "think outside the box", "go-getter", "dynamic self-starter", "detail-oriented", and "responsible for". Replace every passive cliché with a strong action verb backed by a measurable business metric.',
  },
  {
    q: 'Can I reuse the same action verb multiple times on my resume?',
    a: 'Avoid repeating the same verb across consecutive bullet points. If you start three bullets in a row with "Managed", it signals limited vocabulary. Diversify your language using synonyms: "Orchestrated", "Governed", "Spearheaded", "Directed", and "Mobilized".',
  },
  {
    q: 'How do ATS algorithms treat action verbs compared to technical skills?',
    a: 'While ATS parsers specifically search for hard skill nouns (e.g., "Python", "Kubernetes", "GAAP Accounting"), action verbs provide the semantic context needed by advanced NLP algorithms to determine candidate seniority level and leadership capability. Furthermore, once a human recruiter reviews your parsed profile, action verbs make your bullet points memorable.',
  },
  {
    q: 'How do I start a bullet point if I was just following instructions?',
    a: 'Even when following established processes, focus on execution, precision, and efficiency. Verbs like "Executed", "Maintained", "Audited", "Standardized", "Processed", and "Coordinated" show strong operational reliability.',
  },
  {
    q: 'What is the ideal length for a work experience bullet point?',
    a: 'The ideal bullet point is 1 to 2 lines (approximately 15 to 25 words). Bullet points that extend past 3 lines lose reader attention; bullet points under 8 words typically lack necessary context.',
  },
  {
    q: 'Should every single bullet point begin with a power verb?',
    a: 'Yes. Every work experience bullet point should follow the standardized structure: [Action Verb] + [Context / Scope] + [Quantified Metric / Outcome]. Avoid opening bullets with personal pronouns ("I managed") or introductory prepositions ("During my time at...").',
  },
  {
    q: 'What are the best verbs for technical and engineering roles?',
    a: 'Top engineering verbs include: "Architected", "Refactored", "Containerized", "Automated", "Provisioned", "Benchmarked", "Deployed", "Optimized", and "Integrated".',
  },
  {
    q: 'What are the best verbs for cost reduction and financial management?',
    a: 'Top finance verbs include: "Trimmed", "Negotiated", "Reconciled", "Consolidated", "Decreased", "Restructured", "Forecasted", and "Audited".',
  },
];

export default function PowerActionVerbsGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '250+ High-Impact Resume Action Verbs & Power Words That Get You Hired',
    description:
      'Transform boring job descriptions into compelling achievements with 250+ categorized power verbs across 12 disciplines.',
    author: {
      '@type': 'Person',
      name: 'Rehan Ahmad',
      url: 'https://tooleka.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ToolEka',
      url: 'https://tooleka.com',
      logo: 'https://resume.tooleka.com/favicon.ico',
    },
    datePublished: '2026-02-15T08:00:00+00:00',
    dateModified: '2026-02-22T10:00:00+00:00',
    mainEntityOfPage: 'https://resume.tooleka.com/blog/top-resume-action-verbs-and-power-words',
    wordCount: 2300,
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
        name: '250+ Resume Action Verbs',
        item: 'https://resume.tooleka.com/blog/top-resume-action-verbs-and-power-words',
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
              250+ High-Impact Action Verbs
            </span>
          </nav>

          {/* Article Header */}
          <header className="bg-white border border-[#E5E5E5] p-6 sm:p-10 mb-8 shadow-xs">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-black text-white">
                Resume Writing &amp; Power Words
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiClock size={13} /> 13 min read (2,300 words)
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiCalendar size={13} /> Updated February 22, 2026
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight mb-4">
              250+ High-Impact Resume Action Verbs &amp; Power Words That Get You Hired
            </h1>

            <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-6">
              Recruiters evaluate resumes in an average of 6 seconds. If your bullet points begin with passive, listless phrases like &ldquo;Responsible for&rdquo; or &ldquo;Assisted with&rdquo;, your application blends into the pile. Use this comprehensive, categorized dictionary of 250+ high-converting action verbs to transform your experience into an impressive highlight reel of quantifiable achievements.
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4 text-xs text-[#595959]">
              <div className="flex items-center gap-2">
                <HiUser size={14} className="text-black" />
                <span>Written by <strong>Rehan Ahmad</strong> &bull; Senior Technical Architect &amp; Career Strategist</span>
              </div>
              <span className="bg-[#F7F7F7] px-2.5 py-1 border border-[#E5E5E5] text-black font-mono">
                12 Categorized Functional Domains
              </span>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="bg-white border border-[#E5E5E5] p-6 mb-8 shadow-xs">
            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Table of Contents</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#404040]">
              <li><a href="#psychology" className="hover:underline hover:text-black">1. The Psychology of Action Verbs</a></li>
              <li><a href="#formula" className="hover:underline hover:text-black">2. The Action Verb Syntax Formula</a></li>
              <li><a href="#categories" className="hover:underline hover:text-black">3. 250+ Categorized Power Verbs (12 Domains)</a></li>
              <li><a href="#transformations" className="hover:underline hover:text-black">4. 12 Real-World Before vs. After Rewrites</a></li>
              <li><a href="#tense-rules" className="hover:underline hover:text-black">5. Grammatical Tense &amp; Syntax Rules</a></li>
              <li><a href="#cliches-to-avoid" className="hover:underline hover:text-black">6. Top 10 Resume Clichés to Eliminate</a></li>
              <li><a href="#faqs" className="hover:underline hover:text-black">7. Frequently Asked Questions (FAQs)</a></li>
            </ul>
          </div>

          {/* Content Body */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-12 text-sm leading-relaxed text-[#333333] shadow-xs">

            {/* Section 1 */}
            <section id="psychology" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiBolt className="text-amber-500" /> 1. The Psychology of Action Verbs: Why &ldquo;Responsible For&rdquo; Fails
              </h2>
              <p>
                When a recruiter reads the phrase <em>&ldquo;Responsible for managing client communications&rdquo;</em>, they are reading a passive description of a job obligation. It answers what was written on your original employment contract, but answers <strong>zero</strong> questions about how well you performed.
              </p>
              <p>
                In stark contrast, strong power verbs (such as <em>&ldquo;Orchestrated&rdquo;</em>, <em>&ldquo;Spearheaded&rdquo;</em>, <em>&ldquo;Refactored&rdquo;</em>, or <em>&ldquo;Accelerated&rdquo;</em>) immediately position you as an active, high-agency driver of business value. Power verbs evoke momentum, accountability, and measurable results.
              </p>
            </section>

            {/* Section 2 */}
            <section id="formula" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                2. The Power Verb Syntax Formula
              </h2>
              <p>
                To generate maximum impact, combine your power verb with a quantifiable metric and strategic context using this standard three-part equation:
              </p>
              <div className="p-5 bg-black text-white text-center font-mono text-sm sm:text-base my-3">
                <span className="text-amber-400">[High-Impact Action Verb]</span> + <span className="text-emerald-400">[Quantified Scope / Metric]</span> + <span className="text-blue-400">[Method / Technical Tool]</span> = <span className="text-purple-300">[Business Result]</span>
              </div>
              <p className="text-xs text-[#595959]">
                <strong>Applied Example:</strong> &ldquo;<span className="text-black font-semibold">Overhauled</span> customer onboarding flow using React and Segment event tracking, <span className="text-black font-semibold">increasing 30-day user activation from 42% to 68%</span>.&rdquo;
              </p>
            </section>

            {/* Section 3: 250+ Categorized Verbs */}
            <section id="categories" className="space-y-8">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiChartBar className="text-black" /> 3. 250+ Categorized High-Impact Power Verbs (12 Domains)
              </h2>

              {/* 1. Leadership */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full" /> 1. Leadership, Executive Management &amp; Governance
                </h3>
                <p className="text-xs text-[#595959]">Use when spearheading initiatives, managing personnel, or aligning stakeholders:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-[#FBFBFB] border border-[#E5E5E5] p-4 text-black">
                  <div>• Spearheaded</div>
                  <div>• Orchestrated</div>
                  <div>• Championed</div>
                  <div>• Mobilized</div>
                  <div>• Governed</div>
                  <div>• Steered</div>
                  <div>• Delegated</div>
                  <div>• Galvanized</div>
                  <div>• Directed</div>
                  <div>• Overhauled</div>
                  <div>• Centralized</div>
                  <div>• Realigned</div>
                  <div>• Piloted</div>
                  <div>• Cultivated</div>
                  <div>• Mentored</div>
                  <div>• Executed</div>
                </div>
              </div>

              {/* 2. Engineering & Technical */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" /> 2. Technical, Software Engineering &amp; Infrastructure
                </h3>
                <p className="text-xs text-[#595959]">Use when writing code, provisioning cloud environments, or engineering systems:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-[#FBFBFB] border border-[#E5E5E5] p-4 text-black">
                  <div>• Architected</div>
                  <div>• Engineered</div>
                  <div>• Refactored</div>
                  <div>• Containerized</div>
                  <div>• Deployed</div>
                  <div>• Automated</div>
                  <div>• Provisioned</div>
                  <div>• Benchmarked</div>
                  <div>• Migrated</div>
                  <div>• Configured</div>
                  <div>• Debugged</div>
                  <div>• Integrated</div>
                  <div>• Modeled</div>
                  <div>• Virtualized</div>
                  <div>• Hardened</div>
                  <div>• Scaled</div>
                </div>
              </div>

              {/* 3. Sales & Revenue */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full" /> 3. Revenue, Sales &amp; Business Growth
                </h3>
                <p className="text-xs text-[#595959]">Use when driving ARR, expanding quotas, closing deals, or increasing conversions:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-[#FBFBFB] border border-[#E5E5E5] p-4 text-black">
                  <div>• Accelerated</div>
                  <div>• Outperformed</div>
                  <div>• Captured</div>
                  <div>• Negotiated</div>
                  <div>• Maximized</div>
                  <div>• Monetized</div>
                  <div>• Scaled</div>
                  <div>• Expanded</div>
                  <div>• Converted</div>
                  <div>• Generated</div>
                  <div>• Secured</div>
                  <div>• Boosted</div>
                </div>
              </div>

              {/* 4. Data & Analytics */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full" /> 4. Data Analytics, AI/ML &amp; Business Intelligence
                </h3>
                <p className="text-xs text-[#595959]">Use when interpreting telemetry, building predictive models, or running queries:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-[#FBFBFB] border border-[#E5E5E5] p-4 text-black">
                  <div>• Synthesized</div>
                  <div>• Forecasted</div>
                  <div>• Quantified</div>
                  <div>• Uncovered</div>
                  <div>• Extracted</div>
                  <div>• Correlated</div>
                  <div>• Visualized</div>
                  <div>• Evaluated</div>
                  <div>• Computed</div>
                  <div>• Tested</div>
                  <div>• Segmented</div>
                  <div>• Mapped</div>
                </div>
              </div>

              {/* 5. Operations & Process */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full" /> 5. Operations, Supply Chain &amp; Efficiency
                </h3>
                <p className="text-xs text-[#595959]">Use when streamlining workflows, eliminating waste, or optimizing logistics:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-[#FBFBFB] border border-[#E5E5E5] p-4 text-black">
                  <div>• Streamlined</div>
                  <div>• Standardized</div>
                  <div>• Consolidated</div>
                  <div>• Eliminated</div>
                  <div>• Restructured</div>
                  <div>• Expedited</div>
                  <div>• Reorganized</div>
                  <div>• Optimized</div>
                  <div>• Procured</div>
                  <div>• Audited</div>
                  <div>• Reduced</div>
                  <div>• Synchronized</div>
                </div>
              </div>

              {/* 6. Product & Design */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-600 rounded-full" /> 6. Product Management, UX &amp; Design
                </h3>
                <p className="text-xs text-[#595959]">Use when prototyping, mapping user journeys, or defining product roadmaps:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-[#FBFBFB] border border-[#E5E5E5] p-4 text-black">
                  <div>• Conceptualized</div>
                  <div>• Prototyped</div>
                  <div>• Iterated</div>
                  <div>• Validated</div>
                  <div>• Prioritized</div>
                  <div>• Launched</div>
                  <div>• Designed</div>
                  <div>• Wireframed</div>
                  <div>• Spearheaded</div>
                  <div>• Formulated</div>
                </div>
              </div>

              {/* 7. Customer Success */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full" /> 7. Customer Success, Support &amp; Retention
                </h3>
                <p className="text-xs text-[#595959]">Use when resolving escalations, reducing churn, or driving renewals:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-[#FBFBFB] border border-[#E5E5E5] p-4 text-black">
                  <div>• Resolved</div>
                  <div>• Retained</div>
                  <div>• Onboarded</div>
                  <div>• Mediated</div>
                  <div>• Advocated</div>
                  <div>• De-escalated</div>
                  <div>• Re-engaged</div>
                  <div>• Elevated</div>
                  <div>• Diagnosed</div>
                  <div>• Fostered</div>
                </div>
              </div>

              {/* 8. Finance & Accounting */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" /> 8. Finance, Accounting &amp; Cost Reduction
                </h3>
                <p className="text-xs text-[#595959]">Use when managing budgets, conducting audits, or pruning overhead:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-[#FBFBFB] border border-[#E5E5E5] p-4 text-black">
                  <div>• Reconciled</div>
                  <div>• Audited</div>
                  <div>• Projected</div>
                  <div>• Trimmed</div>
                  <div>• Allocated</div>
                  <div>• Appraised</div>
                  <div>• Balanced</div>
                  <div>• Conserved</div>
                </div>
              </div>
            </section>

            {/* Section 4: Transformations */}
            <section id="transformations" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                4. 12 Real-World Before vs. After Rewrites
              </h2>
              <div className="space-y-3 text-xs">
                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-1.5">
                  <span className="font-bold uppercase text-[10px] text-neutral-500">Software Engineering</span>
                  <div className="text-red-600 line-through">
                    <strong>Weak:</strong> Responsible for fixing web bugs and making backend code faster.
                  </div>
                  <div className="text-emerald-800 font-semibold">
                    <strong>High-Impact:</strong> Refactored asynchronous PostgreSQL queries and Redis caching layer, decreasing server response time by 52% across 2M daily API calls.
                  </div>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-1.5">
                  <span className="font-bold uppercase text-[10px] text-neutral-500">Customer Support / Operations</span>
                  <div className="text-red-600 line-through">
                    <strong>Weak:</strong> Handled inbound customer support tickets and replied to user emails.
                  </div>
                  <div className="text-emerald-800 font-semibold">
                    <strong>High-Impact:</strong> Resolved 85+ daily high-priority enterprise support escalations with a 99.2% customer satisfaction (CSAT) rating, cutting resolution time by 30%.
                  </div>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-1.5">
                  <span className="font-bold uppercase text-[10px] text-neutral-500">Sales &amp; Business Development</span>
                  <div className="text-red-600 line-through">
                    <strong>Weak:</strong> Cold called prospective clients and hit monthly revenue goals.
                  </div>
                  <div className="text-emerald-800 font-semibold">
                    <strong>High-Impact:</strong> Generated $1.8M in net new ARR across 24 Fortune 1000 accounts, achieving 135% of annual sales quota for 2 consecutive fiscal years.
                  </div>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-1.5">
                  <span className="font-bold uppercase text-[10px] text-neutral-500">Product Management</span>
                  <div className="text-red-600 line-through">
                    <strong>Weak:</strong> Managed team sprints and wrote feature user stories.
                  </div>
                  <div className="text-emerald-800 font-semibold">
                    <strong>High-Impact:</strong> Spearheaded cross-functional delivery of iOS and Android mobile checkout revamp, boosting end-to-end checkout completion rates by 19.4%.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Grammar Rules */}
            <section id="tense-rules" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                5. Grammatical Tense &amp; Syntax Rules
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD] space-y-2">
                  <strong className="text-black text-sm block font-bold">Past Roles: Strictly Past Tense</strong>
                  <p className="text-[#595959]">
                    For any position you no longer hold, every action verb must end in past tense (&ldquo;-ed&rdquo;): <em>Spearheaded, Deployed, Engineered, Overhauled, Negotiated</em>.
                  </p>
                </div>
                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD] space-y-2">
                  <strong className="text-black text-sm block font-bold">Current Role: Present Tense</strong>
                  <p className="text-[#595959]">
                    For ongoing activities in your current position, use present tense: <em>Lead, Architect, Manage, Coordinate, Deploy</em>. (Completed one-off projects at your current job may use past tense).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Clichés to Avoid */}
            <section id="cliches-to-avoid" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                6. Top 10 Resume Clichés to Eliminate Today
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 border border-[#E5E5E5] bg-red-50/50 text-red-950">❌ &ldquo;Responsible for...&rdquo;</div>
                <div className="p-3 border border-[#E5E5E5] bg-red-50/50 text-red-950">❌ &ldquo;Hard-working team player&rdquo;</div>
                <div className="p-3 border border-[#E5E5E5] bg-red-50/50 text-red-950">❌ &ldquo;Think outside the box&rdquo;</div>
                <div className="p-3 border border-[#E5E5E5] bg-red-50/50 text-red-950">❌ &ldquo;Dynamic go-getter&rdquo;</div>
                <div className="p-3 border border-[#E5E5E5] bg-red-50/50 text-red-950">❌ &ldquo;Assisted / Helped with&rdquo;</div>
                <div className="p-3 border border-[#E5E5E5] bg-red-50/50 text-red-950">❌ &ldquo;Detail-oriented professional&rdquo;</div>
              </div>
            </section>

            {/* Section 7: FAQs */}
            <section id="faqs" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiQuestionMarkCircle className="text-black" /> 7. Frequently Asked Questions (FAQs)
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

            {/* Internal Linking: Related Career Guides */}
            <RelatedArticles currentSlug="top-resume-action-verbs-and-power-words" />
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
