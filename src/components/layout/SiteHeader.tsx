import React from 'react';
import Link from 'next/link';
import { MobileNav } from './MobileNav';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
              T
            </span>
            <span className="font-semibold text-slate-900">
              ToolEka <span className="text-blue-600">Resume</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/templates" className="hover:text-blue-600 transition-colors">
              Templates
            </Link>
            <Link href="/resume-examples" className="hover:text-blue-600 transition-colors">
              Examples
            </Link>
            <Link href="/guides" className="hover:text-blue-600 transition-colors">
              Guides
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/builder"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Create Resume
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
