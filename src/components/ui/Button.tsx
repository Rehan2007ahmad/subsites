import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  Variant;
  size?:     Size;
  loading?:  boolean;
  leftIcon?:  React.ReactNode;
  rightIcon?: React.ReactNode;
}

// ToolEka: sharp corners, black primary, bordered secondary
const V: Record<Variant, string> = {
  primary:   'bg-black text-white hover:bg-neutral-800 focus-visible:ring-black',
  secondary: 'border border-[#E5E5E5] bg-white text-[#404040] hover:border-black hover:text-black',
  ghost:     'bg-transparent text-[#404040] hover:text-black hover:bg-[#F7F7F7]',
  danger:    'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
};

const S: Record<Size, string> = {
  sm: 'h-8  px-3   text-xs  gap-1.5',
  md: 'h-9  px-4   text-sm  gap-2',
  lg: 'h-11 px-6   text-sm  gap-2',
};

export function Button({
  variant = 'primary', size = 'md', loading = false,
  leftIcon, rightIcon, className = '', children, disabled, ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={[
        'inline-flex items-center justify-center font-semibold transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        V[variant], S[size], className,
      ].join(' ')}
    >
      {loading
        ? <AiOutlineLoading3Quarters className="animate-spin shrink-0" size={13} />
        : leftIcon && <span className="shrink-0">{leftIcon}</span>
      }
      {children}
      {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
