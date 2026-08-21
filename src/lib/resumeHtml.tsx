/**
 * Server-side HTML builder for PDF generation.
 * Pure TypeScript implementation — zero React DOM server or client boundary dependencies.
 */

import type { ResumeData, SectionKey } from '@/types/resume';

function esc(str?: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function fmtDate(val?: string): string {
  if (!val) return '';
  const [y, m] = val.split('-');
  if (!y) return val;
  if (!m) return y;
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthIndex = parseInt(m, 10) - 1;
  const monthStr = monthNames[monthIndex] || m;
  return `${monthStr} ${y}`;
}

function dateRange(start?: string, end?: string, current?: boolean): string {
  const s = fmtDate(start);
  const e = current ? 'Present' : fmtDate(end);
  if (s && e) return `${s} – ${e}`;
  return s || e;
}

function bullets(text?: string): string[] {
  if (!text) return [];
  return text
    .split('\n')
    .map((l) => l.replace(/^[\-•*]\s*/, '').trim())
    .filter(Boolean);
}

function getFontCss(fontFamily?: string): string {
  switch (fontFamily) {
    case 'Georgia': return 'Georgia, serif';
    case 'Roboto': return "'Roboto', sans-serif";
    case 'Lato': return "'Lato', sans-serif";
    case 'Inter': return "'Inter', sans-serif";
    default: return "'Inter', Arial, sans-serif";
  }
}

// ── 1. Classic Template ───────────────────────────────────────
function renderClassic(data: ResumeData): string {
  const { personal, summary, experience, education, skills, projects, certifications, languages, achievements, interests, settings, sectionOrder } = data;
  const accent = settings?.accentColor || '#1e3a5f';
  const fontCss = getFontCss(settings?.fontFamily);

  const sectionTitle = (title: string) => `
    <div class="flex items-center gap-2 mb-3">
      <h2 class="text-xs font-bold uppercase tracking-widest" style="color: ${accent};">${esc(title)}</h2>
      <div class="flex-1 h-px" style="background-color: ${accent}; opacity: 0.3;"></div>
    </div>
  `;

  const sectionsMap: Record<SectionKey, string> = {
    summary: summary ? `
      <section class="mb-5">
        ${sectionTitle('Professional Summary')}
        <p class="text-sm text-gray-700 leading-relaxed">${esc(summary)}</p>
      </section>
    ` : '',

    experience: (experience && experience.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Work Experience')}
        <div class="space-y-4">
          ${experience.map(exp => `
            <div>
              <div class="flex justify-between items-start flex-wrap gap-1">
                <div>
                  <p class="text-sm font-semibold text-gray-900">${esc(exp.jobTitle)}</p>
                  <p class="text-sm text-gray-600">${esc(exp.company)}${exp.location ? `, ${esc(exp.location)}` : ''}</p>
                </div>
                <p class="text-xs text-gray-500 shrink-0">${esc(dateRange(exp.startDate, exp.endDate, exp.current))}</p>
              </div>
              ${exp.description ? `
                <ul class="mt-1.5 space-y-1">
                  ${bullets(exp.description).map(b => `
                    <li class="flex gap-2 text-sm text-gray-700">
                      <span class="mt-1.5 h-1 w-1 rounded-full shrink-0" style="background-color: ${accent};"></span>
                      <span>${esc(b)}</span>
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    education: (education && education.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Education')}
        <div class="space-y-3">
          ${education.map(edu => `
            <div>
              <div class="flex justify-between items-start flex-wrap gap-1">
                <div>
                  <p class="text-sm font-semibold text-gray-900">${esc(edu.degree)}</p>
                  <p class="text-sm text-gray-600">${esc(edu.institution)}${edu.location ? `, ${esc(edu.location)}` : ''}</p>
                </div>
                <p class="text-xs text-gray-500 shrink-0">${esc(dateRange(edu.startDate, edu.endDate, false))}</p>
              </div>
              ${edu.gpa ? `<p class="text-xs text-gray-500 mt-0.5">GPA: ${esc(edu.gpa)}</p>` : ''}
              ${edu.description ? `<p class="text-xs text-gray-600 mt-0.5">${esc(edu.description)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    skills: (skills && skills.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Skills')}
        <div class="flex flex-wrap gap-1.5">
          ${skills.map(sk => `
            <span class="rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">${esc(sk.name)}</span>
          `).join('')}
        </div>
      </section>
    ` : '',

    projects: (projects && projects.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Projects')}
        <div class="space-y-3">
          ${projects.map(p => `
            <div>
              <div class="flex justify-between items-start flex-wrap gap-1">
                <p class="text-sm font-semibold text-gray-900">${esc(p.name)}</p>
                ${p.date ? `<p class="text-xs text-gray-500">${esc(fmtDate(p.date))}</p>` : ''}
              </div>
              ${p.description ? `<p class="text-xs text-gray-700 mt-0.5">${esc(p.description)}</p>` : ''}
              ${p.technologies ? `<p class="text-xs text-gray-500 mt-0.5"><span class="font-medium">Tech:</span> ${esc(p.technologies)}</p>` : ''}
              ${(p.url || p.githubUrl) ? `
                <p class="text-xs mt-0.5" style="color: ${accent};">
                  ${p.url ? `<span>${esc(p.url)}</span>` : ''}
                  ${(p.url && p.githubUrl) ? ' · ' : ''}
                  ${p.githubUrl ? `<span>${esc(p.githubUrl)}</span>` : ''}
                </p>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    certifications: (certifications && certifications.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Certifications')}
        <div class="space-y-2">
          ${certifications.map(c => `
            <div class="flex justify-between items-start flex-wrap gap-1">
              <div>
                <p class="text-sm font-semibold text-gray-900">${esc(c.name)}</p>
                <p class="text-xs text-gray-600">${esc(c.organization)}</p>
              </div>
              ${c.date ? `<p class="text-xs text-gray-500">${esc(fmtDate(c.date))}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    languages: (languages && languages.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Languages')}
        <div class="flex flex-wrap gap-3">
          ${languages.map(l => `
            <div class="text-sm">
              <span class="font-medium text-gray-900">${esc(l.language)}</span>
              <span class="text-gray-500"> · ${esc(l.proficiency)}</span>
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    achievements: (achievements && achievements.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Achievements')}
        <div class="space-y-2">
          ${achievements.map(a => `
            <div>
              <div class="flex justify-between items-start flex-wrap gap-1">
                <p class="text-sm font-semibold text-gray-900">${esc(a.title)}</p>
                ${a.date ? `<p class="text-xs text-gray-500">${esc(fmtDate(a.date))}</p>` : ''}
              </div>
              ${a.description ? `<p class="text-xs text-gray-700">${esc(a.description)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    interests: (interests && interests.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Interests')}
        <p class="text-sm text-gray-700">${esc(interests.join(' · '))}</p>
      </section>
    ` : '',
  };

  const bodyContent = (sectionOrder || []).map(key => sectionsMap[key] || '').join('');

  return `
    <div class="bg-white w-full min-h-full font-sans text-gray-900" style="font-family: ${fontCss};">
      <div class="px-8 pt-8 pb-5 border-b-2" style="border-color: ${accent};">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900">${esc(personal?.fullName || 'Your Name')}</h1>
        ${personal?.jobTitle ? `<p class="text-base mt-0.5 font-medium" style="color: ${accent};">${esc(personal.jobTitle)}</p>` : ''}
        <div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
          ${personal?.email ? `<span>${esc(personal.email)}</span>` : ''}
          ${personal?.phone ? `<span>${esc(personal.phone)}</span>` : ''}
          ${personal?.location ? `<span>${esc(personal.location)}</span>` : ''}
          ${personal?.website ? `<span>${esc(personal.website)}</span>` : ''}
          ${personal?.linkedin ? `<span>${esc(personal.linkedin)}</span>` : ''}
          ${personal?.github ? `<span>${esc(personal.github)}</span>` : ''}
        </div>
      </div>
      <div class="px-8 pt-5 pb-8">
        ${bodyContent}
      </div>
    </div>
  `;
}

// ── 2. Modern Template ────────────────────────────────────────
function renderModern(data: ResumeData): string {
  const { personal, summary, experience, education, skills, projects, certifications, languages, achievements, interests, settings, sectionOrder } = data;
  const accent = settings?.accentColor || '#0f4c75';
  const fontCss = getFontCss(settings?.fontFamily);

  const sidebarSections: SectionKey[] = ['skills', 'languages', 'certifications', 'interests'];
  const mainSections: SectionKey[] = (sectionOrder || []).filter((k) => !sidebarSections.includes(k));

  const sectionTitle = (title: string, light?: boolean) => `
    <h2 class="text-xs font-bold uppercase tracking-widest mb-3 pb-1 border-b ${light ? 'text-white/80 border-white/20' : 'text-gray-800 border-gray-200'}">
      ${esc(title)}
    </h2>
  `;

  return `
    <div class="bg-white w-full min-h-full font-sans flex flex-col" style="font-family: ${fontCss};">
      <div class="px-0" style="background-color: ${accent};">
        <div class="px-6 py-6 text-white">
          <h1 class="text-2xl font-bold">${esc(personal?.fullName || 'Your Name')}</h1>
          ${personal?.jobTitle ? `<p class="text-base mt-0.5 text-white/80">${esc(personal.jobTitle)}</p>` : ''}
          <div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/70">
            ${personal?.email ? `<span>${esc(personal.email)}</span>` : ''}
            ${personal?.phone ? `<span>${esc(personal.phone)}</span>` : ''}
            ${personal?.location ? `<span>${esc(personal.location)}</span>` : ''}
            ${personal?.website ? `<span>${esc(personal.website)}</span>` : ''}
            ${personal?.linkedin ? `<span>${esc(personal.linkedin)}</span>` : ''}
            ${personal?.github ? `<span>${esc(personal.github)}</span>` : ''}
          </div>
        </div>
      </div>

      <div class="flex flex-1">
        <div class="w-[35%] shrink-0 px-5 py-6 text-white" style="background-color: ${accent};">
          <div style="filter: brightness(0.9);">
            ${(skills && skills.length > 0) ? `
              <div class="mb-5">
                ${sectionTitle('Skills', true)}
                <div class="space-y-1">
                  ${skills.map(sk => `
                    <div class="flex items-center gap-2">
                      <span class="h-1.5 w-1.5 rounded-full bg-white/60 shrink-0"></span>
                      <span class="text-xs text-white/90">${esc(sk.name)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${(languages && languages.length > 0) ? `
              <div class="mb-5">
                ${sectionTitle('Languages', true)}
                <div class="space-y-1">
                  ${languages.map(l => `
                    <div class="text-xs text-white/90">
                      <span class="font-medium">${esc(l.language)}</span>
                      <span class="text-white/60"> · ${esc(l.proficiency)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${(certifications && certifications.length > 0) ? `
              <div class="mb-5">
                ${sectionTitle('Certifications', true)}
                <div class="space-y-2">
                  ${certifications.map(c => `
                    <div class="text-xs text-white/90">
                      <p class="font-medium">${esc(c.name)}</p>
                      <p class="text-white/60">${esc(c.organization)}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${(interests && interests.length > 0) ? `
              <div class="mb-5">
                ${sectionTitle('Interests', true)}
                <div class="flex flex-wrap gap-1">
                  ${interests.map(i => `<span class="text-xs text-white/80 bg-white/10 rounded px-1.5 py-0.5">${esc(i)}</span>`).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="flex-1 px-6 py-6">
          ${mainSections.map(key => {
            if (key === 'summary' && summary) return `
              <div class="mb-5">
                ${sectionTitle('Summary')}
                <p class="text-sm text-gray-700 leading-relaxed">${esc(summary)}</p>
              </div>
            `;
            if (key === 'experience' && experience && experience.length > 0) return `
              <div class="mb-5">
                ${sectionTitle('Experience')}
                <div class="space-y-4">
                  ${experience.map(exp => `
                    <div>
                      <div class="flex justify-between items-start flex-wrap gap-1">
                        <div>
                          <p class="text-sm font-semibold text-gray-900">${esc(exp.jobTitle)}</p>
                          <p class="text-xs text-gray-600">${esc(exp.company)}${exp.location ? ` · ${esc(exp.location)}` : ''}</p>
                        </div>
                        <span class="text-xs px-2 py-0.5 rounded-full text-white" style="background-color: ${accent};">
                          ${esc(dateRange(exp.startDate, exp.endDate, exp.current))}
                        </span>
                      </div>
                      ${exp.description ? `
                        <ul class="mt-1.5 space-y-1">
                          ${bullets(exp.description).map(b => `
                            <li class="flex gap-2 text-xs text-gray-700">
                              <span class="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-gray-400"></span>
                              <span>${esc(b)}</span>
                            </li>
                          `).join('')}
                        </ul>
                      ` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
            if (key === 'education' && education && education.length > 0) return `
              <div class="mb-5">
                ${sectionTitle('Education')}
                <div class="space-y-3">
                  ${education.map(edu => `
                    <div>
                      <div class="flex justify-between items-start flex-wrap gap-1">
                        <div>
                          <p class="text-sm font-semibold text-gray-900">${esc(edu.degree)}</p>
                          <p class="text-xs text-gray-600">${esc(edu.institution)}${edu.location ? `, ${esc(edu.location)}` : ''}</p>
                        </div>
                        <p class="text-xs text-gray-500">${esc(dateRange(edu.startDate, edu.endDate, false))}</p>
                      </div>
                      ${edu.gpa ? `<p class="text-xs text-gray-500 mt-0.5">GPA: ${esc(edu.gpa)}</p>` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
            if (key === 'projects' && projects && projects.length > 0) return `
              <div class="mb-5">
                ${sectionTitle('Projects')}
                <div class="space-y-3">
                  ${projects.map(p => `
                    <div>
                      <p class="text-sm font-semibold text-gray-900">${esc(p.name)}</p>
                      ${p.description ? `<p class="text-xs text-gray-700 mt-0.5">${esc(p.description)}</p>` : ''}
                      ${p.technologies ? `<p class="text-xs text-gray-500 mt-0.5">${esc(p.technologies)}</p>` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
            if (key === 'achievements' && achievements && achievements.length > 0) return `
              <div class="mb-5">
                ${sectionTitle('Achievements')}
                <div class="space-y-2">
                  ${achievements.map(a => `
                    <div>
                      <p class="text-sm font-semibold text-gray-900">${esc(a.title)}</p>
                      ${a.description ? `<p class="text-xs text-gray-700">${esc(a.description)}</p>` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
            return '';
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// ── 3. Minimal Template ───────────────────────────────────────
function renderMinimal(data: ResumeData): string {
  const { personal, summary, experience, education, skills, projects, certifications, languages, achievements, interests, settings, sectionOrder } = data;
  const fontCss = getFontCss(settings?.fontFamily);

  const divider = `<hr class="border-t border-gray-200 my-4" />`;
  const sectionTitle = (title: string) => `
    <h2 class="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-3">${esc(title)}</h2>
  `;

  const sectionsMap: Record<SectionKey, string> = {
    summary: summary ? `
      <div>
        ${divider}
        ${sectionTitle('Summary')}
        <p class="text-sm text-gray-600 leading-relaxed">${esc(summary)}</p>
      </div>
    ` : '',

    experience: (experience && experience.length > 0) ? `
      <div>
        ${divider}
        ${sectionTitle('Experience')}
        <div class="space-y-4">
          ${experience.map(exp => `
            <div>
              <div class="flex justify-between items-baseline flex-wrap gap-1">
                <p class="text-sm font-medium text-gray-900">${esc(exp.jobTitle)}</p>
                <p class="text-xs text-gray-400">${esc(dateRange(exp.startDate, exp.endDate, exp.current))}</p>
              </div>
              <p class="text-xs text-gray-500 mb-1">${esc(exp.company)}${exp.location ? `, ${esc(exp.location)}` : ''}</p>
              ${exp.description ? `
                <ul class="space-y-1">
                  ${bullets(exp.description).map(b => `
                    <li class="flex gap-2 text-xs text-gray-600">
                      <span>—</span>
                      <span>${esc(b)}</span>
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : '',

    education: (education && education.length > 0) ? `
      <div>
        ${divider}
        ${sectionTitle('Education')}
        <div class="space-y-3">
          ${education.map(edu => `
            <div>
              <div class="flex justify-between items-baseline flex-wrap gap-1">
                <p class="text-sm font-medium text-gray-900">${esc(edu.degree)}</p>
                <p class="text-xs text-gray-400">${esc(dateRange(edu.startDate, edu.endDate, false))}</p>
              </div>
              <p class="text-xs text-gray-500">${esc(edu.institution)}${edu.location ? `, ${esc(edu.location)}` : ''}</p>
              ${edu.gpa ? `<p class="text-xs text-gray-400 mt-0.5">GPA ${esc(edu.gpa)}</p>` : ''}
              ${edu.description ? `<p class="text-xs text-gray-500 mt-0.5">${esc(edu.description)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : '',

    skills: (skills && skills.length > 0) ? `
      <div>
        ${divider}
        ${sectionTitle('Skills')}
        <p class="text-sm text-gray-700">${skills.map(s => esc(s.name)).join('  ·  ')}</p>
      </div>
    ` : '',

    projects: (projects && projects.length > 0) ? `
      <div>
        ${divider}
        ${sectionTitle('Projects')}
        <div class="space-y-3">
          ${projects.map(p => `
            <div>
              <div class="flex justify-between items-baseline flex-wrap gap-1">
                <p class="text-sm font-medium text-gray-900">${esc(p.name)}</p>
                ${p.date ? `<p class="text-xs text-gray-400">${esc(fmtDate(p.date))}</p>` : ''}
              </div>
              ${p.description ? `<p class="text-xs text-gray-600">${esc(p.description)}</p>` : ''}
              ${p.technologies ? `<p class="text-xs text-gray-400">${esc(p.technologies)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : '',

    certifications: (certifications && certifications.length > 0) ? `
      <div>
        ${divider}
        ${sectionTitle('Certifications')}
        <div class="space-y-1.5">
          ${certifications.map(c => `
            <div class="flex justify-between flex-wrap gap-1">
              <div>
                <span class="text-sm text-gray-800">${esc(c.name)}</span>
                <span class="text-xs text-gray-400"> · ${esc(c.organization)}</span>
              </div>
              ${c.date ? `<span class="text-xs text-gray-400">${esc(fmtDate(c.date))}</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : '',

    languages: (languages && languages.length > 0) ? `
      <div>
        ${divider}
        ${sectionTitle('Languages')}
        <p class="text-sm text-gray-700">
          ${languages.map(l => `${esc(l.language)} (${esc(l.proficiency)})`).join('  ·  ')}
        </p>
      </div>
    ` : '',

    achievements: (achievements && achievements.length > 0) ? `
      <div>
        ${divider}
        ${sectionTitle('Achievements')}
        <div class="space-y-2">
          ${achievements.map(a => `
            <div>
              <p class="text-sm font-medium text-gray-800">${esc(a.title)}</p>
              ${a.description ? `<p class="text-xs text-gray-500">${esc(a.description)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : '',

    interests: (interests && interests.length > 0) ? `
      <div>
        ${divider}
        ${sectionTitle('Interests')}
        <p class="text-sm text-gray-600">${esc(interests.join('  ·  '))}</p>
      </div>
    ` : '',
  };

  const bodyContent = (sectionOrder || []).map(key => sectionsMap[key] || '').join('');

  return `
    <div class="bg-white w-full min-h-full px-10 py-10" style="font-family: ${fontCss};">
      <div class="mb-1">
        <h1 class="text-3xl font-light tracking-tight text-gray-900">${esc(personal?.fullName || 'Your Name')}</h1>
        ${personal?.jobTitle ? `<p class="text-sm text-gray-500 mt-0.5">${esc(personal.jobTitle)}</p>` : ''}
        <div class="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-gray-400">
          ${personal?.email ? `<span>${esc(personal.email)}</span>` : ''}
          ${personal?.phone ? `<span>${esc(personal.phone)}</span>` : ''}
          ${personal?.location ? `<span>${esc(personal.location)}</span>` : ''}
          ${personal?.website ? `<span>${esc(personal.website)}</span>` : ''}
          ${personal?.linkedin ? `<span>${esc(personal.linkedin)}</span>` : ''}
          ${personal?.github ? `<span>${esc(personal.github)}</span>` : ''}
        </div>
      </div>
      ${bodyContent}
    </div>
  `;
}

// ── 4. Developer Template ──────────────────────────────────────
function renderDeveloper(data: ResumeData): string {
  const { personal, summary, experience, education, skills, projects, certifications, languages, achievements, interests, settings, sectionOrder } = data;
  const accent = settings?.accentColor || '#58a6ff';

  const sectionTitle = (title: string) => `
    <div class="flex items-center gap-2 mb-3">
      <span class="font-mono text-xs font-bold" style="color: ${accent};">#</span>
      <h2 class="font-mono text-xs font-bold uppercase tracking-widest text-gray-200">${esc(title)}</h2>
      <div class="flex-1 h-px bg-gray-700"></div>
    </div>
  `;

  const sectionsMap: Record<SectionKey, string> = {
    summary: summary ? `
      <section class="mb-5">
        ${sectionTitle('About')}
        <p class="text-xs text-gray-400 leading-relaxed font-mono">${esc(summary)}</p>
      </section>
    ` : '',

    experience: (experience && experience.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Experience')}
        <div class="space-y-4">
          ${experience.map(exp => `
            <div>
              <div class="flex justify-between items-start flex-wrap gap-1">
                <div>
                  <p class="text-sm font-semibold text-gray-100">${esc(exp.jobTitle)}</p>
                  <p class="text-xs font-mono" style="color: ${accent};">${esc(exp.company)}${exp.location ? ` · ${esc(exp.location)}` : ''}</p>
                </div>
                <p class="text-xs text-gray-500 font-mono">${esc(dateRange(exp.startDate, exp.endDate, exp.current))}</p>
              </div>
              ${exp.description ? `
                <ul class="mt-1.5 space-y-1">
                  ${bullets(exp.description).map(b => `
                    <li class="flex gap-2 text-xs text-gray-400 font-mono">
                      <span style="color: ${accent};">›</span>
                      <span>${esc(b)}</span>
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    projects: (projects && projects.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Projects')}
        <div class="space-y-3">
          ${projects.map(p => `
            <div class="border border-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-start flex-wrap gap-1">
                <p class="text-sm font-semibold text-gray-100">${esc(p.name)}</p>
                ${p.date ? `<p class="text-xs text-gray-500 font-mono">${esc(fmtDate(p.date))}</p>` : ''}
              </div>
              ${p.description ? `<p class="text-xs text-gray-400 mt-1">${esc(p.description)}</p>` : ''}
              ${p.technologies ? `
                <div class="mt-1.5 flex flex-wrap gap-1">
                  ${p.technologies.split(',').map(t => `<span class="rounded px-1.5 py-0.5 text-xs font-mono bg-gray-700 text-gray-300">${esc(t.trim())}</span>`).join('')}
                </div>
              ` : ''}
              ${(p.githubUrl || p.url) ? `
                <p class="text-xs font-mono mt-1.5" style="color: ${accent};">
                  ${p.githubUrl ? `<span>${esc(p.githubUrl)}</span>` : ''}
                  ${(p.githubUrl && p.url) ? ' · ' : ''}
                  ${p.url ? `<span>${esc(p.url)}</span>` : ''}
                </p>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    skills: (skills && skills.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Tech Stack')}
        <div class="flex flex-wrap gap-1.5">
          ${skills.map(sk => `
            <span class="rounded px-2 py-0.5 text-xs font-mono bg-gray-700 text-gray-200 border border-gray-600">${esc(sk.name)}</span>
          `).join('')}
        </div>
      </section>
    ` : '',

    education: (education && education.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Education')}
        <div class="space-y-2">
          ${education.map(edu => `
            <div class="flex justify-between flex-wrap gap-1">
              <div>
                <p class="text-sm font-semibold text-gray-100">${esc(edu.degree)}</p>
                <p class="text-xs text-gray-400">${esc(edu.institution)}${edu.location ? `, ${esc(edu.location)}` : ''}</p>
              </div>
              <p class="text-xs text-gray-500 font-mono">${esc(dateRange(edu.startDate, edu.endDate, false))}</p>
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    certifications: (certifications && certifications.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Certifications')}
        <div class="space-y-1.5">
          ${certifications.map(c => `
            <div class="flex justify-between flex-wrap gap-1">
              <p class="text-xs font-mono text-gray-300">${esc(c.name)} <span class="text-gray-500">· ${esc(c.organization)}</span></p>
              ${c.date ? `<p class="text-xs text-gray-500 font-mono">${esc(fmtDate(c.date))}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    languages: (languages && languages.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Languages')}
        <div class="flex flex-wrap gap-3">
          ${languages.map(l => `
            <p class="text-xs font-mono text-gray-400">
              ${esc(l.language)} <span style="color: ${accent};">(${esc(l.proficiency)})</span>
            </p>
          `).join('')}
        </div>
      </section>
    ` : '',

    achievements: (achievements && achievements.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Achievements')}
        <div class="space-y-2">
          ${achievements.map(a => `
            <div>
              <p class="text-sm font-semibold text-gray-100">${esc(a.title)}</p>
              ${a.description ? `<p class="text-xs text-gray-400 font-mono">${esc(a.description)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    interests: (interests && interests.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Interests')}
        <p class="text-xs font-mono text-gray-400">${esc(interests.join(' / '))}</p>
      </section>
    ` : '',
  };

  const bodyContent = (sectionOrder || []).map(key => sectionsMap[key] || '').join('');

  return `
    <div class="w-full min-h-full font-mono" style="background-color: #0d1117; color: #e6edf3;">
      <div class="px-8 pt-8 pb-6 border-b border-gray-700">
        <div class="flex items-start gap-3 flex-wrap">
          ${(settings?.showPhoto && personal?.photo) ? `
            <img src="${esc(personal.photo)}" alt="${esc(personal.fullName)}" class="h-16 w-16 rounded-full object-cover border-2 border-gray-600" />
          ` : ''}
          <div>
            <h1 class="text-xl font-bold text-white tracking-tight">${esc(personal?.fullName || 'Your Name')}</h1>
            ${personal?.jobTitle ? `<p class="text-sm mt-0.5" style="color: ${accent};">${esc(personal.jobTitle)}</p>` : ''}
            <div class="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-gray-500">
              ${personal?.email ? `<span>${esc(personal.email)}</span>` : ''}
              ${personal?.phone ? `<span>${esc(personal.phone)}</span>` : ''}
              ${personal?.location ? `<span>${esc(personal.location)}</span>` : ''}
              ${personal?.website ? `<span style="color: ${accent};">${esc(personal.website)}</span>` : ''}
              ${personal?.linkedin ? `<span style="color: ${accent};">${esc(personal.linkedin)}</span>` : ''}
              ${personal?.github ? `<span style="color: ${accent};">${esc(personal.github)}</span>` : ''}
            </div>
          </div>
        </div>
      </div>
      <div class="px-8 pt-6 pb-8">
        ${bodyContent}
      </div>
    </div>
  `;
}

// ── 5. Student Template ───────────────────────────────────────
function renderStudent(data: ResumeData): string {
  const { personal, summary, experience, education, skills, projects, certifications, languages, achievements, interests, settings, sectionOrder } = data;
  const accent = settings?.accentColor || '#16a34a';
  const lightAccent = `${accent}18`;
  const fontCss = getFontCss(settings?.fontFamily);

  const sectionTitle = (title: string) => `
    <div class="flex items-center gap-2 mb-3">
      <div class="h-4 w-1 rounded-full" style="background-color: ${accent};"></div>
      <h2 class="text-sm font-bold text-gray-800">${esc(title)}</h2>
    </div>
  `;

  const sectionsMap: Record<SectionKey, string> = {
    summary: summary ? `
      <section class="mb-5 rounded-xl p-4" style="background-color: ${lightAccent};">
        ${sectionTitle('About Me')}
        <p class="text-sm text-gray-700 leading-relaxed">${esc(summary)}</p>
      </section>
    ` : '',

    education: (education && education.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Education')}
        <div class="space-y-3">
          ${education.map(edu => `
            <div class="rounded-xl border border-gray-100 p-3">
              <div class="flex justify-between items-start flex-wrap gap-1">
                <div>
                  <p class="text-sm font-semibold text-gray-900">${esc(edu.degree)}</p>
                  <p class="text-xs text-gray-600">${esc(edu.institution)}${edu.location ? `, ${esc(edu.location)}` : ''}</p>
                </div>
                <p class="text-xs text-white rounded-full px-2 py-0.5" style="background-color: ${accent};">
                  ${esc(dateRange(edu.startDate, edu.endDate, false))}
                </p>
              </div>
              ${edu.gpa ? `<p class="text-xs font-medium mt-1" style="color: ${accent};">GPA: ${esc(edu.gpa)}</p>` : ''}
              ${edu.description ? `<p class="text-xs text-gray-600 mt-1">${esc(edu.description)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    skills: (skills && skills.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Skills')}
        <div class="flex flex-wrap gap-1.5">
          ${skills.map(sk => `
            <span class="rounded-full px-2.5 py-0.5 text-xs font-medium" style="background-color: ${lightAccent}; color: ${accent};">${esc(sk.name)}</span>
          `).join('')}
        </div>
      </section>
    ` : '',

    projects: (projects && projects.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Projects')}
        <div class="space-y-3">
          ${projects.map(p => `
            <div class="rounded-xl border border-gray-100 p-3">
              <div class="flex justify-between items-start flex-wrap gap-1">
                <p class="text-sm font-semibold text-gray-900">${esc(p.name)}</p>
                ${p.date ? `<p class="text-xs text-gray-400">${esc(fmtDate(p.date))}</p>` : ''}
              </div>
              ${p.description ? `<p class="text-xs text-gray-700 mt-1">${esc(p.description)}</p>` : ''}
              ${p.technologies ? `
                <div class="mt-1.5 flex flex-wrap gap-1">
                  ${p.technologies.split(',').map(t => `<span class="rounded px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600">${esc(t.trim())}</span>`).join('')}
                </div>
              ` : ''}
              ${p.githubUrl ? `<p class="text-xs mt-1" style="color: ${accent};">${esc(p.githubUrl)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    experience: (experience && experience.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Experience')}
        <div class="space-y-4">
          ${experience.map(exp => `
            <div>
              <div class="flex justify-between items-start flex-wrap gap-1">
                <div>
                  <p class="text-sm font-semibold text-gray-900">${esc(exp.jobTitle)}</p>
                  <p class="text-xs text-gray-500">${esc(exp.company)}${exp.location ? `, ${esc(exp.location)}` : ''}</p>
                </div>
                <p class="text-xs text-gray-400">${esc(dateRange(exp.startDate, exp.endDate, exp.current))}</p>
              </div>
              ${exp.description ? `
                <ul class="mt-1.5 space-y-1">
                  ${bullets(exp.description).map(b => `
                    <li class="flex gap-2 text-xs text-gray-700">
                      <span class="mt-1.5 h-1 w-1 rounded-full shrink-0" style="background-color: ${accent};"></span>
                      <span>${esc(b)}</span>
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    certifications: (certifications && certifications.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Certifications')}
        <div class="space-y-2">
          ${certifications.map(c => `
            <div class="flex justify-between flex-wrap gap-1">
              <div>
                <p class="text-sm font-medium text-gray-900">${esc(c.name)}</p>
                <p class="text-xs text-gray-500">${esc(c.organization)}</p>
              </div>
              ${c.date ? `<p class="text-xs text-gray-400">${esc(fmtDate(c.date))}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    achievements: (achievements && achievements.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Achievements')}
        <div class="space-y-2">
          ${achievements.map(a => `
            <div class="flex gap-2">
              <span class="mt-1 h-2 w-2 rounded-full shrink-0" style="background-color: ${accent};"></span>
              <div>
                <p class="text-sm font-medium text-gray-900">${esc(a.title)}</p>
                ${a.description ? `<p class="text-xs text-gray-600">${esc(a.description)}</p>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    ` : '',

    languages: (languages && languages.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Languages')}
        <div class="flex flex-wrap gap-3">
          ${languages.map(l => `
            <p class="text-sm text-gray-700">
              <span class="font-medium">${esc(l.language)}</span>
              <span class="text-gray-400"> · ${esc(l.proficiency)}</span>
            </p>
          `).join('')}
        </div>
      </section>
    ` : '',

    interests: (interests && interests.length > 0) ? `
      <section class="mb-5">
        ${sectionTitle('Interests')}
        <div class="flex flex-wrap gap-1.5">
          ${interests.map(i => `<span class="text-xs rounded-full px-2.5 py-0.5 bg-gray-100 text-gray-600">${esc(i)}</span>`).join('')}
        </div>
      </section>
    ` : '',
  };

  const bodyContent = (sectionOrder || []).map(key => sectionsMap[key] || '').join('');

  return `
    <div class="bg-white w-full min-h-full" style="font-family: ${fontCss};">
      <div class="px-8 pt-8 pb-5 text-center border-b-4" style="border-color: ${accent};">
        ${(settings?.showPhoto && personal?.photo) ? `
          <img src="${esc(personal.photo)}" alt="${esc(personal.fullName)}" class="h-20 w-20 rounded-full object-cover mx-auto mb-3 border-2" style="border-color: ${accent};" />
        ` : ''}
        <h1 class="text-2xl font-bold text-gray-900">${esc(personal?.fullName || 'Your Name')}</h1>
        ${personal?.jobTitle ? `<p class="text-sm mt-0.5 font-medium" style="color: ${accent};">${esc(personal.jobTitle)}</p>` : ''}
        <div class="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-0.5 text-xs text-gray-500">
          ${personal?.email ? `<span>${esc(personal.email)}</span>` : ''}
          ${personal?.phone ? `<span>${esc(personal.phone)}</span>` : ''}
          ${personal?.location ? `<span>${esc(personal.location)}</span>` : ''}
          ${personal?.github ? `<span style="color: ${accent};">${esc(personal.github)}</span>` : ''}
          ${personal?.linkedin ? `<span style="color: ${accent};">${esc(personal.linkedin)}</span>` : ''}
        </div>
      </div>
      <div class="px-8 pt-5 pb-8">
        ${bodyContent}
      </div>
    </div>
  `;
}

// ── 6. Executive Template ───────────────────────────────────────
function renderExecutive(data: ResumeData): string {
  const {
    personal,
    summary,
    experience,
    education,
    skills,
    projects,
    certifications,
    languages,
    achievements,
    interests,
    settings,
    sectionOrder,
  } = data;
  const accent = settings?.accentColor || '#F0C040';
  const fontCss = getFontCss(settings?.fontFamily);
  const darkBg = '#222222';

  const profWidth: Record<string, number> = {
    Beginner: 30,
    Intermediate: 55,
    Advanced: 80,
    Fluent: 92,
    Native: 100,
  };

  const rightTitle = (title: string) => `
    <h2 class="uppercase font-bold tracking-[0.2em] text-[#262626] mb-2.5" style="font-size: 13px; letter-spacing: 0.2em;">
      ${esc(title)}
    </h2>
  `;

  const entryHeader = (title: string, date?: string) => `
    <p class="uppercase font-bold text-[#444444] tracking-wide text-[10.5px] mb-1">
      ${esc(title)}
      ${date ? `<span class="font-semibold text-[#777777] ml-1.5">(${esc(date)})</span>` : ''}
    </p>
  `;

  const rightSections: Record<SectionKey, string> = {
    summary: '',
    skills: '',
    languages: '',

    experience: (experience && experience.length > 0) ? `
      <div class="mb-4">
        ${rightTitle('Experience')}
        <div class="space-y-3">
          ${experience.map(exp => `
            <div>
              ${entryHeader(`${exp.jobTitle}${exp.company ? ` · ${exp.company}` : ''}`, dateRange(exp.startDate, exp.endDate, exp.current))}
              ${exp.description ? `
                <div class="space-y-0.5 mt-0.5">
                  ${bullets(exp.description).map(b => `
                    <p class="text-[9.5px] text-[#666666] leading-relaxed">${esc(b)}</p>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : '',

    education: (education && education.length > 0) ? `
      <div class="mb-4">
        ${rightTitle('Education')}
        <div class="space-y-3">
          ${education.map(edu => `
            <div>
              ${entryHeader(`${edu.degree}${edu.institution ? ` · ${edu.institution}` : ''}`, dateRange(edu.startDate, edu.endDate, false))}
              ${edu.description ? `<p class="text-[9.5px] text-[#666666] leading-relaxed mt-0.5">${esc(edu.description)}</p>` : ''}
              ${edu.gpa ? `<p class="text-[9px] text-[#888888] mt-0.5">GPA: ${esc(edu.gpa)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : '',

    projects: (projects && projects.length > 0) ? `
      <div class="mb-4">
        ${rightTitle('Projects')}
        <div class="space-y-2.5">
          ${projects.map(p => `
            <div>
              ${entryHeader(p.name, p.date ? fmtDate(p.date) : undefined)}
              ${p.description ? `<p class="text-[9.5px] text-[#666666] leading-relaxed">${esc(p.description)}</p>` : ''}
              ${p.technologies ? `<p class="text-[9px] text-[#888888] mt-0.5"><span class="font-semibold text-[#555555]">Tech:</span> ${esc(p.technologies)}</p>` : ''}
              ${(p.url || p.githubUrl) ? `
                <p class="text-[9px] mt-0.5 text-[#555555]">
                  ${p.url ? `<span>${esc(p.url)}</span>` : ''}
                  ${(p.url && p.githubUrl) ? ' · ' : ''}
                  ${p.githubUrl ? `<span>${esc(p.githubUrl)}</span>` : ''}
                </p>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : '',

    certifications: (certifications && certifications.length > 0) ? `
      <div class="mb-4">
        ${rightTitle('Certifications')}
        <div class="space-y-1.5">
          ${certifications.map(c => `
            <div class="flex justify-between items-baseline flex-wrap gap-1">
              <div>
                <p class="text-[10px] font-bold text-[#444444] uppercase">${esc(c.name)}</p>
                <p class="text-[9px] text-[#777777]">${esc(c.organization)}</p>
              </div>
              ${c.date ? `<p class="text-[9px] text-[#888888]">${esc(fmtDate(c.date))}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : '',

    achievements: (achievements && achievements.length > 0) ? `
      <div class="mb-4">
        ${rightTitle('Achievements')}
        <div class="space-y-1.5">
          ${achievements.map(a => `
            <div>
              <p class="text-[10px] font-bold text-[#444444] uppercase">${esc(a.title)}</p>
              ${a.description ? `<p class="text-[9.5px] text-[#666666]">${esc(a.description)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : '',

    interests: (interests && interests.length > 0) ? `
      <div class="mb-4">
        ${rightTitle('Interests')}
        <p class="text-[9.5px] text-[#666666]">${esc(interests.join(' · '))}</p>
      </div>
    ` : '',
  };

  const rightContent = (sectionOrder || []).map(key => rightSections[key] || '').join('');

  return `
    <div class="bg-white w-full flex" style="font-family: ${fontCss}; height: 1123px; overflow: hidden;">
      <!-- LEFT DARK SIDEBAR (36%) -->
      <div class="w-[36%] shrink-0 flex flex-col overflow-hidden text-white" style="background-color: ${darkBg};">
        ${(settings?.showPhoto && personal?.photo) ? `
          <div class="w-full shrink-0" style="height: 230px;">
            <img src="${personal.photo}" alt="${esc(personal.fullName)}" class="w-full h-full object-cover block" />
          </div>
        ` : `
          <div class="w-full shrink-0 flex items-center justify-center bg-[#181818]" style="height: 160px;">
            <span class="text-[28px] font-bold text-[#444444] tracking-wider uppercase">
              ${esc((personal?.fullName || 'AB').slice(0, 2))}
            </span>
          </div>
        `}

        <div class="px-6 py-5 flex flex-col gap-5 overflow-hidden flex-1">
          ${summary ? `
            <div>
              <h3 class="uppercase tracking-[0.22em] font-bold text-[#999999] mb-2 text-[11px]">
                About Me
              </h3>
              <p class="text-[9.5px] text-[#cccccc] leading-relaxed">
                ${esc(summary)}
              </p>
            </div>
          ` : ''}

          ${(skills && skills.length > 0) ? `
            <div>
              <h3 class="uppercase tracking-[0.22em] font-bold text-[#999999] mb-2.5 text-[11px]">
                Skills
              </h3>
              <div class="space-y-2">
                ${skills.map((sk, index) => {
                  const defaultWidths = [85, 70, 90, 60, 75, 80, 65, 95];
                  const barWidth = defaultWidths[index % defaultWidths.length];
                  return `
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-[9.5px] text-[#cccccc] shrink-0 truncate max-w-[48%]">
                        ${esc(sk.name)}:
                      </p>
                      <div class="flex-1 max-w-[48%] h-1 bg-[#3a3a3a] rounded-full overflow-hidden">
                        <div class="h-full bg-[#8c8c8c] rounded-full" style="width: ${barWidth}%;"></div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          ${(languages && languages.length > 0) ? `
            <div>
              <h3 class="uppercase tracking-[0.22em] font-bold text-[#999999] mb-2 text-[11px]">
                Languages
              </h3>
              <div class="space-y-1.5">
                ${languages.map(l => `
                  <div class="flex items-center justify-between gap-2">
                    <p class="text-[9.5px] text-[#cccccc] shrink-0 truncate max-w-[48%]">
                      ${esc(l.language)}:
                    </p>
                    <div class="flex-1 max-w-[48%] h-1 bg-[#3a3a3a] rounded-full overflow-hidden">
                      <div class="h-full bg-[#8c8c8c] rounded-full" style="width: ${profWidth[l.proficiency] ?? 70}%;"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- RIGHT COLUMN (64%) -->
      <div class="flex-1 flex flex-col overflow-hidden bg-white">
        <div class="pt-9 pb-6 px-8 flex flex-col items-center text-center">
          <div class="relative inline-block mb-3.5">
            <div class="absolute left-[-12px] right-[-12px] bottom-1 h-3.5 -z-0 opacity-95" style="background-color: ${accent};"></div>
            <h1 class="relative z-10 font-black uppercase text-[#222222] tracking-[0.08em] leading-none" style="font-size: 27px;">
              ${esc(personal?.fullName || 'YOUR NAME')}
            </h1>
          </div>

          <div class="space-y-0.5 text-[9.5px] text-[#777777] leading-relaxed">
            ${personal?.location ? `<p>${esc(personal.location)}</p>` : ''}
            ${personal?.phone ? `<p>phone: ${esc(personal.phone)}</p>` : ''}
            ${personal?.email ? `<p>email: ${esc(personal.email)}</p>` : ''}
            ${personal?.website ? `<p>${esc(personal.website)}</p>` : ''}
            ${personal?.linkedin ? `<p>${esc(personal.linkedin)}</p>` : ''}
            ${personal?.github ? `<p>${esc(personal.github)}</p>` : ''}
          </div>
        </div>

        <div class="px-8 pt-2 pb-6 flex-1 overflow-hidden">
          ${rightContent}
        </div>
      </div>
    </div>
  `;
}

// ── Main Entry Point ──────────────────────────────────────────
// IMPORTANT:
// This file is pure HTML-string generation.
// No React / JSX / DOM dependencies are used here.
//
// Recommended filename:
//   src/lib/resumeHtml.ts
//
// NOT:
//   src/lib/resumeHtml.tsx

export function buildResumeHtml(
  data: ResumeData,
  options?: { compact?: boolean }
): string {
  // Make absolutely sure we always have an object.
  const resumeData = data ?? ({} as ResumeData);

  const templateId = resumeData.settings?.template ?? 'classic';
  const isCompact = options?.compact === true;

  let body: string;

  // Select the template ONCE.
  //
  // Do not call buildResumeHtml() from any render function.
  // Each render function must only return its own HTML.
  switch (templateId) {
    case 'modern':
      body = renderModern(resumeData);
      break;

    case 'executive':
      body = renderExecutive(resumeData);
      break;

    case 'minimal':
      body = renderMinimal(resumeData);
      break;

    case 'developer':
      body = renderDeveloper(resumeData);
      break;

    case 'student':
      body = renderStudent(resumeData);
      break;

    case 'classic':
    default:
      body = renderClassic(resumeData);
      break;
  }

  // Safety check.
  // If a template somehow returns something other than a string,
  // fail cleanly instead of causing another confusing error.
  if (typeof body !== 'string') {
    throw new Error(
      `Resume template "${templateId}" did not return valid HTML.`
    );
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  <title>Resume</title>

  <!--
    External fonts.
    Puppeteer can continue even if Google Fonts are unavailable.
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lato:wght@300;400;700&family=Roboto:wght@300;400;500;700&display=swap"
    rel="stylesheet"
  />

  <style>
    /* =========================================================
       A4 PAGE
       ========================================================= */

    @page {
      size: A4 portrait;
      margin: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html,
    body {
      width: 794px;
      min-height: 1123px;
      margin: 0;
      padding: 0;

      background: #ffffff;

      font-family:
        Inter,
        Arial,
        Helvetica,
        sans-serif;

      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }

    body {
      overflow-x: hidden;
    }

    /* =========================================================
       FONT HELPERS
       ========================================================= */

    .font-inter {
      font-family:
        'Inter',
        system-ui,
        -apple-system,
        sans-serif !important;
    }

    .font-georgia {
      font-family:
        Georgia,
        serif !important;
    }

    .font-roboto {
      font-family:
        'Roboto',
        system-ui,
        -apple-system,
        sans-serif !important;
    }

    .font-lato {
      font-family:
        'Lato',
        system-ui,
        -apple-system,
        sans-serif !important;
    }

    .font-mono {
      font-family:
        ui-monospace,
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        'Courier New',
        monospace;
    }

    /* =========================================================
       DISPLAY / FLEX
       ========================================================= */

    .flex {
      display: flex;
    }

    .flex-col {
      flex-direction: column;
    }

    .flex-1 {
      flex: 1 1 0%;
    }

    .flex-wrap {
      flex-wrap: wrap;
    }

    .items-start {
      align-items: flex-start;
    }

    .items-center {
      align-items: center;
    }

    .items-baseline {
      align-items: baseline;
    }

    .justify-between {
      justify-content: space-between;
    }

    .justify-center {
      justify-content: center;
    }

    .justify-end {
      justify-content: flex-end;
    }

    .shrink-0 {
      flex-shrink: 0;
    }

    .min-w-0 {
      min-width: 0;
    }

    .w-full {
      width: 100%;
    }

    .min-h-full {
      min-height: 100%;
    }

    .block {
      display: block;
    }

    .inline {
      display: inline;
    }

    .hidden {
      display: none;
    }

    /* =========================================================
       WIDTH / HEIGHT
       ========================================================= */

    .w-1 {
      width: 0.25rem;
    }

    .h-1 {
      height: 0.25rem;
    }

    .w-1\\.5 {
      width: 0.375rem;
    }

    .h-1\\.5 {
      height: 0.375rem;
    }

    .w-2 {
      width: 0.5rem;
    }

    .h-2 {
      height: 0.5rem;
    }

    .w-4 {
      width: 1rem;
    }

    .h-4 {
      height: 1rem;
    }

    .w-16 {
      width: 4rem;
    }

    .h-16 {
      height: 4rem;
    }

    .w-20 {
      width: 5rem;
    }

    .h-20 {
      height: 5rem;
    }

    .w-\\[35\\%\\] {
      width: 35%;
    }

    /* =========================================================
       GAP
       ========================================================= */

    .gap-1 {
      gap: 0.25rem;
    }

    .gap-1\\.5 {
      gap: 0.375rem;
    }

    .gap-2 {
      gap: 0.5rem;
    }

    .gap-3 {
      gap: 0.75rem;
    }

    .gap-x-3 {
      column-gap: 0.75rem;
    }

    .gap-x-4 {
      column-gap: 1rem;
    }

    .gap-y-0\\.5 {
      row-gap: 0.125rem;
    }

    .gap-y-1 {
      row-gap: 0.25rem;
    }

    .gap-y-1\\.5 {
      row-gap: 0.375rem;
    }

    /* =========================================================
       VERTICAL SPACING
       ========================================================= */

    .space-y-1 > * + * {
      margin-top: 0.25rem;
    }

    .space-y-1\\.5 > * + * {
      margin-top: 0.375rem;
    }

    .space-y-2 > * + * {
      margin-top: 0.5rem;
    }

    .space-y-3 > * + * {
      margin-top: 0.75rem;
    }

    .space-y-4 > * + * {
      margin-top: 1rem;
    }

    /* =========================================================
       PADDING
       ========================================================= */

    .p-3 {
      padding: 0.75rem;
    }

    .p-4 {
      padding: 1rem;
    }

    .px-1\\.5 {
      padding-left: 0.375rem;
      padding-right: 0.375rem;
    }

    .px-2 {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .px-2\\.5 {
      padding-left: 0.625rem;
      padding-right: 0.625rem;
    }

    .px-3 {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }

    .px-5 {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }

    .px-6 {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .px-8 {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .px-10 {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }

    .py-0\\.5 {
      padding-top: 0.125rem;
      padding-bottom: 0.125rem;
    }

    .py-1 {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }

    .py-3 {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
    }

    .py-4 {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    .py-5 {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }

    .py-6 {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }

    .py-8 {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }

    .py-10 {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }

    .pt-1 {
      padding-top: 0.25rem;
    }

    .pt-5 {
      padding-top: 0.875rem;
    }

    .pt-6 {
      padding-top: 1rem;
    }

    .pt-8 {
      padding-top: 1.25rem;
    }

    .pb-5 {
      padding-bottom: 0.875rem;
    }

    .pb-6 {
      padding-bottom: 1rem;
    }

    .pb-8 {
      padding-bottom: 1.25rem;
    }

    /* =========================================================
       MARGIN
       ========================================================= */

    .mt-0\\.5 {
      margin-top: 0.125rem;
    }

    .mt-1 {
      margin-top: 0.25rem;
    }

    .mt-1\\.5 {
      margin-top: 0.375rem;
    }

    .mt-2 {
      margin-top: 0.5rem;
    }

    .mb-1 {
      margin-bottom: 0.25rem;
    }

    .mb-3 {
      margin-bottom: 0.75rem;
    }

    .mb-5 {
      margin-bottom: 0.75rem;
    }

    .my-4 {
      margin-top: 0.625rem;
      margin-bottom: 0.625rem;
    }

    .mx-auto {
      margin-left: auto;
      margin-right: auto;
    }

    /* =========================================================
       TYPOGRAPHY
       ========================================================= */

    .text-xs {
      font-size: 0.5625rem;
      line-height: 0.875rem;
    }

    .text-sm {
      font-size: 0.6875rem;
      line-height: 1rem;
    }

    .text-base {
      font-size: 0.6875rem;
      line-height: 1rem;
    }

    .text-xl {
      font-size: 1rem;
      line-height: 1.4rem;
    }

    .text-2xl {
      font-size: 1.25rem;
      line-height: 1.6rem;
    }

    .text-3xl {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }

    .font-light {
      font-weight: 300;
    }

    .font-medium {
      font-weight: 500;
    }

    .font-semibold {
      font-weight: 600;
    }

    .font-bold {
      font-weight: 700;
    }

    .tracking-tight {
      letter-spacing: -0.025em;
    }

    .tracking-widest {
      letter-spacing: 0.1em;
    }

    .tracking-\\[0\\.15em\\] {
      letter-spacing: 0.15em;
    }

    .uppercase {
      text-transform: uppercase;
    }

    .text-center {
      text-align: center;
    }

    .leading-relaxed {
      line-height: 1.625;
    }

    .truncate {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* =========================================================
       COLORS
       ========================================================= */

    .bg-white {
      background-color: #ffffff;
    }

    .text-white {
      color: #ffffff;
    }

    .text-gray-100 {
      color: #f3f4f6;
    }

    .text-gray-200 {
      color: #e5e7eb;
    }

    .text-gray-300 {
      color: #d1d5db;
    }

    .text-gray-400 {
      color: #9ca3af;
    }

    .text-gray-500 {
      color: #6b7280;
    }

    .text-gray-600 {
      color: #4b5563;
    }

    .text-gray-700 {
      color: #374151;
    }

    .text-gray-800 {
      color: #1f2937;
    }

    .text-gray-900 {
      color: #111827;
    }

    .bg-gray-100 {
      background-color: #f3f4f6;
    }

    .bg-gray-700 {
      background-color: #374151;
    }

    .border-gray-100 {
      border-color: #f3f4f6;
    }

    .border-gray-200 {
      border-color: #e5e7eb;
    }

    .border-gray-600 {
      border-color: #4b5563;
    }

    .border-gray-700 {
      border-color: #374151;
    }

    .text-white\\/60 {
      color: rgba(255, 255, 255, 0.6);
    }

    .text-white\\/70 {
      color: rgba(255, 255, 255, 0.7);
    }

    .text-white\\/80 {
      color: rgba(255, 255, 255, 0.8);
    }

    .text-white\\/90 {
      color: rgba(255, 255, 255, 0.9);
    }

    .bg-white\\/10 {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .bg-white\\/60 {
      background-color: rgba(255, 255, 255, 0.6);
    }

    .border-white\\/20 {
      border-color: rgba(255, 255, 255, 0.2);
    }

    /* =========================================================
       BORDERS
       ========================================================= */

    .border {
      border-width: 1px;
      border-style: solid;
    }

    .border-b {
      border-bottom-width: 1px;
      border-bottom-style: solid;
    }

    .border-b-2 {
      border-bottom-width: 2px;
      border-bottom-style: solid;
    }

    .border-b-4 {
      border-bottom-width: 4px;
      border-bottom-style: solid;
    }

    .border-t {
      border-top-width: 1px;
      border-top-style: solid;
    }

    .border-l-4 {
      border-left-width: 4px;
      border-left-style: solid;
    }

    .h-px {
      height: 1px;
    }

    /* =========================================================
       RADIUS / IMAGE
       ========================================================= */

    .rounded {
      border-radius: 0.25rem;
    }

    .rounded-full {
      border-radius: 9999px;
    }

    .rounded-xl {
      border-radius: 0.75rem;
    }

    .rounded-lg {
      border-radius: 0.5rem;
    }

    .object-cover {
      object-fit: cover;
    }

    /* =========================================================
       OPACITY
       ========================================================= */

    .opacity-30 {
      opacity: 0.3;
    }

    /* =========================================================
       PAGE SIZE — force single A4 page
       ========================================================= */

    @page {
      size: A4;
      margin: 0;
    }

    html, body {
      width: 794px;
      height: 1123px;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }

    /* =========================================================
       PAGE BREAK CONTROL
       ========================================================= */

    section,
    .section-block,
    [data-section],
    .space-y-4 > *,
    .space-y-3 > *,
    .space-y-2 > *,
    tr,
    li,
    .break-inside-avoid {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    /* Keep headings attached to following content. */
    h1,
    h2,
    h3 {
      page-break-after: avoid !important;
      break-after: avoid !important;
    }

    /* =========================================================
       COMPACT MODE
       ========================================================= */

    body.resume-compact .mb-5 {
      margin-bottom: 0.65rem !important;
    }

    body.resume-compact .mb-3 {
      margin-bottom: 0.4rem !important;
    }

    body.resume-compact .space-y-4 > * + * {
      margin-top: 0.5rem !important;
    }

    body.resume-compact .space-y-3 > * + * {
      margin-top: 0.35rem !important;
    }

    body.resume-compact .space-y-2 > * + * {
      margin-top: 0.25rem !important;
    }

    body.resume-compact .py-10 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }

    body.resume-compact .py-8 {
      padding-top: 1.25rem !important;
      padding-bottom: 1.25rem !important;
    }

    body.resume-compact .py-6 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }

    body.resume-compact .py-5 {
      padding-top: 0.75rem !important;
      padding-bottom: 0.75rem !important;
    }

    body.resume-compact .pt-8 {
      padding-top: 1.25rem !important;
    }

    body.resume-compact .px-10 {
      padding-left: 1.75rem !important;
      padding-right: 1.75rem !important;
    }

    body.resume-compact .px-8 {
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
    }

    /* =========================================================
       PDF SAFETY
       ========================================================= */

    img {
      max-width: 100%;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul,
    ol {
      list-style: none;
    }

    p,
    span,
    li {
      overflow-wrap: anywhere;
    }
  </style>
</head>

<body class="${isCompact ? 'resume-compact' : ''}">
  ${body}
</body>
</html>`;
}