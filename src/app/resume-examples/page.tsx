import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MdArrowForward } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Resume Examples – Real Samples for Every Job | ToolEka',
  description: 'Browse free resume examples for software engineers, students, accountants, teachers, and marketing managers. Use any example as a starting point.',
  alternates: { canonical: 'https://resume.tooleka.com/resume-examples' },
};

const examples = [
  {
    href: '/resume-examples/software-engineer',
    title: 'Software Engineer Resume',
    desc: 'Backend, frontend, and full-stack engineers. Highlights tech stack, projects, and GitHub.',
    color: '#0d1117',
  },
  {
    href: '/resume-examples/student',
    title: 'Student Resume',
    desc: 'Fresh graduates and students seeking internships. Emphasizes education, projects, and achievements.',
    color: '#16a34a',
  },
  {
    href: '/resume-examples/accountant',
    title: 'Accountant Resume',
    desc: 'CPAs and financial professionals. Highlights certifications, compliance expertise, and client results.',
    color: '#1e3a5f',
  },
  {
    href: '/resume-examples/teacher',
    title: 'Teacher Resume',
    desc: 'K-12 and university educators. Emphasizes curriculum development, certifications, and student outcomes.',
    color: '#7c3aed',
  },
  {
    href: '/resume-examples/marketing-manager',
    title: 'Marketing Manager Resume',
    desc: 'Digital marketers and campaign managers. Showcases ROI, tools, and growth metrics.',
    color: '#dc2626',
  },
];

export default function ResumeExamplesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="bg-slate-50 border-b border-slate-100 py-14 px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Resume Examples</h1>
          <p className="mt-3 text-lg text-slate-600 max-w-xl mx-auto">
            Real-world resume samples for common professions. Use any as a starting point for your own.
          </p>
        </section>

        <section className="py-14 px-4">
          <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-5">
            {examples.map((ex) => (
              <Link
                key={ex.href}
                href={ex.href}
                className="flex gap-4 items-start p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div
                  className="h-12 w-12 rounded-xl shrink-0"
                  style={{ backgroundColor: ex.color }}
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{ex.title}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{ex.desc}</p>
                </div>
                <MdArrowForward size={18} className="text-slate-300 group-hover:text-blue-500 shrink-0 mt-0.5 transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
