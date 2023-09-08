import { Product } from '@/types/Product';
import { ProductFetchResponse } from '@/types/ProductResponse';
import { fetcher } from '@/utils/fecher';
import { useQuery } from '@tanstack/react-query';
import { camelizeKeys } from 'humps';

const FIVE_MINUTES = 1000 * 60 * 5;

export function useProduct(id: string) {
  const query = `query {
    Product(id: "${id}") {
      id
      name
      price_in_cents
      image_url
      description
      category
    }
  }`;

  const { data } = useQuery({
    queryFn: () => fetcher<ProductFetchResponse>(query),
    queryKey: ['product', id],
    enabled: !!id,
    staleTime: FIVE_MINUTES,
  });

  const camelizedData = camelizeKeys(data?.data?.data?.Product) as Product;

  return { product: camelizedData };
}
