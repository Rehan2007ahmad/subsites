import { NextRequest, NextResponse } from 'next/server';
import type { ResumeData } from '@/types/resume';
import { buildResumeHtml } from '@/lib/resumeHtml';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const CHROMIUM_PACK_URL =
  'https://github.com/Sparticuz/chromium/releases/download/v149.0.0/chromium-v149.0.0-pack.x64.tar';

function findLocalChrome(): string | undefined {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require('fs') as typeof import('fs');

  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',

    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',

    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ];

  for (const path of candidates) {
    try {
      if (fs.existsSync(path)) {
        return path;
      }
    } catch {
      // Ignore invalid paths.
    }
  }

  return undefined;
}

async function launchBrowser() {
  /*
   * IMPORTANT:
   * These imports are intentionally inside the function.
   *
   * This prevents Turbopack from eagerly processing the
   * Puppeteer/Chromium dependency tree while compiling
   * /api/pdf.
   */

  const { default: puppeteer } = await import(
    'puppeteer-core'
  );

  const isVercel = Boolean(process.env.VERCEL);

  // ============================================================
  // LOCAL
  // ============================================================

  if (!isVercel) {
    const executablePath =
      process.env.CHROME_PATH || findLocalChrome();

    if (!executablePath) {
      throw new Error(
        'Chrome was not found. Install Google Chrome or set CHROME_PATH in .env.local.'
      );
    }

    console.log('[PDF] Local Chrome:', executablePath);

    return puppeteer.launch({
      executablePath,

      headless: true,

      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-software-rasterizer',
        '--no-first-run',
        '--no-zygote',
      ],

      defaultViewport: {
        width: 794,
        height: 1123,
        deviceScaleFactor: 1,
      },
    });
  }

  // ============================================================
  // VERCEL
  // ============================================================

  console.log('[PDF] Vercel detected');

  const { default: chromium } = await import(
    '@sparticuz/chromium-min'
  );

  console.log('[PDF] Loading Chromium 149...');

  const executablePath =
    await chromium.executablePath(CHROMIUM_PACK_URL);

  console.log(
    '[PDF] Chromium executable:',
    executablePath
  );

  return puppeteer.launch({
    executablePath,

    args: chromium.args,

    headless: true,

    defaultViewport: {
      width: 794,
      height: 1123,
      deviceScaleFactor: 1,
    },
  });
}

export async function POST(req: NextRequest) {
  let browser: Awaited<
    ReturnType<typeof launchBrowser>
  > | null = null;

  try {
    console.log('[PDF] ===========================');
    console.log('[PDF] Request received');
    console.log('[PDF] ===========================');

    // ==========================================================
    // Parse request
    // ==========================================================

    let data: ResumeData;

    try {
      data = (await req.json()) as ResumeData;
    } catch {
      return NextResponse.json(
        {
          error: 'Invalid JSON request payload.',
        },
        {
          status: 400,
        }
      );
    }

    if (!data?.personal || !data?.settings) {
      return NextResponse.json(
        {
          error: 'Invalid resume data structure.',
        },
        {
          status: 400,
        }
      );
    }

    console.log(
      '[PDF] Resume:',
      data.personal.fullName || 'Unnamed'
    );

    // ==========================================================
    // Generate HTML
    // ==========================================================

    console.log('[PDF] Building HTML...');

    const html = buildResumeHtml(data, {
      compact: false,
    });

    if (!html?.trim()) {
      throw new Error(
        'buildResumeHtml() returned empty HTML.'
      );
    }

    console.log(
      '[PDF] HTML generated:',
      html.length,
      'characters'
    );

    // ==========================================================
    // Launch browser
    // ==========================================================

    console.log('[PDF] Launching browser...');

    browser = await launchBrowser();

    console.log('[PDF] Browser launched');

    // ==========================================================
    // Create page
    // ==========================================================

    const page = await browser.newPage();

    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 1,
    });

    console.log('[PDF] Page created');

    // ==========================================================
    // Load HTML
    // ==========================================================

    await page.setContent(html, {
      waitUntil: 'domcontentloaded',
    });

    console.log('[PDF] HTML loaded');

    // ==========================================================
    // Fonts
    // ==========================================================

    await page.evaluate(async () => {
      if (document.fonts) {
        await document.fonts.ready;
      }
    });

    console.log('[PDF] Fonts ready');

    // ==========================================================
    // Images
    // ==========================================================

    await page.evaluate(async () => {
      const images = Array.from(
        document.querySelectorAll('img')
      ) as HTMLImageElement[];

      await Promise.all(
        images.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) {
                resolve();
                return;
              }

              img.addEventListener(
                'load',
                () => resolve(),
                { once: true }
              );

              img.addEventListener(
                'error',
                () => resolve(),
                { once: true }
              );
            })
        )
      );
    });

    console.log('[PDF] Images ready');

    // Allow browser layout to settle.
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 100);
    });

    // ==========================================================
    // Measure content
    // ==========================================================

    let contentHeight = await page.evaluate(() =>
      Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      )
    );

    console.log(
      '[PDF] Content height:',
      contentHeight
    );

    // ==========================================================
    // Compact mode
    // ==========================================================

    if (contentHeight > 1123 && contentHeight <= 1500) {
      console.log('[PDF] Applying compact mode');

      await page.evaluate(() => {
        document.body.classList.add(
          'resume-compact'
        );
      });

      await new Promise<void>((resolve) => {
        setTimeout(resolve, 150);
      });

      contentHeight = await page.evaluate(() =>
        Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight
        )
      );

      console.log(
        '[PDF] Compact height:',
        contentHeight
      );
    }

    // ==========================================================
    // Generate PDF
    // ==========================================================

    console.log('[PDF] Generating PDF...');

    const pdf = await page.pdf({
      format: 'A4',

      printBackground: true,

      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },

      preferCSSPageSize: true,
    });

    console.log(
      '[PDF] PDF generated:',
      pdf.byteLength,
      'bytes'
    );

    // ==========================================================
    // Close browser
    // ==========================================================

    await browser.close();
    browser = null;

    // ==========================================================
    // Filename
    // ==========================================================

    const sanitizedName = (
      data.personal.fullName || 'my'
    )
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const filename =
      `${sanitizedName || 'my'}-resume.pdf`;

    // ==========================================================
    // Uint8Array → ArrayBuffer
    // ==========================================================

    const pdfArrayBuffer = new Uint8Array(pdf).buffer;

    // ==========================================================
    // Response
    // ==========================================================

    return new NextResponse(pdfArrayBuffer, {
      status: 200,

      headers: {
        'Content-Type': 'application/pdf',

        'Content-Disposition':
          `attachment; filename="${filename}"`,

        'Content-Length':
          String(pdf.byteLength),

        'Cache-Control':
          'no-store, no-cache, must-revalidate, proxy-revalidate',

        Pragma: 'no-cache',

        Expires: '0',
      },
    });
  } catch (error) {
    console.error('[PDF] ===========================');
    console.error('[PDF] GENERATION FAILED');
    console.error('[PDF]', error);
    console.error('[PDF] ===========================');

    if (browser) {
      try {
        await browser.close();
      } catch (closeError) {
        console.error(
          '[PDF] Browser close error:',
          closeError
        );
      }
    }

    const message =
      error instanceof Error
        ? error.message
        : String(error);

    return NextResponse.json(
      {
        error: 'PDF generation failed.',
        details: message,
      },
      {
        status: 500,
      }
    );
  }
}