import type { RewardedAdConfig, RewardedAdMode } from './types';

/**
 * Returns the parsed and validated Rewarded Ad configuration from environment variables.
 * Safe for both Client and Server evaluation in Next.js.
 */
export function getRewardedAdConfig(): RewardedAdConfig {
  const rawEnabled = process.env.NEXT_PUBLIC_REWARDED_AD_ENABLED;
  const isEnabled = rawEnabled !== 'false' && rawEnabled !== '0';

  const rawMode = (process.env.NEXT_PUBLIC_REWARDED_AD_MODE || '').toLowerCase().trim();
  let mode: RewardedAdMode = 'disabled';

  if (!isEnabled || rawMode === 'disabled' || !rawMode) {
    mode = 'disabled';
  } else if (rawMode === 'production' || rawMode === 'prod') {
    mode = 'production';
  } else if (rawMode === 'test') {
    mode = 'test';
  } else {
    mode = 'disabled';
  }

  const adUnitPath = (process.env.NEXT_PUBLIC_REWARDED_AD_UNIT_PATH || '').trim();

  const parsedDuration = parseInt(process.env.NEXT_PUBLIC_REWARDED_AD_TEST_DURATION_MS || '', 10);
  const testDurationMs = !isNaN(parsedDuration) && parsedDuration > 0 ? parsedDuration : 5000;

  return {
    mode,
    adUnitPath,
    isEnabled: mode !== 'disabled',
    testDurationMs,
  };
}

export interface ConfigValidationResult {
  isValid: boolean;
  error?: string;
  config: RewardedAdConfig;
}

/**
 * Validates the configuration before attempting to show ads.
 */
export function validateRewardedAdConfig(): ConfigValidationResult {
  const config = getRewardedAdConfig();

  if (config.mode === 'disabled') {
    return { isValid: true, config };
  }

  if (config.mode === 'production') {
    if (!config.adUnitPath) {
      return {
        isValid: false,
        error:
          'NEXT_PUBLIC_REWARDED_AD_UNIT_PATH is missing. In production mode, a valid Google Ad Manager ad unit path (e.g. /1234567/my_rewarded_ad) is required.',
        config,
      };
    }
    if (!config.adUnitPath.startsWith('/')) {
      return {
        isValid: false,
        error:
          'NEXT_PUBLIC_REWARDED_AD_UNIT_PATH must start with a leading slash "/" (e.g. /NETWORK_CODE/AD_UNIT_NAME).',
        config,
      };
    }
  }

  return { isValid: true, config };
}
