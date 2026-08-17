'use client';

/**
 * PDF Generation — clone-and-print approach
 *
 * How it works:
 *  1. Find #resume-preview (the live, styled A4 div)
 *  2. Deep-clone it into a hidden <div id="print-root">
 *  3. Inject a <style> that hides everything except #print-root on @media print
 *  4. Call window.print() — browser renders it as a clean A4 PDF
 *  5. Restore original state after the print dialog closes
 *
 * Why this beats html2canvas + jsPDF:
 *  - Uses the real DOM + real CSS — no rendering artifacts
 *  - Produces text-based, selectable, searchable PDFs
 *  - Works on every browser including mobile
 *  - Works on Vercel, Cloudflare, any hosting
 *  - No external library needed at runtime (jspdf/html2canvas no longer used)
 *  - Multi-page handled automatically by the browser print engine
 */

import type { ResumeData } from '@/types/resume';

export async function generateResumePdf(
  // data param kept for API compatibility — not used in clone approach
  _data: ResumeData,
  filename = 'resume-tooleka.pdf',
): Promise<void> {
  const el = document.getElementById('resume-preview');
  if (!el) throw new Error('#resume-preview not found.');

  // 1. Create a print container
  const printRoot = document.createElement('div');
  printRoot.id = 'pdf-print-root';

  // 2. Clone the resume element at natural 794px (strip the CSS transform first)
  const transformWrapper = el.parentElement as HTMLElement;
  const savedTransform   = transformWrapper?.style.transform ?? '';
  const savedWidth       = transformWrapper?.style.width ?? '';

  if (transformWrapper) {
    transformWrapper.style.transform = 'none';
    transformWrapper.style.width     = '794px';
  }

  // Allow one repaint at 1:1 scale before cloning
  await new Promise<void>(r => requestAnimationFrame(() => requestAnimationFrame(() => r())));

  // Deep-clone with computed styles preserved (cloneNode keeps inline styles)
  const clone = el.cloneNode(true) as HTMLElement;
  clone.style.width    = '794px';
  clone.style.minHeight = '1123px';
  clone.removeAttribute('id'); // avoid duplicate IDs
  printRoot.appendChild(clone);

  // 3. Restore transform on the live preview immediately
  if (transformWrapper) {
    transformWrapper.style.transform = savedTransform;
    transformWrapper.style.width     = savedWidth;
  }

  // 4. Inject print styles
  const style = document.createElement('style');
  style.id = 'pdf-print-styles';
  style.textContent = `
    @media print {
      /* Hide everything */
      body > *:not(#pdf-print-root) { display: none !important; }
      #pdf-print-root {
        display: block !important;
        position: static !important;
        width: 210mm !important;
        margin: 0 !important;
        padding: 0 !important;
        background: #fff !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      @page {
        size: A4 portrait;
        margin: 0;
      }
    }
    @media screen {
      #pdf-print-root { display: none; }
    }
  `;

  // 5. Mount and print
  document.head.appendChild(style);
  document.body.appendChild(printRoot);

  return new Promise<void>((resolve) => {
    // Use afterprint event to clean up
    function cleanup() {
      window.removeEventListener('afterprint', cleanup);
      try { document.head.removeChild(style);   } catch {}
      try { document.body.removeChild(printRoot); } catch {}
      resolve();
    }

    window.addEventListener('afterprint', cleanup);

    // Trigger print
    setTimeout(() => {
      window.print();
      // Fallback cleanup if afterprint doesn't fire (some browsers)
      setTimeout(cleanup, 3000);
    }, 100);
  });
}
