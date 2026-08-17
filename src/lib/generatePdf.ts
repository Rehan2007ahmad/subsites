'use client';

/**
 * PDF Generation — direct download, no print dialog
 *
 * Strategy:
 *  1. Grab the live #resume-preview element (already perfectly styled)
 *  2. Temporarily move it out of its CSS transform wrapper so it sits
 *     at natural 794 px with no scale distortion
 *  3. Capture with html2canvas at 2× scale
 *  4. Pack into jsPDF and trigger a real file download
 *  5. Restore the transform immediately
 *
 * This avoids the print dialog entirely and produces a real PDF file.
 */

import type { ResumeData } from '@/types/resume';

const A4_W_MM = 210;
const A4_H_MM = 297;

export async function generateResumePdf(
  _data: ResumeData,
  filename = 'resume-tooleka.pdf',
): Promise<void> {
  const el = document.getElementById('resume-preview');
  if (!el) throw new Error('#resume-preview not found.');

  // ── 1. Strip the CSS transform so html2canvas sees natural 794 px ──────
  const wrapper = el.parentElement as HTMLElement; // this has transform:scale()
  const saved = {
    transform:      wrapper.style.transform,
    width:          wrapper.style.width,
    minHeight:      wrapper.style.minHeight,
    position:       wrapper.style.position,
  };

  wrapper.style.transform = 'none';
  wrapper.style.width     = '794px';
  wrapper.style.minHeight = '1123px';
  // Move wrapper temporarily outside the overflow:hidden scroll container
  // so html2canvas can measure its full height correctly
  wrapper.style.position  = 'fixed';
  wrapper.style.top       = '0';
  wrapper.style.left      = '0';
  (wrapper.style as CSSStyleDeclaration & { zIndex: string }).zIndex = '-9999';

  // Wait for the browser to repaint at 1:1
  await new Promise<void>(r => requestAnimationFrame(() => requestAnimationFrame(() => r())));

  // ── 2. Dynamically import heavy libraries (only loaded when needed) ─────
  const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ]);

  try {
    // ── 3. Capture ─────────────────────────────────────────────────────────
    const canvas = await html2canvas(el, {
      scale: 2,                   // retina quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      // Tell html2canvas the exact pixel dimensions to capture
      width:  794,
      height: el.scrollHeight,
      windowWidth:  794,
      windowHeight: el.scrollHeight,
      // Ignore elements that might bleed outside (scrollbars etc.)
      ignoreElements: (node: Element) => {
        if (node === el) return false;
        // Skip any fixed/sticky UI elements outside the resume
        const s = window.getComputedStyle(node);
        return s.position === 'fixed' && node !== el;
      },
    });

    // ── 4. Build PDF ────────────────────────────────────────────────────────
    const imgW  = A4_W_MM;
    const imgH  = (canvas.height / canvas.width) * A4_W_MM; // proportional

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Convert canvas to a data URL once (reuse across pages)
    const imgData = canvas.toDataURL('image/jpeg', 0.95);

    // Page 1
    pdf.addImage(imgData, 'JPEG', 0, 0, imgW, imgH, '', 'FAST');

    // Additional pages if resume is taller than one A4
    let remaining = imgH - A4_H_MM;
    let offsetY   = -A4_H_MM;
    while (remaining > 2) {
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, offsetY, imgW, imgH, '', 'FAST');
      offsetY   -= A4_H_MM;
      remaining -= A4_H_MM;
    }

    // ── 5. Download ─────────────────────────────────────────────────────────
    pdf.save(filename);

  } finally {
    // Always restore — even if capture fails
    wrapper.style.transform = saved.transform;
    wrapper.style.width     = saved.width;
    wrapper.style.minHeight = saved.minHeight;
    wrapper.style.position  = saved.position;
    wrapper.style.top       = '';
    wrapper.style.left      = '';
    (wrapper.style as CSSStyleDeclaration & { zIndex: string }).zIndex = '';
  }
}
