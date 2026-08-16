'use client';

import React, { useState } from 'react';
import { Input }    from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button }   from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { Project } from '@/types/resume';
import { MdAdd, MdDeleteOutline, MdExpandMore, MdExpandLess, MdCode } from 'react-icons/md';

function Card({ p }: { p: Project }) {
  const [open, setOpen] = useState(!p.name);
  const update = useResumeStore(s => s.updateProject);
  const remove = useResumeStore(s => s.removeProject);
  const u = (f: keyof Project, v: string) => update(p.id, { [f]: v });

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
      <div className="flex items-center gap-2 px-3 py-2.5 hover:bg-slate-50 transition-colors">
        <button type="button" onClick={() => setOpen(o => !o)} className="flex-1 text-left min-w-0">
          <p className="text-[13px] font-semibold text-slate-800 truncate">{p.name || 'New Project'}</p>
          <p className="text-xs text-slate-400 truncate">{p.technologies || 'Technologies'}</p>
        </button>
        <div className="flex items-center gap-0.5 shrink-0">
          <button onClick={() => remove(p.id)}
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
            <Input label="Project Name" placeholder="My App" value={p.name} onChange={e => u('name', e.target.value)} />
            <Input label="Date (optional)" type="month" value={p.date ?? ''} onChange={e => u('date', e.target.value)} />
          </div>
          <Textarea label="Description" placeholder="What does it do? What problem does it solve?" rows={3} value={p.description} onChange={e => u('description', e.target.value)} />
          <Input label="Technologies" placeholder="React, Node.js, PostgreSQL" value={p.technologies} onChange={e => u('technologies', e.target.value)} hint="Comma-separated" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Live URL (optional)"   placeholder="myapp.com" value={p.url ?? ''} onChange={e => u('url', e.target.value)} />
            <Input label="GitHub URL (optional)" placeholder="github.com/you/repo" value={p.githubUrl ?? ''} onChange={e => u('githubUrl', e.target.value)} />
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectsForm() {
  const projects    = useResumeStore(s => s.resume.projects);
  const addProject  = useResumeStore(s => s.addProject);

  return (
    <div className="p-3 bg-white space-y-2">
      {projects.length === 0 && (
        <div className="py-8 text-center">
          <MdCode size={28} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium text-slate-500">No projects added yet</p>
        </div>
      )}
      {projects.map(p => <Card key={p.id} p={p} />)}
      <Button variant="outline" size="sm" leftIcon={<MdAdd size={15} />} onClick={addProject} className="w-full mt-1">
        Add Project
      </Button>
    </div>
  );
}
