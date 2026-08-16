import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { RESUME_EXAMPLES } from '@/lib/defaultData';
import { MdArrowForward, MdCheckCircle } from 'react-icons/md';

type Profession = keyof typeof RESUME_EXAMPLES;

const PROFESSION_META: Record<string, { title: string; headline: string; desc: string; tips: string[] }> = {
  'software-engineer': {
    title: 'Software Engineer Resume Example & Template | ToolEka',
    headline: 'Software Engineer Resume Example',
    desc: 'A real software engineer resume example with a strong summary, quantified achievements, project showcase, and clean tech-stack formatting.',
    tips: [
      'Lead every bullet point with a strong action verb (Led, Built, Reduced, Increased).',
      'Quantify your impact — mention users affected, performance improvements, or cost savings.',
      'List your tech stack clearly — recruiters scan for keywords.',
      'Include GitHub and portfolio links prominently.',
      'Projects section is as important as experience for engineers.',
    ],
  },
  'student': {
    title: 'Student Resume Example & Free Template | ToolEka',
    headline: 'Student Resume Example',
    desc: "A student resume example for internship and entry-level applications. Highlights education, projects, and achievements when work experience is limited.",
    tips: [
      'Put Education near the top — it\'s your strongest asset as a student.',
      'Include relevant coursework if it relates to the job.',
      'Hackathons, club leadership, and volunteer work all count as experience.',
      'Quantify academic achievements — GPA, class rank, awards.',
      'Personal projects demonstrate initiative and real-world skills.',
    ],
  },
  'accountant': {
    title: 'Accountant Resume Example & Free Template | ToolEka',
    headline: 'Accountant Resume Example',
    desc: 'A CPA and senior accountant resume example with finance-specific language, compliance expertise, and measurable client outcomes.',
    tips: [
      'List your CPA license and certifications prominently.',
      'Quantify financial impact — dollar amounts managed, cost savings identified.',
      'Mention software proficiency: SAP, QuickBooks, Excel (advanced), Sage.',
      'Use standard accounting terminology that ATS systems recognize.',
      'Compliance and audit experience are highly valued — highlight them.',
    ],
  },
  'teacher': {
    title: 'Teacher Resume Example & Free Template | ToolEka',
    headline: 'Teacher Resume Example',
    desc: 'An English teacher and educator resume example that highlights classroom impact, curriculum development, and student outcomes.',
    tips: [
      'Include your teaching certification and state license.',
      'Mention specific grade levels and subjects taught.',
      'Quantify student outcomes — test score improvements, pass rates.',
      'Extracurricular involvement (clubs, coaching) shows dedication.',
      'Mention any curriculum development or department leadership.',
    ],
  },
  'marketing-manager': {
    title: 'Marketing Manager Resume Example & Free Template | ToolEka',
    headline: 'Marketing Manager Resume Example',
    desc: 'A results-driven marketing manager resume with growth metrics, campaign ROI, and digital marketing tool expertise.',
    tips: [
      'Lead with numbers — traffic growth, conversion rates, pipeline generated.',
      'List marketing tools: HubSpot, Salesforce, Google Analytics, Figma.',
      'Distinguish between B2B and B2C experience if relevant.',
      'Brand strategy and go-to-market experience are premium skills.',
      'Include notable campaigns or product launches by name.',
    ],
  },
};

interface Props {
  params: Promise<{ profession: string }>;
}

