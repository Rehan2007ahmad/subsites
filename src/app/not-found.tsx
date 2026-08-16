import React from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <p className="text-6xl font-bold text-slate-200 mb-4">404</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Page not found</h1>
        <p className="text-slate-500 mb-8 max-w-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-3">
          <Link
            href="/"
            className="h-10 px-5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 inline-flex items-center transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/builder"
            className="h-10 px-5 rounded-xl border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 inline-flex items-center transition-colors"
          >
            Resume Builder
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
