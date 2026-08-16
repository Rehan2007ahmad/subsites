'use client';

import React from 'react';
import { Accordion } from '@/components/ui/Accordion';
import { PersonalForm } from './PersonalForm';
import { SummaryForm } from './SummaryForm';
import { ExperienceForm } from './ExperienceForm';
import { EducationForm } from './EducationForm';
import { SkillsForm } from './SkillsForm';
import { ProjectsForm } from './ProjectsForm';
import { CertificationsForm } from './CertificationsForm';
import { LanguagesForm } from './LanguagesForm';
import { AchievementsForm } from './AchievementsForm';
import { InterestsForm } from './InterestsForm';
import { useResumeStore } from '@/store/resumeStore';
import { SECTION_LABELS } from '@/types/resume';
import type { SectionKey, ResumeData } from '@/types/resume';
import {
  MdPerson, MdNotes, MdWork, MdSchool,
  MdStar, MdCode, MdVerified, MdTranslate,
  MdEmojiEvents, MdFavorite,
} from 'react-icons/md';

const SECTION_ICONS: Record<SectionKey | 'personal', React.ReactNode> = {
  personal: <MdPerson size={16} />,
  summary: <MdNotes size={16} />,
  experience: <MdWork size={16} />,
  education: <MdSchool size={16} />,
  skills: <MdStar size={16} />,
  projects: <MdCode size={16} />,
  certifications: <MdVerified size={16} />,
  languages: <MdTranslate size={16} />,
  achievements: <MdEmojiEvents size={16} />,
  interests: <MdFavorite size={16} />,
};

const SECTION_COMPONENTS: Record<SectionKey, React.FC> = {
  summary: SummaryForm,
  experience: ExperienceForm,
  education: EducationForm,
  skills: SkillsForm,
  projects: ProjectsForm,
  certifications: CertificationsForm,
  languages: LanguagesForm,
  achievements: AchievementsForm,
  interests: InterestsForm,
};

function sectionCount(data: ResumeData, key: SectionKey): number {
  const map: Record<SectionKey, number> = {
    summary: data.summary ? 1 : 0,
    experience: data.experience.length,
    education: data.education.length,
    skills: data.skills.length,
    projects: data.projects.length,
    certifications: data.certifications.length,
    languages: data.languages.length,
    achievements: data.achievements.length,
    interests: data.interests.length,
  };
  return map[key];
}

export function EditorPanel() {
  const resume = useResumeStore((s) => s.resume);

  return (
    <div className="flex flex-col gap-2 p-3 overflow-y-auto h-full">
      {/* Personal Info always first */}
      <Accordion
        title="Personal Information"
        icon={SECTION_ICONS.personal}
        defaultOpen={true}
        subtitle={resume.personal.fullName || 'Your name and contact details'}
      >
        <PersonalForm />
      </Accordion>

      {/* Dynamic section order */}
      {resume.sectionOrder.map((key) => {
        const Component = SECTION_COMPONENTS[key];
        const count = sectionCount(resume, key);
        return (
          <Accordion
            key={key}
            title={SECTION_LABELS[key]}
            icon={SECTION_ICONS[key]}
            subtitle={count > 0 ? `${count} item${count !== 1 ? 's' : ''}` : undefined}
            badge={
              count > 0 ? (
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700">
                  {count}
                </span>
              ) : undefined
            }
          >
            <Component />
          </Accordion>
        );
      })}
    </div>
  );
}
