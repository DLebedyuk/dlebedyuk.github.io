// Тексты интерфейса и заголовки секций. Правило для заголовков: eyebrow — короткое имя
// секции на языке страницы, title — отдельная мысль, которая eyebrow не повторяет.

export type Locale = 'ru' | 'en';

const ru = {
  htmlLang: 'ru',
  siteTitleSuffix: 'Technical Project Manager',
  nav: {
    about: 'Обо мне',
    cases: 'Кейсы',
    experience: 'Опыт',
    education: 'Образование',
    projects: 'Проекты',
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
  projects: {
    eyebrow: 'Проекты',
    title: 'Pet-проекты и open source',
    description:
      'Реальные репозитории с github.com/DLebedyuk — в основном ранние, учебные. Показывают стиль, а не рабочий стек.',
    fork: 'форк',
  },
  skills: { eyebrow: 'Навыки', title: 'Стек и области' },
  achievements: {
    eyebrow: 'Результаты',
    title: 'Что удалось довести до конца',
    descriptionDraft: 'TODO: цифры и метрики — самая убедительная часть портфолио, а сейчас самая пустая.',
  },
  contact: {
    eyebrow: 'Контакты',
    title: 'Обсудим проект?',
    text: 'Пишите на почту или в Telegram — отвечу быстро.',
    telegram: 'Telegram',
    linkedin: 'LinkedIn',
  },
  footer: { built: 'Собрано на Next.js + Tailwind + Framer Motion' },
};

export type UI = typeof ru;

const en: UI = {
  htmlLang: 'en',
  siteTitleSuffix: 'Technical Project Manager',
  nav: {
    about: 'About',
    cases: 'Case studies',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
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
  projects: {
    eyebrow: 'Projects',
    title: 'Pet projects and open source',
    description:
      'Real repositories from github.com/DLebedyuk — mostly early, educational ones. They show style, not my working stack.',
    fork: 'fork',
  },
  skills: { eyebrow: 'Skills', title: 'Stack and areas' },
  achievements: {
    eyebrow: 'Results',
    title: 'What I got over the line',
    descriptionDraft: 'TODO: numbers and metrics — the most convincing part of a portfolio, and currently the emptiest.',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk",
    text: 'Write to me by email or on Telegram — I reply quickly.',
    telegram: 'Telegram',
    linkedin: 'LinkedIn',
  },
  footer: { built: 'Built with Next.js + Tailwind + Framer Motion' },
};

export const ui: Record<Locale, UI> = { ru, en };
