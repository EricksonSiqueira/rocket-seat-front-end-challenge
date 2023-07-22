import { FilterType, PriorityType } from '@/types/FilterTypes';

export const getCategoryByType = (type: FilterType) => {
  if (type === FilterType.MUG) {
    return 'mugs';
  }
  if (type === FilterType.SHIRT) {
    return 't-shirts';
  }
  return ``;
};

export const getFieldByPriority = (priority: PriorityType) => {
  if (priority === PriorityType.NEWS) {
    return { field: 'created_at', order: 'ASC' };
  }
  if (priority === PriorityType.MAJOR_PRICE) {
    return { field: 'price_in_cents', order: 'DSC' };
  }
  if (priority === PriorityType.MINOR_PRICE) {
    return { field: 'price_in_cents', order: 'ASC' };
  }

  return { field: 'sales', order: 'DSC' };
};

export const mountQuery = (type: FilterType, priority: PriorityType) => {
  if (type === FilterType.ALL && priority === PriorityType.POPULARITY) {
    return `
      query {
        allProducts {
          id
          name
          price_in_cents
          image_url
        }
      }`;
  }

  const { field, order } = getFieldByPriority(priority);
  const categoryType = getCategoryByType(type);
  const categoryFilter = categoryType
    ? `filter: { category: "${categoryType}"},`
    : '';

  return `query {
    allProducts(${categoryFilter} sortField: "${field}", sortOrder: "${order}") {
      id
      name
      price_in_cents
      image_url
    }
  }`;
};
