import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, className = '', id, ...props }: InputProps) {
  const uid = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={uid} className="text-xs font-medium text-slate-600 select-none">
          {label}
        </label>
      )}
      <input
        id={uid}
        {...props}
        className={[
          'w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none',
          'transition-all duration-150',
          'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
          'disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed',
          error ? 'border-red-400 focus:ring-red-300/30' : 'border-slate-200 hover:border-slate-300',
          className,
        ].join(' ')}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      {hint && !error && <p className="text-xs text-slate-400">{hint}</p>}
    </div>
  );
}
