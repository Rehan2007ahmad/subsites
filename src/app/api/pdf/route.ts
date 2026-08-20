import { NextRequest, NextResponse } from 'next/server';
import type { ResumeData } from '@/types/resume';
import { buildResumeHtml } from '@/lib/resumeHtml';

// Force Node.js runtime — this route MUST NOT run in Edge Runtime.
// Edge Runtime does not support Puppeteer, child_process, or native binaries.
export const runtime = 'nodejs';
export const maxDuration = 60; // Vercel: allow up to 60s for PDF generation
export const dynamic = 'force-dynamic';

const CHROMIUM_PACK_URL =
  'https://github.com/Sparticuz/chromium/releases/download/v133.0.0/chromium-v133.0.0-pack.tar';

async function getBrowser() {
  const isServerless = Boolean(
    process.env.VERCEL || process.env.NODE_ENV === 'production' || process.env.AWS_EXECUTION_ENV
  );

  if (isServerless) {
    const chromiumPkg = await import('@sparticuz/chromium-min');
    const chromium = chromiumPkg.default || chromiumPkg;

    const puppeteerPkg = await import('puppeteer-core');
    const puppeteer = puppeteerPkg.default || puppeteerPkg;

    let executablePath: string;
    try {
      executablePath = await chromium.executablePath(CHROMIUM_PACK_URL);
    } catch {
      executablePath = await chromium.executablePath();
    }

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless,
    });
    return browser;
  }

  // Local development: use puppeteer-core with a local Chrome/Edge install
  const puppeteerPkg = await import('puppeteer-core');
  const puppeteer = puppeteerPkg.default || puppeteerPkg;

  if (process.env.CHROME_PATH) {
    return await puppeteer.launch({
      executablePath: process.env.CHROME_PATH,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
      headless: true,
    });
  }

  const chromePaths = [
    // Windows
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
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
      'Chrome executable not found on local machine. Please install Google Chrome or set the CHROME_PATH environment variable.'
    );
  }

  const browser = await puppeteer.launch({
    executablePath,
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
    let data: ResumeData;
    try {
      data = await req.json() as ResumeData;
    } catch {
      return NextResponse.json({ error: 'Invalid JSON request payload' }, { status: 400 });
    }

    if (!data?.personal || !data?.settings) {
      return NextResponse.json({ error: 'Invalid resume data structure' }, { status: 400 });
    }

    // Build the initial HTML string
    const html = buildResumeHtml(data, { compact: false });

    // Launch Chromium
    browser = await getBrowser();
    const page = await browser.newPage();

    // Standard A4 dimensions at 96 DPI: 794px width x 1123px height
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 });

    // Set page HTML content and wait for network/DOM load
    await page.setContent(html, { waitUntil: ['networkidle0', 'domcontentloaded'] });

    // Ensure all Google Fonts have finished loading
    await page.evaluate(() => document.fonts?.ready);

    // Ensure all image elements are fully loaded
    await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img'));
      await Promise.all(
        imgs.map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );
    });

    // Smart 1-Page Auto-Fit Logic:
    // Measure actual rendered content height
    const scrollHeight = await page.evaluate(() => {
      return Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
    });

    // Standard A4 page height is 1123px.
    // If the content slightly exceeds 1 page (between 1124px and 1450px),
    // enable compact mode to intelligently fit everything onto exactly ONE A4 page.
    if (scrollHeight > 1123 && scrollHeight <= 1450) {
      await page.evaluate(() => {
        document.body.classList.add('resume-compact');
      });
      await new Promise(r => setTimeout(r, 100));
    }

    // Generate exact A4 PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true,
    });

    await browser.close();
    browser = undefined;

    // Sanitize user full name for downloadable filename
    const sanitizedName = data.personal.fullName
      ? data.personal.fullName.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      : 'my';
    const filename = `${sanitizedName}-resume.pdf`;

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': String(pdfBuffer.length),
        'Cache-Control': 'no-store, max-age=0',
      },
    });

  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[PDF API Error]:', err);

    if (browser) {
      try { await browser.close(); } catch {}
    }

    return NextResponse.json(
      { error: `PDF generation failed: ${message}` },
      { status: 500 }
    );
  }
}

