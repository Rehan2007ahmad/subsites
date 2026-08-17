'use client';

import React from 'react';
import { Accordion }          from '@/components/ui/Accordion';
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
  HiUser, HiDocumentText, HiBriefcase, HiAcademicCap,
  HiWrench, HiCodeBracket, HiCheckBadge, HiLanguage,
  HiTrophy, HiHeart,
} from 'react-icons/hi2';

const ICONS: Record<SectionKey | 'personal', React.ReactNode> = {
  personal:       <HiUser size={14} />,
  summary:        <HiDocumentText size={14} />,
  experience:     <HiBriefcase size={14} />,
  education:      <HiAcademicCap size={14} />,
  skills:         <HiWrench size={14} />,
  projects:       <HiCodeBracket size={14} />,
  certifications: <HiCheckBadge size={14} />,
  languages:      <HiLanguage size={14} />,
  achievements:   <HiTrophy size={14} />,
  interests:      <HiHeart size={14} />,
};

const FORMS: Record<SectionKey, React.FC> = {
  summary:        SummaryForm,
  experience:     ExperienceForm,
  education:      EducationForm,
  skills:         SkillsForm,
  projects:       ProjectsForm,
  certifications: CertificationsForm,
  languages:      LanguagesForm,
  achievements:   AchievementsForm,
  interests:      InterestsForm,
};

function count(data: ResumeData, key: SectionKey): number {
  const m: Record<SectionKey, number> = {
    summary:        data.summary ? 1 : 0,
    experience:     data.experience.length,
    education:      data.education.length,
    skills:         data.skills.length,
    projects:       data.projects.length,
    certifications: data.certifications.length,
    languages:      data.languages.length,
    achievements:   data.achievements.length,
    interests:      data.interests.length,
  };
  return m[key];
}

export function EditorPanel() {
  const resume = useResumeStore(s => s.resume);

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#F7F7F7]">

      {/* Panel label */}
      <div className="px-4 py-3 border-b border-[#E5E5E5] bg-white shrink-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#595959]">Resume Sections</p>
      </div>

      {/* Sections list */}
      <div className="flex flex-col gap-px p-3">

        {/* Personal — always first */}
        <Accordion
          title="Personal Information"
          icon={ICONS.personal}
          defaultOpen={true}
          subtitle={resume.personal.fullName || 'Name · Email · Phone · Links'}
        >
          <PersonalForm />
        </Accordion>

        {resume.sectionOrder.map(key => {
          const Component = FORMS[key];
          const n = count(resume, key);
          return (
            <Accordion
              key={key}
              title={SECTION_LABELS[key]}
              icon={ICONS[key]}
              subtitle={n > 0 ? `${n} ${n === 1 ? 'entry' : 'entries'}` : 'Click to expand'}
              badge={
                n > 0
                  ? <span className="inline-flex h-[17px] min-w-[17px] px-1 items-center justify-center bg-black text-white text-[10px] font-bold">
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

      <div className="h-8 shrink-0" />
    </div>
  );
}
