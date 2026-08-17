'use client';

import React, { useState } from 'react';
import { Input }    from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useResumeStore } from '@/store/resumeStore';
import type { Project } from '@/types/resume';
import { HiPlus, HiTrash, HiCodeBracket } from 'react-icons/hi2';

function Card({ p }: { p: Project }) {
  const [open, setOpen] = useState(!p.name);
  const update = useResumeStore(s => s.updateProject);
  const remove = useResumeStore(s => s.removeProject);
  const u = (f: keyof Project, v: string) => update(p.id, { [f]: v });

  return (
    <div className="bg-white border border-[#E5E5E5]">
      <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#F7F7F7] transition-colors duration-150">
        <button type="button" onClick={() => setOpen(o => !o)} className="flex-1 text-left min-w-0">
          <p className="text-sm font-semibold text-black truncate">{p.name || 'New Project'}</p>
          <p className="text-xs text-[#595959] truncate mt-0.5">{p.technologies || 'Technologies'}</p>
        </button>
        <div className="flex items-center gap-0.5 shrink-0">
          <button onClick={() => remove(p.id)}
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
            <Input label="Project Name"   placeholder="My App"  value={p.name}     onChange={e => u('name', e.target.value)} />
            <Input label="Date (optional)" type="month"          value={p.date ?? ''} onChange={e => u('date', e.target.value)} />
          </div>
          <Textarea label="Description" placeholder="What does it do? What problem does it solve?"
            rows={3} value={p.description} onChange={e => u('description', e.target.value)} />
          <Input label="Technologies" placeholder="React, Node.js, PostgreSQL"
            value={p.technologies} onChange={e => u('technologies', e.target.value)} hint="Comma-separated" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Live URL (optional)"   placeholder="myapp.com"            value={p.url ?? ''}       onChange={e => u('url', e.target.value)} />
            <Input label="GitHub URL (optional)" placeholder="github.com/you/repo"  value={p.githubUrl ?? ''} onChange={e => u('githubUrl', e.target.value)} />
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectsForm() {
  const projects   = useResumeStore(s => s.resume.projects);
  const addProject = useResumeStore(s => s.addProject);

  return (
    <div className="p-3 bg-white space-y-px">
      {projects.length === 0 && (
        <div className="py-10 text-center border border-dashed border-[#E5E5E5]">
          <HiCodeBracket size={24} className="mx-auto mb-2 text-[#D4D4D4]" />
          <p className="text-sm text-[#595959]">No projects added yet</p>
        </div>
      )}
      {projects.map(p => <Card key={p.id} p={p} />)}
      <button onClick={addProject}
        className="mt-2 w-full flex items-center justify-center gap-1.5 h-9 border border-dashed border-[#D4D4D4] bg-white text-xs font-semibold text-[#595959] hover:border-black hover:text-black transition-colors">
        <HiPlus size={14} /> Add Project
      </button>
    </div>
  );
}
