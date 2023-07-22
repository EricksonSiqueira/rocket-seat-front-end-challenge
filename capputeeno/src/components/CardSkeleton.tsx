import { styled } from 'styled-components';
import { memo } from 'react';
import Skeleton from './Skeleton';

const CardSkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px 8px 0px 0px;
  background: white;
  backdrop-filter: blur(10px);
  width: 256px;
  height: 378px;

  .skeletonImage {
    width: 256px;
    height: 300px;
  }

  .skeletonText {
    width: 90%;
    height: 24px;
    margin: 8px;
  }
`;

function CardSkeleton() {
  return (
    <CardSkeletonWrapper>
      <Skeleton className="skeletonImage" />
      <Skeleton className="skeletonText" />
      <Skeleton className="skeletonText" />
    </CardSkeletonWrapper>
  );
}

export default memo(CardSkeleton);
