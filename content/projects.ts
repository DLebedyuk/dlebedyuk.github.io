// Данные реальные — собраны с github.com/DLebedyuk (профиль публичный, 13 репозиториев,
// показаны 6 "popular", остальные 7 не подтягивались GitHub UI без JS-рендера).
// TODO: если среди непоказанных репозиториев есть что-то более показательное,
// чем студенческие/учебные — пришли ссылку, добавлю отдельной карточкой.
// TODO: заполнить описания своими словами (текущие — по названию репо и языку, без выдумок).

export type Project = {
  name: string;
  url: string;
  language: string | null;
  isFork: boolean;
  description: string;
};

export const projects: Project[] = [
  {
    name: 'StartGit',
    url: 'https://github.com/DLebedyuk/StartGit',
    language: null,
    isFork: false,
    description: 'TODO: описание — язык/стек GitHub не показал, нужно уточнить у себя.',
  },
  {
    name: 'Chemicals',
    url: 'https://github.com/DLebedyuk/Chemicals',
    language: 'Jupyter Notebook',
    isFork: false,
    description: 'TODO: описание — судя по названию, работа с данными/расчётами в Jupyter.',
  },
  {
    name: 'ruby_koans',
    url: 'https://github.com/DLebedyuk/ruby_koans',
    language: 'Ruby',
    isFork: true,
    description: 'Форк учебного курса Edgecase Ruby Koans — практика по Ruby.',
  },
  {
    name: 'primitives',
    url: 'https://github.com/DLebedyuk/primitives',
    language: 'Ruby',
    isFork: true,
    description: 'Форк учебного репозитория mmcs-ruby — практика по Ruby.',
  },
  {
    name: 'CompGraph',
    url: 'https://github.com/DLebedyuk/CompGraph',
    language: 'Pascal',
    isFork: false,
    description: 'Учебный проект (sfedu) — TODO: уточнить, что именно реализовано.',
  },
  {
    name: 'PythonCalculator',
    url: 'https://github.com/DLebedyuk/PythonCalculator',
    language: 'Python',
    isFork: false,
    description: 'TODO: описание — калькулятор на Python, детали уточнить.',
  },
];

export const githubStats = {
  username: 'DLebedyuk',
  profileUrl: 'https://github.com/DLebedyuk',
  publicRepos: 13,
  followers: 0,
  following: 1,
  achievements: ['Arctic Code Vault Contributor'],
};
