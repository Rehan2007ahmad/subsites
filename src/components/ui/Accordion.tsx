'use client';

import React, { useState } from 'react';

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
    <div className="bg-white border border-[#E5E5E5] transition-colors duration-150">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#F7F7F7] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black"
        aria-expanded={open}
      >
        {/* Icon box — mirrors ToolEka tool card icon */}
        {icon && (
          <div className="w-7 h-7 flex items-center justify-center border border-[#E5E5E5] bg-[#F7F7F7] text-[#595959] shrink-0 transition-all duration-150 group-hover:border-black group-hover:bg-black group-hover:text-white">
            {icon}
          </div>
        )}

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-black leading-tight">{title}</span>
            {badge}
          </div>
          {subtitle && <p className="text-xs text-[#595959] mt-0.5 truncate">{subtitle}</p>}
        </div>

        {/* +/− toggle */}
        <span className="text-[#595959] text-base leading-none shrink-0 font-light hover:text-black transition-colors">
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <div className="border-t border-[#E5E5E5]">
          {children}
        </div>
      )}
    </div>
  );
}
