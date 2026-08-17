'use client';

import React, { useState } from 'react';
import { useResumeStore } from '@/store/resumeStore';
import { HiPlus, HiXMark } from 'react-icons/hi2';

const SUGGESTIONS = [
  'JavaScript', 'TypeScript', 'Python', 'React', 'Node.js',
  'SQL', 'Git', 'AWS', 'Docker', 'Figma',
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
      {/* Input row */}
      <div className="flex gap-2">
        <input
          type="text" value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); handleAdd(); } }}
          placeholder="e.g. TypeScript, React, AWS…"
          className="flex-1 h-9 bg-[#F7F7F7] border border-[#E5E5E5] hover:border-[#A3A3A3] focus:bg-white focus:border-black px-3 text-sm text-black placeholder:text-[#595959] outline-none transition-colors"
        />
        <button onClick={handleAdd}
          className="inline-flex items-center gap-1.5 h-9 px-4 bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors">
          <HiPlus size={14} /> Add
        </button>
      </div>

      {/* Skill tags */}
      {skills.length === 0 ? (
        <p className="text-xs text-[#595959] text-center py-3">No skills added yet</p>
      ) : (
        <div className="flex flex-wrap gap-1.5">
          {skills.map(sk => (
            <span key={sk.id}
              className="inline-flex items-center gap-1 border border-[#E5E5E5] bg-white px-2.5 py-1 text-xs font-medium text-[#404040] hover:border-black hover:text-black transition-colors group">
              {sk.name}
              <button onClick={() => removeSkill(sk.id)}
                className="text-[#D4D4D4] group-hover:text-black ml-0.5 transition-colors"
                aria-label={`Remove ${sk.name}`}>
                <HiXMark size={11} />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Quick add suggestions */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#595959] mb-2">Quick add</p>
        <div className="flex flex-wrap gap-1.5">
          {SUGGESTIONS.filter(s => !skills.find(sk => sk.name === s)).map(s => (
            <button key={s} onClick={() => addSkill(s)}
              className="text-xs border border-dashed border-[#D4D4D4] px-2.5 py-1 text-[#595959] hover:border-black hover:text-black bg-white transition-colors">
              + {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
