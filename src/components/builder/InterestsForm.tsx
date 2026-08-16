'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import { MdAdd, MdClose } from 'react-icons/md';

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
          className="flex-1 h-9 rounded-lg border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 px-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
        />
        <Button size="sm" leftIcon={<MdAdd size={15} />} onClick={handleAdd}>Add</Button>
      </div>

      {interests.length === 0
        ? <p className="text-xs text-slate-400 text-center py-3">No interests added yet</p>
        : (
          <div className="flex flex-wrap gap-1.5">
            {interests.map(item => (
              <span key={item} className="inline-flex items-center gap-1 rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                {item}
                <button onClick={() => updateInterests(interests.filter(i => i !== item))}
                  className="text-slate-400 hover:text-slate-700 transition-colors" aria-label={`Remove ${item}`}>
                  <MdClose size={12} />
                </button>
              </span>
            ))}
          </div>
        )
      }
    </div>
  );
}
