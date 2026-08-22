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
  HiDocumentText,
  HiShieldCheck,
  HiQuestionMarkCircle,
  HiMapPin,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Resume vs. CV: Key Differences & Global Standards | ToolEka',
  description:
    'Understand the crucial differences between a Resume and a CV. Discover international hiring standards across the US, UK, EU, and academic roles.',
  alternates: { canonical: 'https://resume.tooleka.com/blog/resume-vs-cv-difference' },
  openGraph: {
    title: 'Resume vs. CV: Key Differences & Global Standards | ToolEka',
    description:
      'Understand the crucial differences between a Resume and a CV. Discover international hiring standards across the US, UK, EU, and academic roles.',
    url: 'https://resume.tooleka.com/blog/resume-vs-cv-difference',
    type: 'article',
    images: [
      {
        url: 'https://resume.tooleka.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resume vs CV Comparison Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume vs. CV: Key Differences & Global Standards | ToolEka',
    description:
      'Understand the crucial differences between a Resume and a CV. Discover international hiring standards across the US, UK, EU, and academic roles.',
    images: ['https://resume.tooleka.com/og-image.png'],
  },
};

const faqs = [
  {
    q: 'Can a resume be more than one page in length?',
    a: 'For candidates with fewer than 5–7 years of professional experience, a single-page resume is strongly recommended. For seasoned senior professionals, engineering managers, directors, or executive leaders with 10+ years of deep, relevant career milestones, a 2-page resume is completely standard and accepted across the corporate world.',
  },
  {
    q: 'Do UK and European employers mean a Resume when they ask for a CV?',
    a: 'Yes. In the United Kingdom, Ireland, New Zealand, and most European countries, the term "CV" is used interchangeably with what Americans call a "Resume"—meaning a concise 1-to-2 page summary of work history rather than a multi-page academic dossier.',
  },
  {
    q: 'Should I include a professional headshot photo on my CV or resume?',
    a: 'In the United States, Canada, the UK, and Australia, do NOT include a photo to prevent unconscious bias and anti-discrimination violations under Equal Employment Opportunity (EEO) laws. In continental Europe (Germany, France, Switzerland) and parts of the Middle East and Asia, professional headshots remain common practice unless specified otherwise.',
  },
  {
    q: 'What is an Academic CV and how is it structured?',
    a: 'An Academic CV is an exhaustive, unconstrained scholarly document detailing a scholar\'s complete academic credentials, published peer-reviewed research papers, teaching appointments, conference presentations, grants, and awards. It has no page limit and can easily range from 3 to 10+ pages in length.',
  },
  {
    q: 'Should I include personal details like marital status, age, or nationality?',
    a: 'In North America and the UK, never include marital status, date of birth, religion, or nationality, as employment laws strictly prohibit hiring decisions based on these protected characteristics. In certain international regions (e.g. GCC / Middle East or specific Asian countries), nationality and visa status are still occasionally requested.',
  },
  {
    q: 'Can I use the same document for applying to jobs worldwide?',
    a: 'No. Submitting an American-style 1-page resume without a photo to a German firm seeking a traditional Lebenslauf with credentials, or sending a 5-page academic CV to a Silicon Valley startup, will significantly harm your application chances. Always localize your document to the employer\'s cultural expectations.',
  },
  {
    q: 'How far back should work history go on a resume vs. a CV?',
    a: 'On a corporate resume, focus strictly on the past 10 to 15 years of relevant career history. On an academic or medical CV, you should include your entire professional and educational timeline dating back to your earliest undergraduate achievements.',
  },
  {
    q: 'Is a Curriculum Vitae always longer than a Resume?',
    a: 'In the American academic sense, yes (3 to 10+ pages). In the British and Commonwealth sense, no—a British CV is strictly 1 to 2 pages long and functions exactly like an American resume.',
  },
  {
    q: 'What file format is best when sending a CV or Resume internationally?',
    a: 'A text-selectable vector PDF is the global gold standard. It preserves exact typography, margins, and section layouts across Windows, Mac, iOS, Android, and all enterprise ATS systems.',
  },
  {
    q: 'Should I include hobbies and personal interests on my CV?',
    a: 'In the US and Canada, omit hobbies unless they directly demonstrate relevant technical skills or leadership (e.g. organizing a major tech meetup). In the UK and Europe, a brief 2-line "Interests & Activities" section at the bottom of a CV is often welcomed as cultural personality.',
  },
];

export default function ResumeVsCvGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Resume vs. CV: Key Differences, When to Use Which, and Global Standards',
    description:
      'Unravel the differences between a Resume and a Curriculum Vitae (CV). Learn which document employers expect across the US, UK, Europe, and academic institutions.',
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
    mainEntityOfPage: 'https://resume.tooleka.com/blog/resume-vs-cv-difference',
    wordCount: 2050,
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
        name: 'Resume vs. CV Differences',
        item: 'https://resume.tooleka.com/blog/resume-vs-cv-difference',
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
              Resume vs. CV Guide
            </span>
          </nav>

          {/* Article Header */}
          <header className="bg-white border border-[#E5E5E5] p-6 sm:p-10 mb-8 shadow-xs">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-black text-white">
                Career Basics &amp; Global Standards
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiClock size={13} /> 11 min read (2,050 words)
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiCalendar size={13} /> Updated August 22, 2026
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight mb-4">
              Resume vs. CV: Key Differences, When to Use Which, and Global Standards
            </h1>

            <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-6">
              Applying for a job in the United States, United Kingdom, European Union, or an academic research institution? Using the wrong document format can instantly confuse recruiters and torpedo your application. Here is your definitive global guide to understanding the exact differences between a Resume and a Curriculum Vitae (CV).
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4 text-xs text-[#595959]">
              <div className="flex items-center gap-2">
                <HiUser size={14} className="text-black" />
                <span>Written by <strong>ToolEka Editorial Team</strong> &bull; International Career Standards Council</span>
              </div>
              <span className="bg-[#F7F7F7] px-2.5 py-1 border border-[#E5E5E5] text-black font-mono">
                Covers US, UK, EU, AU &amp; Academic Norms
              </span>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="bg-white border border-[#E5E5E5] p-6 mb-8 shadow-xs">
            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Table of Contents</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#404040]">
              <li><a href="#core-definitions" className="hover:underline hover:text-black">1. What is a Resume vs. What is a CV?</a></li>
              <li><a href="#comparison-matrix" className="hover:underline hover:text-black">2. Side-by-Side Feature Comparison Table</a></li>
              <li><a href="#global-standards" className="hover:underline hover:text-black">3. Global Standards: Country-by-Country Breakdown</a></li>
              <li><a href="#academic-cv" className="hover:underline hover:text-black">4. Anatomy of an Academic &amp; Scientific CV</a></li>
              <li><a href="#photos-and-eeo" className="hover:underline hover:text-black">5. The Headshot Photo &amp; Anti-Discrimination Dilemma</a></li>
              <li><a href="#decision-framework" className="hover:underline hover:text-black">6. Decision Framework: Which Document Should You Send?</a></li>
              <li><a href="#common-mistakes" className="hover:underline hover:text-black">7. Top 8 International Application Mistakes</a></li>
              <li><a href="#faqs" className="hover:underline hover:text-black">8. Frequently Asked Questions (FAQs)</a></li>
            </ul>
          </div>

          {/* Body Content */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-12 text-sm leading-relaxed text-[#333333] shadow-xs">

            {/* Section 1 */}
            <section id="core-definitions" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiDocumentText className="text-black" /> 1. What is a Resume vs. What is a CV?
              </h2>
              <p>
                The fundamental difference between a <strong>Resume</strong> and a <strong>Curriculum Vitae (CV)</strong> centers around three primary dimensions: <em>length</em>, <em>purpose</em>, and <em>geographical culture</em>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-5 bg-[#FBFBFB] border border-[#E5E5E5] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-black rounded-full" />
                    <strong className="text-black text-base">What is a Resume?</strong>
                  </div>
                  <p className="text-xs text-[#595959] leading-relaxed">
                    Derived from the French word <em>résumé</em> (meaning &ldquo;summary&rdquo;), a resume is a concise, highly targeted marketing document (strictly 1 to 2 pages). It highlights only the work history, hard technical skills, and quantifiable achievements directly relevant to one specific job opening.
                  </p>
                  <ul className="text-xs text-[#404040] space-y-1 pt-1 list-disc list-inside">
                    <li>Length: 1 to 2 pages maximum</li>
                    <li>Focus: Immediate job fit &amp; return on investment</li>
                    <li>Adaptability: Rewritten &amp; tailored for every application</li>
                  </ul>
                </div>

                <div className="p-5 bg-[#FBFBFB] border border-[#E5E5E5] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-black rounded-full" />
                    <strong className="text-black text-base">What is a Curriculum Vitae (CV)?</strong>
                  </div>
                  <p className="text-xs text-[#595959] leading-relaxed">
                    Latin for &ldquo;course of life&rdquo;, an authentic CV is a cumulative, comprehensive, living record of an individual&apos;s full academic, research, and professional journey. It grows over time and details every degree, publication, teaching appointment, presentation, grant, and credential.
                  </p>
                  <ul className="text-xs text-[#404040] space-y-1 pt-1 list-disc list-inside">
                    <li>Length: 3 to 10+ pages (No ceiling)</li>
                    <li>Focus: Scholarly credentials, research &amp; tenure</li>
                    <li>Adaptability: Static master document updated periodically</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: Comparison Table */}
            <section id="comparison-matrix" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                2. Side-by-Side Feature Comparison Table
              </h2>
              <div className="overflow-x-auto border border-[#E5E5E5]">
                <table className="w-full text-xs text-left">
                  <thead className="bg-black text-white uppercase text-[11px] font-mono">
                    <tr>
                      <th className="p-3">Feature Dimension</th>
                      <th className="p-3">Resume</th>
                      <th className="p-3">Academic / Scientific CV</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5E5]">
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-black">Target Page Length</td>
                      <td className="p-3 text-emerald-800 font-medium">1 to 2 pages strictly</td>
                      <td className="p-3">3 to 10+ pages (Comprehensive)</td>
                    </tr>
                    <tr className="bg-[#FAFAFA]">
                      <td className="p-3 font-bold text-black">Primary Sectors</td>
                      <td className="p-3">Private corporate, tech startups, finance, retail</td>
                      <td className="p-3">Academia, scientific research, medicine, fellowships</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-black">Customization Degree</td>
                      <td className="p-3">Heavily customized for every target job</td>
                      <td className="p-3">Complete static archive with standardized structure</td>
                    </tr>
                    <tr className="bg-[#FAFAFA]">
                      <td className="p-3 font-bold text-black">Core Narrative</td>
                      <td className="p-3">Measurable business outcomes &amp; revenue ROI</td>
                      <td className="p-3">Intellectual contributions, grants, pedagogy &amp; tenure</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-black">Time Horizon</td>
                      <td className="p-3">Past 10–15 years of relevant roles</td>
                      <td className="p-3">Entire career history from undergraduate onwards</td>
                    </tr>
                    <tr className="bg-[#FAFAFA]">
                      <td className="p-3 font-bold text-black">Publications &amp; Grants</td>
                      <td className="p-3">Only if directly relevant (max 1–2 lines)</td>
                      <td className="p-3 font-semibold text-black">Exhaustive complete bibliographic list</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Global Standards */}
            <section id="global-standards" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiGlobeAmericas className="text-black" /> 3. Global Standards: Country-by-Country Breakdown
              </h2>
              <p>
                The confusing terminology arises because different countries use the words &ldquo;Resume&rdquo; and &ldquo;CV&rdquo; to mean completely different things. Here is how international hiring managers interpret these terms:
              </p>

              <div className="space-y-4">
                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <div className="flex items-center gap-2 font-bold text-black text-sm mb-1.5">
                    <HiMapPin size={16} /> United States &amp; Canada
                  </div>
                  <p className="text-xs text-[#595959] leading-relaxed">
                    There is a strict, unambiguous distinction. Over 99% of job openings in the private sector (corporate, tech, finance, legal) demand a <strong>1-page (or 2-page for senior staff) Resume</strong>. The term &ldquo;CV&rdquo; is used <em>only</em> in higher education (university tenure tracks, post-doctoral research) or clinical medicine.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <div className="flex items-center gap-2 font-bold text-black text-sm mb-1.5">
                    <HiMapPin size={16} /> United Kingdom, Ireland, Australia &amp; New Zealand
                  </div>
                  <p className="text-xs text-[#595959] leading-relaxed">
                    The word &ldquo;Resume&rdquo; is rarely used in conversation or job portals. Employers ask for a <strong>&ldquo;CV&rdquo;</strong>, but they do <em>not</em> mean a 10-page academic document! They expect a concise, 2-page document formatted identically to an American resume.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <div className="flex items-center gap-2 font-bold text-black text-sm mb-1.5">
                    <HiMapPin size={16} /> Continental Europe (Germany, France, Nordics)
                  </div>
                  <p className="text-xs text-[#595959] leading-relaxed">
                    In Germany and Austria, the standard document is called a <strong>Lebenslauf</strong> (usually 2 pages). It is typically accompanied by educational transcripts and employer reference letters (Zeugnisse). Standard Europass formats are widely accepted across the European Union.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <div className="flex items-center gap-2 font-bold text-black text-sm mb-1.5">
                    <HiMapPin size={16} /> Middle East &amp; Gulf Cooperation Council (GCC)
                  </div>
                  <p className="text-xs text-[#595959] leading-relaxed">
                    Recruiters in the UAE, Saudi Arabia, and Qatar use the term &ldquo;CV&rdquo; for a 2-page document. Many corporate applications request nationality, current visa status, and language proficiencies (English, Arabic).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="academic-cv" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiAcademicCap className="text-black" /> 4. Anatomy of an Academic &amp; Scientific CV
              </h2>
              <p>
                If you are applying for a faculty appointment, doctoral fellowship, or NIH research grant, your CV must follow a standardized academic taxonomy:
              </p>

              <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-5 space-y-2.5 text-xs text-[#404040]">
                <div><strong className="text-black uppercase">1. Education &amp; Postdoctoral Training:</strong> Institution, Degree, Thesis Title, Dissertation Advisor.</div>
                <div><strong className="text-black uppercase">2. Academic Appointments:</strong> Professorships, Lecturer positions, Research Fellowships.</div>
                <div><strong className="text-black uppercase">3. Peer-Reviewed Publications:</strong> Divided into Books, Journal Articles, and Book Chapters (formatted in APA/MLA/Chicago style).</div>
                <div><strong className="text-black uppercase">4. Grants &amp; Sponsored Research:</strong> Granting agency, Project title, Total funding amount ($), Principal Investigator status.</div>
                <div><strong className="text-black uppercase">5. Teaching &amp; Mentorship:</strong> Undergraduate/Graduate courses taught, PhD committees served.</div>
                <div><strong className="text-black uppercase">6. Conference Presentations:</strong> Keynote addresses, invited talks, poster sessions.</div>
                <div><strong className="text-black uppercase">7. Honors, Awards &amp; Professional Service:</strong> Editorial boards, journal refereeing, departmental committees.</div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="photos-and-eeo" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                5. The Headshot Photo &amp; Anti-Discrimination Dilemma
              </h2>
              <p>
                One of the most dangerous mistakes international applicants make is attaching a photograph to their resume when applying for US or UK roles.
              </p>
              <div className="p-4 bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
                <strong className="font-bold text-amber-900 block">Why US &amp; UK Employers Disqualify Photos:</strong>
                <p>
                  Under the US Civil Rights Act (Equal Employment Opportunity Commission) and the UK Equality Act 2010, employers must protect against hiring discrimination based on race, age, gender, appearance, or disability. Many corporate HR teams have strict policies to instantly discard resumes featuring headshot photos to eliminate any risk of unconscious bias lawsuits.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="decision-framework" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                6. Decision Framework: Which Document Should You Send?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-[#E5E5E5] space-y-2">
                  <strong className="text-black text-sm block font-bold">Send a 1&ndash;2 Page Resume If:</strong>
                  <ul className="space-y-1 text-[#595959] list-disc list-inside">
                    <li>Applying for private corporate roles in the US or Canada</li>
                    <li>Applying for software engineering, tech, or startup jobs</li>
                    <li>Applying for marketing, sales, accounting, or finance roles</li>
                    <li>Applying through standard ATS online job portals</li>
                  </ul>
                </div>

                <div className="p-4 bg-white border border-[#E5E5E5] space-y-2">
                  <strong className="text-black text-sm block font-bold">Send a Full Multi-Page CV If:</strong>
                  <ul className="space-y-1 text-[#595959] list-disc list-inside">
                    <li>Applying for a university professorship, lecturer, or dean role</li>
                    <li>Applying for post-doctoral scientific fellowships or research grants</li>
                    <li>Applying for clinical physician residency or medical chair positions</li>
                    <li>Applying for scientific research institutions (e.g. CERN, NIH)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="common-mistakes" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                7. Top 8 International Application Mistakes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">1. Sending a 5-Page CV to a US Startup</strong>
                  <p className="text-[#595959]">Startups need concise, punchy summaries. 5 pages signals poor prioritization.</p>
                </div>
                <div className="p-3 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">2. Including Photos for US/UK Roles</strong>
                  <p className="text-[#595959]">Risks immediate disqualification by compliance teams.</p>
                </div>
                <div className="p-3 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">3. Listing Marital Status or Religion</strong>
                  <p className="text-[#595959]">Personal demographic details are inappropriate in Western corporate applications.</p>
                </div>
                <div className="p-3 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <strong className="text-black block mb-1">4. Forgetting Paper Size Differences</strong>
                  <p className="text-[#595959]">North America uses US Letter (8.5 x 11 in); the rest of the world uses ISO A4 (210 x 297 mm).</p>
                </div>
              </div>
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
                  <h3 className="text-lg font-bold">Create Your Tailored Resume Today</h3>
                  <p className="text-xs text-neutral-300">ATS-compliant formatting designed for both US and international standards.</p>
                </div>
                <Link
                  href="/builder"
                  className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
                >
                  Create Free Resume Now →
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
