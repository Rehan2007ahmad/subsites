'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MdMenu, MdClose, MdArrowForward } from 'react-icons/md';

const links = [
  { href: '/builder',         label: 'Create Resume',   primary: true  },
  { href: '/templates',       label: 'Templates',        primary: false },
  { href: '/resume-examples', label: 'Resume Examples',  primary: false },
  { href: '/guides',          label: 'Guides',           primary: false },
  { href: '/about',           label: 'About',            primary: false },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="h-9 w-9 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        aria-label="Open menu"
      >
        <MdMenu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">

          {/* Top bar */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-slate-100 shrink-0">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-sm">T</span>
              <span className="flex flex-col leading-none">
                <span className="text-[14px] font-bold text-slate-900">ToolEka</span>
                <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest">Resume</span>
              </span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="h-9 w-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
              aria-label="Close"
            >
              <MdClose size={22} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 px-4 pt-4 space-y-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={[
                  'flex items-center justify-between h-12 px-4 rounded-xl text-[15px] font-medium transition-colors',
                  l.primary
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'text-slate-700 hover:bg-slate-100',
                ].join(' ')}
              >
                {l.label}
                <MdArrowForward size={16} className={l.primary ? 'text-blue-200' : 'text-slate-400'} />
              </Link>
            ))}
          </nav>

          <p className="p-4 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} ToolEka
          </p>
        </div>
      )}
    </div>
  );
}
