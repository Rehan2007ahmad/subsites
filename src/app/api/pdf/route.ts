import { NextRequest, NextResponse } from 'next/server';
import type { ResumeData } from '@/types/resume';
import { buildResumeHtml } from '@/lib/resumeHtml';

export const maxDuration = 60; // Vercel: allow up to 60s for PDF generation
export const dynamic = 'force-dynamic';

async function getBrowser() {
  // On Vercel / production: use @sparticuz/chromium
  // Locally: use the system Chrome / bundled chromium from puppeteer
  if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
    const chromium = await import('@sparticuz/chromium');
    const puppeteer = await import('puppeteer-core');

    // chromium.default.args includes all required flags for serverless
    const browser = await puppeteer.default.launch({
      args: chromium.default.args,
      defaultViewport: chromium.default.defaultViewport,
      executablePath: await chromium.default.executablePath(),
      headless: chromium.default.headless,
    });
    return browser;
  }

  // Local development: use puppeteer-core with a local Chrome install
  const puppeteer = await import('puppeteer-core');

  // Try common Chrome paths across platforms
  const chromePaths = [
    // Windows
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    // macOS
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    // Linux
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ];

  const fs = await import('fs');
  const executablePath = chromePaths.find(p => {
    try { return fs.existsSync(p); } catch { return false; }
  });

  if (!executablePath) {
    throw new Error(
      'Chrome not found. Install Google Chrome or set CHROME_PATH env variable.'
    );
  }

  const browser = await puppeteer.default.launch({
    executablePath: process.env.CHROME_PATH || executablePath,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--no-zygote',
    ],
    headless: true,
  });
  return browser;
}

export async function POST(req: NextRequest) {
  let browser;

  try {
    // Parse and validate resume data
    let data: ResumeData;
    try {
      data = await req.json() as ResumeData;
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    if (!data?.personal || !data?.settings) {
      return NextResponse.json({ error: 'Invalid resume data structure' }, { status: 400 });
    }

    // Build the self-contained HTML
    const html = buildResumeHtml(data);

    // Launch Chromium
    browser = await getBrowser();
    const page = await browser.newPage();

    // A4 at 96 dpi = 794 × 1123 px
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 });

    // Load HTML — setContent is more reliable than page.goto('data:...')
    // waitUntil: 'networkidle0' ensures fonts and images finish loading
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Extra wait for any web fonts or remaining paint
    await new Promise(r => setTimeout(r, 200));

    // Generate PDF with exact A4 dimensions, no margins (our HTML handles spacing)
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,    // Required for background colors
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: false,
    });

    await browser.close();
    browser = undefined;

    // Stream PDF back to client
    const name = data.personal.fullName
      ? `${data.personal.fullName.toLowerCase().replace(/\s+/g, '-')}.pdf`
      : 'resume-tooleka.pdf';

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type':        'application/pdf',
        'Content-Disposition': `attachment; filename="${name}"`,
        'Content-Length':      String(pdfBuffer.length),
        'Cache-Control':       'no-store',
      },
    });

  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[PDF API] Error:', err);

    if (browser) {
      try { await browser.close(); } catch {}
    }

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
