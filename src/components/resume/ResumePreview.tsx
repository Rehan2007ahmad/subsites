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

const A4_W = 794;  // px at 96 dpi
const A4_H = 1123;

interface Props { data: ResumeData; }

export function ResumePreview({ data }: Props) {
  const [zoom, setZoom] = useState(90);

  const Template = TEMPLATE_MAP[data.settings.template] ?? ClassicTemplate;

  const zoomOut  = () => setZoom(z => Math.max(z - 10, 40));
  const zoomIn   = () => setZoom(z => Math.min(z + 10, 150));
  const zoomFit  = () => setZoom(90);

  return (
    <div className="flex flex-col h-full bg-[#e8edf2]">

      {/* ── Zoom toolbar ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-1.5 h-10 shrink-0 bg-white border-b border-slate-200 px-4">
        <button
          onClick={zoomOut}
          className="h-7 w-7 flex items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
          aria-label="Zoom out"
        >
          <MdRemove size={16} />
        </button>

        <div className="flex items-center gap-1">
          <span className="text-xs font-mono text-slate-600 w-10 text-center tabular-nums">{zoom}%</span>
        </div>

        <button
          onClick={zoomIn}
          className="h-7 w-7 flex items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
          aria-label="Zoom in"
        >
          <MdAdd size={16} />
        </button>

        <div className="w-px h-4 bg-slate-200 mx-0.5" />

        <button
          onClick={zoomFit}
          className="h-7 w-7 flex items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
          aria-label="Fit to view"
          title="Reset zoom"
        >
          <MdFitScreen size={15} />
        </button>

        <div className="flex-1" />

        <span className="text-[11px] text-slate-400 hidden sm:block select-none">
          Live Preview
        </span>
      </div>

      {/* ── Scrollable canvas ────────────────────────────────────────── */}
      <div className="flex-1 overflow-auto p-6 flex justify-center items-start">
        {/* This outer div sets the natural size that the scrollbar tracks */}
        <div
          style={{
            width:     A4_W * (zoom / 100),
            minHeight: A4_H * (zoom / 100),
          }}
          className="shrink-0"
        >
          {/* Scale wrapper */}
          <div
            style={{
              width:          A4_W,
              minHeight:      A4_H,
              transform:      `scale(${zoom / 100})`,
              transformOrigin:'top left',
            }}
          >
            {/* Actual A4 page — this is what PDF used to capture but now uses off-screen render */}
            <div
              id="resume-preview"
              className="shadow-2xl bg-white"
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
