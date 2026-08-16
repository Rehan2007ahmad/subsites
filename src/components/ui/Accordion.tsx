'use client';

import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface AccordionProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  badge?: React.ReactNode;
}

export function Accordion({ title, subtitle, icon, defaultOpen = false, children, badge }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="section-card">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50/70 transition-colors"
        aria-expanded={open}
      >
        {/* Icon */}
        {icon && (
          <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 shrink-0">
            {icon}
          </span>
        )}

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-semibold text-slate-800 leading-tight">{title}</span>
            {badge}
          </div>
          {subtitle && <p className="text-[11px] text-slate-400 mt-0.5 truncate">{subtitle}</p>}
        </div>

        {/* Chevron */}
        <MdKeyboardArrowDown
          size={18}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="border-t border-slate-100">
          {children}
        </div>
      )}
    </div>
  );
}
