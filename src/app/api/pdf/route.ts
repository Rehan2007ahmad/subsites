import { NextRequest, NextResponse } from 'next/server';
import type { ResumeData } from '@/types/resume';
import { buildResumeHtml } from '@/lib/resumeHtml';

// ─────────────────────────────────────────────────────────────────────────────
// RUNTIME: Force Node.js — this route MUST NOT run as Edge Runtime.
// Edge Runtime has no support for native binaries, child_process, or fs.
// ─────────────────────────────────────────────────────────────────────────────
export const runtime = 'nodejs';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

// ─────────────────────────────────────────────────────────────────────────────
// Chromium binary pack URL for @sparticuz/chromium-min.
// Downloaded at RUNTIME on first /api/pdf call — never during next build.
// ─────────────────────────────────────────────────────────────────────────────
const CHROMIUM_PACK_URL =
  'https://github.com/Sparticuz/chromium/releases/download/v133.0.0/chromium-v133.0.0-pack.tar';

// ─────────────────────────────────────────────────────────────────────────────
// Minimal type-safe interfaces for the dynamically loaded packages.
// We use require() at runtime so the static bundler (Webpack / Turbopack / NFT)
// never tries to trace, bundle, or walk the puppeteer-core ESM tree.
// ─────────────────────────────────────────────────────────────────────────────
interface ChromiumModule {
  args: string[];
  defaultViewport: { width: number; height: number } | null;
  executablePath(packUrl?: string): Promise<string>;
  headless: boolean;
}

interface BrowserPage {
  setViewport(opts: { width: number; height: number; deviceScaleFactor?: number }): Promise<void>;
  setContent(html: string, opts?: { waitUntil?: string[] }): Promise<void>;
  evaluate<T>(fn: (...args: unknown[]) => T | Promise<T>): Promise<T>;
  pdf(opts?: {
    format?: string;
    printBackground?: boolean;
    margin?: { top?: number; right?: number; bottom?: number; left?: number };
    preferCSSPageSize?: boolean;
  }): Promise<Buffer>;
  close(): Promise<void>;
}

interface BrowserInstance {
  newPage(): Promise<BrowserPage>;
  close(): Promise<void>;
}

interface PuppeteerModule {
  launch(opts: {
    executablePath?: string;
    args?: string[];
    defaultViewport?: { width: number; height: number } | null;
    headless?: boolean;
  }): Promise<BrowserInstance>;
}

// ─────────────────────────────────────────────────────────────────────────────
// getBrowser()
//
// Uses require() instead of await import() so that Webpack, Turbopack, and
// Next.js Node File Tracer (NFT) cannot statically analyze the dependency.
//
// puppeteer-core v24 ships a "browser" field in package.json pointing to
// puppeteer-core-browser.js (ESM). The bundler resolves this field even for
// server code, causing NFT to walk thousands of files in lib/esm/ and time
// out Vercel builds at 45 minutes.
//
// require() is opaque to static analysis — the packages are externalized via
// serverExternalPackages in next.config.ts and Node.js resolves them at
// request time from node_modules.
// ─────────────────────────────────────────────────────────────────────────────
async function getBrowser(): Promise<BrowserInstance> {
  const isVercel = Boolean(
    process.env.VERCEL || process.env.AWS_EXECUTION_ENV
  );

  if (isVercel) {
    // Vercel / serverless: use @sparticuz/chromium-min with remote binary pack
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const chromium = require('@sparticuz/chromium-min') as ChromiumModule;
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const puppeteer = require('puppeteer-core') as PuppeteerModule;

    let executablePath: string;
    try {
      executablePath = await chromium.executablePath(CHROMIUM_PACK_URL);
    } catch {
      executablePath = await chromium.executablePath();
    }

    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless,
    });
  }

  // ── Local development ────────────────────────────────────────────────────
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const puppeteer = require('puppeteer-core') as PuppeteerModule;

  const executablePath =
    process.env.CHROME_PATH ||
    (() => {
      const { existsSync } = require('fs') as typeof import('fs');
      const candidates = [
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
      return candidates.find((p) => { try { return existsSync(p); } catch { return false; } });
    })();

  if (!executablePath) {
    throw new Error(
      'Chrome not found. Install Google Chrome or set CHROME_PATH in your .env.local.'
    );
  }

  return puppeteer.launch({
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
}

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/pdf
// ─────────────────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  let browser: BrowserInstance | undefined;

  try {
    let data: ResumeData;
    try {
      data = (await req.json()) as ResumeData;
    } catch {
      return NextResponse.json({ error: 'Invalid JSON request payload' }, { status: 400 });
    }

    if (!data?.personal || !data?.settings) {
      return NextResponse.json({ error: 'Invalid resume data structure' }, { status: 400 });
    }

    // Generate the HTML string server-side (pure TypeScript, no React DOM)
    const html = buildResumeHtml(data, { compact: false });

    // Launch Chromium — only happens at request time, never during next build
    browser = await getBrowser();
    const page = await browser.newPage();

    // A4 at 96 DPI: 794 × 1123 px
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 });

    // Load HTML and wait for fonts + network to settle
    await page.setContent(html, { waitUntil: ['networkidle0', 'domcontentloaded'] });

    // Wait for Google Fonts to finish loading
    await page.evaluate(() => document.fonts?.ready);

    // Wait for all images (e.g. base64 profile photo) to load
    await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img'));
      await Promise.all(
        imgs.map((img) => {
          if ((img as HTMLImageElement).complete) return Promise.resolve();
          return new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          });
        })
      );
    });

    // Smart 1-page auto-fit:
    // If content overflows by less than ~30%, apply compact spacing to fit 1 page.
    const scrollHeight = await page.evaluate(() =>
      Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
    );

    if (scrollHeight > 1123 && scrollHeight <= 1450) {
      await page.evaluate(() => document.body.classList.add('resume-compact'));
      // Allow compact CSS to re-layout
      await new Promise<void>((r) => setTimeout(r, 120));
    }

    // Generate exact A4 PDF — margins controlled by the resume CSS (@page)
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true,
    });

    await browser.close();
    browser = undefined;

    // Safe filename: "john-doe-resume.pdf"
    const sanitizedName = data.personal.fullName
      ? data.personal.fullName
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
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
      try {
        await browser.close();
      } catch {}
    }
    return NextResponse.json({ error: `PDF generation failed: ${message}` }, { status: 500 });
  }
}
