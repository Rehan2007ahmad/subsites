'use client';

import React from 'react';
import { Accordion } from '@/components/ui/Accordion';
import { PersonalForm }       from './PersonalForm';
import { SummaryForm }        from './SummaryForm';
import { ExperienceForm }     from './ExperienceForm';
import { EducationForm }      from './EducationForm';
import { SkillsForm }         from './SkillsForm';
import { ProjectsForm }       from './ProjectsForm';
import { CertificationsForm } from './CertificationsForm';
import { LanguagesForm }      from './LanguagesForm';
import { AchievementsForm }   from './AchievementsForm';
import { InterestsForm }      from './InterestsForm';
import { useResumeStore }     from '@/store/resumeStore';
import { SECTION_LABELS }     from '@/types/resume';
import type { SectionKey, ResumeData } from '@/types/resume';
import {
  MdPerson, MdNotes, MdWork, MdSchool,
  MdTune, MdCode, MdVerified, MdTranslate,
  MdEmojiEvents, MdFavorite,
} from 'react-icons/md';

const SECTION_ICONS: Record<SectionKey | 'personal', React.ReactNode> = {
  personal:      <MdPerson    size={15} />,
  summary:       <MdNotes     size={15} />,
  experience:    <MdWork      size={15} />,
  education:     <MdSchool    size={15} />,
  skills:        <MdTune      size={15} />,
  projects:      <MdCode      size={15} />,
  certifications:<MdVerified  size={15} />,
  languages:     <MdTranslate size={15} />,
  achievements:  <MdEmojiEvents size={15} />,
  interests:     <MdFavorite  size={15} />,
};

const SECTION_COMPONENTS: Record<SectionKey, React.FC> = {
  summary:       SummaryForm,
  experience:    ExperienceForm,
  education:     EducationForm,
  skills:        SkillsForm,
  projects:      ProjectsForm,
  certifications:CertificationsForm,
  languages:     LanguagesForm,
  achievements:  AchievementsForm,
  interests:     InterestsForm,
};

function count(data: ResumeData, key: SectionKey): number {
  const m: Record<SectionKey, number> = {
    summary:       data.summary ? 1 : 0,
    experience:    data.experience.length,
    education:     data.education.length,
    skills:        data.skills.length,
    projects:      data.projects.length,
    certifications:data.certifications.length,
    languages:     data.languages.length,
    achievements:  data.achievements.length,
    interests:     data.interests.length,
  };
  return m[key];
}

export function EditorPanel() {
  const resume = useResumeStore(s => s.resume);

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-slate-50">
      {/* Panel header */}
      <div className="px-4 pt-4 pb-3 border-b border-slate-200 bg-white shrink-0">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Resume Sections
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-1.5 p-3">

        {/* Personal — always first, always open */}
        <Accordion
          title="Personal Information"
          icon={SECTION_ICONS.personal}
          defaultOpen={true}
          subtitle={resume.personal.fullName || 'Name · Email · Phone · Links'}
        >
          <PersonalForm />
        </Accordion>

        {resume.sectionOrder.map(key => {
          const Component = SECTION_COMPONENTS[key];
          const n = count(resume, key);
          return (
            <Accordion
              key={key}
              title={SECTION_LABELS[key]}
              icon={SECTION_ICONS[key]}
              subtitle={n > 0 ? `${n} ${n === 1 ? 'entry' : 'entries'}` : 'Click to expand'}
              badge={
                n > 0
                  ? <span className="inline-flex h-[18px] min-w-[18px] px-1 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                      {n}
                    </span>
                  : undefined
              }
            >
              <Component />
            </Accordion>
          );
        })}
      </div>

      {/* Bottom spacer */}
      <div className="h-6 shrink-0" />
    </div>
  );
}
