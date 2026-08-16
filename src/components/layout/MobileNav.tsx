'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MdMenu, MdClose } from 'react-icons/md';

const links = [
  { href: '/builder', label: 'Create Resume' },
  { href: '/templates', label: 'Templates' },
  { href: '/resume-examples', label: 'Examples' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        aria-label="Open menu"
      >
        <MdMenu size={22} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex items-center justify-between px-4 h-16 border-b border-slate-100">
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                T
              </span>
              <span className="font-semibold text-slate-900">ToolEka Resume</span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <MdClose size={22} />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center rounded-lg px-4 text-base font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
