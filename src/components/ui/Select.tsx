import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  hint?: string;
}

export function Select({
  label,
  options,
  error,
  hint,
  className = '',
  id,
  ...props
}: SelectProps) {
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
      <select
        id={inputId}
        {...props}
        className={[
          'w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900',
          'transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          'disabled:bg-slate-50 disabled:text-slate-400 cursor-pointer',
          error ? 'border-red-400 focus:ring-red-400' : 'border-slate-300',
          className,
        ].join(' ')}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
    </div>
  );
}
