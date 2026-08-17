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
        <label htmlFor={uid} className="text-xs font-semibold text-[#595959] select-none">
          {label}
        </label>
      )}
      <textarea
        id={uid}
        {...props}
        className={[
          'w-full bg-[#F7F7F7] border px-3 py-2 text-sm text-black placeholder:text-[#595959] outline-none resize-y',
          'transition-colors duration-150',
          'focus:bg-white focus:border-black',
          error ? 'border-red-500' : 'border-[#E5E5E5] hover:border-[#A3A3A3]',
          className,
        ].join(' ')}
      />
      <div className="flex justify-between items-center">
        <span>
          {error && <p className="text-xs text-red-600">{error}</p>}
          {hint && !error && <p className="text-xs text-[#595959]">{hint}</p>}
        </span>
        {maxChars !== undefined && charCount !== undefined && (
          <span className={`text-xs tabular-nums ${charCount > maxChars ? 'text-red-500' : 'text-[#595959]'}`}>
            {charCount}/{maxChars}
          </span>
        )}
      </div>
    </div>
  );
}
