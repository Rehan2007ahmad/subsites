'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { useResumeStore } from '@/store/resumeStore';
import type { Certification } from '@/types/resume';
import { HiPlus, HiTrash, HiCheckBadge } from 'react-icons/hi2';

function Card({ c }: { c: Certification }) {
  const [open, setOpen] = useState(!c.name);
  const update = useResumeStore(s => s.updateCertification);
  const remove = useResumeStore(s => s.removeCertification);
  const u = (f: keyof Certification, v: string) => update(c.id, { [f]: v });

  return (
    <div className="bg-white border border-[#E5E5E5]">
      <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#F7F7F7] transition-colors duration-150">
        <button type="button" onClick={() => setOpen(o => !o)} className="flex-1 text-left min-w-0">
          <p className="text-sm font-semibold text-black truncate">{c.name || 'New Certification'}</p>
          <p className="text-xs text-[#595959] truncate mt-0.5">{c.organization || 'Organization'}</p>
        </button>
        <div className="flex items-center gap-0.5 shrink-0">
          <button onClick={() => remove(c.id)}
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
          <Input label="Certification Name" placeholder="AWS Solutions Architect" value={c.name} onChange={e => u('name', e.target.value)} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Issuing Organization" placeholder="Amazon Web Services" value={c.organization} onChange={e => u('organization', e.target.value)} />
            <Input label="Date" type="month" value={c.date} onChange={e => u('date', e.target.value)} />
          </div>
          <Input label="Credential URL (optional)" placeholder="verify.example.com/cert" value={c.credentialUrl ?? ''} onChange={e => u('credentialUrl', e.target.value)} />
        </div>
      )}
    </div>
  );
}

export function CertificationsForm() {
  const certs = useResumeStore(s => s.resume.certifications);
  const add   = useResumeStore(s => s.addCertification);

  return (
    <div className="p-3 bg-white space-y-px">
      {certs.length === 0 && (
        <div className="py-10 text-center border border-dashed border-[#E5E5E5]">
          <HiCheckBadge size={24} className="mx-auto mb-2 text-[#D4D4D4]" />
          <p className="text-sm text-[#595959]">No certifications added yet</p>
        </div>
      )}
      {certs.map(c => <Card key={c.id} c={c} />)}
      <button onClick={add}
        className="mt-2 w-full flex items-center justify-center gap-1.5 h-9 border border-dashed border-[#D4D4D4] bg-white text-xs font-semibold text-[#595959] hover:border-black hover:text-black transition-colors">
        <HiPlus size={14} /> Add Certification
      </button>
    </div>
  );
}
