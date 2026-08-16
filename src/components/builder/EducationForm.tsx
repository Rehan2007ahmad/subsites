'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { Education } from '@/types/resume';
import { MdAdd, MdDelete, MdExpandMore, MdExpandLess, MdSchool } from 'react-icons/md';

function EducationCard({ edu }: { edu: Education }) {
  const [open, setOpen] = useState(!edu.degree);
  const updateEducation = useResumeStore((s) => s.updateEducation);
  const removeEducation = useResumeStore((s) => s.removeEducation);

  const u = (field: keyof Education, val: string) =>
    updateEducation(edu.id, { [field]: val });

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-white">
        <button type="button" onClick={() => setOpen((o) => !o)} className="flex-1 text-left min-w-0">
          <p className="text-sm font-semibold text-slate-800 truncate">{edu.degree || 'New Education'}</p>
          <p className="text-xs text-slate-500 truncate">{edu.institution || 'Institution'}</p>
        </button>
        <div className="flex items-center gap-1 shrink-0">
          <button onClick={() => removeEducation(edu.id)} className="h-7 w-7 flex items-center justify-center rounded hover:bg-red-50 text-slate-400 hover:text-red-500" aria-label="Remove">
            <MdDelete size={16} />
          </button>
          <button onClick={() => setOpen((o) => !o)} className="h-7 w-7 flex items-center justify-center rounded hover:bg-slate-100 text-slate-400">
            {open ? <MdExpandLess size={18} /> : <MdExpandMore size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-100 p-4 space-y-3 bg-slate-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Degree" placeholder="B.S. Computer Science" value={edu.degree} onChange={(e) => u('degree', e.target.value)} />
            <Input label="Institution" placeholder="MIT" value={edu.institution} onChange={(e) => u('institution', e.target.value)} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Location" placeholder="Cambridge, MA" value={edu.location} onChange={(e) => u('location', e.target.value)} />
            <Input label="GPA (optional)" placeholder="3.9" value={edu.gpa ?? ''} onChange={(e) => u('gpa', e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Input label="Start Date" type="month" value={edu.startDate} onChange={(e) => u('startDate', e.target.value)} />
            <Input label="End Date" type="month" value={edu.endDate} onChange={(e) => u('endDate', e.target.value)} />
          </div>
          <Textarea label="Description (optional)" placeholder="Dean's List. Relevant coursework: Algorithms, OS..." rows={3} value={edu.description} onChange={(e) => u('description', e.target.value)} />
        </div>
      )}
    </div>
  );
}

export function EducationForm() {
  const education = useResumeStore((s) => s.resume.education);
  const addEducation = useResumeStore((s) => s.addEducation);

  return (
    <div className="p-4 space-y-3">
      {education.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          <MdSchool size={32} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium">No education added yet</p>
        </div>
      )}
      {education.map((edu) => <EducationCard key={edu.id} edu={edu} />)}
      <Button variant="outline" size="sm" leftIcon={<MdAdd size={16} />} onClick={addEducation} className="w-full">
        Add Education
      </Button>
    </div>
  );
}
