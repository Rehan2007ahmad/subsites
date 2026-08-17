'use client';

import React, { useState } from 'react';
import { Input }    from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useResumeStore } from '@/store/resumeStore';
import type { Experience } from '@/types/resume';
import { HiPlus, HiTrash, HiBriefcase } from 'react-icons/hi2';

function Card({ exp, index, total }: { exp: Experience; index: number; total: number }) {
  const [open, setOpen] = useState(!exp.jobTitle);
  const update  = useResumeStore(s => s.updateExperience);
  const remove  = useResumeStore(s => s.removeExperience);
  const reorder = useResumeStore(s => s.reorderExperience);
  const u = (f: keyof Experience, v: string | boolean) => update(exp.id, { [f]: v });

  return (
    <div className="bg-white border border-[#E5E5E5] transition-colors duration-150">
      {/* Card header */}
      <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#F7F7F7] transition-colors duration-150">
        <button type="button" onClick={() => setOpen(o => !o)} className="flex-1 text-left min-w-0">
          <p className="text-sm font-semibold text-black truncate">{exp.jobTitle || 'New Position'}</p>
          <p className="text-xs text-[#595959] truncate mt-0.5">
            {exp.company || 'Company'}{exp.location ? ` · ${exp.location}` : ''}
          </p>
        </button>
        <div className="flex items-center gap-0.5 shrink-0">
          {index > 0 && (
            <button onClick={() => reorder(index, index - 1)}
              className="h-6 w-6 flex items-center justify-center text-[#595959] hover:text-black hover:bg-[#F7F7F7] text-xs font-bold transition-colors"
              title="Move up">↑</button>
          )}
          {index < total - 1 && (
            <button onClick={() => reorder(index, index + 1)}
              className="h-6 w-6 flex items-center justify-center text-[#595959] hover:text-black hover:bg-[#F7F7F7] text-xs font-bold transition-colors"
              title="Move down">↓</button>
          )}
          <button onClick={() => remove(exp.id)}
            className="h-6 w-6 flex items-center justify-center text-[#595959] hover:text-red-600 hover:bg-red-50 transition-colors"
            aria-label="Remove">
            <HiTrash size={13} />
          </button>
          <button onClick={() => setOpen(o => !o)}
            className="h-6 w-6 flex items-center justify-center text-[#595959] hover:text-black text-base leading-none font-light transition-colors">
            {open ? '−' : '+'}
          </button>
        </div>
      </div>

      {/* Expanded fields */}
      {open && (
        <div className="border-t border-[#E5E5E5] bg-[#F7F7F7] p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Job Title"  placeholder="Senior Engineer"     value={exp.jobTitle}  onChange={e => u('jobTitle', e.target.value)} />
            <Input label="Company"    placeholder="Acme Corp"           value={exp.company}   onChange={e => u('company', e.target.value)} />
          </div>
          <Input label="Location" placeholder="New York, NY or Remote"  value={exp.location}  onChange={e => u('location', e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Start Date" type="month" value={exp.startDate} onChange={e => u('startDate', e.target.value)} />
            <Input label="End Date"   type="month" value={exp.endDate}   disabled={exp.current} onChange={e => u('endDate', e.target.value)} />
          </div>
          <label className="flex items-center gap-2 text-xs font-semibold text-[#595959] cursor-pointer select-none">
            <input type="checkbox" checked={exp.current} onChange={e => u('current', e.target.checked)}
              className="border-[#E5E5E5] text-black focus:ring-black" />
            Currently working here
          </label>
          <Textarea
            label="Description / Achievements"
            placeholder={"Led development of customer-facing features\nReduced load time by 40%\nMentored 3 junior developers"}
            rows={5} value={exp.description}
            onChange={e => u('description', e.target.value)}
            hint="One achievement per line. Start each with an action verb." />
        </div>
      )}
    </div>
  );
}

export function ExperienceForm() {
  const experience    = useResumeStore(s => s.resume.experience);
  const addExperience = useResumeStore(s => s.addExperience);

  return (
    <div className="p-3 bg-white space-y-px">
      {experience.length === 0 && (
        <div className="py-10 text-center border border-dashed border-[#E5E5E5]">
          <HiBriefcase size={24} className="mx-auto mb-2 text-[#D4D4D4]" />
          <p className="text-sm text-[#595959]">No experience added yet</p>
        </div>
      )}
      {experience.map((exp, i) => (
        <Card key={exp.id} exp={exp} index={i} total={experience.length} />
      ))}
      <button onClick={addExperience}
        className="mt-2 w-full flex items-center justify-center gap-1.5 h-9 border border-dashed border-[#D4D4D4] bg-white text-xs font-semibold text-[#595959] hover:border-black hover:text-black transition-colors">
        <HiPlus size={14} /> Add Experience
      </button>
    </div>
  );
}
