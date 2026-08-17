'use client';

import React, { useState } from 'react';
import { Input }    from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useResumeStore } from '@/store/resumeStore';
import type { Education } from '@/types/resume';
import { HiPlus, HiTrash, HiAcademicCap } from 'react-icons/hi2';

function Card({ edu }: { edu: Education }) {
  const [open, setOpen] = useState(!edu.degree);
  const update = useResumeStore(s => s.updateEducation);
  const remove = useResumeStore(s => s.removeEducation);
  const u = (f: keyof Education, v: string) => update(edu.id, { [f]: v });

  return (
    <div className="bg-white border border-[#E5E5E5] transition-colors duration-150">
      <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#F7F7F7] transition-colors duration-150">
        <button type="button" onClick={() => setOpen(o => !o)} className="flex-1 text-left min-w-0">
          <p className="text-sm font-semibold text-black truncate">{edu.degree || 'New Degree'}</p>
          <p className="text-xs text-[#595959] truncate mt-0.5">{edu.institution || 'Institution'}</p>
        </button>
        <div className="flex items-center gap-0.5 shrink-0">
          <button onClick={() => remove(edu.id)}
            className="h-6 w-6 flex items-center justify-center text-[#595959] hover:text-red-600 hover:bg-red-50 transition-colors">
            <HiTrash size={13} />
          </button>
          <button onClick={() => setOpen(o => !o)}
            className="h-6 w-6 flex items-center justify-center text-[#595959] hover:text-black text-base leading-none font-light transition-colors">
            {open ? '−' : '+'}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[#E5E5E5] bg-[#F7F7F7] p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Degree"      placeholder="B.S. Computer Science" value={edu.degree}      onChange={e => u('degree', e.target.value)} />
            <Input label="Institution" placeholder="MIT"                   value={edu.institution} onChange={e => u('institution', e.target.value)} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Location"        placeholder="Cambridge, MA" value={edu.location}  onChange={e => u('location', e.target.value)} />
            <Input label="GPA (optional)"  placeholder="3.9"           value={edu.gpa ?? ''} onChange={e => u('gpa', e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Input label="Start Date" type="month" value={edu.startDate} onChange={e => u('startDate', e.target.value)} />
            <Input label="End Date"   type="month" value={edu.endDate}   onChange={e => u('endDate', e.target.value)} />
          </div>
          <Textarea label="Notes (optional)" placeholder="Dean's List. Relevant coursework: Algorithms, OS…"
            rows={2} value={edu.description} onChange={e => u('description', e.target.value)} />
        </div>
      )}
    </div>
  );
}

export function EducationForm() {
  const education    = useResumeStore(s => s.resume.education);
  const addEducation = useResumeStore(s => s.addEducation);

  return (
    <div className="p-3 bg-white space-y-px">
      {education.length === 0 && (
        <div className="py-10 text-center border border-dashed border-[#E5E5E5]">
          <HiAcademicCap size={24} className="mx-auto mb-2 text-[#D4D4D4]" />
          <p className="text-sm text-[#595959]">No education added yet</p>
        </div>
      )}
      {education.map(e => <Card key={e.id} edu={e} />)}
      <button onClick={addEducation}
        className="mt-2 w-full flex items-center justify-center gap-1.5 h-9 border border-dashed border-[#D4D4D4] bg-white text-xs font-semibold text-[#595959] hover:border-black hover:text-black transition-colors">
        <HiPlus size={14} /> Add Education
      </button>
    </div>
  );
}
