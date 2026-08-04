// Карта интеграций. Контур — из реального кейса (восстановление и запуск API-интеграции).
// Остальные узлы и протоколы — по-прежнему TODO, кроме того, что уже подтверждено в кейсах.

export type IntegrationNode = {
  name: string;
  kind: 'external' | 'internal';
  note: string;
};

export const integrationNodes: IntegrationNode[] = [
  { name: 'ФГИС «Зерно»', kind: 'external', note: 'TODO: протокол/формат обмена, частота' },
  { name: 'ЭТрН', kind: 'external', note: 'ЭТрН, ЭПЛ, СДИЗ — роуминг между операторами ЭДО' },
  { name: 'Контур', kind: 'external', note: 'Получение транспортных накладных через API' },
  { name: 'Астрал', kind: 'external', note: 'TODO: протокол/формат обмена, частота' },
  { name: 'ГЛОНАСС-провайдер', kind: 'external', note: 'Антифрод-задача — какой именно провайдер, TODO' },
  { name: 'SOAP-партнёры', kind: 'external', note: 'TODO: кто именно' },
  { name: 'Ядро системы (Порт Транзит)', kind: 'internal', note: 'TODO: как называется система/платформа' },
];
