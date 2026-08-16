import type { ResumeData } from '@/types/resume';

/** Format a month-year string like "2022-03" → "Mar 2022" */
export function fmtDate(val?: string): string {
  if (!val) return '';
  const [y, m] = val.split('-');
  if (!y) return val;
  if (!m) return y;
  const month = new Date(Number(y), Number(m) - 1).toLocaleString('en-US', { month: 'short' });
  return `${month} ${y}`;
}

/** Build date-range string */
export function dateRange(start: string, end: string, current: boolean): string {
  const s = fmtDate(start);
  const e = current ? 'Present' : fmtDate(end);
  if (s && e) return `${s} – ${e}`;
  return s || e;
}

/** Split newline-separated bullets into an array */
export function bullets(text: string): string[] {
  return text
    .split('\n')
    .map((l) => l.replace(/^[\-•*]\s*/, '').trim())
    .filter(Boolean);
}

export type TemplateProps = {
  data: ResumeData;
};
