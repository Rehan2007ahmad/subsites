import React from 'react';
import Link from 'next/link';
import { MobileNav } from './MobileNav';

const navLinks = [
  { href: '/templates',      label: 'Templates' },
  { href: '/resume-examples',label: 'Examples'  },
  { href: '/guides',         label: 'Guides'    },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-sm select-none shadow-sm shadow-blue-200">
            T
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[14px] font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              ToolEka
            </span>
            <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest">
              Resume
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <Link
            href="/builder"
            className="hidden sm:inline-flex h-9 items-center gap-1.5 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
          >
            Create Resume
          </Link>
          <MobileNav />
        </div>

      </div>
    </header>
  );
}
