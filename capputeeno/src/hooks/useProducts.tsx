import { ProductsFetchResponse } from '@/types/ProductsResponse';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { camelizeKeys } from 'humps';

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
    query: `
      query {
        allProducts {
          id
          name
          price_in_cents
          image_url
        }
      }`,
  });
};

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ['products'],
  });

  const camelizedData = camelizeKeys(
    data?.data?.data?.allProducts
  ) as unknown as ProductsFetchResponse['data']['allProducts'];

  return { data: camelizedData };
}
