// Карта интеграций — состав узлов взят из систем, которые ты сама назвала (ФГИС «Зерно», ЭТРН,
// Астрал, ГЛОНАСС, SOAP-партнёры). Направления стрелок и протоколы — TODO, я их не знаю.

export type IntegrationNode = {
  name: string;
  kind: 'external' | 'internal';
  note: string; // TODO
};

export const integrationNodes: IntegrationNode[] = [
  { name: 'ФГИС «Зерно»', kind: 'external', note: 'TODO: протокол/формат обмена, частота' },
  { name: 'ЭТРН', kind: 'external', note: 'TODO: протокол/формат обмена, частота' },
  { name: 'Астрал', kind: 'external', note: 'TODO: протокол/формат обмена, частота' },
  { name: 'ГЛОНАСС-провайдер', kind: 'external', note: 'TODO: какой именно провайдер' },
  { name: 'SOAP-партнёры', kind: 'external', note: 'TODO: кто именно' },
  { name: 'Ядро системы (Порт Транзит)', kind: 'internal', note: 'TODO: как называется система/платформа' },
];
