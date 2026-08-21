import React from 'react';
import type { TemplateProps } from './shared';
import { dateRange, bullets, fmtDate } from './shared';
import type { SectionKey } from '@/types/resume';

export function DeveloperTemplate({ data }: TemplateProps) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, achievements, interests, settings, sectionOrder } = data;
  const accent = settings.accentColor || '#58a6ff';

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-1.5 mb-2">
      <span className="font-mono text-[10px] font-bold" style={{ color: accent }}>#</span>
      <h2 className="font-mono text-[9px] font-bold uppercase tracking-widest text-gray-200">{children}</h2>
      <div className="flex-1 h-px bg-gray-700" />
    </div>
  );

  const sectionMap: Record<SectionKey, React.ReactNode> = {
    summary: summary ? (
      <section key="summary" className="mb-3">
        <SectionTitle>About</SectionTitle>
        <p className="text-[10px] text-gray-400 leading-relaxed font-mono">{summary}</p>
      </section>
    ) : null,

    experience: experience.length > 0 ? (
      <section key="experience" className="mb-3">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-3">
          {experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-start flex-wrap gap-1">
                <div>
                  <p className="text-[11px] font-semibold text-gray-100">{exp.jobTitle}</p>
                  <p className="text-[9px] font-mono" style={{ color: accent }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                </div>
                <p className="text-[9px] text-gray-500 font-mono">{dateRange(exp.startDate, exp.endDate, exp.current)}</p>
              </div>
              {exp.description && (
                <ul className="mt-1 space-y-0.5">
                  {bullets(exp.description).map((b, i) => (
                    <li key={i} className="flex gap-1.5 text-[10px] text-gray-400 font-mono">
                      <span style={{ color: accent }}>›</span>
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

    projects: projects.length > 0 ? (
      <section key="projects" className="mb-3">
        <SectionTitle>Projects</SectionTitle>
        <div className="space-y-2">
          {projects.map((p) => (
            <div key={p.id} className="border border-gray-700 rounded p-2">
              <div className="flex justify-between items-start flex-wrap gap-1">
                <p className="text-[11px] font-semibold text-gray-100">{p.name}</p>
                {p.date && <p className="text-[9px] text-gray-500 font-mono">{fmtDate(p.date)}</p>}
              </div>
              {p.description && <p className="text-[10px] text-gray-400 mt-0.5">{p.description}</p>}
              {p.technologies && (
                <div className="mt-1 flex flex-wrap gap-1">
                  {p.technologies.split(',').map((t, i) => (
                    <span key={i} className="rounded px-1.5 py-0.5 text-[9px] font-mono bg-gray-700 text-gray-300">{t.trim()}</span>
                  ))}
                </div>
              )}
              {(p.githubUrl || p.url) && (
                <p className="text-[9px] font-mono mt-1" style={{ color: accent }}>
                  {p.githubUrl && <span>{p.githubUrl}</span>}
                  {p.githubUrl && p.url && <span> · </span>}
                  {p.url && <span>{p.url}</span>}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    ) : null,

    skills: skills.length > 0 ? (
      <section key="skills" className="mb-3">
        <SectionTitle>Tech Stack</SectionTitle>
        <div className="flex flex-wrap gap-1">
          {skills.map((sk) => (
            <span key={sk.id} className="rounded px-1.5 py-0.5 text-[9px] font-mono bg-gray-700 text-gray-200 border border-gray-600">
              {sk.name}
            </span>
          ))}
        </div>
      </section>
    ) : null,

    education: education.length > 0 ? (
      <section key="education" className="mb-3">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-1.5">
          {education.map((edu) => (
            <div key={edu.id} className="flex justify-between flex-wrap gap-1">
              <div>
                <p className="text-[11px] font-semibold text-gray-100">{edu.degree}</p>
                <p className="text-[9px] text-gray-400">{edu.institution}{edu.location ? `, ${edu.location}` : ''}</p>
              </div>
              <p className="text-[9px] text-gray-500 font-mono">{dateRange(edu.startDate, edu.endDate, false)}</p>
            </div>
          ))}
        </div>
      </section>
    ) : null,

    certifications: certifications.length > 0 ? (
      <section key="certifications" className="mb-3">
        <SectionTitle>Certifications</SectionTitle>
        <div className="space-y-1">
          {certifications.map((c) => (
            <div key={c.id} className="flex justify-between flex-wrap gap-1">
              <p className="text-[10px] font-mono text-gray-300">{c.name} <span className="text-gray-500">· {c.organization}</span></p>
              {c.date && <p className="text-[9px] text-gray-500 font-mono">{fmtDate(c.date)}</p>}
            </div>
          ))}
        </div>
      </section>
    ) : null,

    languages: languages.length > 0 ? (
      <section key="languages" className="mb-3">
        <SectionTitle>Languages</SectionTitle>
        <div className="flex flex-wrap gap-3">
          {languages.map((l) => (
            <p key={l.id} className="text-[10px] font-mono text-gray-400">
              {l.language} <span style={{ color: accent }}>({l.proficiency})</span>
            </p>
          ))}
        </div>
      </section>
    ) : null,

    achievements: achievements.length > 0 ? (
      <section key="achievements" className="mb-3">
        <SectionTitle>Achievements</SectionTitle>
        <div className="space-y-1.5">
          {achievements.map((a) => (
            <div key={a.id}>
              <p className="text-[11px] font-semibold text-gray-100">{a.title}</p>
              {a.description && <p className="text-[10px] text-gray-400 font-mono">{a.description}</p>}
            </div>
          ))}
        </div>
      </section>
    ) : null,

    interests: interests.length > 0 ? (
      <section key="interests" className="mb-3">
        <SectionTitle>Interests</SectionTitle>
        <p className="text-[10px] font-mono text-gray-400">{interests.join(' / ')}</p>
      </section>
    ) : null,
  };

  return (
    <div
      className="w-full font-mono"
      style={{ backgroundColor: '#0d1117', color: '#e6edf3', height: 1123, overflow: 'hidden' }}
    >
      {/* Terminal-style header */}
      <div className="px-7 pt-5 pb-4 border-b border-gray-700">
        <div className="flex items-start gap-3 flex-wrap">
          {settings.showPhoto && personal.photo && (
            <img src={personal.photo} alt={personal.fullName} className="h-14 w-14 rounded-full object-cover border-2 border-gray-600 shrink-0" />
          )}
          <div>
            <h1 className="text-[20px] font-bold text-white tracking-tight leading-tight">{personal.fullName || 'Your Name'}</h1>
            {personal.jobTitle && <p className="text-[11px] mt-0.5" style={{ color: accent }}>{personal.jobTitle}</p>}
            <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-[9px] text-gray-500">
              {personal.email && <span>{personal.email}</span>}
              {personal.phone && <span>{personal.phone}</span>}
              {personal.location && <span>{personal.location}</span>}
              {personal.website && <span style={{ color: accent }}>{personal.website}</span>}
              {personal.linkedin && <span style={{ color: accent }}>{personal.linkedin}</span>}
              {personal.github && <span style={{ color: accent }}>{personal.github}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="px-7 pt-4 pb-5">
        {sectionOrder.map((key) => sectionMap[key])}
      </div>
    </div>
  );
}
