'use client';

import React, { useState } from 'react';
import type { ResumeData } from '@/types/resume';
import { ClassicTemplate }   from './templates/ClassicTemplate';
import { ModernTemplate }    from './templates/ModernTemplate';
import { MinimalTemplate }   from './templates/MinimalTemplate';
import { DeveloperTemplate } from './templates/DeveloperTemplate';
import { StudentTemplate }   from './templates/StudentTemplate';
import { MdAdd, MdRemove, MdFitScreen } from 'react-icons/md';

const TEMPLATE_MAP = {
  classic:   ClassicTemplate,
  modern:    ModernTemplate,
  minimal:   MinimalTemplate,
  developer: DeveloperTemplate,
  student:   StudentTemplate,
} as const;

// A4 at 96 dpi
const A4_W = 794;
const A4_H = 1123;

interface Props { data: ResumeData; }

export function ResumePreview({ data }: Props) {
  const [zoom, setZoom] = useState(90);

  const Template = TEMPLATE_MAP[data.settings.template] ?? ClassicTemplate;

  return (
    <div className="flex flex-col h-full bg-[#e8edf2]">

      {/* ── Zoom bar ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-1 h-10 shrink-0 bg-white border-b border-slate-200 px-4">
        <button
          onClick={() => setZoom(z => Math.max(z - 10, 40))}
          className="h-7 w-7 flex items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
          aria-label="Zoom out"
        >
          <MdRemove size={16} />
        </button>
        <span className="text-xs font-mono text-slate-500 w-10 text-center tabular-nums select-none">{zoom}%</span>
        <button
          onClick={() => setZoom(z => Math.min(z + 10, 150))}
          className="h-7 w-7 flex items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
          aria-label="Zoom in"
        >
          <MdAdd size={16} />
        </button>
        <div className="w-px h-4 bg-slate-200 mx-1" />
        <button
          onClick={() => setZoom(90)}
          className="h-7 w-7 flex items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
          aria-label="Reset zoom"
          title="Fit to view"
        >
          <MdFitScreen size={15} />
        </button>
        <div className="flex-1" />
        <span className="text-[11px] text-slate-400 select-none hidden sm:block">Live Preview</span>
      </div>

      {/* ── Scrollable canvas ────────────────────────────────────────── */}
      <div className="flex-1 overflow-auto p-6 flex justify-center items-start">
        {/*
          Outer div tracks the scaled size so scrollbars are correct.
          id="pdf-scale-wrapper" is used by generatePdf to temporarily
          remove the transform before capturing.
        */}
        <div
          id="pdf-scale-wrapper"
          style={{
            width:     A4_W * (zoom / 100),
            minHeight: A4_H * (zoom / 100),
            flexShrink: 0,
          }}
        >
          {/* Transform wrapper — generatePdf temporarily sets this to none */}
          <div
            style={{
              width:          A4_W,
              minHeight:      A4_H,
              transform:      `scale(${zoom / 100})`,
              transformOrigin:'top left',
            }}
          >
            {/* The actual A4 page captured by html2canvas */}
            <div
              id="resume-preview"
              className="bg-white shadow-2xl"
              style={{ width: A4_W, minHeight: A4_H }}
            >
              <Template data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
