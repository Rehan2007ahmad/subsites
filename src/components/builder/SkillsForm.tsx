'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import { MdAdd, MdClose } from 'react-icons/md';

export function SkillsForm() {
  const skills = useResumeStore((s) => s.resume.skills);
  const addSkill = useResumeStore((s) => s.addSkill);
  const removeSkill = useResumeStore((s) => s.removeSkill);
  const [input, setInput] = useState('');

  function handleAdd() {
    const trimmed = input.trim();
    if (!trimmed) return;
    // support comma-separated batch add
    const items = trimmed.split(',').map((s) => s.trim()).filter(Boolean);
    items.forEach((name) => {
      if (!skills.find((s) => s.name.toLowerCase() === name.toLowerCase())) {
        addSkill(name);
      }
    });
    setInput('');
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleAdd();
    }
  }

  return (
    <div className="p-4 space-y-4">
      <p className="text-xs text-slate-500">Type a skill and press Enter, or add multiple comma-separated.</p>

      {/* Input row */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="e.g. TypeScript, React, AWS"
          className="flex-1 h-9 rounded-lg border border-slate-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <Button size="sm" leftIcon={<MdAdd size={16} />} onClick={handleAdd}>
          Add
        </Button>
      </div>

      {/* Skill tags */}
      {skills.length === 0 && (
        <p className="text-sm text-slate-400 text-center py-4">No skills added yet</p>
      )}
      <div className="flex flex-wrap gap-2">
        {skills.map((sk) => (
          <span
            key={sk.id}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-sm text-blue-800"
          >
            {sk.name}
            <button
              onClick={() => removeSkill(sk.id)}
              className="text-blue-400 hover:text-blue-700 transition-colors"
              aria-label={`Remove ${sk.name}`}
            >
              <MdClose size={14} />
            </button>
          </span>
        ))}
      </div>

      {/* Quick suggestions */}
      <div>
        <p className="text-xs text-slate-400 mb-2">Quick add:</p>
        <div className="flex flex-wrap gap-1.5">
          {['JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'SQL', 'Git', 'AWS', 'Docker', 'Figma'].map((s) => (
            !skills.find((sk) => sk.name === s) && (
              <button
                key={s}
                onClick={() => addSkill(s)}
                className="text-xs rounded-full border border-dashed border-slate-300 px-2.5 py-0.5 text-slate-500 hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                + {s}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
