// TODO: реальные измеримые достижения (цифры, метрики, "сделала X — стало Y").
// Ничего не придумано — пустые слоты со структурой, чтобы легче было заполнять.

export type Achievement = {
  metric: string; // TODO: например "-40%"
  label: string; // TODO: например "время обработки инцидентов"
  context: string; // TODO: короткое пояснение, откуда цифра
};

export const achievements: Achievement[] = [
  { metric: 'TODO', label: 'TODO', context: 'TODO' },
  { metric: 'TODO', label: 'TODO', context: 'TODO' },
  { metric: 'TODO', label: 'TODO', context: 'TODO' },
];
