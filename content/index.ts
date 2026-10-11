import { profile } from './profile';
import { keySkills, enjoySolving } from './profile';
import { caseStudies, caseStudyCategories, type CaseStudy, type CaseStudyCategory } from './case-studies';
import { workRu, workEn, educationRu, educationEn, coursesRu, coursesEn, cvSkillsRu, cvSkillsEn, linkedin, type WorkItem, type EducationItem, type CourseItem } from './cv';
import { ui, type Locale, type UI } from './ui';
import {
  profileEn,
  keySkillsEn,
  enjoySolvingEn,
  categoriesEn,
  caseStudiesEn,
} from './en';

export type { Locale } from './ui';

const hasTodo = (s: string) => s.includes('TODO');

/** Убирает TODO-заглушки из ещё не переписанных кейсов. */
function stripTodo(s: string): string {
  const t = s.trim();
  if (t.startsWith('TODO')) return '';
  return t.replace(/\s*[—-]\s*TODO[\s\S]*$/, '').trim();
}

export type SiteContent = {
  locale: Locale;
  ui: UI;
  profile: {
    name: string;
    role: string;
    tagline: string;
    metaDescription: string;
    summary: string;
    about: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    telegram: string;
    resume: { ru: string; en: string };
  };
  facts: string[];
  keySkills: string[];
  enjoySolving: { title: string; description: string }[];
  categories: { id: CaseStudyCategory; label: string; description: string }[];
  caseStudies: CaseStudy[];
  skillCategories: { title: string; items: string[] }[];
  timeline: WorkItem[];
  education: EducationItem[];
  courses: CourseItem[];
};

const caseFields = [
  'title',
  'context',
  'problem',
  'whyHard',
  'role',
  'decisions',
  'tradeoffs',
  'outcome',
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
    merged.technologies = tr.technologies ?? cs.technologies;
    return merged;
  });

  cases = cases
    .filter((c) => !hasTodo(c.context) && c.context.trim() !== '')
    .map((c) => {
      const out = { ...c };
      for (const f of caseFields) out[f] = stripTodo(c[f]);
      return out;
    });

  // --- skills
  const skills = en ? cvSkillsEn : cvSkillsRu;

  return {
    locale,
    ui: ui[locale],
    profile: {
      name: en ? 'Daria Lebedyuk' : profile.name,
      role: profile.role,
      tagline: en ? profileEn.tagline : profile.tagline,
      metaDescription: en ? profileEn.metaDescription : profile.metaDescription,
      summary: en ? profileEn.summary : profile.summary,
      about: en ? profileEn.about : profile.about,
      location: en ? profileEn.location : profile.location,
      email: profile.email,
      github: profile.github,
    linkedin,
      telegram: profile.telegram,
      resume: profile.resume,
    },
    facts: en ? profileEn.facts : profile.facts,
    keySkills: en ? keySkillsEn : keySkills,
    enjoySolving: en ? enjoySolvingEn : enjoySolving,
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
  };
}
