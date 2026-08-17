/**
 * Renders a resume template to a self-contained HTML string.
 * Used by the PDF API route — runs on the server only.
 *
 * All styles are written as plain inline CSS (no Tailwind classes) so they
 * work in the Puppeteer Chromium context without needing a stylesheet.
 * Tailwind classes on the template components are supplemented by a
 * <style> block that re-defines every utility class the templates use.
 */

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ResumeData } from '@/types/resume';
import { ClassicTemplate }   from '@/components/resume/templates/ClassicTemplate';
import { ModernTemplate }    from '@/components/resume/templates/ModernTemplate';
import { MinimalTemplate }   from '@/components/resume/templates/MinimalTemplate';
import { DeveloperTemplate } from '@/components/resume/templates/DeveloperTemplate';
import { StudentTemplate }   from '@/components/resume/templates/StudentTemplate';

const TEMPLATE_MAP: Record<string, React.ComponentType<{ data: ResumeData }>> = {
  classic:   ClassicTemplate,
  modern:    ModernTemplate,
  minimal:   MinimalTemplate,
  developer: DeveloperTemplate,
  student:   StudentTemplate,
};

export function buildResumeHtml(data: ResumeData): string {
  const Template = TEMPLATE_MAP[data.settings.template] ?? ClassicTemplate;
  const body = renderToStaticMarkup(React.createElement(Template, { data }));

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Resume</title>
  <style>
    /* ── Reset ──────────────────────────────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html, body {
      width: 794px;
      background: #fff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      font-family: Arial, Helvetica, sans-serif;
    }

    /* ── Tailwind utility classes used by the templates ─────── */
    /* Layout */
    .flex          { display: flex; }
    .flex-col      { flex-direction: column; }
    .flex-1        { flex: 1 1 0%; }
    .flex-wrap     { flex-wrap: wrap; }
    .items-start   { align-items: flex-start; }
    .items-center  { align-items: center; }
    .items-baseline{ align-items: baseline; }
    .justify-between{justify-content: space-between; }
    .justify-center { justify-content: center; }
    .justify-end   { justify-content: flex-end; }
    .shrink-0      { flex-shrink: 0; }
    .min-w-0       { min-width: 0; }
    .w-full        { width: 100%; }
    .min-h-full    { min-height: 100%; }
    .block         { display: block; }
    .inline        { display: inline; }
    .hidden        { display: none; }

    /* Sizing */
    .w-1  { width: 0.25rem; } .h-1  { height: 0.25rem; }
    .w-1\\.5{ width:0.375rem;} .h-1\\.5{ height:0.375rem;}
    .w-2  { width: 0.5rem; }  .h-2  { height: 0.5rem; }
    .h-4  { height: 1rem; }   .w-4  { width: 1rem; }
    .h-16 { height: 4rem; }   .w-16 { width: 4rem; }
    .h-20 { height: 5rem; }   .w-20 { width: 5rem; }
    .w-\\[35\\%\\] { width: 35%; }

    /* Spacing */
    .gap-1  { gap: 0.25rem; }  .gap-1\\.5{ gap:0.375rem; }
    .gap-2  { gap: 0.5rem; }  .gap-3  { gap: 0.75rem; }
    .gap-x-3{ column-gap:0.75rem; } .gap-x-4{ column-gap:1rem; }
    .gap-y-0\\.5{ row-gap:0.125rem; } .gap-y-1{ row-gap:0.25rem; }
    .gap-y-1\\.5{ row-gap:0.375rem; }
    .space-y-1 > * + * { margin-top: 0.25rem; }
    .space-y-1\\.5 > * + * { margin-top: 0.375rem; }
    .space-y-2 > * + * { margin-top: 0.5rem; }
    .space-y-3 > * + * { margin-top: 0.75rem; }
    .space-y-4 > * + * { margin-top: 1rem; }

    /* Padding */
    .px-1\\.5{ padding-left:0.375rem; padding-right:0.375rem; }
    .px-2  { padding-left:0.5rem; padding-right:0.5rem; }
    .px-2\\.5{ padding-left:0.625rem; padding-right:0.625rem; }
    .px-3  { padding-left:0.75rem; padding-right:0.75rem; }
    .px-5  { padding-left:1.25rem; padding-right:1.25rem; }
    .px-6  { padding-left:1.5rem; padding-right:1.5rem; }
    .px-8  { padding-left:2rem; padding-right:2rem; }
    .px-10 { padding-left:2.5rem; padding-right:2.5rem; }
    .py-0\\.5{ padding-top:0.125rem; padding-bottom:0.125rem; }
    .py-1  { padding-top:0.25rem; padding-bottom:0.25rem; }
    .py-3  { padding-top:0.75rem; padding-bottom:0.75rem; }
    .py-4  { padding-top:1rem; padding-bottom:1rem; }
    .py-5  { padding-top:1.25rem; padding-bottom:1.25rem; }
    .py-6  { padding-top:1.5rem; padding-bottom:1.5rem; }
    .py-8  { padding-top:2rem; padding-bottom:2rem; }
    .py-10 { padding-top:2.5rem; padding-bottom:2.5rem; }
    .pt-1  { padding-top:0.25rem; }  .pt-5 { padding-top:1.25rem; }
    .pt-6  { padding-top:1.5rem; }   .pt-8 { padding-top:2rem; }
    .pb-5  { padding-bottom:1.25rem; }.pb-6 { padding-bottom:1.5rem; }
    .pb-8  { padding-bottom:2rem; }  .p-3  { padding:0.75rem; }
    .p-4   { padding:1rem; }

    /* Margin */
    .mt-0\\.5{ margin-top:0.125rem; }
    .mt-1  { margin-top:0.25rem; }  .mt-1\\.5{ margin-top:0.375rem; }
    .mt-2  { margin-top:0.5rem; }   .mb-1  { margin-bottom:0.25rem; }
    .mb-3  { margin-bottom:0.75rem; }.mb-5  { margin-bottom:1.25rem; }
    .my-4  { margin-top:1rem; margin-bottom:1rem; }
    .mx-auto{ margin-left:auto; margin-right:auto; }

    /* Typography */
    .text-xs   { font-size:0.75rem;  line-height:1rem; }
    .text-sm   { font-size:0.875rem; line-height:1.25rem; }
    .text-base { font-size:1rem;     line-height:1.5rem; }
    .text-xl   { font-size:1.25rem;  line-height:1.75rem; }
    .text-2xl  { font-size:1.5rem;   line-height:2rem; }
    .text-3xl  { font-size:1.875rem; line-height:2.25rem; }
    .font-light    { font-weight: 300; }
    .font-medium   { font-weight: 500; }
    .font-semibold { font-weight: 600; }
    .font-bold     { font-weight: 700; }
    .font-mono { font-family: ui-monospace, 'Courier New', monospace; }
    .tracking-tight  { letter-spacing: -0.025em; }
    .tracking-widest { letter-spacing: 0.1em; }
    .tracking-\\[0\\.15em\\] { letter-spacing: 0.15em; }
    .uppercase { text-transform: uppercase; }
    .text-center { text-align: center; }
    .leading-relaxed { line-height: 1.625; }
    .truncate    { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }

    /* Colors */
    .bg-white    { background-color: #fff; }
    .text-white  { color: #fff; }
    .text-gray-100{ color:#f3f4f6; }
    .text-gray-200{ color:#e5e7eb; }
    .text-gray-300{ color:#d1d5db; }
    .text-gray-400{ color:#9ca3af; }
    .text-gray-500{ color:#6b7280; }
    .text-gray-600{ color:#4b5563; }
    .text-gray-700{ color:#374151; }
    .text-gray-800{ color:#1f2937; }
    .text-gray-900{ color:#111827; }
    .bg-gray-100  { background-color:#f3f4f6; }
    .bg-gray-700  { background-color:#374151; }
    .border-gray-100{ border-color:#f3f4f6; }
    .border-gray-200{ border-color:#e5e7eb; }
    .border-gray-600{ border-color:#4b5563; }
    .border-gray-700{ border-color:#374151; }
    .text-white\\/60{ color:rgba(255,255,255,0.6); }
    .text-white\\/70{ color:rgba(255,255,255,0.7); }
    .text-white\\/80{ color:rgba(255,255,255,0.8); }
    .text-white\\/90{ color:rgba(255,255,255,0.9); }
    .bg-white\\/10 { background-color:rgba(255,255,255,0.1); }
    .bg-white\\/60 { background-color:rgba(255,255,255,0.6); }
    .border-white\\/20{ border-color:rgba(255,255,255,0.2); }

    /* Borders */
    .border      { border-width:1px; border-style:solid; }
    .border-b    { border-bottom-width:1px; border-bottom-style:solid; }
    .border-b-2  { border-bottom-width:2px; border-bottom-style:solid; }
    .border-b-4  { border-bottom-width:4px; border-bottom-style:solid; }
    .border-t    { border-top-width:1px; border-top-style:solid; }
    .border-l-4  { border-left-width:4px; border-left-style:solid; } 
    .h-px        { height:1px; }

    /* Border radius */
    .rounded     { border-radius:0.25rem; }
    .rounded-full{ border-radius:9999px; }
    .rounded-xl  { border-radius:0.75rem; }
    .rounded-lg  { border-radius:0.5rem; }
    .object-cover{ object-fit:cover; }

    /* Opacity */
    .opacity-30  { opacity:0.3; }

    /* Page break */
    section, .mb-5, .space-y-4 > *, .space-y-3 > * {
      page-break-inside: avoid;
      break-inside: avoid;
    }
  </style>
</head>
<body>${body}</body>
</html>`;
}
