import React from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram } from 'react-icons/fa6';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E5E5E5] bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
              <span className="flex h-8 w-8 items-center justify-center bg-black text-white text-xs font-black">T</span>
              <span className="text-[1.05rem] font-black tracking-tight text-black">
                Tool<span className="text-[#595959]">Eka</span>
              </span>
            </Link>
            <p className="text-sm text-[#404040] leading-relaxed max-w-xs mb-6">
              Free online calculators, developer tools, text utilities, and health metrics — all running privately in your browser. No account, no uploads, no tracking.
            </p>
            <div className="flex gap-2">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="w-8 h-8 flex items-center justify-center border border-[#E5E5E5] text-[#404040] hover:border-black hover:text-black hover:bg-[#F7F7F7] transition-colors">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/rehan_ahx" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center border border-[#E5E5E5] text-[#404040] hover:border-black hover:text-black hover:bg-[#F7F7F7] transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#595959] mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/builder', label: 'Resume Builder' },
                { href: 'https://tooleka.com', label: 'All Tools' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#404040] hover:text-black transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#595959] mb-4">Contact</p>
            <a href="mailto:hello@tooleka.com"
              className="inline-flex items-center gap-1.5 text-xs font-medium border border-[#E5E5E5] px-3 py-2 text-[#404040] hover:border-black hover:text-black transition-colors">
              Send a message →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#595959]">© {year} ToolEka. All rights reserved.</p>
          <p className="text-xs text-[#595959]">Built by Rehan Ahmad · browser-based tools for everyone.</p>
        </div>
      </div>
    </footer>
  );
}
