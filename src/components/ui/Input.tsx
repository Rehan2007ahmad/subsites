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
        <label htmlFor={uid} className="text-xs font-semibold text-[#595959] select-none">
          {label}
        </label>
      )}
      <input
        id={uid}
        {...props}
        className={[
          'w-full bg-[#F7F7F7] border px-3 py-2 text-sm text-black placeholder:text-[#595959] outline-none',
          'transition-colors duration-150',
          'focus:bg-white focus:border-black',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          error ? 'border-red-500' : 'border-[#E5E5E5] hover:border-[#A3A3A3]',
          className,
        ].join(' ')}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
      {hint && !error && <p className="text-xs text-[#595959]">{hint}</p>}
    </div>
  );
}
