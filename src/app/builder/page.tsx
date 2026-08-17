'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useResumeStore } from '@/store/resumeStore';
import { BuilderHeader }  from '@/components/builder/BuilderHeader';
import { EditorPanel }    from '@/components/builder/EditorPanel';
import { ResumePreview }  from '@/components/resume/ResumePreview';
import { WelcomeDialog }  from '@/components/builder/WelcomeDialog';
import { RESUME_EXAMPLES } from '@/lib/defaultData';
import type { TemplateId } from '@/types/resume';

export default function BuilderPage() {
  const [mobileTab,    setMobileTab]   = useState<'edit' | 'preview'>('edit');
  const [showWelcome,  setShowWelcome] = useState(false);

  const resume         = useResumeStore(s => s.resume);
  const hasHydrated    = useResumeStore(s => s.hasHydrated);
  const hydrate        = useResumeStore(s => s.hydrate);
  const loadSample     = useResumeStore(s => s.loadSampleResume);
  const setTemplate    = useResumeStore(s => s.setTemplate);
  const importResume   = useResumeStore(s => s.importResume);
  const searchParams   = useSearchParams();

  useEffect(() => { if (!hasHydrated) hydrate(); }, [hasHydrated, hydrate]);

  useEffect(() => {
    if (!hasHydrated) return;
    const tpl = searchParams.get('template') as TemplateId | null;
    const ex  = searchParams.get('example');
    if (ex && RESUME_EXAMPLES[ex]) { importResume(RESUME_EXAMPLES[ex]()); return; }
    if (tpl) setTemplate(tpl);
    const hasData = Boolean(resume.personal.fullName) || resume.experience.length > 0;
    if (!hasData) setShowWelcome(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasHydrated]);

  if (!hasHydrated) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F7F7F7]">
        <div className="text-center">
          <div className="w-6 h-6 border-2 border-black border-t-transparent animate-spin mx-auto mb-3" />
          <p className="text-sm text-[#595959]">Loading your resume…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#F7F7F7] overflow-hidden">
      <BuilderHeader mobileTab={mobileTab} setMobileTab={setMobileTab} />

      <div className="flex flex-1 overflow-hidden">
        {/* Editor panel */}
        <div className={`w-full md:w-[400px] lg:w-[420px] shrink-0 border-r border-[#E5E5E5] overflow-y-auto ${mobileTab === 'preview' ? 'hidden md:block' : 'block'}`}>
          <EditorPanel />
        </div>

        {/* Preview panel */}
        <div className={`flex-1 overflow-hidden ${mobileTab === 'edit' ? 'hidden md:flex md:flex-col' : 'flex flex-col'}`}>
          <ResumePreview data={resume} />
        </div>
      </div>

      <WelcomeDialog
        open={showWelcome}
        onStartBlank={() => setShowWelcome(false)}
        onUseSample={() => { loadSample(); setShowWelcome(false); }}
      />
    </div>
  );
}
