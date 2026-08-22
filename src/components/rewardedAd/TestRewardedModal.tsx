'use client';

import React, { useEffect, useState } from 'react';
import { HiCheckCircle, HiPlay, HiXMark, HiBolt, HiExclamationTriangle, HiClock } from 'react-icons/hi2';

interface TestRewardedModalProps {
  open: boolean;
  durationMs?: number;
  onGrantReward: () => void;
  onCancel: () => void;
  onError: (errorMsg: string) => void;
}

export function TestRewardedModal({
  open,
  durationMs = 5000,
  onGrantReward,
  onCancel,
  onError,
}: TestRewardedModalProps) {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const durationSec = Math.ceil(durationMs / 1000);
  const remainingSec = Math.max(0, Math.ceil((durationMs - elapsedMs) / 1000));
  const progressPercent = Math.min(100, (elapsedMs / durationMs) * 100);

  useEffect(() => {
    if (!open) {
      setElapsedMs(0);
      setIsCompleted(false);
      return;
    }

    const interval = 50; // update every 50ms for smooth progress bar
    const timer = setInterval(() => {
      setElapsedMs((prev) => {
        const next = prev + interval;
        if (next >= durationMs) {
          clearInterval(timer);
          setIsCompleted(true);
          return durationMs;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [open, durationMs]);

  // When timer completes, trigger reward after a brief celebratory delay
  useEffect(() => {
    if (isCompleted && open) {
      const timeout = setTimeout(() => {
        onGrantReward();
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [isCompleted, open, onGrantReward]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal
      aria-labelledby="test-ad-title"
    >
      <div className="relative w-full max-w-md bg-white border border-[#E5E5E5] shadow-2xl overflow-hidden">
        {/* Top Banner: Test Mode Badge */}
        <div className="flex items-center justify-between px-4 py-2 bg-amber-500 text-black font-mono text-[11px] font-bold tracking-wider uppercase border-b border-amber-600">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-black animate-pulse" />
            <span>TEST MODE &mdash; Google Rewarded Ad Simulation</span>
          </div>
          <button
            onClick={onCancel}
            className="text-black hover:bg-black/10 p-0.5 transition-colors"
            title="Cancel test ad"
            aria-label="Cancel test ad"
          >
            <HiXMark size={16} />
          </button>
        </div>

        {/* Header Content */}
        <div className="px-6 pt-5 pb-3">
          <div className="flex items-center justify-between">
            <h2 id="test-ad-title" className="text-base font-bold text-black tracking-tight">
              Watch ad to unlock your PDF
            </h2>
            <div className="flex items-center gap-1 px-2 py-0.5 bg-[#F7F7F7] border border-[#E5E5E5] text-xs font-semibold text-[#595959]">
              <HiClock size={13} className="text-black" />
              <span>{isCompleted ? 'Done' : `${remainingSec}s`}</span>
            </div>
          </div>
          <p className="mt-1 text-xs text-[#595959] leading-relaxed">
            In production, a real Google Ad Manager rewarded video ad will play here. Complete the view to receive your PDF download.
          </p>
        </div>

        {/* Simulated Ad Creative Box */}
        <div className="px-6 py-3">
          <div className="relative aspect-video w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white p-4 flex flex-col justify-between overflow-hidden border border-neutral-700 shadow-inner">
            {/* Background subtle graphic effect */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] uppercase font-mono tracking-widest bg-white/20 px-2 py-0.5 text-white/90">
                Sample Sponsor Ad
              </span>
              <span className="text-[11px] font-medium text-neutral-300">
                {isCompleted ? 'Reward ready' : `Reward in ${remainingSec}s`}
              </span>
            </div>

            <div className="my-auto text-center z-10">
              {isCompleted ? (
                <div className="flex flex-col items-center justify-center gap-1.5 text-emerald-400 animate-in zoom-in-95 duration-200">
                  <HiCheckCircle size={36} className="text-emerald-400" />
                  <span className="text-sm font-bold text-white">Reward Granted!</span>
                  <span className="text-[11px] text-neutral-300">Preparing your PDF download…</span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-1">
                    <HiPlay size={20} className="text-white ml-0.5" />
                  </div>
                  <span className="text-xs font-semibold text-white">ToolEka Partner Network</span>
                  <span className="text-[11px] text-neutral-400">Simulating interactive video stream...</span>
                </div>
              )}
            </div>

            {/* Simulated Countdown Progress Bar */}
            <div className="w-full z-10">
              <div className="h-1.5 w-full bg-neutral-700 overflow-hidden">
                <div
                  className={`h-full transition-all ease-linear duration-75 ${
                    isCompleted ? 'bg-emerald-400' : 'bg-white'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Developer Testing Controls */}
        <div className="px-6 py-3 bg-[#FBFBFB] border-t border-[#E5E5E5] text-[11px] text-[#595959]">
          <div className="font-semibold text-neutral-800 mb-2 flex items-center gap-1">
            <HiBolt size={13} className="text-amber-600" /> Dev Test Actions:
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => onGrantReward()}
              className="px-2 py-1.5 bg-white border border-[#E5E5E5] hover:border-black text-black font-medium transition-colors text-center"
            >
              ⚡ Fast Skip
            </button>
            <button
              onClick={onCancel}
              className="px-2 py-1.5 bg-white border border-[#E5E5E5] hover:border-red-500 hover:text-red-600 text-neutral-700 font-medium transition-colors text-center"
            >
              ✕ Cancel View
            </button>
            <button
              onClick={() => onError('Simulated ad network timeout error')}
              className="px-2 py-1.5 bg-white border border-[#E5E5E5] hover:border-red-500 hover:text-red-600 text-neutral-700 font-medium transition-colors text-center"
            >
              ⚠ Sim Error
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-[#E5E5E5] bg-white">
          <span className="text-[11px] text-[#737373]">
            {isCompleted ? 'Finishing...' : `Please wait ${remainingSec}s to unlock`}
          </span>
          <button
            onClick={onCancel}
            disabled={isCompleted}
            className="text-xs text-[#595959] hover:text-black font-semibold disabled:opacity-30 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
