import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
type Size    = 'xs' | 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  Variant;
  size?:     Size;
  loading?:  boolean;
  leftIcon?:  React.ReactNode;
  rightIcon?: React.ReactNode;
}

const V: Record<Variant, string> = {
  primary:   'bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-200/60',
  secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
  ghost:     'bg-transparent text-slate-600 hover:bg-slate-100',
  danger:    'bg-red-600 text-white hover:bg-red-700',
  outline:   'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300',
};

const S: Record<Size, string> = {
  xs: 'h-7  px-2.5 text-xs  gap-1.5 rounded-md',
  sm: 'h-8  px-3   text-xs  gap-1.5 rounded-lg',
  md: 'h-9  px-4   text-sm  gap-2   rounded-lg',
  lg: 'h-11 px-6   text-sm  gap-2   rounded-xl',
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
        'inline-flex items-center justify-center font-medium transition-all duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        V[variant], S[size], className,
      ].join(' ')}
    >
      {loading
        ? <AiOutlineLoading3Quarters className="animate-spin shrink-0" size={14} />
        : leftIcon && <span className="shrink-0">{leftIcon}</span>
      }
      {children}
      {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
