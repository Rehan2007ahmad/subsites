import React from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram } from 'react-icons/fa6';
import { HiShieldCheck, HiDocumentText, HiBookOpen } from 'react-icons/hi2';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E5E5E5] bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
              <span className="flex h-8 w-8 items-center justify-center bg-black text-white text-xs font-black">T</span>
              <span className="text-[1.05rem] font-black tracking-tight text-black">
                Tool<span className="text-[#595959]">Eka</span>
                <span className="ml-1 text-xs font-semibold text-[#595959] tracking-widest uppercase">Resume</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#595959] leading-relaxed max-w-sm">
              Free, privacy-first online resume builder. Designed to help job seekers generate clean, ATS-compliant PDF resumes with zero hidden subscriptions, no sign-up traps, and 100% local browser storage.
            </p>
            <div className="flex gap-2 pt-1">
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

          {/* Career Guides & Blog */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-black mb-4">
              Career Guides
            </p>
            <ul className="space-y-2 text-xs text-[#595959]">
              <li>
                <Link href="/blog/how-to-write-ats-friendly-resume" className="hover:text-black hover:underline transition-colors">
                  ATS-Friendly Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/resume-vs-cv-difference" className="hover:text-black hover:underline transition-colors">
                  Resume vs. CV
                </Link>
              </li>
              <li>
                <Link href="/blog/top-resume-action-verbs-and-power-words" className="hover:text-black hover:underline transition-colors">
                  250+ Action Verbs
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-format-work-experience-bullet-points" className="hover:text-black hover:underline transition-colors">
                  Google XYZ Formula
                </Link>
              </li>
              <li>
                <Link href="/blog/career-change-resume-guide" className="hover:text-black hover:underline transition-colors">
                  Career Change Resumes
                </Link>
              </li>
              <li className="pt-1 font-semibold text-black">
                <Link href="/blog" className="hover:underline">
                  All Blog Articles →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-black mb-4">
              Company
            </p>
            <ul className="space-y-2 text-xs text-[#595959]">
              <li>
                <Link href="/about" className="hover:text-black hover:underline transition-colors">
                  About Us &amp; Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black hover:underline transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <a href="https://tooleka.com" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline transition-colors">
                  ToolEka Main Portal ↗
                </a>
              </li>
              <li>
                <Link href="/builder" className="hover:text-black hover:underline transition-colors">
                  Launch Builder
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Privacy (Google AdSense Required) */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-black mb-4">
              Legal &amp; Privacy
            </p>
            <ul className="space-y-2 text-xs text-[#595959]">
              <li>
                <Link href="/privacy-policy" className="hover:text-black hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-black hover:underline transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-black hover:underline transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#737373]">© {year} ToolEka Resume. All rights reserved.</p>
          <p className="text-xs text-[#737373]">
            Built by <strong>Rehan Ahmad</strong> &bull; Free browser-based tools for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
