import { showDrafts } from '@/lib/config';
import { profile } from './profile';
import { keySkills, enjoySolving } from './profile';
import { caseStudies, caseStudyCategories, type CaseStudy, type CaseStudyCategory } from './case-studies';
import { skillCategories } from './skills';
import { workRu, workEn, educationRu, educationEn, coursesRu, coursesEn, cvSkillsRu, cvSkillsEn, linkedin, type WorkItem, type EducationItem, type CourseItem } from './cv';
import { projects } from './projects';
import { achievements } from './achievements';
import { ui, type Locale, type UI } from './ui';
import {
  profileEn,
  keySkillsEn,
  enjoySolvingEn,
  categoriesEn,
  caseStudiesEn,
  skillsEn,
  projectsEn,
  achievementsEn,
} from './en';

export type { Locale } from './ui';

const hasTodo = (s: string) => s.includes('TODO');

/** Убирает TODO-заглушки (только в публичном режиме). */
function clean(s: string): string {
  if (showDrafts) return s;
  const t = s.trim();
  if (t.startsWith('TODO')) return '';
  return t.replace(/\s*[—-]\s*TODO[\s\S]*$/, '').trim();
}

export type SiteContent = {
  locale: Locale;
  showDrafts: boolean;
  ui: UI;
  profile: {
    name: string;
    role: string;
    tagline: string;
    summary: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    telegram: string;
    resume: { ru: string; en: string };
  };
  keySkills: string[];
  enjoySolving: { title: string; description: string }[];
  categories: { id: CaseStudyCategory; label: string; description: string }[];
  caseStudies: CaseStudy[];
  skillCategories: { title: string; items: string[] }[];
  timeline: WorkItem[];
  education: EducationItem[];
  courses: CourseItem[];
  projects: { name: string; url: string; language: string | null; isFork: boolean; description: string }[];
  achievements: { metric: string; label: string; context: string }[];
};

const caseFields = [
  'title',
  'oneLiner',
  'context',
  'problem',
  'whyHard',
  'role',
  'decisions',
  'tradeoffs',
  'outcome',
  'learned',
] as const;

export function getContent(locale: Locale): SiteContent {
  const en = locale === 'en';

  // --- case studies
  let cases: CaseStudy[] = caseStudies.map((cs) => {
    const tr = en ? caseStudiesEn[cs.slug] ?? {} : {};
    const merged: CaseStudy = { ...cs };
    for (const f of caseFields) {
      const v = (tr as Record<string, string | undefined>)[f];
      merged[f] = v ?? (en && hasTodo(cs[f]) ? 'TODO' : cs[f]);
    }
    merged.draftNote = (tr.draftNote as string | undefined) ?? cs.draftNote;
    merged.technologies = tr.technologies ?? cs.technologies;
    return merged;
  });

  if (!showDrafts) {
    cases = cases
      .filter((c) => !hasTodo(c.context) && c.context.trim() !== '')
      .map((c) => {
        const out = { ...c, draft: false, draftNote: '' };
        for (const f of caseFields) out[f] = clean(c[f]);
        return out;
      });
  }

  // --- skills
  let skills = skillCategories.map((cat) => {
    const tr = en ? skillsEn[cat.title] : undefined;
    return { title: tr?.title ?? cat.title, items: tr?.items ?? cat.items };
  });
  skills = [...skills, ...(en ? cvSkillsEn : cvSkillsRu)];
  if (!showDrafts) {
    skills = skills
      .map((c) => ({ ...c, items: c.items.filter((i) => !hasTodo(i)) }))
      .filter((c) => c.items.length > 0);
  }

  // --- projects
  const prs = projects.map((p) => ({
    ...p,
    description: clean(en ? projectsEn[p.name] ?? p.description : p.description),
  }));

  // --- achievements
  let ach = achievements.map((a, i) => ({
    ...a,
    label: en ? achievementsEn[i]?.label ?? a.label : a.label,
    context: en ? achievementsEn[i]?.context ?? a.context : a.context,
  }));
  if (!showDrafts) ach = ach.filter((a) => !hasTodo(a.metric));

  return {
    locale,
    showDrafts,
    ui: ui[locale],
    profile: {
      name: en ? 'Daria Lebedyuk' : profile.name,
      role: profile.role,
      tagline: en ? profileEn.tagline : profile.tagline,
      summary: en ? profileEn.summary : profile.summary,
      location: en ? profileEn.location : profile.location,
      email: profile.email,
      github: profile.github,
    linkedin,
      telegram: profile.telegram,
      resume: profile.resume,
    },
    keySkills: en ? keySkillsEn : keySkills,
    enjoySolving: enjoySolving.map((e, i) => ({
      title: e.title,
      description: en ? enjoySolvingEn[i] ?? e.description : e.description,
    })),
    categories: caseStudyCategories.map((c) => ({
      id: c.id,
      label: en ? categoriesEn[c.id].label : c.label,
      description: en ? categoriesEn[c.id].description : c.description,
    })),
    caseStudies: cases,
    skillCategories: skills,
    timeline: en ? workEn : workRu,
    education: en ? educationEn : educationRu,
    courses: en ? coursesEn : coursesRu,
    projects: prs,
    achievements: ach,
  };
}
