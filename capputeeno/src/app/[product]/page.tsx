'use client';

import { DefaultPageLayout } from '@/components/DefaultPageLayout';
import GoBackLink from '@/components/GoBackLink';
import ProductInfo from '@/components/ProductInfo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProductProps {
  params: {
    product: string;
  };
}

export default function Product({ params }: ProductProps) {
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
