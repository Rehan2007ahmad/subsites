'use client';

import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  actions,
  size = 'md',
}: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const sizeClass = { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg' }[size];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`relative w-full ${sizeClass} rounded-xl bg-white shadow-xl`}>
        <div className="flex items-start justify-between gap-3 p-5 border-b border-slate-100">
          <div>
            <h2 id="dialog-title" className="text-base font-semibold text-slate-900">
              {title}
            </h2>
            {description && (
              <p className="mt-1 text-sm text-slate-500">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            aria-label="Close dialog"
          >
            <MdClose size={18} />
          </button>
        </div>
        {children && <div className="p-5">{children}</div>}
        {actions && (
          <div className="flex justify-end gap-2 px-5 pb-5">{actions}</div>
        )}
      </div>
    </div>
  );
}
