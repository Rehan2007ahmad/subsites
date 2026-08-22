import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import {
  HiClock,
  HiUser,
  HiCalendar,
  HiCheckCircle,
  HiXCircle,
  HiSparkles,
  HiArrowLeft,
  HiDocumentCheck,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'How to Write an ATS-Friendly Resume in 2026: The Complete Step-by-Step Guide',
  description:
    'Learn how to beat Applicant Tracking Systems (ATS) in 2026. Complete guide with formatting rules, keyword optimization techniques, common mistakes, and step-by-step checklists.',
  alternates: { canonical: 'https://resume.tooleka.com/blog/how-to-write-ats-friendly-resume' },
  openGraph: {
    title: 'How to Write an ATS-Friendly Resume in 2026: The Complete Step-by-Step Guide',
    description:
      'Learn how to beat Applicant Tracking Systems (ATS) in 2026. Complete guide with formatting rules, keyword optimization, and real examples.',
    url: 'https://resume.tooleka.com/blog/how-to-write-ats-friendly-resume',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'What is an ATS and why do employers use it?',
    a: 'An Applicant Tracking System (ATS) is automated enterprise software used by over 98% of Fortune 500 companies and 75% of medium-sized businesses to collect, parse, filter, and rank job applications. Employers use it to manage thousands of incoming resumes efficiently.',
  },
  {
    q: 'Can an ATS read PDF files?',
    a: 'Yes, modern ATS systems (such as Workday, Greenhouse, Lever, and Taleo) can easily parse standard text-selectable vector PDF files. However, scanned PDFs (which are images) or PDFs built with intricate graphic design tools with complex layering can corrupt the parsed text.',
  },
  {
    q: 'Should I put keywords in white text to trick the ATS?',
    a: 'Never use white text or keyword stuffing. Modern ATS software extracts pure text strings regardless of color, immediately exposing white text. Recruiters will instantly disqualify applications attempting to manipulate the parser.',
  },
  {
    q: 'Are multi-column resume layouts bad for ATS?',
    a: 'Multi-column tables and text boxes frequently cause ATS parsers to read across columns horizontally rather than down vertically, jumbling your employment dates, job titles, and company names. Single-column or cleanly structured two-column linear layouts without nested tables are safest.',
  },
  {
    q: 'How many keywords from the job description should I include?',
    a: 'Aim to naturally integrate 60% to 80% of the hard technical skills, tools, methodologies, and certifications mentioned in the job description across your Skills, Experience, and Summary sections.',
  },
];

