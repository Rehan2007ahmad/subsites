import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  charCount?: number;
  maxChars?: number;
}

export function Textarea({ label, error, hint, charCount, maxChars, className = '', id, ...props }: TextareaProps) {
  const uid = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={uid} className="text-xs font-medium text-slate-600 select-none">
          {label}
        </label>
      )}
      <textarea
        id={uid}
        {...props}
        className={[
          'w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none resize-y',
          'transition-all duration-150',
          'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
          'disabled:bg-slate-50 disabled:text-slate-400',
          error ? 'border-red-400' : 'border-slate-200 hover:border-slate-300',
          className,
        ].join(' ')}
      />
      <div className="flex justify-between items-center">
        <span>
          {error && <p className="text-xs text-red-500">{error}</p>}
          {hint && !error && <p className="text-xs text-slate-400">{hint}</p>}
        </span>
        {maxChars !== undefined && charCount !== undefined && (
          <span className={`text-xs tabular-nums ${charCount > maxChars ? 'text-red-500' : 'text-slate-400'}`}>
            {charCount}/{maxChars}
          </span>
        )}
      </div>
    </div>
  );
}
