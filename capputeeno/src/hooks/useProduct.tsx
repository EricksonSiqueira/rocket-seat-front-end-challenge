import { Product } from '@/types/Product';
import { ProductFetchResponse } from '@/types/ProductResponse';
import { fetcher } from '@/utils/fecher';
import { useQuery } from '@tanstack/react-query';
import { camelizeKeys } from 'humps';

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
    queryKey: ['product'],
  });

  const camelizedData = camelizeKeys(
    data?.data?.data?.Product
  ) as unknown as Product;

  return { data: camelizedData };
}
