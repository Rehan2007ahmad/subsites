'use client';

import React, { useState } from 'react';
import { Input }    from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button }   from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { Achievement } from '@/types/resume';
import { MdAdd, MdDeleteOutline, MdExpandMore, MdExpandLess, MdEmojiEvents } from 'react-icons/md';

function Card({ a }: { a: Achievement }) {
  const [open, setOpen] = useState(!a.title);
  const update = useResumeStore(s => s.updateAchievement);
  const remove = useResumeStore(s => s.removeAchievement);
  const u = (f: keyof Achievement, v: string) => update(a.id, { [f]: v });

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
      <div className="flex items-center gap-2 px-3 py-2.5 hover:bg-slate-50 transition-colors">
        <button type="button" onClick={() => setOpen(o => !o)} className="flex-1 text-left min-w-0">
          <p className="text-[13px] font-semibold text-slate-800 truncate">{a.title || 'New Achievement'}</p>
        </button>
        <div className="flex items-center gap-0.5 shrink-0">
          <button onClick={() => remove(a.id)}
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
            <Input label="Title" placeholder="Best Presentation Award" value={a.title} onChange={e => u('title', e.target.value)} />
            <Input label="Date (optional)" type="month" value={a.date ?? ''} onChange={e => u('date', e.target.value)} />
          </div>
          <Textarea label="Description" placeholder="Describe the achievement and its impact" rows={2} value={a.description} onChange={e => u('description', e.target.value)} />
        </div>
      )}
    </div>
  );
}

export function AchievementsForm() {
  const achievements = useResumeStore(s => s.resume.achievements);
  const add          = useResumeStore(s => s.addAchievement);

  return (
    <div className="p-3 bg-white space-y-2">
      {achievements.length === 0 && (
        <div className="py-8 text-center">
          <MdEmojiEvents size={28} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium text-slate-500">No achievements added yet</p>
        </div>
      )}
      {achievements.map(a => <Card key={a.id} a={a} />)}
      <Button variant="outline" size="sm" leftIcon={<MdAdd size={15} />} onClick={add} className="w-full mt-1">
        Add Achievement
      </Button>
    </div>
  );
}
