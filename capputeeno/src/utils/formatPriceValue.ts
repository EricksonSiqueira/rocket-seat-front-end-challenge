export const formatPriceValue = (valor: number) =>
  `R$ ${Math.floor(valor / 100)},${(valor % 100).toString().padStart(2, '0')}`;
