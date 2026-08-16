'use client';

import React from 'react';
import { Dialog } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { MdAutoAwesome, MdEditNote } from 'react-icons/md';

interface WelcomeDialogProps {
  open: boolean;
  onStartBlank: () => void;
  onUseSample: () => void;
}

export function WelcomeDialog({ open, onStartBlank, onUseSample }: WelcomeDialogProps) {
  return (
    <Dialog open={open} onClose={onStartBlank} title="Welcome to ToolEka Resume Builder">
      <div className="space-y-4">
        <p className="text-sm text-slate-600">
          Create a professional resume for free — no account required. Your data stays in your browser.
        </p>
        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={onUseSample}
            className="flex items-start gap-3 p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 bg-blue-50 text-left transition-colors"
          >
            <MdAutoAwesome size={24} className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Use Sample Resume</p>
              <p className="text-xs text-slate-500 mt-0.5">Load a pre-filled example to see how the builder works. You can edit everything.</p>
            </div>
          </button>
          <button
            onClick={onStartBlank}
            className="flex items-start gap-3 p-4 rounded-xl border-2 border-slate-200 hover:border-slate-400 bg-white text-left transition-colors"
          >
            <MdEditNote size={24} className="text-slate-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Start from Scratch</p>
              <p className="text-xs text-slate-500 mt-0.5">Begin with a blank resume and fill in your own information.</p>
            </div>
          </button>
        </div>
      </div>
    </Dialog>
  );
}
