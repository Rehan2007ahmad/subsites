'use client';

import React, { useState } from 'react';
import { Input }    from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button }   from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { Education } from '@/types/resume';
import { MdAdd, MdDeleteOutline, MdExpandMore, MdExpandLess, MdSchool } from 'react-icons/md';

function Card({ edu }: { edu: Education }) {
  const [open, setOpen] = useState(!edu.degree);
  const update = useResumeStore(s => s.updateEducation);
  const remove = useResumeStore(s => s.removeEducation);
  const u = (f: keyof Education, v: string) => update(edu.id, { [f]: v });

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
      <div className="flex items-center gap-2 px-3 py-2.5 hover:bg-slate-50 transition-colors">
        <button type="button" onClick={() => setOpen(o => !o)} className="flex-1 text-left min-w-0">
          <p className="text-[13px] font-semibold text-slate-800 truncate">{edu.degree || 'New Degree'}</p>
          <p className="text-xs text-slate-400 truncate">{edu.institution || 'Institution'}</p>
        </button>
        <div className="flex items-center gap-0.5 shrink-0">
          <button onClick={() => remove(edu.id)}
            className="h-6 w-6 flex items-center justify-center rounded text-slate-300 hover:text-red-400 hover:bg-red-50 transition-colors">
            <MdDeleteOutline size={15} />
          </button>
          <button onClick={() => setOpen(o => !o)}
            className="h-6 w-6 flex items-center justify-center rounded text-slate-400 hover:bg-slate-100 transition-colors">
            {open ? <MdExpandLess size={16} /> : <MdExpandMore size={16} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-slate-50/50 p-3 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Degree" placeholder="B.S. Computer Science" value={edu.degree} onChange={e => u('degree', e.target.value)} />
            <Input label="Institution" placeholder="MIT" value={edu.institution} onChange={e => u('institution', e.target.value)} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Location" placeholder="Cambridge, MA" value={edu.location} onChange={e => u('location', e.target.value)} />
            <Input label="GPA (optional)" placeholder="3.9" value={edu.gpa ?? ''} onChange={e => u('gpa', e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Input label="Start Date" type="month" value={edu.startDate} onChange={e => u('startDate', e.target.value)} />
            <Input label="End Date"   type="month" value={edu.endDate}   onChange={e => u('endDate', e.target.value)} />
          </div>
          <Textarea label="Notes (optional)" placeholder="Dean's List. Coursework: Algorithms, OS…" rows={2}
            value={edu.description} onChange={e => u('description', e.target.value)} />
        </div>
      )}
    </div>
  );
}

export function EducationForm() {
  const education    = useResumeStore(s => s.resume.education);
  const addEducation = useResumeStore(s => s.addEducation);

  return (
    <div className="p-3 bg-white space-y-2">
      {education.length === 0 && (
        <div className="py-8 text-center">
          <MdSchool size={28} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium text-slate-500">No education added yet</p>
        </div>
      )}
      {education.map(e => <Card key={e.id} edu={e} />)}
      <Button variant="outline" size="sm" leftIcon={<MdAdd size={15} />} onClick={addEducation} className="w-full mt-1">
        Add Education
      </Button>
    </div>
  );
}
