// Тексты интерфейса и заголовки секций. Правило для заголовков: eyebrow — короткое имя
// секции на языке страницы, title — отдельная мысль, которая eyebrow не повторяет.

export type Locale = 'ru' | 'en';

const ru = {
  htmlLang: 'ru',
  siteTitleSuffix: 'Technical Project / Program Manager',
  nav: {
    about: 'Обо мне',
    cases: 'Кейсы',
    experience: 'Опыт',
    education: 'Образование',
    skills: 'Навыки',
    contact: 'Контакты',
    menu: 'Меню',
    toLight: 'Включить светлую тему',
    toDark: 'Включить тёмную тему',
    switchLang: 'Switch to English',
  },
  hero: { cases: 'Смотреть кейсы', write: 'Написать' },
  resume: { ru: 'Резюме (RU)', en: 'Resume (EN)' },
  about: { eyebrow: 'Обо мне', title: 'Коротко о том, как я работаю', keySkills: 'Ключевые навыки' },
  enjoy: { eyebrow: 'Интересы', title: 'Что мне интересно решать' },
  cases: {
    eyebrow: 'Кейсы',
    title: 'Инженерные истории, а не строчки из Jira',
    descriptionDraft:
      'Контекст, ограничения, решения и компромиссы по каждой задаче. Ни у одной пока нет подтверждённых цифр — это честно помечено на карточке.',
    description: 'Контекст, ограничения, решения и компромиссы по каждой задаче.',
    all: 'Все',
    draft: 'Черновик',
    missing: 'Чего не хватает',
    fields: {
      context: 'Контекст',
      problem: 'Проблема',
      whyHard: 'Почему это было сложно',
      role: 'Моя роль',
      decisions: 'Какие решения принимались',
      tradeoffs: 'Компромиссы',
      outcome: 'Что получилось',
      learned: 'Чему научилась',
    },
  },
  experience: {
    eyebrow: 'Опыт',
    title: 'Где и над чем я работала',
  },
  education: { eyebrow: 'Образование', title: 'Чему и где училась', additional: 'Дополнительное образование' },
  skills: { eyebrow: 'Навыки', title: 'Стек и области' },
  contact: {
    eyebrow: 'Контакты',
    title: 'Обсудим проект?',
    text: 'Пишите на почту или в Telegram — отвечу быстро.',
    telegram: 'Telegram',
    linkedin: 'LinkedIn',
  },
};

export type UI = typeof ru;

const en: UI = {
  htmlLang: 'en',
  siteTitleSuffix: 'Technical Project / Program Manager',
  nav: {
    about: 'About',
    cases: 'Case studies',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    contact: 'Contact',
    menu: 'Menu',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    switchLang: 'Переключить на русский',
  },
  hero: { cases: 'View case studies', write: 'Get in touch' },
  resume: { ru: 'Resume (RU)', en: 'Resume (EN)' },
  about: { eyebrow: 'About', title: 'How I work, in short', keySkills: 'Key skills' },
  enjoy: { eyebrow: 'Focus areas', title: 'Things I enjoy solving' },
  cases: {
    eyebrow: 'Case studies',
    title: 'Engineering stories, not Jira tickets',
    descriptionDraft:
      'Context, constraints, decisions and trade-offs for each task. None has confirmed numbers yet — this is marked on the card.',
    description: 'Context, constraints, decisions and trade-offs for each task.',
    all: 'All',
    draft: 'Draft',
    missing: 'What is missing',
    fields: {
      context: 'Context',
      problem: 'Problem',
      whyHard: 'Why it was hard',
      role: 'My role',
      decisions: 'Decisions made',
      tradeoffs: 'Trade-offs',
      outcome: 'Outcome',
      learned: 'What I learned',
    },
  },
  experience: {
    eyebrow: 'Experience',
    title: "Where I've worked and on what",
  },
  education: { eyebrow: 'Education', title: 'What and where I studied', additional: 'Additional education' },
  skills: { eyebrow: 'Skills', title: 'Stack and areas' },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk",
    text: 'Write to me by email or on Telegram — I reply quickly.',
    telegram: 'Telegram',
    linkedin: 'LinkedIn',
  },
};

export const ui: Record<Locale, UI> = { ru, en };
