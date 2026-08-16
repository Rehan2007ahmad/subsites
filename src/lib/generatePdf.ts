'use client';

/**
 * PDF Generation using html2canvas + jsPDF
 * Renders the A4 preview element to a canvas, then embeds in a PDF.
 * Supports multi-page resumes.
 */

export async function generateResumePdf(
  elementId: string,
  filename = 'resume-tooleka.pdf'
): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Resume element not found. Cannot generate PDF.');
  }

  // Dynamic imports – libraries are only loaded when PDF is requested
  const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ]);

  const A4_WIDTH_MM = 210;
  const A4_HEIGHT_MM = 297;
  const SCALE = 2; // retina quality

  try {
    const canvas = await html2canvas(element, {
      scale: SCALE,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      // Remove any scrollbar artefacts
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    const imgWidth = A4_WIDTH_MM;
    const pageHeightPx = canvas.width * (A4_HEIGHT_MM / A4_WIDTH_MM);
    const imgHeight = (canvas.height * A4_WIDTH_MM) / canvas.width;

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    let remainingHeight = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(
      canvas.toDataURL('image/jpeg', 0.97),
      'JPEG',
      0,
      position,
      imgWidth,
      imgHeight,
      '',
      'FAST'
    );
    remainingHeight -= A4_HEIGHT_MM;

    // Additional pages if resume overflows
    while (remainingHeight > 0) {
      position -= A4_HEIGHT_MM;
      pdf.addPage();
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 0.97),
        'JPEG',
        0,
        position,
        imgWidth,
        imgHeight,
        '',
        'FAST'
      );
      remainingHeight -= A4_HEIGHT_MM;
    }

    pdf.save(filename);
  } catch (error) {
    console.error('PDF generation failed:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
}
