'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useResumeStore } from '@/store/resumeStore';
import { Button } from '@/components/ui/Button';
import { Dialog } from '@/components/ui/Dialog';
import { useToast } from '@/components/ui/Toast';
import { generateResumePdf } from '@/lib/generatePdf';
import {
  MdDownload, MdAutorenew, MdPalette, MdCheckCircle,
  MdError, MdUpload, MdFileDownload, MdDelete,
  MdMoreVert, MdVisibility, MdEdit,
} from 'react-icons/md';
import { TemplateSelector } from './TemplateSelector';

interface Props {
  mobileTab: 'edit' | 'preview';
  setMobileTab: (t: 'edit' | 'preview') => void;
}

export function BuilderHeader({ mobileTab, setMobileTab }: Props) {
  const saveStatus   = useResumeStore(s => s.saveStatus);
  const resume       = useResumeStore(s => s.resume);
  const resetResume  = useResumeStore(s => s.resetResume);
  const importResume = useResumeStore(s => s.importResume);
  const exportResume = useResumeStore(s => s.exportResume);
  const { toast } = useToast();

  const [templateOpen, setTemplateOpen] = useState(false);
  const [resetOpen,    setResetOpen]    = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [pdfLoading,   setPdfLoading]   = useState(false);

  /* ── Save status pill ─────────────────────────────────── */
  const statusConfig = {
    idle:    { text: '',              icon: null,                                                    cls: '' },
    saving:  { text: 'Saving…',      icon: <MdAutorenew size={12} className="animate-spin" />,      cls: 'text-slate-500' },
    saved:   { text: 'Saved locally',icon: <MdCheckCircle size={12} className="text-emerald-500" />, cls: 'text-slate-500' },
    error:   { text: 'Save failed',  icon: <MdError size={12} className="text-red-500" />,           cls: 'text-red-500' },
  }[saveStatus];

  /* ── Handlers ─────────────────────────────────────────── */
  async function handleDownloadPdf() {
    setPdfLoading(true);
    try {
      await generateResumePdf(resume, 'resume-tooleka.pdf');
      toast('Resume downloaded as PDF');
    } catch {
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
        try {
          importResume(JSON.parse(reader.result as string));
          toast('Resume imported');
        } catch {
          toast('Invalid resume file', 'error');
        }
      };
      reader.readAsText(file);
    };
    inp.click();
    setMenuOpen(false);
  }

  return (
    <>
      {/* ── Bar ───────────────────────────────────────────────────────────── */}
      <header className="h-14 shrink-0 flex items-center border-b border-slate-200 bg-white px-4 gap-4 z-30 relative">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0 mr-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xs select-none">T</span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-[13px] font-bold text-slate-900 tracking-tight">ToolEka</span>
            <span className="text-[10px] font-medium text-blue-600 tracking-wide uppercase">Resume</span>
          </span>
        </Link>

        {/* Divider */}
        <div className="hidden sm:block h-6 w-px bg-slate-200 shrink-0" />

        {/* Save status */}
        {saveStatus !== 'idle' && (
          <div className={`hidden sm:flex items-center gap-1.5 text-xs ${statusConfig.cls} shrink-0`}>
            {statusConfig.icon}
            <span>{statusConfig.text}</span>
          </div>
        )}

        {/* Mobile tabs */}
        <div className="flex md:hidden rounded-lg overflow-hidden border border-slate-200 shrink-0 ml-1">
          <button
            onClick={() => setMobileTab('edit')}
            className={`flex items-center gap-1.5 h-8 px-3 text-xs font-medium transition-colors ${
              mobileTab === 'edit' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <MdEdit size={14} /> Edit
          </button>
          <button
            onClick={() => setMobileTab('preview')}
            className={`flex items-center gap-1.5 h-8 px-3 text-xs font-medium transition-colors border-l border-slate-200 ${
              mobileTab === 'preview' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <MdVisibility size={14} /> Preview
          </button>
        </div>

        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Template button — desktop */}
          <button
            onClick={() => setTemplateOpen(true)}
            className="hidden sm:flex items-center gap-1.5 h-8 px-3 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            <MdPalette size={15} className="text-slate-500" />
            Template
          </button>

          {/* Download PDF */}
          <Button
            variant="primary"
            size="sm"
            loading={pdfLoading}
            leftIcon={<MdDownload size={15} />}
            onClick={handleDownloadPdf}
          >
            <span className="hidden sm:inline">Download PDF</span>
            <span className="sm:hidden">PDF</span>
          </Button>

          {/* More ⋮ */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
              aria-label="More options"
            >
              <MdMoreVert size={18} />
            </button>

            {menuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                <div className="absolute right-0 top-9 z-20 w-52 bg-white rounded-xl border border-slate-200 shadow-xl py-1 overflow-hidden">
                  <button onClick={() => { setTemplateOpen(true); setMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    <MdPalette size={16} className="text-slate-400" /> Templates
                  </button>
                  <button onClick={handleExport}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    <MdFileDownload size={16} className="text-slate-400" /> Export JSON
                  </button>
                  <button onClick={handleImport}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    <MdUpload size={16} className="text-slate-400" /> Import JSON
                  </button>
                  <div className="h-px bg-slate-100 my-1" />
                  <button onClick={() => { setResetOpen(true); setMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
                    <MdDelete size={16} /> Reset Resume
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
        open={resetOpen}
        onClose={() => setResetOpen(false)}
        title="Reset Resume"
        description="This will permanently clear your locally saved resume. This action cannot be undone."
        actions={
          <>
            <Button variant="outline" size="sm" onClick={() => setResetOpen(false)}>Cancel</Button>
            <Button variant="danger"  size="sm"
              onClick={() => { resetResume(); setResetOpen(false); toast('Resume reset', 'info'); }}>
              Reset Resume
            </Button>
          </>
        }
      />
    </>
  );
}
