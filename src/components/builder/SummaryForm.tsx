'use client';

import React from 'react';
import { Textarea } from '@/components/ui/Textarea';
import { useResumeStore } from '@/store/resumeStore';

export function SummaryForm() {
  const summary       = useResumeStore(s => s.resume.summary);
  const updateSummary = useResumeStore(s => s.updateSummary);

  return (
    <div className="p-4 bg-white space-y-3">
      <div className="rounded-lg bg-blue-50 border border-blue-100 px-3 py-2.5">
        <p className="text-xs text-blue-700 leading-relaxed">
          <span className="font-semibold">Tip:</span> Keep to 2–4 sentences. Focus on your experience level, core strengths, and the value you bring to the role.
        </p>
      </div>
      <Textarea
        label="Professional Summary"
        placeholder="Results-driven software engineer with 5+ years of experience building scalable web applications…"
        rows={5}
        value={summary}
        onChange={e => updateSummary(e.target.value)}
        charCount={summary.length}
        maxChars={600}
        hint="Aim for 200–450 characters"
      />
    </div>
  );
}
