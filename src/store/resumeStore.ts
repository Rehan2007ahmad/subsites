'use client';

import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import type {
  ResumeData,
  PersonalInfo,
  Experience,
  Education,
  Skill,
  Project,
  Certification,
  Language,
  Achievement,
  TemplateId,
  SectionKey,
  ResumeSettings,
} from '@/types/resume';
import { createEmptyResume, createSampleResume } from '@/lib/defaultData';
import { nanoid } from '@/lib/nanoid';

const STORAGE_KEY = 'tooleka_resume_v1';

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';

interface ResumeStore {
  resume: ResumeData;
  saveStatus: SaveStatus;
  hasHydrated: boolean;

  // Hydration
  hydrate: () => void;

  // Persistence
  saveToStorage: () => void;

  // Personal
  updatePersonal: (data: Partial<PersonalInfo>) => void;

  // Summary
  updateSummary: (summary: string) => void;

  // Experience
  addExperience: () => void;
  updateExperience: (id: string, data: Partial<Experience>) => void;
  removeExperience: (id: string) => void;
  reorderExperience: (from: number, to: number) => void;

  // Education
  addEducation: () => void;
  updateEducation: (id: string, data: Partial<Education>) => void;
  removeEducation: (id: string) => void;

  // Skills
  addSkill: (name: string, category?: string) => void;
  updateSkill: (id: string, data: Partial<Skill>) => void;
  removeSkill: (id: string) => void;
  reorderSkills: (from: number, to: number) => void;

  // Projects
  addProject: () => void;
  updateProject: (id: string, data: Partial<Project>) => void;
  removeProject: (id: string) => void;

  // Certifications
  addCertification: () => void;
  updateCertification: (id: string, data: Partial<Certification>) => void;
  removeCertification: (id: string) => void;

  // Languages
  addLanguage: () => void;
  updateLanguage: (id: string, data: Partial<Language>) => void;
  removeLanguage: (id: string) => void;

  // Achievements
  addAchievement: () => void;
  updateAchievement: (id: string, data: Partial<Achievement>) => void;
  removeAchievement: (id: string) => void;

  // Interests
  updateInterests: (interests: string[]) => void;

  // Section ordering
  reorderSections: (order: SectionKey[]) => void;

  // Settings
  updateSettings: (settings: Partial<ResumeSettings>) => void;
  setTemplate: (template: TemplateId) => void;
  setAccentColor: (color: string) => void;

  // Lifecycle
  loadSampleResume: () => void;
  resetResume: () => void;
  importResume: (data: ResumeData) => void;
  exportResume: () => string;
}

function loadFromStorage(): ResumeData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ResumeData;
    // basic integrity check
    if (!parsed.personal || !parsed.settings) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveToStorageRaw(data: ResumeData): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage can throw in private browsing or if full
  }
}

let saveTimer: ReturnType<typeof setTimeout> | null = null;

