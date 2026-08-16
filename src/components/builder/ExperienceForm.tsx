'use client';

import React, { useState } from 'react';
import { Input }     from '@/components/ui/Input';
import { Textarea }  from '@/components/ui/Textarea';
import { Button }    from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { Experience } from '@/types/resume';
import {
  MdAdd, MdDeleteOutline, MdExpandMore, MdExpandLess,
  MdDragIndicator, MdWork,
} from 'react-icons/md';

function Card({ exp, index, total }: { exp: Experience; index: number; total: number }) {
  const [open, setOpen]     = useState(!exp.jobTitle);
  const update  = useResumeStore(s => s.updateExperience);
  const remove  = useResumeStore(s => s.removeExperience);
  const reorder = useResumeStore(s => s.reorderExperience);
  const u = (f: keyof Experience, v: string | boolean) => update(exp.id, { [f]: v });

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
      {/* Header row */}
      <div className="flex items-center gap-2 px-3 py-2.5 hover:bg-slate-50 transition-colors">
        <MdDragIndicator size={16} className="text-slate-300 shrink-0 cursor-grab" />
        <button type="button" onClick={() => setOpen(o => !o)} className="flex-1 text-left min-w-0">
          <p className="text-[13px] font-semibold text-slate-800 truncate">{exp.jobTitle || 'New Position'}</p>
          <p className="text-xs text-slate-400 truncate">{exp.company || 'Company'}{exp.location ? ` · ${exp.location}` : ''}</p>
        </button>
        <div className="flex items-center gap-0.5 shrink-0">
          {index > 0 && (
            <button onClick={() => reorder(index, index - 1)}
              className="h-6 w-6 flex items-center justify-center rounded text-slate-400 hover:bg-slate-100 text-[11px]" title="Move up">↑</button>
          )}
          {index < total - 1 && (
            <button onClick={() => reorder(index, index + 1)}
              className="h-6 w-6 flex items-center justify-center rounded text-slate-400 hover:bg-slate-100 text-[11px]" title="Move down">↓</button>
          )}
          <button onClick={() => remove(exp.id)}
            className="h-6 w-6 flex items-center justify-center rounded text-slate-300 hover:text-red-400 hover:bg-red-50 transition-colors">
            <MdDeleteOutline size={15} />
          </button>
          <button onClick={() => setOpen(o => !o)}
            className="h-6 w-6 flex items-center justify-center rounded text-slate-400 hover:bg-slate-100 transition-colors">
            {open ? <MdExpandLess size={16} /> : <MdExpandMore size={16} />}
          </button>
        </div>
      </div>

      {/* Fields */}
      {open && (
        <div className="border-t border-slate-100 bg-slate-50/50 p-3 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Job Title"   placeholder="Senior Engineer" value={exp.jobTitle}  onChange={e => u('jobTitle', e.target.value)} />
            <Input label="Company"     placeholder="Acme Corp"       value={exp.company}   onChange={e => u('company', e.target.value)} />
          </div>
          <Input label="Location" placeholder="New York, NY or Remote" value={exp.location} onChange={e => u('location', e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Start Date" type="month" value={exp.startDate} onChange={e => u('startDate', e.target.value)} />
            <Input label="End Date"   type="month" value={exp.endDate} disabled={exp.current} onChange={e => u('endDate', e.target.value)} />
          </div>
          <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer select-none">
            <input type="checkbox" checked={exp.current} onChange={e => u('current', e.target.checked)}
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
            Currently working here
          </label>
          <Textarea
            label="Description / Achievements"
            placeholder={"Led development of customer-facing features\nReduced load time by 40%\nMentored 3 junior developers"}
            rows={5}
            value={exp.description}
            onChange={e => u('description', e.target.value)}
            hint="One achievement per line. Lead each with an action verb."
          />
        </div>
      )}
    </div>
  );
}

export function ExperienceForm() {
  const experience    = useResumeStore(s => s.resume.experience);
  const addExperience = useResumeStore(s => s.addExperience);

  return (
    <div className="p-3 bg-white space-y-2">
      {experience.length === 0 && (
        <div className="py-8 text-center text-slate-400">
          <MdWork size={28} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium text-slate-500">No experience added yet</p>
          <p className="text-xs mt-0.5">Add your work history below</p>
        </div>
      )}
      {experience.map((exp, i) => (
        <Card key={exp.id} exp={exp} index={i} total={experience.length} />
      ))}
      <Button variant="outline" size="sm" leftIcon={<MdAdd size={15} />} onClick={addExperience} className="w-full mt-1">
        Add Experience
      </Button>
    </div>
  );
}
