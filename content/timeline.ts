// TODO: реальные компании, роли, даты. Ниже — пустой каркас с одной известной точкой (Порт Транзит),
// без придуманных названий компаний и дат.

export type TimelineItem = {
  period: string; // TODO: например "2022 — н.в."
  title: string;
  place: string;
  summary: string;
};

export const timeline: TimelineItem[] = [
  {
    period: 'TODO: даты',
    title: 'TODO: точная должность (судя по позиционированию — Technical Project / Program Manager)',
    place: 'Порт Транзит',
    summary:
      'Интеграции (ЭТрН, Контур, ГЛОНАСС, Астрал), техническое расследование production-инцидентов, ' +
      'координация критических сбоев, продуктовое направление для перевозчиков, автоматизация ' +
      'сертификатов и платежей — детали в Engineering Case Studies выше.',
  },
  {
    period: 'TODO: даты',
    title: 'TODO: должность',
    place: 'TODO: место',
    summary: 'TODO: добавь предыдущие места, если есть.',
  },
];
