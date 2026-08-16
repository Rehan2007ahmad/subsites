'use client';

/**
 * PDF Generation
 *
 * Captures #resume-preview directly with html2canvas.
 * Before capturing we temporarily strip the CSS transform from its parent
 * so the element renders at natural 794 px — then restore everything.
 */

const A4_WIDTH_MM  = 210;
const A4_HEIGHT_MM = 297;

export async function generateResumePdf(
  filename = 'resume-tooleka.pdf',
): Promise<void> {

  const el = document.getElementById('resume-preview');
  if (!el) throw new Error('Resume preview element (#resume-preview) not found.');

  // The direct parent holds the CSS transform
  const transformEl = el.parentElement as HTMLElement;
  if (!transformEl) throw new Error('Transform wrapper not found.');

  // Save current styles
  const savedTransform = transformEl.style.transform;
  const savedWidth     = transformEl.style.width;
  const savedMinHeight = transformEl.style.minHeight;

  // Strip transform so html2canvas sees the element at 1:1 scale
  transformEl.style.transform  = 'none';
  transformEl.style.width      = '794px';
  transformEl.style.minHeight  = '1123px';

  // Let the browser repaint before capturing
  await new Promise<void>(resolve =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
  );

  const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ]);

  try {
    const canvas = await html2canvas(el, {
      scale: 2,                         // retina quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width:        794,
      windowWidth:  794,
      windowHeight: Math.max(el.scrollHeight, 1123),
    });

    const imgWidthMM  = A4_WIDTH_MM;
    const imgHeightMM = (canvas.height / canvas.width) * A4_WIDTH_MM;

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // First page
    pdf.addImage(
      canvas.toDataURL('image/jpeg', 0.97),
      'JPEG',
      0, 0,
      imgWidthMM, imgHeightMM,
      '', 'FAST',
    );

    // Additional pages for resumes longer than one A4
    let remaining = imgHeightMM - A4_HEIGHT_MM;
    let pageY     = -A4_HEIGHT_MM;

    while (remaining > 1) {
      pdf.addPage();
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 0.97),
        'JPEG',
        0, pageY,
        imgWidthMM, imgHeightMM,
        '', 'FAST',
      );
      pageY     -= A4_HEIGHT_MM;
      remaining -= A4_HEIGHT_MM;
    }

    pdf.save(filename);

  } finally {
    // Always restore transform so the live preview stays intact
    transformEl.style.transform  = savedTransform;
    transformEl.style.width      = savedWidth;
    transformEl.style.minHeight  = savedMinHeight;
  }
}
