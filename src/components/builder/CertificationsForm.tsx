'use client';

import React, { useState } from 'react';
import { Input }  from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { Certification } from '@/types/resume';
import { MdAdd, MdDeleteOutline, MdExpandMore, MdExpandLess, MdVerified } from 'react-icons/md';

function Card({ c }: { c: Certification }) {
  const [open, setOpen] = useState(!c.name);
  const update = useResumeStore(s => s.updateCertification);
  const remove = useResumeStore(s => s.removeCertification);
  const u = (f: keyof Certification, v: string) => update(c.id, { [f]: v });

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
      <div className="flex items-center gap-2 px-3 py-2.5 hover:bg-slate-50 transition-colors">
        <button type="button" onClick={() => setOpen(o => !o)} className="flex-1 text-left min-w-0">
          <p className="text-[13px] font-semibold text-slate-800 truncate">{c.name || 'New Certification'}</p>
          <p className="text-xs text-slate-400 truncate">{c.organization}</p>
        </button>
        <div className="flex items-center gap-0.5 shrink-0">
          <button onClick={() => remove(c.id)}
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
    <div className="p-3 bg-white space-y-2">
      {certs.length === 0 && (
        <div className="py-8 text-center">
          <MdVerified size={28} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium text-slate-500">No certifications added yet</p>
        </div>
      )}
      {certs.map(c => <Card key={c.id} c={c} />)}
      <Button variant="outline" size="sm" leftIcon={<MdAdd size={15} />} onClick={add} className="w-full mt-1">
        Add Certification
      </Button>
    </div>
  );
}
