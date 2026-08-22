import { loadGptScript } from './gptLoader';
import type {
  GptRewardedSlotClosedEvent,
  GptRewardedSlotGrantedEvent,
  GptRewardedSlotReadyEvent,
  GptSlot,
  GptSlotRenderEndedEvent,
  RewardedAdResult,
  RewardedAdState,
} from './types';

const AD_REQUEST_TIMEOUT_MS = 20000;

class GptRewardedAdService {
  private isRequestInProgress = false;

  public isInProgress(): boolean {
    return this.isRequestInProgress;
  }

  /**
   * Requests and presents a Google Ad Manager Rewarded Out-Of-Page ad.
   * Resolves only when the user finishes viewing and the slot closes.
   */
  public async showAd(
    adUnitPath: string,
    onStateChange?: (state: RewardedAdState) => void
  ): Promise<RewardedAdResult> {
    if (this.isRequestInProgress) {
      return {
        granted: false,
        error: 'An ad request is already in progress.',
      };
    }

    if (typeof window === 'undefined') {
      return {
        granted: false,
        error: 'Rewarded ads can only be displayed in a browser environment.',
      };
    }

    this.isRequestInProgress = true;
    onStateChange?.('preparing');

    try {
      await loadGptScript();
    } catch (err) {
      this.isRequestInProgress = false;
      onStateChange?.('error');
      const message = err instanceof Error ? err.message : 'Failed to load ad network.';
      return { granted: false, error: message };
    }

    return new Promise<RewardedAdResult>((resolve) => {
      const googletag = window.googletag;
      if (!googletag) {
        this.isRequestInProgress = false;
        onStateChange?.('error');
        resolve({ granted: false, error: 'Google Publisher Tag is unavailable.' });
        return;
      }

      googletag.cmd.push(() => {
        let activeSlot: GptSlot | null = null;
        let rewardGranted = false;
        let isSettled = false;
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const cleanup = () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }
          if (googletag && activeSlot) {
            try {
              googletag.destroySlots([activeSlot]);
            } catch (e) {
              console.warn('[GPT] Failed to destroy slot:', e);
            }
          }
          this.isRequestInProgress = false;
        };

        const finalize = (result: RewardedAdResult, nextState: RewardedAdState) => {
          if (isSettled) return;
          isSettled = true;
          cleanup();
          onStateChange?.(nextState);
          resolve(result);
        };

        // Safety timeout in case of network stall or unhandled slot state
        timeoutId = setTimeout(() => {
          console.warn('[GPT] Rewarded ad timed out waiting for events.');
          finalize(
            {
              granted: false,
              error: "The rewarded ad isn't available right now. Please try again.",
            },
            'error'
          );
        }, AD_REQUEST_TIMEOUT_MS);

        try {
          const rewardedFormat = googletag.enums?.OutOfPageFormat?.REWARDED;
          if (rewardedFormat === undefined) {
            finalize(
              {
                granted: false,
                error: 'Rewarded format is not supported by this GPT version.',
              },
              'error'
            );
            return;
          }

          // Define the out-of-page rewarded ad slot
          activeSlot = googletag.defineOutOfPageSlot(adUnitPath, rewardedFormat);

          if (!activeSlot) {
            finalize(
              {
                granted: false,
                error: 'Rewarded ads are not supported on this device or viewport.',
              },
              'error'
            );
            return;
          }

          activeSlot.addService(googletag.pubads());

          // Event: Rewarded ad is loaded and ready to be made visible
          const onSlotReady = (event: GptRewardedSlotReadyEvent) => {
            if (event.slot === activeSlot) {
              onStateChange?.('playing');
              // Present the rewarded ad overlay
              event.makeRewardedVisible();
            }
          };

          // Event: User completed the required view/action to earn the reward
          const onSlotGranted = (event: GptRewardedSlotGrantedEvent) => {
            if (event.slot === activeSlot) {
              rewardGranted = true;
              onStateChange?.('rewarded');
            }
          };

          // Event: Rewarded ad overlay was dismissed/closed
          const onSlotClosed = (event: GptRewardedSlotClosedEvent) => {
            if (event.slot === activeSlot) {
              if (rewardGranted) {
                finalize({ granted: true }, 'rewarded');
              } else {
                finalize(
                  {
                    granted: false,
                    cancelled: true,
                    error: 'Ad was closed before completing the required view.',
                  },
                  'cancelled'
                );
              }
            }
          };

          // Event: Check if the slot failed to render or returned empty (no fill)
          const onSlotRenderEnded = (event: GptSlotRenderEndedEvent) => {
            if (event.slot === activeSlot && event.isEmpty) {
              finalize(
                {
                  granted: false,
                  error: "The rewarded ad isn't available right now. Please try again.",
                },
                'error'
              );
            }
          };

          const pubads = googletag.pubads();
          pubads.addEventListener('rewardedSlotReady', onSlotReady);
          pubads.addEventListener('rewardedSlotGranted', onSlotGranted);
          pubads.addEventListener('rewardedSlotClosed', onSlotClosed);
          pubads.addEventListener('slotRenderEnded', onSlotRenderEnded);

          googletag.enableServices();
          googletag.display(activeSlot);
        } catch (err) {
          const msg = err instanceof Error ? err.message : 'Error setting up rewarded ad.';
          console.error('[GPT] Error configuring rewarded ad:', err);
          finalize({ granted: false, error: msg }, 'error');
        }
      });
    });
  }
}

export const gptRewardedService = new GptRewardedAdService();
