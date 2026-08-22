'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiBars3, HiXMark } from 'react-icons/hi2';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${scrolled ? 'shadow-[0_1px_0_0_#E5E5E5,0_2px_8px_0_rgba(0,0,0,0.06)]' : 'border-b border-[#E5E5E5]'}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
          <span className="flex h-8 w-8 items-center justify-center bg-black text-white text-xs font-black select-none">T</span>
          <span className="text-[1.05rem] font-black tracking-tight text-black">
            Tool<span className="text-[#595959]">Eka</span>
            <span className="ml-1 text-xs font-semibold text-[#595959] tracking-widest uppercase">Resume</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/blog" className="text-sm font-medium text-[#404040] hover:text-black transition-colors">
            Blog &amp; Guides
          </Link>
          <Link href="/about" className="text-sm font-medium text-[#404040] hover:text-black transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-[#404040] hover:text-black transition-colors">
            Contact
          </Link>
          <a href="https://tooleka.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#737373] hover:text-black transition-colors">
            tooleka.com ↗
          </a>
          <Link href="/builder" className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1">
            Create Resume
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button type="button" onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          className="flex md:hidden items-center justify-center w-9 h-9 text-black hover:bg-[#F7F7F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
          {menuOpen ? <HiXMark className="w-[18px] h-[18px]" /> : <HiBars3 className="w-[18px] h-[18px]" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E5E5]">
          <div className="px-4 pt-3 pb-5 flex flex-col gap-0.5">
            <Link href="/" onClick={() => setMenuOpen(false)}
              className="flex items-center px-3 py-2.5 text-sm font-medium text-[#404040] hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)}
              className="flex items-center px-3 py-2.5 text-sm font-medium text-[#404040] hover:text-black transition-colors">
              Blog &amp; Guides
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}
              className="flex items-center px-3 py-2.5 text-sm font-medium text-[#404040] hover:text-black transition-colors">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}
              className="flex items-center px-3 py-2.5 text-sm font-medium text-[#404040] hover:text-black transition-colors">
              Contact
            </Link>
            <a href="https://tooleka.com" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
              className="flex items-center px-3 py-2.5 text-sm font-medium text-[#737373] hover:text-black transition-colors">
              ToolEka.com ↗
            </a>
            <div className="mt-3 pt-3 border-t border-[#E5E5E5]">
              <Link href="/builder" onClick={() => setMenuOpen(false)}
                className="block w-full px-3 py-2.5 text-sm font-semibold text-white bg-black hover:bg-neutral-800 transition-colors text-center">
                Create Resume
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
