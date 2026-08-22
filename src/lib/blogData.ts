export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  author: string;
  category: string;
  readingTime: string;
  wordCount: number;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'how-to-write-ats-friendly-resume',
    title: 'How to Write an ATS-Friendly Resume in 2026: The Complete Step-by-Step Guide',
    description:
      'Master the rules of Applicant Tracking Systems (ATS). Learn how modern parsers (Workday, Taleo, Greenhouse) scan resumes, optimize keywords, and format sections for 100% parse rates.',
    publishedDate: 'August 22, 2026',
    author: 'Rehan Ahmad',
    category: 'ATS Strategy',
    readingTime: '12 min read',
    wordCount: 2250,
  },
  {
    slug: 'resume-vs-cv-difference',
    title: 'Resume vs. CV: Key Differences, When to Use Which, and Global Standards',
    description:
      'Understand the crucial differences between a Resume and a Curriculum Vitae (CV). Discover international hiring standards across the US, UK, Europe, Australia, and academia.',
    publishedDate: 'August 22, 2026',
    author: 'ToolEka Editorial Team',
    category: 'Career Basics',
    readingTime: '11 min read',
    wordCount: 2050,
  },
  {
    slug: 'top-resume-action-verbs-and-power-words',
    title: '250+ High-Impact Resume Action Verbs & Power Words That Get You Hired',
    description:
      'Transform passive job descriptions into compelling achievements with 250+ categorized power verbs across 12 disciplines, including before-and-after bullet transformations.',
    publishedDate: 'August 22, 2026',
    author: 'Rehan Ahmad',
    category: 'Resume Writing',
    readingTime: '13 min read',
    wordCount: 2300,
  },
  {
    slug: 'how-to-format-work-experience-bullet-points',
    title: 'How to Write Powerful Resume Work Experience Bullet Points Using STAR & Google XYZ Methods',
    description:
      'Master the Google XYZ and STAR frameworks to write high-converting resume bullet points with quantified business metrics and actionable real-world examples.',
    publishedDate: 'August 22, 2026',
    author: 'ToolEka Editorial Team',
    category: 'Writing Formulas',
    readingTime: '12 min read',
    wordCount: 2150,
  },
  {
    slug: 'career-change-resume-guide',
    title: 'How to Write a Career Change Resume: Transitioning Industries with Confidence',
    description:
      'Pivoting to a new field or industry? Master the Hybrid resume format, transferable skills mapping, and compelling career transition summaries across 8 real-world career pivot scenarios.',
    publishedDate: 'August 22, 2026',
    author: 'Rehan Ahmad',
    category: 'Career Pivot',
    readingTime: '12 min read',
    wordCount: 2200,
  },
];
