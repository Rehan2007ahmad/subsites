import React from 'react';
import type { TemplateProps } from './shared';
import { dateRange, bullets, fmtDate } from './shared';
import { SECTION_LABELS, type SectionKey } from '@/types/resume';

export function ClassicTemplate({ data }: TemplateProps) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, achievements, interests, settings, sectionOrder } = data;
  const accent = settings.accentColor || '#1e3a5f';

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-2 mb-3">
      <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ backgroundColor: accent, opacity: 0.3 }} />
    </div>
  );

  const sectionMap: Record<SectionKey, React.ReactNode> = {
    summary: summary ? (
      <section key="summary" className="mb-5">
        <SectionTitle>Professional Summary</SectionTitle>
        <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
      </section>
    ) : null,

    experience: experience.length > 0 ? (
      <section key="experience" className="mb-5">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="space-y-4">
          {experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-start flex-wrap gap-1">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{exp.jobTitle}</p>
                  <p className="text-sm text-gray-600">{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                </div>
                <p className="text-xs text-gray-500 shrink-0">{dateRange(exp.startDate, exp.endDate, exp.current)}</p>
              </div>
              {exp.description && (
                <ul className="mt-1.5 space-y-1">
                  {bullets(exp.description).map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    ) : null,

    education: education.length > 0 ? (
      <section key="education" className="mb-5">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id}>
              <div className="flex justify-between items-start flex-wrap gap-1">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.institution}{edu.location ? `, ${edu.location}` : ''}</p>
                </div>
                <p className="text-xs text-gray-500 shrink-0">{dateRange(edu.startDate, edu.endDate, false)}</p>
              </div>
              {edu.gpa && <p className="text-xs text-gray-500 mt-0.5">GPA: {edu.gpa}</p>}
              {edu.description && <p className="text-xs text-gray-600 mt-0.5">{edu.description}</p>}
            </div>
          ))}
        </div>
      </section>
    ) : null,

    skills: skills.length > 0 ? (
      <section key="skills" className="mb-5">
        <SectionTitle>Skills</SectionTitle>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((sk) => (
            <span key={sk.id} className="rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">
              {sk.name}
            </span>
          ))}
        </div>
      </section>
    ) : null,

    projects: projects.length > 0 ? (
      <section key="projects" className="mb-5">
        <SectionTitle>Projects</SectionTitle>
        <div className="space-y-3">
          {projects.map((p) => (
            <div key={p.id}>
              <div className="flex justify-between items-start flex-wrap gap-1">
                <p className="text-sm font-semibold text-gray-900">{p.name}</p>
                {p.date && <p className="text-xs text-gray-500">{fmtDate(p.date)}</p>}
              </div>
              {p.description && <p className="text-xs text-gray-700 mt-0.5">{p.description}</p>}
              {p.technologies && <p className="text-xs text-gray-500 mt-0.5"><span className="font-medium">Tech:</span> {p.technologies}</p>}
              {(p.url || p.githubUrl) && (
                <p className="text-xs mt-0.5" style={{ color: accent }}>
                  {p.url && <span>{p.url}</span>}
                  {p.url && p.githubUrl && <span> · </span>}
                  {p.githubUrl && <span>{p.githubUrl}</span>}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    ) : null,

    certifications: certifications.length > 0 ? (
      <section key="certifications" className="mb-5">
        <SectionTitle>Certifications</SectionTitle>
        <div className="space-y-2">
          {certifications.map((c) => (
            <div key={c.id} className="flex justify-between items-start flex-wrap gap-1">
              <div>
                <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                <p className="text-xs text-gray-600">{c.organization}</p>
              </div>
              {c.date && <p className="text-xs text-gray-500">{fmtDate(c.date)}</p>}
            </div>
          ))}
        </div>
      </section>
    ) : null,

    languages: languages.length > 0 ? (
      <section key="languages" className="mb-5">
        <SectionTitle>Languages</SectionTitle>
        <div className="flex flex-wrap gap-3">
          {languages.map((l) => (
            <div key={l.id} className="text-sm">
              <span className="font-medium text-gray-900">{l.language}</span>
              <span className="text-gray-500"> · {l.proficiency}</span>
            </div>
          ))}
        </div>
      </section>
    ) : null,

    achievements: achievements.length > 0 ? (
      <section key="achievements" className="mb-5">
        <SectionTitle>Achievements</SectionTitle>
        <div className="space-y-2">
          {achievements.map((a) => (
            <div key={a.id}>
              <div className="flex justify-between items-start flex-wrap gap-1">
                <p className="text-sm font-semibold text-gray-900">{a.title}</p>
                {a.date && <p className="text-xs text-gray-500">{fmtDate(a.date)}</p>}
              </div>
              {a.description && <p className="text-xs text-gray-700">{a.description}</p>}
            </div>
          ))}
        </div>
      </section>
    ) : null,

    interests: interests.length > 0 ? (
      <section key="interests" className="mb-5">
        <SectionTitle>Interests</SectionTitle>
        <p className="text-sm text-gray-700">{interests.join(' · ')}</p>
      </section>
    ) : null,
  };

  return (
    <div className="bg-white w-full min-h-full font-sans text-gray-900" style={{ fontFamily: settings.fontFamily === 'Georgia' ? 'Georgia, serif' : 'Arial, sans-serif' }}>
      {/* Header */}
      <div className="px-8 pt-8 pb-5 border-b-2" style={{ borderColor: accent }}>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">{personal.fullName || 'Your Name'}</h1>
        {personal.jobTitle && <p className="text-base mt-0.5 font-medium" style={{ color: accent }}>{personal.jobTitle}</p>}
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
          {personal.github && <span>{personal.github}</span>}
        </div>
      </div>

      {/* Body */}
      <div className="px-8 pt-5 pb-8">
        {sectionOrder.map((key) => sectionMap[key])}
      </div>
    </div>
  );
}
