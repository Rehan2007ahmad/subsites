import React from 'react';
import { AdUnit } from './AdUnit';

interface AdContainerProps {
  className?: string;
}

/**
 * Content-page ad placement with a labelled wrapper.
 * Google Auto Ads will replace this area in production.
 */
export function AdContainer({ className = '' }: AdContainerProps) {
  return (
    <div className={`w-full py-4 ${className}`}>
      <AdUnit className="w-full" />
    </div>
  );
}
