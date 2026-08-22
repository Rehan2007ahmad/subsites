'use client';

import React from 'react';
import { HiXMark, HiPlay, HiCheckBadge, HiDocumentArrowDown, HiSparkles } from 'react-icons/hi2';
import { Button } from '@/components/ui/Button';

interface RewardedPromptDialogProps {
  open: boolean;
  isTestMode?: boolean;
  onConfirm: () => void;
  onClose: () => void;
  loading?: boolean;
}

export function RewardedPromptDialog({
  open,
  isTestMode = false,
  onConfirm,
  onClose,
  loading = false,
}: RewardedPromptDialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal
      aria-labelledby="rewarded-prompt-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={!loading ? onClose : undefined} />

      {/* Dialog Window */}
      <div className="relative w-full max-w-md bg-white border border-[#E5E5E5] shadow-2xl overflow-hidden">
        {/* Test Mode Banner if applicable */}
        {isTestMode && (
          <div className="px-4 py-1.5 bg-amber-500 text-black text-[11px] font-mono font-bold flex items-center justify-between border-b border-amber-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              TEST MODE &mdash; Ad Opt-in Prompt
            </span>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-[#E5E5E5]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0">
              <HiDocumentArrowDown size={17} />
            </div>
            <div>
              <h2 id="rewarded-prompt-title" className="text-base font-bold text-black leading-tight">
                Unlock PDF Download
              </h2>
              <p className="text-xs text-[#595959] mt-0.5">Free instant export</p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={loading}
            className="w-7 h-7 flex items-center justify-center text-[#595959] hover:text-black hover:bg-[#F7F7F7] transition-colors disabled:opacity-30"
            aria-label="Close"
          >
            <HiXMark size={16} />
          </button>
        </div>

        {/* Body Content */}
        <div className="px-6 py-5 space-y-4">
          <p className="text-xs text-[#404040] leading-relaxed">
            Watch a short sponsored ad to instantly unlock and download your ATS-ready resume in high-quality PDF format.
          </p>

          {/* Perks / Features */}
          <div className="bg-[#FBFBFB] border border-[#E5E5E5] p-3.5 space-y-2.5">
            <div className="flex items-start gap-2.5 text-xs text-[#262626]">
              <HiCheckBadge size={16} className="text-black shrink-0 mt-0.5" />
              <span>
                <strong>100% Free:</strong> No subscription, watermark, or credit card required.
              </span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[#262626]">
              <HiSparkles size={16} className="text-black shrink-0 mt-0.5" />
              <span>
                <strong>ATS-Friendly:</strong> Clean vector text optimized for recruiter screening systems.
              </span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[#262626]">
              <HiPlay size={16} className="text-black shrink-0 mt-0.5" />
              <span>
                <strong>Short Ad:</strong> Quick view grants instant lifetime export of this resume.
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-2.5 px-6 py-4 bg-[#F7F7F7] border-t border-[#E5E5E5]">
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={onConfirm}
            loading={loading}
            leftIcon={<HiPlay size={14} />}
          >
            Watch Ad & Download
          </Button>
        </div>
      </div>
    </div>
  );
}
