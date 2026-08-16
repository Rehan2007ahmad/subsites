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
  MdMoreVert,
} from 'react-icons/md';
import { TemplateSelector } from './TemplateSelector';

export function BuilderHeader({
  mobileTab,
  setMobileTab,
}: {
  mobileTab: 'edit' | 'preview';
  setMobileTab: (t: 'edit' | 'preview') => void;
}) {
  const saveStatus = useResumeStore((s) => s.saveStatus);
  const loadSampleResume = useResumeStore((s) => s.loadSampleResume);
  const resetResume = useResumeStore((s) => s.resetResume);
  const importResume = useResumeStore((s) => s.importResume);
  const exportResume = useResumeStore((s) => s.exportResume);
  const { toast } = useToast();

  const [templateOpen, setTemplateOpen] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);

  const statusIcons = {
    idle: null,
    saving: <MdAutorenew size={14} className="animate-spin text-slate-400" />,
    saved: <MdCheckCircle size={14} className="text-green-500" />,
    error: <MdError size={14} className="text-red-500" />,
  };
  const statusTexts = {
    idle: '',
    saving: 'Saving...',
    saved: 'Saved locally',
    error: 'Save failed',
  };

  async function handleDownloadPdf() {
    setPdfLoading(true);
    try {
      await generateResumePdf('resume-preview', 'resume-tooleka.pdf');
      toast('Resume downloaded as PDF');
    } catch {
      toast('PDF generation failed. Please try again.', 'error');
    } finally {
      setPdfLoading(false);
    }
  }

  function handleExport() {
    const json = exportResume();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume-tooleka.json';
    a.click();
    URL.revokeObjectURL(url);
    toast('Resume data exported');
    setMenuOpen(false);
  }

  function handleImport() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result as string);
          importResume(data);
          toast('Resume imported successfully');
        } catch {
          toast('Invalid resume file. Please check the format.', 'error');
        }
      };
      reader.readAsText(file);
    };
    input.click();
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm h-14 flex items-center">
        <div className="flex items-center w-full px-4 gap-3">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xs">T</span>
            <span className="hidden sm:block font-semibold text-slate-900 text-sm">
              ToolEka <span className="text-blue-600">Resume</span>
            </span>
          </Link>

          {/* Save status */}
          {saveStatus !== 'idle' && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 ml-2">
              {statusIcons[saveStatus]}
              <span>{statusTexts[saveStatus]}</span>
            </div>
          )}

          {/* Mobile tab switcher */}
          <div className="flex md:hidden ml-2 rounded-lg border border-slate-200 overflow-hidden text-xs font-medium">
            <button
              onClick={() => setMobileTab('edit')}
              className={`h-8 px-3 transition-colors ${mobileTab === 'edit' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600'}`}
            >
              Edit
            </button>
            <button
              onClick={() => setMobileTab('preview')}
              className={`h-8 px-3 transition-colors ${mobileTab === 'preview' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600'}`}
            >
              Preview
            </button>
          </div>

          <div className="flex-1" />

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<MdPalette size={16} />}
              onClick={() => setTemplateOpen(true)}
              className="hidden sm:inline-flex"
            >
              Template
            </Button>

            <Button
              size="sm"
              leftIcon={<MdDownload size={16} />}
              onClick={handleDownloadPdf}
              loading={pdfLoading}
            >
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </Button>

            {/* More menu */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                aria-label="More options"
              >
                <MdMoreVert size={18} />
              </button>
              {menuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                  <div className="absolute right-0 top-10 z-20 min-w-[180px] bg-white rounded-xl border border-slate-200 shadow-lg py-1 text-sm">
                    <button onClick={() => { setTemplateOpen(true); setMenuOpen(false); }} className="flex w-full items-center gap-2 px-4 py-2 hover:bg-slate-50 text-slate-700">
                      <MdPalette size={16} /> Templates
                    </button>
                    <button onClick={handleExport} className="flex w-full items-center gap-2 px-4 py-2 hover:bg-slate-50 text-slate-700">
                      <MdFileDownload size={16} /> Export JSON
                    </button>
                    <button onClick={handleImport} className="flex w-full items-center gap-2 px-4 py-2 hover:bg-slate-50 text-slate-700">
                      <MdUpload size={16} /> Import JSON
                    </button>
                    <hr className="my-1 border-slate-100" />
                    <button onClick={() => { setResetOpen(true); setMenuOpen(false); }} className="flex w-full items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-600">
                      <MdDelete size={16} /> Reset Resume
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Template dialog */}
      <Dialog open={templateOpen} onClose={() => setTemplateOpen(false)} title="Choose Template" size="md">
        <TemplateSelector onClose={() => setTemplateOpen(false)} />
      </Dialog>

      {/* Reset confirm dialog */}
      <Dialog
        open={resetOpen}
        onClose={() => setResetOpen(false)}
        title="Reset Resume"
        description="This will permanently delete your locally saved resume data. This cannot be undone."
        actions={
          <>
            <Button variant="outline" onClick={() => setResetOpen(false)}>Cancel</Button>
            <Button
              variant="danger"
              onClick={() => { resetResume(); setResetOpen(false); toast('Resume reset', 'info'); }}
            >
              Reset
            </Button>
          </>
        }
      />
    </>
  );
}
