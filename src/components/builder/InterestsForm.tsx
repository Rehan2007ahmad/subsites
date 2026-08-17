'use client';

import React, { useState } from 'react';
import { useResumeStore } from '@/store/resumeStore';
import { HiPlus, HiXMark } from 'react-icons/hi2';

export function InterestsForm() {
  const interests       = useResumeStore(s => s.resume.interests);
  const updateInterests = useResumeStore(s => s.updateInterests);
  const [input, setInput] = useState('');

  function handleAdd() {
    const items = input.split(',').map(s => s.trim()).filter(Boolean);
    const merged = [...interests];
    items.forEach(i => { if (!merged.includes(i)) merged.push(i); });
    updateInterests(merged);
    setInput('');
  }

  return (
    <div className="p-4 bg-white space-y-3">
      <div className="flex gap-2">
        <input
          type="text" value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAdd(); } }}
          placeholder="Photography, Hiking, Chess…"
          className="flex-1 h-9 bg-[#F7F7F7] border border-[#E5E5E5] hover:border-[#A3A3A3] focus:bg-white focus:border-black px-3 text-sm text-black placeholder:text-[#595959] outline-none transition-colors"
        />
        <button onClick={handleAdd} className="inline-flex items-center gap-1.5 h-9 px-4 bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors">
          <HiPlus size={14} /> Add
        </button>
      </div>
      {interests.length === 0 ? (
        <p className="text-xs text-[#595959] text-center py-3">No interests added yet</p>
      ) : (
        <div className="flex flex-wrap gap-1.5">
          {interests.map(item => (
            <span key={item} className="inline-flex items-center gap-1 border border-[#E5E5E5] bg-white px-2.5 py-1 text-xs font-medium text-[#404040] hover:border-black transition-colors group">
              {item}
              <button onClick={() => updateInterests(interests.filter(i => i !== item))} className="text-[#D4D4D4] group-hover:text-black ml-0.5 transition-colors" aria-label={`Remove ${item}`}>
                <HiXMark size={11} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
