// ============================================================
// Resume Data Model – strongly typed
// ============================================================

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  photo?: string; // base64 data URL
}

export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string; // newline-separated bullet points
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  gpa?: string;
}

export interface Skill {
  id: string;
  name: string;
  category?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
  url?: string;
  githubUrl?: string;
  date?: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  credentialUrl?: string;
}

export type LanguageProficiency =
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced'
  | 'Fluent'
  | 'Native';

export interface Language {
  id: string;
  language: string;
  proficiency: LanguageProficiency;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
}

export type TemplateId =
  | 'classic'
  | 'modern'
  | 'minimal'
  | 'developer'
  | 'student'
  | 'executive';

export type FontFamily = 'Inter' | 'Georgia' | 'Roboto' | 'Lato';

export interface ResumeSettings {
  template: TemplateId;
  accentColor: string;
  fontFamily: FontFamily;
  showPhoto: boolean;
}

export type SectionKey =
  | 'summary'
  | 'experience'
  | 'education'
  | 'skills'
  | 'projects'
  | 'certifications'
  | 'languages'
  | 'achievements'
  | 'interests';

export interface ResumeData {
  personal: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  achievements: Achievement[];
  interests: string[];
  sectionOrder: SectionKey[];
  settings: ResumeSettings;
}

// ============================================================
// Template meta info (used in template gallery)
// ============================================================
export interface TemplateInfo {
  id: TemplateId;
  name: string;
  description: string;
  atsScore: 'High' | 'Medium' | 'Low';
  bestFor: string[];
  previewBg: string;
}

export const TEMPLATES: TemplateInfo[] = [
  {
    id: 'classic',
    name: 'Classic',
    description:
      'A timeless professional layout trusted by hiring managers across all industries.',
    atsScore: 'High',
    bestFor: ['Business', 'Finance', 'Accounting', 'Management'],
    previewBg: '#1e3a5f',
  },
  {
    id: 'modern',
    name: 'Modern',
    description:
      'Clean two-column design that stands out while remaining professional.',
    atsScore: 'Medium',
    bestFor: ['Marketing', 'Design', 'Sales', 'Consulting'],
    previewBg: '#0f4c75',
  },
  {
    id: 'executive',
    name: 'Executive',
    description:
      'Premium dark sidebar layout with bold header styling and skill bar metrics.',
    atsScore: 'High',
    bestFor: ['Executive', 'Sales', 'Creative', 'Leadership', 'Tech'],
    previewBg: '#222222',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Pure typography and whitespace. Elegant simplicity.',
    atsScore: 'High',
    bestFor: ['Any industry', 'Academic', 'Writing', 'Research'],
    previewBg: '#2d2d2d',
  },
  {
    id: 'developer',
    name: 'Developer',
    description:
      'Built for software engineers. Highlights tech stack, projects, and GitHub.',
    atsScore: 'High',
    bestFor: ['Software Engineering', 'Web Dev', 'Full Stack', 'DevOps'],
    previewBg: '#0d1117',
  },
  {
    id: 'student',
    name: 'Student',
    description:
      'Emphasizes education, projects, skills, and achievements for early-career candidates.',
    atsScore: 'High',
    bestFor: ['Fresh Graduate', 'Internships', 'Entry Level', 'Academic'],
    previewBg: '#1a472a',
  },
];

export const DEFAULT_SECTION_ORDER: SectionKey[] = [
  'summary',
  'experience',
  'education',
  'skills',
  'projects',
  'certifications',
  'languages',
  'achievements',
  'interests',
];

export const SECTION_LABELS: Record<SectionKey, string> = {
  summary: 'Professional Summary',
  experience: 'Work Experience',
  education: 'Education',
  skills: 'Skills',
  projects: 'Projects',
  certifications: 'Certifications',
  languages: 'Languages',
  achievements: 'Achievements',
  interests: 'Interests',
};
