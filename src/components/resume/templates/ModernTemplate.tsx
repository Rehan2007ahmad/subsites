import React from 'react';
import type { TemplateProps } from './shared';
import { dateRange, bullets, fmtDate } from './shared';
import type { SectionKey } from '@/types/resume';

export function ModernTemplate({ data }: TemplateProps) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, achievements, interests, settings, sectionOrder } = data;
  const accent = settings.accentColor || '#0f4c75';

  // Skills/languages/certs go in sidebar; heavy content in main
  const sidebarSections: SectionKey[] = ['skills', 'languages', 'certifications', 'interests'];
  const mainSections: SectionKey[] = sectionOrder.filter((k) => !sidebarSections.includes(k));

  const SectionTitle = ({ children, light }: { children: React.ReactNode; light?: boolean }) => (
    <h2 className={`text-[9px] font-bold uppercase tracking-[0.13em] mb-2 pb-1 border-b ${light ? 'text-white/80 border-white/20' : 'text-gray-800 border-gray-200'}`}>
      {children}
    </h2>
  );

  const fontCss = settings?.fontFamily === 'Georgia' ? 'Georgia, serif' :
                  settings?.fontFamily === 'Roboto' ? 'Roboto, sans-serif' :
                  settings?.fontFamily === 'Lato' ? 'Lato, sans-serif' :
                  'Inter, Arial, sans-serif';

  return (
    <div
      className="bg-white w-full font-sans flex flex-col"
      style={{ fontFamily: fontCss, height: 1123, overflow: 'hidden' }}
    >
      {/* Top header bar */}
      <div style={{ backgroundColor: accent, flexShrink: 0 }}>
        <div className="px-6 py-4 text-white">
          <h1 className="text-[20px] font-bold leading-tight">{personal.fullName || 'Your Name'}</h1>
          {personal.jobTitle && <p className="text-[11px] mt-0.5 text-white/80">{personal.jobTitle}</p>}
          <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-0.5 text-[9px] text-white/70">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.location && <span>{personal.location}</span>}
            {personal.website && <span>{personal.website}</span>}
            {personal.linkedin && <span>{personal.linkedin}</span>}
            {personal.github && <span>{personal.github}</span>}
          </div>
        </div>
      </div>

      {/* Two-column body — fills remaining height */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[33%] shrink-0 px-4 py-4 text-white overflow-hidden" style={{ backgroundColor: accent }}>
          <div style={{ filter: 'brightness(0.9)' }}>
            {skills.length > 0 && (
              <div className="mb-4">
                <SectionTitle light>Skills</SectionTitle>
                <div className="space-y-0.5">
                  {skills.map((sk) => (
                    <div key={sk.id} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-white/60 shrink-0" />
                      <span className="text-[10px] text-white/90">{sk.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {languages.length > 0 && (
              <div className="mb-4">
                <SectionTitle light>Languages</SectionTitle>
                <div className="space-y-0.5">
                  {languages.map((l) => (
                    <div key={l.id} className="text-[10px] text-white/90">
                      <span className="font-medium">{l.language}</span>
                      <span className="text-white/60"> · {l.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {certifications.length > 0 && (
              <div className="mb-4">
                <SectionTitle light>Certifications</SectionTitle>
                <div className="space-y-1.5">
                  {certifications.map((c) => (
                    <div key={c.id} className="text-[10px] text-white/90">
                      <p className="font-medium">{c.name}</p>
                      <p className="text-white/60">{c.organization}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {interests.length > 0 && (
              <div className="mb-4">
                <SectionTitle light>Interests</SectionTitle>
                <div className="flex flex-wrap gap-1">
                  {interests.map((i, idx) => (
                    <span key={idx} className="text-[9px] text-white/80 bg-white/10 rounded px-1.5 py-0.5">{i}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 px-5 py-4 overflow-hidden">
          {mainSections.map((key) => {
            if (key === 'summary' && summary) return (
              <div key="summary" className="mb-3">
                <SectionTitle>Summary</SectionTitle>
                <p className="text-[11px] text-gray-700 leading-relaxed">{summary}</p>
              </div>
            );
            if (key === 'experience' && experience.length > 0) return (
              <div key="experience" className="mb-3">
                <SectionTitle>Experience</SectionTitle>
                <div className="space-y-3">
                  {experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-start flex-wrap gap-1">
                        <div>
                          <p className="text-[11px] font-semibold text-gray-900">{exp.jobTitle}</p>
                          <p className="text-[9px] text-gray-600">{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                        </div>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full text-white shrink-0" style={{ backgroundColor: accent }}>
                          {dateRange(exp.startDate, exp.endDate, exp.current)}
                        </span>
                      </div>
                      {exp.description && (
                        <ul className="mt-1 space-y-0.5">
                          {bullets(exp.description).map((b, i) => (
                            <li key={i} className="flex gap-1.5 text-[10px] text-gray-700">
                              <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-gray-400" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
            if (key === 'education' && education.length > 0) return (
              <div key="education" className="mb-3">
                <SectionTitle>Education</SectionTitle>
                <div className="space-y-2">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <div className="flex justify-between items-start flex-wrap gap-1">
                        <div>
                          <p className="text-[11px] font-semibold text-gray-900">{edu.degree}</p>
                          <p className="text-[9px] text-gray-600">{edu.institution}{edu.location ? `, ${edu.location}` : ''}</p>
                        </div>
                        <p className="text-[9px] text-gray-500">{dateRange(edu.startDate, edu.endDate, false)}</p>
                      </div>
                      {edu.gpa && <p className="text-[9px] text-gray-500 mt-0.5">GPA: {edu.gpa}</p>}
                    </div>
                  ))}
                </div>
              </div>
            );
            if (key === 'projects' && projects.length > 0) return (
              <div key="projects" className="mb-3">
                <SectionTitle>Projects</SectionTitle>
                <div className="space-y-2">
                  {projects.map((p) => (
                    <div key={p.id}>
                      <p className="text-[11px] font-semibold text-gray-900">{p.name}</p>
                      {p.description && <p className="text-[10px] text-gray-700 mt-0.5">{p.description}</p>}
                      {p.technologies && <p className="text-[9px] text-gray-500 mt-0.5">{p.technologies}</p>}
                    </div>
                  ))}
                </div>
              </div>
            );
            if (key === 'achievements' && achievements.length > 0) return (
              <div key="achievements" className="mb-3">
                <SectionTitle>Achievements</SectionTitle>
                <div className="space-y-1.5">
                  {achievements.map((a) => (
                    <div key={a.id}>
                      <p className="text-[11px] font-semibold text-gray-900">{a.title}</p>
                      {a.description && <p className="text-[10px] text-gray-700">{a.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            );
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
