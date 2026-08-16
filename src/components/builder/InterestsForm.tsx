'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import { MdAdd, MdClose } from 'react-icons/md';

export function InterestsForm() {
  const interests = useResumeStore((s) => s.resume.interests);
  const updateInterests = useResumeStore((s) => s.updateInterests);
  const [input, setInput] = useState('');

  function handleAdd() {
    const items = input.split(',').map((s) => s.trim()).filter(Boolean);
    const merged = [...interests];
    items.forEach((item) => {
      if (!merged.includes(item)) merged.push(item);
    });
    updateInterests(merged);
    setInput('');
  }

  function remove(item: string) {
    updateInterests(interests.filter((i) => i !== item));
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAdd(); } }}
          placeholder="e.g. Photography, Hiking, Chess"
          className="flex-1 h-9 rounded-lg border border-slate-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <Button size="sm" leftIcon={<MdAdd size={16} />} onClick={handleAdd}>Add</Button>
      </div>
      {interests.length === 0 && (
        <p className="text-sm text-slate-400 text-center py-4">No interests added yet</p>
      )}
      <div className="flex flex-wrap gap-2">
        {interests.map((item) => (
          <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
            {item}
            <button onClick={() => remove(item)} className="text-slate-400 hover:text-slate-700" aria-label={`Remove ${item}`}>
              <MdClose size={14} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
