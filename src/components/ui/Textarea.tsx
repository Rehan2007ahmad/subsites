import React from 'react';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  charCount?: number;
  maxChars?: number;
}

export function Textarea({
  label,
  error,
  hint,
  charCount,
  maxChars,
  className = '',
  id,
  ...props
}: TextareaProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        {...props}
        className={[
          'w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400',
          'transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          'disabled:bg-slate-50 disabled:text-slate-400 resize-y',
          error ? 'border-red-400 focus:ring-red-400' : 'border-slate-300',
          className,
        ].join(' ')}
      />
      <div className="flex justify-between">
        <span>
          {error && <p className="text-xs text-red-600">{error}</p>}
          {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
        </span>
        {maxChars !== undefined && charCount !== undefined && (
          <span
            className={`text-xs ${
              charCount > maxChars ? 'text-red-500' : 'text-slate-400'
            }`}
          >
            {charCount}/{maxChars}
          </span>
        )}
      </div>
    </div>
  );
}
