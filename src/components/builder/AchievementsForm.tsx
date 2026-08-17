'use client';

import React, { useState } from 'react';
import { Input }    from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useResumeStore } from '@/store/resumeStore';
import type { Achievement } from '@/types/resume';
import { HiPlus, HiTrash, HiTrophy } from 'react-icons/hi2';

function Card({ a }: { a: Achievement }) {
  const [open, setOpen] = useState(!a.title);
  const update = useResumeStore(s => s.updateAchievement);
  const remove = useResumeStore(s => s.removeAchievement);
  const u = (f: keyof Achievement, v: string) => update(a.id, { [f]: v });

  return (
    <div className="bg-white border border-[#E5E5E5]">
      <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#F7F7F7] transition-colors duration-150">
        <button type="button" onClick={() => setOpen(o => !o)} className="flex-1 text-left min-w-0">
          <p className="text-sm font-semibold text-black truncate">{a.title || 'New Achievement'}</p>
        </button>
        <div className="flex items-center gap-0.5 shrink-0">
          <button onClick={() => remove(a.id)} className="h-6 w-6 flex items-center justify-center text-[#595959] hover:text-red-600 hover:bg-red-50 transition-colors">
            <HiTrash size={13} />
          </button>
          <button onClick={() => setOpen(o => !o)} className="h-6 w-6 flex items-center justify-center text-[#595959] hover:text-black text-base leading-none font-light transition-colors">
            {open ? '−' : '+'}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[#E5E5E5] bg-[#F7F7F7] p-4 space-y-3">
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
    <div className="p-3 bg-white space-y-px">
      {achievements.length === 0 && (
        <div className="py-10 text-center border border-dashed border-[#E5E5E5]">
          <HiTrophy size={24} className="mx-auto mb-2 text-[#D4D4D4]" />
          <p className="text-sm text-[#595959]">No achievements added yet</p>
        </div>
      )}
      {achievements.map(a => <Card key={a.id} a={a} />)}
      <button onClick={add} className="mt-2 w-full flex items-center justify-center gap-1.5 h-9 border border-dashed border-[#D4D4D4] bg-white text-xs font-semibold text-[#595959] hover:border-black hover:text-black transition-colors">
        <HiPlus size={14} /> Add Achievement
      </button>
    </div>
  );
}
