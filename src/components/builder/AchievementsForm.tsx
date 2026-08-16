'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { Achievement } from '@/types/resume';
import { MdAdd, MdDelete, MdExpandMore, MdExpandLess, MdEmojiEvents } from 'react-icons/md';

function AchievementCard({ item }: { item: Achievement }) {
  const [open, setOpen] = useState(!item.title);
  const update = useResumeStore((s) => s.updateAchievement);
  const remove = useResumeStore((s) => s.removeAchievement);
  const u = (f: keyof Achievement, v: string) => update(item.id, { [f]: v });

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-white">
        <button type="button" onClick={() => setOpen((o) => !o)} className="flex-1 text-left min-w-0">
          <p className="text-sm font-semibold text-slate-800 truncate">{item.title || 'New Achievement'}</p>
        </button>
        <div className="flex gap-1 shrink-0">
          <button onClick={() => remove(item.id)} className="h-7 w-7 flex items-center justify-center rounded hover:bg-red-50 text-slate-400 hover:text-red-500"><MdDelete size={16} /></button>
          <button onClick={() => setOpen((o) => !o)} className="h-7 w-7 flex items-center justify-center rounded hover:bg-slate-100 text-slate-400">
            {open ? <MdExpandLess size={18} /> : <MdExpandMore size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-100 p-4 space-y-3 bg-slate-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Achievement Title" placeholder="Best Technical Presentation" value={item.title} onChange={(e) => u('title', e.target.value)} />
            <Input label="Date (optional)" type="month" value={item.date ?? ''} onChange={(e) => u('date', e.target.value)} />
          </div>
          <Textarea label="Description" placeholder="Describe the achievement and its impact" rows={2} value={item.description} onChange={(e) => u('description', e.target.value)} />
        </div>
      )}
    </div>
  );
}

export function AchievementsForm() {
  const achievements = useResumeStore((s) => s.resume.achievements);
  const add = useResumeStore((s) => s.addAchievement);

  return (
    <div className="p-4 space-y-3">
      {achievements.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          <MdEmojiEvents size={32} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium">No achievements added yet</p>
        </div>
      )}
      {achievements.map((a) => <AchievementCard key={a.id} item={a} />)}
      <Button variant="outline" size="sm" leftIcon={<MdAdd size={16} />} onClick={add} className="w-full">Add Achievement</Button>
    </div>
  );
}
