'use client';

import React from 'react';
import { useResumeStore } from '@/store/resumeStore';
import { TEMPLATES }      from '@/types/resume';
import type { TemplateId } from '@/types/resume';
import { MdCheckCircle } from 'react-icons/md';
import { RiShieldCheckLine } from 'react-icons/ri';

const ACCENTS = [
  '#2563eb','#0f4c75','#16a34a','#dc2626',
  '#7c3aed','#0d1117','#1e3a5f','#b45309',
];

export function TemplateSelector({ onClose }: { onClose?: () => void }) {
  const template    = useResumeStore(s => s.resume.settings.template);
  const accentColor = useResumeStore(s => s.resume.settings.accentColor);
  const setTemplate = useResumeStore(s => s.setTemplate);
  const setAccent   = useResumeStore(s => s.setAccentColor);

  return (
    <div className="space-y-5">

      {/* Template list */}
      <div>
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Template</p>
        <div className="space-y-1.5">
          {TEMPLATES.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => { setTemplate(t.id as TemplateId); onClose?.(); }}
              className={[
                'w-full flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all',
                template === t.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300 bg-white',
              ].join(' ')}
            >
              {/* Swatch */}
              <div className="h-9 w-7 rounded-lg shrink-0 shadow-sm" style={{ background: t.previewBg }} />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-sm font-semibold text-slate-900">{t.name}</span>
                  {t.atsScore === 'High' && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-100 rounded-full px-1.5 py-0.5">
                      <RiShieldCheckLine size={9} /> ATS
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 truncate">{t.bestFor.slice(0, 3).join(', ')}</p>
              </div>

              {template === t.id && (
                <MdCheckCircle size={18} className="text-blue-500 shrink-0" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Accent color */}
      <div>
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Accent Colour</p>
        <div className="flex flex-wrap gap-2 items-center">
          {ACCENTS.map(c => (
            <button
              key={c}
              type="button"
              onClick={() => setAccent(c)}
              className="h-7 w-7 rounded-full border-2 transition-all"
              style={{
                background:   c,
                borderColor:  accentColor === c ? '#fff' : c,
                boxShadow:    accentColor === c ? `0 0 0 2.5px ${c}` : 'none',
              }}
              aria-label={`Accent colour ${c}`}
            />
          ))}
          {/* Custom picker */}
          <input
            type="color"
            value={accentColor}
            onChange={e => setAccent(e.target.value)}
            className="h-7 w-7 rounded-full cursor-pointer border border-slate-300 p-0.5 bg-white"
            title="Custom colour"
          />
        </div>
      </div>

    </div>
  );
}