export const useResumeStore = create<ResumeStore>()(
  subscribeWithSelector((set, get) => ({
    resume: createEmptyResume(),
    saveStatus: 'idle',
    hasHydrated: false,

    hydrate() {
      const saved = loadFromStorage();
      set({
        resume: saved ?? createEmptyResume(),
        hasHydrated: true,
        saveStatus: saved ? 'saved' : 'idle',
      });
    },

    saveToStorage() {
      if (saveTimer) clearTimeout(saveTimer);
      set({ saveStatus: 'saving' });
      saveTimer = setTimeout(() => {
        try {
          saveToStorageRaw(get().resume);
          set({ saveStatus: 'saved' });
        } catch {
          set({ saveStatus: 'error' });
        }
      }, 600);
    },

    updatePersonal(data) {
      set((s) => ({
        resume: {
          ...s.resume,
          personal: { ...s.resume.personal, ...data },
        },
      }));
      get().saveToStorage();
    },

    updateSummary(summary) {
      set((s) => ({ resume: { ...s.resume, summary } }));
      get().saveToStorage();
    },

    // ---------- EXPERIENCE ----------
    addExperience() {
      const entry: Experience = {
        id: nanoid(),
        jobTitle: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      };
      set((s) => ({
        resume: { ...s.resume, experience: [...s.resume.experience, entry] },
      }));
      get().saveToStorage();
    },
    updateExperience(id, data) {
      set((s) => ({
        resume: {
          ...s.resume,
          experience: s.resume.experience.map((e) =>
            e.id === id ? { ...e, ...data } : e
          ),
        },
      }));
      get().saveToStorage();
    },
    removeExperience(id) {
      set((s) => ({
        resume: {
          ...s.resume,
          experience: s.resume.experience.filter((e) => e.id !== id),
        },
      }));
      get().saveToStorage();
    },
    reorderExperience(from, to) {
      const arr = [...get().resume.experience];
      const [item] = arr.splice(from, 1);
      arr.splice(to, 0, item);
      set((s) => ({ resume: { ...s.resume, experience: arr } }));
      get().saveToStorage();
    },

    // ---------- EDUCATION ----------
    addEducation() {
      const entry: Education = {
        id: nanoid(),
        degree: '',
        institution: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
        gpa: '',
      };
      set((s) => ({
        resume: { ...s.resume, education: [...s.resume.education, entry] },
      }));
      get().saveToStorage();
    },
    updateEducation(id, data) {
      set((s) => ({
        resume: {
          ...s.resume,
          education: s.resume.education.map((e) =>
            e.id === id ? { ...e, ...data } : e
          ),
        },
      }));
      get().saveToStorage();
    },
    removeEducation(id) {
      set((s) => ({
        resume: {
          ...s.resume,
          education: s.resume.education.filter((e) => e.id !== id),
        },
      }));
      get().saveToStorage();
    },

    // ---------- SKILLS ----------
    addSkill(name, category) {
      const entry: Skill = { id: nanoid(), name, category };
      set((s) => ({
        resume: { ...s.resume, skills: [...s.resume.skills, entry] },
      }));
      get().saveToStorage();
    },
    updateSkill(id, data) {
      set((s) => ({
        resume: {
          ...s.resume,
          skills: s.resume.skills.map((sk) =>
            sk.id === id ? { ...sk, ...data } : sk
          ),
        },
      }));
      get().saveToStorage();
    },
    removeSkill(id) {
      set((s) => ({
        resume: {
          ...s.resume,
          skills: s.resume.skills.filter((sk) => sk.id !== id),
        },
      }));
      get().saveToStorage();
    },
    reorderSkills(from, to) {
      const arr = [...get().resume.skills];
      const [item] = arr.splice(from, 1);
      arr.splice(to, 0, item);
      set((s) => ({ resume: { ...s.resume, skills: arr } }));
      get().saveToStorage();
    },

    // ---------- PROJECTS ----------
    addProject() {
      const entry: Project = {
        id: nanoid(),
        name: '',
        description: '',
        technologies: '',
        url: '',
        githubUrl: '',
        date: '',
      };
      set((s) => ({
        resume: { ...s.resume, projects: [...s.resume.projects, entry] },
      }));
      get().saveToStorage();
    },
    updateProject(id, data) {
      set((s) => ({
        resume: {
          ...s.resume,
          projects: s.resume.projects.map((p) =>
            p.id === id ? { ...p, ...data } : p
          ),
        },
      }));
      get().saveToStorage();
    },
    removeProject(id) {
      set((s) => ({
        resume: {
          ...s.resume,
          projects: s.resume.projects.filter((p) => p.id !== id),
        },
      }));
      get().saveToStorage();
    },

    // ---------- CERTIFICATIONS ----------
    addCertification() {
      const entry: Certification = {
        id: nanoid(),
        name: '',
        organization: '',
        date: '',
        credentialUrl: '',
      };
      set((s) => ({
        resume: {
          ...s.resume,
          certifications: [...s.resume.certifications, entry],
        },
      }));
      get().saveToStorage();
    },
    updateCertification(id, data) {
      set((s) => ({
        resume: {
          ...s.resume,
          certifications: s.resume.certifications.map((c) =>
            c.id === id ? { ...c, ...data } : c
          ),
        },
      }));
      get().saveToStorage();
    },
    removeCertification(id) {
      set((s) => ({
        resume: {
          ...s.resume,
          certifications: s.resume.certifications.filter((c) => c.id !== id),
        },
      }));
      get().saveToStorage();
    },

    // ---------- LANGUAGES ----------
    addLanguage() {
      const entry: Language = {
        id: nanoid(),
        language: '',
        proficiency: 'Intermediate',
      };
      set((s) => ({
        resume: {
          ...s.resume,
          languages: [...s.resume.languages, entry],
        },
      }));
      get().saveToStorage();
    },
    updateLanguage(id, data) {
      set((s) => ({
        resume: {
          ...s.resume,
          languages: s.resume.languages.map((l) =>
            l.id === id ? { ...l, ...data } : l
          ),
        },
      }));
      get().saveToStorage();
    },
    removeLanguage(id) {
      set((s) => ({
        resume: {
          ...s.resume,
          languages: s.resume.languages.filter((l) => l.id !== id),
        },
      }));
      get().saveToStorage();
    },

    // ---------- ACHIEVEMENTS ----------
    addAchievement() {
      const entry: Achievement = {
        id: nanoid(),
        title: '',
        description: '',
        date: '',
      };
      set((s) => ({
        resume: {
          ...s.resume,
          achievements: [...s.resume.achievements, entry],
        },
      }));
      get().saveToStorage();
    },
    updateAchievement(id, data) {
      set((s) => ({
        resume: {
          ...s.resume,
          achievements: s.resume.achievements.map((a) =>
            a.id === id ? { ...a, ...data } : a
          ),
        },
      }));
      get().saveToStorage();
    },
    removeAchievement(id) {
      set((s) => ({
        resume: {
          ...s.resume,
          achievements: s.resume.achievements.filter((a) => a.id !== id),
        },
      }));
      get().saveToStorage();
    },

    // ---------- INTERESTS ----------
    updateInterests(interests) {
      set((s) => ({ resume: { ...s.resume, interests } }));
      get().saveToStorage();
    },

    // ---------- SECTION ORDER ----------
    reorderSections(order) {
      set((s) => ({ resume: { ...s.resume, sectionOrder: order } }));
      get().saveToStorage();
    },

    // ---------- SETTINGS ----------
    updateSettings(settings) {
      set((s) => ({
        resume: {
          ...s.resume,
          settings: { ...s.resume.settings, ...settings },
        },
      }));
      get().saveToStorage();
    },
    setTemplate(template) {
      get().updateSettings({ template });
    },
    setAccentColor(accentColor) {
      get().updateSettings({ accentColor });
    },

    // ---------- LIFECYCLE ----------
    loadSampleResume() {
      const sample = createSampleResume();
      set({ resume: sample });
      saveToStorageRaw(sample);
      set({ saveStatus: 'saved' });
    },
    resetResume() {
      const empty = createEmptyResume();
      set({ resume: empty, saveStatus: 'idle' });
      if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
      }
    },
    importResume(data) {
      // validate minimal required fields
      if (!data?.personal || !data?.settings) {
        throw new Error('Invalid resume data');
      }
      // ensure all array fields exist
      const safe: ResumeData = {
        ...createEmptyResume(),
        ...data,
        personal: { ...createEmptyResume().personal, ...data.personal },
        settings: { ...createEmptyResume().settings, ...data.settings },
        experience: data.experience ?? [],
        education: data.education ?? [],
        skills: data.skills ?? [],
        projects: data.projects ?? [],
        certifications: data.certifications ?? [],
        languages: data.languages ?? [],
        achievements: data.achievements ?? [],
        interests: data.interests ?? [],
        sectionOrder: data.sectionOrder ?? [...(createEmptyResume().sectionOrder)],
      };
      set({ resume: safe });
      saveToStorageRaw(safe);
      set({ saveStatus: 'saved' });
    },
    exportResume() {
      return JSON.stringify(get().resume, null, 2);
    },
  }))
);
