import { ProductsFetchResponse } from '@/types/ProductsResponse';
import { useQuery } from '@tanstack/react-query';
import { camelizeKeys } from 'humps';
import { useFilter } from './useFilter';
import { mountQuery } from '@/utils/graphQLFilters';
import { useDeferredValue } from 'react';
import { fetcher } from '@/utils/fecher';
import { Product } from '@/types/Product';

const ONE_MINUTE = 1000 * 60 * 1;

export function useProducts() {
  const { type, priority, search, page } = useFilter();
  const query = mountQuery(type, priority, page);
  const searchDeferred = useDeferredValue(search);

  const { data } = useQuery({
    queryFn: () => fetcher<ProductsFetchResponse>(query),
    queryKey: ['products', type, priority, page],
    staleTime: ONE_MINUTE,
  });

  const camelizedData = camelizeKeys(
    data?.data?.data?.allProducts
  ) as Product[];

  const filteredProducts = camelizedData?.filter((product) =>
    product?.name.toLowerCase().includes(searchDeferred?.toLowerCase())
  );

  return {
    data: filteredProducts,
  };
}
