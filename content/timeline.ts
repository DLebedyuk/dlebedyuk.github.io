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
    title: 'TODO: должность',
    place: 'Порт Транзит',
    summary: 'TODO: 2-3 предложения о зоне ответственности на этом месте.',
  },
  {
    period: 'TODO: даты',
    title: 'TODO: должность',
    place: 'TODO: место',
    summary: 'TODO: добавь предыдущие места, если есть.',
  },
];
