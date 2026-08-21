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
      className="uppercase font-bold tracking-[0.2em] text-[#262626] mb-2"
      style={{ fontSize: '12.5px', letterSpacing: '0.2em' }}
    >
      {children}
    </h2>
  );

  const EntryHeader = ({ title, date }: { title: string; date?: string }) => (
    <p className="uppercase font-bold text-[#444444] tracking-wide text-[10.5px] mb-0.5">
      {title}
      {date && (
        <span className="font-semibold text-[#777777] ml-1.5">
          ({date})
        </span>
      )}
    </p>
  );

  const rightSections: Record<SectionKey, React.ReactNode> = {
    summary: null,
    skills: null,
    languages: null,

    experience: experience.length > 0 ? (
      <div key="experience" className="mb-3.5">
        <RightTitle>Experience</RightTitle>
        <div className="space-y-2.5">
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
      <div key="education" className="mb-3.5">
        <RightTitle>Education</RightTitle>
        <div className="space-y-2.5">
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
      <div key="projects" className="mb-3.5">
        <RightTitle>Projects</RightTitle>
        <div className="space-y-2">
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
      <div key="certifications" className="mb-3.5">
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
      <div key="achievements" className="mb-3.5">
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
      <div key="interests" className="mb-3.5">
        <RightTitle>Interests</RightTitle>
        <p className="text-[9.5px] text-[#666666]">{interests.join(' · ')}</p>
      </div>
    ) : null,
  };

  return (
    <div
      className="bg-white flex"
      style={{
        fontFamily: fontCss,
        width: 794,
        height: 1123,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* ── LEFT DARK SIDEBAR (285px) ──────────────────────────── */}
      <div
        style={{
          width: 285,
          minWidth: 285,
          maxWidth: 285,
          height: 1123,
          backgroundColor: darkBg,
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          flexShrink: 0,
          boxSizing: 'border-box',
        }}
      >
        {/* Photo Container */}
        {settings.showPhoto && personal.photo ? (
          <div style={{ width: 285, height: 230, overflow: 'hidden', flexShrink: 0 }}>
            <img
              src={personal.photo}
              alt={personal.fullName}
              style={{
                width: 285,
                height: 230,
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        ) : (
          <div
            style={{
              width: 285,
              height: 150,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#181818',
            }}
          >
            <span style={{ fontSize: 28, fontWeight: 'bold', color: '#444444', letterSpacing: '0.1em' }}>
              {(personal.fullName || 'AB').slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Sidebar Body */}
        <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '18px', overflow: 'hidden', flex: 1 }}>
          {/* About Me */}
          {summary && (
            <div>
              <h3
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  fontWeight: 700,
                  color: '#999999',
                  marginBottom: '6px',
                  fontSize: '11px',
                }}
              >
                About Me
              </h3>
              <p style={{ fontSize: '9.5px', color: '#cccccc', lineHeight: '1.55', margin: 0 }}>
                {summary}
              </p>
            </div>
          )}

          {/* Skills with horizontal progress bars */}
          {skills.length > 0 && (
            <div>
              <h3
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  fontWeight: 700,
                  color: '#999999',
                  marginBottom: '8px',
                  fontSize: '11px',
                }}
              >
                Skills
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {skills.map((sk, index) => {
                  const defaultWidths = [85, 70, 90, 60, 75, 80, 65, 95];
                  const barWidth = defaultWidths[index % defaultWidths.length];
                  return (
                    <div key={sk.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                      <p
                        style={{
                          fontSize: '9.5px',
                          color: '#cccccc',
                          margin: 0,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '120px',
                        }}
                      >
                        {sk.name}:
                      </p>
                      <div
                        style={{
                          width: '100px',
                          height: '4px',
                          backgroundColor: '#3a3a3a',
                          borderRadius: '9999px',
                          overflow: 'hidden',
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            height: '100%',
                            backgroundColor: '#8c8c8c',
                            borderRadius: '9999px',
                            width: `${barWidth}%`,
                          }}
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
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  fontWeight: 700,
                  color: '#999999',
                  marginBottom: '6px',
                  fontSize: '11px',
                }}
              >
                Languages
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {languages.map((l) => (
                  <div key={l.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <p
                      style={{
                        fontSize: '9.5px',
                        color: '#cccccc',
                        margin: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '120px',
                      }}
                    >
                      {l.language}:
                    </p>
                    <div
                      style={{
                        width: '100px',
                        height: '4px',
                        backgroundColor: '#3a3a3a',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          backgroundColor: '#8c8c8c',
                          borderRadius: '9999px',
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

      {/* ── RIGHT COLUMN (509px) ─────────────────────────────── */}
      <div
        style={{
          width: 509,
          minWidth: 509,
          maxWidth: 509,
          height: 1123,
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Header Block with Yellow Accent Banner */}
        <div style={{ paddingTop: '32px', paddingBottom: '20px', paddingLeft: '28px', paddingRight: '28px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Name with Yellow Highlighter block behind it */}
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '10px' }}>
            <div
              style={{
                position: 'absolute',
                left: '-12px',
                right: '-12px',
                bottom: '3px',
                height: '14px',
                backgroundColor: accent,
                zIndex: 0,
                opacity: 0.95,
              }}
            />
            <h1
              style={{
                position: 'relative',
                zIndex: 1,
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#222222',
                letterSpacing: '0.08em',
                lineHeight: 1,
                fontSize: '26px',
                margin: 0,
              }}
            >
              {personal.fullName || 'YOUR NAME'}
            </h1>
          </div>

          {/* Contact Details Stacked / Centered */}
          <div style={{ fontSize: '9.5px', color: '#777777', lineHeight: '1.5' }}>
            {personal.location && <p style={{ margin: 0 }}>{personal.location}</p>}
            {personal.phone && <p style={{ margin: 0 }}>phone: {personal.phone}</p>}
            {personal.email && <p style={{ margin: 0 }}>email: {personal.email}</p>}
            {personal.website && <p style={{ margin: 0 }}>{personal.website}</p>}
            {personal.linkedin && <p style={{ margin: 0 }}>{personal.linkedin}</p>}
            {personal.github && <p style={{ margin: 0 }}>{personal.github}</p>}
          </div>
        </div>

        {/* Content sections */}
        <div style={{ paddingLeft: '28px', paddingRight: '28px', paddingTop: '8px', paddingBottom: '24px', flex: 1, overflow: 'hidden' }}>
          {sectionOrder.map((key) => rightSections[key])}
        </div>
      </div>
    </div>
  );
}
