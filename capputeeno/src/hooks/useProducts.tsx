import { ProductsFetchResponse } from '@/types/ProductsResponse';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { camelizeKeys } from 'humps';
import { useFilter } from './useFilter';
import { FilterType, PriorityType } from '@/types/FilterTypes';
import {
  getFieldByPriority,
  getCategoryByType,
  mountQuery,
} from '@/utils/graphQLFilters';
import { useDeferredValue } from 'react';

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL as string, { query });
};

export function useProducts() {
  const { type, priority, search } = useFilter();
  const query = mountQuery(type, priority);
  const searchDeferred = useDeferredValue(search);

  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority],
  });

  const camelizedData = camelizeKeys(
    data?.data?.data?.allProducts
  ) as unknown as ProductsFetchResponse['data']['allProducts'];

  const filteredProducts = camelizedData.filter((product) =>
    product?.name.toLowerCase().includes(searchDeferred?.toLowerCase())
  );

  return { data: filteredProducts };
}
