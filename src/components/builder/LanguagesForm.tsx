'use client';

import React from 'react';
import { Input }   from '@/components/ui/Input';
import { Select }  from '@/components/ui/Select';
import { useResumeStore } from '@/store/resumeStore';
import type { LanguageProficiency } from '@/types/resume';
import { HiPlus, HiTrash, HiLanguage } from 'react-icons/hi2';

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
        <div className="py-10 text-center border border-dashed border-[#E5E5E5]">
          <HiLanguage size={24} className="mx-auto mb-2 text-[#D4D4D4]" />
          <p className="text-sm text-[#595959]">No languages added yet</p>
        </div>
      )}
      {languages.map(lang => (
        <div key={lang.id} className="flex items-end gap-2 p-3 bg-white border border-[#E5E5E5]">
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
            className="h-9 w-9 flex items-center justify-center text-[#595959] hover:text-red-600 hover:bg-red-50 transition-colors shrink-0"
            aria-label={`Remove ${lang.language}`}>
            <HiTrash size={14} />
          </button>
        </div>
      ))}
      <button onClick={addLanguage}
        className="w-full flex items-center justify-center gap-1.5 h-9 border border-dashed border-[#D4D4D4] bg-white text-xs font-semibold text-[#595959] hover:border-black hover:text-black transition-colors">
        <HiPlus size={14} /> Add Language
      </button>
    </div>
  );
}
