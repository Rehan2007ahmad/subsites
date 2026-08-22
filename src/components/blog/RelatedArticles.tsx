import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blogData';
import { HiArrowRight, HiClock, HiSparkles, HiBookOpen } from 'react-icons/hi2';

interface RelatedArticlesProps {
  currentSlug: string;
}

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== currentSlug);

  return (
    <section className="pt-8 border-t border-[#E5E5E5] space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#595959] mb-1">
            <HiSparkles size={14} className="text-amber-500" /> Continue Reading
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
            More Essential Resume &amp; Career Guides
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-black hover:underline"
        >
          View All Guides →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {otherPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group p-5 bg-[#FBFBFB] border border-[#E5E5E5] hover:border-black transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white border border-[#E5E5E5] text-black">
                  {post.category}
                </span>
                <span className="text-[11px] text-[#737373] flex items-center gap-1">
                  <HiClock size={12} /> {post.readingTime}
                </span>
              </div>
              <h3 className="font-bold text-sm text-black group-hover:text-neutral-700 transition-colors line-clamp-2 mb-1.5">
                {post.title}
              </h3>
              <p className="text-xs text-[#595959] line-clamp-2 leading-relaxed">
                {post.description}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold text-black group-hover:underline">
              <span>Read Full Guide</span>
              <HiArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
