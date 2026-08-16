'use client';

import React, { useState } from 'react';
import type { ResumeData } from '@/types/resume';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { ModernTemplate } from './templates/ModernTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { DeveloperTemplate } from './templates/DeveloperTemplate';
import { StudentTemplate } from './templates/StudentTemplate';
import { MdAdd, MdRemove } from 'react-icons/md';

interface ResumePreviewProps {
  data: ResumeData;
  /** ID placed on the inner A4 element for PDF generation */
  printId?: string;
}

const TEMPLATE_MAP = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  minimal: MinimalTemplate,
  developer: DeveloperTemplate,
  student: StudentTemplate,
} as const;

// A4 dimensions in px at 96dpi: 794 × 1123
const A4_WIDTH_PX = 794;

export function ResumePreview({ data, printId = 'resume-preview' }: ResumePreviewProps) {
  const [zoom, setZoom] = useState(100);

  const Template = TEMPLATE_MAP[data.settings.template] ?? ClassicTemplate;

  const zoomIn = () => setZoom((z) => Math.min(z + 10, 150));
  const zoomOut = () => setZoom((z) => Math.max(z - 10, 50));

  return (
    <div className="flex flex-col h-full">
      {/* Zoom controls */}
      <div className="flex items-center justify-center gap-2 py-2 border-b border-slate-200 bg-slate-50 shrink-0">
        <button
          onClick={zoomOut}
          className="h-7 w-7 rounded-md flex items-center justify-center hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Zoom out"
        >
          <MdRemove size={16} />
        </button>
        <span className="text-xs text-slate-500 w-12 text-center font-mono">{zoom}%</span>
        <button
          onClick={zoomIn}
          className="h-7 w-7 rounded-md flex items-center justify-center hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Zoom in"
        >
          <MdAdd size={16} />
        </button>
      </div>

      {/* Scrollable preview area */}
      <div className="flex-1 overflow-auto bg-slate-200 p-4 flex justify-center">
        <div
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'top center',
            width: A4_WIDTH_PX,
            minHeight: 1123,
            // Reserve space so parent doesn't collapse when zoomed out
            marginBottom: zoom < 100 ? `${-(1123 * (1 - zoom / 100))}px` : 0,
          }}
        >
          <div
            id={printId}
            className="shadow-xl"
            style={{
              width: A4_WIDTH_PX,
              minHeight: 1123,
              background: '#fff',
            }}
          >
            <Template data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
