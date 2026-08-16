import React from 'react';

interface SelectOption { value: string; label: string; }

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  hint?: string;
}

export function Select({ label, options, error, hint, className = '', id, ...props }: SelectProps) {
  const uid = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={uid} className="text-xs font-medium text-slate-600 select-none">
          {label}
        </label>
      )}
      <select
        id={uid}
        {...props}
        className={[
          'w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none cursor-pointer',
          'transition-all duration-150',
          'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
          error ? 'border-red-400' : 'border-slate-200 hover:border-slate-300',
          className,
        ].join(' ')}
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {hint && !error && <p className="text-xs text-slate-400">{hint}</p>}
    </div>
  );
}
