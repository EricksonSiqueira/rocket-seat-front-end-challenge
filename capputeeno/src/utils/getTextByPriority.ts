import { PriorityType } from '@/types/FilterTypes';

export const getTextByPriority = (priorityType: PriorityType) => {
  if (priorityType === PriorityType.POPULARITY) return 'Mais Vendidos';
  if (priorityType === PriorityType.MAJOR_PRICE) return 'Preço: Maior - menor';
  if (priorityType === PriorityType.MINOR_PRICE) return 'Preço: Menor - maior';

  return 'Novidades';
};
