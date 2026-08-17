'use client';

import React, { useState } from 'react';
import type { ResumeData } from '@/types/resume';
import { ClassicTemplate }   from './templates/ClassicTemplate';
import { ModernTemplate }    from './templates/ModernTemplate';
import { MinimalTemplate }   from './templates/MinimalTemplate';
import { DeveloperTemplate } from './templates/DeveloperTemplate';
import { StudentTemplate }   from './templates/StudentTemplate';
import { HiMinus, HiPlus } from 'react-icons/hi2';

const TEMPLATE_MAP = {
  classic:   ClassicTemplate,
  modern:    ModernTemplate,
  minimal:   MinimalTemplate,
  developer: DeveloperTemplate,
  student:   StudentTemplate,
} as const;

const A4_W = 794;
const A4_H = 1123;

export function ResumePreview({ data }: { data: ResumeData }) {
  const [zoom, setZoom] = useState(90);
  const Template = TEMPLATE_MAP[data.settings.template] ?? ClassicTemplate;

  return (
    <div className="flex flex-col h-full bg-[#E5E5E5]">
      {/* Zoom bar — ToolEka style */}
      <div className="flex items-center gap-1 h-10 shrink-0 bg-white border-b border-[#E5E5E5] px-4">
        <button onClick={() => setZoom(z => Math.max(z - 10, 40))}
          className="w-7 h-7 flex items-center justify-center border border-[#E5E5E5] text-[#595959] hover:border-black hover:text-black transition-colors"
          aria-label="Zoom out">
          <HiMinus size={13} />
        </button>
        <span className="text-xs font-mono text-[#595959] w-10 text-center tabular-nums select-none">{zoom}%</span>
        <button onClick={() => setZoom(z => Math.min(z + 10, 150))}
          className="w-7 h-7 flex items-center justify-center border border-[#E5E5E5] text-[#595959] hover:border-black hover:text-black transition-colors"
          aria-label="Zoom in">
          <HiPlus size={13} />
        </button>
        <button onClick={() => setZoom(90)}
          className="ml-1 h-7 px-2 border border-[#E5E5E5] text-[10px] font-semibold text-[#595959] hover:border-black hover:text-black transition-colors"
          title="Reset zoom">
          FIT
        </button>
        <div className="flex-1" />
        <span className="text-[11px] text-[#595959] select-none hidden sm:block">Live Preview</span>
      </div>

      {/* Scrollable canvas */}
      <div className="flex-1 overflow-auto p-6 flex justify-center items-start">
        {/* Outer div sizes to scaled dimensions so scrollbar is accurate */}
        <div style={{ width: A4_W * (zoom / 100), minHeight: A4_H * (zoom / 100), flexShrink: 0 }}>
          {/* Transform wrapper — generatePdf temporarily strips this */}
          <div style={{ width: A4_W, minHeight: A4_H, transform: `scale(${zoom / 100})`, transformOrigin: 'top left' }}>
            <div id="resume-preview" className="bg-white shadow-lg" style={{ width: A4_W, minHeight: A4_H }}>
              <Template data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
