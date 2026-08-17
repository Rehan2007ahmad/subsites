'use client';

import React, { useEffect } from 'react';
import { HiXMark } from 'react-icons/hi2';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Dialog({ open, onClose, title, description, children, actions, size = 'md' }: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, onClose]);

  if (!open) return null;

  const maxW = { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg' }[size];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal aria-labelledby="dlg-title">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className={`relative w-full ${maxW} bg-white border border-[#E5E5E5] shadow-2xl`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
          <div>
            <h2 id="dlg-title" className="text-sm font-bold text-black">{title}</h2>
            {description && <p className="mt-0.5 text-xs text-[#595959]">{description}</p>}
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center text-[#595959] hover:text-black hover:bg-[#F7F7F7] transition-colors"
            aria-label="Close"
          >
            <HiXMark size={16} />
          </button>
        </div>
        {children && <div className="px-6 py-5">{children}</div>}
        {actions && <div className="flex justify-end gap-2 px-6 pb-5">{actions}</div>}
      </div>
    </div>
  );
}
