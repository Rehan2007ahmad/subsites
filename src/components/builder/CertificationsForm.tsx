'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { Certification } from '@/types/resume';
import { MdAdd, MdDelete, MdExpandMore, MdExpandLess, MdVerified } from 'react-icons/md';

function CertCard({ cert }: { cert: Certification }) {
  const [open, setOpen] = useState(!cert.name);
  const update = useResumeStore((s) => s.updateCertification);
  const remove = useResumeStore((s) => s.removeCertification);
  const u = (f: keyof Certification, v: string) => update(cert.id, { [f]: v });

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-white">
        <button type="button" onClick={() => setOpen((o) => !o)} className="flex-1 text-left min-w-0">
          <p className="text-sm font-semibold text-slate-800 truncate">{cert.name || 'New Certification'}</p>
          <p className="text-xs text-slate-500 truncate">{cert.organization}</p>
        </button>
        <div className="flex gap-1 shrink-0">
          <button onClick={() => remove(cert.id)} className="h-7 w-7 flex items-center justify-center rounded hover:bg-red-50 text-slate-400 hover:text-red-500"><MdDelete size={16} /></button>
          <button onClick={() => setOpen((o) => !o)} className="h-7 w-7 flex items-center justify-center rounded hover:bg-slate-100 text-slate-400">
            {open ? <MdExpandLess size={18} /> : <MdExpandMore size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-100 p-4 space-y-3 bg-slate-50">
          <Input label="Certification Name" placeholder="AWS Solutions Architect" value={cert.name} onChange={(e) => u('name', e.target.value)} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Organization" placeholder="Amazon Web Services" value={cert.organization} onChange={(e) => u('organization', e.target.value)} />
            <Input label="Date" type="month" value={cert.date} onChange={(e) => u('date', e.target.value)} />
          </div>
          <Input label="Credential URL (optional)" placeholder="verify.yoursite.com/cert123" value={cert.credentialUrl ?? ''} onChange={(e) => u('credentialUrl', e.target.value)} />
        </div>
      )}
    </div>
  );
}

export function CertificationsForm() {
  const certs = useResumeStore((s) => s.resume.certifications);
  const add = useResumeStore((s) => s.addCertification);

  return (
    <div className="p-4 space-y-3">
      {certs.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          <MdVerified size={32} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium">No certifications added yet</p>
        </div>
      )}
      {certs.map((c) => <CertCard key={c.id} cert={c} />)}
      <Button variant="outline" size="sm" leftIcon={<MdAdd size={16} />} onClick={add} className="w-full">Add Certification</Button>
    </div>
  );
}
