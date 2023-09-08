'use client';

import FilterBar from '@/components/FilterBar';
import { ProductsList } from '@/components/ProductsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultPageLayout } from '@/components/DefaultPageLayout';
import ProductPagination from '@/components/ProductPagination';

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <DefaultPageLayout>
        <FilterBar />
        <ProductPagination productsPerPage={12} />
        <ProductsList />
      </DefaultPageLayout>
    </QueryClientProvider>
  );
}
