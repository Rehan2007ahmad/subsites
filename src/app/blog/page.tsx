import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { BLOG_POSTS } from '@/lib/blogData';
import { HiBookOpen, HiClock, HiUser, HiArrowRight, HiSparkles } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Resume & Career Advice Blog — ATS Guides & Tips | ToolEka',
  description:
    'Explore comprehensive career guides, ATS optimization tips, resume vs CV differences, high-impact action verbs, and proven bullet point formulas from ToolEka.',
  alternates: { canonical: 'https://resume.tooleka.com/blog' },
  openGraph: {
    title: 'Resume & Career Advice Blog — ATS Guides & Tips | ToolEka',
    description:
      'Explore comprehensive career guides, ATS optimization tips, resume vs CV differences, high-impact action verbs, and proven bullet point formulas.',
    url: 'https://resume.tooleka.com/blog',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'ToolEka Resume & Career Insights Blog',
    description: 'Expert guides on ATS resume optimization, formatting, action verbs, and career transitions.',
    url: 'https://resume.tooleka.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'ToolEka',
      url: 'https://tooleka.com',
    },
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://resume.tooleka.com/blog/${post.slug}`,
      datePublished: '2026-02-20',
      author: {
        '@type': 'Person',
        name: post.author,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="min-h-screen bg-[#FBFBFB] py-12 md:py-16 text-[#262626]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Card */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 mb-10 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-semibold uppercase tracking-widest mb-4">
              <HiBookOpen size={14} />
              <span>Career &amp; Resume Insights</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
              The Complete Resume &amp; Job Search Guide Hub
            </h1>
            <p className="text-sm sm:text-base text-[#595959] leading-relaxed max-w-3xl">
              In-depth, data-backed tutorials on beating Applicant Tracking Systems (ATS), crafting metric-driven bullet points, mastering industry pivots, and landing top job interviews in 2026.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {BLOG_POSTS.map((post, idx) => (
              <article
                key={post.slug}
                className={`bg-white border border-[#E5E5E5] flex flex-col justify-between p-6 sm:p-8 hover:border-black transition-colors shadow-xs group ${
                  idx === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#F2F2F2] text-black">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-[#737373]">
                      <span className="flex items-center gap-1">
                        <HiClock size={13} /> {post.readingTime}
                      </span>
                    </div>
                  </div>

                  <h2 className={`font-bold text-black tracking-tight group-hover:text-neutral-700 transition-colors mb-3 ${
                    idx === 0 ? 'text-xl sm:text-2xl' : 'text-lg'
                  }`}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#595959] leading-relaxed mb-6">
                    {post.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#737373]">
                    <HiUser size={14} className="text-black" />
                    <span>{post.author}</span>
                    <span>&bull;</span>
                    <span>{post.publishedDate}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-black group-hover:underline"
                  >
                    Read Guide <HiArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Builder Promo Strip */}
          <div className="bg-black text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-2 uppercase tracking-wider">
                <HiSparkles size={14} /> Ready to put these tips to work?
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Build Your ATS-Friendly Resume in 5 Minutes
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
                100% Free &bull; No Sign-Up &bull; Instant Single-Page Vector PDF Export
              </p>
            </div>
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
            >
              Start Building Now →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
