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
        <label htmlFor={uid} className="text-xs font-semibold text-[#595959] select-none">
          {label}
        </label>
      )}
      <select
        id={uid}
        {...props}
        className={[
          'w-full bg-[#F7F7F7] border px-3 py-2 text-sm text-black outline-none cursor-pointer',
          'transition-colors duration-150',
          'focus:bg-white focus:border-black',
          error ? 'border-red-500' : 'border-[#E5E5E5] hover:border-[#A3A3A3]',
          className,
        ].join(' ')}
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {hint && !error && <p className="text-xs text-[#595959]">{hint}</p>}
    </div>
  );
}
