import { ProductsFetchResponse } from '@/types/ProductsResponse';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { camelizeKeys } from 'humps';
import { useFilter } from './useFilter';
import { mountQuery } from '@/utils/graphQLFilters';
import { useDeferredValue } from 'react';
import { fetcher } from '@/utils/fecher';
import { Product } from '@/types/Product';

const ONE_MINUTE = 1000 * 60 * 1;

export function useProducts() {
  const { type, priority, search } = useFilter();
  const query = mountQuery(type, priority);
  const searchDeferred = useDeferredValue(search);

  const { data } = useQuery({
    queryFn: () => fetcher<ProductsFetchResponse>(query),
    queryKey: ['products', type, priority],
    staleTime: ONE_MINUTE,
  });

  const camelizedData = camelizeKeys(
    data?.data?.data?.allProducts
  ) as unknown as Product[];

  const filteredProducts = camelizedData?.filter((product) =>
    product?.name.toLowerCase().includes(searchDeferred?.toLowerCase())
  );

  return { data: filteredProducts };
}
