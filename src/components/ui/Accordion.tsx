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

export function Accordion({
  title,
  subtitle,
  icon,
  defaultOpen = false,
  children,
  badge,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3.5 bg-white hover:bg-slate-50 transition-colors text-left"
        aria-expanded={open}
      >
        {icon && <span className="text-slate-500 shrink-0">{icon}</span>}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-800">{title}</span>
            {badge}
          </div>
          {subtitle && <p className="text-xs text-slate-500 truncate">{subtitle}</p>}
        </div>
        <MdKeyboardArrowDown
          size={20}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="border-t border-slate-100 bg-white">{children}</div>}
    </div>
  );
}
