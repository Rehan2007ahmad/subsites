'use client';

import type { ResumeData } from '@/types/resume';

/**
 * Client-side PDF download.
 *
 * Sends resume data to /api/pdf (server route that runs Puppeteer + Chromium).
 * Receives a PDF blob and triggers a real file download — no print dialog.
 */
export async function generateResumePdf(
  data: ResumeData,
  filename?: string,
): Promise<void> {
  const response = await fetch('/api/pdf', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(data),
  });

  if (!response.ok) {
    // Try to extract a useful error message from the response body
    let msg = `Server error ${response.status}`;
    try {
      const body = await response.json() as { error?: string };
      if (body.error) msg = body.error;
    } catch {}
    throw new Error(msg);
  }

  // Get the suggested filename from Content-Disposition if available
  const disposition = response.headers.get('Content-Disposition') ?? '';
  const match = disposition.match(/filename="?([^";]+)"?/);

  const fallbackName = data.personal?.fullName
    ? `${data.personal.fullName.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-')}-resume.pdf`
    : 'my-resume.pdf';

  const name = filename ?? match?.[1] ?? fallbackName;

  // Convert response to blob and trigger download
  const blob = await response.blob();
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
