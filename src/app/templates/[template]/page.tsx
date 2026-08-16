import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { TEMPLATES } from '@/types/resume';
import { MdArrowForward, MdShield, MdCheckCircle } from 'react-icons/md';

interface Props {
  params: Promise<{ template: string }>;
}

export async function generateStaticParams() {
  return TEMPLATES.map((t) => ({ template: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { template: id } = await params;
  const t = TEMPLATES.find((t) => t.id === id);
  if (!t) return {};
  return {
    title: `${t.name} Resume Template – Free & Professional | ToolEka`,
    description: `${t.description} Best for ${t.bestFor.join(', ')}. Free to use — no account required.`,
    alternates: { canonical: `https://resume.tooleka.com/templates/${t.id}` },
  };
}

export default async function TemplatePage({ params }: Props) {
  const { template: id } = await params;
  const t = TEMPLATES.find((t) => t.id === id);
  if (!t) notFound();

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-14 px-4">
          <div className="mx-auto max-w-4xl">
            <nav className="text-xs text-slate-500 mb-5">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/templates" className="hover:text-blue-600">Templates</Link>
              <span className="mx-2">/</span>
              <span>{t.name}</span>
            </nav>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div
                className="w-full md:w-56 h-48 rounded-2xl shrink-0 flex items-center justify-center"
                style={{ backgroundColor: t.previewBg }}
              >
                <p className="text-white font-bold text-xl">{t.name}</p>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-slate-900">{t.name} Template</h1>
                  {t.atsScore === 'High' && (
                    <span className="flex items-center gap-1 text-xs font-bold text-green-700 bg-green-100 rounded-full px-2.5 py-1">
                      <MdShield size={12} /> ATS Friendly
                    </span>
                  )}
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{t.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {t.bestFor.map((b) => (
                    <span key={b} className="rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-sm">{b}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/builder?template=${t.id}`}
                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    Use This Template <MdArrowForward size={16} />
                  </Link>
                  <Link
                    href="/templates"
                    className="inline-flex h-11 items-center rounded-xl border border-slate-300 px-6 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    All Templates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">About the {t.name} template</h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>The <strong className="text-slate-800">{t.name}</strong> template is designed for professionals who want a polished, readable resume that clearly communicates their experience and qualifications.</p>
              <p>This template is best suited for: <strong className="text-slate-800">{t.bestFor.join(', ')}</strong>.</p>
              <p>ATS compatibility: <strong className="text-slate-800">{t.atsScore}</strong>. {t.atsScore === 'High' ? 'This template uses clean, structured formatting that applicant tracking systems can easily parse.' : 'This template includes some design elements — ensure your content is in standard text format for best ATS results.'}</p>
            </div>

            <div className="mt-8 bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Template features</h3>
              <ul className="space-y-2">
                {[
                  'Clean, professional layout',
                  'Standard section names for ATS',
                  'All resume sections supported',
                  'Customizable accent color',
                  'Free to use, no watermark',
                  'Export as PDF instantly',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <MdCheckCircle size={16} className="text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-center">
              <Link
                href={`/builder?template=${t.id}`}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-8 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Create Your Resume with {t.name} <MdArrowForward size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
