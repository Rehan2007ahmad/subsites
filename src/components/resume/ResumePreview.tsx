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

const A4_W = 794;
const A4_H = 1123;

export function ResumePreview({ data }: { data: ResumeData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom]   = useState(100); // will be overridden on mount
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function init() {
      const mobile = window.innerWidth < 768;
      if (mobile) {
        // Always 45% on phone — user can zoom in manually
        setZoom(45);
      } else {
        // Desktop: 100%, but scale down if the panel is narrower than 794px
        const available = (containerRef.current?.clientWidth ?? 900) - 48;
        const fit = Math.floor((available / A4_W) * 100);
        setZoom(fit < 100 ? fit : 100);
      }
      setReady(true);
    }

    init();
    window.addEventListener('resize', init);
    return () => window.removeEventListener('resize', init);
  }, []);

  const Template = TEMPLATE_MAP[data.settings.template] ?? ClassicTemplate;
  const scaledW  = A4_W * (zoom / 100);
  const scaledH  = A4_H * (zoom / 100);

  return (
    <div className="flex flex-col h-full bg-[#E5E5E5]">

      {/* ── Zoom toolbar ─────────────────────────────────── */}
      <div className="flex items-center gap-1 h-10 shrink-0 bg-white border-b border-[#E5E5E5] px-4">
        <button
          onClick={() => setZoom(z => Math.max(z - 5, 30))}
          className="w-7 h-7 flex items-center justify-center border border-[#E5E5E5] text-[#595959] hover:border-black hover:text-black transition-colors"
          aria-label="Zoom out"
        >
          <HiMinus size={13} />
        </button>

        <span className="text-xs font-mono text-[#595959] w-10 text-center tabular-nums select-none">
          {zoom}%
        </span>

        <button
          onClick={() => setZoom(z => Math.min(z + 5, 150))}
          className="w-7 h-7 flex items-center justify-center border border-[#E5E5E5] text-[#595959] hover:border-black hover:text-black transition-colors"
          aria-label="Zoom in"
        >
          <HiPlus size={13} />
        </button>

        {/* Quick presets */}
        {([50, 75, 100] as const).map(p => (
          <button
            key={p}
            onClick={() => setZoom(p)}
            className={`ml-1 h-7 px-2 border text-[10px] font-semibold transition-colors hidden sm:block ${
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

      {/* ── Scrollable canvas ─────────────────────────────── */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto p-4 sm:p-6 flex justify-center items-start"
      >
        {ready && (
          /*
           * Outer div reserves the scaled footprint → correct scrollbar size.
           * Inner div holds the CSS transform.
           * #resume-preview is the capture target for PDF generation —
           * generatePdf temporarily sets transform:none before capturing.
           */
          <div style={{ width: scaledW, minHeight: scaledH, flexShrink: 0 }}>
            <div
              style={{
                width:           A4_W,
                minHeight:       A4_H,
                transform:       `scale(${zoom / 100})`,
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
        )}
      </div>
    </div>
  );
}
