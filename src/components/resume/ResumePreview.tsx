'use client';

import React, { useState, useEffect, useRef } from 'react';
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

const A4_W = 794;   // px at 96 dpi
const A4_H = 1123;

export function ResumePreview({ data }: { data: ResumeData }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Start at 100% on desktop, auto-calculate fit on mobile
  const [zoom, setZoom] = useState(100);
  const [isMobile, setIsMobile] = useState(false);

  // On mount: detect mobile and set the initial zoom to fit width
  useEffect(() => {
    function calculateFitZoom() {
      const container = containerRef.current;
      if (!container) return;
      const availableW = container.clientWidth - 48; // subtract padding (p-6 = 24px each side)
      const fitZoom = Math.floor((availableW / A4_W) * 100);
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        // On mobile, always fit to screen width
        setZoom(Math.min(fitZoom, 100));
      } else {
        // On desktop, default to 100% but clamp if panel is narrow
        setZoom(fitZoom < 100 ? fitZoom : 100);
      }
    }

    calculateFitZoom();
    window.addEventListener('resize', calculateFitZoom);
    return () => window.removeEventListener('resize', calculateFitZoom);
  }, []);

  const Template = TEMPLATE_MAP[data.settings.template] ?? ClassicTemplate;

  const scaledW = A4_W * (zoom / 100);
  const scaledH = A4_H * (zoom / 100);

  return (
    <div className="flex flex-col h-full bg-[#E5E5E5]">

      {/* ── Zoom toolbar ─────────────────────────────────────── */}
      <div className="flex items-center gap-1 h-10 shrink-0 bg-white border-b border-[#E5E5E5] px-4">
        <button
          onClick={() => setZoom(z => Math.max(z - 10, 30))}
          className="w-7 h-7 flex items-center justify-center border border-[#E5E5E5] text-[#595959] hover:border-black hover:text-black transition-colors"
          aria-label="Zoom out"
        >
          <HiMinus size={13} />
        </button>

        <span className="text-xs font-mono text-[#595959] w-10 text-center tabular-nums select-none">
          {zoom}%
        </span>

        <button
          onClick={() => setZoom(z => Math.min(z + 10, 150))}
          className="w-7 h-7 flex items-center justify-center border border-[#E5E5E5] text-[#595959] hover:border-black hover:text-black transition-colors"
          aria-label="Zoom in"
        >
          <HiPlus size={13} />
        </button>

        {/* Preset buttons */}
        {[75, 100].map(p => (
          <button
            key={p}
            onClick={() => setZoom(p)}
            className={`ml-1 h-7 px-2 border text-[10px] font-semibold transition-colors ${
              zoom === p
                ? 'bg-black text-white border-black'
                : 'border-[#E5E5E5] text-[#595959] hover:border-black hover:text-black'
            }`}
          >
            {p}%
          </button>
        ))}

        <div className="flex-1" />
        <span className="text-[11px] text-[#595959] select-none hidden sm:block">Live Preview</span>
      </div>

      {/* ── Scrollable canvas ─────────────────────────────────── */}
      <div ref={containerRef} className="flex-1 overflow-auto p-6 flex justify-center items-start">
        {/*
          Outer div reserves the scaled footprint so scrollbars are correct.
          The inner div applies the CSS scale transform.
          #resume-preview is the element captured for PDF — generatePdf
          temporarily removes the transform before capturing.
        */}
        <div
          style={{ width: scaledW, minHeight: scaledH, flexShrink: 0 }}
        >
          <div
            style={{
              width: A4_W,
              minHeight: A4_H,
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'top left',
            }}
          >
            <div
              id="resume-preview"
              className="bg-white shadow-lg"
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
