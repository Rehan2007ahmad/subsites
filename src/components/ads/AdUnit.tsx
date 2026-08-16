'use client';

import React, { useEffect } from 'react';

/**
 * AdUnit is a thin wrapper for Google Auto Ads.
 * With Auto Ads enabled in the AdSense dashboard, Google handles
 * ad placement automatically via the script in layout.tsx.
 *
 * Use AdContainer for manual placements if needed.
 */
export function AdUnit({ className = '' }: { className?: string }) {
  // Auto Ads does not need per-unit code. This component is a placeholder
  // for future manual ad unit placement if desired.
  const isEnabled = Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID);

  if (!isEnabled) {
    return (
      <div
        className={`flex items-center justify-center border border-dashed border-slate-200 bg-slate-50 text-slate-400 text-xs rounded-lg min-h-[90px] ${className}`}
        role="complementary"
        aria-label="Advertisement placeholder"
      >
        <span>[Advertisement]</span>
      </div>
    );
  }

  // When Auto Ads is enabled, Google handles injection automatically.
  return null;
}
