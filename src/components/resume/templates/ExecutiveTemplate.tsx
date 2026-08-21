import React from 'react';
import type { TemplateProps } from './shared';
import { dateRange, bullets, fmtDate } from './shared';
import type { SectionKey } from '@/types/resume';

const PROF_WIDTH: Record<string, number> = {
  Beginner: 30,
  Intermediate: 55,
  Advanced: 80,
  Fluent: 92,
  Native: 100,
};

export function ExecutiveTemplate({ data }: TemplateProps) {
  const {
    personal,
    summary,
    experience,
    education,
    skills,
    certifications,
    languages,
    achievements,
    interests,
    projects,
    settings,
    sectionOrder,
  } = data;

  const accent = settings.accentColor || '#F0C040';
  const darkBg = '#222222';

  const fontCss =
    settings?.fontFamily === 'Georgia'
      ? 'Georgia, serif'
      : settings?.fontFamily === 'Roboto'
      ? "'Roboto', sans-serif"
      : settings?.fontFamily === 'Lato'
      ? "'Lato', sans-serif"
      : "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

  const RightTitle = ({ children }: { children: React.ReactNode }) => (
    <h2
      className="uppercase font-bold tracking-[0.2em] text-[#262626] mb-2.5"
      style={{ fontSize: '13px', letterSpacing: '0.2em' }}
    >
      {children}
    </h2>
  );

  const EntryHeader = ({ title, date }: { title: string; date?: string }) => (
    <p className="uppercase font-bold text-[#444444] tracking-wide text-[10.5px] mb-1">
      {title}
      {date && (
        <span className="font-semibold text-[#777777] ml-1.5">
          ({date})
        </span>
      )}
    </p>
  );

  const rightSections: Record<SectionKey, React.ReactNode> = {
    summary: null, // Rendered in sidebar (About Me)
    skills: null, // Rendered in sidebar
    languages: null, // Rendered in sidebar

    experience: experience.length > 0 ? (
      <div key="experience" className="mb-4">
        <RightTitle>Experience</RightTitle>
        <div className="space-y-3">
          {experience.map((exp) => (
            <div key={exp.id}>
              <EntryHeader
                title={`${exp.jobTitle}${exp.company ? ` · ${exp.company}` : ''}`}
                date={dateRange(exp.startDate, exp.endDate, exp.current)}
              />
              {exp.description && (
                <div className="space-y-0.5 mt-0.5">
                  {bullets(exp.description).map((b, i) => (
                    <p key={i} className="text-[9.5px] text-[#666666] leading-relaxed">
                      {b}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ) : null,

    education: education.length > 0 ? (
      <div key="education" className="mb-4">
        <RightTitle>Education</RightTitle>
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id}>
              <EntryHeader
                title={`${edu.degree}${edu.institution ? ` · ${edu.institution}` : ''}`}
                date={dateRange(edu.startDate, edu.endDate, false)}
              />
              {edu.description && (
                <p className="text-[9.5px] text-[#666666] leading-relaxed mt-0.5">
                  {edu.description}
                </p>
              )}
              {edu.gpa && (
                <p className="text-[9px] text-[#888888] mt-0.5">GPA: {edu.gpa}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    ) : null,

    projects: projects.length > 0 ? (
      <div key="projects" className="mb-4">
        <RightTitle>Projects</RightTitle>
        <div className="space-y-2.5">
          {projects.map((p) => (
            <div key={p.id}>
              <EntryHeader
                title={p.name}
                date={p.date ? fmtDate(p.date) : undefined}
              />
              {p.description && (
                <p className="text-[9.5px] text-[#666666] leading-relaxed">{p.description}</p>
              )}
              {p.technologies && (
                <p className="text-[9px] text-[#888888] mt-0.5">
                  <span className="font-semibold text-[#555555]">Tech:</span> {p.technologies}
                </p>
              )}
              {(p.url || p.githubUrl) && (
                <p className="text-[9px] mt-0.5 text-[#555555]">
                  {p.url && <span>{p.url}</span>}
                  {p.url && p.githubUrl && <span> · </span>}
                  {p.githubUrl && <span>{p.githubUrl}</span>}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div key="certifications" className="mb-4">
        <RightTitle>Certifications</RightTitle>
        <div className="space-y-1.5">
          {certifications.map((c) => (
            <div key={c.id} className="flex justify-between items-baseline flex-wrap gap-1">
              <div>
                <p className="text-[10px] font-bold text-[#444444] uppercase">{c.name}</p>
                <p className="text-[9px] text-[#777777]">{c.organization}</p>
              </div>
              {c.date && <p className="text-[9px] text-[#888888]">{fmtDate(c.date)}</p>}
            </div>
          ))}
        </div>
      </div>
    ) : null,

    achievements: achievements.length > 0 ? (
      <div key="achievements" className="mb-4">
        <RightTitle>Achievements</RightTitle>
        <div className="space-y-1.5">
          {achievements.map((a) => (
            <div key={a.id}>
              <p className="text-[10px] font-bold text-[#444444] uppercase">{a.title}</p>
              {a.description && <p className="text-[9.5px] text-[#666666]">{a.description}</p>}
            </div>
          ))}
        </div>
      </div>
    ) : null,

    interests: interests.length > 0 ? (
      <div key="interests" className="mb-4">
        <RightTitle>Interests</RightTitle>
        <p className="text-[9.5px] text-[#666666]">{interests.join(' · ')}</p>
      </div>
    ) : null,
  };

  return (
    <div
      className="bg-white w-full flex"
      style={{ fontFamily: fontCss, height: 1123, overflow: 'hidden' }}
    >
      {/* ── LEFT DARK SIDEBAR (36%) ──────────────────────────── */}
      <div
        className="w-[36%] shrink-0 flex flex-col overflow-hidden text-white"
        style={{ backgroundColor: darkBg }}
      >
        {/* Photo Container */}
        {settings.showPhoto && personal.photo ? (
          <div className="w-full shrink-0" style={{ height: 230 }}>
            <img
              src={personal.photo}
              alt={personal.fullName}
              className="w-full h-full object-cover block"
            />
          </div>
        ) : (
          <div className="w-full shrink-0 flex items-center justify-center bg-[#181818]" style={{ height: 160 }}>
            <span className="text-[28px] font-bold text-[#444444] tracking-wider uppercase">
              {(personal.fullName || 'AB').slice(0, 2)}
            </span>
          </div>
        )}

        {/* Sidebar Body */}
        <div className="px-6 py-5 flex flex-col gap-5 overflow-hidden flex-1">
          {/* About Me */}
          {summary && (
            <div>
              <h3
                className="uppercase tracking-[0.22em] font-bold text-[#999999] mb-2 text-[11px]"
              >
                About Me
              </h3>
              <p className="text-[9.5px] text-[#cccccc] leading-relaxed">
                {summary}
              </p>
            </div>
          )}

          {/* Skills with sleek horizontal progress bars */}
          {skills.length > 0 && (
            <div>
              <h3
                className="uppercase tracking-[0.22em] font-bold text-[#999999] mb-2.5 text-[11px]"
              >
                Skills
              </h3>
              <div className="space-y-2">
                {skills.map((sk, index) => {
                  // Varied visual bar fills if category / level not explicitly set
                  const defaultWidths = [85, 70, 90, 60, 75, 80, 65, 95];
                  const barWidth = defaultWidths[index % defaultWidths.length];
                  return (
                    <div key={sk.id} className="flex items-center justify-between gap-2">
                      <p className="text-[9.5px] text-[#cccccc] shrink-0 truncate max-w-[48%]">
                        {sk.name}:
                      </p>
                      <div className="flex-1 max-w-[48%] h-1 bg-[#3a3a3a] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#8c8c8c] rounded-full"
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div>
              <h3
                className="uppercase tracking-[0.22em] font-bold text-[#999999] mb-2 text-[11px]"
              >
                Languages
              </h3>
              <div className="space-y-1.5">
                {languages.map((l) => (
                  <div key={l.id} className="flex items-center justify-between gap-2">
                    <p className="text-[9.5px] text-[#cccccc] shrink-0 truncate max-w-[48%]">
                      {l.language}:
                    </p>
                    <div className="flex-1 max-w-[48%] h-1 bg-[#3a3a3a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#8c8c8c] rounded-full"
                        style={{
                          width: `${PROF_WIDTH[l.proficiency] ?? 70}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── RIGHT COLUMN (64%) ─────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        {/* Header Block with Yellow Accent Banner */}
        <div className="pt-9 pb-6 px-8 flex flex-col items-center text-center">
          {/* Name with Yellow Highlighter block behind it */}
          <div className="relative inline-block mb-3.5">
            <div
              className="absolute left-[-12px] right-[-12px] bottom-1 h-3.5 -z-0 opacity-95"
              style={{ backgroundColor: accent }}
            />
            <h1
              className="relative z-10 font-black uppercase text-[#222222] tracking-[0.08em] leading-none"
              style={{ fontSize: '27px' }}
            >
              {personal.fullName || 'YOUR NAME'}
            </h1>
          </div>

          {/* Contact Details Stacked / Centered */}
          <div className="space-y-0.5 text-[9.5px] text-[#777777] leading-relaxed">
            {personal.location && <p>{personal.location}</p>}
            {personal.phone && <p>phone: {personal.phone}</p>}
            {personal.email && <p>email: {personal.email}</p>}
            {personal.website && <p>{personal.website}</p>}
            {personal.linkedin && <p>{personal.linkedin}</p>}
            {personal.github && <p>{personal.github}</p>}
          </div>
        </div>

        {/* Content sections */}
        <div className="px-8 pt-2 pb-6 flex-1 overflow-hidden">
          {sectionOrder.map((key) => rightSections[key])}
        </div>
      </div>
    </div>
  );
}
