import type { ResumeData } from '@/types/resume';
import { DEFAULT_SECTION_ORDER } from '@/types/resume';
import { nanoid } from '@/lib/nanoid';

export function createEmptyResume(): ResumeData {
  return {
    personal: {
      fullName: '',
      jobTitle: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      linkedin: '',
      github: '',
      photo: undefined,
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
    achievements: [],
    interests: [],
    sectionOrder: [...DEFAULT_SECTION_ORDER],
    settings: {
      template: 'classic',
      accentColor: '#2563eb',
      fontFamily: 'Inter',
      showPhoto: false,
    },
  };
}

export function createSampleResume(): ResumeData {
  return {
    personal: {
      fullName: 'Alex Morgan',
      jobTitle: 'Senior Software Engineer',
      email: 'alex.morgan@email.com',
      phone: '+1 (555) 234-5678',
      location: 'San Francisco, CA',
      website: 'alexmorgan.dev',
      linkedin: 'linkedin.com/in/alexmorgan',
      github: 'github.com/alexmorgan',
      photo: undefined,
    },
    summary:
      'Senior Software Engineer with 6+ years of experience building scalable web applications and distributed systems. Proficient in React, Next.js, Node.js, and AWS. Passionate about clean architecture, developer experience, and shipping products users love.',
    experience: [
      {
        id: nanoid(),
        jobTitle: 'Senior Software Engineer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, CA',
        startDate: '2022-03',
        endDate: '',
        current: true,
        description:
          'Led development of a microservices platform serving 2M+ daily active users\nReduced API latency by 40% through Redis caching and query optimization\nMentored a team of 4 junior engineers, conducting weekly code reviews\nDrove adoption of TypeScript across all frontend projects, reducing bugs by 30%',
      },
      {
        id: nanoid(),
        jobTitle: 'Software Engineer',
        company: 'StartupXYZ',
        location: 'Remote',
        startDate: '2020-06',
        endDate: '2022-02',
        current: false,
        description:
          'Built core features for a SaaS platform using React, Next.js, and GraphQL\nDesigned and implemented a real-time notification system using WebSockets\nImproved test coverage from 42% to 85% with Jest and React Testing Library\nCollaborated with product and design teams to ship 3 major feature releases',
      },
      {
        id: nanoid(),
        jobTitle: 'Junior Developer',
        company: 'WebAgency LLC',
        location: 'Austin, TX',
        startDate: '2018-09',
        endDate: '2020-05',
        current: false,
        description:
          'Developed and maintained 15+ client websites using React and WordPress\nIntegrated third-party APIs including Stripe, Twilio, and Google Maps\nOptimized page load times by 50% through lazy loading and image compression',
      },
    ],
    education: [
      {
        id: nanoid(),
        degree: 'B.S. Computer Science',
        institution: 'University of California, Berkeley',
        location: 'Berkeley, CA',
        startDate: '2014-09',
        endDate: '2018-05',
        description: 'Dean\'s List. Focus on software engineering and distributed systems.',
        gpa: '3.8',
      },
    ],
    skills: [
      { id: nanoid(), name: 'TypeScript', category: 'Programming' },
      { id: nanoid(), name: 'JavaScript', category: 'Programming' },
      { id: nanoid(), name: 'Python', category: 'Programming' },
      { id: nanoid(), name: 'React', category: 'Frameworks' },
      { id: nanoid(), name: 'Next.js', category: 'Frameworks' },
      { id: nanoid(), name: 'Node.js', category: 'Frameworks' },
      { id: nanoid(), name: 'GraphQL', category: 'Frameworks' },
      { id: nanoid(), name: 'PostgreSQL', category: 'Databases' },
      { id: nanoid(), name: 'MongoDB', category: 'Databases' },
      { id: nanoid(), name: 'Redis', category: 'Databases' },
      { id: nanoid(), name: 'AWS', category: 'Tools' },
      { id: nanoid(), name: 'Docker', category: 'Tools' },
      { id: nanoid(), name: 'Git', category: 'Tools' },
      { id: nanoid(), name: 'CI/CD', category: 'Tools' },
    ],
    projects: [
      {
        id: nanoid(),
        name: 'OpenMetrics Dashboard',
        description:
          'A real-time analytics dashboard for monitoring distributed systems. Supports custom metrics, alerting, and team collaboration.',
        technologies: 'Next.js, TypeScript, D3.js, PostgreSQL, Redis',
        url: 'openmetrics.dev',
        githubUrl: 'github.com/alexmorgan/openmetrics',
        date: '2023-08',
      },
      {
        id: nanoid(),
        name: 'DevFlow CLI',
        description:
          'A developer productivity CLI tool that automates common git workflows, PR templates, and code review assignments.',
        technologies: 'Node.js, TypeScript, GitHub API',
        githubUrl: 'github.com/alexmorgan/devflow',
        date: '2022-11',
      },
    ],
    certifications: [
      {
        id: nanoid(),
        name: 'AWS Certified Solutions Architect – Associate',
        organization: 'Amazon Web Services',
        date: '2023-04',
        credentialUrl: 'aws.amazon.com/certification',
      },
    ],
    languages: [
      { id: nanoid(), language: 'English', proficiency: 'Native' },
      { id: nanoid(), language: 'Spanish', proficiency: 'Intermediate' },
    ],
    achievements: [
      {
        id: nanoid(),
        title: 'Best Technical Presentation',
        description: 'Awarded at TechCorp internal engineering conference for a talk on distributed caching strategies.',
        date: '2023-09',
      },
    ],
    interests: ['Open Source', 'Rock Climbing', 'Coffee Brewing', 'Board Games'],
    sectionOrder: [...DEFAULT_SECTION_ORDER],
    settings: {
      template: 'classic',
      accentColor: '#2563eb',
      fontFamily: 'Inter',
      showPhoto: false,
    },
  };
}

export const RESUME_EXAMPLES: Record<string, () => ResumeData> = {
  'software-engineer': () => createSampleResume(),
  'student': () => ({
    personal: {
      fullName: 'Jordan Lee',
      jobTitle: 'Computer Science Student',
      email: 'jordan.lee@university.edu',
      phone: '+1 (555) 123-4567',
      location: 'Boston, MA',
      website: '',
      linkedin: 'linkedin.com/in/jordanlee',
      github: 'github.com/jordanlee',
    },
    summary:
      'Motivated Computer Science student with hands-on experience in web development and machine learning. Seeking a software engineering internship to apply classroom knowledge to real-world problems.',
    experience: [
      {
        id: nanoid(),
        jobTitle: 'Software Engineering Intern',
        company: 'InnovateTech',
        location: 'Boston, MA',
        startDate: '2024-06',
        endDate: '2024-08',
        current: false,
        description:
          'Built a customer-facing dashboard using React and Node.js\nWrote unit tests that improved code coverage by 20%\nParticipated in daily standups and agile sprint planning',
      },
    ],
    education: [
      {
        id: nanoid(),
        degree: 'B.S. Computer Science',
        institution: 'Boston University',
        location: 'Boston, MA',
        startDate: '2022-09',
        endDate: '2026-05',
        description: 'GPA: 3.9/4.0. Relevant coursework: Algorithms, Data Structures, Operating Systems, Machine Learning.',
        gpa: '3.9',
      },
    ],
    skills: [
      { id: nanoid(), name: 'Python', category: 'Programming' },
      { id: nanoid(), name: 'Java', category: 'Programming' },
      { id: nanoid(), name: 'JavaScript', category: 'Programming' },
      { id: nanoid(), name: 'React', category: 'Frameworks' },
      { id: nanoid(), name: 'Flask', category: 'Frameworks' },
      { id: nanoid(), name: 'MySQL', category: 'Databases' },
      { id: nanoid(), name: 'Git', category: 'Tools' },
    ],
    projects: [
      {
        id: nanoid(),
        name: 'Campus Event Finder',
        description: 'A web app that aggregates campus events and lets students RSVP, built for BU HackFest 2024.',
        technologies: 'React, Flask, SQLite',
        githubUrl: 'github.com/jordanlee/campus-events',
        date: '2024-02',
      },
    ],
    certifications: [
      {
        id: nanoid(),
        name: 'Google IT Support Professional Certificate',
        organization: 'Google / Coursera',
        date: '2023-12',
      },
    ],
    languages: [{ id: nanoid(), language: 'English', proficiency: 'Native' }],
    achievements: [
      {
        id: nanoid(),
        title: '2nd Place – BU HackFest 2024',
        description: 'Placed 2nd out of 60 teams for the Campus Event Finder project.',
        date: '2024-02',
      },
    ],
    interests: ['Machine Learning', 'Open Source', 'Hiking', 'Chess'],
    sectionOrder: [...DEFAULT_SECTION_ORDER],
    settings: { template: 'student', accentColor: '#16a34a', fontFamily: 'Inter', showPhoto: false },
  }),
  'accountant': () => ({
    personal: {
      fullName: 'Patricia Chen',
      jobTitle: 'Senior Accountant',
      email: 'patricia.chen@email.com',
      phone: '+1 (555) 987-6543',
      location: 'Chicago, IL',
      website: '',
      linkedin: 'linkedin.com/in/patriciachenCPA',
      github: '',
    },
    summary:
      'CPA with 8+ years of experience in financial reporting, tax compliance, and audit management. Proven track record of identifying cost-saving opportunities and ensuring regulatory compliance for Fortune 500 clients.',
    experience: [
      {
        id: nanoid(),
        jobTitle: 'Senior Accountant',
        company: 'Deloitte',
        location: 'Chicago, IL',
        startDate: '2019-07',
        endDate: '',
        current: true,
        description:
          'Manage financial reporting for 12+ corporate clients with combined revenue of $500M+\nLed audit team of 6 for SEC-compliant financial statements\nIdentified $2.3M in cost-saving opportunities through expense analysis\nEnsured compliance with GAAP, IFRS, and Sarbanes-Oxley requirements',
      },
      {
        id: nanoid(),
        jobTitle: 'Staff Accountant',
        company: 'Grant Thornton',
        location: 'Chicago, IL',
        startDate: '2016-08',
        endDate: '2019-06',
        current: false,
        description:
          'Prepared federal and state tax returns for 50+ business clients\nConducted internal audits and risk assessments\nReconciled balance sheets and income statements monthly',
      },
    ],
    education: [
      {
        id: nanoid(),
        degree: 'B.S. Accounting',
        institution: 'University of Illinois at Urbana-Champaign',
        location: 'Champaign, IL',
        startDate: '2012-09',
        endDate: '2016-05',
        description: 'Magna Cum Laude. Beta Alpha Psi member.',
        gpa: '3.7',
      },
    ],
    skills: [
      { id: nanoid(), name: 'GAAP / IFRS', category: 'Accounting' },
      { id: nanoid(), name: 'Tax Compliance', category: 'Accounting' },
      { id: nanoid(), name: 'Audit Management', category: 'Accounting' },
      { id: nanoid(), name: 'QuickBooks', category: 'Tools' },
      { id: nanoid(), name: 'SAP', category: 'Tools' },
      { id: nanoid(), name: 'Microsoft Excel', category: 'Tools' },
      { id: nanoid(), name: 'CPA License', category: 'Certifications' },
    ],
    projects: [],
    certifications: [
      {
        id: nanoid(),
        name: 'Certified Public Accountant (CPA)',
        organization: 'Illinois CPA Society',
        date: '2017-11',
      },
    ],
    languages: [
      { id: nanoid(), language: 'English', proficiency: 'Native' },
      { id: nanoid(), language: 'Mandarin', proficiency: 'Fluent' },
    ],
    achievements: [
      {
        id: nanoid(),
        title: 'Employee of the Year',
        description: 'Awarded at Deloitte Chicago office for exceptional client service.',
        date: '2022-12',
      },
    ],
    interests: ['Financial Analysis', 'Volunteering', 'Travel'],
    sectionOrder: [...DEFAULT_SECTION_ORDER],
    settings: { template: 'classic', accentColor: '#1e3a5f', fontFamily: 'Georgia', showPhoto: false },
  }),
  'teacher': () => ({
    personal: {
      fullName: 'Marcus Johnson',
      jobTitle: 'High School English Teacher',
      email: 'marcus.johnson@school.edu',
      phone: '+1 (555) 456-7890',
      location: 'Atlanta, GA',
      website: '',
      linkedin: 'linkedin.com/in/marcusjohnsonteacher',
      github: '',
    },
    summary:
      'Dedicated high school English teacher with 7 years of experience designing engaging curriculum and fostering a love of literature. Committed to inclusive education and student success, with a track record of improving standardized test scores by 20%.',
    experience: [
      {
        id: nanoid(),
        jobTitle: 'English Teacher (Grades 9–12)',
        company: 'Westview High School',
        location: 'Atlanta, GA',
        startDate: '2018-08',
        endDate: '',
        current: true,
        description:
          'Design and teach AP English Language and Composition courses for 120+ students\nImproved AP exam pass rate from 62% to 84% over three years\nLead the school\'s creative writing club with 35+ active members\nMentor and coach student debate team, winning 3 regional championships',
      },
      {
        id: nanoid(),
        jobTitle: 'English Teacher (Grades 6–8)',
        company: 'Riverside Middle School',
        location: 'Atlanta, GA',
        startDate: '2017-08',
        endDate: '2018-06',
        current: false,
        description:
          'Taught reading comprehension, grammar, and writing to 90 students\nImplemented differentiated instruction for diverse learning needs',
      },
    ],
    education: [
      {
        id: nanoid(),
        degree: 'M.A. English Education',
        institution: 'Georgia State University',
        location: 'Atlanta, GA',
        startDate: '2015-09',
        endDate: '2017-05',
        description: '',
        gpa: '3.9',
      },
      {
        id: nanoid(),
        degree: 'B.A. English Literature',
        institution: 'Morehouse College',
        location: 'Atlanta, GA',
        startDate: '2011-09',
        endDate: '2015-05',
        description: 'Magna Cum Laude.',
        gpa: '3.8',
      },
    ],
    skills: [
      { id: nanoid(), name: 'Curriculum Development', category: 'Teaching' },
      { id: nanoid(), name: 'AP English', category: 'Teaching' },
      { id: nanoid(), name: 'Differentiated Instruction', category: 'Teaching' },
      { id: nanoid(), name: 'Google Classroom', category: 'Tools' },
      { id: nanoid(), name: 'Canvas LMS', category: 'Tools' },
      { id: nanoid(), name: 'Public Speaking', category: 'Soft Skills' },
    ],
    projects: [],
    certifications: [
      {
        id: nanoid(),
        name: 'Georgia Teaching Certification – English (6–12)',
        organization: 'Georgia Professional Standards Commission',
        date: '2017-07',
      },
    ],
    languages: [
      { id: nanoid(), language: 'English', proficiency: 'Native' },
      { id: nanoid(), language: 'French', proficiency: 'Intermediate' },
    ],
    achievements: [
      {
        id: nanoid(),
        title: 'Teacher of the Year – Westview High',
        description: 'Recognized by students, parents, and administration for excellence in teaching.',
        date: '2023-06',
      },
    ],
    interests: ['Poetry', 'Creative Writing', 'Community Theatre', 'Reading'],
    sectionOrder: [...DEFAULT_SECTION_ORDER],
    settings: { template: 'minimal', accentColor: '#7c3aed', fontFamily: 'Georgia', showPhoto: false },
  }),
  'marketing-manager': () => ({
    personal: {
      fullName: 'Sofia Ramirez',
      jobTitle: 'Marketing Manager',
      email: 'sofia.ramirez@email.com',
      phone: '+1 (555) 321-6549',
      location: 'New York, NY',
      website: 'sofiaramirez.co',
      linkedin: 'linkedin.com/in/sofiaramirezmarketing',
      github: '',
    },
    summary:
      'Results-driven Marketing Manager with 7+ years of experience in digital marketing, brand strategy, and demand generation. Led campaigns that generated $5M+ in pipeline and grew organic traffic by 300%. Skilled in data-driven decision-making and cross-functional leadership.',
    experience: [
      {
        id: nanoid(),
        jobTitle: 'Marketing Manager',
        company: 'GrowthLabs',
        location: 'New York, NY',
        startDate: '2021-01',
        endDate: '',
        current: true,
        description:
          'Lead a 5-person marketing team managing all digital and content channels\nGrew organic website traffic from 80K to 320K monthly visitors in 18 months\nDeveloped and executed go-to-market strategy for 3 product launches\nManage $1.2M annual marketing budget with 4.2x average ROI',
      },
      {
        id: nanoid(),
        jobTitle: 'Digital Marketing Specialist',
        company: 'BrandPulse Agency',
        location: 'New York, NY',
        startDate: '2018-03',
        endDate: '2020-12',
        current: false,
        description:
          'Managed SEO, PPC, and social media for 20+ B2B and B2C clients\nIncreased email open rates by 35% through A/B testing subject lines and send times\nGenerated $2M in leads through LinkedIn and Google Ads campaigns',
      },
    ],
    education: [
      {
        id: nanoid(),
        degree: 'B.A. Marketing & Communications',
        institution: 'New York University',
        location: 'New York, NY',
        startDate: '2014-09',
        endDate: '2018-05',
        description: 'Dean\'s List. Vice President of Marketing Association.',
      },
    ],
    skills: [
      { id: nanoid(), name: 'SEO / SEM', category: 'Marketing' },
      { id: nanoid(), name: 'Content Strategy', category: 'Marketing' },
      { id: nanoid(), name: 'Demand Generation', category: 'Marketing' },
      { id: nanoid(), name: 'HubSpot', category: 'Tools' },
      { id: nanoid(), name: 'Google Analytics 4', category: 'Tools' },
      { id: nanoid(), name: 'Salesforce', category: 'Tools' },
      { id: nanoid(), name: 'Figma', category: 'Tools' },
      { id: nanoid(), name: 'A/B Testing', category: 'Analytics' },
      { id: nanoid(), name: 'SQL', category: 'Analytics' },
    ],
    projects: [],
    certifications: [
      {
        id: nanoid(),
        name: 'Google Analytics Certified',
        organization: 'Google',
        date: '2024-01',
      },
      {
        id: nanoid(),
        name: 'HubSpot Content Marketing Certification',
        organization: 'HubSpot Academy',
        date: '2023-06',
      },
    ],
    languages: [
      { id: nanoid(), language: 'English', proficiency: 'Native' },
      { id: nanoid(), language: 'Spanish', proficiency: 'Fluent' },
    ],
    achievements: [
      {
        id: nanoid(),
        title: 'Digiday Marketing Award Finalist',
        description: 'Nominated for Best B2B Content Campaign for GrowthLabs\' \'State of Growth\' report series.',
        date: '2023-11',
      },
    ],
    interests: ['Brand Strategy', 'Podcasting', 'Running', 'Travel Writing'],
    sectionOrder: [...DEFAULT_SECTION_ORDER],
    settings: { template: 'modern', accentColor: '#dc2626', fontFamily: 'Inter', showPhoto: false },
  }),
};
