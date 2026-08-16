'use client';

import React from 'react';
import { useResumeStore } from '@/store/resumeStore';
import { TEMPLATES } from '@/types/resume';
import type { TemplateId } from '@/types/resume';
import { MdCheckCircle, MdShield } from 'react-icons/md';

const ACCENT_PRESETS = [
  '#2563eb', '#0f4c75', '#16a34a', '#dc2626',
  '#7c3aed', '#0d1117', '#1e3a5f', '#b45309',
];

export function TemplateSelector({ onClose }: { onClose?: () => void }) {
  const template = useResumeStore((s) => s.resume.settings.template);
  const accentColor = useResumeStore((s) => s.resume.settings.accentColor);
  const setTemplate = useResumeStore((s) => s.setTemplate);
  const setAccentColor = useResumeStore((s) => s.setAccentColor);

  return (
    <div className="p-4 space-y-5">
      <div>
        <h3 className="text-sm font-semibold text-slate-800 mb-3">Choose Template</h3>
        <div className="grid grid-cols-1 gap-2">
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => { setTemplate(t.id as TemplateId); onClose?.(); }}
              className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all ${
                template === t.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              {/* Color swatch preview */}
              <div
                className="h-10 w-8 rounded shrink-0"
                style={{ backgroundColor: t.previewBg }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">{t.name}</span>
                  {t.atsScore === 'High' && (
                    <span className="flex items-center gap-0.5 text-[10px] font-medium text-green-700 bg-green-100 rounded-full px-1.5 py-0.5">
                      <MdShield size={10} /> ATS
                    </span>
                  )}
                  {template === t.id && <MdCheckCircle size={16} className="text-blue-500 ml-auto" />}
                </div>
                <p className="text-xs text-slate-500 truncate">{t.bestFor.join(', ')}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Accent color */}
      <div>
        <h3 className="text-sm font-semibold text-slate-800 mb-3">Accent Color</h3>
        <div className="flex flex-wrap gap-2 items-center">
          {ACCENT_PRESETS.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setAccentColor(color)}
              className="h-7 w-7 rounded-full border-2 transition-all"
              style={{
                backgroundColor: color,
                borderColor: accentColor === color ? '#fff' : color,
                boxShadow: accentColor === color ? `0 0 0 2px ${color}` : 'none',
              }}
              aria-label={`Set accent color to ${color}`}
            />
          ))}
          <input
            type="color"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            className="h-7 w-7 rounded-full cursor-pointer border border-slate-300 p-0.5"
            title="Custom color"
          />
        </div>
      </div>
    </div>
  );
}
