import { ProductsFetchResponse } from '@/types/ProductsResponse';
import axios, { AxiosPromise } from 'axios';

export const fetcher = <T>(query: string): AxiosPromise<T> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL as string, { query });
};
