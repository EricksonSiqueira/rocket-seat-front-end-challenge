export const getProductTypeToPortuguese = (
  type: 't-shirts' | 'mugs' | undefined
) => {
  if (type === 't-shirts') {
    return 'Camiseta';
  }
  return 'Caneca';
};
