'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useResumeStore } from '@/store/resumeStore';
import { Button } from '@/components/ui/Button';
import { Dialog } from '@/components/ui/Dialog';
import { useToast } from '@/components/ui/Toast';
import { generateResumePdf } from '@/lib/generatePdf';
import { HiArrowDownTray, HiArrowPath, HiSwatch, HiEllipsisVertical, HiArrowUpTray, HiArrowDownOnSquare, HiTrash, HiPencilSquare, HiEye } from 'react-icons/hi2';
import { TemplateSelector } from './TemplateSelector';

interface Props {
  mobileTab: 'edit' | 'preview';
  setMobileTab: (t: 'edit' | 'preview') => void;
}

export function BuilderHeader({ mobileTab, setMobileTab }: Props) {
  const saveStatus   = useResumeStore(s => s.saveStatus);
  const resetResume  = useResumeStore(s => s.resetResume);
  const importResume = useResumeStore(s => s.importResume);
  const exportResume = useResumeStore(s => s.exportResume);
  const { toast } = useToast();

  const [templateOpen, setTemplateOpen] = useState(false);
  const [resetOpen,    setResetOpen]    = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [pdfLoading,   setPdfLoading]   = useState(false);

  const statusText = {
    idle:   '',
    saving: 'Saving…',
    saved:  'Saved locally',
    error:  'Save failed',
  }[saveStatus];

  async function handleDownloadPdf() {
    setPdfLoading(true);
    try {
      await generateResumePdf('resume-tooleka.pdf');
      toast('Resume downloaded as PDF');
    } catch (err) {
      console.error(err);
      toast('PDF generation failed. Please try again.', 'error');
    } finally {
      setPdfLoading(false);
    }
  }

  function handleExport() {
    const blob = new Blob([exportResume()], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'resume-tooleka.json'; a.click();
    URL.revokeObjectURL(url);
    toast('Resume data exported');
    setMenuOpen(false);
  }

  function handleImport() {
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = '.json';
    inp.onchange = e => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try { importResume(JSON.parse(reader.result as string)); toast('Resume imported'); }
        catch { toast('Invalid resume file', 'error'); }
      };
      reader.readAsText(file);
    };
    inp.click();
    setMenuOpen(false);
  }

  return (
    <>
      <header className="h-14 shrink-0 flex items-center border-b border-[#E5E5E5] bg-white px-4 gap-4 z-30 relative">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
          <span className="flex h-7 w-7 items-center justify-center bg-black text-white text-xs font-black select-none">T</span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-[13px] font-black tracking-tight text-black">Tool<span className="text-[#595959]">Eka</span></span>
            <span className="text-[9px] font-semibold uppercase tracking-widest text-[#595959]">Resume</span>
          </span>
        </Link>

        {/* Divider */}
        <div className="hidden sm:block h-5 w-px bg-[#E5E5E5] shrink-0" />

        {/* Save status */}
        {saveStatus !== 'idle' && (
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#595959] shrink-0">
            {saveStatus === 'saving' && <HiArrowPath size={12} className="animate-spin" />}
            {statusText}
          </div>
        )}

        {/* Mobile tabs */}
        <div className="flex md:hidden border border-[#E5E5E5] shrink-0 ml-1 overflow-hidden">
          <button onClick={() => setMobileTab('edit')}
            className={`flex items-center gap-1.5 h-8 px-3 text-xs font-semibold transition-colors ${mobileTab === 'edit' ? 'bg-black text-white' : 'bg-white text-[#404040] hover:bg-[#F7F7F7]'}`}>
            <HiPencilSquare size={13} /> Edit
          </button>
          <button onClick={() => setMobileTab('preview')}
            className={`flex items-center gap-1.5 h-8 px-3 text-xs font-semibold border-l border-[#E5E5E5] transition-colors ${mobileTab === 'preview' ? 'bg-black text-white' : 'bg-white text-[#404040] hover:bg-[#F7F7F7]'}`}>
            <HiEye size={13} /> Preview
          </button>
        </div>

        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Template — desktop only */}
          <button onClick={() => setTemplateOpen(true)}
            className="hidden sm:flex items-center gap-1.5 h-8 px-3 border border-[#E5E5E5] bg-white text-xs font-semibold text-[#404040] hover:border-black hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
            <HiSwatch size={14} /> Template
          </button>

          {/* Download PDF */}
          <button onClick={handleDownloadPdf} disabled={pdfLoading}
            className="inline-flex items-center gap-1.5 h-8 px-4 bg-black text-white text-xs font-semibold hover:bg-neutral-800 disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1">
            {pdfLoading
              ? <HiArrowPath size={13} className="animate-spin" />
              : <HiArrowDownTray size={13} />
            }
            <span className="hidden sm:inline">Download PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>

          {/* More ⋮ */}
          <div className="relative">
            <button onClick={() => setMenuOpen(o => !o)}
              className="h-8 w-8 flex items-center justify-center border border-[#E5E5E5] text-[#595959] hover:border-black hover:text-black hover:bg-[#F7F7F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="More options">
              <HiEllipsisVertical size={17} />
            </button>

            {menuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                <div className="absolute right-0 top-9 z-20 w-52 bg-white border border-[#E5E5E5] shadow-xl py-1">
                  <button onClick={() => { setTemplateOpen(true); setMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#404040] hover:bg-[#F7F7F7] hover:text-black transition-colors">
                    <HiSwatch size={15} /> Templates
                  </button>
                  <button onClick={handleExport}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#404040] hover:bg-[#F7F7F7] hover:text-black transition-colors">
                    <HiArrowDownOnSquare size={15} /> Export JSON
                  </button>
                  <button onClick={handleImport}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#404040] hover:bg-[#F7F7F7] hover:text-black transition-colors">
                    <HiArrowUpTray size={15} /> Import JSON
                  </button>
                  <div className="h-px bg-[#E5E5E5] my-1" />
                  <button onClick={() => { setResetOpen(true); setMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
                    <HiTrash size={15} /> Reset Resume
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Template Dialog */}
      <Dialog open={templateOpen} onClose={() => setTemplateOpen(false)} title="Choose a Template" size="md">
        <TemplateSelector onClose={() => setTemplateOpen(false)} />
      </Dialog>

      {/* Reset Dialog */}
      <Dialog
        open={resetOpen} onClose={() => setResetOpen(false)}
        title="Reset Resume"
        description="This will permanently clear your locally saved resume. This cannot be undone."
        actions={
          <>
            <Button variant="secondary" size="sm" onClick={() => setResetOpen(false)}>Cancel</Button>
            <Button variant="danger" size="sm"
              onClick={() => { resetResume(); setResetOpen(false); toast('Resume reset', 'info'); }}>
              Reset Resume
            </Button>
          </>
        }
      />
    </>
  );
}
