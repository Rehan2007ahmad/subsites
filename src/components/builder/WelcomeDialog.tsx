'use client';

import React from 'react';
import { Dialog } from '@/components/ui/Dialog';
import { HiSparkles, HiPencilSquare } from 'react-icons/hi2';

interface Props {
  open: boolean;
  onStartBlank: () => void;
  onUseSample:  () => void;
}

export function WelcomeDialog({ open, onStartBlank, onUseSample }: Props) {
  return (
    <Dialog open={open} onClose={onStartBlank} title="Welcome to ToolEka Resume Builder" size="md">
      <div className="space-y-2">
        <p className="text-sm text-[#595959] mb-4">
          Create a professional resume for free — no account required. Your data stays in your browser.
        </p>

        {/* Sample option */}
        <button onClick={onUseSample}
          className="group w-full flex items-start gap-4 p-4 border border-[#E5E5E5] bg-white hover:bg-[#F7F7F7] hover:border-black text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
          <div className="w-9 h-9 flex items-center justify-center bg-black text-white shrink-0">
            <HiSparkles size={17} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-black mb-0.5">Use sample resume</p>
            <p className="text-xs text-[#595959] leading-relaxed">
              Start with a pre-filled example to see all features. Edit anything you want.
            </p>
          </div>
          <svg className="w-4 h-4 text-[#D4D4D4] group-hover:text-black transition-colors mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Blank option */}
        <button onClick={onStartBlank}
          className="group w-full flex items-start gap-4 p-4 border border-[#E5E5E5] bg-white hover:bg-[#F7F7F7] hover:border-black text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
          <div className="w-9 h-9 flex items-center justify-center border border-[#E5E5E5] bg-[#F7F7F7] text-[#595959] group-hover:bg-black group-hover:text-white group-hover:border-black shrink-0 transition-all duration-150">
            <HiPencilSquare size={17} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-black mb-0.5">Start from scratch</p>
            <p className="text-xs text-[#595959] leading-relaxed">
              Begin with a blank resume and fill in your own information.
            </p>
          </div>
          <svg className="w-4 h-4 text-[#D4D4D4] group-hover:text-black transition-colors mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </Dialog>
  );
}
