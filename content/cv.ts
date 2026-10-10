// Данные из резюме (Дарья Лебедюк TPM CV.pdf). Телефон на сайт намеренно не выносим.

export type WorkItem = {
  period: string;
  title: string;
  place: string;
  location: string;
  bullets: { title: string; text: string }[];
};

export type EducationItem = { place: string; city: string; program: string; period: string };
export type CourseItem = { provider: string; name: string };

export const linkedin = 'https://www.linkedin.com/in/daria-lebedyuk-92387a266/';

export const workRu: WorkItem[] = [
  {
    period: 'Сентябрь 2023 — н.в.',
    title: 'Технический менеджер проектов',
    place: 'Порт Транзит',
    location: 'Удалённо',
    bullets: [
      { title: 'Интеграции и API', text: 'Координировала интеграцию нового сервиса с 3 внутренними системами (REST API, включая легаси). Прорабатывала структуру данных, форматы обмена и обработку ошибок совместно с разработчиками.' },
      { title: 'Инциденты и диагностика', text: 'Локализовала ошибки в интеграциях через анализ логов и данных в БД разных сервисов, что позволяло ускорить устранение инцидентов.' },
      { title: 'Декомпозиция задач бизнеса', text: 'Переводила бизнес-задачи в технические решения: формировала требования и архитектуру взаимодействия сервисов. За счёт системной проработки сокращала время обсуждения и реализации задач на 30%.' },
      { title: 'Техническая проработка решений', text: 'Проектировала структуру БД и логику взаимодействия сервисов, определяла распределение данных и ответственности между системами совместно с разработчиками.' },
      { title: 'Документация и процессы', text: 'Выстраивала процессы в legacy-проектах: внедрила регулярные синхронизации, структурировала работу команды и инициировала ведение технической документации. Погружалась в продукт и бизнес-логику, влияя на решения по развитию систем. Обосновала расширение команды для ускорения разработки и снижения нагрузки.' },
      { title: 'Продуктовая экспертиза', text: 'Участвовала в принятии ключевых решений по развитию проекта электронных перевозочных документов, определяла направления развития совместно с бизнесом.' },
    ],
  },
  {
    period: 'Июль 2021 — Февраль 2023',
    title: 'Java-разработчик',
    place: 'IDPay (финтех)',
    location: 'Удалённо',
    bullets: [
      { title: 'Разработка backend Admin API', text: 'Усиливала масштабируемость и отказоустойчивость.' },
      { title: 'Рост нагрузки на 350%', text: 'Оптимизировала код и повысила стабильность.' },
      { title: 'Миграция легаси-кода', text: 'Участвовала в переводе системы на Spring Boot.' },
    ],
  },
];

export const workEn: WorkItem[] = [
  {
    period: 'September 2023 — Present',
    title: 'Technical Project Manager',
    place: 'Port Transit',
    location: 'Remote',
    bullets: [
      { title: 'Integrations and API', text: 'Coordinated the integration of a new service with 3 internal systems (REST API, including legacy). Worked out the data structure, exchange formats and error handling together with developers.' },
      { title: 'Incidents and diagnostics', text: 'Localized errors in integrations by analyzing logs and data in the databases of different services, which sped up incident resolution.' },
      { title: 'Business task decomposition', text: 'Translated business tasks into technical solutions: shaped requirements and the architecture of service interaction. Through systematic elaboration, reduced the time of discussion and implementation of tasks by 30%.' },
      { title: 'Technical solution design', text: 'Designed the database structure and service interaction logic, defined the distribution of data and responsibility between systems together with developers.' },
      { title: 'Documentation and processes', text: "Built processes in legacy projects: introduced regular sync meetings, structured the team's work and initiated technical documentation. Dove into the product and business logic, influencing decisions on system development. Justified expanding the team to speed up development and reduce workload." },
      { title: 'Product expertise', text: 'Took part in key decisions on the development of the electronic transport documents project, defining development directions together with the business.' },
    ],
  },
  {
    period: 'July 2021 — February 2023',
    title: 'Java Developer',
    place: 'IDPay (fintech)',
    location: 'Remote',
    bullets: [
      { title: 'Backend Admin API development', text: 'Strengthened scalability and fault tolerance.' },
      { title: '350% load growth', text: 'Optimized code and improved stability.' },
      { title: 'Legacy code migration', text: 'Took part in migrating the system to Spring Boot.' },
    ],
  },
];

export const educationRu: EducationItem[] = [
  { place: 'Южный Федеральный Университет', city: 'Ростов-на-Дону', program: 'Институт математики, механики и компьютерных наук, бакалавр', period: '2019 — 2023' },
  { place: 'Samsung IT School', city: 'Ростов-на-Дону', program: 'Основы мобильной разработки', period: '2018 — 2019' },
];
export const educationEn: EducationItem[] = [
  { place: 'Southern Federal University', city: 'Rostov-on-Don', program: "Institute of Mathematics, Mechanics and Computer Science, Bachelor's", period: '2019 — 2023' },
  { place: 'Samsung IT School', city: 'Rostov-on-Don', program: 'Fundamentals of Mobile Development', period: '2018 — 2019' },
];

export const coursesRu: CourseItem[] = [
  { provider: 'Яндекс Практикум', name: 'DevOps для эксплуатации и разработки' },
  { provider: 'VK Education', name: 'Основы продакт-менеджмента' },
  { provider: 'Coursera', name: 'Budgeting and Scheduling Projects, Initiating and Planning Projects' },
  { provider: 'Michigan State University (Coursera)', name: 'Data Analytics with R' },
];
export const coursesEn: CourseItem[] = [
  { provider: 'Yandex Practicum', name: 'DevOps for Operations and Development' },
  { provider: 'VK Education', name: 'Fundamentals of Product Management' },
  { provider: 'Coursera', name: 'Budgeting and Scheduling Projects, Initiating and Planning Projects' },
  { provider: 'Michigan State University (Coursera)', name: 'Data Analytics with R' },
];

export const cvSkillsRu = [
  { title: 'Инструменты', items: ['Jira', 'Confluence', 'Notion', 'Miro', 'Lucidchart', 'GanttPRO', 'GitLab CI/CD', 'Postman', 'Swagger'] },
  { title: 'Технические навыки', items: ['SQL', 'API', 'REST', 'JSON', 'XML', 'интеграции систем', 'клиент-серверная архитектура'] },
  { title: 'Методологии', items: ['Agile', 'Scrum', 'Kanban'] },
  { title: 'Компетенции', items: ['управление проектами', 'кросс-командное взаимодействие', 'работа с требованиями', 'техническая документация', 'управление рисками', 'приоритизация'] },
  { title: 'Языки', items: ['Русский (родной)', 'Английский (B2)', 'Французский (B2)'] },
];
export const cvSkillsEn = [
  { title: 'Tools', items: ['Jira', 'Confluence', 'Notion', 'Miro', 'Lucidchart', 'GanttPRO', 'GitLab CI/CD', 'Postman', 'Swagger'] },
  { title: 'Technical skills', items: ['SQL', 'API', 'REST', 'JSON', 'XML', 'systems integration', 'client-server architecture'] },
  { title: 'Methodologies', items: ['Agile', 'Scrum', 'Kanban'] },
  { title: 'Competencies', items: ['project management', 'cross-team collaboration', 'requirements management', 'technical documentation', 'risk management', 'prioritization'] },
  { title: 'Languages', items: ['Russian (native)', 'English (B2)', 'French (B2)'] },
];
