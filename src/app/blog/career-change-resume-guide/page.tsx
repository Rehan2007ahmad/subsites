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
  HiArrowPath,
  HiCheckBadge,
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'How to Write a Career Change Resume: Transitioning Industries with Confidence',
  description:
    'Learn how to write an effective career change resume. Master transferable skills mapping, hybrid resume formatting, and pivot summary statements to switch industries successfully.',
  alternates: { canonical: 'https://resume.tooleka.com/blog/career-change-resume-guide' },
  openGraph: {
    title: 'How to Write a Career Change Resume: Transitioning Industries with Confidence',
    description:
      'Learn how to write an effective career change resume. Master transferable skills mapping, hybrid resume formatting, and pivot summary statements to switch industries successfully.',
    url: 'https://resume.tooleka.com/blog/career-change-resume-guide',
    type: 'article',
  },
};

const faqs = [
  {
    q: 'What is the best resume format for a career changer?',
    a: 'A Hybrid (Combination) format is widely considered the best layout for a career transition. It places a prominent "Core Competencies & Transferable Skills" section directly beneath the Professional Summary, followed by a streamlined reverse-chronological work history.',
  },
  {
    q: 'How do I explain my reason for switching careers?',
    a: 'Address your career pivot positively in your 3-line Professional Summary at the top of your resume and expand further in your cover letter. Frame the change around your enthusiasm for applying established skills (e.g. data analysis, stakeholder communication, problem solving) to new challenges.',
  },
  {
    q: 'Should I omit completely unrelated past work experience?',
    a: 'Do not leave large unexplainable gaps on your resume. Instead, condense older unrelated positions into 1–2 high-level bullet points emphasizing universal transferable traits like budget management, leadership, customer retention, or workflow efficiency.',
  },
];

export default function CareerChangeGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Write a Career Change Resume: Transitioning Industries with Confidence',
    description:
      'Pivoting to a new field or industry? Learn how to structure a hybrid resume, reframe transferable skills, and convince hiring managers you are the ideal fit.',
    author: { '@type': 'Person', name: 'Rehan Ahmad' },
    publisher: { '@type': 'Organization', name: 'ToolEka', url: 'https://tooleka.com' },
    datePublished: '2026-02-10',
    dateModified: '2026-02-22',
    mainEntityOfPage: 'https://resume.tooleka.com/blog/career-change-resume-guide',
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
                Career Pivot
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiClock size={13} /> 9 min read
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <HiCalendar size={13} /> February 10, 2026
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight mb-4">
              How to Write a Career Change Resume: Transitioning Industries with Confidence
            </h1>

            <p className="text-sm sm:text-base text-[#595959] leading-relaxed mb-6">
              Switching into tech, marketing, product management, or a totally new sector? When you lack direct industry title experience, your resume needs to showcase transferable skills and tangible outcomes. Here is your blueprint for successfully repositioning your background.
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] flex items-center gap-2 text-xs text-[#595959]">
              <HiUser size={14} className="text-black" />
              <span>Written by <strong>Rehan Ahmad</strong> &bull; Career Strategy Specialist</span>
            </div>
          </header>

          {/* Body Content */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 space-y-10 text-sm leading-relaxed text-[#333333] shadow-xs">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                1. The Transferable Skills Matrix
              </h2>
              <p>
                The biggest mistake career changers make is assuming their past experience has zero value. In reality, most high-value professional skills are universal across industries:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3 text-xs">
                <div className="p-4 bg-[#FBFBFB] border border-[#E5E5E5] space-y-1.5">
                  <strong className="text-black text-sm block mb-1">Universal Transferable Skills</strong>
                  <div>&bull; <strong>Analytical Thinking:</strong> Data visualization, SQL, Excel modeling</div>
                  <div>&bull; <strong>Project Governance:</strong> Agile, Scrum, sprint planning, budgeting</div>
                  <div>&bull; <strong>Stakeholder Alignment:</strong> Executive presentations, client retention</div>
                  <div>&bull; <strong>Process Optimization:</strong> Workflow automation, error reduction</div>
                </div>

                <div className="p-4 bg-[#FBFBFB] border border-[#E5E5E5] space-y-1.5">
                  <strong className="text-black text-sm block mb-1">How to Bridge the Gap</strong>
                  <p className="text-[#595959] leading-relaxed">
                    Identify the top 3 requirements in your target job descriptions and translate your past duties into the vocabulary of your new industry.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Crafting the Career Pivot Summary */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                2. Crafting the Career Pivot Professional Summary
              </h2>
              <p>
                Your resume summary statement must proactively explain the transition and set the narrative before the recruiter examines your job titles:
              </p>
              <div className="p-4 bg-[#FAFAFA] border-l-4 border-black text-xs space-y-2">
                <strong className="text-black block font-mono text-[11px] uppercase">Example (Teacher Transitioning to Corporate Instructional Design):</strong>
                <p className="text-[#404040] italic">
                  &ldquo;Educator and curriculum specialist with 6+ years of experience designing interactive learning frameworks for 400+ students. Proficient in Articulate 360, multimedia content development, and adult learning theories. Transitioning educational expertise into corporate instructional design to build high-retention employee onboarding programs.&rdquo;
                </p>
              </div>
            </section>

            {/* Section 3: Highlighting Upskilling & Projects */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-[#E5E5E5] pb-2">
                3. Highlighting Bootcamps, Certifications &amp; Side Projects
              </h2>
              <p>
                When your formal employment history is in another field, elevate your self-directed learning and tangible project work to the top of your resume:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs text-[#595959] pl-2">
                <li><strong>Dedicated Projects Section:</strong> List real-world portfolio projects, GitHub repositories, or client freelance engagements that demonstrate hands-on competence in your target tools.</li>
                <li><strong>Relevant Certifications:</strong> Highlight industry-recognized credentials (e.g. AWS Certified Solutions Architect, Google Project Management, HubSpot Inbound) prominently under Education or Skills.</li>
              </ul>
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
                  <h3 className="text-lg font-bold">Build Your Career Pivot Resume Now</h3>
                  <p className="text-xs text-neutral-300">Clean, professional ATS templates designed to highlight your transferable strengths.</p>
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
