/**
 * Type definitions for Google Publisher Tag (GPT) Rewarded Web Ads
 * and the ToolEka Rewarded Ad system.
 */

export type RewardedAdMode = 'test' | 'production' | 'disabled';

export type RewardedAdState =
  | 'idle'
  | 'preparing'
  | 'ready'
  | 'playing'
  | 'rewarded'
  | 'cancelled'
  | 'error';

export interface RewardedAdConfig {
  mode: RewardedAdMode;
  adUnitPath: string;
  isEnabled: boolean;
  testDurationMs: number;
}

export interface RewardedAdResult {
  granted: boolean;
  cancelled?: boolean;
  error?: string;
}

// ---------------------------------------------------------------------------
// Google Publisher Tag (GPT) Global Types
// Reference: https://developers.google.com/publisher-tag/reference
// ---------------------------------------------------------------------------

export interface GptSlot {
  addService(service: GptPubadsService): GptSlot;
  getSlotElementId(): string;
  getAdUnitPath(): string;
}

export interface GptRewardedPayload {
  amount?: number;
  type?: string;
}

export interface GptRewardedSlotReadyEvent {
  slot: GptSlot;
  makeRewardedVisible: () => void;
}

export interface GptRewardedSlotGrantedEvent {
  slot: GptSlot;
  payload: GptRewardedPayload | null;
}

export interface GptRewardedSlotClosedEvent {
  slot: GptSlot;
}

export interface GptSlotRenderEndedEvent {
  slot: GptSlot;
  isEmpty: boolean;
  size: [number, number] | string | null;
}

export interface GptPubadsService {
  addEventListener(eventType: 'rewardedSlotReady', listener: (event: GptRewardedSlotReadyEvent) => void): GptPubadsService;
  addEventListener(eventType: 'rewardedSlotGranted', listener: (event: GptRewardedSlotGrantedEvent) => void): GptPubadsService;
  addEventListener(eventType: 'rewardedSlotClosed', listener: (event: GptRewardedSlotClosedEvent) => void): GptPubadsService;
  addEventListener(eventType: 'slotRenderEnded', listener: (event: GptSlotRenderEndedEvent) => void): GptPubadsService;
  removeEventListener(eventType: string, listener: (...args: any[]) => void): GptPubadsService;
  enableSingleRequest(): void;
  refresh(slots?: GptSlot[]): void;
}

export interface GptGoogleTag {
  cmd: Array<() => void>;
  apiReady?: boolean;
  defineOutOfPageSlot(adUnitPath: string, format: number): GptSlot | null;
  pubads(): GptPubadsService;
  enableServices(): void;
  display(slotOrElementId: GptSlot | string): void;
  destroySlots(slots?: GptSlot[]): boolean;
  enums: {
    OutOfPageFormat: {
      REWARDED: number;
      BOTTOM_ANCHOR?: number;
      TOP_ANCHOR?: number;
      INTERSTITIAL?: number;
    };
  };
}

declare global {
  interface Window {
    googletag?: GptGoogleTag;
  }
}
