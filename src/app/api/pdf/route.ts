import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium-min';

import type { ResumeData } from '@/types/resume';
import { buildResumeHtml } from '@/lib/resumeHtml';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

/**
 * Chromium 149 remote pack.
 *
 * IMPORTANT:
 * This must match the installed @sparticuz/chromium-min version.
 */
const CHROMIUM_PACK_URL =
  'https://github.com/Sparticuz/chromium/releases/download/v149.0.0/chromium-v149.0.0-pack.x64.tar';

/**
 * Find a locally installed Chrome/Edge executable.
 *
 * @sparticuz/chromium is Linux-only, so local Windows development
 * must use the Chrome/Edge installed on the machine.
 */
function findLocalChrome(): string | undefined {
  const candidates = [
    // Google Chrome
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',

    // Microsoft Edge
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',

    // macOS
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',

    // Linux
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

/**
 * Launch Puppeteer.
 *
 * Local:
 *   Windows/macOS/Linux installed Chrome/Edge
 *
 * Vercel:
 *   @sparticuz/chromium-min + remote Chromium 149 pack
 */
async function launchBrowser() {
  const isVercel = Boolean(process.env.VERCEL);

  if (!isVercel) {
    const executablePath =
      process.env.CHROME_PATH || findLocalChrome();

    if (!executablePath) {
      throw new Error(
        'Chrome was not found on this computer. Install Google Chrome or set CHROME_PATH in .env.local.'
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

  console.log('[PDF] Running on Vercel');
  console.log('[PDF] Loading Chromium 149...');

  const executablePath = await chromium.executablePath(
    CHROMIUM_PACK_URL
  );

  console.log('[PDF] Chromium executable:', executablePath);

  return puppeteer.launch({
    executablePath,

    args: await chromium.defaultArgs({
      args: chromium.args,
      headless: 'shell',
    }),

    defaultViewport: {
      width: 794,
      height: 1123,
      deviceScaleFactor: 1,
    },

    headless: 'shell',
  });
}

/**
 * Wait until every image in the document has either loaded or failed.
 */
async function waitForImages(page: Awaited<ReturnType<typeof puppeteer.launch>>) {
  const pages = await page.pages();
  const currentPage = pages[pages.length - 1];

  if (!currentPage) {
    return;
  }

  await currentPage.evaluate(async () => {
    const images = Array.from(
      document.querySelectorAll('img')
    ) as HTMLImageElement[];

    await Promise.all(
      images.map(async (img) => {
        if (img.complete) {
          return;
        }

        await new Promise<void>((resolve) => {
          img.addEventListener('load', () => resolve(), {
            once: true,
          });

          img.addEventListener('error', () => resolve(), {
            once: true,
          });
        });
      })
    );
  });
}

/**
 * POST /api/pdf
 */
export async function POST(req: NextRequest) {
  let browser: Awaited<ReturnType<typeof puppeteer.launch>> | null = null;

  try {
    console.log('[PDF] Request received');

    // ─────────────────────────────────────────────
    // Parse request
    // ─────────────────────────────────────────────

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

    // ─────────────────────────────────────────────
    // Basic validation
    // ─────────────────────────────────────────────

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
      '[PDF] Generating resume for:',
      data.personal.fullName || 'Unnamed'
    );

    // ─────────────────────────────────────────────
    // Generate HTML
    // ─────────────────────────────────────────────

    const html = buildResumeHtml(data, {
      compact: false,
    });

    if (!html || html.trim().length === 0) {
      throw new Error('Resume HTML generation returned empty HTML.');
    }

    console.log(
      '[PDF] HTML generated:',
      html.length,
      'characters'
    );

    // ─────────────────────────────────────────────
    // Launch browser
    // ─────────────────────────────────────────────

    browser = await launchBrowser();

    console.log('[PDF] Browser launched');

    const page = await browser.newPage();

    // ─────────────────────────────────────────────
    // A4 viewport
    // ─────────────────────────────────────────────

    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 1,
    });

    // ─────────────────────────────────────────────
    // Load resume HTML
    //
    // DO NOT use networkidle0 here.
    // Google Fonts / external resources can keep
    // networkidle0 waiting unnecessarily.
    // ─────────────────────────────────────────────

    await page.setContent(html, {
      waitUntil: 'domcontentloaded',
    });

    console.log('[PDF] HTML loaded');

    // ─────────────────────────────────────────────
    // Wait for fonts
    // ─────────────────────────────────────────────

    await page.evaluate(async () => {
      if (document.fonts) {
        await document.fonts.ready;
      }
    });

    console.log('[PDF] Fonts loaded');

    // ─────────────────────────────────────────────
    // Wait for images
    // ─────────────────────────────────────────────

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

              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        )
      );
    });

    console.log('[PDF] Images loaded');

    // Give the browser one frame to finish layout.
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 100);
    });

    // ─────────────────────────────────────────────
    // Check content height
    // ─────────────────────────────────────────────

    let contentHeight = await page.evaluate(() => {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
    });

    console.log(
      '[PDF] Initial content height:',
      contentHeight
    );

    // ─────────────────────────────────────────────
    // Compact mode
    //
    // A4 CSS pixel height ≈ 1123px.
    //
    // If the resume is slightly too tall,
    // enable the compact CSS class.
    // ─────────────────────────────────────────────

    if (contentHeight > 1123 && contentHeight <= 1500) {
      console.log('[PDF] Applying compact mode');

      await page.evaluate(() => {
        document.body.classList.add('resume-compact');
      });

      await new Promise<void>((resolve) => {
        setTimeout(resolve, 150);
      });

      contentHeight = await page.evaluate(() => {
        return Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
      });

      console.log(
        '[PDF] Compact content height:',
        contentHeight
      );
    }

    // ─────────────────────────────────────────────
    // Generate PDF
    // ─────────────────────────────────────────────

    console.log('[PDF] Generating PDF...');

    const pdfBuffer = await page.pdf({
      format: 'A4',

      printBackground: true,

      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },

      preferCSSPageSize: true,

      // Puppeteer 25 supports tagged PDF options,
      // but we intentionally keep the output minimal.
    });

    console.log(
      '[PDF] PDF generated:',
      pdfBuffer.length,
      'bytes'
    );

    // ─────────────────────────────────────────────
    // Close browser
    // ─────────────────────────────────────────────

    await browser.close();
    browser = null;

    // ─────────────────────────────────────────────
    // Safe filename
    // ─────────────────────────────────────────────

    const sanitizedName = (
      data.personal.fullName || 'my'
    )
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const filename = `${
      sanitizedName || 'my'
    }-resume.pdf`;

    // ─────────────────────────────────────────────
    // Return PDF
    // ─────────────────────────────────────────────

    return new NextResponse(pdfBuffer, {
      status: 200,

      headers: {
        'Content-Type': 'application/pdf',

        'Content-Disposition':
          `attachment; filename="${filename}"`,

        'Content-Length': String(pdfBuffer.length),

        'Cache-Control':
          'no-store, no-cache, must-revalidate, proxy-revalidate',

        Pragma: 'no-cache',

        Expires: '0',
      },
    });
  } catch (error) {
    console.error('[PDF] Generation failed:', error);

    if (browser) {
      try {
        await browser.close();
      } catch (closeError) {
        console.error(
          '[PDF] Failed to close browser:',
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