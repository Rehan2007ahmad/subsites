import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { TEMPLATES } from '@/types/resume';
import { MdShield, MdArrowForward } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Free Resume Templates – Professional & ATS-Friendly | ToolEka',
  description:
    'Browse 5 free professional resume templates — Classic, Modern, Minimal, Developer, and Student. All ATS-compatible. No account required.',
  alternates: { canonical: 'https://resume.tooleka.com/templates' },
  openGraph: {
    title: 'Free Resume Templates | ToolEka',
    description: '5 free, professional, ATS-friendly resume templates. Instantly switch between them in the builder.',
    url: 'https://resume.tooleka.com/templates',
  },
};

export default function TemplatesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-14 px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Free Resume Templates</h1>
          <p className="mt-3 text-lg text-slate-600 max-w-xl mx-auto">
            Five professional templates — all free, all ATS-compatible. Switch between them in seconds inside the builder.
          </p>
          <Link
            href="/builder"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Open Resume Builder <MdArrowForward size={16} />
          </Link>
        </section>

        {/* Template grid */}
        <section className="py-14 px-4">
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEMPLATES.map((t) => (
              <div key={t.id} className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Preview banner */}
                <div
                  className="h-40 flex items-center justify-center"
                  style={{ backgroundColor: t.previewBg }}
                >
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">{t.name}</p>
                    <p className="text-white/60 text-xs mt-1 font-mono uppercase tracking-widest">Template</p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-base font-bold text-slate-900">{t.name}</h2>
                    <span className={`text-xs font-medium rounded-full px-2 py-0.5 ${
                      t.atsScore === 'High' ? 'bg-green-100 text-green-700'
                      : t.atsScore === 'Medium' ? 'bg-amber-100 text-amber-700'
                      : 'bg-slate-100 text-slate-600'
                    }`}>
                      {t.atsScore === 'High' && <span className="inline-flex items-center gap-0.5"><MdShield size={10} /> ATS Friendly</span>}
                      {t.atsScore === 'Medium' && 'ATS Compatible'}
                      {t.atsScore === 'Low' && 'Decorative'}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">{t.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {t.bestFor.map((label) => (
                      <span key={label} className="text-[11px] rounded-full bg-slate-100 text-slate-600 px-2 py-0.5">{label}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/templates/${t.id}`}
                      className="flex-1 text-center rounded-lg border border-slate-300 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/builder?template=${t.id}`}
                      className="flex-1 text-center rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                    >
                      Use Template
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-4 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Which template is right for you?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm text-slate-700 mt-6">
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <p className="font-semibold mb-1">Classic</p>
                <p className="text-slate-500">Best for traditional industries like banking, law, accounting, and management.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <p className="font-semibold mb-1">Modern</p>
                <p className="text-slate-500">Great for marketing, sales, consulting, and creative-adjacent roles.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <p className="font-semibold mb-1">Minimal</p>
                <p className="text-slate-500">Works for any industry. Lets your content stand out through clean typography.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <p className="font-semibold mb-1">Developer</p>
                <p className="text-slate-500">Optimized for software engineers, developers, and technical professionals.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 sm:col-span-2">
                <p className="font-semibold mb-1">Student</p>
                <p className="text-slate-500">Highlights education, projects, and certifications — perfect for internships and first jobs.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
