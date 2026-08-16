import React from 'react';
import Link from 'next/link';

const year = new Date().getFullYear();

const nav = [
  {
    heading: 'Product',
    links: [
      { href: '/builder', label: 'Resume Builder' },
      { href: '/templates', label: 'Templates' },
      { href: '/resume-examples', label: 'Resume Examples' },
      { href: '/guides', label: 'Guides' },
    ],
  },
  {
    heading: 'Examples',
    links: [
      { href: '/resume-examples/software-engineer', label: 'Software Engineer' },
      { href: '/resume-examples/student', label: 'Student' },
      { href: '/resume-examples/accountant', label: 'Accountant' },
      { href: '/resume-examples/teacher', label: 'Teacher' },
      { href: '/resume-examples/marketing-manager', label: 'Marketing Manager' },
    ],
  },
  {
    heading: 'Guides',
    links: [
      { href: '/guides/how-to-write-a-resume', label: 'How to Write a Resume' },
      { href: '/guides/ats-resume-guide', label: 'ATS Resume Guide' },
      { href: '/guides/resume-summary-examples', label: 'Resume Summary' },
      { href: '/guides/resume-skills', label: 'Resume Skills' },
      { href: '/guides/resume-vs-cv', label: 'Resume vs CV' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: 'https://tooleka.com', label: 'ToolEka.com ↗' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand col */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                T
              </span>
              <span className="font-semibold text-slate-900">ToolEka</span>
            </Link>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              Free online tools for everyone. Build professional resumes — no account required.
            </p>
          </div>

          {/* Nav cols */}
          {nav.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500 text-center">
          © {year} ToolEka · Free Resume Builder · All rights reserved
        </div>
      </div>
    </footer>
  );
}
