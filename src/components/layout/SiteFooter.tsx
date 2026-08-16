import React from 'react';
import Link from 'next/link';

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-sm shadow-sm shadow-blue-200">T</span>
              <span className="font-bold text-slate-900">ToolEka</span>
            </Link>
            <p className="text-xs text-slate-500 max-w-[220px] leading-relaxed">
              Free browser-based tools for everyone. No account. No uploads. No tracking.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-end text-xs text-slate-500">
            <Link href="/builder" className="hover:text-blue-600 transition-colors font-medium">Resume Builder</Link>
            <Link href="https://tooleka.com" className="hover:text-blue-600 transition-colors">ToolEka.com ↗</Link>
            <a href="mailto:hello@tooleka.com" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-400">© {year} ToolEka · Free Resume Builder</p>
          <p className="text-xs text-slate-400">Built by Rehan Ahmad · browser-based tools for everyone</p>
        </div>
      </div>
    </footer>
  );
}
