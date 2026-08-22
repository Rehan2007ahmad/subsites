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
  HiCheckCircle,
  HiXCircle,
  HiSparkles,
  HiArrowLeft,
  HiDocumentCheck,
  HiShieldCheck,
  HiInformationCircle,
  HiCpuChip,
  HiQuestionMarkCircle,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'How to Write an ATS-Friendly Resume in 2026 | ToolEka',
  description:
    'Master Applicant Tracking Systems (ATS). Learn how modern parsers scan resumes, optimize keywords, and format sections for 100% parse rates.',
  alternates: { canonical: 'https://resume.tooleka.com/blog/how-to-write-ats-friendly-resume' },
  openGraph: {
    title: 'How to Write an ATS-Friendly Resume in 2026 | ToolEka',
    description:
      'Master Applicant Tracking Systems (ATS). Learn how modern parsers scan resumes, optimize keywords, and format sections for 100% parse rates.',
    url: 'https://resume.tooleka.com/blog/how-to-write-ats-friendly-resume',
    type: 'article',
    images: [
      {
        url: 'https://resume.tooleka.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ATS Resume Optimization Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Write an ATS-Friendly Resume in 2026 | ToolEka',
    description:
      'Master Applicant Tracking Systems (ATS). Learn how modern parsers scan resumes, optimize keywords, and format sections for 100% parse rates.',
    images: ['https://resume.tooleka.com/og-image.png'],
  },
};

const faqs = [
  {
    q: 'What is an ATS and why do over 98% of Fortune 500 companies use it?',
    a: 'An Applicant Tracking System (ATS) is an enterprise software application designed to automate the intake, parsing, indexing, ranking, and management of job applications. Large corporations receive an average of 250 to 500+ resumes per job posting. ATS software helps human resources teams filter out unqualified candidates, search for critical technical skills, and manage candidate workflows without manually reviewing hundreds of multi-page documents.',
  },
  {
    q: 'Can modern ATS systems read PDF files accurately?',
    a: 'Yes, modern ATS platforms (such as Workday, Greenhouse, Lever, Taleo, and iCIMS) seamlessly parse standard text-selectable vector PDF files. However, problems arise when candidates submit scanned image PDFs (which require OCR) or PDFs exported from graphic design tools that layer text elements out of natural reading order. When saving as a PDF, ensure the text can be highlighted, selected, and copied with your cursor.',
  },
  {
    q: 'Is it true that white font keyword stuffing helps you beat the ATS?',
    a: 'No. This is a dangerous urban myth that will get your application permanently blacklisted. ATS parsers extract plain text strings into raw database records, stripping out all styling and font colors. The white text becomes immediately visible to the recruiter in plain black text within the ATS candidate summary dashboard, instantly exposing the attempt to manipulate the system.',
  },
  {
    q: 'Are multi-column resume layouts bad for ATS parsing?',
    a: 'Yes. Most ATS parsing engines read documents horizontally from left to right across the full width of the page before proceeding to the next vertical line. In a two-column or multi-column layout, the parser frequently reads across both columns simultaneously, interleaving dates from column one into job descriptions from column two. A clean single-column or strictly linear hierarchy is always the safest option.',
  },
  {
    q: 'How many keywords from the job posting should I include in my resume?',
    a: 'Aim for a natural keyword match of approximately 60% to 80% of the core hard skills, tools, programming languages, and industry methodologies mentioned in the target job description. Never force irrelevant keywords; weave them contextually into your work experience bullet points and skills summary.',
  },
  {
    q: 'Should I tailor my resume for every single job application?',
    a: 'Yes. Because each company configures its ATS with specific search parameters, qualification filters, and weighting factors, sending a generic resume dramatically reduces your match score. Take 5 minutes per application to align your terminology, tool names, and job title phrasing with the specific job description.',
  },
  {
    q: 'Do ATS filters automatically reject candidates without human review?',
    a: 'While an ATS does not typically "reject" an applicant completely on its own (unless the candidate fails strict knockout disqualification questions like work authorization or required licensure), it calculates a candidate match score or search relevance rank. If your score is low because the parser could not extract your skills, your application ends up on page 10 of recruiter search results where human eyes rarely reach.',
  },
  {
    q: 'What font styles and sizes are most reliable for ATS software?',
    a: 'Standard, universally installed system and modern web fonts are ideal. Inter, Arial, Calibri, Helvetica, Roboto, Georgia, and Times New Roman are 100% safe. Keep body text between 10pt and 11.5pt, and section headings between 12pt and 14pt. Avoid decorative or non-standard custom downloaded fonts that may fail character mapping.',
  },
  {
    q: 'Should I include graphs, skill level bars, or rating stars on my resume?',
    a: 'Never include graphical rating bars (such as "Python: 4/5 stars" or "Leadership: 80%"). ATS parsers cannot interpret graphical rating widgets; they read them either as blank spaces or corrupted character sequences. Furthermore, self-assigned skill percentages look arbitrary and unconvincing to hiring managers.',
  },
  {
    q: 'Can an ATS read headers and footers in Microsoft Word documents?',
    a: 'Many legacy ATS parsing engines completely ignore text placed in the official Header and Footer zones of Microsoft Word documents. If you place your name, phone number, and email inside the Word header, the parser may fail to associate contact information with your profile. Always place contact details within the main body canvas.',
  },
];

export default function AtsFriendlyResumeGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Write an ATS-Friendly Resume in 2026: The Complete Step-by-Step Guide',
    description:
      'Master the rules of Applicant Tracking Systems. Format your resume properly, optimize with high-converting keywords, and land more interview callbacks.',
    author: {
      '@type': 'Person',
      name: 'Rehan Ahmad',
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
    mainEntityOfPage: 'https://resume.tooleka.com/blog/how-to-write-ats-friendly-resume',
    wordCount: 2250,
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
        name: 'How to Write an ATS-Friendly Resume',
        item: 'https://resume.tooleka.com/blog/how-to-write-ats-friendly-resume',
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
              ATS-Friendly Resume Guide
            </span>
          </nav>

          {/* Article Header Card */}
          <header className="bg-white border border-[#E5E5E5] p-6 sm:p-10 mb-8 shadow-xs">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-black text-white">
                ATS Strategy
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiClock size={13} /> 12 min read (2,250 words)
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiCalendar size={13} /> Updated August 22, 2026
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight mb-4">
              How to Write an ATS-Friendly Resume in 2026: The Complete Step-by-Step Guide
            </h1>

            <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-6">
              Over 75% of job applications are eliminated by automated filters before a human hiring manager ever reads a single word. In this complete, in-depth guide, you will learn exactly how Applicant Tracking Systems operate under the hood, how parsing algorithms analyze your credentials, and how to structure your resume to ensure a 100% parse rate and maximum interview callbacks.
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4 text-xs text-[#595959]">
              <div className="flex items-center gap-2">
                <HiUser size={14} className="text-black" />
                <span>Written by <strong>Rehan Ahmad</strong> &bull; Senior Technical Architect &amp; Career Strategist</span>
              </div>
              <span className="bg-[#F7F7F7] px-2.5 py-1 border border-[#E5E5E5] text-black font-mono">
                Verified for Workday, Greenhouse &amp; Lever
              </span>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="bg-white border border-[#E5E5E5] p-6 mb-8 shadow-xs">
            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Table of Contents</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#404040]">
              <li><a href="#what-is-ats" className="hover:underline hover:text-black">1. What is an ATS and How Does it Parse Resumes?</a></li>
              <li><a href="#parsing-mechanisms" className="hover:underline hover:text-black">2. Under the Hood: Tokenization &amp; Entity Extraction</a></li>
              <li><a href="#formatting-rules" className="hover:underline hover:text-black">3. The 7 Golden ATS Formatting Rules</a></li>
              <li><a href="#keyword-strategy" className="hover:underline hover:text-black">4. Strategic Keyword Mapping &amp; Frequency</a></li>
              <li><a href="#section-blueprint" className="hover:underline hover:text-black">5. Section-by-Section ATS Blueprint</a></li>
              <li><a href="#pass-fail-table" className="hover:underline hover:text-black">6. What Passes vs. What Fails: Direct Comparison</a></li>
              <li><a href="#top-mistakes" className="hover:underline hover:text-black">7. Top 10 Costly ATS Mistakes to Avoid</a></li>
              <li><a href="#pre-flight-checklist" className="hover:underline hover:text-black">8. 15-Point ATS Pre-Submission Checklist</a></li>
              <li><a href="#faqs" className="hover:underline hover:text-black">9. Frequently Asked Questions (FAQs)</a></li>
            </ul>
          </div>

          {/* Article Body Content */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-12 text-sm leading-relaxed text-[#333333] shadow-xs">

            {/* Section 1 */}
            <section id="what-is-ats" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiCpuChip className="text-black" /> 1. What is an ATS and How Does it Parse Resumes?
              </h2>
              <p>
                An <strong>Applicant Tracking System (ATS)</strong> is a specialized enterprise database software that streamlines recruitment for corporate human resources departments, talent acquisition teams, and staffing agencies. Leading systems like <strong>Workday, Greenhouse, Lever, Taleo, iCIMS, BambooHR, and SmartRecruiters</strong> process millions of job applications globally every month.
              </p>
              <p>
                When you click &ldquo;Submit Application&rdquo; on an employer&apos;s careers portal or job board, your document does not appear as a visual document on a manager&apos;s desktop. Instead, it enters an automated ingestion pipeline. The system strips away the visual presentation layer and performs <em>parsing</em>—converting your layout into structured relational database fields:
              </p>
              <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-4 text-xs font-mono space-y-1 text-black">
                <div>Candidate Profile: John_Doe_2026</div>
                <div>&bull; Contact_Record: &#123; name: &quot;John Doe&quot;, email: &quot;john@email.com&quot;, location: &quot;New York, NY&quot; &#125;</div>
                <div>&bull; Work_History: [ &#123; title: &quot;Software Engineer&quot;, company: &quot;Acme Corp&quot;, duration: &quot;2022 - Present&quot; &#125; ]</div>
                <div>&bull; Skills_Array: [&quot;TypeScript&quot;, &quot;Next.js&quot;, &quot;AWS ECS&quot;, &quot;PostgreSQL&quot;, &quot;CI/CD Pipelines&quot;]</div>
                <div>&bull; Match_Score: 94.2% / Rank: #3 of 340 Candidates</div>
              </div>
              <p>
                If your resume layout is poorly structured, uses non-standard fonts, or conceals text inside graphical text boxes, the parser produces broken data tokens (e.g. empty employment records or jumbled job dates). When the recruiter searches their database for &ldquo;React Developer with 5+ years experience,&rdquo; your profile fails to match the query and remains buried.
              </p>
            </section>

            {/* Section 2 */}
            <section id="parsing-mechanisms" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                2. Under the Hood: Tokenization, Semantic Parsing &amp; Entity Extraction
              </h2>
              <p>
                Understanding how ATS algorithms process raw text allows you to engineer your resume for maximum parsing accuracy. Modern ATS software utilizes Natural Language Processing (NLP) pipelines that execute four sequential stages:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-2">
                  <strong className="text-black text-xs uppercase tracking-wider block">Stage 1: Text Extraction &amp; OCR</strong>
                  <p className="text-xs text-[#595959]">
                    The parser reads the underlying byte stream of your PDF or DOCX file. In clean vector PDFs, text characters are extracted with exact coordinates. If your document was saved as a flat image, the system falls back to Optical Character Recognition (OCR), which frequently introduces spelling errors and breaks character recognition.
                  </p>
                </div>
                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-2">
                  <strong className="text-black text-xs uppercase tracking-wider block">Stage 2: Section Boundary Detection</strong>
                  <p className="text-xs text-[#595959]">
                    The algorithm scans for standard heading anchors (such as &ldquo;Experience&rdquo;, &ldquo;Education&rdquo;, &ldquo;Skills&rdquo;). If you use creative phrases like &ldquo;Where I&apos;ve Been&rdquo; or &ldquo;My Toolbox&rdquo;, the parser fails to delineate section boundaries and clumps all text into an unclassified block.
                  </p>
                </div>
                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-2">
                  <strong className="text-black text-xs uppercase tracking-wider block">Stage 3: Named Entity Recognition (NER)</strong>
                  <p className="text-xs text-[#595959]">
                    NER models identify and classify entities: job titles (e.g. &ldquo;Staff Systems Architect&rdquo;), organization names (&ldquo;Google&rdquo;), calendar date ranges (&ldquo;Jan 2021 &ndash; Present&rdquo;), and educational degrees (&ldquo;Bachelor of Science in Computer Science&rdquo;).
                  </p>
                </div>
                <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] space-y-2">
                  <strong className="text-black text-xs uppercase tracking-wider block">Stage 4: Semantic Keyword Scoring</strong>
                  <p className="text-xs text-[#595959]">
                    The parser computes a contextual relevance score against the job description. High-performing resumes contain exact-match terminology, relevant synonyms, and action verbs demonstrating tangible mastery.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="formatting-rules" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                3. The 7 Golden ATS Formatting Rules
              </h2>
              <p>
                Follow these seven fundamental formatting rules to ensure zero parsing errors across every major ATS vendor:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white border-l-4 border-black border border-[#E5E5E5] space-y-1.5">
                  <strong className="text-black text-sm block font-bold">Rule 1: Use a Single-Column Linear Hierarchy</strong>
                  <p className="text-xs text-[#595959]">
                    Multi-column sidebars and complex grid layouts force parsers to read across columns horizontally. This causes your sidebar skills to merge directly into the middle of your work history sentences. A linear top-to-bottom flow guarantees sequential, chronological extraction.
                  </p>
                </div>

                <div className="p-4 bg-white border-l-4 border-black border border-[#E5E5E5] space-y-1.5">
                  <strong className="text-black text-sm block font-bold">Rule 2: Stick to Universally Recognized Standard Section Headings</strong>
                  <p className="text-xs text-[#595959]">
                    Always use industry-standard naming: <strong>&ldquo;Professional Summary&rdquo;</strong> (or &ldquo;Summary&rdquo;), <strong>&ldquo;Work Experience&rdquo;</strong> (or &ldquo;Professional Experience&rdquo;), <strong>&ldquo;Skills&rdquo;</strong> (or &ldquo;Technical Skills&rdquo;), <strong>&ldquo;Education&rdquo;</strong>, and <strong>&ldquo;Certifications&rdquo;</strong>.
                  </p>
                </div>

                <div className="p-4 bg-white border-l-4 border-black border border-[#E5E5E5] space-y-1.5">
                  <strong className="text-black text-sm block font-bold">Rule 3: Export as a Text-Selectable Vector PDF or Clean DOCX</strong>
                  <p className="text-xs text-[#595959]">
                    Always verify your exported PDF by opening it in a browser, selecting text with your mouse, and pasting it into a plain text editor like Notepad. If the text pastes cleanly without gibberish symbols, the ATS will read it effortlessly.
                  </p>
                </div>

                <div className="p-4 bg-white border-l-4 border-black border border-[#E5E5E5] space-y-1.5">
                  <strong className="text-black text-sm block font-bold">Rule 4: Avoid Tables, Text Boxes, Frames, and Graphics</strong>
                  <p className="text-xs text-[#595959]">
                    Text boxes floating above the document grid in Microsoft Word or design apps are frequently skipped completely by parsers. Format content using standard tab stops, margin padding, and line breaks instead of embedded tables.
                  </p>
                </div>

                <div className="p-4 bg-white border-l-4 border-black border border-[#E5E5E5] space-y-1.5">
                  <strong className="text-black text-sm block font-bold">Rule 5: Keep Contact Information in the Document Body</strong>
                  <p className="text-xs text-[#595959]">
                    Do not place your name, email, phone number, or LinkedIn link in Microsoft Word&apos;s designated Header or Footer zones. Many older parsers deliberately ignore header and footer zones to prevent scraping page numbers and copyright notices.
                  </p>
                </div>

                <div className="p-4 bg-white border-l-4 border-black border border-[#E5E5E5] space-y-1.5">
                  <strong className="text-black text-sm block font-bold">Rule 6: Use Clean, Standard Bullet Characters</strong>
                  <p className="text-xs text-[#595959]">
                    Use standard round bullet points (&bull;), hyphens (-), or en-dashes. Avoid fancy custom icons (emojis, checkmark glyphs, arrows, stars) which frequently parse as broken ASCII characters (e.g., &ldquo;?&rdquo; or &ldquo;&#65533;&rdquo;).
                  </p>
                </div>

                <div className="p-4 bg-white border-l-4 border-black border border-[#E5E5E5] space-y-1.5">
                  <strong className="text-black text-sm block font-bold">Rule 7: Format Dates Consistently</strong>
                  <p className="text-xs text-[#595959]">
                    Use standard date formats throughout the document: <strong>Month Year &ndash; Month Year</strong> (e.g. &ldquo;March 2022 &ndash; Present&rdquo; or &ldquo;03/2022 &ndash; Present&rdquo;). Never omit employment years.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="keyword-strategy" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                4. Strategic Keyword Mapping &amp; Frequency Optimization
              </h2>
              <p>
                Keywords are the criteria recruiters use to query ATS candidate pools. To maximize your ranking, implement the <strong>Three-Tier Keyword Framework</strong>:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                <div className="p-4 bg-[#FBFBFB] border border-[#E5E5E5]">
                  <strong className="text-black text-xs uppercase tracking-wider block mb-1">Tier 1: Core Hard Skills</strong>
                  <p className="text-xs text-[#595959] leading-relaxed">
                    Specific technologies, programming languages, database architectures, frameworks, and compliance standards (e.g., <em>Kubernetes, PostgreSQL, SOC 2, PyTorch, Salesforce CRM</em>).
                  </p>
                </div>
                <div className="p-4 bg-[#FBFBFB] border border-[#E5E5E5]">
                  <strong className="text-black text-xs uppercase tracking-wider block mb-1">Tier 2: Methodologies &amp; Processes</strong>
                  <p className="text-xs text-[#595959] leading-relaxed">
                    Operational methodologies and workflows (e.g., <em>Agile Sprint Planning, CI/CD Pipeline Automation, A/B Testing, Financial Modeling, Lean Six Sigma</em>).
                  </p>
                </div>
                <div className="p-4 bg-[#FBFBFB] border border-[#E5E5E5]">
                  <strong className="text-black text-xs uppercase tracking-wider block mb-1">Tier 3: Certifications &amp; Degrees</strong>
                  <p className="text-xs text-[#595959] leading-relaxed">
                    Formal credentials and licensing (e.g., <em>AWS Certified Solutions Architect, PMP, CPA, Certified ScrumMaster (CSM), B.S. in Computer Science</em>).
                  </p>
                </div>
              </div>

              <h3 className="text-base font-bold text-black pt-2">How to Include Acronyms and Full Phrases:</h3>
              <p>
                Different recruiters configure searches differently. Some type &ldquo;SEO&rdquo; while others type &ldquo;Search Engine Optimization&rdquo;. Always include both variations at least once:
              </p>
              <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] text-xs font-mono text-black">
                &ldquo;Spearheaded Search Engine Optimization (SEO) campaigns resulting in a 145% increase in organic traffic.&rdquo;
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-blueprint" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                5. Section-by-Section ATS Blueprint
              </h2>
              <p>
                Here is the exact structural anatomy of a high-scoring ATS resume:
              </p>

              <div className="space-y-4">
                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">1. Contact Header</h3>
                  <p className="text-xs text-[#595959] mb-2">
                    Keep your header clean and free of graphical elements. Include:
                  </p>
                  <ul className="text-xs text-[#404040] list-disc list-inside space-y-1 pl-2 font-mono">
                    <li>Full Name (Large 18-22pt bold text)</li>
                    <li>Professional Title (e.g., &ldquo;Senior Frontend Engineer&rdquo;)</li>
                    <li>City, State or Country (Full street address is unnecessary)</li>
                    <li>Phone Number &bull; Professional Email Address</li>
                    <li>LinkedIn URL &bull; Portfolio / GitHub Link (with clean text anchor)</li>
                  </ul>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">2. Professional Summary (3&ndash;4 Lines)</h3>
                  <p className="text-xs text-[#595959]">
                    A concise elevator pitch that establishes your domain seniority, core specialization, and 1&ndash;2 major quantified accomplishments. Pack this paragraph with your top 4 target job keywords.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">3. Work Experience (Reverse-Chronological)</h3>
                  <p className="text-xs text-[#595959] mb-2">
                    Structure every role identically so the parser recognizes company names, job titles, and dates:
                  </p>
                  <div className="p-3 bg-[#F8F8F8] border border-[#E5E5E5] text-xs font-mono space-y-1 text-black">
                    <div className="font-bold">Staff Software Engineer | Acme Corporation | New York, NY</div>
                    <div className="text-[#595959]">January 2022 – Present</div>
                    <div>• Engineered a high-throughput event streaming pipeline using Kafka and Go, reducing data processing latency by 45%.</div>
                    <div>• Mentored a team of 7 engineers across 3 time zones, accelerating sprint velocity by 28%.</div>
                  </div>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">4. Categorized Skills Section</h3>
                  <p className="text-xs text-[#595959]">
                    Group skills logically into categories (e.g. Languages, Frameworks, Cloud &amp; DevOps, Methodologies). This allows the ATS parser to cleanly categorize your proficiencies without guessing.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] bg-[#FDFDFD]">
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">5. Education &amp; Certifications</h3>
                  <p className="text-xs text-[#595959]">
                    State your full degree title, university name, location, and graduation year. Include active industry certifications with granting bodies and dates.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="pass-fail-table" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                6. What Passes vs. What Fails: Direct Comparison Table
              </h2>
              <div className="overflow-x-auto border border-[#E5E5E5]">
                <table className="w-full text-xs text-left">
                  <thead className="bg-black text-white uppercase text-[11px] font-mono">
                    <tr>
                      <th className="p-3">Resume Element</th>
                      <th className="p-3">ATS-Approved Format (Passes 100%)</th>
                      <th className="p-3">Problematic Format (Fails / Corrupts)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5E5]">
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-black">Layout Structure</td>
                      <td className="p-3 text-emerald-800 font-medium">Single-column or linear vertical flow</td>
                      <td className="p-3 text-red-700">Multi-column sidebars, floating text boxes</td>
                    </tr>
                    <tr className="bg-[#FAFAFA]">
                      <td className="p-3 font-bold text-black">File Export</td>
                      <td className="p-3 text-emerald-800 font-medium">Text-selectable vector PDF or DOCX</td>
                      <td className="p-3 text-red-700">Scanned JPG/PNG image exported as flat PDF</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-black">Section Headings</td>
                      <td className="p-3 text-emerald-800 font-medium">&ldquo;Work Experience&rdquo;, &ldquo;Skills&rdquo;, &ldquo;Education&rdquo;</td>
                      <td className="p-3 text-red-700">&ldquo;My Story&rdquo;, &ldquo;What I Do&rdquo;, &ldquo;Toolkit&rdquo;</td>
                    </tr>
                    <tr className="bg-[#FAFAFA]">
                      <td className="p-3 font-bold text-black">Skill Representation</td>
                      <td className="p-3 text-emerald-800 font-medium">Clean text lists grouped by category</td>
                      <td className="p-3 text-red-700">Progress bars, star ratings, skill wheels</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold text-black">Contact Details</td>
                      <td className="p-3 text-emerald-800 font-medium">Inside main page body canvas</td>
                      <td className="p-3 text-red-700">Inside Word Header / Footer zones</td>
                    </tr>
                    <tr className="bg-[#FAFAFA]">
                      <td className="p-3 font-bold text-black">Typography</td>
                      <td className="p-3 text-emerald-800 font-medium">Standard system fonts (Inter, Arial, Calibri)</td>
                      <td className="p-3 text-red-700">Custom decorative or script font packages</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section id="top-mistakes" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                7. Top 10 Costly ATS Mistakes to Avoid
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD] space-y-1">
                  <strong className="text-black block font-bold">1. Submitting Graphic Canvas Files</strong>
                  <p className="text-[#595959]">Designing resumes in Canva or Photoshop often yields rasterized text that cannot be parsed.</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD] space-y-1">
                  <strong className="text-black block font-bold">2. Using White Text Tricks</strong>
                  <p className="text-[#595959]">Recruiters see plain unformatted text in their dashboards; hidden text triggers immediate blacklisting.</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD] space-y-1">
                  <strong className="text-black block font-bold">3. Keyword Stuffing Without Context</strong>
                  <p className="text-[#595959]">Listing 50 disconnected skills with no evidence of real-world use results in low hiring manager conversion.</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD] space-y-1">
                  <strong className="text-black block font-bold">4. Inconsistent Date Formatting</strong>
                  <p className="text-[#595959]">Mixing &ldquo;2021&ndash;Present&rdquo; with &ldquo;04/19&ndash;08/20&rdquo; confuses date calculation algorithms.</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD] space-y-1">
                  <strong className="text-black block font-bold">5. Omitting Essential Hard Tools</strong>
                  <p className="text-[#595959]">Assuming recruiters know you use Git or SQL because you are a developer. Explicitly list all tools!</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD] space-y-1">
                  <strong className="text-black block font-bold">6. Embedding Headshot Images</strong>
                  <p className="text-[#595959]">Photos can trigger compliance flags in the US/UK and enlarge PDF file size unnecessarily.</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD] space-y-1">
                  <strong className="text-black block font-bold">7. Overcomplicating Section Names</strong>
                  <p className="text-[#595959]">Creative labels like &ldquo;Career Footprint&rdquo; cause parsers to discard entire sections.</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD] space-y-1">
                  <strong className="text-black block font-bold">8. Unclickable Hyperlinks</strong>
                  <p className="text-[#595959]">Always format links as active clickable URLs with clean anchor text.</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD] space-y-1">
                  <strong className="text-black block font-bold">9. Leaving Out Full Degree Names</strong>
                  <p className="text-[#595959]">Always specify both degree level and major (e.g. &ldquo;Bachelor of Science in Finance&rdquo;).</p>
                </div>
                <div className="p-3.5 border border-[#E5E5E5] bg-[#FDFDFD] space-y-1">
                  <strong className="text-black block font-bold">10. Sending an Outdated Resume File</strong>
                  <p className="text-[#595959]">Name your file clearly: <code>FirstName_LastName_Resume_2026.pdf</code>.</p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="pre-flight-checklist" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                8. 15-Point ATS Pre-Submission Checklist
              </h2>
              <div className="bg-[#F8F8F8] border border-[#E5E5E5] p-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-black mb-2">
                  Verify these 15 points before clicking submit:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#404040]">
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> Text is highlightable and selectable</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> Clean single-column layout</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> Standard section headers used</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> Contact info in body canvas</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> Both acronyms and full terms included</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> 60-80% job posting keyword alignment</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> No tables, floating text boxes, or graphics</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> No skill rating bars or star widgets</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> Consistent Month Year date formats</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> Standard bullet points used (•)</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> High-impact action verbs start each bullet</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> Measurable metrics &amp; business impact included</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> Universally installed font family (Inter, Arial)</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> Single-page (or 2-page for 10+ yrs experience)</div>
                  <div className="flex items-center gap-2"><HiCheckCircle className="text-black shrink-0" size={16} /> File name formatted: First_Last_Resume.pdf</div>
                </div>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section id="faqs" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2 flex items-center gap-2">
                <HiQuestionMarkCircle className="text-black" /> 9. Frequently Asked Questions (FAQs)
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

            {/* Bottom CTA Banner */}
            <div className="pt-6">
              <div className="bg-black text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">Build Your 100% ATS-Compliant Resume</h3>
                  <p className="text-xs text-neutral-300">Choose from 5 verified ATS templates. 100% free with instant vector PDF export.</p>
                </div>
                <Link
                  href="/builder"
                  className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
                >
                  Open Free Resume Builder →
                </Link>
              </div>
            </div>

            {/* Internal Linking: Related Career Guides */}
            <RelatedArticles currentSlug="how-to-write-ats-friendly-resume" />
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
