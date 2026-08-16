'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { useResumeStore } from '@/store/resumeStore';
import type { Language, LanguageProficiency } from '@/types/resume';
import { MdAdd, MdDelete, MdTranslate } from 'react-icons/md';

const proficiencyOptions = [
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' },
  { value: 'Fluent', label: 'Fluent' },
  { value: 'Native', label: 'Native' },
];

export function LanguagesForm() {
  const languages = useResumeStore((s) => s.resume.languages);
  const addLanguage = useResumeStore((s) => s.addLanguage);
  const updateLanguage = useResumeStore((s) => s.updateLanguage);
  const removeLanguage = useResumeStore((s) => s.removeLanguage);

  return (
    <div className="p-4 space-y-3">
      {languages.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          <MdTranslate size={32} className="mx-auto mb-2 text-slate-300" />
          <p className="text-sm font-medium">No languages added yet</p>
        </div>
      )}
      {languages.map((lang) => (
        <div key={lang.id} className="flex items-end gap-2 p-3 border border-slate-200 rounded-xl bg-white">
          <div className="flex-1">
            <Input
              label="Language"
              placeholder="Spanish"
              value={lang.language}
              onChange={(e) => updateLanguage(lang.id, { language: e.target.value })}
            />
          </div>
          <div className="w-36 shrink-0">
            <Select
              label="Proficiency"
              value={lang.proficiency}
              options={proficiencyOptions}
              onChange={(e) => updateLanguage(lang.id, { proficiency: e.target.value as LanguageProficiency })}
            />
          </div>
          <button
            onClick={() => removeLanguage(lang.id)}
            className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors shrink-0"
            aria-label={`Remove ${lang.language}`}
          >
            <MdDelete size={18} />
          </button>
        </div>
      ))}
      <Button variant="outline" size="sm" leftIcon={<MdAdd size={16} />} onClick={addLanguage} className="w-full">
        Add Language
      </Button>
    </div>
  );
}
