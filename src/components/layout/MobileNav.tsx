'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MdMenu, MdClose, MdArrowForward } from 'react-icons/md';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(true)}
        className="h-9 w-9 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        aria-label="Open menu"
      >
        <MdMenu size={22} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
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
          <nav className="flex-1 px-4 pt-4 space-y-1">
            <Link href="/builder" onClick={() => setOpen(false)}
              className="flex items-center justify-between h-12 px-4 rounded-xl bg-blue-600 text-white text-[15px] font-semibold hover:bg-blue-700 transition-colors">
              Create Resume <MdArrowForward size={16} className="text-blue-200" />
            </Link>
            <Link href="/" onClick={() => setOpen(false)}
              className="flex items-center justify-between h-12 px-4 rounded-xl text-slate-700 text-[15px] font-medium hover:bg-slate-100 transition-colors">
              Home <MdArrowForward size={16} className="text-slate-300" />
            </Link>
            <Link href="https://tooleka.com" onClick={() => setOpen(false)}
              className="flex items-center justify-between h-12 px-4 rounded-xl text-slate-700 text-[15px] font-medium hover:bg-slate-100 transition-colors">
              ToolEka.com ↗ <MdArrowForward size={16} className="text-slate-300" />
            </Link>
          </nav>
          <p className="p-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} ToolEka</p>
        </div>
      )}
    </div>
  );
}
