'use client';

import React from 'react';
import { useResumeStore } from '@/store/resumeStore';
import { TEMPLATES }      from '@/types/resume';
import type { TemplateId } from '@/types/resume';
import { HiCheck } from 'react-icons/hi2';

const ACCENTS = [
  '#000000','#1e3a5f','#16a34a','#dc2626',
  '#7c3aed','#0f4c75','#92400e','#0e7490',
];

export function TemplateSelector({ onClose }: { onClose?: () => void }) {
  const template    = useResumeStore(s => s.resume.settings.template);
  const accentColor = useResumeStore(s => s.resume.settings.accentColor);
  const setTemplate = useResumeStore(s => s.setTemplate);
  const setAccent   = useResumeStore(s => s.setAccentColor);

  return (
    <div className="space-y-6">

      {/* Template list */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#595959] mb-3">Template</p>
        <div className="divide-y divide-[#E5E5E5] border border-[#E5E5E5]">
          {TEMPLATES.map(t => (
            <button key={t.id} type="button"
              onClick={() => { setTemplate(t.id as TemplateId); onClose?.(); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black ${
                template === t.id ? 'bg-black text-white' : 'bg-white text-[#404040] hover:bg-[#F7F7F7]'
              }`}
            >
              {/* Swatch */}
              <div className="h-8 w-6 shrink-0 border border-white/20" style={{ background: t.previewBg }} />
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold leading-tight ${template === t.id ? 'text-white' : 'text-black'}`}>{t.name}</p>
                <p className={`text-[11px] truncate mt-0.5 ${template === t.id ? 'text-white/60' : 'text-[#595959]'}`}>
                  {t.bestFor.slice(0, 3).join(' · ')}
                  {t.atsScore === 'High' && <span className={`ml-2 font-bold ${template === t.id ? 'text-white/80' : 'text-black'}`}>ATS ✓</span>}
                </p>
              </div>
              {template === t.id && <HiCheck size={16} className="text-white shrink-0" />}
            </button>
          ))}
        </div>
      </div>

      {/* Accent colour */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#595959] mb-3">Accent Colour</p>
        <div className="flex flex-wrap gap-2 items-center">
          {ACCENTS.map(c => (
            <button key={c} type="button" onClick={() => setAccent(c)}
              className="h-7 w-7 border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1"
              style={{
                background:   c,
                borderColor:  accentColor === c ? '#000' : c,
                outline:      accentColor === c ? '2px solid #fff' : 'none',
                outlineOffset: accentColor === c ? '-4px' : '0',
              }}
              aria-label={`Accent ${c}`}
            />
          ))}
          <input type="color" value={accentColor} onChange={e => setAccent(e.target.value)}
            className="h-7 w-7 cursor-pointer border border-[#E5E5E5] p-0.5 bg-white"
            title="Custom colour" />
        </div>
      </div>

    </div>
  );
}
