'use client';

import React from 'react';
import { Dialog } from '@/components/ui/Dialog';
import { MdAutoAwesome, MdEditNote, MdArrowForward } from 'react-icons/md';

interface Props {
  open: boolean;
  onStartBlank: () => void;
  onUseSample:  () => void;
}

export function WelcomeDialog({ open, onStartBlank, onUseSample }: Props) {
  return (
    <Dialog open={open} onClose={onStartBlank} title="Welcome to ToolEka Resume Builder" size="md">
      <div className="space-y-3">
        <p className="text-sm text-slate-500">
          Create a professional resume for free — no account required. Your data stays in your browser.
        </p>

        {/* Sample */}
        <button
          onClick={onUseSample}
          className="w-full flex items-start gap-4 p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 text-left transition-all group"
        >
          <span className="h-9 w-9 flex items-center justify-center rounded-xl bg-blue-600 text-white shrink-0">
            <MdAutoAwesome size={18} />
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-900 mb-0.5">Use sample resume</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Start with a pre-filled example. Great for seeing all features — edit anything you want.
            </p>
          </div>
          <MdArrowForward size={16} className="text-blue-400 group-hover:text-blue-600 mt-0.5 shrink-0 transition-colors" />
        </button>

        {/* Blank */}
        <button
          onClick={onStartBlank}
          className="w-full flex items-start gap-4 p-4 rounded-xl border-2 border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-left transition-all group"
        >
          <span className="h-9 w-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 shrink-0">
            <MdEditNote size={20} />
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-900 mb-0.5">Start from scratch</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Begin with a blank resume and fill in your own information.
            </p>
          </div>
          <MdArrowForward size={16} className="text-slate-300 group-hover:text-slate-500 mt-0.5 shrink-0 transition-colors" />
        </button>
      </div>
    </Dialog>
  );
}