export async function generateStaticParams() {
  return Object.keys(RESUME_EXAMPLES).map((k) => ({ profession: k }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { profession } = await params;
  const meta = PROFESSION_META[profession];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.desc,
    alternates: { canonical: `https://resume.tooleka.com/resume-examples/${profession}` },
    openGraph: { title: meta.title, description: meta.desc },
  };
}

export default async function ProfessionExamplePage({ params }: Props) {
  const { profession } = await params;
  const meta = PROFESSION_META[profession];
  const exampleFn = RESUME_EXAMPLES[profession as Profession];
  if (!meta || !exampleFn) notFound();

  const example = exampleFn();

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-12 px-4">
          <div className="mx-auto max-w-4xl">
            <nav className="text-xs text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/resume-examples" className="hover:text-blue-600">Examples</Link>
              <span className="mx-2">/</span>
              <span>{meta.headline}</span>
            </nav>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">{meta.headline}</h1>
            <p className="text-slate-600 max-w-2xl mb-6 leading-relaxed">{meta.desc}</p>
            <Link
              href={`/builder?example=${profession}`}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Use This Example <MdArrowForward size={16} />
            </Link>
          </div>
        </section>

        {/* Example content */}
        <section className="py-12 px-4">
          <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Resume snapshot */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal */}
              <div className="rounded-xl border border-slate-200 p-5">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Contact</h2>
                <p className="text-lg font-bold text-slate-900">{example.personal.fullName}</p>
                <p className="text-sm text-blue-600 font-medium">{example.personal.jobTitle}</p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                  {example.personal.email && <span>{example.personal.email}</span>}
                  {example.personal.location && <span>{example.personal.location}</span>}
                  {example.personal.github && <span>{example.personal.github}</span>}
                  {example.personal.linkedin && <span>{example.personal.linkedin}</span>}
                </div>
              </div>

              {/* Summary */}
              {example.summary && (
                <div className="rounded-xl border border-slate-200 p-5">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Summary</h2>
                  <p className="text-sm text-slate-700 leading-relaxed">{example.summary}</p>
                </div>
              )}

              {/* Experience */}
              {example.experience.length > 0 && (
                <div className="rounded-xl border border-slate-200 p-5">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Experience</h2>
                  <div className="space-y-4">
                    {example.experience.map((exp) => (
                      <div key={exp.id}>
                        <p className="text-sm font-semibold text-slate-900">{exp.jobTitle}</p>
                        <p className="text-xs text-slate-500">{exp.company} · {exp.location}</p>
                        {exp.description && (
                          <ul className="mt-1.5 space-y-1">
                            {exp.description.split('\n').filter(Boolean).map((b, i) => (
                              <li key={i} className="text-xs text-slate-600 flex gap-2">
                                <span className="text-blue-400 shrink-0">•</span>{b}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {example.skills.length > 0 && (
                <div className="rounded-xl border border-slate-200 p-5">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Skills</h2>
                  <div className="flex flex-wrap gap-1.5">
                    {example.skills.map((sk) => (
                      <span key={sk.id} className="rounded-full bg-slate-100 text-slate-700 px-2.5 py-0.5 text-xs">{sk.name}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tips sidebar */}
            <div className="space-y-5">
              <div className="rounded-xl bg-blue-50 border border-blue-100 p-5">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Tips for this resume type</h3>
                <ul className="space-y-2.5">
                  {meta.tips.map((tip, i) => (
                    <li key={i} className="flex gap-2 text-xs text-slate-700">
                      <MdCheckCircle size={14} className="text-blue-500 shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 p-5 text-center">
                <p className="text-sm font-semibold text-slate-900 mb-2">Create a resume like this</p>
                <p className="text-xs text-slate-500 mb-4">Free, no account required.</p>
                <Link
                  href={`/builder?example=${profession}`}
                  className="block rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Use This Example
                </Link>
              </div>

              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs font-semibold text-slate-700 mb-2">Related guides</p>
                <div className="space-y-1">
                  <Link href="/guides/how-to-write-a-resume" className="block text-xs text-blue-600 hover:underline">How to write a resume →</Link>
                  <Link href="/guides/ats-resume-guide" className="block text-xs text-blue-600 hover:underline">ATS resume guide →</Link>
                  <Link href="/guides/resume-summary-examples" className="block text-xs text-blue-600 hover:underline">Resume summary examples →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