export default function AtsFriendlyResumeGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Write an ATS-Friendly Resume in 2026: The Complete Step-by-Step Guide',
    description:
      'Master the rules of Applicant Tracking Systems. Format your resume properly, optimize with high-converting keywords, and land more interview callbacks.',
    author: { '@type': 'Person', name: 'Rehan Ahmad' },
    publisher: { '@type': 'Organization', name: 'ToolEka', url: 'https://tooleka.com' },
    datePublished: '2026-02-20',
    dateModified: '2026-02-22',
    mainEntityOfPage: 'https://resume.tooleka.com/blog/how-to-write-ats-friendly-resume',
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

          {/* Article Header Card */}
          <header className="bg-white border border-[#E5E5E5] p-6 sm:p-10 mb-8 shadow-xs">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-black text-white">
                ATS Strategy
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiClock size={13} /> 8 min read
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiCalendar size={13} /> February 20, 2026
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight mb-4">
              How to Write an ATS-Friendly Resume in 2026: The Complete Step-by-Step Guide
            </h1>

            <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-6">
              Over 75% of job applications are eliminated by automated filters before a human hiring manager ever reads a single word. In this complete guide, you will learn exactly how Applicant Tracking Systems operate, the formatting rules required to pass them, and how to optimize your keywords for maximum callback rates.
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] flex items-center gap-2 text-xs text-[#595959]">
              <HiUser size={14} className="text-black" />
              <span>Written by <strong>Rehan Ahmad</strong> &bull; ToolEka Career Insights</span>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="bg-white border border-[#E5E5E5] p-6 mb-8 shadow-xs">
            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Table of Contents</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#404040]">
              <li><a href="#what-is-ats" className="hover:underline hover:text-black">1. What is an ATS and How Does it Work?</a></li>
              <li><a href="#formatting-rules" className="hover:underline hover:text-black">2. Essential ATS Formatting Rules</a></li>
              <li><a href="#keyword-optimization" className="hover:underline hover:text-black">3. Strategic Keyword Optimization</a></li>
              <li><a href="#anatomy-of-ats-resume" className="hover:underline hover:text-black">4. Anatomy of a High-Scoring ATS Resume</a></li>
              <li><a href="#mistakes-to-avoid" className="hover:underline hover:text-black">5. Top 8 ATS Mistakes to Avoid</a></li>
              <li><a href="#faqs" className="hover:underline hover:text-black">6. Frequently Asked Questions (FAQs)</a></li>
            </ul>
          </div>

          {/* Article Body Content */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-10 text-sm leading-relaxed text-[#333333] shadow-xs">
            {/* Section 1 */}
            <section id="what-is-ats" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                1. What is an ATS and How Does It Work?
              </h2>
              <p>
                An <strong>Applicant Tracking System (ATS)</strong> is a software application designed to streamline the electronic handling of recruitment needs. When you submit your resume through job boards such as LinkedIn, Indeed, or directly on a company&apos;s career portal, your file does not land directly in front of a hiring manager.
              </p>
              <p>
                Instead, the ATS performs a process called <strong>parsing</strong>. The software strips out all graphical styling and attempts to break your document down into structured data categories:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li><strong>Contact Details:</strong> Full Name, Email, Phone Number, City/State, LinkedIn URL.</li>
                <li><strong>Work History:</strong> Company Names, Job Titles, Start/End Dates, Bullet Points.</li>
                <li><strong>Education:</strong> Degrees, Majors, Institutions, Graduation Years.</li>
                <li><strong>Skills &amp; Competencies:</strong> Hard skills, software proficiencies, industry certifications.</li>
              </ul>
              <p>
                Once parsed, the ATS scores and ranks your profile against the recruiter&apos;s query criteria. If your resume fails the parsing phase or lacks critical job keywords, your profile receives a low matching score, ensuring your application gets buried beneath hundreds of competing candidates.
              </p>
            </section>

            {/* Section 2 */}
            <section id="formatting-rules" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                2. Essential ATS Formatting Rules
              </h2>
              <p>
                To ensure your resume passes through parsing software without corruption, adhere strictly to the following architectural guidelines:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-emerald-50/70 border border-emerald-200">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-xs uppercase tracking-wider mb-2">
                    <HiCheckCircle size={16} /> What ATS Loves
                  </div>
                  <ul className="text-xs text-emerald-950 space-y-1.5">
                    <li>&bull; Clean single-column or linear hierarchical layouts</li>
                    <li>&bull; Standard web-safe typography (Inter, Arial, Calibri, Georgia)</li>
                    <li>&bull; Standard section titles (&ldquo;Work Experience&rdquo;, &ldquo;Education&rdquo;)</li>
                    <li>&bull; Vector PDF or DOCX file formats</li>
                    <li>&bull; Standard bullet point characters (•, -)</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50/70 border border-red-200">
                  <div className="flex items-center gap-1.5 font-bold text-red-900 text-xs uppercase tracking-wider mb-2">
                    <HiXCircle size={16} /> What Breaks the ATS
                  </div>
                  <ul className="text-xs text-red-950 space-y-1.5">
                    <li>&bull; Nested tables, text boxes, and floating frames</li>
                    <li>&bull; Headshot photos, charts, skill rating bars (e.g. 4/5 stars)</li>
                    <li>&bull; Information hidden inside Word header/footer zones</li>
                    <li>&bull; Complex graphic design exported as flat image raster PDFs</li>
                    <li>&bull; Creative section headers (&ldquo;Where I&apos;ve Been&rdquo;)</li>
                  </ul>
                </div>
              </div>

              <p>
                <strong>Why ToolEka Templates are ATS-Safe:</strong> All resume templates on ToolEka (Classic, Modern, Minimal, Developer, Executive) use semantic HTML structure that exports cleanly into single-page vector PDFs with crisp text selection, ensuring 100% parse readability.
              </p>
            </section>

            {/* Section 3 */}
            <section id="keyword-optimization" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                3. Strategic Keyword Optimization
              </h2>
              <p>
                Keywords are the lifeblood of ATS algorithms. Recruiters filter applications using specific search strings corresponding to the core technical and domain competencies required for the job.
              </p>
              <h3 className="text-base font-bold text-black pt-2">How to Extract Target Keywords:</h3>
              <ol className="list-decimal list-inside space-y-2 pl-2">
                <li><strong>Analyze 3–5 Target Job Postings:</strong> Copy and paste the descriptions of jobs you want into a document. Highlight recurring software names, methodologies (e.g., <em>Agile, Scrum, CI/CD, Financial Modeling</em>), and specific credentials.</li>
                <li><strong>Include Both Acronyms and Full Spelled-out Terms:</strong> Different ATS configurations search differently. Write both representations (e.g., <em>Search Engine Optimization (SEO)</em> or <em>Certified Public Accountant (CPA)</em>).</li>
                <li><strong>Place Keywords in Context:</strong> Don&apos;t just create a giant list of keywords. Incorporate them directly into your work experience bullet points to demonstrate practical application.</li>
              </ol>
            </section>

            {/* Section 4 */}
            <section id="anatomy-of-ats-resume" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                4. Anatomy of a High-Scoring ATS Resume
              </h2>
              <p>
                A high-scoring resume follows an intuitive, standardized chronological structure that the parser can categorize in milliseconds:
              </p>

              <div className="space-y-3 bg-[#FBFBFB] border border-[#E5E5E5] p-5">
                <div className="border-b border-[#E5E5E5] pb-2">
                  <strong className="text-black block text-xs uppercase tracking-wider">1. Header (Contact Info)</strong>
                  <p className="text-xs text-[#595959]">Full Name, Professional Title, Email Address, Phone Number, Location (City, State/Country), and LinkedIn URL.</p>
                </div>
                <div className="border-b border-[#E5E5E5] pb-2">
                  <strong className="text-black block text-xs uppercase tracking-wider">2. Professional Summary (3-4 Lines)</strong>
                  <p className="text-xs text-[#595959]">A punchy elevator pitch highlighting your years of experience, core industry domain, and 1-2 major career accomplishments.</p>
                </div>
                <div className="border-b border-[#E5E5E5] pb-2">
                  <strong className="text-black block text-xs uppercase tracking-wider">3. Work Experience (Reverse-Chronological)</strong>
                  <p className="text-xs text-[#595959]">Job Title, Company Name, Location, Dates of Employment (Month Year &ndash; Present). 3-5 bullet points focusing on quantified results.</p>
                </div>
                <div className="border-b border-[#E5E5E5] pb-2">
                  <strong className="text-black block text-xs uppercase tracking-wider">4. Skills Section</strong>
                  <p className="text-xs text-[#595959]">Categorized hard skills (Languages, Frameworks, Cloud Platforms, Analytical Tools).</p>
                </div>
                <div>
                  <strong className="text-black block text-xs uppercase tracking-wider">5. Education &amp; Certifications</strong>
                  <p className="text-xs text-[#595959]">Degree Name, University/College, Graduation Year, followed by active professional certifications.</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="mistakes-to-avoid" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                5. Top 8 ATS Mistakes to Avoid
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">1. Saving as an Image / Flat Scan</strong>
                  <p className="text-[#595959]">If you cannot highlight and copy the text with your cursor, the ATS cannot read it either.</p>
                </div>
                <div className="p-3 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">2. Putting Contact Info in Headers</strong>
                  <p className="text-[#595959]">Many older parsers skip Microsoft Word header and footer zones entirely.</p>
                </div>
                <div className="p-3 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">3. Non-Standard Section Titles</strong>
                  <p className="text-[#595959]">Stick to conventional headers like &ldquo;Experience&rdquo; and &ldquo;Skills&rdquo; rather than &ldquo;My Journey&rdquo;.</p>
                </div>
                <div className="p-3 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">4. Unnecessary Skill Bar Graphs</strong>
                  <p className="text-[#595959]">Progress bars (e.g. 80% Python) mean nothing to parsers and waste valuable page space.</p>
                </div>
              </div>
            </section>

            {/* Section 6: FAQs */}
            <section id="faqs" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                6. Frequently Asked Questions (FAQs)
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

            {/* Bottom CTA Banner */}
            <div className="pt-6">
              <div className="bg-black text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">Build Your ATS Resume in Minutes</h3>
                  <p className="text-xs text-neutral-300">Choose from 5 ATS-compliant templates. 100% free with instant PDF export.</p>
                </div>
                <Link
                  href="/builder"
                  className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
                >
                  Open Resume Builder →
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
