'use client';

import { DefaultPageLayout } from '@/components/DefaultPageLayout';
import GoBackLink from '@/components/GoBackLink';
import ProductInfo from '@/components/ProductInfo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProductProps {}

export default function Product({ params }: any) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <DefaultPageLayout>
        <GoBackLink link="/" />
        <ProductInfo productId={params.product} />
      </DefaultPageLayout>
    </QueryClientProvider>
  );
}
