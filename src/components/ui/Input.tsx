import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
}

export function Input({
  label,
  error,
  hint,
  leftIcon,
  className = '',
  id,
  ...props
}: InputProps) {
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
      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
            {leftIcon}
          </span>
        )}
        <input
          id={inputId}
          {...props}
          className={[
            'w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400',
            'transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            'disabled:bg-slate-50 disabled:text-slate-400',
            error
              ? 'border-red-400 focus:ring-red-400'
              : 'border-slate-300',
            leftIcon ? 'pl-9' : '',
            className,
          ].join(' ')}
        />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
    </div>
  );
}
