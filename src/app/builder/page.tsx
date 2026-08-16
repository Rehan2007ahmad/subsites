'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useResumeStore } from '@/store/resumeStore';
import { BuilderHeader } from '@/components/builder/BuilderHeader';
import { EditorPanel } from '@/components/builder/EditorPanel';
import { ResumePreview } from '@/components/resume/ResumePreview';
import { WelcomeDialog } from '@/components/builder/WelcomeDialog';
import { RESUME_EXAMPLES } from '@/lib/defaultData';
import type { TemplateId } from '@/types/resume';

export default function BuilderPage() {
  const [mobileTab, setMobileTab] = useState<'edit' | 'preview'>('edit');
  const [showWelcome, setShowWelcome] = useState(false);

  const resume = useResumeStore((s) => s.resume);
  const hasHydrated = useResumeStore((s) => s.hasHydrated);
  const hydrate = useResumeStore((s) => s.hydrate);
  const loadSampleResume = useResumeStore((s) => s.loadSampleResume);
  const setTemplate = useResumeStore((s) => s.setTemplate);
  const importResume = useResumeStore((s) => s.importResume);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (hasHydrated) return;
    hydrate();
  }, [hasHydrated, hydrate]);

  useEffect(() => {
    if (!hasHydrated) return;

    const templateParam = searchParams.get('template') as TemplateId | null;
    const exampleParam = searchParams.get('example');

    if (exampleParam && RESUME_EXAMPLES[exampleParam]) {
      const exampleData = RESUME_EXAMPLES[exampleParam]();
      importResume(exampleData);
      return;
    }

    if (templateParam) {
      setTemplate(templateParam);
    }

    // Show welcome only when brand new (no name set)
    const hasData = Boolean(resume.personal.fullName) || resume.experience.length > 0;
    if (!hasData) {
      setShowWelcome(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasHydrated]);

  if (!hasHydrated) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="h-8 w-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-slate-500">Loading your resume…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-slate-100 overflow-hidden">
      <BuilderHeader mobileTab={mobileTab} setMobileTab={setMobileTab} />

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor (left on desktop, tab on mobile) */}
        <div
          className={`
            w-full md:w-[400px] lg:w-[440px] shrink-0
            bg-white border-r border-slate-200
            overflow-y-auto
            ${mobileTab === 'preview' ? 'hidden md:flex md:flex-col' : 'flex flex-col'}
          `}
        >
          <EditorPanel />
        </div>

        {/* Preview (right on desktop, tab on mobile) */}
        <div
          className={`
            flex-1 overflow-hidden
            ${mobileTab === 'edit' ? 'hidden md:flex md:flex-col' : 'flex flex-col'}
          `}
        >
          <ResumePreview data={resume} />
        </div>
      </div>

      {/* Welcome dialog */}
      <WelcomeDialog
        open={showWelcome}
        onStartBlank={() => setShowWelcome(false)}
        onUseSample={() => { loadSampleResume(); setShowWelcome(false); }}
      />
    </div>
  );
}
