'use client';

import React, { useCallback, useRef, useState } from 'react';
import { getRewardedAdConfig, validateRewardedAdConfig } from '@/lib/rewardedAd/config';
import { gptRewardedService } from '@/lib/rewardedAd/gptRewardedService';
import type { RewardedAdState } from '@/lib/rewardedAd/types';
import { TestRewardedModal } from '@/components/rewardedAd/TestRewardedModal';
import { RewardedPromptDialog } from '@/components/rewardedAd/RewardedPromptDialog';

export interface UseRewardedAdReturn {
  showRewardedAd: () => Promise<boolean>;
  adState: RewardedAdState;
  isAdActive: boolean;
  isAdPreparing: boolean;
  getButtonLabel: (idleLabel?: string, isGeneratingPdf?: boolean) => string;
  RewardedAdModal: React.FC;
}

export function useRewardedAd(onErrorMessage?: (msg: string) => void): UseRewardedAdReturn {
  const [adState, setAdState] = useState<RewardedAdState>('idle');
  const [promptOpen, setPromptOpen] = useState(false);
  const [testModalOpen, setTestModalOpen] = useState(false);
  const [isPreparingProdAd, setIsPreparingProdAd] = useState(false);

  // Store promise resolver for the full user flow
  const flowResolverRef = useRef<((granted: boolean) => void) | null>(null);

  const startAdPlayback = useCallback(async () => {
    const validation = validateRewardedAdConfig();
    const config = validation.config;

    if (config.mode === 'production') {
      setIsPreparingProdAd(true);
      setAdState('preparing');

      const result = await gptRewardedService.showAd(config.adUnitPath, (state) => {
        setAdState(state);
      });

      setIsPreparingProdAd(false);
      setPromptOpen(false);

      if (!result.granted) {
        if (result.error) {
          onErrorMessage?.(result.error);
        } else if (result.cancelled) {
          onErrorMessage?.('Ad was closed before completing the required view.');
        }
        setAdState('idle');
        flowResolverRef.current?.(false);
        flowResolverRef.current = null;
        return;
      }

      setAdState('rewarded');
      setTimeout(() => setAdState('idle'), 1000);
      flowResolverRef.current?.(true);
      flowResolverRef.current = null;
    } else {
      // Test Mode
      setPromptOpen(false);
      setAdState('playing');
      setTestModalOpen(true);
    }
  }, [onErrorMessage]);

  const showRewardedAd = useCallback(async (): Promise<boolean> => {
    const validation = validateRewardedAdConfig();
    const config = validation.config;

    // 1. DISABLED MODE: bypass ad immediately
    if (config.mode === 'disabled') {
      return true;
    }

    // Check production config validity early
    if (config.mode === 'production' && !validation.isValid) {
      console.error('[Rewarded Ad Config Error]', validation.error);
      onErrorMessage?.(
        validation.error || 'Google Rewarded Ad configuration is incomplete.'
      );
      return false;
    }

    // 2. Open the Opt-in Popup Prompt first
    setPromptOpen(true);
    setAdState('ready');

    return new Promise<boolean>((resolve) => {
      flowResolverRef.current = resolve;
    });
  }, [onErrorMessage]);

  // Prompt Opt-in handlers
  const handlePromptConfirm = useCallback(() => {
    startAdPlayback();
  }, [startAdPlayback]);

  const handlePromptCancel = useCallback(() => {
    setPromptOpen(false);
    setAdState('idle');
    if (flowResolverRef.current) {
      flowResolverRef.current(false);
      flowResolverRef.current = null;
    }
  }, []);

  // Test Modal handlers
  const handleTestGrant = useCallback(() => {
    setTestModalOpen(false);
    setAdState('rewarded');
    setTimeout(() => setAdState('idle'), 1000);
    if (flowResolverRef.current) {
      flowResolverRef.current(true);
      flowResolverRef.current = null;
    }
  }, []);

  const handleTestCancel = useCallback(() => {
    setTestModalOpen(false);
    setAdState('cancelled');
    setTimeout(() => setAdState('idle'), 500);
    onErrorMessage?.('You must finish watching the ad to unlock the PDF download.');
    if (flowResolverRef.current) {
      flowResolverRef.current(false);
      flowResolverRef.current = null;
    }
  }, [onErrorMessage]);

  const handleTestError = useCallback(
    (msg: string) => {
      setTestModalOpen(false);
      setAdState('error');
      setTimeout(() => setAdState('idle'), 500);
      onErrorMessage?.(msg || 'Simulated ad failure.');
      if (flowResolverRef.current) {
        flowResolverRef.current(false);
        flowResolverRef.current = null;
      }
    },
    [onErrorMessage]
  );

  const isAdActive = promptOpen || testModalOpen || isPreparingProdAd || adState === 'preparing' || adState === 'playing';
  const isAdPreparing = adState === 'preparing' || isPreparingProdAd;

  const getButtonLabel = useCallback(
    (idleLabel = 'Download PDF', isGeneratingPdf = false): string => {
      if (isGeneratingPdf) return 'Downloading…';
      if (isAdPreparing) return 'Preparing ad…';
      if (adState === 'playing' || testModalOpen) return 'Watch ad to download';
      return idleLabel;
    },
    [adState, isAdPreparing, testModalOpen]
  );

  const config = getRewardedAdConfig();

  const RewardedAdModalComponent: React.FC = () => {
    if (config.mode === 'disabled') return null;

    return (
      <>
        {/* Step 1: Opt-in Popup Prompt */}
        <RewardedPromptDialog
          open={promptOpen}
          isTestMode={config.mode === 'test'}
          onConfirm={handlePromptConfirm}
          onClose={handlePromptCancel}
          loading={isPreparingProdAd}
        />

        {/* Step 2: Test Mode Player Modal (only rendered in test mode) */}
        {config.mode === 'test' && (
          <TestRewardedModal
            open={testModalOpen}
            durationMs={config.testDurationMs}
            onGrantReward={handleTestGrant}
            onCancel={handleTestCancel}
            onError={handleTestError}
          />
        )}
      </>
    );
  };

  return {
    showRewardedAd,
    adState,
    isAdActive,
    isAdPreparing,
    getButtonLabel,
    RewardedAdModal: RewardedAdModalComponent,
  };
}
