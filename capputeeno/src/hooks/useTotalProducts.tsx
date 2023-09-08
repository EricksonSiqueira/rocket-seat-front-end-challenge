import { ProductsFetchResponse } from '@/types/ProductsResponse';
import { useQuery } from '@tanstack/react-query';
import { useFilter } from './useFilter';
import { getCategoryByType } from '@/utils/graphQLFilters';
import { fetcher } from '@/utils/fecher';

const ONE_MINUTE = 1000 * 60 * 1;

export function useTotalProducts() {
  const { type } = useFilter();
  const categoryType = getCategoryByType(type);
  const categoryFilter = categoryType
    ? `(filter: { category: "${categoryType}"})`
    : '';
  const getAllQuery = `query {
    allProducts${categoryFilter} {
      id
    }
  }`;

  const { data } = useQuery({
    queryFn: () => fetcher<ProductsFetchResponse>(getAllQuery),
    queryKey: ['total', type],
    staleTime: ONE_MINUTE,
  });

  const totalProducts = data?.data?.data?.allProducts?.length;

  return {
    totalProducts,
  };
}
