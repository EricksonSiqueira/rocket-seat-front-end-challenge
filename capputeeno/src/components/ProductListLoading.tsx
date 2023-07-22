import { styled } from 'styled-components';
import { memo } from 'react';
import Skeleton from './Skeleton';
import CardSkeleton from './CardSkeleton';

const ProductListLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  width: 100%;
  flex-wrap: wrap;
  margin: 32px 0;
`;

function ProductListLoading() {
  return (
    <ProductListLoadingContainer>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </ProductListLoadingContainer>
  );
}

export default memo(ProductListLoading);
