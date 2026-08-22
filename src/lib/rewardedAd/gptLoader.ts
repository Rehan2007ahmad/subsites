/**
 * Safe client-side loader for the Google Publisher Tag (GPT) library.
 * Ensures the script is only loaded once in the browser and handles timeout/errors.
 */

const GPT_SCRIPT_URL = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
const GPT_LOAD_TIMEOUT_MS = 10000;

let gptLoadingPromise: Promise<boolean> | null = null;

export function loadGptScript(): Promise<boolean> {
  if (typeof window === 'undefined') {
    return Promise.resolve(false);
  }

  // If window.googletag is already ready
  if (window.googletag && window.googletag.apiReady) {
    return Promise.resolve(true);
  }

  if (gptLoadingPromise) {
    return gptLoadingPromise;
  }

  gptLoadingPromise = new Promise<boolean>((resolve, reject) => {
    // Initialize cmd queue if not present
    window.googletag = window.googletag || ({ cmd: [] } as unknown as typeof window.googletag);

    // Check if script tag is already in document
    const existingScript = document.querySelector(`script[src="${GPT_SCRIPT_URL}"]`);
    if (existingScript) {
      if (window.googletag?.apiReady) {
        resolve(true);
        return;
      }
      // Wait for cmd queue to execute
      window.googletag?.cmd.push(() => {
        resolve(true);
      });
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const script = document.createElement('script');
    script.src = GPT_SCRIPT_URL;
    script.async = true;
    script.crossOrigin = 'anonymous';

    const cleanup = () => {
      if (timeoutId) clearTimeout(timeoutId);
    };

    script.onload = () => {
      cleanup();
      window.googletag?.cmd.push(() => {
        resolve(true);
      });
    };

    script.onerror = () => {
      cleanup();
      gptLoadingPromise = null;
      reject(new Error('Failed to load Google Publisher Tag (GPT) script.'));
    };

    timeoutId = setTimeout(() => {
      cleanup();
      gptLoadingPromise = null;
      reject(new Error('Timed out waiting for Google Publisher Tag (GPT) script to load.'));
    }, GPT_LOAD_TIMEOUT_MS);

    document.head.appendChild(script);
  });

  return gptLoadingPromise;
}
