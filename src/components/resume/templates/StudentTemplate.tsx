import React from 'react';
import type { TemplateProps } from './shared';
import { dateRange, bullets, fmtDate } from './shared';
import type { SectionKey } from '@/types/resume';

export function StudentTemplate({ data }: TemplateProps) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, achievements, interests, settings, sectionOrder } = data;
  const accent = settings.accentColor || '#16a34a';
  const lightAccent = `${accent}18`;

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-1.5 mb-2">
      <div className="h-3.5 w-1 rounded-full" style={{ backgroundColor: accent }} />
      <h2 className="text-[10px] font-bold text-gray-800">{children}</h2>
    </div>
  );

  const sectionMap: Record<SectionKey, React.ReactNode> = {
    summary: summary ? (
      <section key="summary" className="mb-3 rounded-lg p-3" style={{ backgroundColor: lightAccent }}>
        <SectionTitle>About Me</SectionTitle>
        <p className="text-[11px] text-gray-700 leading-relaxed">{summary}</p>
      </section>
    ) : null,

    education: education.length > 0 ? (
      <section key="education" className="mb-3">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-2">
          {education.map((edu) => (
            <div key={edu.id} className="rounded-lg border border-gray-100 p-2.5">
              <div className="flex justify-between items-start flex-wrap gap-1">
                <div>
                  <p className="text-[11px] font-semibold text-gray-900">{edu.degree}</p>
                  <p className="text-[9px] text-gray-600">{edu.institution}{edu.location ? `, ${edu.location}` : ''}</p>
                </div>
                <p className="text-[9px] text-white rounded-full px-2 py-0.5 shrink-0" style={{ backgroundColor: accent }}>
                  {dateRange(edu.startDate, edu.endDate, false)}
                </p>
              </div>
              {edu.gpa && (
                <p className="text-[9px] font-medium mt-1" style={{ color: accent }}>GPA: {edu.gpa}</p>
              )}
              {edu.description && <p className="text-[9px] text-gray-600 mt-0.5">{edu.description}</p>}
            </div>
          ))}
        </div>
      </section>
    ) : null,

    skills: skills.length > 0 ? (
      <section key="skills" className="mb-3">
        <SectionTitle>Skills</SectionTitle>
        <div className="flex flex-wrap gap-1">
          {skills.map((sk) => (
            <span key={sk.id} className="rounded-full px-2 py-0.5 text-[9px] font-medium" style={{ backgroundColor: lightAccent, color: accent }}>
              {sk.name}
            </span>
          ))}
        </div>
      </section>
    ) : null,

    projects: projects.length > 0 ? (
      <section key="projects" className="mb-3">
        <SectionTitle>Projects</SectionTitle>
        <div className="space-y-2">
          {projects.map((p) => (
            <div key={p.id} className="rounded-lg border border-gray-100 p-2.5">
              <div className="flex justify-between items-start flex-wrap gap-1">
                <p className="text-[11px] font-semibold text-gray-900">{p.name}</p>
                {p.date && <p className="text-[9px] text-gray-400">{fmtDate(p.date)}</p>}
              </div>
              {p.description && <p className="text-[10px] text-gray-700 mt-0.5">{p.description}</p>}
              {p.technologies && (
                <div className="mt-1 flex flex-wrap gap-1">
                  {p.technologies.split(',').map((t, i) => (
                    <span key={i} className="rounded px-1.5 py-0.5 text-[9px] bg-gray-100 text-gray-600">{t.trim()}</span>
                  ))}
                </div>
              )}
              {p.githubUrl && <p className="text-[9px] mt-1" style={{ color: accent }}>{p.githubUrl}</p>}
            </div>
          ))}
        </div>
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
                  <p className="text-[11px] font-semibold text-gray-900">{exp.jobTitle}</p>
                  <p className="text-[9px] text-gray-500">{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                </div>
                <p className="text-[9px] text-gray-400">{dateRange(exp.startDate, exp.endDate, exp.current)}</p>
              </div>
              {exp.description && (
                <ul className="mt-1 space-y-0.5">
                  {bullets(exp.description).map((b, i) => (
                    <li key={i} className="flex gap-1.5 text-[10px] text-gray-700">
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

    certifications: certifications.length > 0 ? (
      <section key="certifications" className="mb-3">
        <SectionTitle>Certifications</SectionTitle>
        <div className="space-y-1.5">
          {certifications.map((c) => (
            <div key={c.id} className="flex justify-between flex-wrap gap-1">
              <div>
                <p className="text-[11px] font-medium text-gray-900">{c.name}</p>
                <p className="text-[9px] text-gray-500">{c.organization}</p>
              </div>
              {c.date && <p className="text-[9px] text-gray-400">{fmtDate(c.date)}</p>}
            </div>
          ))}
        </div>
      </section>
    ) : null,

    achievements: achievements.length > 0 ? (
      <section key="achievements" className="mb-3">
        <SectionTitle>Achievements</SectionTitle>
        <div className="space-y-1.5">
          {achievements.map((a) => (
            <div key={a.id} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: accent }} />
              <div>
                <p className="text-[11px] font-medium text-gray-900">{a.title}</p>
                {a.description && <p className="text-[9px] text-gray-600">{a.description}</p>}
              </div>
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
            <p key={l.id} className="text-[11px] text-gray-700">
              <span className="font-medium">{l.language}</span>
              <span className="text-gray-400"> · {l.proficiency}</span>
            </p>
          ))}
        </div>
      </section>
    ) : null,

    interests: interests.length > 0 ? (
      <section key="interests" className="mb-3">
        <SectionTitle>Interests</SectionTitle>
        <div className="flex flex-wrap gap-1">
          {interests.map((i, idx) => (
            <span key={idx} className="text-[9px] rounded-full px-2 py-0.5 bg-gray-100 text-gray-600">{i}</span>
          ))}
        </div>
      </section>
    ) : null,
  };

  const fontCss = settings?.fontFamily === 'Georgia' ? 'Georgia, serif' :
                  settings?.fontFamily === 'Roboto' ? 'Roboto, sans-serif' :
                  settings?.fontFamily === 'Lato' ? 'Lato, sans-serif' :
                  'Inter, Arial, sans-serif';

  return (
    <div
      className="bg-white w-full"
      style={{ fontFamily: fontCss, height: 1123, overflow: 'hidden' }}
    >
      {/* Centered header */}
      <div className="px-7 pt-5 pb-4 text-center border-b-4" style={{ borderColor: accent }}>
        {settings.showPhoto && personal.photo && (
          <img
            src={personal.photo}
            alt={personal.fullName}
            className="h-16 w-16 rounded-full object-cover mx-auto mb-2 border-2"
            style={{ borderColor: accent }}
          />
        )}
        <h1 className="text-[20px] font-bold text-gray-900 leading-tight">{personal.fullName || 'Your Name'}</h1>
        {personal.jobTitle && <p className="text-[11px] mt-0.5 font-medium" style={{ color: accent }}>{personal.jobTitle}</p>}
        <div className="mt-1.5 flex flex-wrap justify-center gap-x-3 gap-y-0.5 text-[9px] text-gray-500">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.github && <span style={{ color: accent }}>{personal.github}</span>}
          {personal.linkedin && <span style={{ color: accent }}>{personal.linkedin}</span>}
        </div>
      </div>
      <div className="px-7 pt-4 pb-5">
        {sectionOrder.map((key) => sectionMap[key])}
      </div>
    </div>
  );
}
