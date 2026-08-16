'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import { MdAdd, MdClose } from 'react-icons/md';

const SUGGESTIONS = [
  'JavaScript','TypeScript','Python','React','Node.js',
  'SQL','Git','AWS','Docker','Figma',
];

export function SkillsForm() {
  const skills      = useResumeStore(s => s.resume.skills);
  const addSkill    = useResumeStore(s => s.addSkill);
  const removeSkill = useResumeStore(s => s.removeSkill);
  const [input, setInput] = useState('');

  function handleAdd() {
    input.split(',').map(s => s.trim()).filter(Boolean).forEach(name => {
      if (!skills.find(s => s.name.toLowerCase() === name.toLowerCase())) addSkill(name);
    });
    setInput('');
  }

  return (
    <div className="p-4 bg-white space-y-4">
      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text" value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); handleAdd(); } }}
          placeholder="e.g. TypeScript, React, AWS…"
          className="flex-1 h-9 rounded-lg border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 px-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
        />
        <Button size="sm" leftIcon={<MdAdd size={15} />} onClick={handleAdd}>Add</Button>
      </div>

      {/* Tags */}
      {skills.length === 0
        ? <p className="text-xs text-slate-400 text-center py-3">No skills added yet</p>
        : (
          <div className="flex flex-wrap gap-1.5">
            {skills.map(sk => (
              <span key={sk.id} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                {sk.name}
                <button onClick={() => removeSkill(sk.id)} className="text-blue-400 hover:text-blue-700 transition-colors ml-0.5" aria-label={`Remove ${sk.name}`}>
                  <MdClose size={12} />
                </button>
              </span>
            ))}
          </div>
        )
      }

      {/* Quick suggestions */}
      <div>
        <p className="text-[11px] text-slate-400 mb-2 font-medium">Quick add</p>
        <div className="flex flex-wrap gap-1.5">
          {SUGGESTIONS.filter(s => !skills.find(sk => sk.name === s)).map(s => (
            <button key={s} onClick={() => addSkill(s)}
              className="text-xs rounded-full border border-dashed border-slate-300 px-2.5 py-0.5 text-slate-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              + {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
