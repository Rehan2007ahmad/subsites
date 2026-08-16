'use client';

/**
 * PDF Generation — renders the resume at its natural 794 px width
 * into an off-screen container so zoom level never affects the output.
 */

import type { ResumeData } from '@/types/resume';

const A4_WIDTH_MM  = 210;
const A4_HEIGHT_MM = 297;
// 794 px is exactly A4 at 96 dpi
const A4_WIDTH_PX  = 794;

/**
 * Main entry point called from the builder.
 * Dynamically mounts the chosen template into a hidden off-screen element,
 * captures it with html2canvas, then saves via jsPDF.
 */
export async function generateResumePdf(
  data: ResumeData,
  filename = 'resume-tooleka.pdf',
): Promise<void> {
  // Dynamic imports — only loaded when the user clicks Download
  const [
    { default: html2canvas },
    { default: jsPDF },
    React,
    ReactDOM,
  ] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
    import('react'),
    import('react-dom/client'),
  ]);

  // Pick the right template component
  const { ClassicTemplate }   = await import('@/components/resume/templates/ClassicTemplate');
  const { ModernTemplate }    = await import('@/components/resume/templates/ModernTemplate');
  const { MinimalTemplate }   = await import('@/components/resume/templates/MinimalTemplate');
  const { DeveloperTemplate } = await import('@/components/resume/templates/DeveloperTemplate');
  const { StudentTemplate }   = await import('@/components/resume/templates/StudentTemplate');

  const templateMap = {
    classic:   ClassicTemplate,
    modern:    ModernTemplate,
    minimal:   MinimalTemplate,
    developer: DeveloperTemplate,
    student:   StudentTemplate,
  } as const;

  const Template = templateMap[data.settings.template] ?? ClassicTemplate;

  // ── Build a hidden off-screen container ──────────────────────────────────
  const container = document.createElement('div');
  container.style.cssText = [
    `position:fixed`,
    `top:0`,
    `left:0`,
    `width:${A4_WIDTH_PX}px`,
    `min-height:${A4_WIDTH_PX * (A4_HEIGHT_MM / A4_WIDTH_MM)}px`,
    `background:#fff`,
    `z-index:-9999`,
    `pointer-events:none`,
    `overflow:visible`,
  ].join(';');
  document.body.appendChild(container);

  // Mount template with React
  const root = ReactDOM.createRoot(container);
  await new Promise<void>((resolve) => {
    root.render(
      React.createElement(Template, { data }),
    );
    // Allow one paint cycle so fonts / Tailwind styles apply
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

  try {
    const canvas = await html2canvas(container, {
      scale: 2,               // retina quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: A4_WIDTH_PX,
      windowWidth: A4_WIDTH_PX,
    });

    const imgWidthMM  = A4_WIDTH_MM;
    const imgHeightMM = (canvas.height / canvas.width) * A4_WIDTH_MM;

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    let remaining = imgHeightMM;
    let yOffset   = 0;

    // First page
    pdf.addImage(
      canvas.toDataURL('image/jpeg', 0.95),
      'JPEG',
      0, yOffset,
      imgWidthMM, imgHeightMM,
      '', 'FAST',
    );
    remaining -= A4_HEIGHT_MM;

    // Extra pages for long resumes
    while (remaining > 0) {
      yOffset -= A4_HEIGHT_MM;
      pdf.addPage();
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 0.95),
        'JPEG',
        0, yOffset,
        imgWidthMM, imgHeightMM,
        '', 'FAST',
      );
      remaining -= A4_HEIGHT_MM;
    }

    pdf.save(filename);
  } finally {
    root.unmount();
    document.body.removeChild(container);
  }
}
