import React from 'react';
import type { TemplateProps } from './shared';
import { dateRange, bullets, fmtDate } from './shared';
import type { SectionKey } from '@/types/resume';

export function MinimalTemplate({ data }: TemplateProps) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, achievements, interests, settings, sectionOrder } = data;

  const Divider = () => <hr className="border-t border-gray-200 my-4" />;

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-3">{children}</h2>
  );

  const sectionMap: Record<SectionKey, React.ReactNode> = {
    summary: summary ? (
      <div key="summary">
        <Divider />
        <SectionTitle>Summary</SectionTitle>
        <p className="text-sm text-gray-600 leading-relaxed">{summary}</p>
      </div>
    ) : null,

    experience: experience.length > 0 ? (
      <div key="experience">
        <Divider />
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-4">
          {experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <p className="text-sm font-medium text-gray-900">{exp.jobTitle}</p>
                <p className="text-xs text-gray-400">{dateRange(exp.startDate, exp.endDate, exp.current)}</p>
              </div>
              <p className="text-xs text-gray-500 mb-1">{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
              {exp.description && (
                <ul className="space-y-1">
                  {bullets(exp.description).map((b, i) => (
                    <li key={i} className="flex gap-2 text-xs text-gray-600">
                      <span>—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    ) : null,

    education: education.length > 0 ? (
      <div key="education">
        <Divider />
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id}>
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <p className="text-sm font-medium text-gray-900">{edu.degree}</p>
                <p className="text-xs text-gray-400">{dateRange(edu.startDate, edu.endDate, false)}</p>
              </div>
              <p className="text-xs text-gray-500">{edu.institution}{edu.location ? `, ${edu.location}` : ''}</p>
              {edu.gpa && <p className="text-xs text-gray-400 mt-0.5">GPA {edu.gpa}</p>}
              {edu.description && <p className="text-xs text-gray-500 mt-0.5">{edu.description}</p>}
            </div>
          ))}
        </div>
      </div>
    ) : null,

    skills: skills.length > 0 ? (
      <div key="skills">
        <Divider />
        <SectionTitle>Skills</SectionTitle>
        <p className="text-sm text-gray-700">{skills.map((s) => s.name).join('  ·  ')}</p>
      </div>
    ) : null,

    projects: projects.length > 0 ? (
      <div key="projects">
        <Divider />
        <SectionTitle>Projects</SectionTitle>
        <div className="space-y-3">
          {projects.map((p) => (
            <div key={p.id}>
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <p className="text-sm font-medium text-gray-900">{p.name}</p>
                {p.date && <p className="text-xs text-gray-400">{fmtDate(p.date)}</p>}
              </div>
              {p.description && <p className="text-xs text-gray-600">{p.description}</p>}
              {p.technologies && <p className="text-xs text-gray-400">{p.technologies}</p>}
            </div>
          ))}
        </div>
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div key="certifications">
        <Divider />
        <SectionTitle>Certifications</SectionTitle>
        <div className="space-y-1.5">
          {certifications.map((c) => (
            <div key={c.id} className="flex justify-between flex-wrap gap-1">
              <div>
                <span className="text-sm text-gray-800">{c.name}</span>
                <span className="text-xs text-gray-400"> · {c.organization}</span>
              </div>
              {c.date && <span className="text-xs text-gray-400">{fmtDate(c.date)}</span>}
            </div>
          ))}
        </div>
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div key="languages">
        <Divider />
        <SectionTitle>Languages</SectionTitle>
        <p className="text-sm text-gray-700">
          {languages.map((l) => `${l.language} (${l.proficiency})`).join('  ·  ')}
        </p>
      </div>
    ) : null,

    achievements: achievements.length > 0 ? (
      <div key="achievements">
        <Divider />
        <SectionTitle>Achievements</SectionTitle>
        <div className="space-y-2">
          {achievements.map((a) => (
            <div key={a.id}>
              <p className="text-sm font-medium text-gray-800">{a.title}</p>
              {a.description && <p className="text-xs text-gray-500">{a.description}</p>}
            </div>
          ))}
        </div>
      </div>
    ) : null,

    interests: interests.length > 0 ? (
      <div key="interests">
        <Divider />
        <SectionTitle>Interests</SectionTitle>
        <p className="text-sm text-gray-600">{interests.join('  ·  ')}</p>
      </div>
    ) : null,
  };

  const fontCss = settings.fontFamily === 'Georgia' ? 'Georgia, serif' :
                  settings.fontFamily === 'Roboto' ? 'Roboto, sans-serif' :
                  settings.fontFamily === 'Lato' ? 'Lato, sans-serif' :
                  'Inter, Arial, sans-serif';

  return (
    <div className="bg-white w-full min-h-full px-10 py-10" style={{ fontFamily: fontCss }}>
      {/* Header */}
      <div className="mb-1">
        <h1 className="text-3xl font-light tracking-tight text-gray-900">{personal.fullName || 'Your Name'}</h1>
        {personal.jobTitle && <p className="text-sm text-gray-500 mt-0.5">{personal.jobTitle}</p>}
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-gray-400">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
          {personal.github && <span>{personal.github}</span>}
        </div>
      </div>
      {sectionOrder.map((key) => sectionMap[key])}
    </div>
  );
}
