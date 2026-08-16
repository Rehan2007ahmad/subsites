'use client';

import React from 'react';
import { Input }   from '@/components/ui/Input';
import { Select }  from '@/components/ui/Select';
import { Button }  from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { LanguageProficiency } from '@/types/resume';
import { MdAdd, MdDeleteOutline, MdTranslate } from 'react-icons/md';

const PROFICIENCY_OPTS = [
  { value: 'Beginner',     label: 'Beginner'     },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced',     label: 'Advanced'     },
  { value: 'Fluent',       label: 'Fluent'       },
  { value: 'Native',       label: 'Native'       },
];

export function LanguagesForm() {
  const languages      = useResumeStore(s => s.resume.languages);
  const addLanguage    = useResumeStore(s => s.addLanguage);
  const updateLanguage = useResumeStore(s => s.updateLanguage);
  const removeLanguage = useResumeStore(s => s.removeLanguage);

  return (
    <div className="p-3 bg-white space-y-2">
      {languages.length === 0 && (
        <div className="py-8 text-center">
          <MdTranslate size={28} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium text-slate-500">No languages added yet</p>
        </div>
      )}
      {languages.map(lang => (
        <div key={lang.id} className="flex items-end gap-2 p-3 rounded-xl border border-slate-200 bg-white">
          <div className="flex-1">
            <Input label="Language" placeholder="Spanish"
              value={lang.language}
              onChange={e => updateLanguage(lang.id, { language: e.target.value })} />
          </div>
          <div className="w-36 shrink-0">
            <Select label="Proficiency"
              value={lang.proficiency}
              options={PROFICIENCY_OPTS}
              onChange={e => updateLanguage(lang.id, { proficiency: e.target.value as LanguageProficiency })} />
          </div>
          <button onClick={() => removeLanguage(lang.id)}
            className="h-9 w-9 flex items-center justify-center rounded-lg text-slate-300 hover:text-red-400 hover:bg-red-50 transition-colors shrink-0 mb-0.5"
            aria-label={`Remove ${lang.language}`}>
            <MdDeleteOutline size={17} />
          </button>
        </div>
      ))}
      <Button variant="outline" size="sm" leftIcon={<MdAdd size={15} />} onClick={addLanguage} className="w-full mt-1">
        Add Language
      </Button>
    </div>
  );
}
