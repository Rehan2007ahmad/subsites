'use client';

/**
 * PDF Generation — direct download, no print dialog
 *
 * Root cause of "Unable to find element in cloned iframe":
 *   html2canvas clones the entire document into a hidden iframe to measure
 *   layout. If the target element is inside overflow:hidden / transform /
 *   stacking contexts, the clone loses the element reference.
 *
 * Solution:
 *   Render the resume template into a brand-new, completely isolated
 *   top-level container that has NONE of those constraints, capture it
 *   with html2canvas, then remove it. The live preview is never touched.
 *
 * This works on every browser and every hosting provider including Vercel.
 */

import type { ResumeData } from '@/types/resume';
import React from 'react';
import { createRoot } from 'react-dom/client';

const A4_W_MM  = 210;
const A4_H_MM  = 297;
const A4_W_PX  = 794;   // px at 96 dpi

export async function generateResumePdf(
  data: ResumeData,
  filename = 'resume-tooleka.pdf',
): Promise<void> {

  // ── 1. Pick the right template component ──────────────────────────────
  const { ClassicTemplate }   = await import('@/components/resume/templates/ClassicTemplate');
  const { ModernTemplate }    = await import('@/components/resume/templates/ModernTemplate');
  const { MinimalTemplate }   = await import('@/components/resume/templates/MinimalTemplate');
  const { DeveloperTemplate } = await import('@/components/resume/templates/DeveloperTemplate');
  const { StudentTemplate }   = await import('@/components/resume/templates/StudentTemplate');

  const TEMPLATE_MAP: Record<string, React.ComponentType<{ data: ResumeData }>> = {
    classic:   ClassicTemplate,
    modern:    ModernTemplate,
    minimal:   MinimalTemplate,
    developer: DeveloperTemplate,
    student:   StudentTemplate,
  };

  const Template = TEMPLATE_MAP[data.settings.template] ?? ClassicTemplate;

  // ── 2. Mount into a clean top-level container ──────────────────────────
  // Position absolute at top-left, behind everything, exact A4 width,
  // NO overflow:hidden parent, NO transform, NO stacking context tricks.
  const host = document.createElement('div');
  host.style.cssText = [
    'position:absolute',
    'top:0',
    'left:0',
    `width:${A4_W_PX}px`,
    'min-height:1123px',
    'background:#fff',
    'z-index:-1',
    'pointer-events:none',
    'overflow:visible',
    'display:block',
  ].join(';');
  document.body.appendChild(host);

  // Mount the React component into the host
  const root = createRoot(host);
  await new Promise<void>(resolve => {
    root.render(React.createElement(Template, { data }));
    // Two rAF cycles: first for React paint, second for browser layout
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

  // ── 3. Load heavy libs (dynamic — only fetched on first click) ─────────
  const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ]);

  try {
    // ── 4. Capture ──────────────────────────────────────────────────────
    const canvas = await html2canvas(host, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width:        A4_W_PX,
      windowWidth:  A4_W_PX,
      // Capture the full rendered height, not just the viewport
      height:       host.scrollHeight,
      windowHeight: host.scrollHeight,
    });

    // ── 5. Build PDF ────────────────────────────────────────────────────
    const imgW  = A4_W_MM;
    const imgH  = (canvas.height / canvas.width) * A4_W_MM;
    const imgData = canvas.toDataURL('image/jpeg', 0.95);

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    pdf.addImage(imgData, 'JPEG', 0, 0, imgW, imgH, '', 'FAST');

    // Additional pages for long resumes
    let remaining = imgH - A4_H_MM;
    let offsetY   = -A4_H_MM;
    while (remaining > 2) {
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, offsetY, imgW, imgH, '', 'FAST');
      offsetY   -= A4_H_MM;
      remaining -= A4_H_MM;
    }

    // ── 6. Download ─────────────────────────────────────────────────────
    pdf.save(filename);

  } finally {
    // Always clean up the off-screen mount
    root.unmount();
    document.body.removeChild(host);
  }
}
