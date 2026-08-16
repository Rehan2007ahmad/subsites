'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { Project } from '@/types/resume';
import { MdAdd, MdDelete, MdExpandMore, MdExpandLess, MdCode } from 'react-icons/md';

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(!project.name);
  const updateProject = useResumeStore((s) => s.updateProject);
  const removeProject = useResumeStore((s) => s.removeProject);
  const u = (field: keyof Project, val: string) => updateProject(project.id, { [field]: val });

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-white">
        <button type="button" onClick={() => setOpen((o) => !o)} className="flex-1 text-left min-w-0">
          <p className="text-sm font-semibold text-slate-800 truncate">{project.name || 'New Project'}</p>
          <p className="text-xs text-slate-500 truncate">{project.technologies || 'Technologies'}</p>
        </button>
        <div className="flex gap-1 shrink-0">
          <button onClick={() => removeProject(project.id)} className="h-7 w-7 flex items-center justify-center rounded hover:bg-red-50 text-slate-400 hover:text-red-500">
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
            <Input label="Project Name" placeholder="My App" value={project.name} onChange={(e) => u('name', e.target.value)} />
            <Input label="Date (optional)" type="month" value={project.date ?? ''} onChange={(e) => u('date', e.target.value)} />
          </div>
          <Textarea label="Description" placeholder="What does it do? What problem does it solve?" rows={3} value={project.description} onChange={(e) => u('description', e.target.value)} />
          <Input label="Technologies" placeholder="React, Node.js, PostgreSQL" value={project.technologies} onChange={(e) => u('technologies', e.target.value)} hint="Comma-separated" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Live URL (optional)" placeholder="myapp.com" value={project.url ?? ''} onChange={(e) => u('url', e.target.value)} />
            <Input label="GitHub URL (optional)" placeholder="github.com/you/repo" value={project.githubUrl ?? ''} onChange={(e) => u('githubUrl', e.target.value)} />
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectsForm() {
  const projects = useResumeStore((s) => s.resume.projects);
  const addProject = useResumeStore((s) => s.addProject);

  return (
    <div className="p-4 space-y-3">
      {projects.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          <MdCode size={32} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium">No projects added yet</p>
        </div>
      )}
      {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      <Button variant="outline" size="sm" leftIcon={<MdAdd size={16} />} onClick={addProject} className="w-full">
        Add Project
      </Button>
    </div>
  );
}
