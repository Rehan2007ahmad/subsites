'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { Experience } from '@/types/resume';
import {
  MdAdd, MdDelete, MdExpandMore, MdExpandLess,
  MdDragIndicator, MdWork,
} from 'react-icons/md';

function ExperienceCard({ exp, index, total }: { exp: Experience; index: number; total: number }) {
  const [open, setOpen] = useState(!exp.jobTitle);
  const updateExperience = useResumeStore((s) => s.updateExperience);
  const removeExperience = useResumeStore((s) => s.removeExperience);
  const reorderExperience = useResumeStore((s) => s.reorderExperience);

  const u = (field: keyof Experience, val: string | boolean) =>
    updateExperience(exp.id, { [field]: val });

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      {/* Card header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white">
        <MdDragIndicator size={18} className="text-slate-300 cursor-grab shrink-0" />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex-1 flex items-start gap-2 text-left min-w-0"
        >
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-800 truncate">
              {exp.jobTitle || 'New Experience'}
            </p>
            <p className="text-xs text-slate-500 truncate">
              {exp.company || 'Company'}
            </p>
          </div>
        </button>
        <div className="flex items-center gap-1 shrink-0">
          {index > 0 && (
            <button
              onClick={() => reorderExperience(index, index - 1)}
              className="h-7 w-7 flex items-center justify-center rounded hover:bg-slate-100 text-slate-400"
              aria-label="Move up"
            >↑</button>
          )}
          {index < total - 1 && (
            <button
              onClick={() => reorderExperience(index, index + 1)}
              className="h-7 w-7 flex items-center justify-center rounded hover:bg-slate-100 text-slate-400"
              aria-label="Move down"
            >↓</button>
          )}
          <button
            onClick={() => removeExperience(exp.id)}
            className="h-7 w-7 flex items-center justify-center rounded hover:bg-red-50 text-slate-400 hover:text-red-500"
            aria-label="Remove experience"
          >
            <MdDelete size={16} />
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="h-7 w-7 flex items-center justify-center rounded hover:bg-slate-100 text-slate-400"
            aria-label={open ? 'Collapse' : 'Expand'}
          >
            {open ? <MdExpandLess size={18} /> : <MdExpandMore size={18} />}
          </button>
        </div>
      </div>

      {/* Expandable fields */}
      {open && (
        <div className="border-t border-slate-100 p-4 space-y-3 bg-slate-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Job Title" placeholder="Senior Engineer" value={exp.jobTitle} onChange={(e) => u('jobTitle', e.target.value)} />
            <Input label="Company" placeholder="Acme Corp" value={exp.company} onChange={(e) => u('company', e.target.value)} />
          </div>
          <Input label="Location" placeholder="New York, NY or Remote" value={exp.location} onChange={(e) => u('location', e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Start Date" type="month" value={exp.startDate} onChange={(e) => u('startDate', e.target.value)} />
            <Input
              label="End Date"
              type="month"
              value={exp.endDate}
              disabled={exp.current}
              onChange={(e) => u('endDate', e.target.value)}
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={exp.current}
              onChange={(e) => u('current', e.target.checked)}
              className="rounded border-slate-300 text-blue-600"
            />
            Currently working here
          </label>
          <Textarea
            label="Description / Achievements"
            placeholder={"Led development of customer-facing features\nReduced load time by 40% through optimization\nMentored 3 junior developers"}
            rows={5}
            value={exp.description}
            onChange={(e) => u('description', e.target.value)}
            hint="One achievement per line. Start each with an action verb."
          />
        </div>
      )}
    </div>
  );
}

export function ExperienceForm() {
  const experience = useResumeStore((s) => s.resume.experience);
  const addExperience = useResumeStore((s) => s.addExperience);

  return (
    <div className="p-4 space-y-3">
      {experience.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          <MdWork size={32} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium">No experience added yet</p>
          <p className="text-xs mt-1">Add your work history below</p>
        </div>
      )}
      {experience.map((exp, i) => (
        <ExperienceCard key={exp.id} exp={exp} index={i} total={experience.length} />
      ))}
      <Button
        variant="outline"
        size="sm"
        leftIcon={<MdAdd size={16} />}
        onClick={addExperience}
        className="w-full"
      >
        Add Experience
      </Button>
    </div>
  );
}
