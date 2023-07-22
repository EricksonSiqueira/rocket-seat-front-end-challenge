'use client';

import { useProducts } from '@/hooks/useProducts';
import ProdutctCard from './ProdutctCard';
import { styled } from 'styled-components';
import ProductListLoading from './ProductListLoading';

interface ProductsListProps {}

const ProductsSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 32px;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 32px;
`;

export function ProductsList(props: ProductsListProps) {
  const { data } = useProducts();

  return data === undefined ? (
    <ProductListLoading />
  ) : (
    <ProductsSection>
      {data?.map((product, index) => (
        <ProdutctCard
          key={product?.id}
          image={product?.imageUrl}
          price={product?.priceInCents}
          title={product?.name}
          priority={index < 8}
        />
      ))}
    </ProductsSection>
  );
}
