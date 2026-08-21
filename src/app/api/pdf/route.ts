import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium-min';

import type { ResumeData } from '@/types/resume';
import { buildResumeHtml } from '@/lib/resumeHtml';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const CHROMIUM_PACK_URL =
  'https://github.com/Sparticuz/chromium/releases/download/v149.0.0/chromium-v149.0.0-pack.x64.tar';

function findLocalChrome(): string | undefined {
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

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require('fs') as typeof import('fs');

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
  const isVercel = Boolean(process.env.VERCEL);

  // ============================================================
  // LOCAL DEVELOPMENT
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

  console.log('[PDF] Vercel environment detected');
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

    defaultViewport: {
      width: 794,
      height: 1123,
      deviceScaleFactor: 1,
    },

    headless: true,
  });
}

export async function POST(req: NextRequest) {
  let browser: Awaited<
    ReturnType<typeof puppeteer.launch>
  > | null = null;

  try {
    console.log('[PDF] =============================');
    console.log('[PDF] PDF request received');
    console.log('[PDF] =============================');

    // ==========================================================
    // READ REQUEST
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
    // BUILD HTML
    // ==========================================================

    console.log('[PDF] Building HTML...');

    const html = buildResumeHtml(data, {
      compact: false,
    });

    if (!html || !html.trim()) {
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
    // LAUNCH CHROME
    // ==========================================================

    console.log('[PDF] Launching browser...');

    browser = await launchBrowser();

    console.log('[PDF] Browser launched');

    // ==========================================================
    // CREATE PAGE
    // ==========================================================

    const page = await browser.newPage();

    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 1,
    });

    console.log('[PDF] Page created');

    // ==========================================================
    // LOAD HTML
    // ==========================================================

    await page.setContent(html, {
      waitUntil: 'domcontentloaded',
    });

    console.log('[PDF] HTML loaded');

    // ==========================================================
    // WAIT FOR FONTS
    // ==========================================================

    await page.evaluate(async () => {
      if (document.fonts) {
        await document.fonts.ready;
      }
    });

    console.log('[PDF] Fonts ready');

    // ==========================================================
    // WAIT FOR IMAGES
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

    // Give Chrome a moment to finish layout.
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 100);
    });

    // ==========================================================
    // MEASURE CONTENT
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
    // COMPACT MODE
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
    // CREATE PDF
    // ==========================================================

    console.log('[PDF] Creating PDF...');

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
      '[PDF] PDF created:',
      pdf.byteLength,
      'bytes'
    );

    // ==========================================================
    // CLOSE BROWSER
    // ==========================================================

    await browser.close();
    browser = null;

    console.log('[PDF] Browser closed');

    // ==========================================================
    // FILENAME
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
    // RETURN PDF
    // ==========================================================

    // Convert Uint8Array -> ArrayBuffer so NextResponse
    // accepts it cleanly with Next.js/TypeScript.
    const pdfArrayBuffer = new Uint8Array(pdf).buffer;

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
    console.error(
      '[PDF] ============================='
    );

    console.error(
      '[PDF] PDF GENERATION FAILED'
    );

    console.error(
      '[PDF]',
      error
    );

    console.error(
      '[PDF] ============================='
    );

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