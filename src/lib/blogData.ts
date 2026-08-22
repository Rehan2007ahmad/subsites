export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  author: string;
  category: string;
  readingTime: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'how-to-write-ats-friendly-resume',
    title: 'How to Write an ATS-Friendly Resume in 2026: The Complete Step-by-Step Guide',
    description:
      'Discover how to beat Applicant Tracking Systems (ATS). Master parsing rules, keyword strategy, standard formatting, and essential checklists to land more interviews.',
    publishedDate: 'February 20, 2026',
    author: 'Rehan Ahmad',
    category: 'ATS Strategy',
    readingTime: '8 min read',
  },
  {
    slug: 'resume-vs-cv-difference',
    title: 'Resume vs. CV: Key Differences, When to Use Which, and Global Standards',
    description:
      'Unravel the differences between a Resume and a Curriculum Vitae (CV). Learn which document employers expect across the US, UK, Europe, and academic institutions.',
    publishedDate: 'February 18, 2026',
    author: 'ToolEka Editorial Team',
    category: 'Career Basics',
    readingTime: '7 min read',
  },
  {
    slug: 'top-resume-action-verbs-and-power-words',
    title: '250+ High-Impact Resume Action Verbs & Power Words That Get You Hired',
    description:
      'Transform boring job descriptions into compelling achievements with 250+ categorized power verbs. Includes before-and-after bullet point transformations.',
    publishedDate: 'February 15, 2026',
    author: 'Rehan Ahmad',
    category: 'Resume Writing',
    readingTime: '9 min read',
  },
  {
    slug: 'how-to-format-work-experience-bullet-points',
    title: 'How to Write Powerful Resume Work Experience Bullet Points Using STAR & Google XYZ Methods',
    description:
      'Master the Google XYZ and STAR formulas to write high-converting resume bullet points with quantified results and measurable business impact.',
    publishedDate: 'February 12, 2026',
    author: 'ToolEka Editorial Team',
    category: 'Writing Formulas',
    readingTime: '8 min read',
  },
  {
    slug: 'career-change-resume-guide',
    title: 'How to Write a Career Change Resume: Transitioning Industries with Confidence',
    description:
      'Pivoting to a new field or industry? Learn how to structure a hybrid resume, reframe transferable skills, and convince hiring managers you are the ideal fit.',
    publishedDate: 'February 10, 2026',
    author: 'Rehan Ahmad',
    category: 'Career Pivot',
    readingTime: '9 min read',
  },
];
